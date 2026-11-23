"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import {
  RotateCcw,
  Sun,
  Theater,
  Trees,
  ZoomIn,
  ZoomOut,
  Box,
} from "lucide-react";
import {
  applyHeritageEnvironment,
  disposeObject3D,
  isWebGLAvailable,
  loadCachedGltfScene,
  normalizeModelTransform,
} from "@/lib/threeHeritageUtils";
import { HERITAGE_3D_MODELS } from "@/data/models3dRegistry";

export type StageSubject = "all" | "tuong" | "dam-san";
export type StageLighting = "court-stage" | "storybox-backlight";

interface HeritageStage3DCanvasProps {
  initialSubject?: StageSubject;
  className?: string;
}

const DEFAULT_CAMERA_POS: Record<StageSubject, [number, number, number]> = {
  all: [0.05, 2.55, 6.25],
  tuong: [0.15, 1.95, 4.15],
  "dam-san": [-0.1, 2.05, 4.25],
};

const DEFAULT_TARGET: Record<StageSubject, [number, number, number]> = {
  all: [0, 0.72, 0],
  tuong: [0, 0.78, 0],
  "dam-san": [0, 0.72, 0],
};

export const HeritageStage3DCanvas: React.FC<HeritageStage3DCanvasProps> = ({
  initialSubject = "all",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [subject, setSubject] = useState<StageSubject>(initialSubject);
  const [lightingMode, setLightingMode] =
    useState<StageLighting>("court-stage");
  const [modelsLoadedCount, setModelsLoadedCount] = useState(0);
  const [webglSupported, setWebglSupported] = useState(true);

  const subjectRef = useRef<StageSubject>(subject);
  const lightingRef = useRef<StageLighting>(lightingMode);
  const resetCameraFnRef = useRef<(() => void) | null>(null);
  const zoomFnRef = useRef<((factor: number) => void) | null>(null);

  useEffect(() => {
    subjectRef.current = subject;
    resetCameraFnRef.current?.();
  }, [subject]);

  useEffect(() => {
    lightingRef.current = lightingMode;
  }, [lightingMode]);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setWebglSupported(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    let isVisible = true;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#1A0D0B");
    scene.fog = new THREE.FogExp2("#1A0D0B", 0.048);

    const width = Math.max(container.clientWidth, 320);
    const height = Math.max(container.clientHeight, 240);

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 60);
    camera.position.set(...DEFAULT_CAMERA_POS[subjectRef.current]);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const envTex = applyHeritageEnvironment(renderer, scene, 0.62);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enableZoom = false; // Prevent wheel trap when user scrolls page
    controls.enablePan = false;
    controls.minDistance = 2.0;
    controls.maxDistance = 8.2;
    controls.minPolarAngle = 0.35;
    controls.maxPolarAngle = Math.PI * 0.485;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.72;
    controls.target.set(...DEFAULT_TARGET[subjectRef.current]);

    let resumeAutoRotateTimer: ReturnType<typeof setTimeout> | null = null;
    const onControlStart = () => {
      controls.autoRotate = false;
      if (resumeAutoRotateTimer) clearTimeout(resumeAutoRotateTimer);
    };
    const onControlEnd = () => {
      if (resumeAutoRotateTimer) clearTimeout(resumeAutoRotateTimer);
      resumeAutoRotateTimer = setTimeout(() => {
        if (!disposed) controls.autoRotate = true;
      }, 3200);
    };
    controls.addEventListener("start", onControlStart);
    controls.addEventListener("end", onControlEnd);

    // Camera reset & explicit button zoom
    const desiredCamPos = new THREE.Vector3(...DEFAULT_CAMERA_POS[subjectRef.current]);
    const desiredTarget = new THREE.Vector3(...DEFAULT_TARGET[subjectRef.current]);
    let isCameraLerping = false;

    resetCameraFnRef.current = () => {
      const mode = subjectRef.current;
      desiredCamPos.set(...DEFAULT_CAMERA_POS[mode]);
      desiredTarget.set(...DEFAULT_TARGET[mode]);
      isCameraLerping = true;
      controls.autoRotate = true;
    };

    zoomFnRef.current = (factor: number) => {
      const offset = camera.position.clone().sub(controls.target);
      const nextDist = THREE.MathUtils.clamp(
        offset.length() * factor,
        controls.minDistance,
        controls.maxDistance
      );
      offset.setLength(nextDist);
      camera.position.copy(controls.target).add(offset);
      isCameraLerping = false;
    };

    // Lights
    const hemiLight = new THREE.HemisphereLight("#FFF3DF", "#2B1410", 0.55);
    scene.add(hemiLight);

    const keyLight = new THREE.SpotLight("#FFE2AD", 26, 20, Math.PI * 0.28, 0.48, 1.4);
    keyLight.position.set(2.6, 5.2, 3.8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    const crimsonRimLight = new THREE.PointLight("#DC2626", 6.5, 14, 1.5);
    crimsonRimLight.position.set(-3.0, 2.2, -2.5);
    scene.add(crimsonRimLight);

    const backlightSunLight = new THREE.PointLight("#F59E0B", 4.5, 12, 1.5);
    backlightSunLight.position.set(1.4, 2.0, -2.6);
    scene.add(backlightSunLight);

    // Shared Root
    const stageRoot = new THREE.Group();
    scene.add(stageRoot);

    // Stage Floor & Carved Heritage Plinth
    const floorGroup = new THREE.Group();
    stageRoot.add(floorGroup);

    const floorMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(3.75, 4.05, 0.24, 64),
      new THREE.MeshStandardMaterial({
        color: "#22110E",
        roughness: 0.72,
        metalness: 0.12,
      })
    );
    floorMesh.position.y = -0.12;
    floorMesh.receiveShadow = true;
    floorGroup.add(floorMesh);

    const goldTrimRing = new THREE.Mesh(
      new THREE.TorusGeometry(3.76, 0.032, 12, 72),
      new THREE.MeshStandardMaterial({
        color: "#C59B27",
        roughness: 0.34,
        metalness: 0.78,
      })
    );
    goldTrimRing.rotation.x = Math.PI / 2;
    goldTrimRing.position.y = 0.01;
    floorGroup.add(goldTrimRing);

    const stageGrid = new THREE.GridHelper(6.6, 16, "#7A1C18", "#3D1B17");
    stageGrid.position.y = 0.005;
    floorGroup.add(stageGrid);

    // =========================================================================
    // DỰ ÁN 01: SÂN KHẤU TUỒNG ĐỒ "HUYỆN ĐƯỜNG" GROUP
    // =========================================================================
    const tuongGroup = new THREE.Group();
    tuongGroup.position.x = subjectRef.current === "all" ? -1.62 : 0;
    stageRoot.add(tuongGroup);

    const tuongPlinth = new THREE.Mesh(
      new THREE.CylinderGeometry(0.98, 1.08, 0.16, 40),
      new THREE.MeshStandardMaterial({
        color: "#4A1210",
        roughness: 0.45,
        metalness: 0.18,
      })
    );
    tuongPlinth.position.y = 0.08;
    tuongPlinth.receiveShadow = true;
    tuongPlinth.castShadow = true;
    tuongGroup.add(tuongPlinth);

    const tuongRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.0, 0.02, 10, 48),
      new THREE.MeshStandardMaterial({
        color: "#C59B27",
        roughness: 0.3,
        metalness: 0.85,
      })
    );
    tuongRing.rotation.x = Math.PI / 2;
    tuongRing.position.y = 0.16;
    tuongGroup.add(tuongRing);

    // Pedestal stand rod for Tuồng Mask
    const standPillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.055, 0.52, 16),
      new THREE.MeshStandardMaterial({
        color: "#2C1612",
        roughness: 0.5,
        metalness: 0.3,
      })
    );
    standPillar.position.set(0, 0.4, 0.04);
    standPillar.castShadow = true;
    tuongGroup.add(standPillar);

    const maskPivot = new THREE.Group();
    maskPivot.position.set(0, 0.86, 0.14);
    tuongGroup.add(maskPivot);

    // =========================================================================
    // DỰ ÁN 02: HỘP CHUYỆN KỂ "SỬ THI ĐĂM SĂN" GROUP
    // =========================================================================
    const damSanGroup = new THREE.Group();
    damSanGroup.position.x = subjectRef.current === "all" ? 1.54 : 0;
    stageRoot.add(damSanGroup);

    // Diorama Timber Crate Base
    const dioramaBase = new THREE.Mesh(
      new THREE.BoxGeometry(2.05, 0.2, 1.62),
      new THREE.MeshStandardMaterial({
        color: "#2E1A13",
        roughness: 0.7,
        metalness: 0.1,
      })
    );
    dioramaBase.position.y = 0.1;
    dioramaBase.castShadow = true;
    dioramaBase.receiveShadow = true;
    damSanGroup.add(dioramaBase);

    const earthBed = new THREE.Mesh(
      new THREE.BoxGeometry(1.9, 0.05, 1.46),
      new THREE.MeshStandardMaterial({
        color: "#52321E",
        roughness: 0.88,
      })
    );
    earthBed.position.y = 0.21;
    earthBed.receiveShadow = true;
    damSanGroup.add(earthBed);

    // Golden Sun Goddess Backdrop Disc
    const sunDisc = new THREE.Mesh(
      new THREE.CircleGeometry(0.46, 36),
      new THREE.MeshStandardMaterial({
        color: "#FBBF24",
        emissive: "#F59E0B",
        emissiveIntensity: 1.15,
        roughness: 0.3,
        side: THREE.DoubleSide,
      })
    );
    sunDisc.position.set(0.35, 1.32, -0.64);
    damSanGroup.add(sunDisc);

    const sunHalo = new THREE.Mesh(
      new THREE.RingGeometry(0.5, 0.62, 36),
      new THREE.MeshStandardMaterial({
        color: "#FDE68A",
        emissive: "#D97706",
        emissiveIntensity: 0.7,
        transparent: true,
        opacity: 0.65,
        side: THREE.DoubleSide,
      })
    );
    sunHalo.position.set(0.35, 1.32, -0.645);
    damSanGroup.add(sunHalo);

    // Hero weapon rack mount for Đăm Săn shield + golden sword
    const weaponStandGroup = new THREE.Group();
    weaponStandGroup.position.set(0.56, 0.24, 0.44);
    damSanGroup.add(weaponStandGroup);

    // Track loaded promises to report progress
    const loadAsset = async (
      url: string,
      targetSize: number,
      onReady: (model: THREE.Group) => void
    ) => {
      try {
        const sceneClone = await loadCachedGltfScene(url);
        if (disposed) {
          disposeObject3D(sceneClone);
          return;
        }
        const wrapped = normalizeModelTransform(sceneClone, {
          targetSize,
          anchor: "bottom",
        });
        onReady(wrapped);
        setModelsLoadedCount((c) => c + 1);
        renderer.render(scene, camera);
      } catch (err) {
        console.warn("Unable to load 3D model:", url, err);
      }
    };

    // Load genuine open-license GLB / GLTF assets for Huyện đường
    void loadAsset(HERITAGE_3D_MODELS.tuongMask.url, 1.15, (m) => {
      const box = new THREE.Box3().setFromObject(m);
      const c = new THREE.Vector3();
      box.getCenter(c);
      m.position.set(-c.x, -c.y, -c.z);
      maskPivot.add(m);
    });

    void loadAsset(HERITAGE_3D_MODELS.stagePavilion.url, 1.38, (m) => {
      m.position.set(0, 0.16, -0.5);
      tuongGroup.add(m);
    });

    void loadAsset(HERITAGE_3D_MODELS.courtBook.url, 0.44, (m) => {
      m.position.set(-0.56, 0.16, 0.42);
      m.rotation.y = 0.45;
      tuongGroup.add(m);
    });

    void loadAsset(HERITAGE_3D_MODELS.courtScroll.url, 0.46, (m) => {
      m.position.set(0.55, 0.16, 0.44);
      m.rotation.y = -0.35;
      tuongGroup.add(m);
    });

    void loadAsset(HERITAGE_3D_MODELS.courtHammer.url, 0.36, (m) => {
      m.position.set(0.52, 0.17, -0.08);
      m.rotation.y = 0.6;
      tuongGroup.add(m);
    });

    void loadAsset(HERITAGE_3D_MODELS.brassLantern.url, 0.32, (m) => {
      m.position.set(-0.58, 0.16, -0.14);
      tuongGroup.add(m);
    });

    // Load genuine open-license GLB assets for Sử thi Đăm Săn
    void loadAsset(HERITAGE_3D_MODELS.damSanHouse.url, 1.15, (m) => {
      m.position.set(-0.42, 0.23, 0.02);
      m.rotation.y = 0.36;
      damSanGroup.add(m);
    });

    void loadAsset(HERITAGE_3D_MODELS.mountainRange.url, 1.55, (m) => {
      m.position.set(0.22, 0.23, -0.45);
      damSanGroup.add(m);
    });

    void loadAsset(HERITAGE_3D_MODELS.pineTree.url, 0.85, (m) => {
      m.position.set(0.76, 0.23, -0.15);
      damSanGroup.add(m);
    });

    void loadAsset(HERITAGE_3D_MODELS.forestTree.url, 0.92, (m) => {
      m.position.set(-0.82, 0.23, -0.36);
      damSanGroup.add(m);
    });

    void loadAsset(HERITAGE_3D_MODELS.campfire.url, 0.36, (m) => {
      m.position.set(0.25, 0.23, 0.42);
      damSanGroup.add(m);
    });

    void loadAsset(HERITAGE_3D_MODELS.damSanShield.url, 0.42, (m) => {
      m.position.set(0, 0.15, 0);
      m.rotation.x = -0.3;
      m.rotation.y = 0.2;
      weaponStandGroup.add(m);
    });

    void loadAsset(HERITAGE_3D_MODELS.damSanSword.url, 0.56, (m) => {
      m.position.set(0.16, 0.08, 0.02);
      m.rotation.z = -0.38;
      weaponStandGroup.add(m);
    });

    // ResizeObserver for crisp adaptive DPI
    const resizeObserver = new ResizeObserver((entries) => {
      if (disposed) return;
      for (const entry of entries) {
        const w = Math.max(entry.contentRect.width, 200);
        const h = Math.max(entry.contentRect.height, 160);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
        renderer.render(scene, camera);
      }
    });
    resizeObserver.observe(container);

    // IntersectionObserver so off-screen hero stage saves GPU and redraws immediately on return
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !disposed) {
          renderer.render(scene, camera);
        }
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    const timer = new THREE.Timer();
    timer.connect(document);

    renderer.render(scene, camera);
    renderer.setAnimationLoop(() => {
      if (disposed || !isVisible) return;
      timer.update();
      const dt = Math.min(timer.getDelta(), 0.1);
      const elapsed = timer.getElapsed();

      const activeSub = subjectRef.current;
      const activeLight = lightingRef.current;

      // Layout positioning & smooth transitions
      if (activeSub === "all") {
        tuongGroup.visible = true;
        damSanGroup.visible = true;
        tuongGroup.position.x = THREE.MathUtils.lerp(tuongGroup.position.x, -1.62, 0.18);
        damSanGroup.position.x = THREE.MathUtils.lerp(damSanGroup.position.x, 1.54, 0.18);
      } else if (activeSub === "tuong") {
        tuongGroup.visible = true;
        damSanGroup.visible = false;
        tuongGroup.position.x = THREE.MathUtils.lerp(tuongGroup.position.x, 0, 0.2);
      } else {
        tuongGroup.visible = false;
        damSanGroup.visible = true;
        damSanGroup.position.x = THREE.MathUtils.lerp(damSanGroup.position.x, 0, 0.2);
      }

      // Gentle theatrical breathing on Tuồng mask & glowing Sun halo
      maskPivot.rotation.y = Math.sin(elapsed * 0.9) * 0.12;
      maskPivot.position.y = 0.86 + Math.sin(elapsed * 1.4) * 0.025;
      sunDisc.scale.setScalar(1 + Math.sin(elapsed * 2.1) * 0.03);
      sunHalo.rotation.z = elapsed * 0.25;

      // Dynamic Lighting modes
      if (activeLight === "court-stage") {
        keyLight.intensity = THREE.MathUtils.lerp(keyLight.intensity, 28, 0.08);
        keyLight.color.set("#FFE4B5");
        crimsonRimLight.intensity = THREE.MathUtils.lerp(crimsonRimLight.intensity, 7.5, 0.08);
        backlightSunLight.intensity = THREE.MathUtils.lerp(backlightSunLight.intensity, 4.2, 0.08);
        scene.environmentIntensity = THREE.MathUtils.lerp(scene.environmentIntensity, 0.65, 0.08);
      } else {
        keyLight.intensity = THREE.MathUtils.lerp(keyLight.intensity, 12, 0.08);
        keyLight.color.set("#BFD4F2");
        crimsonRimLight.intensity = THREE.MathUtils.lerp(crimsonRimLight.intensity, 3.2, 0.08);
        backlightSunLight.intensity = THREE.MathUtils.lerp(backlightSunLight.intensity, 18.0, 0.08);
        scene.environmentIntensity = THREE.MathUtils.lerp(scene.environmentIntensity, 0.42, 0.08);
      }

      // Smooth camera reset lerp when switching subject or pressing "Chính diện"
      if (isCameraLerping) {
        camera.position.lerp(desiredCamPos, Math.min(1, dt * 5.2));
        controls.target.lerp(desiredTarget, Math.min(1, dt * 5.2));
        if (camera.position.distanceTo(desiredCamPos) < 0.03) {
          isCameraLerping = false;
        }
      }

      controls.update();
      renderer.render(scene, camera);
    });

    return () => {
      disposed = true;
      if (resumeAutoRotateTimer) clearTimeout(resumeAutoRotateTimer);
      renderer.setAnimationLoop(null);
      controls.removeEventListener("start", onControlStart);
      controls.removeEventListener("end", onControlEnd);
      controls.dispose();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      timer.dispose();
      envTex.dispose();
      disposeObject3D(stageRoot);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className={`rounded-2xl border border-[#DFC7BE] bg-white shadow-[0_14px_38px_rgba(38,24,21,0.12)] overflow-hidden ${className}`}
    >
      {/* Top Heritage Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 sm:px-4 bg-[#FDF8F6] border-b border-[#EFE3DD]">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-heritage-crimson" />
          <span className="font-display font-bold text-xs uppercase tracking-[0.14em] text-[#7A1C18]">
            Mô hình WebGL 3D Tương tác (GLB/GLTF)
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() =>
              setLightingMode((m) =>
                m === "court-stage" ? "storybox-backlight" : "court-stage"
              )
            }
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#DFC7BE] hover:border-heritage-crimson text-xs font-semibold text-[#5C4942] transition-colors cursor-pointer"
          >
            <Sun className="w-3.5 h-3.5 text-heritage-crimson" />
            <span>
              {lightingMode === "court-stage"
                ? "Đèn sân khấu"
                : "Ánh hắt sử thi"}
            </span>
          </button>
          <button
            type="button"
            onClick={() => resetCameraFnRef.current?.()}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-[#DFC7BE] hover:border-heritage-crimson text-xs font-semibold text-[#5C4942] transition-colors cursor-pointer"
            title="Đưa góc nhìn về chính diện"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Chính diện</span>
          </button>
        </div>
      </div>

      {/* Interactive Three.js 3D Viewport */}
      <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#1A0D0B] overflow-hidden">
        {webglSupported ? (
          <>
            <div
              ref={containerRef}
              className="w-full h-full cursor-grab active:cursor-grabbing"
              aria-label="Không gian sân khấu 3D tương tác bằng Three.js"
            />

            {/* Loading progress badge */}
            {modelsLoadedCount < 6 && (
              <div className="pointer-events-none absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#261815]/85 border border-heritage-goldAntique/60 px-3 py-1 text-[11px] font-semibold text-[#FDE68A] backdrop-blur-sm">
                <Box className="w-3.5 h-3.5 animate-pulse" />
                <span>Đang nạp phôi 3D ({modelsLoadedCount}/14)...</span>
              </div>
            )}

            {/* Zoom +/- controls so vertical wheel never traps page scrolling */}
            <div className="absolute top-3 right-3 flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => zoomFnRef.current?.(0.84)}
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#261815]/85 hover:bg-heritage-crimson text-[#FDE68A] hover:text-white border border-heritage-goldAntique/50 transition-colors cursor-pointer"
                aria-label="Phóng to mô hình 3D"
                title="Phóng to"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => zoomFnRef.current?.(1.18)}
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#261815]/85 hover:bg-heritage-crimson text-[#FDE68A] hover:text-white border border-heritage-goldAntique/50 transition-colors cursor-pointer"
                aria-label="Thu nhỏ mô hình 3D"
                title="Thu nhỏ"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
            </div>

            <div className="pointer-events-none absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-[#EBDAD3]/85">
              <span className="bg-[#1A0D0B]/75 px-2.5 py-0.5 rounded-md border border-[#DFC7BE]/20">
                Kéo 1 ngón hoặc chuột trái để xoay 360°
              </span>
              <span className="hidden sm:inline bg-[#1A0D0B]/75 px-2.5 py-0.5 rounded-md border border-[#DFC7BE]/20">
                Three.js WebGL • CC0/MIT Models
              </span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center text-[#F5EDE8]">
            <p className="font-display font-bold text-base mb-1">
              Trình duyệt chưa bật WebGL 3D
            </p>
            <p className="text-xs text-[#DFC7BE] max-w-sm">
              Vui lòng mở bằng Chrome, Edge hoặc Safari phiên bản mới để xoay 360° các mô hình sân khấu Huyện đường và hộp Đăm Săn.
            </p>
          </div>
        )}
      </div>

      {/* Subject Switcher */}
      <div className="p-2.5 sm:p-3 bg-[#FDF8F6] border-t border-[#EFE3DD] flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setSubject("all")}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            subject === "all"
              ? "bg-heritage-crimson text-white shadow-sm"
              : "bg-white text-[#5C4942] border border-[#DFC7BE] hover:border-heritage-crimson"
          }`}
        >
          <span>Song hành 2 Dự án</span>
        </button>
        <button
          type="button"
          onClick={() => setSubject("tuong")}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            subject === "tuong"
              ? "bg-heritage-crimson text-white shadow-sm"
              : "bg-white text-[#5C4942] border border-[#DFC7BE] hover:border-heritage-crimson"
          }`}
        >
          <Theater className="w-3.5 h-3.5" />
          <span>Dự án Huyện đường</span>
        </button>
        <button
          type="button"
          onClick={() => setSubject("dam-san")}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            subject === "dam-san"
              ? "bg-heritage-crimson text-white shadow-sm"
              : "bg-white text-[#5C4942] border border-[#DFC7BE] hover:border-heritage-crimson"
          }`}
        >
          <Trees className="w-3.5 h-3.5" />
          <span>Sử thi Đăm Săn</span>
        </button>
      </div>
    </div>
  );
};

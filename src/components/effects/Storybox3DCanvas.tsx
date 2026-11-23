"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RotateCcw, ZoomIn, ZoomOut, Layers } from "lucide-react";
import {
  applyHeritageEnvironment,
  disposeObject3D,
  isWebGLAvailable,
  loadCachedGltfScene,
  normalizeModelTransform,
} from "@/lib/threeHeritageUtils";
import { HERITAGE_3D_MODELS } from "@/data/models3dRegistry";

interface Storybox3DCanvasProps {
  sunElevation: number;
  ledIntensity: number;
  heroProgress: number;
  showLayerExplode: boolean;
}

export const Storybox3DCanvas: React.FC<Storybox3DCanvasProps> = ({
  sunElevation,
  ledIntensity,
  heroProgress,
  showLayerExplode,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [loadedModels, setLoadedModels] = useState(0);

  const paramsRef = useRef({
    sunElevation,
    ledIntensity,
    heroProgress,
    showLayerExplode,
  });
  paramsRef.current = {
    sunElevation,
    ledIntensity,
    heroProgress,
    showLayerExplode,
  };

  const resetCamRef = useRef<(() => void) | null>(null);
  const zoomFnRef = useRef<((factor: number) => void) | null>(null);
  const triggerExplodeCamRef = useRef<((exploded: boolean) => void) | null>(null);

  useEffect(() => {
    triggerExplodeCamRef.current?.(showLayerExplode);
  }, [showLayerExplode]);

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
    scene.background = new THREE.Color("#160F0C");
    scene.fog = new THREE.FogExp2("#160F0C", 0.045);

    const width = Math.max(container.clientWidth, 320);
    const height = Math.max(container.clientHeight, 200);

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 45);
    camera.position.set(0.18, 1.05, 4.55);

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

    const envTex = applyHeritageEnvironment(renderer, scene, 0.45);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minDistance = 2.4;
    controls.maxDistance = 7.2;
    controls.minPolarAngle = 0.35;
    controls.maxPolarAngle = Math.PI * 0.49;
    controls.target.set(0, 0.72, 0);

    const desiredCamPos = new THREE.Vector3(0.18, 1.05, 4.55);
    const desiredTarget = new THREE.Vector3(0, 0.72, 0);
    let isLerpingCamera = false;

    resetCamRef.current = () => {
      desiredCamPos.set(
        paramsRef.current.showLayerExplode ? 2.35 : 0.18,
        paramsRef.current.showLayerExplode ? 1.72 : 1.05,
        paramsRef.current.showLayerExplode ? 4.65 : 4.55
      );
      desiredTarget.set(0, 0.72, 0);
      isLerpingCamera = true;
    };

    triggerExplodeCamRef.current = (exploded: boolean) => {
      desiredCamPos.set(
        exploded ? 2.35 : 0.18,
        exploded ? 1.72 : 1.05,
        exploded ? 4.65 : 4.55
      );
      desiredTarget.set(0, 0.72, 0);
      isLerpingCamera = true;
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
      isLerpingCamera = false;
    };

    // Lights: subtle fill + movable LED Sun PointLight casting silhouette shadows
    scene.add(new THREE.HemisphereLight("#FFD9A8", "#2B1814", 0.35));

    const sunLedLight = new THREE.PointLight("#FBBF24", 18, 14, 1.3);
    sunLedLight.castShadow = true;
    sunLedLight.shadow.mapSize.set(1024, 1024);
    sunLedLight.shadow.bias = -0.0005;
    scene.add(sunLedLight);

    const sunSpotBeam = new THREE.SpotLight("#F59E0B", 16, 12, Math.PI * 0.36, 0.65, 1.3);
    sunSpotBeam.castShadow = true;
    scene.add(sunSpotBeam);
    scene.add(sunSpotBeam.target);

    const storyboxRoot = new THREE.Group();
    scene.add(storyboxRoot);

    // =========================================================================
    // OUTER WOODEN THEATER BOX SHELL (Khung Gỗ Hộp Chuyện Kể)
    // =========================================================================
    const woodMat = new THREE.MeshStandardMaterial({
      color: "#2C1812",
      roughness: 0.72,
      metalness: 0.08,
    });
    const goldInlayMat = new THREE.MeshStandardMaterial({
      color: "#C59B27",
      roughness: 0.35,
      metalness: 0.7,
    });

    // Base plank
    const basePlank = new THREE.Mesh(
      new THREE.BoxGeometry(3.2, 0.14, 2.2),
      woodMat
    );
    basePlank.position.y = -0.07;
    basePlank.receiveShadow = true;
    storyboxRoot.add(basePlank);

    // Left / Right side posts
    [-1.54, 1.54].forEach((x) => {
      const post = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 1.72, 1.95),
        new THREE.MeshStandardMaterial({
          color: "#361D15",
          roughness: 0.75,
          transparent: true,
          opacity: 0.88,
        })
      );
      post.position.set(x, 0.86, 0);
      post.castShadow = true;
      post.receiveShadow = true;
      storyboxRoot.add(post);
    });

    // Top arched theater header + Ê-đê serrated brocade apron triangles
    const topArch = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.14, 0.24), woodMat);
    topArch.position.set(0, 1.66, 0.85);
    storyboxRoot.add(topArch);

    const apronGroup = new THREE.Group();
    apronGroup.position.set(0, 0.04, 0.96);
    for (let i = -7; i <= 7; i++) {
      const tri = new THREE.Mesh(
        new THREE.ConeGeometry(0.065, 0.11, 3),
        goldInlayMat
      );
      tri.position.set(i * 0.18, 0, 0);
      tri.rotation.z = Math.PI;
      apronGroup.add(tri);
    }
    storyboxRoot.add(apronGroup);

    // =========================================================================
    // LAYER 1 (FOREGROUND): NHÀ DÀI Ê-ĐÊ & LỬA TRẠI (z = +0.55 normal -> +1.15 exploded)
    // =========================================================================
    const layer1Group = new THREE.Group();
    storyboxRoot.add(layer1Group);

    const ledge1 = new THREE.Mesh(
      new THREE.BoxGeometry(2.85, 0.06, 0.42),
      new THREE.MeshStandardMaterial({ color: "#4D2C1D", roughness: 0.85 })
    );
    ledge1.position.y = 0.03;
    ledge1.receiveShadow = true;
    layer1Group.add(ledge1);

    // =========================================================================
    // LAYER 2 (MIDGROUND): RỪNG SÁP ĐEN, DÃY NÚI & ĐĂM SĂN HERO SLIDER
    // =========================================================================
    const layer2Group = new THREE.Group();
    storyboxRoot.add(layer2Group);

    const slideTrack = new THREE.Mesh(
      new THREE.BoxGeometry(2.8, 0.05, 0.12),
      new THREE.MeshStandardMaterial({
        color: "#6B3E26",
        roughness: 0.78,
      })
    );
    slideTrack.position.set(0, 0.03, 0.15);
    layer2Group.add(slideTrack);

    // Đăm Săn Warrior Slider Cart carrying loaded CC0 Sword & Shield GLBs
    const heroSliderGroup = new THREE.Group();
    heroSliderGroup.position.set(0, 0.06, 0.15);
    layer2Group.add(heroSliderGroup);

    // Hero stylized figure + billowing crimson cloth silhouette
    const heroBodyMat = new THREE.MeshStandardMaterial({
      color: "#1B120F",
      roughness: 0.65,
    });
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, 0.34, 10), heroBodyMat);
    torso.position.y = 0.25;
    torso.castShadow = true;
    heroSliderGroup.add(torso);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.068, 12, 12), heroBodyMat);
    head.position.y = 0.49;
    head.castShadow = true;
    heroSliderGroup.add(head);

    const headband = new THREE.Mesh(
      new THREE.TorusGeometry(0.065, 0.015, 6, 16),
      new THREE.MeshStandardMaterial({ color: "#DC2626", roughness: 0.4 })
    );
    headband.rotation.x = Math.PI / 2 - 0.1;
    headband.position.y = 0.51;
    heroSliderGroup.add(headband);

    const cape = new THREE.Mesh(
      new THREE.ConeGeometry(0.14, 0.36, 4),
      new THREE.MeshStandardMaterial({ color: "#B91C1C", roughness: 0.6 })
    );
    cape.position.set(-0.08, 0.24, -0.04);
    cape.rotation.z = -0.35;
    heroSliderGroup.add(cape);

    // =========================================================================
    // LAYER 3 (BACKGROUND): MẶT TRỜI LED & MÀNG TẢN SÁNG GIẤY DÓ
    // =========================================================================
    const layer3Group = new THREE.Group();
    storyboxRoot.add(layer3Group);

    const vellumMat = new THREE.MeshStandardMaterial({
      color: "#3A1C12",
      emissive: "#B45309",
      emissiveIntensity: 0.35,
      roughness: 0.9,
      side: THREE.DoubleSide,
    });
    const vellumPanel = new THREE.Mesh(new THREE.PlaneGeometry(2.85, 1.56), vellumMat);
    vellumPanel.position.set(0, 0.82, -0.08);
    vellumPanel.receiveShadow = true;
    layer3Group.add(vellumPanel);

    const sunOrbGroup = new THREE.Group();
    const sunCoreMat = new THREE.MeshStandardMaterial({
      color: "#FEF08A",
      emissive: "#F59E0B",
      emissiveIntensity: 1.5,
      roughness: 0.2,
    });
    const sunOrb = new THREE.Mesh(new THREE.SphereGeometry(0.24, 24, 24), sunCoreMat);
    sunOrbGroup.add(sunOrb);

    const sunRayRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.32, 0.022, 8, 32),
      new THREE.MeshStandardMaterial({
        color: "#FDE68A",
        emissive: "#D97706",
        emissiveIntensity: 1.1,
      })
    );
    sunOrbGroup.add(sunRayRing);
    sunOrbGroup.position.set(0, 0.95, 0.06);
    layer3Group.add(sunOrbGroup);

    // Load genuine open-license GLB/GLTF diorama props
    const loadProp = async (
      url: string,
      size: number,
      onReady: (g: THREE.Group) => void
    ) => {
      try {
        const cloned = await loadCachedGltfScene(url);
        if (disposed) {
          disposeObject3D(cloned);
          return;
        }
        const wrapped = normalizeModelTransform(cloned, {
          targetSize: size,
          anchor: "bottom",
        });
        onReady(wrapped);
        setLoadedModels((c) => c + 1);
        renderer.render(scene, camera);
      } catch (err) {
        console.warn("Storybox 3D asset warning:", url, err);
      }
    };

    // Layer 1 props
    void loadProp(HERITAGE_3D_MODELS.damSanHouse.url, 1.02, (g) => {
      g.position.set(-0.78, 0.05, 0);
      g.rotation.y = 0.42;
      layer1Group.add(g);
    });
    void loadProp(HERITAGE_3D_MODELS.campfire.url, 0.28, (g) => {
      g.position.set(0.86, 0.05, 0.02);
      layer1Group.add(g);
    });
    void loadProp(HERITAGE_3D_MODELS.brassLantern.url, 0.24, (g) => {
      g.position.set(1.16, 0.05, 0.06);
      layer1Group.add(g);
    });

    // Layer 2 props
    void loadProp(HERITAGE_3D_MODELS.mountainRange.url, 1.38, (g) => {
      g.position.set(0.15, 0.02, -0.1);
      layer2Group.add(g);
    });
    void loadProp(HERITAGE_3D_MODELS.forestTree.url, 0.92, (g) => {
      g.position.set(-0.98, 0.02, -0.05);
      layer2Group.add(g);
    });
    void loadProp(HERITAGE_3D_MODELS.pineTree.url, 0.88, (g) => {
      g.position.set(0.98, 0.02, -0.06);
      layer2Group.add(g);
    });
    void loadProp(HERITAGE_3D_MODELS.damSanShield.url, 0.28, (g) => {
      g.position.set(-0.11, 0.16, 0.08);
      g.rotation.y = -0.35;
      heroSliderGroup.add(g);
    });
    void loadProp(HERITAGE_3D_MODELS.damSanSword.url, 0.44, (g) => {
      g.position.set(0.12, 0.24, 0.04);
      g.rotation.z = -0.58;
      heroSliderGroup.add(g);
    });

    const resizeObserver = new ResizeObserver((entries) => {
      if (disposed) return;
      for (const entry of entries) {
        const w = Math.max(entry.contentRect.width, 200);
        const h = Math.max(entry.contentRect.height, 140);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
        renderer.render(scene, camera);
      }
    });
    resizeObserver.observe(container);

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

      const {
        sunElevation: curSun,
        ledIntensity: curLed,
        heroProgress: curHero,
        showLayerExplode: exploded,
      } = paramsRef.current;

      // Explode / compact 3 layers smoothly along Z
      layer1Group.position.z = THREE.MathUtils.lerp(
        layer1Group.position.z,
        exploded ? 1.15 : 0.52,
        0.1
      );
      layer2Group.position.z = THREE.MathUtils.lerp(layer2Group.position.z, 0, 0.1);
      layer3Group.position.z = THREE.MathUtils.lerp(
        layer3Group.position.z,
        exploded ? -1.15 : -0.56,
        0.1
      );

      // Update Đăm Săn warrior mechanical slider X
      const targetHeroX = THREE.MathUtils.lerp(
        -1.08,
        1.08,
        THREE.MathUtils.clamp((curHero - 10) / 75, 0, 1)
      );
      heroSliderGroup.position.x = THREE.MathUtils.lerp(
        heroSliderGroup.position.x,
        targetHeroX,
        0.16
      );
      heroSliderGroup.position.y = 0.06 + Math.abs(Math.sin(elapsed * 2.6)) * 0.015;

      // Update Sun Goddess vertical elevation & real LED luminosity
      const sunNorm = THREE.MathUtils.clamp((curSun - 15) / 75, 0, 1);
      const targetSunY = THREE.MathUtils.lerp(0.45, 1.38, sunNorm);
      sunOrbGroup.position.y = THREE.MathUtils.lerp(sunOrbGroup.position.y, targetSunY, 0.12);
      sunRayRing.rotation.z = elapsed * 0.35;

      const ledNorm = THREE.MathUtils.clamp(curLed / 100, 0.15, 1);
      sunLedLight.position.set(0, sunOrbGroup.position.y, layer3Group.position.z + 0.16);
      sunLedLight.intensity = 6 + ledNorm * 26;
      sunSpotBeam.position.copy(sunLedLight.position);
      sunSpotBeam.target.position.set(heroSliderGroup.position.x * 0.6, 0.15, 0.35);
      sunSpotBeam.intensity = 4 + ledNorm * 20;

      sunCoreMat.emissiveIntensity = 0.7 + ledNorm * 1.6;
      vellumMat.emissiveIntensity = 0.12 + ledNorm * 0.62;

      if (isLerpingCamera) {
        camera.position.lerp(desiredCamPos, Math.min(1, dt * 5));
        controls.target.lerp(desiredTarget, Math.min(1, dt * 5));
        if (camera.position.distanceTo(desiredCamPos) < 0.03) {
          isLerpingCamera = false;
        }
      }

      controls.update();
      renderer.render(scene, camera);
    });

    return () => {
      disposed = true;
      renderer.setAnimationLoop(null);
      controls.dispose();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      timer.dispose();
      envTex.dispose();
      disposeObject3D(storyboxRoot);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative mt-4 aspect-[16/10] w-full rounded-xl bg-[#160F0C] border-2 border-heritage-goldAntique overflow-hidden">
      {webglSupported ? (
        <>
          <div
            ref={containerRef}
            className="w-full h-full cursor-grab active:cursor-grabbing"
            aria-label="Mô hình hộp chuyện kể sử thi Đăm Săn 3D"
          />

          {/* Top overlay status */}
          <div className="pointer-events-none absolute top-2.5 left-2.5 flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#261815]/85 border border-heritage-goldAntique/55 px-2.5 py-0.5 text-[11px] font-bold text-[#FDE68A]">
              <Layers className="w-3 h-3" />
              {showLayerExplode
                ? "Tách lớp Z: Lớp 1 – 2 – 3"
                : "Chế độ lắp ghép hoàn chỉnh"}
            </span>
            {loadedModels < 4 && (
              <span className="rounded-full bg-[#261815]/80 px-2 py-0.5 text-[10px] text-[#EBDAD3]">
                Đang nạp {loadedModels}/8 GLB
              </span>
            )}
          </div>

          {/* Camera action bar */}
          <div className="absolute top-2.5 right-2.5 flex flex-col gap-1">
            <button
              type="button"
              onClick={() => zoomFnRef.current?.(0.86)}
              className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#261815]/85 hover:bg-heritage-crimson text-[#FDE68A] hover:text-white border border-heritage-goldAntique/40 transition-colors cursor-pointer"
              aria-label="Phóng to hộp 3D"
              title="Phóng to"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => zoomFnRef.current?.(1.16)}
              className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#261815]/85 hover:bg-heritage-crimson text-[#FDE68A] hover:text-white border border-heritage-goldAntique/40 transition-colors cursor-pointer"
              aria-label="Thu nhỏ hộp 3D"
              title="Thu nhỏ"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => resetCamRef.current?.()}
              className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#261815]/85 hover:bg-heritage-crimson text-[#FDE68A] hover:text-white border border-heritage-goldAntique/40 transition-colors cursor-pointer"
              aria-label="Đưa về góc nhìn mặc định"
              title="Đưa về góc mặc định"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Live HUD bottom telemetry strip */}
          <div className="pointer-events-none absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-semibold text-[#FDE68A]">
            <span className="bg-[#160F0C]/80 px-2 py-0.5 rounded border border-heritage-goldAntique/30">
              LED {ledIntensity}% • Mặt Trời {sunElevation}°
            </span>
            <span className="hidden sm:inline bg-[#160F0C]/80 px-2 py-0.5 rounded border border-white/15 text-[#EBDAD3]">
              Kéo chuột / chạm để quan sát cấu trúc 3 lớp
            </span>
            <span className="bg-[#160F0C]/80 px-2 py-0.5 rounded border border-heritage-goldAntique/30">
              Đăm Săn: {heroProgress}%
            </span>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center text-[#F5EDE8]">
          <p className="font-bold text-sm">Trình duyệt chưa hỗ trợ WebGL 3D</p>
        </div>
      )}
    </div>
  );
};

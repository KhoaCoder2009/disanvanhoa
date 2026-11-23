"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RotateCcw, ZoomIn, ZoomOut, Box } from "lucide-react";
import {
  applyHeritageEnvironment,
  disposeObject3D,
  isWebGLAvailable,
  loadCachedGltfScene,
  normalizeModelTransform,
} from "@/lib/threeHeritageUtils";
import { HERITAGE_3D_MODELS } from "@/data/models3dRegistry";

export type BrowStyle = "quyen-uy" | "gian-xao" | "he-tuong" | "keo-kiet";
export type BeardStyle = "ba-chom" | "ria-mep" | "khong-rau" | "rau-ngan";
export type MaskPresetId = "tri-huyen" | "de-lai" | "linh-le" | "trum-so";

interface MaskStudio3DCanvasProps {
  presetId: MaskPresetId;
  roleTitle: string;
  baseColor: string;
  accentColor: string;
  browStyle: BrowStyle;
  beardStyle: BeardStyle;
  comparePercent: number;
}

export const MaskStudio3DCanvas: React.FC<MaskStudio3DCanvasProps> = ({
  presetId,
  roleTitle,
  baseColor,
  accentColor,
  browStyle,
  beardStyle,
  comparePercent,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [modelReady, setModelReady] = useState(false);

  const propsRef = useRef({
    presetId,
    baseColor,
    accentColor,
    browStyle,
    beardStyle,
    comparePercent,
  });
  propsRef.current = {
    presetId,
    baseColor,
    accentColor,
    browStyle,
    beardStyle,
    comparePercent,
  };

  const resetCamRef = useRef<(() => void) | null>(null);
  const zoomFnRef = useRef<((factor: number) => void) | null>(null);
  const recolorMaskRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    recolorMaskRef.current?.();
  }, [baseColor, accentColor, presetId, browStyle, beardStyle]);

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
    scene.background = new THREE.Color("#1D1410");

    const width = Math.max(container.clientWidth, 300);
    const height = Math.max(container.clientHeight, 225);

    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 40);
    camera.position.set(0.22, 0.12, 3.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.localClippingEnabled = true;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const envTex = applyHeritageEnvironment(renderer, scene, 0.78);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minDistance = 2.1;
    controls.maxDistance = 5.6;
    controls.minPolarAngle = 0.35;
    controls.maxPolarAngle = Math.PI * 0.65;
    controls.target.set(0, 0, 0);

    resetCamRef.current = () => {
      camera.position.set(0.22, 0.12, 3.8);
      controls.target.set(0, 0, 0);
      controls.update();
      renderer.render(scene, camera);
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
      renderer.render(scene, camera);
    };

    // Studio three-point lighting
    scene.add(new THREE.HemisphereLight("#FFF5E6", "#2A1612", 0.72));
    const keySpot = new THREE.SpotLight("#FFE9C8", 26, 16, Math.PI * 0.32, 0.45, 1.3);
    keySpot.position.set(2.2, 3.2, 3.6);
    keySpot.castShadow = true;
    scene.add(keySpot);

    const rimLight = new THREE.PointLight("#F59E0B", 8.5, 10, 1.4);
    rimLight.position.set(-2.4, 1.1, -1.8);
    scene.add(rimLight);

    // Clipping planes separating Painted Left side vs Wireframe CAD Right side
    const paintClipPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0);
    const wireClipPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Caliper split scanner bar showing the comparePercent boundary
    const splitDividerGroup = new THREE.Group();
    const dividerRod = new THREE.Mesh(
      new THREE.CylinderGeometry(0.008, 0.008, 2.05, 12),
      new THREE.MeshStandardMaterial({
        color: "#FBBF24",
        emissive: "#D97706",
        emissiveIntensity: 0.9,
        metalness: 0.75,
        roughness: 0.2,
      })
    );
    splitDividerGroup.add(dividerRod);
    rootGroup.add(splitDividerGroup);

    // Painted & Wireframe dual synchronized clean sculpted GLB rigs
    const paintedRig = new THREE.Group();
    const wireRig = new THREE.Group();
    rootGroup.add(paintedRig);
    rootGroup.add(wireRig);

    const faceMeshes: THREE.Mesh[] = [];
    const ornamentMeshes: THREE.Mesh[] = [];

    // Load clean sculpted mask model (tuong_mask.glb) with zero extra bulky primitives
    void (async () => {
      try {
        const rawMask = await loadCachedGltfScene(HERITAGE_3D_MODELS.tuongMask.url);
        if (disposed) {
          disposeObject3D(rawMask);
          return;
        }
        const normalizedPaint = normalizeModelTransform(rawMask, {
          targetSize: 2.15,
          anchor: "center",
        });

        const wireClone = normalizedPaint.clone(true);

        // Configure Painted pass materials preserving sculpted surface textures
        normalizedPaint.traverse((obj) => {
          if ((obj as THREE.Mesh).isMesh) {
            const mesh = obj as THREE.Mesh;
            const origMat = (
              Array.isArray(mesh.material) ? mesh.material[0] : mesh.material
            ) as THREE.MeshStandardMaterial;

            const isFacePlate =
              origMat?.name === "lambert1" ||
              origMat?.name === "lambert2" ||
              mesh.name.includes("lambert1");

            const lacquerMat = new THREE.MeshPhysicalMaterial({
              color: isFacePlate
                ? new THREE.Color(propsRef.current.baseColor)
                : new THREE.Color(propsRef.current.accentColor),
              map: origMat?.map ?? null,
              normalMap: origMat?.normalMap ?? null,
              roughness: isFacePlate ? 0.32 : 0.44,
              metalness: isFacePlate ? 0.06 : 0.24,
              clearcoat: isFacePlate ? 0.65 : 0.38,
              clearcoatRoughness: 0.2,
              clippingPlanes: [paintClipPlane],
              clipShadows: true,
              side: THREE.DoubleSide,
            });
            mesh.material = lacquerMat;
            if (isFacePlate) {
              faceMeshes.push(mesh);
            } else {
              ornamentMeshes.push(mesh);
            }
          }
        });

        // Configure Wireframe CAD template pass with opposing clipping plane
        wireClone.traverse((obj) => {
          if ((obj as THREE.Mesh).isMesh) {
            const mesh = obj as THREE.Mesh;
            mesh.castShadow = false;
            mesh.receiveShadow = false;
            mesh.material = new THREE.MeshStandardMaterial({
              color: "#E8D5B7",
              emissive: "#5B3C1B",
              emissiveIntensity: 0.35,
              wireframe: true,
              transparent: true,
              opacity: 0.82,
              clippingPlanes: [wireClipPlane],
            });
          }
        });

        paintedRig.add(normalizedPaint);
        wireRig.add(wireClone);

        if (!disposed) {
          recolorMaskRef.current?.();
          setModelReady(true);
          renderer.render(scene, camera);
        }
      } catch (err) {
        console.warn("Mask 3D load warning:", err);
      }
    })();

    recolorMaskRef.current = () => {
      const { baseColor: bc, accentColor: ac } = propsRef.current;
      for (const m of faceMeshes) {
        const mat = m.material as THREE.MeshPhysicalMaterial;
        mat.color.set(bc);
      }
      for (const m of ornamentMeshes) {
        const mat = m.material as THREE.MeshPhysicalMaterial;
        mat.color.set(ac);
      }
      rimLight.color.set(ac);
      renderer.render(scene, camera);
    };

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
      const elapsed = timer.getElapsed();

      // Gentle breathing hover sway
      const swayY = Math.sin(elapsed * 1.1) * 0.1;
      paintedRig.rotation.y = swayY;
      wireRig.rotation.y = swayY;

      // Update live 3D split conservation plane (-1.25 to +1.25 across mask width)
      const norm = THREE.MathUtils.clamp(propsRef.current.comparePercent / 100, 0, 1);
      const splitX = THREE.MathUtils.lerp(-1.25, 1.25, norm);
      paintClipPlane.constant = splitX;
      wireClipPlane.constant = -splitX;
      splitDividerGroup.position.x = splitX;
      splitDividerGroup.visible = norm > 0.02 && norm < 0.98;

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
      disposeObject3D(rootGroup);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative mt-4 aspect-[4/3] w-full rounded-xl bg-[#1D1410] border border-heritage-goldAntique/55 overflow-hidden">
      {webglSupported ? (
        <>
          <div
            ref={containerRef}
            className="w-full h-full cursor-grab active:cursor-grabbing"
            aria-label={`Mô hình mặt nạ Tuồng 3D nhân vật ${roleTitle}`}
          />

          {/* Top overlay status */}
          <div className="pointer-events-none absolute top-2.5 left-2.5 right-12 flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#261815]/85 border border-heritage-goldAntique/50 px-2.5 py-0.5 text-[11px] font-bold text-[#FDE68A]">
              {!modelReady && <Box className="w-3 h-3 animate-pulse" />}
              {roleTitle} • {comparePercent}% Sơn màu 3D
            </span>
          </div>

          {/* Camera action bar */}
          <div className="absolute top-2.5 right-2.5 flex flex-col gap-1">
            <button
              type="button"
              onClick={() => zoomFnRef.current?.(0.86)}
              className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#261815]/85 hover:bg-heritage-crimson text-[#FDE68A] hover:text-white border border-heritage-goldAntique/40 transition-colors cursor-pointer"
              aria-label="Phóng to mặt nạ"
              title="Phóng to"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => zoomFnRef.current?.(1.16)}
              className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#261815]/85 hover:bg-heritage-crimson text-[#FDE68A] hover:text-white border border-heritage-goldAntique/40 transition-colors cursor-pointer"
              aria-label="Thu nhỏ mặt nạ"
              title="Thu nhỏ"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => resetCamRef.current?.()}
              className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#261815]/85 hover:bg-heritage-crimson text-[#FDE68A] hover:text-white border border-heritage-goldAntique/40 transition-colors cursor-pointer"
              aria-label="Góc nhìn chính diện"
              title="Chính diện"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bottom labels matching split conservation bar */}
          <div className="pointer-events-none absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-semibold text-[#EBDAD3]">
            <span className="bg-[#1D1410]/80 px-2 py-0.5 rounded border border-heritage-goldAntique/30">
              Trái: Mặt nạ Sơn 3D
            </span>
            <span className="hidden sm:inline bg-[#1D1410]/80 px-2 py-0.5 rounded border border-white/15">
              Kéo để xoay kiểm tra phôi 3D
            </span>
            <span className="bg-[#1D1410]/80 px-2 py-0.5 rounded border border-white/15">
              Phải: Lưới CAD Bìa
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

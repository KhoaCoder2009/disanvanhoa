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
  const rebuildTraitsRef = useRef<(() => void) | null>(null);
  const recolorMaskRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    recolorMaskRef.current?.();
  }, [baseColor, accentColor]);

  useEffect(() => {
    rebuildTraitsRef.current?.();
  }, [presetId, browStyle, beardStyle, baseColor, accentColor]);

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

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 40);
    camera.position.set(0.24, 0.16, 4.05);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.localClippingEnabled = true;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const envTex = applyHeritageEnvironment(renderer, scene, 0.72);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minDistance = 2.0;
    controls.maxDistance = 5.6;
    controls.minPolarAngle = 0.4;
    controls.maxPolarAngle = Math.PI * 0.65;
    controls.target.set(0, 0.05, 0);

    resetCamRef.current = () => {
      camera.position.set(0.24, 0.16, 4.05);
      controls.target.set(0, 0.05, 0);
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
    };

    // Lights
    scene.add(new THREE.HemisphereLight("#FFF4E4", "#2B1814", 0.68));
    const keySpot = new THREE.SpotLight("#FFE7BF", 24, 16, Math.PI * 0.3, 0.45, 1.3);
    keySpot.position.set(2.1, 3.4, 3.5);
    keySpot.castShadow = true;
    scene.add(keySpot);

    const rimCrimson = new THREE.PointLight("#D97706", 7.5, 10, 1.4);
    rimCrimson.position.set(-2.3, 1.2, -1.8);
    scene.add(rimCrimson);

    // Clipping planes separating Painted Left side vs Wireframe Right side
    const paintClipPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0);
    const wireClipPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Subtle CAD blueprint grid behind the mask
    const backGrid = new THREE.GridHelper(3.4, 14, "#8A5E3B", "#3A2820");
    backGrid.rotation.x = Math.PI / 2;
    backGrid.position.z = -0.82;
    rootGroup.add(backGrid);

    // Caliper split scanner bar showing the comparePercent boundary
    const splitDividerGroup = new THREE.Group();
    const dividerRod = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 2.25, 12),
      new THREE.MeshStandardMaterial({
        color: "#FBBF24",
        emissive: "#D97706",
        emissiveIntensity: 0.9,
        metalness: 0.7,
        roughness: 0.2,
      })
    );
    splitDividerGroup.add(dividerRod);
    rootGroup.add(splitDividerGroup);

    // Painted & Wireframe dual synchronized mask rigs
    const paintedRig = new THREE.Group();
    const wireRig = new THREE.Group();
    paintedRig.position.y = -0.05;
    wireRig.position.y = -0.05;
    rootGroup.add(paintedRig);
    rootGroup.add(wireRig);

    const faceMeshes: THREE.Mesh[] = [];
    const plumeMeshes: THREE.Mesh[] = [];
    let crownAssetTemplate: THREE.Group | null = null;

    // Load genuine venice_mask.glb and clone into both Painted & Wireframe passes
    void (async () => {
      try {
        const rawMask = await loadCachedGltfScene(HERITAGE_3D_MODELS.tuongMask.url);
        if (disposed) {
          disposeObject3D(rawMask);
          return;
        }
        const normalizedPaint = normalizeModelTransform(rawMask, {
          targetSize: 2.1,
          anchor: "center",
        });

        const wireClone = normalizedPaint.clone(true);

        // Configure Painted pass materials with clipping
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
              roughness: isFacePlate ? 0.34 : 0.45,
              metalness: isFacePlate ? 0.06 : 0.22,
              clearcoat: isFacePlate ? 0.62 : 0.35,
              clearcoatRoughness: 0.22,
              clippingPlanes: [paintClipPlane],
              clipShadows: true,
              side: THREE.DoubleSide,
            });
            mesh.material = lacquerMat;
            if (isFacePlate) {
              faceMeshes.push(mesh);
            } else {
              plumeMeshes.push(mesh);
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
              color: "#E2CEAE",
              emissive: "#5B3C1B",
              emissiveIntensity: 0.35,
              wireframe: true,
              transparent: true,
              opacity: 0.78,
              clippingPlanes: [wireClipPlane],
            });
          }
        });

        paintedRig.add(normalizedPaint);
        wireRig.add(wireClone);

        // Optionally load CC0 Crown GLB accent for Tri Huyen / De Lai headwear
        try {
          const rawCrown = await loadCachedGltfScene(HERITAGE_3D_MODELS.courtCrown.url);
          if (!disposed) {
            crownAssetTemplate = normalizeModelTransform(rawCrown, {
              targetSize: 0.38,
              anchor: "bottom",
            });
            rebuildTraitsRef.current?.();
          } else {
            disposeObject3D(rawCrown);
          }
        } catch {
          // Optional crest fallback handled by procedural crown parts
        }

        if (!disposed) {
          recolorMaskRef.current?.();
          rebuildTraitsRef.current?.();
          setModelReady(true);
        }
      } catch (err) {
        console.warn("Mask 3D load warning:", err);
      }
    })();

    // Modular Tuồng traits (Headwear, Brows, Cheek Swirls, Beard) mounted cleanly on both Painted & Wire rigs
    const traitsPaintGroup = new THREE.Group();
    const traitsWireGroup = new THREE.Group();
    paintedRig.add(traitsPaintGroup);
    wireRig.add(traitsWireGroup);

    const makePaintedMat = (
      hex: string,
      rough = 0.35,
      metal = 0.2
    ): THREE.MeshPhysicalMaterial =>
      new THREE.MeshPhysicalMaterial({
        color: hex,
        roughness: rough,
        metalness: metal,
        clearcoat: 0.55,
        clippingPlanes: [paintClipPlane],
        side: THREE.DoubleSide,
      });

    const makeWireMat = (hex = "#FDE68A"): THREE.MeshBasicMaterial =>
      new THREE.MeshBasicMaterial({
        color: hex,
        wireframe: true,
        transparent: true,
        opacity: 0.65,
        clippingPlanes: [wireClipPlane],
      });

    const populateTraitsInto = (target: THREE.Group, isWire: boolean) => {
      const {
        presetId: curPreset,
        accentColor: curAccent,
        browStyle: curBrow,
        beardStyle: curBeard,
      } = propsRef.current;

      const matAccent = isWire ? makeWireMat("#F59E0B") : makePaintedMat(curAccent, 0.32, 0.15);
      const matGold = isWire ? makeWireMat("#FDE68A") : makePaintedMat("#C59B27", 0.25, 0.78);
      const matCrimson = isWire ? makeWireMat("#F87171") : makePaintedMat("#991B1B", 0.38, 0.1);
      const matDark = isWire ? makeWireMat("#CBD5E1") : makePaintedMat("#1F1918", 0.72, 0.05);

      // 1. Sculptural 3D Brows (Left & Right mirrored)
      [-1, 1].forEach((dir) => {
        if (curBrow === "quyen-uy") {
          const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(dir * 0.08, 0.22, 0.42),
            new THREE.Vector3(dir * 0.26, 0.34, 0.42),
            new THREE.Vector3(dir * 0.42, 0.26, 0.31),
          ]);
          const geo = new THREE.TubeGeometry(curve, 16, 0.032, 8, false);
          target.add(new THREE.Mesh(geo, matAccent));
        } else if (curBrow === "gian-xao") {
          const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(dir * 0.06, 0.2, 0.43),
            new THREE.Vector3(dir * 0.22, 0.29, 0.42),
            new THREE.Vector3(dir * 0.3, 0.23, 0.36),
            new THREE.Vector3(dir * 0.44, 0.33, 0.28),
          ]);
          const geo = new THREE.TubeGeometry(curve, 16, 0.025, 8, false);
          target.add(new THREE.Mesh(geo, matAccent));
        } else if (curBrow === "he-tuong") {
          const torus = new THREE.Mesh(
            new THREE.TorusGeometry(0.11, 0.024, 8, 20, Math.PI * 1.15),
            matAccent
          );
          torus.position.set(dir * 0.23, 0.27, 0.38);
          torus.rotation.z = dir === -1 ? 0.3 : Math.PI - 0.3;
          target.add(torus);
        } else {
          // keo-kiet: tense tight downward V
          const bar = new THREE.Mesh(
            new THREE.CylinderGeometry(0.022, 0.028, 0.34, 8),
            matAccent
          );
          bar.position.set(dir * 0.22, 0.25, 0.4);
          bar.rotation.z = dir * (Math.PI / 2 - 0.26);
          target.add(bar);
        }

        // Cheek circular Tuồng emblem accent
        const cheek = new THREE.Mesh(
          new THREE.TorusGeometry(0.075, 0.014, 8, 20),
          matAccent
        );
        cheek.position.set(dir * 0.28, -0.09, 0.39);
        cheek.rotation.y = dir * 0.42;
        target.add(cheek);
      });

      // Forehead third-eye/mandarin seal emblem
      const seal = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.065, 0),
        matGold
      );
      seal.scale.set(0.7, 1.3, 0.45);
      seal.position.set(0, 0.38, 0.41);
      target.add(seal);

      // 2. Sculptural 3D Headwear per character preset
      if (curPreset === "tri-huyen") {
        // Cánh chuồn Mandarin Cap + wings + CC0 Crown crest
        const cap = new THREE.Mesh(
          new THREE.CylinderGeometry(0.32, 0.42, 0.36, 16),
          matDark
        );
        cap.position.set(0, 0.72, 0.02);
        target.add(cap);

        const headband = new THREE.Mesh(
          new THREE.TorusGeometry(0.37, 0.025, 8, 24),
          matGold
        );
        headband.rotation.x = Math.PI / 2;
        headband.position.set(0, 0.56, 0.02);
        target.add(headband);

        [-1, 1].forEach((dir) => {
          const wing = new THREE.Mesh(
            new THREE.BoxGeometry(0.46, 0.08, 0.03),
            matGold
          );
          wing.position.set(dir * 0.56, 0.68, -0.02);
          wing.rotation.z = dir * 0.12;
          target.add(wing);
        });

        if (!isWire && crownAssetTemplate) {
          const c = crownAssetTemplate.clone(true);
          c.position.set(0, 0.89, 0.02);
          target.add(c);
        }
      } else if (curPreset === "de-lai") {
        // Hexagonal scribe hat with crimson tassel gem
        const hexHat = new THREE.Mesh(
          new THREE.CylinderGeometry(0.28, 0.4, 0.3, 6),
          matDark
        );
        hexHat.position.set(0, 0.68, 0.02);
        target.add(hexHat);
        const trim = new THREE.Mesh(
          new THREE.CylinderGeometry(0.3, 0.3, 0.04, 6),
          matGold
        );
        trim.position.set(0, 0.55, 0.02);
        target.add(trim);
      } else if (curPreset === "linh-le") {
        // Conical red-lacquered guard helm with top finial
        const helm = new THREE.Mesh(
          new THREE.ConeGeometry(0.46, 0.36, 20),
          matCrimson
        );
        helm.position.set(0, 0.72, 0.04);
        target.add(helm);
        const finial = new THREE.Mesh(
          new THREE.SphereGeometry(0.055, 12, 12),
          matGold
        );
        finial.position.set(0, 0.91, 0.04);
        target.add(finial);
      } else {
        // Trùm Sò merchant knotted headband + gold jade brooch
        const band = new THREE.Mesh(
          new THREE.TorusGeometry(0.4, 0.055, 10, 28),
          matAccent
        );
        band.rotation.x = Math.PI / 2 - 0.15;
        band.position.set(0, 0.56, 0.04);
        target.add(band);
        const brooch = new THREE.Mesh(
          new THREE.TorusGeometry(0.075, 0.022, 8, 16),
          matGold
        );
        brooch.position.set(0, 0.58, 0.44);
        target.add(brooch);
      }

      // 3. Sculptural 3D Beard Rigs
      if (curBeard === "ba-chom") {
        [-0.14, 0, 0.14].forEach((offsetX, idx) => {
          const len = idx === 1 ? 0.58 : 0.48;
          const strand = new THREE.Mesh(
            new THREE.ConeGeometry(0.052, len, 10),
            matDark
          );
          strand.rotation.x = Math.PI;
          strand.position.set(offsetX, -0.58 - (idx === 1 ? 0.05 : 0), 0.3);
          target.add(strand);
        });
      } else if (curBeard === "ria-mep") {
        [-1, 1].forEach((dir) => {
          const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(dir * 0.02, -0.27, 0.42),
            new THREE.Vector3(dir * 0.16, -0.29, 0.4),
            new THREE.Vector3(dir * 0.3, -0.21, 0.34),
          ]);
          target.add(
            new THREE.Mesh(
              new THREE.TubeGeometry(curve, 12, 0.02, 8, false),
              matDark
            )
          );
        });
      } else if (curBeard === "rau-ngan") {
        const goatee = new THREE.Mesh(
          new THREE.ConeGeometry(0.075, 0.28, 10),
          matDark
        );
        goatee.rotation.x = Math.PI;
        goatee.position.set(0, -0.5, 0.32);
        target.add(goatee);
      }
    };

    recolorMaskRef.current = () => {
      const { baseColor: bc, accentColor: ac } = propsRef.current;
      for (const m of faceMeshes) {
        const mat = m.material as THREE.MeshPhysicalMaterial;
        mat.color.set(bc);
      }
      for (const m of plumeMeshes) {
        const mat = m.material as THREE.MeshPhysicalMaterial;
        mat.color.set(ac);
      }
    };

    rebuildTraitsRef.current = () => {
      disposeObject3D(traitsPaintGroup);
      traitsPaintGroup.clear();
      disposeObject3D(traitsWireGroup);
      traitsWireGroup.clear();

      populateTraitsInto(traitsPaintGroup, false);
      populateTraitsInto(traitsWireGroup, true);
    };

    // Initial trait populate
    rebuildTraitsRef.current();

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

      // Gentle alive hover sway
      const swayY = Math.sin(elapsed * 1.15) * 0.08;
      paintedRig.rotation.y = swayY;
      wireRig.rotation.y = swayY;

      // Update live 3D conservation split plane (-1.25 to +1.25 across mask width)
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

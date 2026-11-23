"use client";

import * as THREE from "three";
import { GLTFLoader, type GLTF } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

/**
 * Checks whether the current browser context supports hardware/software WebGL rendering.
 */
export function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

let sharedDracoLoader: DRACOLoader | null = null;
let sharedGltfLoader: GLTFLoader | null = null;

/**
 * Returns a singleton GLTFLoader pre-configured with local /draco/ decoders
 * so there is zero external CDN runtime dependency.
 */
export function getHeritageGltfLoader(): GLTFLoader {
  if (!sharedGltfLoader) {
    sharedDracoLoader = new DRACOLoader();
    sharedDracoLoader.setDecoderPath("/draco/");
    sharedGltfLoader = new GLTFLoader();
    sharedGltfLoader.setDRACOLoader(sharedDracoLoader);
  }
  return sharedGltfLoader;
}

const gltfPromiseCache = new Map<string, Promise<GLTF>>();

/**
 * Loads and caches a GLB/GLTF asset by URL, cloning the scene per caller
 * so multiple Three.js viewports can share downloaded assets cleanly.
 */
export function loadCachedGltfScene(url: string): Promise<THREE.Group> {
  let promise = gltfPromiseCache.get(url);
  if (!promise) {
    const loader = getHeritageGltfLoader();
    promise = new Promise<GLTF>((resolve, reject) => {
      loader.load(url, resolve, undefined, reject);
    });
    gltfPromiseCache.set(url, promise);
  }
  return promise.then((gltf) => gltf.scene.clone(true));
}

export interface NormalizeOptions {
  targetSize: number;
  anchor?: "center" | "bottom";
  castShadow?: boolean;
  receiveShadow?: boolean;
}

/**
 * Normalizes a loaded Object3D so its largest bounding-box axis equals targetSize,
 * centered horizontally on XZ and anchored at Y=0 ("bottom") or origin ("center").
 */
export function normalizeModelTransform(
  object: THREE.Object3D,
  options: NormalizeOptions
): THREE.Group {
  const {
    targetSize,
    anchor = "bottom",
    castShadow = true,
    receiveShadow = true,
  } = options;

  const wrapper = new THREE.Group();
  wrapper.add(object);

  object.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.castShadow = castShadow;
      mesh.receiveShadow = receiveShadow;
      // Clone materials so per-scene tint/wireframe/emissive tweaks never mutate cached siblings
      if (Array.isArray(mesh.material)) {
        mesh.material = mesh.material.map((m) => m.clone());
      } else if (mesh.material) {
        mesh.material = mesh.material.clone();
      }
    }
  });

  object.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(object);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);

  const maxAxis = Math.max(size.x, size.y, size.z, 0.0001);
  const scale = targetSize / maxAxis;
  object.scale.setScalar(scale);

  object.position.x -= center.x * scale;
  object.position.z -= center.z * scale;
  if (anchor === "bottom") {
    object.position.y -= box.min.y * scale;
  } else {
    object.position.y -= center.y * scale;
  }

  wrapper.updateMatrixWorld(true);
  return wrapper;
}

/**
 * Configures neutral studio IBL using Three.js RoomEnvironment so PBR materials
 * remain luminous and readable even under warm stage lighting.
 */
export function applyHeritageEnvironment(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  intensity = 0.65
): THREE.Texture {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = envTex;
  scene.environmentIntensity = intensity;
  pmrem.dispose();
  return envTex;
}

/**
 * Recursively disposes GPU geometries, materials, and texture maps inside an Object3D.
 */
export function disposeObject3D(root: THREE.Object3D): void {
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (mesh.geometry) {
      mesh.geometry.dispose();
    }
    const matOrArr = mesh.material;
    if (!matOrArr) return;
    const materials = Array.isArray(matOrArr) ? matOrArr : [matOrArr];
    for (const mat of materials) {
      for (const value of Object.values(mat)) {
        if (value && typeof value === "object" && (value as THREE.Texture).isTexture) {
          (value as THREE.Texture).dispose();
        }
      }
      mat.dispose();
    }
  });
}

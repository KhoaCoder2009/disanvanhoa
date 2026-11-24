export interface HeritageModelAsset {
  id: string;
  label: string;
  url: string;
  license: "CC0 1.0 Public Domain" | "MIT License";
  sourceName: string;
  sourceUrl: string;
  projectTag: "tuong" | "shared";
}

/**
 * Verified open-license 3D GLB/GLTF models stored locally in /public/models/
 * serving Dự án Tuồng đồ Huyện đường (Ngữ văn 10 – STEAM).
 */
export const HERITAGE_3D_MODELS: Record<string, HeritageModelAsset> = {
  tuongMask: {
    id: "tuong-mask",
    label: "Phôi Mặt nạ Sân khấu 3D",
    url: "/models/tuong_mask.glb",
    license: "MIT License",
    sourceName: "Three.js Official Examples (venice_mask.glb)",
    sourceUrl:
      "https://github.com/mrdoob/three.js/blob/dev/examples/models/gltf/venice_mask.glb",
    projectTag: "tuong",
  },
  courtTable: {
    id: "court-table",
    label: "Án thư Công đường Gỗ cổ",
    url: "/models/chinese_console_table/chinese_console_table_1k.gltf",
    license: "CC0 1.0 Public Domain",
    sourceName: "Poly Haven (chinese_console_table)",
    sourceUrl: "https://polyhaven.com/a/chinese_console_table",
    projectTag: "tuong",
  },
  courtChair: {
    id: "court-chair",
    label: "Ghế Quan Tri huyện",
    url: "/models/chinese_armchair/chinese_armchair_1k.gltf",
    license: "CC0 1.0 Public Domain",
    sourceName: "Poly Haven (chinese_armchair)",
    sourceUrl: "https://polyhaven.com/a/chinese_armchair",
    projectTag: "tuong",
  },
  courtHammer: {
    id: "court-hammer",
    label: "Mộc bản / Búa Công đường",
    url: "/models/wooden_hammer_01/wooden_hammer_01_1k.gltf",
    license: "CC0 1.0 Public Domain",
    sourceName: "Poly Haven (wooden_hammer_01)",
    sourceUrl: "https://polyhaven.com/a/wooden_hammer_01",
    projectTag: "tuong",
  },
  brassLantern: {
    id: "brass-lantern",
    label: "Đèn đồng Sân khấu",
    url: "/models/brass_diya_lantern/brass_diya_lantern_1k.gltf",
    license: "CC0 1.0 Public Domain",
    sourceName: "Poly Haven (brass_diya_lantern)",
    sourceUrl: "https://polyhaven.com/a/brass_diya_lantern",
    projectTag: "shared",
  },
  courtScroll: {
    id: "court-scroll",
    label: "Án từ / Sớ tấu Tuồng đồ",
    url: "/models/court_scroll.glb",
    license: "CC0 1.0 Public Domain",
    sourceName: "Quaternius RPG Pack (Scroll.glb)",
    sourceUrl: "https://quaternius.com",
    projectTag: "tuong",
  },
  courtBook: {
    id: "court-book",
    label: "Sổ bộ Lệ làng",
    url: "/models/court_book.glb",
    license: "CC0 1.0 Public Domain",
    sourceName: "Quaternius RPG Pack (Book1_Open.glb)",
    sourceUrl: "https://quaternius.com",
    projectTag: "tuong",
  },
  courtCrown: {
    id: "court-crown",
    label: "Mũ Kim ấn Quan huyện",
    url: "/models/court_crown.glb",
    license: "CC0 1.0 Public Domain",
    sourceName: "Quaternius RPG Pack (Crown.glb)",
    sourceUrl: "https://quaternius.com",
    projectTag: "tuong",
  },
  stagePavilion: {
    id: "stage-pavilion",
    label: "Đình rạp Sân khấu Huyện đường",
    url: "/models/stage_pavilion.glb",
    license: "CC0 1.0 Public Domain",
    sourceName: "Quaternius Medieval Village (Gazebo.glb)",
    sourceUrl: "https://quaternius.com",
    projectTag: "shared",
  },
};

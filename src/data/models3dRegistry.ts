export interface HeritageModelAsset {
  id: string;
  label: string;
  url: string;
  license: "CC0 1.0 Public Domain" | "MIT License";
  sourceName: string;
  sourceUrl: string;
  projectTag: "tuong" | "dam-san" | "shared";
}

/**
 * Verified open-license 3D GLB/GLTF models stored locally in /public/models/
 * so offline SSR/Vercel deployments load cleanly without hotlink failures.
 */
export const HERITAGE_3D_MODELS: Record<string, HeritageModelAsset> = {
  tuongMask: {
    id: "tuong-mask",
    label: "Phôi Mặt nạ Sân khấu 3D",
    url: "/models/tuong_mask.glb",
    license: "MIT License",
    sourceName: "Three.js Official Examples (venice_mask.glb)",
    sourceUrl: "https://github.com/mrdoob/three.js/blob/dev/examples/models/gltf/venice_mask.glb",
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
  damSanHouse: {
    id: "dam-san-house",
    label: "Nhà dài Buôn làng (Mô hình kiến trúc)",
    url: "/models/dam_san_house.glb",
    license: "CC0 1.0 Public Domain",
    sourceName: "Quaternius Medieval Village (House_4.glb)",
    sourceUrl: "https://quaternius.com",
    projectTag: "dam-san",
  },
  damSanLonghouseAlt: {
    id: "dam-san-longhouse-alt",
    label: "Kiến trúc Nhà mái gỗ Tây Nguyên",
    url: "/models/dam_san_longhouse_alt.glb",
    license: "CC0 1.0 Public Domain",
    sourceName: "Quaternius RTS Pack (Houses_FirstAge_2_Level1.glb)",
    sourceUrl: "https://quaternius.com",
    projectTag: "dam-san",
  },
  mountainRange: {
    id: "mountain-range",
    label: "Dãy núi Rừng Sáp Đen",
    url: "/models/mountain_range.glb",
    license: "CC0 1.0 Public Domain",
    sourceName: "Quaternius RTS Pack (Mountain_Group_2.glb)",
    sourceUrl: "https://quaternius.com",
    projectTag: "dam-san",
  },
  forestTree: {
    id: "forest-tree",
    label: "Cây đại thụ Rừng Sáp Đen",
    url: "/models/forest_tree.glb",
    license: "CC0 1.0 Public Domain",
    sourceName: "Quaternius Nature Pack (CommonTree_2.glb)",
    sourceUrl: "https://quaternius.com",
    projectTag: "dam-san",
  },
  pineTree: {
    id: "pine-tree",
    label: "Thông xanh Cao nguyên",
    url: "/models/pine_tree.glb",
    license: "CC0 1.0 Public Domain",
    sourceName: "Quaternius Nature Pack (PineTree_2.glb)",
    sourceUrl: "https://quaternius.com",
    projectTag: "dam-san",
  },
  damSanSword: {
    id: "dam-san-sword",
    label: "Gươm thần Đăm Săn",
    url: "/models/dam_san_sword.glb",
    license: "CC0 1.0 Public Domain",
    sourceName: "Quaternius Medieval Weapons (Sword_Golden.glb)",
    sourceUrl: "https://quaternius.com",
    projectTag: "dam-san",
  },
  damSanShield: {
    id: "dam-san-shield",
    label: "Khiên tròn Tù trưởng",
    url: "/models/dam_san_shield.glb",
    license: "CC0 1.0 Public Domain",
    sourceName: "Quaternius Medieval Weapons (Shield_Round_2.glb)",
    sourceUrl: "https://quaternius.com",
    projectTag: "dam-san",
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
  campfire: {
    id: "campfire",
    label: "Ánh lửa Bếp nhà dài",
    url: "/models/campfire.glb",
    license: "CC0 1.0 Public Domain",
    sourceName: "Quaternius Medieval Village (Bonfire_Lit.glb)",
    sourceUrl: "https://quaternius.com",
    projectTag: "dam-san",
  },
};

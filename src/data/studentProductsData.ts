export interface GroupPhotoSlot {
  id: string;
  groupName: string;
  title: string;
  caption: string;
  imageUrl: string; // Giáo viên điền đường dẫn ảnh thật, ví dụ: "/student-products/huyen-duong/hoat-dong-nhom-1.jpg"
  expectedPath: string;
}

export interface GroupMaskSketchSlot {
  id: string;
  groupName: string;
  characterName: string;
  sketchNote: string;
  imageUrl: string; // Đường dẫn ảnh bản phác thảo thật của nhóm
  expectedPath: string;
}

export interface GroupVideoSlot {
  id: string;
  groupName: string;
  characterFocus: string;
  title: string;
  description: string;
  videoUrl: string; // Đường dẫn tệp .mp4 (ví dụ: "/student-products/huyen-duong/video-thuyet-minh-nhom-1.mp4") hoặc link YouTube embed
  expectedPath: string;
}

export const HUYEN_DUONG_STUDENT_ARCHIVE_META = {
  badge: "HỒ SƠ SẢN PHẨM HỌC SINH • DỰ ÁN 01",
  title: "SẢN PHẨM HỌC SINH DỰ ÁN HUYỆN ĐƯỜNG",
  subtitle:
    "Lưu trữ toàn bộ minh chứng thực hành của lớp và 4 nhóm: ảnh hoạt động nhóm, ảnh phác thảo mặt nạ, bản Word thuyết minh (phần lời), 4 video thuyết minh mặt nạ và 1 video diễn kịch chung của lớp.",
};

/**
 * 1. HÌNH ẢNH HOẠT ĐỘNG CỦA CÁC NHÓM
 */
export const HUYEN_DUONG_ACTIVITY_PHOTOS: GroupPhotoSlot[] = [
  {
    id: "hd-activity-nhom-1",
    groupName: "Nhóm 1",
    title: "Hoạt động thảo luận ngữ liệu & tạo khung mặt nạ",
    caption: "Ảnh ghi nhận quá trình Nhóm 1 phân tích lời thoại và dựng phom bìa cứng.",
    imageUrl: "",
    expectedPath: "/student-products/huyen-duong/hoat-dong-nhom-1.jpg",
  },
  {
    id: "hd-activity-nhom-2",
    groupName: "Nhóm 2",
    title: "Hoạt động phác thảo nét cọ & phối màu",
    caption: "Ảnh ghi nhận Nhóm 2 pha màu acrylic và thử nghiệm tỷ lệ chân mày – râu.",
    imageUrl: "",
    expectedPath: "/student-products/huyen-duong/hoat-dong-nhom-2.jpg",
  },
  {
    id: "hd-activity-nhom-3",
    groupName: "Nhóm 3",
    title: "Hoạt động bồi lớp nổi & hoàn thiện chi tiết",
    caption: "Ảnh ghi nhận Nhóm 3 cắt ghép lớp nổi mão quan và gia cố quai cầm.",
    imageUrl: "",
    expectedPath: "/student-products/huyen-duong/hoat-dong-nhom-3.jpg",
  },
  {
    id: "hd-activity-nhom-4",
    groupName: "Nhóm 4",
    title: "Hoạt động tập thoại & ráp đội hình diễn",
    caption: "Ảnh ghi nhận Nhóm 4 rà soát phần lời thuyết minh và thử nghiệm đạo cụ.",
    imageUrl: "",
    expectedPath: "/student-products/huyen-duong/hoat-dong-nhom-4.jpg",
  },
];

/**
 * 2. ẢNH BẢN PHÁC THẢO MẶT NẠ (4 NHÓM)
 */
export const HUYEN_DUONG_MASK_SKETCHES: GroupMaskSketchSlot[] = [
  {
    id: "hd-sketch-nhom-1",
    groupName: "Nhóm 1",
    characterName: "Mặt nạ Tri huyện",
    sketchNote: "Bản phác thảo trục đối xứng, mão quan, vầng trán rộng và gò má đỏ sẫm.",
    imageUrl: "",
    expectedPath: "/student-products/huyen-duong/phac-thao-nhom-1.jpg",
  },
  {
    id: "hd-sketch-nhom-2",
    groupName: "Nhóm 2",
    characterName: "Mặt nạ Đề lại",
    sketchNote: "Bản phác thảo nét mày xếch lệch, hốc mắt xanh xám và ria mép gian ngoan.",
    imageUrl: "",
    expectedPath: "/student-products/huyen-duong/phac-thao-nhom-2.jpg",
  },
  {
    id: "hd-sketch-nhom-3",
    groupName: "Nhóm 3",
    characterName: "Mặt nạ Lính lệ",
    sketchNote: "Bản phác thảo vệt phấn trắng sống mũi kiểu hề tuồng và nét mắt linh hoạt.",
    imageUrl: "",
    expectedPath: "/student-products/huyen-duong/phac-thao-nhom-3.jpg",
  },
  {
    id: "hd-sketch-nhom-4",
    groupName: "Nhóm 4",
    characterName: "Mặt nạ Trùm Sò",
    sketchNote: "Bản phác thảo sắc diện vàng sậm, nếp nhăn trán và khóe miệng keo kiệt.",
    imageUrl: "",
    expectedPath: "/student-products/huyen-duong/phac-thao-nhom-4.jpg",
  },
];

/**
 * 3. BẢN WORD THUYẾT MINH (PHẦN LỜI)
 */
export const HUYEN_DUONG_WORD_SCRIPT = {
  title: "Bản Word thuyết minh sản phẩm Dự án Huyện đường (Phần lời)",
  fileName: "thuyet-minh-huyen-duong.docx",
  docxUrl: "", // Giáo viên điền "/student-products/huyen-duong/thuyet-minh-huyen-duong.docx" khi tải file Word lên
  expectedPath: "/student-products/huyen-duong/thuyet-minh-huyen-duong.docx",
  summaryNote:
    "Tài liệu tổng hợp phần lời thuyết minh chuẩn bị cho 4 nhóm giới thiệu ý nghĩa mã màu, đường nét tạo hình nhân vật và kết nối văn bản Ngữ văn 10.",
  scriptSections: [
    {
      heading: "Phần I. Giới thiệu chung về trích đoạn Huyện đường",
      text: "Trích đoạn 'Huyện đường' (trích vở tuồng đồ Nghêu, Sò, Ốc, Hến) tái hiện sinh động chốn công đường phong kiến xưa, nơi bốn nhân vật Tri huyện, Đề lại, Lính lệ và Trùm Sò tự bộc lộ thói tham nhũng, xu nịnh và keo kiệt ngay qua lớp mặt nạ ước lệ.",
    },
    {
      heading: "Phần II. Phần lời thuyết minh bộ mặt nạ 4 nhân vật",
      text: "Mỗi nhóm lựa chọn gam màu chủ đạo bám sát ngữ liệu SGK: sắc trắng mốc pha đỏ son ở Tri huyện biểu trưng cho vẻ ngoài đạo mạo nhưng tham lam; sắc xám xanh rêu của Đề lại khắc họa kẻ thư lại mưu mô; vệt phấn hề của Lính lệ và sắc vàng sậm nếp nhăn của Trùm Sò nhấn mạnh chất hài dân gian.",
    },
    {
      heading: "Phần III. Thông điệp & Kết nối trình diễn",
      text: "Từ bản phác thảo hình học đến chiếc mặt nạ 3D hoàn thiện, sản phẩm giúp người xem nhận diện nhanh tính cách nhân vật và làm đạo cụ trực tiếp cho vở diễn kịch chung của cả lớp.",
    },
  ],
};

/**
 * 4. VIDEO THUYẾT MINH MẶT NẠ (MỖI NHÓM 1 VIDEO — 4 NHÓM)
 */
export const HUYEN_DUONG_MASK_VIDEOS: GroupVideoSlot[] = [
  {
    id: "hd-video-nhom-1",
    groupName: "Nhóm 1",
    characterFocus: "Tri huyện",
    title: "Video thuyết minh mặt nạ – Nhóm 1",
    description: "Nhóm 1 trình bày căn cứ văn bản, bảng mã màu và kỹ thuật chế tạo mặt nạ Tri huyện.",
    videoUrl: "",
    expectedPath: "/student-products/huyen-duong/video-thuyet-minh-nhom-1.mp4",
  },
  {
    id: "hd-video-nhom-2",
    groupName: "Nhóm 2",
    characterFocus: "Đề lại",
    title: "Video thuyết minh mặt nạ – Nhóm 2",
    description: "Nhóm 2 thuyết minh ý nghĩa nét mày lệch, sắc xám xanh và tạo hình nhân vật Đề lại.",
    videoUrl: "",
    expectedPath: "/student-products/huyen-duong/video-thuyet-minh-nhom-2.mp4",
  },
  {
    id: "hd-video-nhom-3",
    groupName: "Nhóm 3",
    characterFocus: "Lính lệ",
    title: "Video thuyết minh mặt nạ – Nhóm 3",
    description: "Nhóm 3 giới thiệu lối hóa trang hề tuồng dân gian và vật liệu tái chế của mặt nạ Lính lệ.",
    videoUrl: "",
    expectedPath: "/student-products/huyen-duong/video-thuyet-minh-nhom-3.mp4",
  },
  {
    id: "hd-video-nhom-4",
    groupName: "Nhóm 4",
    characterFocus: "Trùm Sò",
    title: "Video thuyết minh mặt nạ – Nhóm 4",
    description: "Nhóm 4 giải mã đường nét khắc khổ, keo kiệt trên mặt nạ Trùm Sò và quá trình hoàn thiện.",
    videoUrl: "",
    expectedPath: "/student-products/huyen-duong/video-thuyet-minh-nhom-4.mp4",
  },
];

/**
 * 5. VIDEO DIỄN KỊCH: 1 SẢN PHẨM CHUNG CỦA LỚP
 */
export const HUYEN_DUONG_CLASS_DRAMA = {
  badge: "Sản phẩm chung của cả lớp",
  title: "Video Diễn kịch Sân khấu hóa: Trích đoạn Huyện đường",
  description:
    "Tác phẩm tổng hợp chung của cả lớp kết hợp bộ 4 mặt nạ do 4 nhóm chế tạo, phần lời thoại tuồng đồ và diễn xuất trực tiếp trên sân khấu lớp học.",
  videoUrl: "", // Giáo viên điền "/student-products/huyen-duong/video-dien-kich-lop.mp4" khi đăng video lớp
  expectedPath: "/student-products/huyen-duong/video-dien-kich-lop.mp4",
  highlights: [
    "Sử dụng trọn bộ 4 mặt nạ nhân vật do 4 nhóm tự thiết kế và chế tạo",
    "Phối hợp diễn xuất hình thể ước lệ, lời thoại trào phúng và đạo cụ công đường",
    "Sản phẩm tổng kết chung của tập thể lớp cho Dự án Huyện đường",
  ],
};

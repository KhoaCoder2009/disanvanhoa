export interface GroupPhotoSlot {
  id: string;
  groupName: string;
  characterRole: string;
  title: string;
  caption: string;
  imageUrl: string;
  expectedPath: string;
  membersSummary: string;
}

export interface ExtraClassroomPhoto {
  id: string;
  groupName: string;
  title: string;
  caption: string;
  imageUrl: string;
}

export interface GroupMaskSketchSlot {
  id: string;
  groupName: string;
  characterName: string;
  sketchNote: string;
  analysisNote: string;
  sketchImageUrl: string;
  finishedMaskUrl: string;
  imageUrl: string; // Ảnh mặc định hiển thị đầu tiên
  expectedPath: string;
  designers: string;
}

export interface GroupVideoSlot {
  id: string;
  groupName: string;
  characterFocus: string;
  presenterInfo: string;
  durationBadge?: string;
  title: string;
  description: string;
  videoUrl: string;
  posterUrl?: string;
  expectedPath: string;
}

export interface ProcessVideoItem {
  id: string;
  groupName: string;
  durationBadge: string;
  title: string;
  caption: string;
  videoUrl: string;
  posterUrl?: string;
}

export interface GroupAssignmentRow {
  slug: string;
  groupName: string;
  character: string;
  contentTeam: string;
  sketchTeam: string;
  craftTeam: string;
  presenter: string;
  mediaTeam: string;
  actor: string;
}

export interface GroupColorSwatch {
  hex: string;
  label: string;
  meaning: string;
}

export interface StudentGroupPortfolio {
  slug: "to-1" | "to-2" | "to-3" | "to-4";
  groupName: string;
  groupNumber: string;
  characterName: string;
  roleSubtitle: string;
  classLabel: string;
  statusBadge: string;
  hasRealMedia: boolean;
  statsSummary: string;
  heroImage: string;
  cinemaScenesImages: [string, string, string];
  summary: string;
  classicQuote: string;
  literaryContext: string;
  colorSwatches: GroupColorSwatch[];
  roster: GroupAssignmentRow;
  maskProduct: {
    finishedMaskUrl: string;
    sketchImageUrl: string;
    wearingOrStageUrl: string;
    wearingCaption?: string;
    dimensionsAndSpecs: string[];
    artisticAnalysis: string;
    materialsUsed: string[];
    expectedDrivePath: string;
  };
  writtenScript: {
    title: string;
    authorCredit: string;
    isVerbatimFromDrive: boolean;
    docxDownloadUrl?: string;
    externalDocUrl?: string;
    rosterDocxUrl: string;
    sections: { heading: string; text: string }[];
  };
  presentationVideo: GroupVideoSlot;
  processVideos: ProcessVideoItem[];
  activityPhotos: ExtraClassroomPhoto[];
  infographicImage?: string;
}

export const HUYEN_DUONG_STUDENT_ARCHIVE_META = {
  badge: "HỒ SƠ SẢN PHẨM THỰC TẾ • LỚP 10.3 – THPT BÌNH PHÚ (SĨ SỐ: 48)",
  title: "SẢN PHẨM HỌC SINH DỰ ÁN HUYỆN ĐƯỜNG (LỚP 10.3)",
  subtitle:
    "Tổng hợp trọn bộ tư liệu thực tế từ thư mục Google Drive Dự án Huyện đường của 4 Tổ (Lớp 10.3 – Trường THPT Bình Phú): 25 hình ảnh mặt nạ hoàn thiện & hoạt động trên lớp, 3 bộ bản vẽ phác thảo tỷ lệ kỹ thuật (Tổ 2, Tổ 3, Tổ 4), 3 tệp Word thuyết minh & phân công, cùng 6 video thuyết minh trên bục giảng và công đoạn chế tác.",
  driveFolderUrl:
    "https://drive.google.com/drive/folders/1jwz0Xs3VkY-SJIP0UvCaWTmogiDJhaHd",
  boardArtists: "Trang trí bảng sân khấu Công đường: Khôi Nguyên, Ngọc Diệp",
};

/**
 * BẢNG PHÂN CÔNG NHIỆM VỤ 4 TỔ — LỚP 10.3 (Trích từ LỚP 10.3 dự án Huyện đường - phân công.docx)
 */
export const HUYEN_DUONG_GROUP_ROSTER: GroupAssignmentRow[] = [
  {
    slug: "to-1",
    groupName: "Tổ 1",
    character: "Tri huyện",
    contentTeam: "Đức Duy, Anh Kiệt",
    sketchTeam: "Trà My, Khôi Nguyên",
    craftTeam: "Gia Bảo, Băng Băng, Tấn Phúc, Băng Dương",
    presenter: "Phước Sang",
    mediaTeam: "Yến Vy, Quý",
    actor: "Tấn Lộc",
  },
  {
    slug: "to-2",
    groupName: "Tổ 2",
    character: "Đề lại",
    contentTeam: "Yến Nhi, Hằng",
    sketchTeam: "Thanh Hải, Trúc",
    craftTeam: "Vũ Thiên, Diệp, Kiều Oanh, Bùi Võ Quỳnh Anh",
    presenter: "Tấn Tài",
    mediaTeam: "Đăng Thành, Trần Gia Huy",
    actor: "Tiến",
  },
  {
    slug: "to-3",
    groupName: "Tổ 3",
    character: "Lính lệ",
    contentTeam: "Nhã Lan, Khánh Phương",
    sketchTeam: "Minh Trí, Hùng",
    craftTeam: "Phương Linh, Bảo Trâm, Thư, Nhĩ Khang",
    presenter: "Thu An",
    mediaTeam: "Nhi, Tuấn",
    actor: "Đạt",
  },
  {
    slug: "to-4",
    groupName: "Tổ 4",
    character: "Trùm Sò",
    contentTeam: "Trung Nghĩa, Đăng Khoa",
    sketchTeam: "Ngọc Hiền, Gia Huy",
    craftTeam: "Nguyễn Ngọc Quỳnh Anh, Quách Nhi, Kim Xuyến, Quốc Cường",
    presenter: "Minh Luân",
    mediaTeam: "Bảo Ngọc, Hoàng Nam",
    actor: "Gia Khang",
  },
];

/**
 * 1A. HÌNH ẢNH HOẠT ĐỘNG ĐẠI DIỆN CỦA 4 TỔ
 */
export const HUYEN_DUONG_ACTIVITY_PHOTOS: GroupPhotoSlot[] = [
  {
    id: "hd-activity-to-1",
    groupName: "Tổ 1",
    characterRole: "Tri huyện",
    title: "Lập bản vẽ kẻ ô ly & hoàn thiện mặt nạ Tri huyện mũ cánh chuồn",
    caption:
      "Tổ 1 đọc SGK Ngữ văn 10, thiết kế lưới kẻ ô ly (14 × 16 cm, mũ cánh chuồn 15 × 5 cm) và hoàn thiện mặt nạ Tri huyện đỏ son – viền vàng sắc nét.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-1-ve-phac-thao.jpg",
    expectedPath: "/student-products/huyen-duong/hoat-dong-to-1-ve-phac-thao.jpg",
    membersSummary: "ND: Đức Duy, Anh Kiệt • Vẽ: Trà My, Khôi Nguyên",
  },
  {
    id: "hd-activity-to-2",
    groupName: "Tổ 2",
    characterRole: "Đề lại",
    title: "Xẻ tai gấp khối 3D & sơn màu mặt nạ bìa cứng nhân vật Đề lại",
    caption:
      "Tổ 2 dựng dưỡng giấy tỷ lệ 1:1, xẻ rãnh viền bìa carton để uốn cong 3D ôm gương mặt và sơn phối màu đen nâu – đỏ sẫm – vàng đồng cũ ngay tại lớp.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-2-son-nen-3d.jpg",
    expectedPath: "/student-products/huyen-duong/hoat-dong-to-2-son-nen-3d.jpg",
    membersSummary: "Vẽ: Thanh Hải, Trúc • Chế tác: Vũ Thiên, Diệp, Kiều Oanh, Quỳnh Anh",
  },
  {
    id: "hd-activity-to-3",
    groupName: "Tổ 3",
    characterRole: "Lính lệ",
    title: "Thảo luận SGK, tra cứu mã màu & vẽ phác thảo Lính lệ",
    caption:
      "Tổ 3 kết hợp đọc trích đoạn Huyện đường trong SGK Ngữ văn 10, đối chiếu slide giải mã mặt nạ trên laptop và đo vẽ tỷ lệ trực tiếp trên lớp.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-3-ve-phac-thao.jpg",
    expectedPath: "/student-products/huyen-duong/hoat-dong-to-3-ve-phac-thao.jpg",
    membersSummary: "Vẽ: Minh Trí, Hùng • Chế tác: Phương Linh, Bảo Trâm, Thư, Nhĩ Khang",
  },
  {
    id: "hd-activity-to-4",
    groupName: "Tổ 4",
    characterRole: "Trùm Sò",
    title: "Cắt phom bìa carton & biên soạn lời thuyết minh Trùm Sò",
    caption:
      "Tổ 4 phân chia đồng thời nhóm đo cắt bìa cứng, nhóm vẽ phác thảo chì và nhóm biên tập bản thuyết minh văn học ngay tại lớp.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-4-cat-bia.jpg",
    expectedPath: "/student-products/huyen-duong/hoat-dong-to-4-cat-bia.jpg",
    membersSummary: "Chế tác: Quỳnh Anh, Quách Nhi, Kim Xuyến, Quốc Cường",
  },
];

/**
 * 1B. BỘ SƯU TẬP ẢNH HOẠT ĐỘNG & SẢN PHẨM TRÊN LỚP (TỔ 2, TỔ 3 & TỔ 4)
 */
export const HUYEN_DUONG_CLASSROOM_GALLERY: ExtraClassroomPhoto[] = [
  {
    id: "gal-to1-stage",
    groupName: "Tổ 1 • Tri huyện",
    title: "Đại diện Tổ 1 ra mắt mặt nạ Tri huyện trước bảng Công đường",
    caption:
      "Hai đại diện Tổ 1 giới thiệu sản phẩm mặt nạ Tri huyện mũ cánh chuồn trước bức hoành phi phấn 'Công minh chính trực – Huyện đường'.",
    imageUrl: "/student-products/huyen-duong/ra-mat-to-1-tri-huyen.jpg",
  },
  {
    id: "gal-to1-sketch",
    groupName: "Tổ 1 • Tri huyện",
    title: "Phác thảo mặt nạ Tri huyện trên giấy ô ly (Tổ 1)",
    caption:
      "Thành viên Tổ 1 dựng hình khuôn mặt, cặp mày xếch và ria mép trên vở ô ly bên cạnh sách giáo khoa Ngữ văn 10.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-1-ve-phac-thao.jpg",
  },
  {
    id: "gal-to1-sgk",
    groupName: "Tổ 1 • Tri huyện",
    title: "Đọc hiểu văn bản Huyện đường & phân tích lời thoại Tri huyện (Tổ 1)",
    caption:
      "Học sinh Tổ 1 tra cứu trực tiếp trích đoạn Huyện đường trong SGK Ngữ văn 10 để làm căn cứ giải mã tạo hình.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-1-doc-sgk.jpg",
  },
  {
    id: "gal-to1-team",
    groupName: "Tổ 1 • Tri huyện",
    title: "Thảo luận nhóm & phân công chế tác tại lớp (Tổ 1)",
    caption:
      "Không khí làm việc nhóm sôi nổi của các thành viên Tổ 1 (Lớp 10.3 – THPT Bình Phú) quanh bàn thực hành STEAM.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-1-thao-luan-lop.jpg",
  },
  {
    id: "gal-to2-stages",
    groupName: "Tổ 2 • Đề lại",
    title: "Ba giai đoạn tiến hóa thiết kế mặt nạ Đề lại (Tổ 2)",
    caption:
      "Đặt cạnh nhau trên bàn học: (1) Bản nháp trục đối xứng 'Mặt Nạ Của Đề Lại', (2) Dưỡng giấy tỷ lệ 1:1 khoét hốc mắt xếch, và (3) Mặt nạ bìa cứng 3D hoàn thiện có viền mũ vàng đồng cũ.",
    imageUrl: "/student-products/huyen-duong/phac-thao-to-2-de-lai.jpg",
  },
  {
    id: "gal-to2-stage",
    groupName: "Tổ 2 • Đề lại",
    title: "Đại diện Tổ 2 thuyết minh mặt nạ Đề lại trước bảng Công đường",
    caption:
      "Hai đại diện Tổ 2 trình bày bài thuyết minh (03:13) trước bức hoành phi phấn 'Công minh chính trực – Huyện đường' (Sĩ số 48/48).",
    imageUrl: "/student-products/huyen-duong/ra-mat-to-2-de-lai.jpg",
  },
  {
    id: "gal-to2-template",
    groupName: "Tổ 2 • Đề lại",
    title: "Cắt dưỡng giấy tỷ lệ 1:1 & ướm phôi bìa carton (Tổ 2)",
    caption:
      "Học sinh Tổ 2 tinh chỉnh nét chì trên dưỡng giấy khoét mắt và đối chiếu với mảnh phôi bìa cứng.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-2-cat-duong-giay.jpg",
  },
  {
    id: "gal-to2-prep",
    groupName: "Tổ 2 • Đề lại",
    title: "Chuẩn bị tấm bìa carton nguyên khổ, bản phác & khay màu (Tổ 2)",
    caption:
      "Góc bàn thực hành của Tổ 2 (THPT Bình Phú – Lớp 10.3) với tấm carton sóng phẳng, cọ vẽ và lọ màu lót nền.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-2-chuan-bi-bia.jpg",
  },
  {
    id: "gal-to2-brush",
    groupName: "Tổ 2 • Đề lại",
    title: "Vệ sinh & vuốt nhọn đầu cọ tỉa nét mày xếch, ria vểnh (Tổ 2)",
    caption:
      "Thành viên Tổ 2 (Đăng Thành) chuẩn bị đầu cọ mảnh để đi nét đen nâu sắc sảo trên mặt nạ Đề lại.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-2-pha-mau-co.jpg",
  },
  {
    id: "gal-to3-wear",
    groupName: "Tổ 3 • Lính lệ",
    title: "Đại diện Tổ 3 thuyết minh mặt nạ Lính lệ trước bảng Công đường",
    caption:
      "Hai đại diện Tổ 3 cầm mặt nạ Lính lệ hoàn thiện trình bày bài thuyết minh (01:50) trước bảng phấn 'Công minh chính trực – Huyện đường'.",
    imageUrl: "/student-products/huyen-duong/ra-mat-to-3-linh-le.jpg",
  },
  {
    id: "gal-to3-notes",
    groupName: "Tổ 3 • Lính lệ",
    title: "Đắp nổi hoa văn đất sét vàng – đỏ trên mão Lính lệ",
    caption:
      "Thành viên Tổ 3 miết đất sét tự khô tạo hoa văn vàng, đai đỏ trên phôi mão bìa carton ngay tại lớp.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-3-dap-hoa-van-mao.jpg",
  },
  {
    id: "gal-to3-measure",
    groupName: "Tổ 3 • Lính lệ",
    title: "Đo kẻ trục đối xứng trên giấy và tấm bìa carton",
    caption:
      "Các thành viên Tổ 3 phối hợp dùng thước kẻ xác định kích thước khung mặt nạ trước khi cắt.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-3-do-bia.jpg",
  },
  {
    id: "gal-to3-team1",
    groupName: "Tổ 3 • Lính lệ",
    title: "Không khí làm việc nhóm Tổ 3 trong tiết thực hành STEAM",
    caption:
      "Trao đổi phân công giữa bộ phận nội dung văn học, bộ phận bản vẽ và bộ phận tạo hình.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-3-thao-luan-1.jpg",
  },
  {
    id: "gal-to3-team2",
    groupName: "Tổ 3 • Lính lệ",
    title: "Hoàn thiện hồ sơ thuyết trình nhóm Tổ 3",
    caption:
      "Góc lớp học cùng hình vẽ trang trí bảng chuẩn bị cho buổi báo cáo sản phẩm.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-3-thao-luan-2.jpg",
  },
  {
    id: "gal-to4-stage",
    groupName: "Tổ 4 • Trùm Sò",
    title: "Đại diện Tổ 4 ra mắt mặt nạ Trùm Sò trên bục giảng",
    caption:
      "Hai đại diện Tổ 4 cầm mặt nạ Trùm Sò và bản thảo thuyết minh trước bức hoành phi phấn 'Công minh chính trực – Huyện đường'.",
    imageUrl: "/student-products/huyen-duong/ra-mat-to-4-trum-so.jpg",
  },
  {
    id: "gal-to4-sketching",
    groupName: "Tổ 4 • Trùm Sò",
    title: "Phác thảo chi tiết tỷ lệ mắt & nếp nhăn mặt nạ Trùm Sò",
    caption:
      "Học sinh Tổ 4 dùng thước ê-ke và chì màu dựng bản vẽ kỹ thuật trên giấy A4.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-4-ve-chi.jpg",
  },
  {
    id: "gal-to4-script",
    groupName: "Tổ 4 • Trùm Sò",
    title: "Biên tập và rà soát bài thuyết minh nhân vật Trùm Sò",
    caption:
      "Đối chiếu bản viết tay bài thuyết minh của Tổ 4 với văn bản trích đoạn Huyện đường trong SGK.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-4-viet-thuyet-minh.jpg",
  },
  {
    id: "gal-to4-craft",
    groupName: "Tổ 4 • Trùm Sò",
    title: "Cắt phôi bìa cứng theo kích thước bản vẽ thiết kế",
    caption:
      "Nhóm chế tác Tổ 4 cắt tạo dáng khuôn mặt tròn và khoét lỗ nhìn cho mặt nạ Trùm Sò.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-4-nhom-che-tac.jpg",
  },
  {
    id: "gal-to4-sgk",
    groupName: "Tổ 4 • Trùm Sò",
    title: "Tra cứu lời thoại SGK Ngữ văn 10 & ghi vở phân tích",
    caption:
      "Ghi nhận các chi tiết đắt giá về tâm lý xót tiền, khúm núm của Trùm Sò nơi cửa quan.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-4-doi-chieu-sgk.jpg",
  },
  {
    id: "gal-to4-wide",
    groupName: "Tổ 4 • Trùm Sò",
    title: "Toàn cảnh thảo luận liên nhóm cùng sơ đồ tỷ lệ trên bảng",
    caption:
      "Trên bảng phụ có sơ đồ minh họa tỷ lệ cm khoét mắt và bố cục khuôn mặt mặt nạ.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-4-toan-canh.jpg",
  },
];

/**
 * 1C. VIDEO HẬU TRƯỜNG CÔNG ĐOẠN CHẾ TÁC & THẢO LUẬN TRÊN LỚP
 */
export const HUYEN_DUONG_PROCESS_VIDEOS: ProcessVideoItem[] = [
  {
    id: "proc-vid-to1",
    groupName: "Tổ 1 • Tri huyện",
    durationBadge: "00:24",
    title: "Video thảo luận nhóm & cắt phôi bìa mặt nạ Tri huyện – Tổ 1",
    caption:
      "Ghi lại không khí Tổ 1 phân công công việc, đối chiếu bảng tiêu chí và cắt tạo hình phôi bìa carton trên lớp.",
    videoUrl: "/student-products/huyen-duong/video-hoat-dong-to-1.mp4",
    posterUrl: "/student-products/huyen-duong/hoat-dong-to-1-thao-luan-lop.jpg",
  },
  {
    id: "proc-vid-to4",
    groupName: "Tổ 4 • Trùm Sò",
    durationBadge: "01:08",
    title: "Video hoạt động thảo luận & phác thảo mặt nạ trên lớp – Tổ 4",
    caption:
      "Ghi lại quá trình các thành viên Tổ 4 trao đổi bố cục bản vẽ, đối chiếu SGK và cắt phom bìa tại lớp 10.3.",
    videoUrl: "/student-products/huyen-duong/video-hoat-dong-to-4.mp4",
    posterUrl: "/student-products/huyen-duong/hoat-dong-to-4-toan-canh.jpg",
  },
  {
    id: "proc-vid-to3-main",
    groupName: "Tổ 3 • Lính lệ",
    durationBadge: "01:00",
    title: "Video công đoạn đắp màu nổi & cắt tỉa mão Lính lệ – Tổ 3",
    caption:
      "Quá trình học sinh Tổ 3 tạo hình hoa văn vàng – đỏ trên mão đen và dùng kéo cắt rời phôi bìa carton.",
    videoUrl: "/student-products/huyen-duong/video-cong-doan-to-3-hoan-thien.mp4",
    posterUrl: "/student-products/huyen-duong/mat-na-to-3-linh-le.jpg",
  },
  {
    id: "proc-vid-to3-short",
    groupName: "Tổ 3 • Lính lệ",
    durationBadge: "00:24",
    title: "Cận cảnh miết đất sét nhẹ trang trí mão quan – Tổ 3",
    caption:
      "Thao tác thủ công đắp nổi họa tiết đối xứng trên phần trán mặt nạ Lính lệ.",
    videoUrl: "/student-products/huyen-duong/video-cong-doan-to-3-dap-noi.mp4",
    posterUrl: "/student-products/huyen-duong/ra-mat-to-3-linh-le.jpg",
  },
];

/**
 * 2. BẢN PHÁC THẢO & SẢN PHẨM MẶT NẠ HOÀN THIỆN CỦA 4 TỔ
 */
export const HUYEN_DUONG_MASK_SKETCHES: GroupMaskSketchSlot[] = [
  {
    id: "hd-sketch-to-1",
    groupName: "Tổ 1",
    characterName: "Mặt nạ Tri huyện",
    designers: "Bản vẽ: Trà My, Khôi Nguyên • Chế tác: Gia Bảo, Băng Băng, Tấn Phúc, Băng Dương",
    sketchNote:
      "Bản vẽ lưới ô ly tỷ lệ chi tiết (rộng 14 cm, cao 16 cm, mỗi mắt rộng 6 cm, mũ cánh chuồn 15 × 5 cm, cánh chuồn 10,5 × 3,5 cm) đối chiếu cùng mặt nạ hoàn thiện.",
    analysisNote:
      "Phân tích tạo hình: Nền đỏ son tượng trưng cho vẻ ngoài nhiệt huyết công minh nhưng ngầm phơi bày sự xảo trá; họa tiết mây vàng & ấn tròn giữa mũ biểu trưng cho lòng tham vật chất và sự sùng bái tiền bạc; viền mũ đen và ria mép tạo vẻ uy nghiêm che đậy thói nhũng nhiễu.",
    sketchImageUrl: "/student-products/huyen-duong/phac-thao-to-1-tri-huyen.jpg",
    finishedMaskUrl: "/student-products/huyen-duong/mat-na-to-1-tri-huyen.jpg",
    imageUrl: "/student-products/huyen-duong/mat-na-to-1-tri-huyen.jpg",
    expectedPath: "/student-products/huyen-duong/mat-na-to-1-tri-huyen.jpg",
  },
  {
    id: "hd-sketch-to-2",
    groupName: "Tổ 2",
    characterName: "Mặt nạ Đề lại",
    designers: "Bản vẽ: Thanh Hải, Trúc • Chế tác: Vũ Thiên, Diệp, Kiều Oanh, Quỳnh Anh",
    sketchNote:
      "Quy trình 3 bước từ bản nháp trục hình học 'Mặt Nạ Của Đề Lại' → dưỡng giấy cắt mắt tỷ lệ 1:1 → mặt nạ bìa carton gấp sống mũi 3D hoàn chỉnh.",
    analysisNote:
      "Phân tích tạo hình: Xẻ tai bìa và gấp trục dọc tạo độ cong ôm mặt; mũ đen nâu viền vàng đồng cũ, vùng mắt đỏ sẫm, mày xếch sắc lẹm và ria vểnh nhếch mép khắc họa trọn vẹn kẻ phụ quan gian xảo, nịnh trên nạt dưới.",
    sketchImageUrl: "/student-products/huyen-duong/phac-thao-to-2-de-lai.jpg",
    finishedMaskUrl: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
    imageUrl: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
    expectedPath: "/student-products/huyen-duong/phac-thao-to-2-de-lai.jpg",
  },
  {
    id: "hd-sketch-to-3",
    groupName: "Tổ 3",
    characterName: "Mặt nạ Lính lệ",
    designers: "Bản vẽ: Minh Trí, Hùng • Chế tác: Phương Linh, Bảo Trâm, Thư, Nhĩ Khang",
    sketchNote:
      "Bản vẽ kỹ thuật tỷ lệ 18cm × 24cm (mão 7,5cm, hốc mắt 4cm, mũi hề tròn Ø1,5cm, ria vểnh 1,5cm) đối chiếu cùng mặt nạ đắp đất sét màu hoàn thiện.",
    analysisNote:
      "Phân tích tạo hình: Chuyển hóa chuẩn xác từ bản vẽ hình học đối xứng sang sản phẩm thực tế có mão đen đắp nổi hoa văn vàng – đai đỏ, chóp mũi đỏ tròn lối hề tuồng dân gian và nét ria chữ bát hách dịch.",
    sketchImageUrl: "/student-products/huyen-duong/phac-thao-to-3-linh-le.jpg",
    finishedMaskUrl: "/student-products/huyen-duong/mat-na-to-3-linh-le.jpg",
    imageUrl: "/student-products/huyen-duong/phac-thao-to-3-linh-le.jpg",
    expectedPath: "/student-products/huyen-duong/phac-thao-to-3-linh-le.jpg",
  },
  {
    id: "hd-sketch-to-4",
    groupName: "Tổ 4",
    characterName: "Mặt nạ Trùm Sò",
    designers: "Bản vẽ: Ngọc Hiền, Gia Huy • Chế tác: Quỳnh Anh, Quách Nhi, Kim Xuyến, Quốc Cường",
    sketchNote:
      "Bản phác thảo chú thích thông số từng chi tiết (2 mắt cách 2cm, cao 3–4cm; vệt nhăn cách 1cm; lỗ thở R=0,5mm; môi méo 4–5cm) và mặt nạ hoàn thiện.",
    analysisNote:
      "Phân tích tạo hình: Tông màu vàng nghệ sạm tối kết hợp lông mày nhíu chặt, vệt nhăn trán, đôi mắt mở to ngơ ngác và khuôn miệng trễ xuống mếu máo lột tả trọn vẹn tâm lý xót của mà vẫn phải khúm núm đút lót.",
    sketchImageUrl: "/student-products/huyen-duong/phac-thao-to-4-trum-so.jpg",
    finishedMaskUrl: "/student-products/huyen-duong/mat-na-to-4-trum-so.jpg",
    imageUrl: "/student-products/huyen-duong/phac-thao-to-4-trum-so.jpg",
    expectedPath: "/student-products/huyen-duong/phac-thao-to-4-trum-so.jpg",
  },
];

/**
 * 3. BẢN WORD THUYẾT MINH (PHẦN LỜI THỰC TẾ TỪ DRIVE) & FILE PHÂN CÔNG
 */
export const HUYEN_DUONG_WORD_SCRIPT = {
  title: "Bản Word Thuyết minh Mặt nạ (Cả 4 Tổ) & Hồ sơ Phân công Lớp 10.3",
  fileName: "bai-thuyet-minh-to-1-tri-huyen.docx",
  to1DocxUrl: "/student-products/huyen-duong/bai-thuyet-minh-to-1-tri-huyen.docx",
  to2DocxUrl: "/student-products/huyen-duong/bai-thuyet-minh-to-2-de-lai.docx",
  docxUrl: "/student-products/huyen-duong/bai-thuyet-minh-to-4-trum-so.docx",
  rosterDocxUrl: "/student-products/huyen-duong/phan-cong-du-an-lop-10-3.docx",
  to3ExternalDocUrl:
    "https://ap.wps.com/cms/docs/d/cbTaqaBJOWVeiEL6?platform=pc&refer=copylink",
  expectedPath: "/student-products/huyen-duong/bai-thuyet-minh-to-2-de-lai.docx",
  summaryNote:
    "Tổng hợp nguyên văn các tệp Word thuyết minh từ Google Drive của Lớp 10.3: bài thuyết minh mặt nạ Đề lại của Tổ 2 (.docx), liên kết bản Word Lính lệ của Tổ 3 (WPS), bài thuyết minh mặt nạ Trùm Sò của Tổ 4 (.docx) và tệp phân công nhiệm vụ cả 4 tổ.",
  scriptSections: [
    {
      heading: "Bài thuyết minh Tổ 2 — Mặt nạ Đề lại (Ý tưởng, Lời thoại & Mã màu)",
      text: "“Thông qua chiếc mặt nạ Đề lại, Tổ 2 muốn thể hiện hình ảnh một phụ quan gian xảo, nịnh nọt, khéo luồn cúi và luôn mưu lợi riêng qua câu thoại: ‘Vâng, hôm nay chả thấy ai kiện cáo gì cả. Còn vụ Thị Hến, Nguyễn Sò quan đã định dứt khoát như thế nào chưa?’. Đôi lông mày vẽ xếch, mắt hẹp sắc viền đỏ sẫm, da vàng nhợt, mũ tròn đen nâu viền vàng đồng cũ bạc màu kết hợp nụ cười nhếch mép và ria cong lột tả kẻ bề ngoài cung kính nhưng bên trong đầy toan tính.”",
    },
    {
      heading: "Bài thuyết minh Tổ 4 — Mặt nạ Trùm Sò (Giải mã sắc diện & Tỷ lệ)",
      text: "“Trùm Sò là một trọc phú giàu có nhưng keo kiệt, bủn xỉn, tham của và dễ bị quan lại lợi dụng. Khuôn mặt tròn đầy nền trắng kem pha vàng nhạt nhợt nhạt gợi sự lo lắng bất an; đôi mắt mở to ngơ ngác cùng hàng lông mày nhíu lại, vệt nhăn trán và cái miệng cam đất hơi trề méo xệch khắc họa tâm trạng hoang mang, tiếc tiền nhưng vẫn phải cam chịu đút lót trước quyền lực quan huyện.”",
    },
    {
      heading: "Thông điệp Nghệ thuật Tuồng truyền thống (Đúc kết từ các Tổ Lớp 10.3)",
      text: "“Mỗi sản phẩm mặt nạ bìa carton tái chế không chỉ giúp người xem nhận diện ngay tính cách nhân vật từ cái nhìn đầu tiên trên sân khấu, mà còn giúp chúng em hiểu sâu sắc rằng nghệ thuật tuồng truyền thống kể chuyện và châm biếm hiện thực thối nát chốn quan trường ngay qua từng hình dáng, mã màu và đường cọ ước lệ.”",
    },
  ],
};

/**
 * 4. VIDEO THUYẾT MINH MẶT NẠ TRÊN LỚP (4 TỔ)
 */
export const HUYEN_DUONG_MASK_VIDEOS: GroupVideoSlot[] = [
  {
    id: "hd-video-to-2",
    groupName: "Tổ 2",
    characterFocus: "Đề lại",
    presenterInfo: "Thuyết minh: Tấn Tài & đại diện Tổ 2 • Quay dựng: Đăng Thành, Trần Gia Huy",
    durationBadge: "03:13",
    title: "Video thuyết minh mặt nạ Đề lại – Tổ 2 (Trực tiếp trên lớp)",
    description:
      "Hai đại diện Tổ 2 đứng trước bảng lớp 'Công minh chính trực – Huyện đường' thuyết minh chi tiết 4 phần: ý tưởng thiết kế, trích dẫn lời thoại mớm cung Thị Hến – Nguyễn Sò, ý nghĩa 4 gam màu trầm tối và thiết kế mũ phụ quan viền vàng đồng cũ.",
    videoUrl: "/student-products/huyen-duong/video-thuyet-minh-to-2.mp4",
    posterUrl: "/student-products/huyen-duong/ra-mat-to-2-de-lai.jpg",
    expectedPath: "/student-products/huyen-duong/video-thuyet-minh-to-2.mp4",
  },
  {
    id: "hd-video-to-3",
    groupName: "Tổ 3",
    characterFocus: "Lính lệ",
    presenterInfo: "Thuyết minh: Thu An • Quay dựng: Nhi, Tuấn",
    durationBadge: "01:50",
    title: "Video thuyết minh mặt nạ Lính lệ – Tổ 3 (Trực tiếp trên lớp)",
    description:
      "Đại diện Tổ 3 cầm sản phẩm mặt nạ Lính lệ đứng trước bảng lớp 'Công minh chính trực – Huyện đường' phân tích ý nghĩa mũ lính, chóp mũi đỏ hề tuồng và thái độ hách dịch của nhân vật.",
    videoUrl: "/student-products/huyen-duong/video-thuyet-minh-to-3.mp4",
    posterUrl: "/student-products/huyen-duong/ra-mat-to-3-linh-le.jpg",
    expectedPath: "/student-products/huyen-duong/video-thuyet-minh-to-3.mp4",
  },
  {
    id: "hd-video-to-4",
    groupName: "Tổ 4",
    characterFocus: "Trùm Sò",
    presenterInfo: "Thuyết minh: Minh Luân • Quay dựng: Bảo Ngọc, Hoàng Nam",
    durationBadge: "00:47",
    title: "Video thuyết minh mặt nạ Trùm Sò – Tổ 4 (Trực tiếp trên lớp)",
    description:
      "Đại diện Tổ 4 giới thiệu trực tiếp mặt nạ Trùm Sò trước lớp, giải mã gam màu vàng nghệ sạm tối, đôi mắt ngơ ngác lo sợ và khuôn miệng mếu máo xót của.",
    videoUrl: "/student-products/huyen-duong/video-thuyet-minh-to-4.mp4",
    posterUrl: "/student-products/huyen-duong/ra-mat-to-4-trum-so.jpg",
    expectedPath: "/student-products/huyen-duong/video-thuyet-minh-to-4.mp4",
  },
  {
    id: "hd-video-to-1",
    groupName: "Tổ 1",
    characterFocus: "Tri huyện",
    presenterInfo: "Thuyết minh: Phước Sang & đại diện Tổ 1 • Quay dựng: Yến Vy, Quý",
    durationBadge: "01:38",
    title: "Video thuyết minh mặt nạ Tri huyện – Tổ 1 (Trực tiếp trên lớp)",
    description:
      "Hai đại diện Tổ 1 giới thiệu mặt nạ Tri huyện trước bảng 'Công minh chính trực – Huyện đường', phân tích lớp vỏ đỏ son liêm chính giả tạo, họa tiết mây vàng sùng bái tiền bạc và biểu tượng ấn quan trên mũ cánh chuồn.",
    videoUrl: "/student-products/huyen-duong/video-thuyet-minh-to-1.mp4",
    posterUrl: "/student-products/huyen-duong/ra-mat-to-1-tri-huyen.jpg",
    expectedPath: "/student-products/huyen-duong/video-thuyet-minh-to-1.mp4",
  },
];

/**
 * 5. VIDEO DIỄN KỊCH: SẢN PHẨM SÂN KHẤU HÓA CHUNG CỦA LỚP 10.3
 */
export const HUYEN_DUONG_CLASS_DRAMA = {
  badge: "Sản phẩm sân khấu hóa chung • Lớp 10.3",
  title: "Diễn kịch Sân khấu hóa: Trích đoạn Huyện đường (Lớp 10.3)",
  description:
    "Hoạt động biểu diễn tổng hợp kết nối 4 mảnh ghép nhân vật của 4 Tổ trên sân khấu lớp học 'Công minh chính trực – Huyện đường' với đội ngũ diễn viên đại diện từng tổ.",
  videoUrl: "/student-products/huyen-duong/video-dien-kich-lop-10-3.mp4",
  durationBadge: "02:32",
  stageBackdropImage: "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg",
  posterUrl: "/student-products/huyen-duong/dien-kich-lop-10-3-canh-1.jpg",
  expectedPath: "/student-products/huyen-duong/video-dien-kich-lop-10-3.mp4",
  castList: [
    "Vai Tri huyện (Tổ 1): Tấn Lộc",
    "Vai Đề lại (Tổ 2): Tiến",
    "Vai Lính lệ (Tổ 3): Đạt",
    "Vai Trùm Sò (Tổ 4): Gia Khang",
    "Thiết kế bảng sân khấu Công đường: Khôi Nguyên, Ngọc Diệp",
  ],
  highlights: [
    "Sử dụng trực tiếp bộ mặt nạ bìa cứng thủ công do 4 Tổ tự nghiên cứu và chế tác",
    "Không gian bục giảng trang trí hoành phi đối xứng 'Chí vị quốc sự ý vô tư – Công minh chính trực – Trung hiếu nhân nghĩa giữ thủy chung'",
    "Kết hợp thuyết minh giải mã tạo hình trước khi bước vào phần nhập vai lời thoại tuồng đồ",
  ],
};

/**
 * HỒ SƠ CHUYÊN TRANG RIÊNG CHO TỪNG TỔ (TỔ 1, TỔ 2, TỔ 3, TỔ 4)
 * Đường dẫn: /trien-lam-so/to-1, /trien-lam-so/to-2, /trien-lam-so/to-3, /trien-lam-so/to-4
 */
export const HUYEN_DUONG_GROUPS_PORTFOLIO: StudentGroupPortfolio[] = [
  {
    slug: "to-1",
    groupName: "Tổ 1",
    groupNumber: "01",
    characterName: "Tri huyện",
    roleSubtitle: "Quan đầu huyện đội lốt thanh liêm • Tham nhũng & sùng bái tiền tài",
    classLabel: "Lớp 10.3 — Trường THPT Bình Phú",
    statusBadge: "Đầy đủ Mặt nạ, Bản vẽ, Word & 2 Video",
    hasRealMedia: true,
    statsSummary: "8 ảnh chọn lọc • 1 file Word (.docx) • 2 video (01:38 & 00:24)",
    infographicImage: "/student-products/huyen-duong/infographic-to-1.jpg",
    heroImage: "/student-products/huyen-duong/mat-na-to-1-tri-huyen.jpg",
    cinemaScenesImages: [
      "/student-products/huyen-duong/mat-na-to-1-tri-huyen.jpg",
      "/student-products/huyen-duong/phac-thao-to-1-tri-huyen.jpg",
      "/student-products/huyen-duong/ra-mat-to-1-tri-huyen.jpg",
    ],
    summary:
      "Chuyên trang đầy đủ tất cả hạng mục chọn lọc của Tổ 1 (Lớp 10.3 — THPT Bình Phú) phụ trách nhân vật Tri huyện: 2 bản vẽ kẻ ô ly chi tiết (khuôn mặt 14 × 16 cm và mũ cánh chuồn 15 × 5 cm), mặt nạ hoàn thiện nền đỏ son viền mây vàng, nguyên văn BÀI THUYẾT MINH tổ 1.docx, video thuyết minh 01:38, video hoạt động nhóm 00:24 và bộ ảnh thực hành tại lớp.",
    classicQuote:
      "“Làm quan như kiếp ăn buôn / Cốt sao vơ vét cho luôn đầy nhà.”",
    literaryContext:
      "Trong trích đoạn Huyện đường, Tri huyện hiện ra là kẻ đứng đầu bộ máy công quyền địa phương nhưng xử án hoàn toàn dựa trên túi tiền đút lót và sắc đẹp của Thị Hến, dùng lớp vỏ uy nghiêm để che đậy sự tham nhũng.",
    colorSwatches: [
      {
        hex: "#B91C1C",
        label: "Đỏ son (Nền khuôn mặt)",
        meaning: "Vẻ ngoài tỏ ra nhiệt huyết, công minh nhưng ngầm biểu thị sự xảo trá bên trong",
      },
      {
        hex: "#EAB308",
        label: "Vàng kim (Mây & ấn quan)",
        meaning: "Tượng trưng cho sự cao quý và tiền tài, phơi bày lòng tham vật chất",
      },
      {
        hex: "#18181B",
        label: "Đen tuyền (Mũ & ria mép)",
        meaning: "Tạo tương phản mạnh, tôn vẻ uy nghiêm vững chãi che đậy bản chất vụ lợi",
      },
    ],
    roster: HUYEN_DUONG_GROUP_ROSTER[0],
    maskProduct: {
      finishedMaskUrl: "/student-products/huyen-duong/mat-na-to-1-tri-huyen.jpg",
      sketchImageUrl: "/student-products/huyen-duong/phac-thao-to-1-tri-huyen.jpg",
      wearingOrStageUrl: "/student-products/huyen-duong/ra-mat-to-1-tri-huyen.jpg",
      wearingCaption:
        "Đại diện Tổ 1 cầm mặt nạ Tri huyện hoàn thiện trước bảng sân khấu 'Công minh chính trực – Huyện đường' (Lớp 10.3 – THPT Bình Phú).",
      dimensionsAndSpecs: [
        "Bản vẽ khuôn mặt (giấy ô ly): Rộng 14 cm × Cao 16 cm; mỗi hốc mắt rộng 6 cm; miệng rộng 4 cm; cằm cao 5 cm; họa tiết mây gò má cao 6 cm",
        "Bản vẽ mũ cánh chuồn: Thân mũ rộng 15 cm × Cao 5 cm có ấn tròn chính giữa; hai cánh chuồn hai bên dài 10,5 cm × Cao 3,5 cm có vân mây",
        "Đường nét tạo hình: Đôi mắt xếch sắc sảo viền vàng, sống mũi kẻ chỉ vàng nổi khối và bộ ria mép đen uốn cong uy nghiêm",
        "Kết cấu đeo biểu diễn: Phôi bìa carton cứng kèm dây thun trắng cố định chắc chắn khi diễn xuất sân khấu",
      ],
      artisticAnalysis:
        "Mặt nạ Tri huyện của Tổ 1 nổi bật nhờ sự tương phản giữa ba gam Đỏ son – Vàng kim – Đen tuyền trên cấu trúc mũ cánh chuồn đăng đối chuẩn xác. Như bài thuyết minh của nhóm giải mã: chiếc mặt nạ tạo vẻ ngoài nghiêm nghị, cao quý để làm 'lớp vỏ bọc hoàn hảo' che đậy lòng tham vật chất và thói nhũng nhiễu bên trong.",
      materialsUsed: [
        "Bìa carton cứng định hình phôi mặt nạ & hai cánh mũ chuồn",
        "Vở kẻ ô ly dựng bản vẽ thiết kế kỹ thuật (khuôn mặt & mũ quan)",
        "Màu acrylic đỏ son, vàng kim, đen tuyền & dây thun cố định",
      ],
      expectedDrivePath: "/student-products/huyen-duong/mat-na-to-1-tri-huyen.jpg",
    },
    writtenScript: {
      title: "Nguyên văn BÀI THUYẾT MINH tổ 1.docx — Mặt nạ Tri huyện",
      authorCredit:
        "Nội dung: Đức Duy, Anh Kiệt • Bản vẽ: Trà My, Khôi Nguyên • Thuyết trình: Phước Sang",
      isVerbatimFromDrive: true,
      docxDownloadUrl:
        "/student-products/huyen-duong/bai-thuyet-minh-to-1-tri-huyen.docx",
      rosterDocxUrl: "/student-products/huyen-duong/phan-cong-du-an-lop-10-3.docx",
      sections: [
        {
          heading: "1. Cảm hứng thiết kế & Màu nền đỏ son (Nguyên văn tệp Word Tổ 1)",
          text: "“Lấy cảm hứng từ hình tượng vị quan tri huyện thời xưa với tạo hình trang nghiêm, biểu thị sự liêm chính và công bằng ở bề ngoài. Tuy nhiên, sâu bên trong lớp vỏ bọc ấy lại ẩn chứa sự tham lam, xảo quyệt và tráo trở của kẻ nhũng nhiễu. Màu đỏ làm màu nền chủ đạo cho toàn bộ khuôn mặt: bề ngoài thể hiện sự nhiệt huyết, tấm lòng ngay thẳng và sự liêm chính, công minh; nhưng đồng thời cũng ngầm biểu thị sự xảo trá và tâm địa gian xảo bên trong.”",
        },
        {
          heading: "2. Ý nghĩa sắc vàng, sắc đen & chi tiết mũ quan (Nguyên văn tệp Word Tổ 1)",
          text: "“Màu vàng tô điểm cho các chi tiết hoa văn mây, viền mũ quan, biểu tượng tri huyện: tượng trưng cho sự cao quý và tiền tài, qua đó trực tiếp thể hiện lòng tham vật chất và sự sùng bái tiền bạc. Màu đen dùng cho phần mũ quan, viền mắt, chòm râu và cấu trúc khuôn mặt: tạo độ tương phản mạnh, tôn lên vẻ uy nghiêm, vững chãi, sự cẩn trọng và nét thâm trầm của nhân vật.”",
        },
        {
          heading: "3. Biểu tượng Tri huyện & Đường nét tạo hình (Nguyên văn tệp Word Tổ 1)",
          text: "“Biểu tượng tri huyện đặt ở trung tâm mũ quan, thoạt nhìn mang ý nghĩa bảo vệ công lý. Họa tiết mây thể hiện sự cao quý và vị thế tôn nghiêm của tầng lớp quan lại. Đường nét được trau chuốt sắc sảo, tạo vẻ mặt nghiêm nghị, đóng vai trò là chiếc mặt nạ hoàn hảo che đậy sự tham nhũng và vụ lợi bên trong.”",
        },
      ],
    },
    presentationVideo: HUYEN_DUONG_MASK_VIDEOS[3],
    processVideos: [HUYEN_DUONG_PROCESS_VIDEOS[0]],
    activityPhotos: [
      {
        id: "to1-act-sketch-hat",
        groupName: "Tổ 1 • Tri huyện",
        title: "Bản vẽ kỹ thuật mũ cánh chuồn Tri huyện (15 × 5 cm & cánh 10,5 cm)",
        caption:
          "Bản vẽ chi tiết trên giấy ô ly phần thân mũ quan có ấn tròn giữa trán và đôi cánh chuồn trang trí họa tiết mây.",
        imageUrl: "/student-products/huyen-duong/phac-thao-to-1-mao-quan.jpg",
      },
      {
        id: "to1-act-sketch-face",
        groupName: "Tổ 1 • Tri huyện",
        title: "Bản vẽ kỹ thuật khuôn mặt Tri huyện (14 × 16 cm)",
        caption:
          "Đo vẽ tỷ lệ từng bộ phận trên giấy ô ly: hai mắt 6 cm, miệng 4 cm, cằm 5 cm và hoa văn mây gò má.",
        imageUrl: "/student-products/huyen-duong/phac-thao-to-1-tri-huyen.jpg",
      },
      {
        id: "to1-act-drawing",
        groupName: "Tổ 1 • Tri huyện",
        title: "Thực hành phác thảo mặt nạ bên cạnh sách giáo khoa Ngữ văn 10",
        caption:
          "Thành viên Tổ 1 đối chiếu tài liệu hóa trang tuồng và vẽ phác thảo trực tiếp trên bàn học.",
        imageUrl: "/student-products/huyen-duong/hoat-dong-to-1-ve-phac-thao.jpg",
      },
      {
        id: "to1-act-sgk",
        groupName: "Tổ 1 • Tri huyện",
        title: "Đọc hiểu trích đoạn Huyện đường trong SGK Ngữ văn 10",
        caption:
          "Nhóm nội dung Tổ 1 tìm dẫn chứng lời thoại tự xưng và xử kiện của nhân vật Tri huyện.",
        imageUrl: "/student-products/huyen-duong/hoat-dong-to-1-doc-sgk.jpg",
      },
      {
        id: "to1-act-group",
        groupName: "Tổ 1 • Tri huyện",
        title: "Thảo luận nhóm & cắt phôi bìa cứng tại lớp học",
        caption:
          "Các thành viên Tổ 1 phối hợp đồng bộ giữa nhóm nội dung, nhóm vẽ và nhóm chế tác tại Lớp 10.3.",
        imageUrl: "/student-products/huyen-duong/hoat-dong-to-1-thao-luan-lop.jpg",
      },
      {
        id: "to1-act-closeup",
        groupName: "Tổ 1 • Tri huyện",
        title: "Cận cảnh mặt nạ Tri huyện hoàn thiện trước bảng 'Huyện đường'",
        caption:
          "Sản phẩm hoàn thiện nền đỏ son, mũ cánh chuồn đen viền vàng cùng hoa văn mây hai bên gò má.",
        imageUrl: "/student-products/huyen-duong/mat-na-to-1-tri-huyen.jpg",
      },
    ],
  },
  {
    slug: "to-2",
    groupName: "Tổ 2",
    groupNumber: "02",
    characterName: "Đề lại",
    roleSubtitle: "Phụ quan hầu cận gian xảo • Khéo luồn cúi & mưu lợi riêng",
    classLabel: "Lớp 10.3 — Trường THPT Bình Phú",
    statusBadge: "Đầy đủ Mặt nạ, Bản vẽ, Word & Video (03:13)",
    hasRealMedia: true,
    statsSummary: "8 hình ảnh • 1 file Word (.docx) • 1 video thuyết minh (03:13)",
    infographicImage: "/student-products/huyen-duong/infographic-to-2.jpg",
    heroImage: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
    cinemaScenesImages: [
      "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
      "/student-products/huyen-duong/phac-thao-to-2-de-lai.jpg",
      "/student-products/huyen-duong/ra-mat-to-2-de-lai.jpg",
    ],
    summary:
      "Chuyên trang đầy đủ tất cả hạng mục của Tổ 2 (Lớp 10.3 — THPT Bình Phú) phụ trách nhân vật Đề lại: quy trình 3 bước từ bản vẽ trục hình học → dưỡng giấy 1:1 → mặt nạ bìa carton xẻ tai uốn khối 3D viền mũ vàng đồng cũ, nguyên văn tệp Word thuyết minh (.docx), video thuyết trình 03 phút 13 giây trên bục giảng và bộ 6 ảnh thực hành tại lớp.",
    classicQuote:
      "“Vâng, hôm nay chả thấy ai kiện cáo gì cả. Còn vụ Thị Hến, Nguyễn Sò quan đã định dứt khoát như thế nào chưa?”",
    literaryContext:
      "Là phụ quan hầu cận bên cạnh Tri huyện, Đề lại bề ngoài cung kính nịnh nọt cấp trên qua từng lời nhắc khéo nhưng đằng sau là sự tính toán, mớm cung nhằm kiếm chác lợi ích cho bản thân.",
    colorSwatches: [
      {
        hex: "#2B211E",
        label: "Đen nâu (Mũ & ria)",
        meaning: "Thể hiện sự kín đáo, khó đoán và tâm địa gian xảo của phụ quan",
      },
      {
        hex: "#991B1B",
        label: "Đỏ sẫm (Mắt & môi)",
        meaning: "Khắc họa vẻ sắc sảo, mưu mô và tính cách không thật thà",
      },
      {
        hex: "#B59449",
        label: "Vàng đồng cũ (Viền mũ)",
        meaning: "Điểm nhấn bạc màu gợi thói ham danh lợi, thích địa vị của viên lại",
      },
      {
        hex: "#E8D3B9",
        label: "Da vàng nhợt",
        meaning: "Tạo sắc mặt thiếu tự nhiên, tô đậm nét xảo trá luồn cúi",
      },
    ],
    roster: HUYEN_DUONG_GROUP_ROSTER[1],
    maskProduct: {
      finishedMaskUrl: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
      sketchImageUrl: "/student-products/huyen-duong/phac-thao-to-2-de-lai.jpg",
      wearingOrStageUrl: "/student-products/huyen-duong/ra-mat-to-2-de-lai.jpg",
      wearingCaption:
        "Hai đại diện Tổ 2 cầm mặt nạ Đề lại hoàn chỉnh (đã gắn dải viền mũ màu vàng đồng cũ và dây đeo) thuyết minh trực tiếp trước bảng lớp 'Công minh chính trực – Huyện đường'.",
      dimensionsAndSpecs: [
        "Quy trình thiết kế 3 giai đoạn rõ nét: (1) Bản nháp hình học 'Mặt Nạ Của Đề Lại' → (2) Dưỡng giấy cắt khoét hốc mắt tỷ lệ 1:1 → (3) Phôi bìa carton hoàn chỉnh",
        "Kỹ thuật kết cấu 3D STEAM: Xẻ các tai bìa quanh viền kết hợp gấp nếp sống mũi dọc trục giữa để uốn tấm carton phẳng thành mặt nạ ôm sát khuôn mặt",
        "Chiếc mũ phụ quan: Dáng tròn đơn giản màu đen nâu cũ không cầu kỳ hoa văn, điểm dải viền màu vàng đồng bạc màu đúng thân phận nha lại",
        "Ngôn ngữ đường nét: Lông mày xếch cao, hốc mắt hẹp sắc tán đỏ sẫm, nụ cười nhếch mép, ria cong và chòm râu cằm nhọn hình tam giác",
      ],
      artisticAnalysis:
        "Bộ ảnh quá trình của Tổ 2 cho thấy tư duy chế tạo rất thông minh: thay vì vẽ thẳng lên bìa cứng, nhóm dựng bản trục đối xứng trên giấy đôi, chuyển sang dưỡng giấy tỷ lệ 1:1 để ướm thử độ cân xứng của hai hốc mắt xếch, rồi xẻ các rãnh tai gấp quanh mép bìa carton trước khi sơn lót nền vàng nhợt và tỉa nét đen nâu – đỏ sẫm.",
      materialsUsed: [
        "Bìa carton sóng tái chế xẻ tai gấp tạo khối 3D & dây đeo co giãn",
        "Giấy vở kẻ ngang dựng bản vẽ trục & dưỡng giấy cắt mẫu tỷ lệ 1:1",
        "Màu acrylic đen nâu, đỏ sẫm, vàng đồng cũ, da vàng nhợt & bộ cọ tỉa nét",
      ],
      expectedDrivePath: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
    },
    writtenScript: {
      title: "Nguyên văn BÀI THUYẾT MINH VỀ MẶT NẠ NHÂN VẬT ĐỀ LẠI.docx (Tổ 2)",
      authorCredit:
        "Nội dung: Yến Nhi, Hằng • Bản vẽ: Thanh Hải, Trúc • Thuyết trình: Tấn Tài & đại diện Tổ 2",
      isVerbatimFromDrive: true,
      docxDownloadUrl:
        "/student-products/huyen-duong/bai-thuyet-minh-to-2-de-lai.docx",
      rosterDocxUrl: "/student-products/huyen-duong/phan-cong-du-an-lop-10-3.docx",
      sections: [
        {
          heading: "1. Mở đầu & Ý tưởng thiết kế (Nguyên văn từ tệp Word Tổ 2)",
          text: "“Kính thưa thầy cô và các bạn! Hôm nay, Tổ 2 chúng em xin giới thiệu sản phẩm mặt nạ nhân vật Đề lại trong vở tuồng Quan huyện. Đây là một nhân vật phụ quan, người hầu cận bên cạnh Tri huyện. Thông qua chiếc mặt nạ, Tổ 2 chúng em muốn thể hiện hình ảnh một người có tính cách gian xảo, nịnh nọt, khéo luồn cúi và luôn tìm cách mưu lợi cho bản thân. Đôi lông mày được vẽ xếch lên, đôi mắt hẹp và sắc, kết hợp với nụ cười nhếch mép và bộ ria mép cong tạo cảm giác nhân vật đang che giấu suy nghĩ thật: bên ngoài tỏ ra thân thiện nhưng bên trong lại đầy toan tính, gắn với lời thoại: ‘Vâng, hôm nay chả thấy ai kiện cáo gì cả. Còn vụ Thị Hến, Nguyễn Sò quan đã định dứt khoát như thế nào chưa?’.”",
        },
        {
          heading: "2. Ý nghĩa màu sắc & Thiết kế chiếc mũ phụ quan (Nguyên văn từ tệp Word Tổ 2)",
          text: "“Màu sắc được lựa chọn theo hướng trầm, cũ và có phần u tối để phù hợp với hình ảnh người hầu, phụ quan trong huyện đường: Màu đen nâu sử dụng cho chiếc mũ và ria mép thể hiện sự kín đáo, khó đoán và gian xảo; Màu đỏ sẫm quanh mắt và môi thể hiện sự sắc sảo, mưu mô và không thật thà; Màu vàng đồng cũ tạo điểm nhấn ở viền mũ gợi sự ham danh lợi và thích địa vị; Màu da vàng nhợt làm khuôn mặt có vẻ thiếu tự nhiên, góp phần tạo nên nét xảo trá. Chiếc mũ có dạng tròn đơn giản, màu đen nâu cũ không hoa văn cầu kỳ, viền nâu đồng bạc màu phù hợp với thân phận phụ quan.”",
        },
        {
          heading: "3. Thông điệp nghệ thuật & Kết luận (Nguyên văn từ tệp Word Tổ 2)",
          text: "“Thông qua chiếc mặt nạ, Tổ 2 muốn làm nổi bật tính cách gian xảo, nịnh nọt và ham danh lợi của nhân vật Đề lại, đồng thời thể hiện đặc trưng nghệ thuật tuồng truyền thống: sử dụng hình dáng, màu sắc và nét vẽ trên khuôn mặt để khắc họa tính cách nhân vật ngay từ cái nhìn đầu tiên, góp phần giữ gìn và phát huy nét đẹp của nghệ thuật tuồng truyền thống Việt Nam. Tổ 2 chúng em xin cảm ơn thầy cô và các bạn đã lắng nghe!”",
        },
      ],
    },
    presentationVideo: HUYEN_DUONG_MASK_VIDEOS[0],
    processVideos: [],
    activityPhotos: [
      {
        id: "to2-act-3stages",
        groupName: "Tổ 2 • Đề lại",
        title: "Đối chiếu 3 bước: Bản vẽ trục – Dưỡng giấy 1:1 – Mặt nạ hoàn chỉnh",
        caption:
          "Toàn bộ hành trình thiết kế kỹ thuật của Tổ 2 từ trang giấy nháp có chữ 'Mặt Nạ Của Đề Lại' đến sản phẩm hoàn thiện có viền mũ vàng đồng.",
        imageUrl: "/student-products/huyen-duong/phac-thao-to-2-de-lai.jpg",
      },
      {
        id: "to2-act-painting3d",
        groupName: "Tổ 2 • Đề lại",
        title: "Sơn lót nền da vàng nhợt & tán hốc mắt đỏ sẫm trên phôi bìa xẻ tai 3D",
        caption:
          "Kỹ thuật xẻ rãnh các tai bìa xung quanh viền giúp uốn cong tấm carton phẳng thành khối 3 chiều ôm khuôn mặt.",
        imageUrl: "/student-products/huyen-duong/hoat-dong-to-2-son-nen-3d.jpg",
      },
      {
        id: "to2-act-stencil",
        groupName: "Tổ 2 • Đề lại",
        title: "Tinh chỉnh dưỡng giấy tỷ lệ 1:1 và cắt phôi bìa carton",
        caption:
          "Các thành viên Tổ 2 vẽ thử đường nét chân mày xếch, ria cong trên dưỡng giấy trước khi chuyển sang bìa cứng.",
        imageUrl: "/student-products/huyen-duong/hoat-dong-to-2-cat-duong-giay.jpg",
      },
      {
        id: "to2-act-prep",
        groupName: "Tổ 2 • Đề lại",
        title: "Chuẩn bị vật liệu bìa carton tái chế & dụng cụ pha màu tại lớp",
        caption:
          "Bàn làm việc nhóm của học sinh Tổ 2 (Lớp 10.3 – THPT Bình Phú) trong tiết thực hành chế tác mặt nạ STEAM.",
        imageUrl: "/student-products/huyen-duong/hoat-dong-to-2-chuan-bi-bia.jpg",
      },
      {
        id: "to2-act-brush",
        groupName: "Tổ 2 • Đề lại",
        title: "Chuẩn bị đầu cọ mảnh tỉa đường nét sắc sảo của nhân vật Đề lại",
        caption:
          "Thành viên Đăng Thành (Tổ 2) chỉnh cọ vẽ trước khi đi nét đen nâu cho chân mày và bộ ria mép.",
        imageUrl: "/student-products/huyen-duong/hoat-dong-to-2-pha-mau-co.jpg",
      },
      {
        id: "to2-mask-closeup",
        groupName: "Tổ 2 • Đề lại",
        title: "Cận cảnh thần thái mặt nạ Đề lại gấp sống mũi nổi 3D",
        caption:
          "Góc chụp trực diện làm nổi bật trục gấp sống mũi, hốc mắt tán đỏ sẫm và nụ cười nhếch mép đầy toan tính.",
        imageUrl: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
      },
    ],
  },
  {
    slug: "to-3",
    groupName: "Tổ 3",
    groupNumber: "03",
    characterName: "Lính lệ",
    roleSubtitle: "Tay sai công đường • Hách dịch với dân, khúm núm trước đồng tiền",
    classLabel: "Lớp 10.3 — Trường THPT Bình Phú",
    statusBadge: "Đầy đủ Mặt nạ, Bản vẽ & 3 Video",
    hasRealMedia: true,
    statsSummary: "10 hình ảnh • 1 video thuyết minh (01:50) • 2 video chế tác",
    infographicImage: "/student-products/huyen-duong/infographic-to-3.jpg",
    heroImage: "/student-products/huyen-duong/mat-na-to-3-linh-le.jpg",
    cinemaScenesImages: [
      "/student-products/huyen-duong/mat-na-to-3-linh-le.jpg",
      "/student-products/huyen-duong/phac-thao-to-3-linh-le.jpg",
      "/student-products/huyen-duong/ra-mat-to-3-linh-le.jpg",
    ],
    summary:
      "Chuyên trang toàn diện của Tổ 3 (Lớp 10.3 — THPT Bình Phú) phụ trách nhân vật Lính lệ: từ ghi chép phân tích văn bản, bản vẽ kỹ thuật tỷ lệ 18 × 24 cm, quá trình đắp đất sét nổi trên bìa carton cho tới buổi đeo thử và quay video thuyết minh 01 phút 50 giây trước lớp.",
    classicQuote:
      "“Đi kiện tay không mà đòi vào hầu quan lớn à? Có biết lệ làng chốn huyện đường không?”",
    literaryContext:
      "Lính lệ là cánh tay nối dài của thói quan liêu cửa quyền tại huyện đường: quát tháo ra oai để vòi tiền lẻ ngay từ cổng quan, nhưng lập tức đổi giọng ngọt nhạt khi thấy Trùm Sò xì tiền lót tay.",
    colorSwatches: [
      {
        hex: "#DC2626",
        label: "Đỏ tươi hề tuồng",
        meaning: "Chóp mũi tròn đắp nổi đỏ chót và gò má nóng nảy, hách dịch",
      },
      {
        hex: "#18181B",
        label: "Đen mão lính",
        meaning: "Mũ lính lệ viền vàng – tua đỏ cùng ria chữ bát vểnh ngược",
      },
      {
        hex: "#FFFFFF",
        label: "Viền trắng hốc mắt",
        meaning: "Tạo hiệu ứng đôi mắt trợn trừng soi mói túi tiền người đi kiện",
      },
    ],
    roster: HUYEN_DUONG_GROUP_ROSTER[2],
    maskProduct: {
      finishedMaskUrl: "/student-products/huyen-duong/mat-na-to-3-linh-le.jpg",
      sketchImageUrl: "/student-products/huyen-duong/phac-thao-to-3-linh-le.jpg",
      wearingOrStageUrl: "/student-products/huyen-duong/ra-mat-to-3-linh-le.jpg",
      wearingCaption:
        "Đại diện Tổ 3 giới thiệu mặt nạ Lính lệ hoàn thiện trước bảng lớp 'Công minh chính trực – Huyện đường'.",
      dimensionsAndSpecs: [
        "Kích thước tổng thể bản vẽ: Rộng 18 cm × Cao 24 cm (chia trục đối xứng dọc)",
        "Phần mũ lính lệ: Cao 7,5 cm, đắp nổi hoa văn vàng kim ở chính giữa và hai dải tua đỏ hai bên",
        "Hốc mắt & chân mày: Khoét mắt rộng 4 cm có viền trắng nổi bật; chân mày đen dày xếch cao",
        "Mũi & ria mép: Sống mũi đắp đất sét nổi với chóp mũi tròn đỏ Ø 1,5 cm; ria vểnh 3 nhánh dài 1,5 cm",
      ],
      artisticAnalysis:
        "Tổ 3 thể hiện quy trình thiết kế kỹ thuật STEAM cực kỳ bài bản: từ trang vở ghi chép đặc điểm tính cách nhân vật sang bản vẽ kỹ thuật có đường gióng kích thước chuẩn cm, rồi ứng dụng vật liệu đất sét tự khô đắp nổi khối mũi hề và họa tiết mão trên nền bìa cứng trước khi phủ màu acrylic.",
      materialsUsed: [
        "Bìa carton cứng khổ 18 × 24 cm & dây thun đeo sau đầu",
        "Đất sét trắng tự khô tạo khối nổi 3D cho mũi và hoa văn mão",
        "Màu acrylic đỏ tươi, đen, vàng kim, trắng kem",
      ],
      expectedDrivePath: "/student-products/huyen-duong/mat-na-to-3-linh-le.jpg",
    },
    writtenScript: {
      title: "Hồ sơ Phân tích Vai diễn & Bản Thuyết minh Tổ 3 (Lính lệ)",
      authorCredit:
        "Nội dung: Nhã Lan, Khánh Phương • Bản vẽ: Minh Trí, Hùng • Thuyết trình: Thu An",
      isVerbatimFromDrive: true,
      externalDocUrl:
        "https://ap.wps.com/cms/docs/d/cbTaqaBJOWVeiEL6?platform=pc&refer=copylink",
      rosterDocxUrl: "/student-products/huyen-duong/phan-cong-du-an-lop-10-3.docx",
      sections: [
        {
          heading: "Trích sổ tay phân tích nhân vật trên lớp của Tổ 3",
          text: "“1. Quát tháo, phân biệt đối xử: Chi tiết Lính lệ nói to, nạt nộ người dưới nhưng khúm núm với kẻ có tiền. 2. Vòi vĩnh trắng trợn ngay cổng công đường: Coi chuyện tiền lót tay là 'lệ thường' trước khi bẩm báo quan huyện.”",
        },
        {
          heading: "Tóm tắt bài thuyết minh mặt nạ Lính lệ trên bục giảng (01:50)",
          text: "Đại diện Tổ 3 (Thu An cùng bạn đồng hành) giới thiệu trực tiếp quy trình chuyển thể tính cách 'hách dịch – tham vặt – láu cá' của Lính lệ thành chiếc mũ lính viền vàng tua đỏ, đôi mắt viền trắng trợn ngược, chóp mũi hề đỏ tròn đắp nổi và bộ ria vểnh ngạo nghễ.",
        },
      ],
    },
    presentationVideo: HUYEN_DUONG_MASK_VIDEOS[1],
    processVideos: [HUYEN_DUONG_PROCESS_VIDEOS[2], HUYEN_DUONG_PROCESS_VIDEOS[3]],
    activityPhotos: [
      {
        id: "to3-act-sketching",
        groupName: "Tổ 3 • Lính lệ",
        title: "Tra cứu mã màu trên laptop & vẽ phác thảo mặt nạ Lính lệ",
        caption:
          "Các thành viên Tổ 3 vừa mở tài liệu hóa trang tuồng trên máy tính vừa phác thảo tỷ lệ mặt nạ trên bàn học.",
        imageUrl: "/student-products/huyen-duong/hoat-dong-to-3-ve-phac-thao.jpg",
      },
      ...HUYEN_DUONG_CLASSROOM_GALLERY.filter((p) =>
        p.groupName.startsWith("Tổ 3")
      ),
    ],
  },
  {
    slug: "to-4",
    groupName: "Tổ 4",
    groupNumber: "04",
    characterName: "Trùm Sò",
    roleSubtitle: "Trọc phú keo kiệt • Hoang mang sợ mất của nơi cửa quan",
    classLabel: "Lớp 10.3 — Trường THPT Bình Phú",
    statusBadge: "Đầy đủ Mặt nạ, Bản vẽ, Word & 2 Video",
    hasRealMedia: true,
    statsSummary: "10 hình ảnh • 1 file Word (.docx) • 2 video thực tế",
    infographicImage: "/student-products/huyen-duong/infographic-to-4.jpg",
    heroImage: "/student-products/huyen-duong/mat-na-to-4-trum-so.jpg",
    cinemaScenesImages: [
      "/student-products/huyen-duong/mat-na-to-4-trum-so.jpg",
      "/student-products/huyen-duong/phac-thao-to-4-trum-so.jpg",
      "/student-products/huyen-duong/ra-mat-to-4-trum-so.jpg",
    ],
    summary:
      "Chuyên trang đầy đủ tất cả hạng mục của Tổ 4 (Lớp 10.3 — THPT Bình Phú) phụ trách nhân vật Trùm Sò: bản vẽ thông số kỹ thuật đến từng milimet, mặt nạ bìa cứng hoàn thiện, nguyên văn tệp Word BÀI THUYẾT MINH.docx, video thuyết minh trên bục giảng (00:47), video hoạt động nhóm (01:08) và bộ 7 ảnh thực hành trên lớp.",
    classicQuote:
      "“Vâng, tôi xin hậu tạ, anh cứ giúp đỡ cho... Của đau con xót quá trời đất ơi!”",
    literaryContext:
      "Trùm Sò là lão nhà giàu keo kiệt đi kiện đòi của bị mất trộm, nhưng bước vào huyện đường lại rơi vào cảnh 'tiền mất tật mang', vừa run sợ trước uy quyền quan lại vừa xót đứt ruột từng đồng bạc đút lót.",
    colorSwatches: [
      {
        hex: "#F3E5AB",
        label: "Trắng kem pha vàng",
        meaning: "Sắc diện trọc phú giàu có nhưng bần thần, tái mét vì lo mất của",
      },
      {
        hex: "#D97742",
        label: "Cam đất trầm",
        meaning: "Đôi môi trề xệch mếu máo, uất ức mà không dám cãi lời quan",
      },
      {
        hex: "#27272A",
        label: "Đen chì nhăn nhó",
        meaning: "Đôi mày nhíu sát và các vệt nhăn trán biểu lộ tâm lý hoảng hốt",
      },
    ],
    roster: HUYEN_DUONG_GROUP_ROSTER[3],
    maskProduct: {
      finishedMaskUrl: "/student-products/huyen-duong/mat-na-to-4-trum-so.jpg",
      sketchImageUrl: "/student-products/huyen-duong/phac-thao-to-4-trum-so.jpg",
      wearingOrStageUrl: "/student-products/huyen-duong/ra-mat-to-4-trum-so.jpg",
      wearingCaption:
        "Đại diện Tổ 4 ra mắt sản phẩm mặt nạ Trùm Sò và trình bày bài thuyết minh trước bảng lớp trang trí 'Công minh chính trực – Huyện đường'.",
      dimensionsAndSpecs: [
        "Đôi mắt mở to ngơ ngác: Hai hốc mắt khoét cách nhau đúng 2 cm, chiều cao mỗi hốc mắt 3–4 cm",
        "Vệt nhăn trán & khóe mắt: 5 nét nhăn xiên cao 1 cm, mỗi vệt cách đều nhau 1 cm",
        "Lỗ thở nhân trắc học: Thiết kế lỗ thở bán kính 0,5 mm cân đối hai bên sống mũi",
        "Khuôn miệng mếu xệch: Chiều rộng 4–5 cm, khóe miệng kéo trễ xuống biểu đạt nỗi xót tiền",
      ],
      artisticAnalysis:
        "Bản phác thảo của Tổ 4 nổi bật nhờ tư duy đo lường chính xác tới từng cm và mm kết hợp chú thích tâm lý trực tiếp cạnh từng đường gióng ('Lông mày nhăn nhó, lo âu', 'Mắt mở to, ngơ ngác, sợ sệt', 'Môi méo xệch, lo sợ mất tiền'). Sản phẩm hoàn thiện giữ phom tròn đầy của lão nhà giàu với gam trắng kem – vàng nhạt hài hòa và biểu cảm bi hài rõ nét.",
      materialsUsed: [
        "Bìa carton tái chế thân thiện môi trường, an toàn khi biểu diễn",
        "Màu nước & màu acrylic trắng kem, vàng nhạt, cam đất, đen",
        "Thước kẻ, ê-ke, giấy A4 dựng bản vẽ kỹ thuật & tệp BÀI THUYẾT MINH.docx",
      ],
      expectedDrivePath: "/student-products/huyen-duong/mat-na-to-4-trum-so.jpg",
    },
    writtenScript: {
      title: "Nguyên văn BÀI THUYẾT MINH.docx — Mặt nạ Trùm Sò (Tổ 4)",
      authorCredit:
        "Biên soạn: Trung Nghĩa, Đăng Khoa • Thuyết minh trước lớp: Minh Luân",
      isVerbatimFromDrive: true,
      docxDownloadUrl:
        "/student-products/huyen-duong/bai-thuyet-minh-to-4-trum-so.docx",
      rosterDocxUrl: "/student-products/huyen-duong/phan-cong-du-an-lop-10-3.docx",
      sections: [
        {
          heading: "1. Giới thiệu chung & Đặt vấn đề (Nguyên văn từ tệp Word Tổ 4)",
          text: "“Xin chào cô và các bạn, hôm nay em đại diện cho Tổ 4 xin thuyết minh về sản phẩm thiết kế mặt nạ cho nhân vật Trùm Sò trong vở tuồng ‘Nghêu, Sò, Ốc, Hến’ – trích đoạn ‘Huyện đường’.”",
        },
        {
          heading: "2. Ý tưởng & Giải mã Đặc điểm Tạo hình (Nguyên văn từ tệp Word Tổ 4)",
          text: "“Trùm Sò là một trọc phú giàu có nhưng keo kiệt, bủn xỉn, tham của và thiếu hiểu biết, dễ bị quan lại lợi dụng. Dựa trên những nét tính cách điển hình đó, nhóm em đã thiết kế chiếc mặt nạ mang đậm tính ước lệ và châm biếm của nghệ thuật tuồng truyền thống: Khuôn mặt tròn đầy thể hiện sự sung túc, giàu có của một địa chủ; Đôi mắt mở to ngơ ngác, lo âu kết hợp cùng hàng lông mày nhíu lại và những nếp nhăn khắc họa tâm trạng hoang mang, sợ mất của khi đứng trước công đường; Miệng hơi trề, méo xệch biểu lộ sự bất mãn, tiếc tiền nhưng vẫn phải cam chịu trước quyền lực của quan huyện; Màu trắng kem pha vàng nhạt làm chủ đạo tượng trưng cho tiền bạc nhưng không rực rỡ mà có phần nhợt nhạt, gợi cảm giác lo lắng, bất an; Vùng má và môi màu cam đất nhẹ thể hiện vẻ quê mùa, thực dụng của tầng lớp trọc phú.”",
        },
        {
          heading: "3. Chất liệu STEAM & Ý nghĩa Nghệ thuật (Nguyên văn từ tệp Word Tổ 4)",
          text: "“Về chất liệu, mặt nạ được làm hoàn toàn từ bìa carton tái chế kết hợp màu nước/acrylic, vừa thân thiện với môi trường, nhẹ nhàng, an toàn khi sử dụng biểu diễn, vừa phát huy tính sáng tạo thủ công của các thành viên trong tổ. Chiếc mặt nạ không chỉ giúp người xem nhận diện ngay ngoại hình, tính cách của Trùm Sò khi bước ra sân khấu mà còn góp phần làm nổi bật tiếng cười phê phán thói tham lam, keo kiệt cũng như hiện thực thối nát chốn quan trường phong kiến xưa. Em xin cảm ơn cô và các bạn đã lắng nghe!”",
        },
      ],
    },
    presentationVideo: HUYEN_DUONG_MASK_VIDEOS[2],
    processVideos: [HUYEN_DUONG_PROCESS_VIDEOS[1]],
    activityPhotos: [
      {
        id: "to4-act-cutting",
        groupName: "Tổ 4 • Trùm Sò",
        title: "Nhóm chế tác Tổ 4 đo cắt phôi bìa carton trên lớp",
        caption:
          "Các thành viên Tổ 4 phối hợp cắt phôi bìa cứng và đối chiếu bản phác thảo ngay tại bàn học.",
        imageUrl: "/student-products/huyen-duong/hoat-dong-to-4-cat-bia.jpg",
      },
      ...HUYEN_DUONG_CLASSROOM_GALLERY.filter((p) =>
        p.groupName.startsWith("Tổ 4")
      ),
    ],
  },
];

export function getStudentGroupBySlug(
  slug: string
): StudentGroupPortfolio | undefined {
  return HUYEN_DUONG_GROUPS_PORTFOLIO.find((g) => g.slug === slug);
}

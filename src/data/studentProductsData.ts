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
}

export const HUYEN_DUONG_STUDENT_ARCHIVE_META = {
  badge: "HỒ SƠ SẢN PHẨM THỰC TẾ • LỚP 10.3 – THPT BÌNH PHÚ",
  title: "SẢN PHẨM HỌC SINH DỰ ÁN HUYỆN ĐƯỜNG (LỚP 10.3)",
  subtitle:
    "Tổng hợp tư liệu thực tế từ thư mục Google Drive Dự án Huyện đường của 4 Tổ (Lớp 10.3 – Trường THPT Bình Phú): 18 hình ảnh thảo luận & mặt nạ hoàn thiện, bản vẽ phác thảo tỷ lệ kỹ thuật, bảng phân công & bản Word thuyết minh, cùng các video thuyết minh trên bục giảng và video công đoạn chế tác.",
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
    title: "Phân tích vai Tri huyện & thiết kế mặt nạ quan huyện",
    caption:
      "Phụ trách hình ảnh & video: Yến Vy, Quý • Chế tác: Gia Bảo, Băng Băng, Tấn Phúc, Băng Dương (Thư mục Hình ảnh t1 đang chờ cập nhật tệp).",
    imageUrl: "",
    expectedPath: "Tổ 1 / Hình ảnh t1 (Google Drive)",
    membersSummary: "ND: Đức Duy, Anh Kiệt • Vẽ: Trà My, Khôi Nguyên",
  },
  {
    id: "hd-activity-to-2",
    groupName: "Tổ 2",
    characterRole: "Đề lại",
    title: "Chế tác & hoàn thiện mặt nạ bìa cứng nhân vật Đề lại",
    caption:
      "Sản phẩm mặt nạ Đề lại của Tổ 2 sử dụng bìa carton gấp sống mũi nổi 3D, phối màu acrylic đen – đỏ son – trắng ngà sắc nét.",
    imageUrl: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
    expectedPath: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
    membersSummary: "Chế tác: Vũ Thiên, Diệp, Kiều Oanh, Quỳnh Anh",
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
 * 1B. BỘ SƯU TẬP ẢNH HOẠT ĐỘNG & SẢN PHẨM TRÊN LỚP (TỔ 3 & TỔ 4)
 */
export const HUYEN_DUONG_CLASSROOM_GALLERY: ExtraClassroomPhoto[] = [
  {
    id: "gal-to3-wear",
    groupName: "Tổ 3 • Lính lệ",
    title: "Thử nghiệm dây đeo mặt nạ Lính lệ trước bảng Công đường",
    caption:
      "Kiểm tra quai đeo bìa cứng và tầm nhìn hai hốc mắt trước bảng phấn 'Công minh chính trực – Huyện đường'.",
    imageUrl: "/student-products/huyen-duong/deo-thu-mat-na-to-3.jpg",
  },
  {
    id: "gal-to3-notes",
    groupName: "Tổ 3 • Lính lệ",
    title: "Ghi chép phân tích tính cách nhân vật Lính lệ",
    caption:
      "Sổ tay học sinh ghi rõ: '1. Quát tháo, phân biệt đối xử – Chi tiết Lính lệ A nói to, hách dịch với người dưới, khúm núm với kẻ có tiền'.",
    imageUrl: "/student-products/huyen-duong/hoat-dong-to-3-phan-tich-vai.jpg",
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
    posterUrl: "/student-products/huyen-duong/deo-thu-mat-na-to-3.jpg",
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
      "Nhân vật quan đầu huyện bề ngoài đạo mạo nhưng tham của đút lót (Đang chờ Tổ 1 tải ảnh bản vẽ & mặt nạ lên Drive).",
    analysisNote:
      "Định hướng tạo hình: Khuôn mặt trắng mốc pha sắc đỏ gò má, mão cánh chuồn và chòm râu dài biểu trưng quyền uy chốn quan trường.",
    sketchImageUrl: "",
    finishedMaskUrl: "",
    imageUrl: "",
    expectedPath: "Tổ 1 / Hình ảnh t1 (Google Drive)",
  },
  {
    id: "hd-sketch-to-2",
    groupName: "Tổ 2",
    characterName: "Mặt nạ Đề lại",
    designers: "Bản vẽ: Thanh Hải, Trúc • Chế tác: Vũ Thiên, Diệp, Kiều Oanh, Quỳnh Anh",
    sketchNote:
      "Mặt nạ bìa carton gấp nếp sống mũi 3D, mão đen, đôi mày đen xếch ngược trên hốc mắt tán đỏ son và ria mép vểnh nhọn hai bên.",
    analysisNote:
      "Phân tích tạo hình: Đường gấp dọc trục giữa giúp mặt nạ ôm khối khuôn mặt; cặp chân mày xếch sắc lẹm kết hợp hàng ria vểnh và chòm râu cằm nhọn khắc họa thần thái khôn lỏi, luồn cúi và mưu mô của viên Đề lại.",
    sketchImageUrl: "",
    finishedMaskUrl: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
    imageUrl: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
    expectedPath: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
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
  title: "Bản Word Thuyết minh Mặt nạ & Hồ sơ Phân công Lớp 10.3",
  fileName: "bai-thuyet-minh-to-4-trum-so.docx",
  docxUrl: "/student-products/huyen-duong/bai-thuyet-minh-to-4-trum-so.docx",
  rosterDocxUrl: "/student-products/huyen-duong/phan-cong-du-an-lop-10-3.docx",
  to3ExternalDocUrl:
    "https://ap.wps.com/cms/docs/d/cbTaqaBJOWVeiEL6?platform=pc&refer=copylink",
  expectedPath: "/student-products/huyen-duong/bai-thuyet-minh-to-4-trum-so.docx",
  summaryNote:
    "Nguyên văn bài thuyết minh sản phẩm mặt nạ nhân vật Trùm Sò của Tổ 4 (Minh Luân trình bày) trích từ tệp BÀI THUYẾT MINH.docx trên Google Drive, kèm liên kết tài liệu thuyết minh Tổ 3 và bảng phân công nhiệm vụ cả 4 tổ Lớp 10.3.",
  scriptSections: [
    {
      heading: "Mở đầu — Đối sánh vị thế nhân vật chốn Huyện đường (Bài thuyết minh Tổ 4)",
      text: "“Kính thưa cô và các bạn! Nếu Tri huyện là kẻ ‘sâu mọt’ đội lốt thanh liêm, Đề lại và Lính lệ là lũ tay sai nham hiểm, thì Trùm Sò lại hiện lên như một bức biếm họa chua chát về thân phận kẻ có của nhưng ‘thấp cổ bé họng’ chốn công đường.”",
    },
    {
      heading: "Giải mã ngôn ngữ màu sắc & đường nét mặt nạ Trùm Sò",
      text: "“Nhìn vào chiếc mặt nạ của Tổ 4, các bạn có thể thấy rõ tâm lý ấy qua nền màu vàng nghệ sạm tối – biểu trưng cho sự căng thẳng, lo âu. Đôi lông mày nhíu chặt tạo nếp nhăn trên trán, đôi mắt mở to ngơ ngác, sợ sệt trước uy quyền của lính lệ, cùng khóe môi trễ xuống mếu máo lột tả trọn vẹn tình thế ‘nắm kẻ có tóc’ – vừa xót của vừa phải nhún nhường.”",
    },
    {
      heading: "Kết nối lời thoại SGK & Thông điệp châm biếm hiện thực",
      text: "“Qua lời thoại đắt giá ‘Vâng, tôi xin hậu tạ, anh cứ giúp đỡ cho’ cùng dáng vẻ ôm khư khư bọc bạc khúm núm dâng tiền, nhân vật Trùm Sò đã phơi bày một sự thật trớ trêu: ở chốn ‘công minh chính trực’ giả tạo này, người đi kiện muốn được việc thì trước hết phải tự biến mình thành kẻ đút lót. Phần thuyết minh của Tổ 4 xin được khép lại, mời cô và các bạn cùng theo dõi trích đoạn vi diễn ngay sau đây!”",
    },
  ],
};

/**
 * 4. VIDEO THUYẾT MINH MẶT NẠ TRÊN LỚP (4 TỔ)
 */
export const HUYEN_DUONG_MASK_VIDEOS: GroupVideoSlot[] = [
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
    posterUrl: "/student-products/huyen-duong/poster-thuyet-minh-to-3.jpg",
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
    presenterInfo: "Thuyết minh: Phước Sang • Quay dựng: Yến Vy, Quý",
    title: "Video thuyết minh mặt nạ Tri huyện – Tổ 1",
    description:
      "Khung lưu trữ bài thuyết minh mặt nạ Tri huyện của Tổ 1 (sẽ tự động hiển thị ngay khi Tổ 1 bổ sung tệp video lên thư mục Google Drive).",
    videoUrl: "",
    expectedPath: "Tổ 1 / Video thuyết minh (Đang chờ cập nhật)",
  },
  {
    id: "hd-video-to-2",
    groupName: "Tổ 2",
    characterFocus: "Đề lại",
    presenterInfo: "Thuyết minh: Tấn Tài • Quay dựng: Đăng Thành, Trần Gia Huy",
    title: "Video thuyết minh mặt nạ Đề lại – Tổ 2",
    description:
      "Khung lưu trữ bài thuyết minh mặt nạ Đề lại của Tổ 2 kèm hình ảnh sản phẩm mặt nạ đã hoàn thiện.",
    videoUrl: "",
    posterUrl: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
    expectedPath: "Tổ 2 / Video thuyết minh (Đang chờ cập nhật)",
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
  videoUrl: "",
  stageBackdropImage: "/student-products/huyen-duong/ra-mat-to-4-trum-so.jpg",
  expectedPath: "Dự án Huyện đường / Video diễn kịch lớp 10.3 (Đang chờ cập nhật)",
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
    roleSubtitle: "Quan đầu huyện đội lốt thanh liêm • Tham nhũng & háo sắc",
    classLabel: "Lớp 10.3 — Trường THPT Bình Phú",
    statusBadge: "Đã có phân công • Chờ tải ảnh & video",
    hasRealMedia: false,
    statsSummary: "12 thành viên • Vai Tri huyện • Chờ cập nhật tệp Drive",
    heroImage: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
    cinemaScenesImages: [
      "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
      "/images/cinema/scene-03-sac-tuong.png",
      "/student-products/huyen-duong/ra-mat-to-4-trum-so.jpg",
    ],
    summary:
      "Chuyên trang lưu trữ sản phẩm của Tổ 1 (Lớp 10.3 — THPT Bình Phú) phụ trách nhân vật Tri huyện trong trích đoạn Huyện đường (Nghêu, Sò, Ốc, Hến). Thành viên Khôi Nguyên của Tổ 1 cũng trực tiếp tham gia vẽ trang trí bức hoành phi phấn sân khấu Công đường cho cả lớp.",
    classicQuote:
      "“Làm quan như kiếp ăn buôn / Cốt sao vơ vét cho luôn đầy nhà.”",
    literaryContext:
      "Trong trích đoạn Huyện đường, Tri huyện hiện ra là kẻ đứng đầu bộ máy công quyền địa phương nhưng xử án hoàn toàn dựa trên túi tiền đút lót và sắc đẹp của Thị Hến, biến chốn công đường thành sàn ngã giá trơ trẽn.",
    colorSwatches: [
      {
        hex: "#F5EFE6",
        label: "Trắng mốc",
        meaning: "Vẻ mặt quan lại đạo mạo giả tạo, che giấu tâm địa bất chính",
      },
      {
        hex: "#B91C1C",
        label: "Đỏ son gò má",
        meaning: "Dục vọng tham của, háo sắc ẩn dưới lớp vỏ uy quyền",
      },
      {
        hex: "#1F110E",
        label: "Đen mực tàu",
        meaning: "Mão cánh chuồn & chòm râu ba chòm biểu trưng quyền lực quan trường",
      },
    ],
    roster: HUYEN_DUONG_GROUP_ROSTER[0],
    maskProduct: {
      finishedMaskUrl: "",
      sketchImageUrl: "",
      wearingOrStageUrl: "/student-products/huyen-duong/ra-mat-to-4-trum-so.jpg",
      wearingCaption:
        "Không gian bảng phấn sân khấu 'Chí vị quốc sự ý vô tư – Công minh chính trực – Huyện đường' có sự đóng góp mỹ thuật của Khôi Nguyên (Tổ 1) và Ngọc Diệp.",
      dimensionsAndSpecs: [
        "Nhân vật đảm nhận: Quan Tri huyện (đứng đầu phiên xử Huyện đường)",
        "Phụ trách bản vẽ phác thảo: Trà My, Khôi Nguyên",
        "Phụ trách chế tác mặt nạ: Gia Bảo, Băng Băng, Tấn Phúc, Băng Dương",
        "Trạng thái thư mục Drive (Tổ 1 / Hình ảnh t1): Đang chờ Tổ 1 tải ảnh bản vẽ & mặt nạ hoàn thiện",
      ],
      artisticAnalysis:
        "Theo định hướng phân công của Lớp 10.3, mặt nạ Tri huyện tập trung làm nổi bật sự đối lập trào phúng giữa mũ quan cánh chuồn uy nghiêm, chòm râu dài đạo mạo với ánh mắt ti hí và sắc mặt trắng mốc gian xảo của viên quan tham nhũng.",
      materialsUsed: [
        "Bìa carton cứng định hình phôi mặt nạ & mão quan",
        "Màu acrylic trắng ngà, đỏ son, đen và vàng kim",
        "Bảng phân công nhiệm vụ Lớp 10.3 (.docx)",
      ],
      expectedDrivePath: "Dự án Huyện đường / Tổ 1 / Hình ảnh t1",
    },
    writtenScript: {
      title: "Hồ sơ Nội dung & Phân công Tổ 1 — Nhân vật Tri huyện",
      authorCredit:
        "Nội dung: Đức Duy, Anh Kiệt • Thuyết trình: Phước Sang • Diễn kịch: Tấn Lộc",
      isVerbatimFromDrive: false,
      rosterDocxUrl: "/student-products/huyen-duong/phan-cong-du-an-lop-10-3.docx",
      sections: [
        {
          heading: "1. Vai trò của nhân vật Tri huyện trong tứ giác Huyện đường",
          text: "Tri huyện nắm quyền phán quyết tối cao tại nha môn nhưng câu kết ngầm cùng Đề lại để vơ vét tiền của cả nguyên đơn lẫn bị đơn. Tiếng cười châm biếm bật ra ngay từ lời tự giới thiệu không chút giấu giếm bản chất tham quan của nhân vật.",
        },
        {
          heading: "2. Định hướng thuyết minh giải mã mặt nạ của Tổ 1",
          text: "Bộ phận nội dung (Đức Duy, Anh Kiệt) và người thuyết trình (Phước Sang) đảm nhận việc liên kết từng chi tiết mão quan, nét mày, chòm râu trên mặt nạ với các lời thoại xử kiện thiên vị trong SGK Ngữ văn 10.",
        },
      ],
    },
    presentationVideo: HUYEN_DUONG_MASK_VIDEOS[2],
    processVideos: [],
    activityPhotos: [],
  },
  {
    slug: "to-2",
    groupName: "Tổ 2",
    groupNumber: "02",
    characterName: "Đề lại",
    roleSubtitle: "Viên lại già mưu mô • Môi giới hối lộ & bẻ cong hồ sơ",
    classLabel: "Lớp 10.3 — Trường THPT Bình Phú",
    statusBadge: "Đã cập nhật Mặt nạ hoàn thiện",
    hasRealMedia: true,
    statsSummary: "12 thành viên • 1 Mặt nạ 3D hoàn thiện • Đã nghiệm thu ảnh",
    heroImage: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
    cinemaScenesImages: [
      "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
      "/images/cinema/scene-03-sac-tuong.png",
      "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
    ],
    summary:
      "Chuyên trang trưng bày sản phẩm thực tế của Tổ 2 (Lớp 10.3 — THPT Bình Phú) với chiếc mặt nạ Đề lại hoàn thiện nổi bật nhờ kỹ thuật gập sống mũi bìa carton tạo khối 3D, đôi mày đen xếch ngược sắc lẹm và hàng ria mép vểnh nhọn đặc trưng lối ước lệ Tuồng đồ.",
    classicQuote:
      "“Việc quan có lệ thường tình / Tiền vào cửa trước, án rình đổi thay.”",
    literaryContext:
      "Đề lại là kẻ nắm giữ giấy tờ, luật lệ tại công đường, chuyên bày mưu tính kế gợi ý đút lót và mớm cung cho quan Tri huyện, tạo nên cặp bài trùng tham nhũng từ trên xuống dưới.",
    colorSwatches: [
      {
        hex: "#1A1615",
        label: "Đen tuyền",
        meaning: "Mão nha lại, cặp mày xếch sắc lẹm và ria vểnh mưu mô",
      },
      {
        hex: "#B91C1C",
        label: "Đỏ son hốc mắt",
        meaning: "Tán bầu mắt đỏ sâu cùng đôi môi mím đỏ chót đầy toan tính",
      },
      {
        hex: "#EAD6C2",
        label: "Ngà da pha nâu",
        meaning: "Làn da từng trải kết hợp nếp nhăn trán của kẻ lão luyện chốn nha môn",
      },
    ],
    roster: HUYEN_DUONG_GROUP_ROSTER[1],
    maskProduct: {
      finishedMaskUrl: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
      sketchImageUrl: "",
      wearingOrStageUrl: "",
      dimensionsAndSpecs: [
        "Kỹ thuật tạo khối: Gấp nếp dọc chính giữa tấm bìa carton sóng tạo sống mũi 3D tự đứng vững",
        "Phần trán & mão: Mão nha lại sơn đen tuyền ôm gọn phần trán có vạch nếp nhăn mảnh",
        "Đôi mắt & chân mày: Hốc mắt khoét xếch hình thoi nhọn, bầu mắt tán đỏ son chuyển sắc, mày đen xếch ngược hai tầng",
        "Ria mép & cằm: Ria đen uốn vểnh nhọn hai bên má, môi đỏ mím cười khẩy và chòm râu cằm nhọn",
      ],
      artisticAnalysis:
        "Chiếc mặt nạ Đề lại của Tổ 2 đạt hiệu quả thị giác sân khấu rất cao: học sinh tận dụng chính các sọc gân dọc của bìa carton kết hợp đường gấp sống mũi sắc nét để bắt ánh đèn sân khấu. Cặp chân mày đen nhọn vút lên thái dương đối xứng với hàng ria mép cong vểnh tạo nên nụ cười vừa khúm núm nịnh trên, vừa ranh mãnh bắt chẹt kẻ dưới.",
      materialsUsed: [
        "Bìa carton sóng cứng gấp nếp khối 3D",
        "Màu acrylic đen mực tàu, đỏ son, trắng ngà và nâu đất",
        "Cọ đầu nhọn tỉa ria mép, chân mày và nếp nhăn trán",
      ],
      expectedDrivePath: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
    },
    writtenScript: {
      title: "Hồ sơ Giải mã Mặt nạ Đề lại & Phân công Tổ 2",
      authorCredit:
        "Nội dung: Yến Nhi, Hằng • Chế tác: Vũ Thiên, Diệp, Kiều Oanh, Bùi Võ Quỳnh Anh • Thuyết trình: Tấn Tài",
      isVerbatimFromDrive: false,
      rosterDocxUrl: "/student-products/huyen-duong/phan-cong-du-an-lop-10-3.docx",
      sections: [
        {
          heading: "1. Ý nghĩa đường gấp khối 3D và sắc diện Đề lại",
          text: "Khác với gương mặt bệ vệ của Tri huyện hay vẻ ngơ ngác của Trùm Sò, mặt nạ Đề lại của Tổ 2 thuôn nhọn dần về phía cằm với đường sống mũi gấp góc rõ rệt, gợi liên tưởng ngay tới sự sắc sảo, luồn lách tinh ranh nơi cửa quan.",
        },
        {
          heading: "2. Ngôn ngữ đường cọ: Mày xếch – Mắt đỏ – Ria vểnh",
          text: "Tổ 2 sử dụng ba điểm nhấn đen tuyền (mão đen, mày xếch kép và ria vểnh có ngạnh dưới) bao quanh vùng mắt tán đỏ son và đôi môi đỏ mím chặt, lột tả trọn vẹn kẻ chuyên 'đổi trắng thay đen' trên từng trang hồ sơ xử kiện.",
        },
      ],
    },
    presentationVideo: HUYEN_DUONG_MASK_VIDEOS[3],
    processVideos: [],
    activityPhotos: [
      {
        id: "to2-mask-closeup",
        groupName: "Tổ 2 • Đề lại",
        title: "Cận cảnh mặt nạ Đề lại hoàn thiện của Tổ 2",
        caption:
          "Sản phẩm mặt nạ bìa cứng gấp nếp 3D hoàn thiện của Tổ 2 chụp trực diện dưới ánh sáng thực tế.",
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
    statsSummary: "9 hình ảnh • 1 video thuyết minh (01:50) • 2 video chế tác",
    heroImage: "/student-products/huyen-duong/mat-na-to-3-linh-le.jpg",
    cinemaScenesImages: [
      "/student-products/huyen-duong/mat-na-to-3-linh-le.jpg",
      "/student-products/huyen-duong/phac-thao-to-3-linh-le.jpg",
      "/student-products/huyen-duong/deo-thu-mat-na-to-3.jpg",
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
      wearingOrStageUrl: "/student-products/huyen-duong/deo-thu-mat-na-to-3.jpg",
      wearingCaption:
        "Học sinh Tổ 3 đeo thử mặt nạ Lính lệ kiểm tra dây co giãn và tầm nhìn trước bảng lớp 'Công minh chính trực – Huyện đường'.",
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
    presentationVideo: HUYEN_DUONG_MASK_VIDEOS[0],
    processVideos: [
      HUYEN_DUONG_PROCESS_VIDEOS[1],
      HUYEN_DUONG_PROCESS_VIDEOS[2],
    ],
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
    statsSummary: "9 hình ảnh • 1 file Word (.docx) • 2 video thực tế",
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
    presentationVideo: HUYEN_DUONG_MASK_VIDEOS[1],
    processVideos: [HUYEN_DUONG_PROCESS_VIDEOS[0]],
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

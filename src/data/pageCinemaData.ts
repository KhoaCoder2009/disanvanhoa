import type { CinemaScene } from "@/components/ScrollVisualCinema";

/**
 * Kịch bản trình chiếu cuộn giữ khung hình (Sticky Scroll-Scrubbed Cinema)
 * chuyên biệt 100% cho Dự án Ngữ văn 10 – STEAM: Tuồng đồ Huyện đường (Lớp 10.3 – THPT Bình Phú).
 */

export const BAO_TANG_SO_CINEMA: CinemaScene[] = [
  {
    id: "bts-01",
    title: "BẢO TÀNG SỐ TUỒNG ĐỒ HUYỆN ĐƯỜNG",
    isHeroTitle: true,
    slogan: "Khám phá nghệ thuật trào phúng dân gian Nghêu, Sò, Ốc, Hến",
    description:
      "Hệ thống hóa 3 không gian trưng bày chuyên sâu: ngôn ngữ hóa trang mặt nạ ước lệ, tứ đại nhân vật công đường và bối cảnh sân khấu hóa Lớp 10.3.",
    ctaLabel: "Vào 3 Phòng Trưng bày",
    ctaHref: "#noi-dung-bao-tang",
    detailHref: "#noi-dung-bao-tang",
    detailLabel: "Tổng quan 3 Phòng Trưng bày Bảo tàng số",
    image: "/images/cinema/scene-01-di-san.png",
    transitionType: "base",
  },
  {
    id: "bts-02",
    title: "SẮC TUỒNG — MÃ MÀU CÔNG ĐƯỜNG",
    slogan: "Trắng mốc giả nhân • Đen nâu gian xảo • Đỏ hề tuồng • Vàng nhợt lo âu",
    description:
      "Khảo sát cách nghệ nhân dân gian mã hóa bản chất trung – nịnh – tham – hèn ngay trên từng đường cọ và tỷ lệ đối xứng.",
    ctaLabel: "Xem Phòng Sắc Tuồng",
    ctaHref: "#noi-dung-bao-tang",
    detailHref: "/bao-tang-so/sac-tuong-huyen-duong",
    detailLabel: "Phòng 01: Sắc Tuồng Huyện đường",
    image: "/images/cinema/scene-03-sac-tuong.png",
    transitionType: "iris-right",
  },
  {
    id: "bts-03",
    title: "TỨ ĐẠI NHÂN VẬT HUYỆN ĐƯỜNG",
    slogan: "Tri huyện • Đề lại • Lính lệ • Trùm Sò",
    description:
      "Phân tích ngữ cảnh công đường trong trích đoạn Nghêu, Sò, Ốc, Hến làm nền tảng chế tác mặt nạ 3D bìa cứng của 4 Tổ.",
    ctaLabel: "Giải mã Tứ giác Nhân vật",
    ctaHref: "#noi-dung-bao-tang",
    detailHref: "/bao-tang-so/tu-dai-nhan-vat",
    detailLabel: "Phòng 02: Công đường & Bốn nhân vật",
    image: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
    transitionType: "curtain-up",
  },
  {
    id: "bts-04",
    title: "BỐI CẢNH SÂN KHẤU LỚP HỌC 10.3",
    slogan: "Hoành phi 'Công minh chính trực – Huyện đường' (THPT Bình Phú)",
    description:
      "Không gian bảng lớp trang trí công phu làm phông nền cho chuỗi thuyết minh mặt nạ và vở diễn kịch chung của tập thể Lớp 10.3.",
    ctaLabel: "Xem Phòng Sân khấu hóa",
    ctaHref: "#noi-dung-bao-tang",
    detailHref: "/bao-tang-so/san-khau-hoa-lop-hoc",
    detailLabel: "Phòng 03: Bối cảnh Lớp học & Sân khấu hóa",
    image: "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg",
    transitionType: "solar-iris",
  },
];

export const CHU_DE_HOC_TAP_CINEMA: CinemaScene[] = [
  {
    id: "cd-01",
    title: "HÀNH TRÌNH DỰ ÁN HUYỆN ĐƯỜNG",
    isHeroTitle: true,
    slogan: "Kết nối Ngữ văn 10 cùng Tư duy thiết kế kỹ thuật STEAM",
    description:
      "Hai chặng trải nghiệm xuyên suốt của Lớp 10.3: Giải mã tạo hình chế tác Mặt nạ 3D và Tổ chức thuyết minh – diễn kịch sân khấu hóa.",
    ctaLabel: "Xem 2 Chặng Dự án",
    ctaHref: "#noi-dung-chu-de",
    detailHref: "#noi-dung-chu-de",
    detailLabel: "Danh sách Chặng Dự án Học tập",
    image: "/images/cinema/scene-07-huyen-duong.png",
    transitionType: "base",
  },
  {
    id: "cd-02",
    title: "CHẶNG 01: MÃ MÀU & CHẾ TÁC MẶT NẠ 3D",
    slogan: "Từ lời thoại tự xưng đến Bản vẽ tỷ lệ & Mặt nạ bìa cứng",
    description:
      "Học sinh 4 Tổ phân tích nghệ thuật trào phúng cổ truyền, dựng bản vẽ kỹ thuật nhân trắc học và hoàn thiện bộ mặt nạ biểu diễn.",
    ctaLabel: "Vào Chặng 01",
    ctaHref: "#noi-dung-chu-de",
    detailHref: "/chu-de-hoc-tap/chu-de-01-huyen-duong",
    detailLabel: "Chặng 01: Mã màu & Chế tác Mặt nạ",
    image: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
    transitionType: "screen-sweep",
  },
  {
    id: "cd-03",
    title: "CHẶNG 02: THUYẾT MINH & DIỄN KỊCH LỚP HỌC",
    slogan: "Báo cáo Nói & Nghe — Công diễn trích đoạn Huyện đường",
    description:
      "Đại diện các Tổ bảo vệ ý tưởng tạo hình trước bảng Công đường và hợp lực biểu diễn vở kịch Huyện đường sinh động.",
    ctaLabel: "Vào Chặng 02",
    ctaHref: "#noi-dung-chu-de",
    detailHref: "/chu-de-hoc-tap/chu-de-02-san-khau-hoa",
    detailLabel: "Chặng 02: Thuyết minh & Diễn kịch Huyện đường",
    image: "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg",
    transitionType: "curtain-up",
  },
];

export const XUONG_STEAM_CINEMA: CinemaScene[] = [
  {
    id: "xs-01",
    title: "XƯỞNG CHẾ TÁC MẶT NẠ STEAM",
    isHeroTitle: true,
    slogan: "Quy trình 5 bước: Xác định • Thiết kế • Chế tạo • Thử nghiệm • Cải tiến",
    description:
      "Bàn thí nghiệm số WebGL 3D giúp học sinh thử nghiệm mã màu và đường nét mặt nạ Tuồng Huyện đường trước khi cắt dán thực tế.",
    ctaLabel: "Vào Xưởng Mô phỏng 3D",
    ctaHref: "#noi-dung-xuong-steam",
    detailHref: "#noi-dung-xuong-steam",
    detailLabel: "Xưởng Chế tác STEAM & Mô phỏng Mặt nạ 3D",
    image: "/images/cinema/scene-09-xuong-steam.png",
    transitionType: "base",
  },
  {
    id: "xs-02",
    title: "BÀN MÔ PHỎNG MẶT NẠ TUỒNG 3D",
    slogan: "Kiểm tra trục đối xứng CAD • Xẻ tai gấp bìa • Đắp nổi & Sơn acrylic",
    description:
      "Xoay 360 độ phôi mặt nạ 3D, thử các bảng màu ước lệ và đối chiếu trực tiếp với sản phẩm thực tế của 4 Tổ Lớp 10.3.",
    ctaLabel: "Mở Studio Mặt nạ 3D",
    ctaHref: "#noi-dung-xuong-steam",
    detailHref: "/chu-de-hoc-tap/chu-de-01-huyen-duong",
    detailLabel: "Hồ sơ Chặng 01: Mặt nạ Huyện đường",
    image: "/images/cinema/scene-03-sac-tuong.png",
    transitionType: "iris-right",
  },
  {
    id: "xs-03",
    title: "BỘ 4 PHIẾU NHẬT KÝ KỸ THUẬT",
    slogan: "Chuẩn hóa tư duy thiết kế & Minh chứng thực hành tại lớp",
    description:
      "Từ phân tích trích đoạn văn học đến bản vẽ tỉ lệ cm/mm, bảng phân công nhóm và biên bản thử nghiệm sân khấu hóa.",
    ctaLabel: "Xem Chi tiết Quy trình",
    ctaHref: "#noi-dung-xuong-steam",
    detailHref: "/trien-lam-so",
    detailLabel: "Triển lãm số Sản phẩm Lớp 10.3",
    image: "/images/cinema/scene-vi-dien-huyen-duong.png",
    transitionType: "screen-right",
  },
];

export const TRIEN_LAM_SO_CINEMA: CinemaScene[] = [
  {
    id: "tl-01",
    title: "KHÔNG GIAN TRIỂN LÃM SỐ LỚP 10.3",
    isHeroTitle: true,
    slogan: "Lưu trữ & Tôn vinh sản phẩm Dự án Huyện đường — THPT Bình Phú",
    description:
      "Trưng bày trọn bộ bối cảnh lớp học, 4 chuyên trang Tổ, bản vẽ tỷ lệ, tệp Word thuyết minh, video thuyết trình và vở diễn kịch chung.",
    ctaLabel: "Tham quan Hồ sơ Sản phẩm",
    ctaHref: "#noi-dung-trien-lam",
    detailHref: "#noi-dung-trien-lam",
    detailLabel: "Kho Hồ sơ Sản phẩm Huyện đường Lớp 10.3",
    image: "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg",
    transitionType: "base",
  },
  {
    id: "tl-02",
    title: "4 CHUYÊN TRANG TỔ — PHÁC THẢO & MẶT NẠ",
    slogan: "Tổ 1: Tri huyện • Tổ 2: Đề lại • Tổ 3: Lính lệ • Tổ 4: Trùm Sò",
    description:
      "Nhấp vào từng Tổ để khám phá riêng toàn bộ bản vẽ kỹ thuật, mặt nạ 3D, bài thuyết minh Word và video báo cáo của Tổ đó.",
    ctaLabel: "Vào Cổng 4 Tổ",
    ctaHref: "#kho-san-pham-hoc-sinh",
    detailHref: "/trien-lam-so/to-2",
    detailLabel: "Khám phá Chuyên trang các Tổ",
    image: "/student-products/huyen-duong/phac-thao-to-2-de-lai.jpg",
    transitionType: "iris-right",
  },
  {
    id: "tl-03",
    title: "VIDEO DIỄN KỊCH SÂN KHẤU HÓA LỚP 10.3",
    slogan: "Công diễn trích đoạn Huyện đường trước bảng 'Công minh chính trực'",
    description:
      "Thưởng thức trọn vẹn vở diễn kịch chung của tập thể Lớp 10.3 nơi các chiếc mặt nạ thủ công bước vào đời sống sân khấu sôi nổi.",
    ctaLabel: "Xem Video Diễn kịch",
    ctaHref: "#kho-san-pham-hoc-sinh",
    detailHref: "/chu-de-hoc-tap/chu-de-02-san-khau-hoa",
    detailLabel: "Chặng 02: Sân khấu hóa Lớp học",
    image: "/images/cinema/scene-vi-dien-huyen-duong.png",
    transitionType: "curtain-up",
  },
];

export const DIEN_DAN_CINEMA: CinemaScene[] = [
  {
    id: "dd-01",
    title: "DIỄN ĐÀN HỌC TẬP & ĐỐI THOẠI",
    isHeroTitle: true,
    slogan: "Lắng nghe – Phản biện – Chia sẻ kinh nghiệm Dự án Huyện đường",
    description:
      "Không gian trao đổi học thuật giữa 4 Tổ về ngôn ngữ trào phúng Huyện đường, kỹ thuật chế tác mặt nạ bìa cứng và nghệ thuật nhập vai.",
    ctaLabel: "Vào Diễn đàn thảo luận",
    ctaHref: "#noi-dung-dien-dan",
    detailHref: "#noi-dung-dien-dan",
    detailLabel: "Diễn đàn Trao đổi & Thảo luận",
    image: "/images/cinema/scene-infographic-tu-giac.png",
    transitionType: "base",
  },
  {
    id: "dd-02",
    title: "PHẢN BIỆN TẠO HÌNH MẶT NẠ CÔNG ĐƯỜNG",
    slogan: "Vì sao màu sắc & nét mày quyết định thần thái vai Tuồng?",
    description:
      "Cùng trao đổi cách lựa chọn tông màu tương phản, kỹ thuật xẻ tai bìa / đắp đất sét nhẹ và kỹ năng thuyết trình trước lớp.",
    ctaLabel: "Xem Chủ đề Thảo luận",
    ctaHref: "#noi-dung-dien-dan",
    detailHref: "/chu-de-hoc-tap/chu-de-01-huyen-duong",
    detailLabel: "Chặng 01: Tạo hình Mặt nạ Huyện đường",
    image: "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg",
    transitionType: "screen-sweep",
  },
];

export const TRAC_NGHIEM_CINEMA: CinemaScene[] = [
  {
    id: "tn-01",
    title: "TRẮC NGHIỆM DỰ ÁN HUYỆN ĐƯỜNG & STEAM",
    isHeroTitle: true,
    slogan: "Hệ thống 20 câu hỏi củng cố kiến thức Ngữ văn 10 & Thiết kế Mặt nạ 3D",
    description:
      "Ngân hàng câu hỏi đa tầng giúp học sinh tự kiểm tra năng lực đọc hiểu trích đoạn Huyện đường, mã màu hóa trang và quy trình STEAM 5 bước.",
    ctaLabel: "Bắt đầu làm Trắc nghiệm",
    ctaHref: "#noi-dung-trac-nghiem",
    detailHref: "#noi-dung-trac-nghiem",
    detailLabel: "Bộ 20 câu hỏi Trắc nghiệm Trực tuyến",
    image: "/images/cinema/scene-so-tay-the-giai-ma.png",
    transitionType: "base",
  },
  {
    id: "tn-02",
    title: "THỬ THÁCH GIẢI MÃ TỨ ĐẠI NHÂN VẬT",
    slogan: "Nhận diện câu thoại, mã màu & thủ pháp trào phúng trong Huyện đường",
    description:
      "Ôn lại đặc trưng tính cách Tri huyện, Đề lại, Lính lệ, Trùm Sò cùng bài học thực tế từ sản phẩm của 4 Tổ Lớp 10.3.",
    ctaLabel: "Làm Bài kiểm tra ngay",
    ctaHref: "#noi-dung-trac-nghiem",
    detailHref: "/bao-tang-so/sac-tuong-huyen-duong",
    detailLabel: "Ôn kiến thức Phòng Sắc Tuồng",
    image: "/images/cinema/scene-03-sac-tuong.png",
    transitionType: "iris-right",
  },
];

/**
 * Tạo kịch bản trình chiếu 3 cảnh riêng cho từng trang chi tiết Phòng Bảo tàng số.
 */
export function buildWingDetailCinema(wing: {
  code: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  gradeReference: string;
  artSubject: string;
  expectedAssetFile?: string;
}): CinemaScene[] {
  const imageBySubject: Record<string, string> = {
    "sac-tuong-huyen-duong": "/images/cinema/scene-03-sac-tuong.png",
    "tuong-huyen-duong": "/images/cinema/scene-03-sac-tuong.png",
    "huyen-duong-court": "/images/cinema/scene-07-huyen-duong.png",
    "exhibit-micro-acting": "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg",
  };
  const primaryImg =
    wing.expectedAssetFile ||
    imageBySubject[wing.artSubject] ||
    "/images/cinema/scene-01-di-san.png";

  return [
    {
      id: `${wing.code}-01`,
      title: wing.title.toUpperCase(),
      isHeroTitle: true,
      slogan: `${wing.code} • ${wing.subtitle}`,
      description: wing.shortDescription,
      ctaLabel: "Xem Hồ sơ Hiện vật",
      ctaHref: "#noi-dung-phong-trung-bay",
      image: primaryImg,
      transitionType: "base",
    },
    {
      id: `${wing.code}-02`,
      title: "GIẢI MÃ VĂN BẢN & HỆ THỐNG TƯ LIỆU",
      slogan: wing.gradeReference,
      description:
        "Kết nối hệ thống hình ảnh bối cảnh, trích đoạn thoại tiêu biểu và từ khóa cốt lõi phục vụ hoạt động nghiên cứu trên lớp.",
      ctaLabel: "Khám phá Nội dung Chuyên sâu",
      ctaHref: "#noi-dung-phong-trung-bay",
      image: "/images/cinema/scene-so-tay-the-giai-ma.png",
      transitionType: "curtain-up",
    },
    {
      id: `${wing.code}-03`,
      title: "CHUYỂN HÓA SANG MẶT NẠ 3D & SÂN KHẤU HÓA",
      slogan: "Từ trang sách Ngữ văn 10 bước ra sân khấu Lớp 10.3",
      description:
        "Ứng dụng tri thức mỹ thuật – hình học – kỹ thuật tại Xưởng STEAM để tạo nên bộ mặt nạ biểu diễn trực quan.",
      ctaLabel: "Đọc Chi tiết Phòng Trưng bày",
      ctaHref: "#noi-dung-phong-trung-bay",
      image: "/images/cinema/scene-09-xuong-steam.png",
      transitionType: "solar-iris",
    },
  ];
}

/**
 * Tạo kịch bản trình chiếu 3 cảnh riêng cho từng trang chi tiết Chủ đề học tập.
 */
export function buildTopicDetailCinema(topic: {
  id: string;
  topicNumber: string;
  title: string;
  lessonInfo: string;
  summary: string;
}): CinemaScene[] {
  const isStageTopic = topic.id.includes("san-khau");
  return [
    {
      id: `${topic.id}-01`,
      title: topic.title.toUpperCase(),
      isHeroTitle: true,
      slogan: `${topic.topicNumber} • ${topic.lessonInfo}`,
      description: topic.summary,
      ctaLabel: "Xem Kế hoạch & Nhiệm vụ",
      ctaHref: "#noi-dung-du-an-chi-tiet",
      image: isStageTopic
        ? "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg"
        : "/images/cinema/scene-07-huyen-duong.png",
      transitionType: "base",
    },
    {
      id: `${topic.id}-02`,
      title: isStageTopic
        ? "THUYẾT MINH NÓI & NGHE VÀ CÔNG DIỄN LỚP HỌC"
        : "PHÂN TÍCH TỨ ĐẠI NHÂN VẬT HUYỆN ĐƯỜNG",
      slogan: "Tri huyện • Đề lại • Lính lệ • Trùm Sò",
      description: isStageTopic
        ? "Kết nối bối cảnh hoành phi Công đường với bài thuyết trình bảo vệ thiết kế mặt nạ và vở diễn kịch chung của lớp."
        : "Hệ thống hóa đặc điểm ngoại hình, ngôn ngữ và hành động để lên bản vẽ mặt nạ hóa trang chuẩn xác.",
      ctaLabel: "Xem Hồ sơ Chi tiết",
      ctaHref: "#noi-dung-du-an-chi-tiet",
      image: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
      transitionType: "screen-sweep",
    },
    {
      id: `${topic.id}-03`,
      title: "QUY TRÌNH 5 BƯỚC & NGHIỆM THU TRIỂN LÃM",
      slogan: "Hoàn thiện sản phẩm 3D — Lưu trữ trên chuyên trang 4 Tổ",
      description:
        "Theo dõi bộ tiêu chí kỹ thuật, thử nghiệm trên bàn mô phỏng 3D WebGL và tổng hợp minh chứng dự án.",
      ctaLabel: "Vào Nội dung Thực hành",
      ctaHref: "#noi-dung-du-an-chi-tiet",
      image: "/images/cinema/scene-10-trien-lam.png",
      transitionType: "solar-iris",
    },
  ];
}

/**
 * Tạo kịch bản trình chiếu cuộn 3 cảnh riêng cho từng chuyên trang Tổ (Tổ 1, Tổ 2, Tổ 3, Tổ 4).
 */
export function buildStudentGroupCinema(group: {
  slug: string;
  groupName: string;
  characterName: string;
  roleSubtitle: string;
  classLabel: string;
  summary: string;
  statsSummary: string;
  cinemaScenesImages: [string, string, string];
}): CinemaScene[] {
  return [
    {
      id: `${group.slug}-01`,
      title: `${group.groupName.toUpperCase()} — MẶT NẠ ${group.characterName.toUpperCase()}`,
      isHeroTitle: true,
      slogan: `${group.classLabel} • ${group.roleSubtitle}`,
      description: group.summary,
      ctaLabel: `Khám phá Hồ sơ ${group.groupName}`,
      ctaHref: "#noi-dung-chuyen-trang-to",
      detailHref: "#phan-mat-na-phac-thao",
      detailLabel: `Mặt nạ & Bản vẽ của ${group.groupName}`,
      image: group.cinemaScenesImages[0],
      transitionType: "base",
    },
    {
      id: `${group.slug}-02`,
      title: `PHÁC THẢO KỸ THUẬT & THUYẾT MINH (${group.groupName.toUpperCase()})`,
      slogan: group.statsSummary,
      description:
        "Đối chiếu bản vẽ tỷ lệ, mã màu ước lệ sân khấu Tuồng đồ với hồ sơ phân công nhiệm vụ và bài thuyết minh văn học của tổ.",
      ctaLabel: "Xem Bản vẽ & Thuyết minh",
      ctaHref: "#phan-thuyet-minh-word",
      detailHref: "#phan-thuyet-minh-word",
      detailLabel: `Bản Word & Lời thuyết minh ${group.groupName}`,
      image: group.cinemaScenesImages[1],
      transitionType: "iris-right",
    },
    {
      id: `${group.slug}-03`,
      title: `VIDEO THUYẾT TRÌNH & HOẠT ĐỘNG NHÓM (${group.groupName.toUpperCase()})`,
      slogan: "Từ bàn học STEAM bước lên sân khấu Công đường Huyện đường",
      description:
        "Trình chiếu trực tiếp các video thuyết minh trên bục giảng, clip công đoạn chế tác thủ công và bộ ảnh làm việc nhóm tại lớp 10.3.",
      ctaLabel: "Xem Video & Album Ảnh",
      ctaHref: "#phan-video-hoat-dong",
      detailHref: "#phan-video-hoat-dong",
      detailLabel: `Video & Ảnh hoạt động ${group.groupName}`,
      image: group.cinemaScenesImages[2],
      transitionType: "curtain-up",
    },
  ];
}

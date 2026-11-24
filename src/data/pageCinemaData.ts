import type { CinemaScene } from "@/components/ScrollVisualCinema";

/**
 * Kịch bản trình chiếu cuộn giữ khung hình (Sticky Scroll-Scrubbed Cinema)
 * cho toàn bộ các trang con trên website Di sản Văn học Việt.
 */

export const BAO_TANG_SO_CINEMA: CinemaScene[] = [
  {
    id: "bts-01",
    title: "BẢO TÀNG SỐ DI SẢN VĂN HỌC",
    isHeroTitle: true,
    slogan: "Khám phá kho tàng Tuồng đồ Huyện đường & Sử thi Đăm Săn",
    description:
      "Hệ thống hóa 4 không gian trưng bày chuyên sâu từ ngôn ngữ hóa trang mặt nạ tuồng trào phúng đến sử thi anh hùng Tây Nguyên.",
    ctaLabel: "Vào 4 Phòng Trưng bày",
    ctaHref: "#noi-dung-bao-tang",
    detailHref: "#noi-dung-bao-tang",
    detailLabel: "Tổng quan 4 Phòng Trưng bày Bảo tàng số",
    image: "/images/cinema/scene-01-di-san.png",
    transitionType: "base",
  },
  {
    id: "bts-02",
    title: "SẮC TUỒNG — MÃ MÀU CÔNG ĐƯỜNG",
    slogan: "Mặt trắng mốc • Mày xếch nịnh thần • Má đỏ son trào phúng",
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
      "Phân tích ngữ cảnh công đường trong trích đoạn Nghêu, Sò, Ốc, Hến làm nền tảng chế tác mặt nạ 3D bìa cứng nhiều lớp.",
    ctaLabel: "Giải mã Tứ giác Nhân vật",
    ctaHref: "#noi-dung-bao-tang",
    detailHref: "/bao-tang-so/tu-dai-nhan-vat",
    detailLabel: "Phòng 02: Tứ đại nhân vật công đường",
    image: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
    transitionType: "curtain-up",
  },
  {
    id: "bts-04",
    title: "KHÔNG GIAN NHÀ DÀI & NỮ THẦN MẶT TRỜI",
    slogan: "Klei Khan Sử thi Đăm Săn vượt rừng Sáp Đen",
    description:
      "Bước vào kiến trúc nhà dài Ê-đê bên ánh lửa chiêng đồng và hành trình tìm ánh dương hóa thân thành Hộp kể chuyện 3 lớp.",
    ctaLabel: "Xem Không gian Sử thi",
    ctaHref: "#noi-dung-bao-tang",
    detailHref: "/bao-tang-so/khong-gian-dam-san",
    detailLabel: "Phòng 03: Không gian Sử thi Đăm Săn",
    image: "/images/cinema/scene-dam-san-nha-dai.png",
    transitionType: "solar-iris",
  },
];

export const CHU_DE_HOC_TAP_CINEMA: CinemaScene[] = [
  {
    id: "cd-01",
    title: "HÀNH TRÌNH KHÁM PHÁ TRI THỨC & DỰ ÁN",
    isHeroTitle: true,
    slogan: "Kết nối Ngữ văn 10 cùng Tư duy thiết kế kỹ thuật STEAM",
    description:
      "Hai dự án học tập xuyên suốt: Giải mã sân khấu châm biếm Huyện đường và Tái hiện sử thi Đăm Săn đi bắt Nữ thần Mặt Trời.",
    ctaLabel: "Chọn Dự án học tập",
    ctaHref: "#noi-dung-chu-de",
    detailHref: "#noi-dung-chu-de",
    detailLabel: "Danh sách Chủ đề & Dự án Học tập",
    image: "/images/cinema/scene-07-huyen-duong.png",
    transitionType: "base",
  },
  {
    id: "cd-02",
    title: "CHỦ ĐỀ 01: TUỒNG ĐỒ HUYỆN ĐƯỜNG",
    slogan: "Từ lời thoại tự xưng đến Mặt nạ 3D & Vi diễn lớp học",
    description:
      "Học sinh phân tích nghệ thuật trào phúng cổ truyền, dựng bản vẽ kỹ thuật nhân trắc học và hoàn thiện bộ mặt nạ biểu diễn.",
    ctaLabel: "Vào Dự án 01",
    ctaHref: "#noi-dung-chu-de",
    detailHref: "/chu-de-hoc-tap/chu-de-01-huyen-duong",
    detailLabel: "Chủ đề 01: Tuồng đồ Huyện đường",
    image: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
    transitionType: "screen-sweep",
  },
  {
    id: "cd-03",
    title: "CHỦ ĐỀ 02: SỬ THI ĐĂM SĂN",
    slogan: "Đăm Săn đi bắt Nữ thần Mặt Trời — Quang học & Rãnh trượt",
    description:
      "Tính toán khoảng cách 3 lớp cảnh, định lượng giấy can tán sáng và mạch đèn LED vàng ấm để kể lại khúc anh hùng ca bằng ánh sáng.",
    ctaLabel: "Vào Dự án 02",
    ctaHref: "#noi-dung-chu-de",
    detailHref: "/chu-de-hoc-tap/chu-de-02-dam-san",
    detailLabel: "Chủ đề 02: Hộp kể chuyện Sử thi Đăm Săn",
    image: "/images/cinema/scene-dam-san-mat-troi.png",
    transitionType: "solar-iris",
  },
  {
    id: "cd-04",
    title: "HỆ SINH THÁI SỔ TAY & THẺ GIẢI MÃ",
    slogan: "Ghi chép văn bản — Phác thảo kỹ thuật — Trình bày Nói & Nghe",
    description:
      "Mỗi sản phẩm thủ công đều gắn liền căn cứ văn bản học thuật và bảng giải mã chi tiết cho buổi thuyết minh trước lớp.",
    ctaLabel: "Xem Hồ sơ Chủ đề",
    ctaHref: "#noi-dung-chu-de",
    detailHref: "/xuong-steam",
    detailLabel: "Xưởng STEAM & Bàn mô phỏng 3D",
    image: "/images/cinema/scene-so-tay-the-giai-ma.png",
    transitionType: "curtain-up",
  },
];

export const XUONG_STEAM_CINEMA: CinemaScene[] = [
  {
    id: "xs-01",
    title: "XƯỞNG SÁNG TẠO NGỮ VĂN STEAM",
    isHeroTitle: true,
    slogan: "Quy trình 5 bước: Xác định • Thiết kế • Chế tạo • Thử nghiệm • Cải tiến",
    description:
      "Bàn thí nghiệm số WebGL 3D giúp học sinh phối màu mặt nạ Tuồng và điều chỉnh góc LED hộp Đăm Săn trước khi cắt dán thực tế.",
    ctaLabel: "Vào Xưởng Mô phỏng 3D",
    ctaHref: "#noi-dung-xuong-steam",
    detailHref: "#noi-dung-xuong-steam",
    detailLabel: "Xưởng Chế tác STEAM & Mô phỏng 3D",
    image: "/images/cinema/scene-09-xuong-steam.png",
    transitionType: "base",
  },
  {
    id: "xs-02",
    title: "CHẾ TÁC MẶT NẠ TUỒNG 3D",
    slogan: "Kiểm tra trục đối xứng CAD • Bồi bìa cứng • Sơn acrylic",
    description:
      "Xoay 360 độ phôi mặt nạ 3D, thử màu Bạch – Đỏ son – Xám chì cùng dáng mày, chòm râu của bốn nhân vật Huyện đường.",
    ctaLabel: "Mở Studio Mặt nạ 3D",
    ctaHref: "#noi-dung-xuong-steam",
    detailHref: "/chu-de-hoc-tap/chu-de-01-huyen-duong",
    detailLabel: "Hồ sơ Dự án 01: Mặt nạ Huyện đường",
    image: "/images/cinema/scene-03-sac-tuong.png",
    transitionType: "iris-right",
  },
  {
    id: "xs-03",
    title: "QUANG HỌC HỘP SỬ THI ĐĂM SĂN",
    slogan: "Bố cục Tiền cảnh – Trung cảnh Rừng Sáp Đen – Hậu cảnh Mặt Trời",
    description:
      "Thử nghiệm chế độ tách lớp 3D theo chiều sâu trục Z, kéo thanh trượt cơ học Đăm Săn và quan sát độ tán xạ ánh sáng qua giấy can.",
    ctaLabel: "Mở Mô phỏng Hộp 3D",
    ctaHref: "#noi-dung-xuong-steam",
    detailHref: "/chu-de-hoc-tap/chu-de-02-dam-san",
    detailLabel: "Hồ sơ Dự án 02: Hộp Đăm Săn",
    image: "/images/cinema/scene-05-dam-san-steam.png",
    transitionType: "curtain-down",
  },
  {
    id: "xs-04",
    title: "BỘ 4 PHIẾU NHẬT KÝ KỸ THUẬT",
    slogan: "Chuẩn hóa tư duy thiết kế & Minh chứng thực hành tại lớp",
    description:
      "Từ phân tích trích đoạn văn học đến bản vẽ tỉ lệ cm, bảng phân công nhóm và biên bản thử nghiệm sản phẩm tại xưởng.",
    ctaLabel: "Xem Chi tiết Quy trình",
    ctaHref: "#noi-dung-xuong-steam",
    detailHref: "/trien-lam-so",
    detailLabel: "Triển lãm số Sản phẩm Học sinh",
    image: "/images/cinema/scene-vi-dien-huyen-duong.png",
    transitionType: "screen-right",
  },
];

export const TRIEN_LAM_SO_CINEMA: CinemaScene[] = [
  {
    id: "tl-01",
    title: "KHÔNG GIAN TRIỂN LÃM SỐ",
    isHeroTitle: true,
    slogan: "Lưu trữ & Tôn vinh sản phẩm học sinh Dự án Huyện đường",
    description:
      "Nơi trưng bày ảnh hoạt động nhóm, 4 bộ bản phác thảo mặt nạ, bản Word thuyết minh, video giới thiệu mặt nạ và vở vi diễn của lớp.",
    ctaLabel: "Tham quan Hồ sơ Sản phẩm",
    ctaHref: "#noi-dung-trien-lam",
    detailHref: "#noi-dung-trien-lam",
    detailLabel: "Kho Hồ sơ Sản phẩm Huyện đường",
    image: "/images/cinema/scene-10-trien-lam.png",
    transitionType: "base",
  },
  {
    id: "tl-02",
    title: "PHÁC THẢO & THUYẾT MINH MẶT NẠ",
    slogan: "4 Nhóm chế tác: Tri huyện • Đề lại • Lính lệ • Trùm Sò",
    description:
      "Đối chiếu bản vẽ tay, bảng màu hóa trang với lời thuyết minh văn học và video trình bày Nói – Nghe của từng nhóm.",
    ctaLabel: "Xem Kho Minh chứng",
    ctaHref: "#noi-dung-trien-lam",
    detailHref: "/bao-tang-so/tu-dai-nhan-vat",
    detailLabel: "Phòng 02: Tứ đại nhân vật Huyện đường",
    image: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
    transitionType: "iris-right",
  },
  {
    id: "tl-03",
    title: "VIDEO VI DIỄN SÂN KHẤU HÓA LỚP HỌC",
    slogan: "Hóa trang bìa cứng bước lên sân khấu trích đoạn Huyện đường",
    description:
      "Tổng hợp tác phẩm biểu diễn chung của tập thể lớp, ghi lại nghệ thuật nhập vai trào phúng qua giọng điệu, cử chỉ và bộ mặt nạ.",
    ctaLabel: "Xem Sản phẩm Vi diễn",
    ctaHref: "#noi-dung-trien-lam",
    detailHref: "/chu-de-hoc-tap/chu-de-01-huyen-duong",
    detailLabel: "Kịch bản & Vi diễn Dự án 01",
    image: "/images/cinema/scene-vi-dien-huyen-duong.png",
    transitionType: "curtain-up",
  },
  {
    id: "tl-04",
    title: "INFOGRAPHIC & PODCAST KLEI KHAN",
    slogan: "Học liệu đa phương tiện kết nối Sử thi Đăm Săn",
    description:
      "Bên cạnh các sản phẩm Dự án Huyện đường, học sinh tiếp tục sáng tạo Infographic mã màu và Podcast đọc diễn cảm sử thi Tây Nguyên.",
    ctaLabel: "Khám phá Triển lãm",
    ctaHref: "#noi-dung-trien-lam",
    detailHref: "/chu-de-hoc-tap/chu-de-02-dam-san",
    detailLabel: "Dự án 02: Sử thi Đăm Săn",
    image: "/images/cinema/scene-podcast-klei-khan.png",
    transitionType: "solar-iris",
  },
];

export const DIEN_DAN_CINEMA: CinemaScene[] = [
  {
    id: "dd-01",
    title: "DIỄN ĐÀN HỌC TẬP & ĐỐI THOẠI",
    isHeroTitle: true,
    slogan: "Lắng nghe – Phản biện – Chia sẻ góc nhìn Ngữ văn & STEAM",
    description:
      "Không gian trao đổi học thuật giữa các nhóm về ngôn ngữ trào phúng Huyện đường, tinh thần anh hùng ca Đăm Săn và kinh nghiệm chế tác.",
    ctaLabel: "Vào Diễn đàn thảo luận",
    ctaHref: "#noi-dung-dien-dan",
    detailHref: "#noi-dung-dien-dan",
    detailLabel: "Diễn đàn Trao đổi & Thảo luận",
    image: "/images/cinema/scene-infographic-tu-giac.png",
    transitionType: "base",
  },
  {
    id: "dd-02",
    title: "PHẢN BIỆN TẠO HÌNH CÔNG ĐƯỜNG",
    slogan: "Vì sao màu sắc & nét mày quyết định thần thái vai Tuồng?",
    description:
      "Cùng trao đổi cách lựa chọn tông màu tương phản, chất liệu bìa và kỹ năng thuyết trình để nhân vật hiện lên sống động trên sân khấu.",
    ctaLabel: "Xem Chủ đề Thảo luận",
    ctaHref: "#noi-dung-dien-dan",
    detailHref: "/chu-de-hoc-tap/chu-de-01-huyen-duong",
    detailLabel: "Dự án 01: Tạo hình Mặt nạ Huyện đường",
    image: "/images/cinema/scene-07-huyen-duong.png",
    transitionType: "screen-sweep",
  },
  {
    id: "dd-03",
    title: "CHIA SẺ KỸ THUẬT HỘP ÁNH SÁNG ĐĂM SĂN",
    slogan: "Từ mạch LED đơn giản đến hiệu ứng chiều sâu Rừng Sáp Đen",
    description:
      "Ghi nhận các mẹo tinh chỉnh góc chiếu, chọn giấy can tán sáng và kết cấu rãnh trượt êm cho hộp kể chuyện sử thi.",
    ctaLabel: "Tham gia Chia sẻ",
    ctaHref: "#noi-dung-dien-dan",
    detailHref: "/chu-de-hoc-tap/chu-de-02-dam-san",
    detailLabel: "Dự án 02: Hộp ánh sáng Sử thi Đăm Săn",
    image: "/images/cinema/scene-dam-san-nha-dai.png",
    transitionType: "solar-iris",
  },
];

export const TRAC_NGHIEM_CINEMA: CinemaScene[] = [
  {
    id: "tn-01",
    title: "TRẮC NGHIỆM DI SẢN VĂN HỌC & STEAM",
    isHeroTitle: true,
    slogan: "Củng cố kiến thức Tuồng đồ Huyện đường & Sử thi Đăm Săn",
    description:
      "Ngân hàng câu hỏi đa tầng giúp học sinh tự kiểm tra năng lực đọc hiểu văn bản Ngữ văn 10 và quy trình chế tạo kỹ thuật 5 bước.",
    ctaLabel: "Bắt đầu làm Trắc nghiệm",
    ctaHref: "#noi-dung-trac-nghiem",
    detailHref: "#noi-dung-trac-nghiem",
    detailLabel: "Bộ câu hỏi Trắc nghiệm Trực tuyến",
    image: "/images/cinema/scene-so-tay-the-giai-ma.png",
    transitionType: "base",
  },
  {
    id: "tn-02",
    title: "THỬ THÁCH GIẢI MÃ MẶT NẠ TUỒNG",
    slogan: "Nhận diện câu thoại & thủ pháp trào phúng trong Huyện đường",
    description:
      "Ôn lại đặc trưng tính cách Tri huyện, Đề lại, Lính lệ, Trùm Sò cùng quy tắc hóa trang ước lệ của nghệ thuật tuồng hài.",
    ctaLabel: "Vào Bộ câu hỏi 01",
    ctaHref: "#noi-dung-trac-nghiem",
    detailHref: "/bao-tang-so/sac-tuong-huyen-duong",
    detailLabel: "Ôn kiến thức Phòng Sắc Tuồng",
    image: "/images/cinema/scene-03-sac-tuong.png",
    transitionType: "iris-right",
  },
  {
    id: "tn-03",
    title: "THỬ THÁCH SỬ THI ĐĂM SĂN & QUANG HỌC",
    slogan: "Hành trình tìm Nữ thần Mặt Trời qua lăng kính Vật lý – Mỹ thuật",
    description:
      "Khắc sâu ý nghĩa khát vọng anh hùng Tây Nguyên và nguyên lý bóng đổ 3 lớp trên sa bàn Hộp kể chuyện STEAM.",
    ctaLabel: "Làm Bài kiểm tra ngay",
    ctaHref: "#noi-dung-trac-nghiem",
    detailHref: "/bao-tang-so/hanh-trinh-mat-troi",
    detailLabel: "Ôn kiến thức Phòng Nữ thần Mặt Trời",
    image: "/images/cinema/scene-dam-san-mat-troi.png",
    transitionType: "curtain-up",
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
}): CinemaScene[] {
  const imageBySubject: Record<string, string> = {
    "sac-tuong-huyen-duong": "/images/cinema/scene-03-sac-tuong.png",
    "tu-dai-nhan-vat": "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
    "khong-gian-dam-san": "/images/cinema/scene-dam-san-nha-dai.png",
    "hanh-trinh-mat-troi": "/images/cinema/scene-dam-san-mat-troi.png",
  };
  const primaryImg =
    imageBySubject[wing.artSubject] || "/images/cinema/scene-01-di-san.png";

  return [
    {
      id: `${wing.code}-01`,
      title: wing.title.toUpperCase(),
      isHeroTitle: true,
      slogan: `${wing.code} • ${wing.subtitle}`,
      description: wing.shortDescription,
      ctaLabel: "Xem Hồ sơ Hiện vật & Video",
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
      title: "CHUYỂN HÓA SANG SẢN PHẨM STEAM 3D",
      slogan: "Từ trang sách Ngữ văn 10 bước ra mô hình chế tác thực tế",
      description:
        "Ứng dụng tri thức mỹ thuật – hình học – quang học tại Xưởng STEAM để tạo nên mặt nạ hoặc hộp chuyện kể tương tác.",
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
  const isHuyenDuong = topic.id.includes("huyen-duong");
  return [
    {
      id: `${topic.id}-01`,
      title: topic.title.toUpperCase(),
      isHeroTitle: true,
      slogan: `${topic.topicNumber} • ${topic.lessonInfo}`,
      description: topic.summary,
      ctaLabel: "Xem Kế hoạch & Nhiệm vụ Dự án",
      ctaHref: "#noi-dung-du-an-chi-tiet",
      image: isHuyenDuong
        ? "/images/cinema/scene-07-huyen-duong.png"
        : "/images/cinema/scene-05-dam-san-steam.png",
      transitionType: "base",
    },
    {
      id: `${topic.id}-02`,
      title: isHuyenDuong
        ? "PHÂN TÍCH TỨ ĐẠI NHÂN VẬT HUYỆN ĐƯỜNG"
        : "TÁI HIỆN KHÔNG GIAN SỬ THI TÂY NGUYÊN",
      slogan: isHuyenDuong
        ? "Tri huyện • Đề lại • Lính lệ • Trùm Sò"
        : "Nhà dài Ê-đê • Rừng Sáp Đen • Nữ thần Mặt Trời",
      description: isHuyenDuong
        ? "Hệ thống hóa đặc điểm ngoại hình, ngôn ngữ và hành động để lên bản vẽ mặt nạ hóa trang chuẩn xác."
        : "Bóc tách 3 lớp không gian sử thi để thiết kế mô hình hộp xuyên sáng cùng thanh trượt kể chuyện tương tác.",
      ctaLabel: "Xem Hồ sơ Chi tiết",
      ctaHref: "#noi-dung-du-an-chi-tiet",
      image: isHuyenDuong
        ? "/images/cinema/scene-huyen-duong-tu-nhan-vat.png"
        : "/images/cinema/scene-dam-san-nha-dai.png",
      transitionType: "screen-sweep",
    },
    {
      id: `${topic.id}-03`,
      title: "QUY TRÌNH 5 BƯỚC & NGHIỆM THU TRIỂN LÃM",
      slogan: "Hoàn thiện sản phẩm 3D — Thuyết minh Nói & Nghe trước lớp",
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

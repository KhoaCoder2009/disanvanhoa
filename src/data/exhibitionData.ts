import { ExhibitionCategory, ExhibitionItem } from "@/types/heritage";

export const EXHIBITION_SECTION_META = {
  vietnameseName: "TRIỂN LÃM SỐ",
  englishName: "DIGITAL EXHIBITION",
  title: "NHỮNG SÁNG TẠO TỪ TRANG KỊCH BẢN HUYỆN ĐƯỜNG",
  description:
    "Không gian trưng bày và lưu trữ toàn bộ sản phẩm thực tế của học sinh Lớp 10.3 — Trường THPT Bình Phú trong Dự án Ngữ văn 10 – STEAM: Tuồng đồ Huyện đường (Nghêu, Sò, Ốc, Hến).",
  sampleNotice:
    "Kho lưu trữ chính thức từ Google Drive Lớp 10.3 — THPT Bình Phú: tích hợp đầy đủ bối cảnh chung của lớp, vở diễn kịch sân khấu hóa (02:32), 3 bộ mặt nạ & bản vẽ kỹ thuật, 3 bài thuyết minh Word và hệ thống video thuyết trình trên lớp.",
};

export const EXHIBITION_CATEGORIES: ExhibitionCategory[] = [
  "Tất cả",
  "Mặt nạ và tạo hình nhân vật",
  "Video vi diễn",
  "Thuyết minh mặt nạ",
  "Infographic và học liệu số",
  "Sản phẩm thủ công",
];

export const EXHIBITION_ITEMS: ExhibitionItem[] = [
  {
    id: "exhibit-10-3-dien-kich-lop",
    title: "Vở Diễn kịch Sân khấu hóa: Trích đoạn Huyện đường (Tập thể Lớp 10.3)",
    category: "Video vi diễn",
    topicTitle: "Dự án Huyện đường — Lớp 10.3, THPT Bình Phú",
    topicId: "chu-de-02-san-khau-hoa",
    authorNote:
      "Sản phẩm sân khấu hóa chung Lớp 10.3 — Diễn xuất: Tấn Lộc, Tiến, Đạt, Gia Khang • Bối cảnh bảng: Khôi Nguyên, Ngọc Diệp",
    isIllustrativeSample: false,
    ideaDescription:
      "Tác phẩm biểu diễn sân khấu hóa chung toàn Lớp 10.3 (02 phút 32 giây) trên nền bức hoành phi phấn 'Công minh chính trực – Huyện đường', kết nối các nhân vật công đường với bộ mặt nạ thủ công, lời thoại châm biếm và diễn xuất sinh động.",
    makingProcess: [
      "Bước 1: Chắt lọc các lớp thoại trào phúng đắt giá trong trích đoạn Huyện đường (SGK Ngữ văn 10) và phân vai đại diện 4 Tổ.",
      "Bước 2: Thiết kế bối cảnh bảng phấn Công đường đăng đối gồm hoành phi và đôi câu đối cổ truyền.",
      "Bước 3: Phối hợp bộ mặt nạ bìa cứng, đạo cụ sân khấu và ghi hình 4K tại không gian lớp học 10.3.",
    ],
    materialsUsed: [
      "Bối cảnh bảng phấn 'Công minh chính trực – Huyện đường'",
      "Bộ mặt nạ 3D thủ công của các Tổ & đạo cụ biểu diễn",
      "Video ghi hình thực tế tại lớp (02:32, chuẩn HD)",
    ],
    videoStatusNote:
      "Video diễn kịch chính thức của Lớp 10.3 (02:32) quay trực tiếp tại bục giảng",
    videoUrl: "/student-products/huyen-duong/video-dien-kich-lop-10-3.mp4",
    videoPoster: "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg",
    documentUrl: "/student-products/huyen-duong/phan-cong-du-an-lop-10-3.docx",
    artSubject: "exhibit-micro-acting",
    expectedAssetFile: "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg",
  },
  {
    id: "exhibit-10-3-to-1-tri-huyen",
    title: "Mặt nạ Tri huyện, Bản vẽ ô ly & Video Thuyết minh (Tổ 1 — Lớp 10.3)",
    category: "Mặt nạ và tạo hình nhân vật",
    topicTitle: "Dự án Huyện đường — Lớp 10.3",
    topicId: "chu-de-01-huyen-duong",
    authorNote:
      "Sản phẩm thực tế Tổ 1 — Lớp 10.3, Trường THPT Bình Phú (Thuyết minh: Phước Sang & đại diện tổ)",
    isIllustrativeSample: false,
    ideaDescription:
      "Mặt nạ Tri huyện nền đỏ son kết hợp mũ cánh chuồn đen viền vàng (15 × 5 cm, cánh 10,5 cm) có ấn tròn chính giữa và họa tiết mây vàng hai bên gò má: lớp vỏ bọc uy nghiêm, công minh giả tạo che đậy thói tham lam, nhũng nhiễu nơi công đường.",
    makingProcess: [
      "Bước 1: Đọc hiểu trích đoạn Huyện đường trong SGK Ngữ văn 10 và dựng 2 bản vẽ lưới ô ly chi tiết (khuôn mặt 14 × 16 cm & mũ cánh chuồn).",
      "Bước 2: Cắt phôi bìa carton cứng, tạo hai cánh mũ chuồn đăng đối và gắn dây thun đeo chắc chắn.",
      "Bước 3: Sơn phối 3 tông tương phản Đỏ son – Vàng kim – Đen tuyền, biên soạn BÀI THUYẾT MINH tổ 1.docx và quay video báo cáo 01:38.",
    ],
    materialsUsed: [
      "Bìa carton cứng & vở ô ly dựng bản vẽ kỹ thuật",
      "Màu acrylic đỏ son, vàng kim, đen tuyền & dây thun",
      "Bài thuyết minh Word (.docx) & Video báo cáo trên lớp (01:38)",
    ],
    videoStatusNote:
      "Video thuyết minh thực tế tại lớp (01:38), clip nhóm (00:24) kèm tệp Word (.docx)",
    videoUrl: "/student-products/huyen-duong/video-thuyet-minh-to-1.mp4",
    videoPoster: "/student-products/huyen-duong/ra-mat-to-1-tri-huyen.jpg",
    documentUrl: "/student-products/huyen-duong/bai-thuyet-minh-to-1-tri-huyen.docx",
    artSubject: "exhibit-mask-set",
    expectedAssetFile: "/student-products/huyen-duong/mat-na-to-1-tri-huyen.jpg",
  },
  {
    id: "exhibit-10-3-to-2-de-lai",
    title: "Mặt nạ Đề lại, Bản vẽ 3 bước & Video Thuyết minh (Tổ 2 — Lớp 10.3)",
    category: "Mặt nạ và tạo hình nhân vật",
    topicTitle: "Dự án Huyện đường — Lớp 10.3",
    topicId: "chu-de-01-huyen-duong",
    authorNote:
      "Sản phẩm thực tế Tổ 2 — Lớp 10.3, Trường THPT Bình Phú (Thuyết minh: Tấn Tài & đại diện tổ)",
    isIllustrativeSample: false,
    ideaDescription:
      "Mặt nạ Đề lại chế tác qua 3 bước từ bản nháp trục đối xứng → dưỡng giấy tỷ lệ 1:1 → bìa carton xẻ tai uốn khối 3D: mũ tròn đen nâu viền vàng đồng cũ bạc màu, đôi mắt hẹp sắc tán đỏ sẫm, mày xếch cao, nụ cười nhếch mép và ria cong lột tả phụ quan gian xảo, nịnh trên nạt dưới.",
    makingProcess: [
      "Bước 1: Phân tích tính cách và lời thoại mớm cung của Đề lại trong trích đoạn Huyện đường; dựng bản vẽ trục hình học.",
      "Bước 2: Cắt dưỡng giấy tỷ lệ 1:1 khoét hốc mắt xếch, ướm lên bìa carton và xẻ các rãnh tai gấp để uốn cong khối 3D.",
      "Bước 3: Sơn phối 4 tông trầm cũ (đen nâu, đỏ sẫm, vàng đồng cũ, da vàng nhợt), biên soạn file Word và quay video thuyết minh 03:13.",
    ],
    materialsUsed: [
      "Bìa carton sóng tái chế xẻ tai gấp khối 3D & dưỡng giấy 1:1",
      "Màu acrylic đen nâu, đỏ sẫm, vàng đồng cũ, da vàng nhợt",
      "Bài thuyết minh Word (.docx) & Video báo cáo trên lớp (03:13)",
    ],
    videoStatusNote:
      "Video thuyết minh thực tế tại lớp (03:13) kèm tệp Word (.docx) và 6 ảnh quá trình chế tác",
    videoUrl: "/student-products/huyen-duong/video-thuyet-minh-to-2.mp4",
    videoPoster: "/student-products/huyen-duong/ra-mat-to-2-de-lai.jpg",
    documentUrl: "/student-products/huyen-duong/bai-thuyet-minh-to-2-de-lai.docx",
    artSubject: "exhibit-mask-set",
    expectedAssetFile: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
  },
  {
    id: "exhibit-10-3-to-3-linh-le",
    title: "Mặt nạ Lính lệ đắp nổi & Video Thuyết minh (Tổ 3 — Lớp 10.3)",
    category: "Mặt nạ và tạo hình nhân vật",
    topicTitle: "Dự án Huyện đường — Lớp 10.3",
    topicId: "chu-de-01-huyen-duong",
    authorNote:
      "Sản phẩm thực tế Tổ 3 — Lớp 10.3, Trường THPT Bình Phú (Thuyết trình: Thu An & đại diện tổ)",
    isIllustrativeSample: false,
    ideaDescription:
      "Từ bản vẽ kỹ thuật 18 × 24 cm có ghi chú chi tiết, Tổ 3 đắp đất sét tự khô tạo khối chóp mũi đỏ tròn kiểu hề tuồng, viền trắng quanh hốc mắt trợn hách dịch, ria vểnh 3 nhánh và mão lính lệ đen viền vàng – tua đỏ đặc trưng.",
    makingProcess: [
      "Bước 1: Thảo luận phân tích vai Lính lệ tại lớp và lập bản vẽ tỷ lệ 18 × 24 cm.",
      "Bước 2: Cắt phôi bìa carton cứng, khoét mắt và đắp nổi sống mũi, hoa văn mão bằng đất sét nhẹ.",
      "Bước 3: Phối màu acrylic tương phản mạnh và quay video thuyết minh 01:50 trên bục giảng.",
    ],
    materialsUsed: [
      "Bìa carton cứng khổ 18 × 24 cm",
      "Đất sét tự khô đắp nổi khối 3D",
      "Màu acrylic đỏ tươi, đen, vàng kim, trắng",
    ],
    videoStatusNote:
      "Video thuyết minh thực tế tại lớp (01:50) kèm 2 clip công đoạn đắp nổi & cắt phôi",
    videoUrl: "/student-products/huyen-duong/video-thuyet-minh-to-3.mp4",
    videoPoster: "/student-products/huyen-duong/ra-mat-to-3-linh-le.jpg",
    artSubject: "exhibit-mask-set",
    expectedAssetFile: "/student-products/huyen-duong/mat-na-to-3-linh-le.jpg",
  },
  {
    id: "exhibit-10-3-to-4-trum-so",
    title: "Mặt nạ Trùm Sò, Bản vẽ mm/cm & Bài Thuyết minh (Tổ 4 — Lớp 10.3)",
    category: "Mặt nạ và tạo hình nhân vật",
    topicTitle: "Dự án Huyện đường — Lớp 10.3",
    topicId: "chu-de-01-huyen-duong",
    authorNote:
      "Sản phẩm thực tế Tổ 4 — Lớp 10.3, Trường THPT Bình Phú (Thuyết minh: Minh Luân)",
    isIllustrativeSample: false,
    ideaDescription:
      "Tổ 4 thiết kế bản vẽ nhân trắc học chi tiết (hai mắt cách nhau 2 cm, cao 3–4 cm, nếp nhăn trán cách nhau 1 cm, lỗ thở bán kính 0,5 mm, môi trề xệch 4–5 cm) để khắc họa lão nhà giàu keo kiệt Trùm Sò vừa hoang mang sợ mất của vừa cố giữ vẻ giàu sang trước quan huyện.",
    makingProcess: [
      "Bước 1: Đối chiếu SGK Ngữ văn 10 tại lớp và thiết lập thông số kỹ thuật chuẩn xác cho từng bộ phận trên mặt nạ.",
      "Bước 2: Cắt phôi bìa carton lớn, sơn nền trắng kem pha vàng nhạt, vẽ lông mày nhăn nhó và khuôn miệng trề cam đất.",
      "Bước 3: Biên soạn BÀI THUYẾT MINH.docx hoàn chỉnh và quay video trình bày trước bảng lớp trang trí 'Huyện đường'.",
    ],
    materialsUsed: [
      "Bìa carton tái chế thân thiện môi trường, dây thun cố định",
      "Màu nước & acrylic trắng kem, vàng nhạt, cam đất, đen",
      "Bản vẽ kỹ thuật giấy A4 & Bài thuyết minh Word (.docx)",
    ],
    videoStatusNote:
      "Video thuyết minh thực tế tại lớp (00:47) kèm video hoạt động nhóm (01:08) và tệp Word",
    videoUrl: "/student-products/huyen-duong/video-thuyet-minh-to-4.mp4",
    videoPoster: "/student-products/huyen-duong/ra-mat-to-4-trum-so.jpg",
    documentUrl: "/student-products/huyen-duong/bai-thuyet-minh-to-4-trum-so.docx",
    artSubject: "exhibit-mask-set",
    expectedAssetFile: "/student-products/huyen-duong/mat-na-to-4-trum-so.jpg",
  },
  {
    id: "exhibit-05-infographic-huyen-duong",
    title: "Infographic giải mã Tứ giác nhân vật & Bút pháp châm biếm Huyện đường",
    category: "Infographic và học liệu số",
    topicTitle: "Mã màu và nét mặt ước lệ (Huyện đường)",
    topicId: "chu-de-01-huyen-duong",
    authorNote: "Học liệu trực quan hóa hệ thống nhân vật Dự án Huyện đường",
    isIllustrativeSample: true,
    ideaDescription:
      "Infographic trực quan hóa mạng lưới quan hệ lợi ích giữa Tri huyện – Đề lại – Lính lệ – Trùm Sò, đối chiếu từng câu thoại trào phúng với mã màu sắc diện mặt tuồng.",
    makingProcess: [
      "Bước 1: Lập bảng đối chiếu 4 nhân vật theo 3 cột: Lời tự xưng – Hành động công đường – Mã màu hóa trang.",
      "Bước 2: Vẽ sơ đồ mũi tên quan hệ mua chuộc và đảo lộn công lý trong phiên xử kiện.",
      "Bước 3: Dàn trang đồ họa theo tông Đỏ son – Trắng ngà – Vàng kim rõ nét, dễ tra cứu.",
    ],
    materialsUsed: [
      "Ngữ liệu trích đoạn Huyện đường (SGK Ngữ văn 10)",
      "Bảng mã hex màu sắc mặt nạ tuồng chuẩn hóa",
      "Tư liệu phục vụ ôn tập và thuyết trình nhóm",
    ],
    videoStatusNote:
      "Tài liệu học liệu số phục vụ tra cứu nhanh 4 nhân vật Huyện đường",
    artSubject: "exhibit-infographic",
    expectedAssetFile: "/images/cinema/scene-infographic-tu-giac.png",
  },
  {
    id: "exhibit-07-the-giai-ma-thu-cong",
    title: "Sổ tay & Thẻ giải mã quy ước hóa trang Tuồng Huyện đường",
    category: "Sản phẩm thủ công",
    topicTitle: "Mã màu và nét mặt ước lệ (Huyện đường)",
    topicId: "chu-de-01-huyen-duong",
    authorNote: "Hồ sơ tra cứu thuật ngữ sân khấu Tuồng đồ",
    isIllustrativeSample: true,
    ideaDescription:
      "Bộ thẻ tra cứu trình bày hệ thống thuật ngữ sân khấu Tuồng (ước lệ, cách điệu, nói lối, mặt nạ mã màu, râu ba chòm) hỗ trợ học sinh khi phân tích và chế tác mặt nạ Huyện đường.",
    makingProcess: [
      "Bước 1: Hệ thống hóa các khái niệm và quy ước hóa trang từ kịch bản Huyện đường.",
      "Bước 2: Minh họa từng sắc diện Tri huyện, Đề lại, Lính lệ, Trùm Sò trên thẻ bìa bồi giấy ngà.",
      "Bước 3: Đóng quyển lưu trữ tại góc học tập của lớp.",
    ],
    materialsUsed: [
      "Bìa kraft định lượng cao, giấy ngà",
      "Bảng chú thích thuật ngữ Tuồng hài dân gian",
      "Mực vẽ và bút lông tỉa nét",
    ],
    videoStatusNote:
      "Tài liệu cẩm nang kèm theo bàn mô phỏng Xưởng STEAM",
    artSubject: "exhibit-handbook",
    expectedAssetFile: "/images/cinema/scene-so-tay-the-giai-ma.png",
  },
];

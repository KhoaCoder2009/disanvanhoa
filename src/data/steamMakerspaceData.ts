import { SteamElement, SteamStep } from "@/types/heritage";

export const STEAM_MAKERSPACE_META = {
  vietnameseName: "XƯỞNG SÁNG TẠO STEAM",
  englishName: "STEAM MAKERSPACE",
  title: "TỪ TRANG KỊCH BẢN ĐẾN MẶT NẠ & SÂN KHẤU 3D",
  description:
    "Quy trình 5 bước thiết kế kỹ thuật ứng dụng vào Dự án Tuồng đồ Huyện đường: Đọc hiểu ngữ liệu – Thiết kế tỷ lệ – Chế tạo mặt nạ 3D – Thử nghiệm biểu diễn – Cải tiến hoàn thiện.",
  buttonLabel: "SỔ TAY XƯỞNG STEAM",
};

export const STEAM_STEPS: SteamStep[] = [
  {
    stepNumber: 1,
    title: "BƯỚC 1: XÁC ĐỊNH VẤN ĐỀ",
    summary: "Kết nối kịch bản Huyện đường với bài toán thiết kế mặt nạ sân khấu.",
    bullets: [
      "Đọc hiểu trích đoạn Huyện đường.",
      "Phân tích tính cách 4 nhân vật.",
      "Đặt câu hỏi thiết kế tạo hình.",
    ],
    artifactExample:
      "Làm thế nào để chuyển hóa tính cách trào phúng của Tri huyện, Đề lại, Lính lệ và Trùm Sò thành bộ mặt nạ bìa cứng 3D vừa nhìn đã nhận ra bản chất nhân vật trên sân khấu lớp học?",
  },
  {
    stepNumber: 2,
    title: "BƯỚC 2: NGHIÊN CỨU VÀ THIẾT KẾ",
    summary: "Huy động kiến thức liên môn để xây dựng bản vẽ tỷ lệ chuẩn.",
    bullets: [
      "Tra cứu mã màu hóa trang tuồng.",
      "Dựng bản vẽ trục đối xứng cm/mm.",
      "Cắt dưỡng giấy tỷ lệ 1:1.",
    ],
    artifactExample:
      "Thiết lập thông số kỹ thuật cụ thể (như khung 18 × 24 cm của Tổ 3, khoảng cách hai mắt 2 cm của Tổ 4, hay dưỡng giấy 1:1 của Tổ 2) và chọn bảng màu acrylic tương ứng.",
  },
  {
    stepNumber: 3,
    title: "BƯỚC 3: CHẾ TẠO",
    summary: "Hiện thực hóa bản vẽ tại lớp học bằng vật liệu tái chế.",
    bullets: [
      "Phân công 6 nhóm việc trong Tổ.",
      "Tạo khối nổi 3D trên bìa carton.",
      "Sơn lót nền và tỉa nét ước lệ.",
    ],
    artifactExample:
      "Xẻ tai bìa gấp sống mũi 3D (Tổ 2), đắp nổi đất sét tự khô cho chóp mũi hề & hoa văn mão (Tổ 3), sơn phối màu tương phản và ghi hình hậu trường chế tác.",
  },
  {
    stepNumber: 4,
    title: "BƯỚC 4: THỬ NGHIỆM",
    summary: "Kiểm chứng mặt nạ trong hoạt động thuyết trình & tập kịch.",
    bullets: [
      "Kiểm tra tầm nhìn hốc mắt & lỗ thở.",
      "Thử độ chắc của dây đeo khi thoại.",
      "Đánh giá độ nổi bật từ cuối lớp.",
    ],
    artifactExample:
      "Ướm thử mặt nạ trước bảng sân khấu 'Công minh chính trực – Huyện đường' để kiểm tra độ tương phản đường cọ dưới ánh đèn lớp học và sự thoải mái khi diễn viên thoại.",
  },
  {
    stepNumber: 5,
    title: "BƯỚC 5: ĐÁNH GIÁ VÀ CẢI TIẾN",
    summary: "Hoàn thiện sản phẩm, thuyết minh Nói – Nghe và công diễn.",
    bullets: [
      "Bổ sung viền mũ & nhấn nét cọ.",
      "Trình bày bài thuyết minh trước lớp.",
      "Biểu diễn vở kịch chung & lưu trữ số.",
    ],
    artifactExample:
      "Bổ sung viền mũ vàng đồng cũ cho mặt nạ Đề lại, hoàn chỉnh tệp Word thuyết minh và đưa toàn bộ mặt nạ vào vở diễn kịch chung của Lớp 10.3.",
  },
];

export const STEAM_ELEMENTS: SteamElement[] = [
  {
    letter: "S",
    englishName: "SCIENCE",
    vietnameseName: "Khoa học",
    shortExplanation:
      "Nghiên cứu đặc tính vật lý của vật liệu tái chế (độ cứng sóng bìa carton, độ bám dính sơn acrylic, độ co ngót của đất sét tự khô) và tâm lý học thị giác về tương phản màu sắc sân khấu.",
    huyenDuongExample:
      "Khảo sát cách lót nền màu sáng trước khi đi nét đen nâu, đỏ sẫm lên bìa carton nâu để màu không bị xỉn và nhìn rõ từ khoảng cách cuối lớp học.",
    classroomApplication:
      "Các Tổ Lớp 10.3 kết hợp bìa carton sóng cứng với đất sét nhẹ tự khô và màu nước/acrylic không độc hại, thân thiện với môi trường học đường.",
    toolsAndMaterials: [
      "Bìa carton sóng 3 lớp tái chế, giấy vở dựng dưỡng",
      "Đất sét trắng tự khô tạo khối nổi nhẹ",
      "Màu acrylic, màu nước, keo sữa và cọ tỉa nét",
    ],
  },
  {
    letter: "T",
    englishName: "TECHNOLOGY",
    vietnameseName: "Công nghệ",
    shortExplanation:
      "Ứng dụng công cụ số trong tra cứu tư liệu hóa trang tuồng, mô phỏng phối màu 3D WebGL, soạn thảo hồ sơ Word, quay dựng video thuyết trình và xuất bản lên Triển lãm số.",
    huyenDuongExample:
      "Thử nghiệm trước bảng màu và dáng mày – râu của 4 nhân vật trên Bàn mô phỏng Mặt nạ 3D trực tuyến trước khi pha màu thật trên lớp.",
    classroomApplication:
      "Mỗi Tổ cử nhóm truyền thông quay video thuyết minh, clip công đoạn chế tác và biên tập tệp Word (.docx) lưu trữ trên Google Drive & Website dự án.",
    toolsAndMaterials: [
      "Bàn mô phỏng Mặt nạ Tuồng 3D WebGL (Three.js)",
      "Phần mềm soạn thảo văn bản (.docx) & tra cứu tư liệu",
      "Thiết bị ghi hình bài thuyết minh và vở diễn kịch lớp",
    ],
  },
  {
    letter: "E",
    englishName: "ENGINEERING",
    vietnameseName: "Kĩ thuật",
    shortExplanation:
      "Thiết kế kết cấu biến tấm bìa phẳng thành mặt nạ vòm 3 chiều ôm sát khuôn mặt, gia cố sống mũi nổi, khoét lỗ nhìn – lỗ thở nhân trắc học và lắp cơ cấu dây đeo bền chắc.",
    huyenDuongExample:
      "Xẻ các tai bìa xung quanh mép mặt nạ kết hợp gấp nếp dọc trục sống mũi để tạo độ cong 3D tự đứng vững và chịu lực tốt khi biểu diễn.",
    classroomApplication:
      "Tổ 2 ứng dụng kỹ thuật xẻ tai gấp khối 3D; Tổ 3 đắp nổi khối mũi hề và hoa văn mũ lính; Tổ 4 tính toán lỗ thở và dây đeo an toàn cho diễn viên.",
    toolsAndMaterials: [
      "Kỹ thuật cắt dưỡng giấy 1:1 và xẻ rãnh uốn cong bìa",
      "Kéo, dao rọc giấy an toàn, súng bắn keo / băng keo",
      "Dây thun co giãn cố định mặt nạ khi nhập vai",
    ],
  },
  {
    letter: "A",
    englishName: "ARTS",
    vietnameseName: "Nghệ thuật",
    shortExplanation:
      "Cảm thụ sâu sắc tiếng cười trào phúng của kịch bản tuồng đồ, chuyển ngữ thành hội họa hóa trang ước lệ, mỹ thuật trang trí bối cảnh công đường và nghệ thuật diễn xuất nhập vai.",
    huyenDuongExample:
      "Biến câu thoại tự bộc lộ và mớm cung nơi cửa quan thành cặp mày xếch sắc lẹm của Đề lại, chóp mũi đỏ hề của Lính lệ hay khuôn miệng trề tiếc của nơi Trùm Sò.",
    classroomApplication:
      "Học sinh Lớp 10.3 tự tay vẽ hoành phi câu đối phấn 'Công minh chính trực – Huyện đường' và hóa thân thành các nhân vật trong vở kịch chung.",
    toolsAndMaterials: [
      "Ngữ liệu trích đoạn Huyện đường (SGK Ngữ văn 10)",
      "Cọ bản tô mảng và cọ đầu nhọn đi nét biểu cảm",
      "Kịch bản diễn xướng và bối cảnh sân khấu lớp học",
    ],
  },
  {
    letter: "M",
    englishName: "MATHEMATICS",
    vietnameseName: "Toán học",
    shortExplanation:
      "Đo đạc kích thước nhân trắc học khuôn mặt, kẻ trục đối xứng dọc – ngang, tính toán khoảng cách hai mắt, chiều cao mũ quan và thiết lập độ bất đối xứng có chủ đích.",
    huyenDuongExample:
      "Xác định chuẩn xác khung chữ nhật bao ngoài, trục sống mũi chia đôi gương mặt và tỷ lệ vàng giữa vùng trán – hốc mắt – khuôn miệng.",
    classroomApplication:
      "Tổ 3 lập bản vẽ chuẩn 18 × 24 cm (mũ 7,5 cm, mắt 4 cm, mũi Ø 1,5 cm); Tổ 4 đo hai mắt cách nhau 2 cm, vệt nhăn cách đều 1 cm, miệng rộng 4–5 cm.",
    toolsAndMaterials: [
      "Thước thẳng chia vạch mm/cm, thước ê-ke",
      "Lưới trục tọa độ đối xứng trên giấy A4 / giấy đôi",
      "Phép đo nhân trắc học thực tế trên khuôn mặt người đeo",
    ],
  },
];

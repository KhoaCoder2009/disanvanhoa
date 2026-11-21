import { SteamElement, SteamStep } from "@/types/heritage";

export const STEAM_MAKERSPACE_META = {
  vietnameseName: "XƯỞNG SÁNG TẠO STEAM",
  englishName: "STEAM MAKERSPACE",
  title: "TỪ Ý TƯỞNG ĐẾN SẢN PHẨM",
  description:
    "Khám phá kiến thức – Thiết kế giải pháp – Chế tạo sản phẩm – Thử nghiệm – Cải tiến.",
  buttonLabel: "KHÁM PHÁ XƯỞNG STEAM",
};

export const STEAM_STEPS: SteamStep[] = [
  {
    stepNumber: 1,
    title: "BƯỚC 1: XÁC ĐỊNH VẤN ĐỀ",
    summary: "Kết nối văn bản Ngữ văn với bài toán thiết kế thực tiễn.",
    bullets: [
      "Đọc hiểu văn bản.",
      "Xác định vấn đề thực tiễn.",
      "Đặt câu hỏi thiết kế.",
    ],
    artifactExample:
      "Làm thế nào để chuyển hóa tính cách trào phúng của 4 nhân vật trong trích đoạn Huyện đường thành bộ chân dung mặt nạ tuồng bằng bìa cứng có thể sử dụng biểu diễn trên lớp?",
  },
  {
    stepNumber: 2,
    title: "BƯỚC 2: NGHIÊN CỨU VÀ THIẾT KẾ",
    summary: "Huy động kiến thức liên môn để xây dựng bản thiết kế.",
    bullets: [
      "Tìm hiểu kiến thức liên môn.",
      "Phác thảo ý tưởng.",
      "Chọn vật liệu và giải pháp.",
    ],
    artifactExample:
      "Tra cứu mã màu hóa trang tuồng, lập bản vẽ tỉ lệ gương mặt, chọn loại bìa cứng nhiều lớp, giấy bồi và bảng màu phù hợp với từng nhân vật.",
  },
  {
    stepNumber: 3,
    title: "BƯỚC 3: CHẾ TẠO",
    summary: "Hiện thực hóa bản vẽ tại xưởng học tập nhóm.",
    bullets: [
      "Phân công nhóm.",
      "Làm sản phẩm.",
      "Ghi lại quá trình.",
    ],
    artifactExample:
      "Cắt tạo hình khung mặt nạ, bồi các lớp chi tiết nổi (chân mày, râu, mão quan), vẽ màu ước lệ và ghi nhật ký hình ảnh từng công đoạn.",
  },
  {
    stepNumber: 4,
    title: "BƯỚC 4: THỬ NGHIỆM",
    summary: "Kiểm chứng sản phẩm trong hoạt động diễn xướng thực tế.",
    bullets: [
      "Kiểm tra chức năng.",
      "Phát hiện hạn chế.",
      "Ghi nhận kết quả.",
    ],
    artifactExample:
      "Đưa bộ chân dung vào tập luyện vi diễn trích đoạn Huyện đường: kiểm tra độ bền của bìa, tầm nhìn, độ rõ của sắc mặt từ khoảng cách khán giả trong lớp.",
  },
  {
    stepNumber: 5,
    title: "BƯỚC 5: ĐÁNH GIÁ VÀ CẢI TIẾN",
    summary: "Hoàn thiện sản phẩm và thuyết minh giá trị học thuật.",
    bullets: [
      "Nhận phản hồi.",
      "Điều chỉnh sản phẩm.",
      "Thuyết minh và hoàn thiện.",
    ],
    artifactExample:
      "Bổ sung đường viền tương phản để nét mặt nổi bật hơn dưới ánh sáng lớp học, hoàn thiện thẻ giải mã nhân vật và trưng bày tại Triển lãm số.",
  },
];

export const STEAM_ELEMENTS: SteamElement[] = [
  {
    letter: "S",
    englishName: "SCIENCE",
    vietnameseName: "Khoa học",
    shortExplanation:
      "Nghiên cứu đặc tính vật liệu (độ bền, độ hút ẩm của giấy bồi, bìa cứng, gỗ sung), quang học ánh sáng – bóng đổ và tâm lý học thị giác về màu sắc trong nghệ thuật truyền thống.",
    huyenDuongExample:
      "Khảo sát độ bám dính của chất liệu màu trên bề mặt bìa cứng và hiệu ứng tương phản thị giác giúp nhận diện biểu cảm nhân vật Huyện đường từ xa.",
    damSanExample:
      "Tìm hiểu tính chất truyền sáng, tán xạ ánh sáng qua các lớp giấy có định lượng khác nhau và góc chiếu tạo bóng đổ trong Hộp kể chuyện sử thi Đăm Săn.",
    toolsAndMaterials: [
      "Giấy mỹ thuật, giấy can mờ, bìa carton nhiều lớp",
      "Màu acrylic, màu bột tự nhiên, keo sữa thực vật",
      "Nguồn sáng LED vàng ấm thử nghiệm độ xuyên sáng",
    ],
  },
  {
    letter: "T",
    englishName: "TECHNOLOGY",
    vietnameseName: "Công nghệ",
    shortExplanation:
      "Ứng dụng công cụ số trong tra cứu tư liệu di sản, phác thảo bố cục, biên tập thẻ giải mã, ghi hình vi diễn, sản xuất podcast thuyết minh và lưu trữ trên nền tảng Bảo tàng số.",
    huyenDuongExample:
      "Sử dụng phần mềm đồ họa để thử nghiệm bảng mã màu mặt nạ cho Tri huyện, Đề lại, Lính lệ, Trùm Sò; quay và dựng video vi diễn kèm phụ đề giải mã.",
    damSanExample:
      "Thiết kế mạch chiếu sáng LED đơn giản cho cảnh ngôi nhà Nữ thần Mặt Trời và thu âm bản kể chuyện sử thi (Klei Khan) kết hợp âm thanh cồng chiêng.",
    toolsAndMaterials: [
      "Thiết bị ghi hình, thu âm thuyết minh học tập",
      "Công cụ thiết kế Infographic và thẻ giải mã số",
      "Hệ thống đèn LED mini dùng pin an toàn cho mô hình",
    ],
  },
  {
    letter: "E",
    englishName: "ENGINEERING",
    vietnameseName: "Kĩ thuật",
    shortExplanation:
      "Thiết kế kết cấu chịu lực, cơ cấu lắp ghép nhiều lớp (layering), rãnh trượt cơ học, khớp nối chuyển động và quy trình gia công sản phẩm thủ công bền vững.",
    huyenDuongExample:
      "Thiết kế cấu trúc nổi 3D nhiều lớp bìa cho phần mão quan, râu và gò má của mặt nạ tuồng; gia cố khung cầm tay hoặc đai đeo chắc chắn khi biểu diễn.",
    damSanExample:
      "Chế tạo khung hộp diorama cứng cáp, thiết kế hệ thống khe cài các lớp cảnh và thanh trượt điều khiển nhân vật Đăm Săn di chuyển qua rừng Sáp Đen.",
    toolsAndMaterials: [
      "Kỹ thuật cắt ghép mộng giấy, bồi bìa nhiều lớp",
      "Cơ cấu thanh trượt, trục xoay và khớp nối ghim bấm",
      "Bản vẽ kỹ thuật phân tách từng lớp chi tiết",
    ],
  },
  {
    letter: "A",
    englishName: "ARTS",
    vietnameseName: "Nghệ thuật",
    shortExplanation:
      "Cảm thụ sâu sắc giá trị văn chương, ngôn ngữ kịch bản, nghệ thuật tạo hình ước lệ, hội họa dân gian, hoa văn văn hóa bản địa và nghệ thuật diễn xướng sân khấu.",
    huyenDuongExample:
      "Chuyển hóa ngôn từ trào phúng trong kịch bản Huyện đường thành nét cọ sắc sảo, thần thái mặt tuồng và diễn xuất hình thể, giọng điệu nhân vật.",
    damSanExample:
      "Tái hiện hoa văn thổ cẩm Ê-đê, kiến trúc nhà dài và không khí hùng tráng của sử thi Tây Nguyên qua nghệ thuật cắt giấy (Papercut) và kể chuyện.",
    toolsAndMaterials: [
      "Ngữ liệu văn bản Ngữ văn 10 & tư liệu sân khấu",
      "Bút vẽ nét, cọ bản, họa tiết trang trí truyền thống",
      "Kịch bản phân cảnh vi diễn và lời dẫn thuyết minh",
    ],
  },
  {
    letter: "M",
    englishName: "MATHEMATICS",
    vietnameseName: "Toán học",
    shortExplanation:
      "Tính toán tỉ lệ nhân trắc học, phép đối xứng – bất đối xứng trên gương mặt hóa trang, tỉ lệ thu phóng mô hình, kích thước hình học không gian và phân bổ khoảng cách phối cảnh.",
    huyenDuongExample:
      "Đo đạc tỉ lệ khuôn mặt (trục dọc sống mũi, trục ngang mắt – mày – miệng), tính toán sự đối xứng hoặc lệch nét có chủ ý để khắc họa nét gian xảo của Đề lại.",
    damSanExample:
      "Tính toán kích thước hình hộp chữ nhật, tỉ lệ thu nhỏ giữa các lớp tiền cảnh – trung cảnh – hậu cảnh và góc chiếu sáng tối ưu để không bị lóa hình.",
    toolsAndMaterials: [
      "Thước đo tỉ lệ, lưới tọa độ đối xứng (Grid)",
      "Công thức tính tỉ lệ phối cảnh xa – gần trong hộp sâu",
      "Bảng dự toán kích thước vật liệu tránh lãng phí",
    ],
  },
];

import { DiscussionTopicGroup } from "@/types/heritage";

export const LEARNING_FORUM_META = {
  vietnameseName: "DIỄN ĐÀN HỌC TẬP",
  englishName: "LEARNING FORUM",
  title: "LẮNG NGHE – ĐỐI THOẠI – LAN TỎA",
  description:
    "Không gian trao đổi học thuật, chia sẻ kinh nghiệm chế tác mặt nạ STEAM và phản biện nghệ thuật sân khấu hóa trích đoạn Tuồng đồ Huyện đường.",
};

export const DISCUSSION_CORNER_GROUPS: DiscussionTopicGroup[] = [
  {
    id: "discussion-huyen-duong-van-ban",
    topicName: "Chủ đề 01: Ngôn ngữ trào phúng & Tứ giác nhân vật Huyện đường",
    guidingQuestions: [
      "Trong cảnh đối thoại giữa Tri huyện và Đề lại, những câu thoại nào bộc lộ trực tiếp nhất bản chất tham nhũng, coi thường công lý nơi công đường?",
      "Vì sao tác giả dân gian lại để các nhân vật tự giới thiệu và phơi bày tính xấu của mình ngay từ đầu trích đoạn?",
      "Bốn nhân vật Tri huyện, Đề lại, Lính lệ và Trùm Sò tạo thành một mạng lưới quan hệ lợi ích như thế nào trong vụ kiện?",
    ],
    exchangeIssues: [
      "Ý nghĩa châm biếm ngược khi đặt bức hoành phi 'Công minh chính trực – Huyện đường' ngay phía sau cảnh quan lại bàn mưu ăn của đút lót.",
      "Cách giữ đúng nhịp điệu nói lối và khẩu ngữ dân gian khi chuyển thể trích đoạn SGK thành kịch bản diễn trên lớp.",
    ],
    openResearchQuestions: [
      "Tiếng cười phê phán trong tuồng đồ 'Nghêu, Sò, Ốc, Hến' còn giữ nguyên giá trị thời sự như thế nào đối với nhận thức của người trẻ hôm nay?",
    ],
  },
  {
    id: "discussion-huyen-duong-mat-na",
    topicName: "Chủ đề 02: Giải mã Mã màu & Kỹ thuật Chế tác Mặt nạ 3D (4 Tổ)",
    guidingQuestions: [
      "Vì sao chỉ cần nhìn sự đối lập giữa đôi mày xếch – mắt đỏ sẫm của Đề lại (Tổ 2), mũi tròn đỏ hề của Lính lệ (Tổ 3) và đôi mắt ngơ ngác – miệng trề của Trùm Sò (Tổ 4), khán giả đã nhận ra ngay tính cách từng vai?",
      "Việc lập bản vẽ thông số cm/mm và cắt dưỡng giấy 1:1 trước khi cắt bìa cứng giúp ích gì cho độ chính xác khi đeo biểu diễn?",
    ],
    exchangeIssues: [
      "So sánh hiệu quả tạo khối 3D giữa kỹ thuật xẻ tai gấp nếp sống mũi bìa carton (Tổ 2) và kỹ thuật đắp nổi đất sét tự khô (Tổ 3).",
      "Kinh nghiệm lót nền màu sáng và chọn cỡ cọ để đường nét mặt nạ nổi bật rõ từ cuối lớp học.",
    ],
    openResearchQuestions: [
      "Nghệ thuật hóa trang ước lệ của sân khấu Tuồng truyền thống gợi mở điều gì cho thiết kế nhân vật minh họa và sân khấu học đường đương đại?",
    ],
  },
  {
    id: "discussion-san-khau-hoa",
    topicName: "Chủ đề 03: Kỹ năng Thuyết minh Nói – Nghe & Diễn kịch Sân khấu hóa",
    guidingQuestions: [
      "Một bài thuyết minh sản phẩm mặt nạ thuyết phục trên lớp cần kết nối 3 yếu tố 'Dẫn chứng lời thoại SGK – Ý nghĩa mã màu/đường nét – Chất liệu STEAM' như thế nào?",
      "Khi đeo mặt nạ bìa cứng biểu diễn, diễn viên cần điều chỉnh âm lượng giọng thoại và biên độ cử chỉ hình thể ra sao để vai diễn sinh động?",
    ],
    exchangeIssues: [
      "Cách phối hợp nhịp nhàng giữa các thành viên phụ trách nội dung, bản vẽ, chế tác, thuyết trình và diễn xuất trong cùng một Tổ.",
    ],
    openResearchQuestions: [
      "Làm thế nào để lưu trữ và lan tỏa các sản phẩm sân khấu hóa Ngữ văn trên nền tảng Bảo tàng & Triển lãm số của nhà trường?",
    ],
  },
];

export const SPEAKING_LISTENING_GUIDES = {
  presentationStructure: [
    {
      part: "Phần 1: Mở đầu & Giới thiệu nhân vật (30–45 giây)",
      detail:
        "Giới thiệu Tổ thực hiện, nhân vật đảm nhận trong trích đoạn Huyện đường (Tri huyện, Đề lại, Lính lệ hoặc Trùm Sò) và vị thế của nhân vật nơi công đường.",
    },
    {
      part: "Phần 2: Giải mã Ý tưởng, Lời thoại & Mã màu (1–2 phút)",
      detail:
        "Trích dẫn câu thoại tiêu biểu trong SGK Ngữ văn 10 làm căn cứ cho cách chọn gam màu chủ đạo, dáng lông mày, hốc mắt, ria mép và kiểu mũ trên mặt nạ.",
    },
    {
      part: "Phần 3: Chất liệu STEAM & Thông điệp Nghệ thuật (45–60 giây)",
      detail:
        "Chia sẻ quy trình từ bản vẽ tỷ lệ sang chế tác bìa carton tái chế / đất sét nhẹ và đúc kết ý nghĩa phê phán hiện thực của nghệ thuật tuồng truyền thống.",
    },
    {
      part: "Phần 4: Đối thoại, Phản biện & Kết nối Vi diễn (1 phút)",
      detail:
        "Lắng nghe câu hỏi từ giáo viên và các Tổ bạn, bảo vệ phương án thiết kế và chuyển tiếp sang phần nhập vai diễn kịch chung của lớp.",
    },
  ],
  listeningAndNoteTaking: [
    "Chuẩn bị sổ tay ghi chép theo 3 tiêu chí: Điểm sáng tạo tạo hình – Độ sát hợp với văn bản Huyện đường – Gợi ý hoàn thiện kỹ thuật.",
    "Quan sát kỹ sự ăn khớp giữa lời thuyết minh của Tổ bạn với thần thái thực tế trên chiếc mặt nạ.",
    "Tôn trọng lượt lời, ghi nhận chính xác dẫn chứng trước khi đặt câu hỏi phản biện.",
  ],
  questioningAndFeedbackRules: [
    "Áp dụng quy tắc phản hồi tích cực: Ghi nhận điểm nổi bật -> Đặt câu hỏi làm rõ ý đồ nghệ thuật -> Đề xuất cải tiến thực tế.",
    "Mọi nhận xét luôn bám sát ngữ liệu trích đoạn Huyện đường (SGK Ngữ văn 10) và sản phẩm thủ công của nhóm.",
    "Khuyến khích các câu hỏi kết nối giữa tạo hình mặt nạ với diễn xuất của diễn viên trong vở kịch chung.",
  ],
};

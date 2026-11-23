import { DiscussionTopicGroup } from "@/types/heritage";

export const LEARNING_FORUM_META = {
  vietnameseName: "DIỄN ĐÀN HỌC TẬP",
  englishName: "LEARNING FORUM",
  title: "LẮNG NGHE – ĐỐI THOẠI – LAN TỎA",
  description:
    "Không gian chia sẻ ý tưởng, trình bày kết quả nghiên cứu và cùng nhau phản biện, hoàn thiện sản phẩm.",
};

export const DISCUSSION_CORNER_GROUPS: DiscussionTopicGroup[] = [
  {
    id: "discussion-huyen-duong",
    topicName: "Chủ đề 01: Mã màu và nét mặt ước lệ (Trích đoạn Huyện đường)",
    guidingQuestions: [
      "Trong cảnh đối thoại giữa Tri huyện và Đề lại, những câu thoại nào bộc lộ trực tiếp nhất bản chất tham nhũng, coi thường công lý nơi công đường?",
      "Vì sao tác giả dân gian lại để các nhân vật tự giới thiệu và phơi bày tính xấu của mình ngay từ đầu trích đoạn?",
      "Bốn nhân vật Tri huyện, Đề lại, Lính lệ và Trùm Sò tạo thành một mạng lưới quan hệ như thế nào trong vụ kiện?",
    ],
    exchangeIssues: [
      "Lựa chọn gam màu chủ đạo và đường nét mắt, mày, râu sao cho khi nhìn vào mặt nạ bìa cứng, khán giả phân biệt được ngay cái gian của Tri huyện với cái tham của Đề lại.",
      "Cách kết hợp mặt nạ bìa cứng với cử chỉ hình thể và giọng điệu khi thực hành vi diễn trên lớp để không bị che khuất giọng nói.",
    ],
    openResearchQuestions: [
      "Nghệ thuật trào phúng và hóa trang ước lệ của tuồng đồ truyền thống gợi mở điều gì cho thiết kế nhân vật đồ họa và sân khấu đương đại?",
    ],
  },
  {
    id: "discussion-dam-san",
    topicName: "Chủ đề 02: Đánh thức thế giới sử thi (Đăm Săn đi bắt Nữ thần Mặt Trời)",
    guidingQuestions: [
      "Hành trình Đăm Săn vượt qua rừng Sáp Đen đến ngôi nhà Nữ thần Mặt Trời thể hiện khát vọng gì của cộng đồng người Ê-đê cổ đại?",
      "Hình ảnh Nữ thần Mặt Trời và cái chết của Đăm Săn trong rừng Sáp Đen mang ý nghĩa bi kịch hay bất tử hóa người anh hùng?",
    ],
    exchangeIssues: [
      "Phân bổ các chi tiết kiến trúc nhà dài, rừng cỏ tranh và vầng mặt trời vào 3 lớp cảnh của Hộp kể chuyện sao cho tạo được chiều sâu không gian kỳ vĩ.",
      "Giải pháp kỹ thuật đặt đèn LED và giấy can tán sáng để tái hiện khoảnh khắc Nữ thần Mặt Trời bước ra mà không làm lộ mạch đèn.",
    ],
    openResearchQuestions: [
      "Làm thế nào để không gian diễn xướng sử thi (Klei Khan) sống lại gần gũi với học sinh THPT hôm nay thông qua các mô hình tương tác thị giác?",
    ],
  },
  {
    id: "discussion-steam-lien-mon",
    topicName: "Chuyên đề Liên môn STEAM: Kết nối Huyện đường & Sử thi Đăm Săn",
    guidingQuestions: [
      "Điểm khác biệt lớn nhất khi chuyển hóa ngôn ngữ trào phúng của 'Huyện đường' thành mặt nạ 3D so với chuyển hóa không gian kỳ vĩ của 'Đăm Săn' thành Hộp kể chuyện ánh sáng là gì?",
      "Những nguyên lý Khoa học – Toán học – Kỹ thuật nào đóng vai trò quyết định giúp sản phẩm thủ công vừa bám sát văn bản SGK vừa bền đẹp khi trình diễn trên lớp?",
    ],
    exchangeIssues: [
      "Chuẩn hóa Phiếu 01–04 trong Nhật ký dự án STEAM để mọi lựa chọn màu sắc hay cấu trúc mô hình đều có dẫn chứng cụ thể từ văn bản Ngữ văn 10.",
    ],
    openResearchQuestions: [
      "Người trẻ có thể kết hợp nghệ thuật tạo hình truyền thống với công nghệ số (Triển lãm số, Podcast, QR thuyết minh) như thế nào để đưa Huyện đường và Đăm Săn đến gần bạn học?",
    ],
  },
];

export const SPEAKING_LISTENING_GUIDES = {
  presentationStructure: [
    {
      part: "Phần 1: Mở đầu & Đặt vấn đề (1 phút)",
      detail:
        "Giới thiệu tên nhóm, văn bản Ngữ văn làm gốc (Huyện đường hoặc Đăm Săn) và câu hỏi thiết kế STEAM mà nhóm giải quyết.",
    },
    {
      part: "Phần 2: Giải mã Ngữ văn & Bản thiết kế (2–3 phút)",
      detail:
        "Trình bày căn cứ từ văn bản (lời thoại, chi tiết nghệ thuật) dẫn tới quyết định chọn mã màu, đường nét mặt nạ hoặc cấu trúc lớp cảnh hộp kể chuyện.",
    },
    {
      part: "Phần 3: Trình diễn sản phẩm & Quy trình chế tạo (2–3 phút)",
      detail:
        "Thực hiện vi diễn hoặc vận hành mô hình ánh sáng; chia sẻ vật liệu, kỹ thuật lắp ghép và những thử nghiệm – cải tiến của nhóm.",
    },
    {
      part: "Phần 4: Đối thoại & Phản biện (2 phút)",
      detail:
        "Lắng nghe câu hỏi từ giáo viên và các nhóm bạn, bảo vệ ý tưởng thiết kế bằng dẫn chứng văn bản và thực tế chế tạo.",
    },
  ],
  listeningAndNoteTaking: [
    "Chuẩn bị sổ tay hoặc phiếu ghi chép theo cấu trúc 3 cột: Điểm sáng tạo nổi bật – Căn cứ văn bản đã vận dụng – Câu hỏi/Gợi ý cải tiến.",
    "Quan sát kỹ sự ăn khớp giữa lời thuyết minh của nhóm bạn với sản phẩm thực tế (màu sắc mặt nạ, độ bền kết cấu, hiệu ứng ánh sáng).",
    "Tôn trọng lượt lời, ghi nhận chính xác từ khóa trước khi đưa ra ý kiến phản hồi.",
  ],
  questioningAndFeedbackRules: [
    "Áp dụng quy tắc phản hồi tích cực (Khen ngợi điểm sáng tạo -> Đặt câu hỏi làm rõ -> Đề xuất hướng cải tiến cụ thể).",
    "Mọi nhận xét cần liên hệ trực tiếp với văn bản Ngữ văn đang học và sản phẩm thực tế của nhóm.",
    "Đặt câu hỏi mở gợi suy ngẫm về mối liên hệ giữa nghệ thuật truyền thống và giải pháp kỹ thuật STEAM.",
  ],
};

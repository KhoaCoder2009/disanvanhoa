import { DiscussionTopicGroup, RubricCriterion } from "@/types/heritage";

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
    id: "discussion-cheo-roi-nuoc",
    topicName: "Chuyên đề Bảo tàng số: Hồn Chèo & Múa rối nước",
    guidingQuestions: [
      "Trong trích đoạn Xúy Vân giả dại, tiếng đế và các làn điệu chèo đóng vai trò gì trong việc bộc lộ nỗi cô đơn của nhân vật?",
      "Từ văn bản 'Múa rối nước – hiện đại soi bóng tiền nhân', yếu tố nào tạo nên sự khác biệt độc đáo của sân khấu thủy đình so với sân khấu cạn?",
    ],
    exchangeIssues: [
      "So sánh tính ước lệ trong động tác múa quạt của Chèo, nét vẽ mặt của Tuồng và chuyển động quân rối trên mặt nước.",
    ],
    openResearchQuestions: [
      "Người trẻ có thể ứng dụng công nghệ số và tư duy STEAM như thế nào để bảo tồn và lan tỏa các loại hình kịch hát dân gian Việt Nam?",
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
    "Mọi nhận xét cần bám sát tiêu chí trong Rubric và liên hệ trực tiếp với văn bản Ngữ văn đang học.",
    "Đặt câu hỏi mở gợi suy ngẫm về mối liên hệ giữa nghệ thuật truyền thống và giải pháp kỹ thuật STEAM.",
  ],
};

export const PRESENTATION_RUBRIC: RubricCriterion[] = [
  {
    criterion: "1. Chiều sâu đọc hiểu & Giải mã văn bản Ngữ văn",
    weight: "30%",
    excellentDescription:
      "Phân tích sắc sảo lời thoại, chi tiết văn bản; giải thích thuyết phục sự chuyển hóa từ tính cách/không gian văn học sang ngôn ngữ tạo hình.",
    goodDescription:
      "Nêu đúng đặc điểm nhân vật và nội dung văn bản; có liên hệ rõ ràng giữa văn bản và sản phẩm thiết kế.",
    needsImprovementDescription:
      "Mô tả sản phẩm còn tách rời khỏi văn bản Ngữ văn; thiếu dẫn chứng từ tác phẩm.",
  },
  {
    criterion: "2. Thiết kế thẩm mỹ & Kỹ thuật chế tạo STEAM",
    weight: "30%",
    excellentDescription:
      "Sản phẩm hoàn thiện tỉ mỉ, đúng quy ước mã màu/cấu trúc lớp cảnh; kết cấu chắc chắn, vận hành tốt trong vi diễn hoặc thử nghiệm ánh sáng.",
    goodDescription:
      "Sản phẩm đúng yêu cầu chủ đề, màu sắc và bố cục hài hòa, sử dụng được trong phần trình bày.",
    needsImprovementDescription:
      "Kết cấu còn lỏng lẻo hoặc chưa thể hiện rõ đặc trưng hóa trang ước lệ / không gian sử thi.",
  },
  {
    criterion: "3. Kỹ năng thuyết trình & Vi diễn (Nói)",
    weight: "20%",
    excellentDescription:
      "Trình bày mạch lạc, làm chủ giọng điệu và ngôn ngữ cơ thể; phối hợp nhóm nhịp nhàng giữa thuyết minh và biểu diễn trực quan.",
    goodDescription:
      "Trình bày rõ ràng, đúng cấu trúc và thời lượng; các thành viên có sự phân công hợp lý.",
    needsImprovementDescription:
      "Còn phụ thuộc nhiều vào văn bản giấy, thiếu sự tương tác với người nghe và sản phẩm.",
  },
  {
    criterion: "4. Lắng nghe, Đặt câu hỏi & Phản biện (Nghe)",
    weight: "20%",
    excellentDescription:
      "Ghi chép nghiêm túc; đặt câu hỏi sâu sắc và trả lời phản biện thuyết phục dựa trên dẫn chứng văn học và kỹ thuật.",
    goodDescription:
      "Chú ý lắng nghe, có tham gia đặt câu hỏi hoặc trả lời đúng trọng tâm các thắc mắc của lớp.",
    needsImprovementDescription:
      "Ít tham gia trao đổi hoặc nhận xét còn chung chung, chưa bám sát tiêu chí học tập.",
  },
];

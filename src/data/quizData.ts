export type QuizCategoryId =
  | "huyen-duong-van-ban"
  | "huyen-duong-mat-na"
  | "su-thi-dam-san"
  | "steam-du-an";

export type QuizDifficulty =
  | "Nhận biết"
  | "Thông hiểu"
  | "Vận dụng STEAM";

export interface QuizCategoryMeta {
  id: QuizCategoryId;
  label: string;
  shortLabel: string;
  accentColor: "crimson" | "bronze" | "emerald" | "indigo";
  description: string;
  artworkImage: string;
}

export interface QuizQuestion {
  id: string;
  category: QuizCategoryId;
  categoryLabel: string;
  difficulty: QuizDifficulty;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  artworkImage: string;
  sourceRef: string;
}

export const QUIZ_CATEGORIES: QuizCategoryMeta[] = [
  {
    id: "huyen-duong-van-ban",
    label: "Dự án Huyện đường: Ngữ liệu & Châm biếm",
    shortLabel: "Ngữ liệu Huyện đường",
    accentColor: "crimson",
    description:
      "Bối cảnh công đường Nghêu, Sò, Ốc, Hến, lời thoại tự xưng và bút pháp trào phúng.",
    artworkImage: "/images/cinema/scene-07-huyen-duong.png",
  },
  {
    id: "huyen-duong-mat-na",
    label: "Dự án Huyện đường: Mã màu & 4 Nhân vật",
    shortLabel: "Mặt nạ 4 Nhân vật",
    accentColor: "bronze",
    description:
      "Giải mã hóa trang ước lệ của Tri huyện, Đề lại, Lính lệ và trọc phú Trùm Sò.",
    artworkImage: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
  },
  {
    id: "su-thi-dam-san",
    label: "Sử thi Đăm Săn & Văn hóa Ê-đê",
    shortLabel: "Sử thi Đăm Săn",
    accentColor: "emerald",
    description:
      "Không gian nhà dài, diễn xướng Klei Khan, rừng Sáp Đen và hành trình bắt Nữ thần Mặt Trời.",
    artworkImage: "/images/cinema/scene-dam-san-nha-dai.png",
  },
  {
    id: "steam-du-an",
    label: "Thiết kế STEAM: Mặt nạ & Hộp kể chuyện",
    shortLabel: "Quy trình STEAM",
    accentColor: "indigo",
    description:
      "Quy trình 5 bước STEAM, quang học Hộp sáng 3 lớp Đăm Săn và kỹ thuật chế tạo mặt nạ.",
    artworkImage: "/images/cinema/scene-09-xuong-steam.png",
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // 1. HUYỆN ĐƯỜNG: NGỮ LIỆU & CHÂM BIẾM (5 câu)
  // ==========================================
  {
    id: "hdvb-01",
    category: "huyen-duong-van-ban",
    categoryLabel: "Dự án Huyện đường: Ngữ liệu & Châm biếm",
    difficulty: "Nhận biết",
    question:
      "Trích đoạn tuồng hài 'Huyện đường' (Ngữ văn 10) thuộc vở tuồng đồ dân gian nào, và dựng lại không gian đặc trưng nào?",
    options: [
      "Thuộc vở Nghêu, Sò, Ốc, Hến; tái hiện cảnh công đường nơi quan huyện và thuộc hạ xử kiện",
      "Thuộc sử thi Đăm Săn; tái hiện nhà dài của tù trưởng Tây Nguyên",
      "Thuộc vở tuồng cung đình Sơn Hậu; tái hiện cảnh triều đình đánh giặc ngoại xâm",
      "Thuộc vở kịch hiện đại Hồn Trương Ba, da hàng thịt",
    ],
    correctIndex: 0,
    explanation:
      "'Huyện đường' là trích đoạn tiêu biểu của vở tuồng đồ 'Nghêu, Sò, Ốc, Hến', dựng lại không gian chốn công đường phong kiến để phơi bày thói tham nhũng, xử án vì lợi lộc.",
    artworkImage: "/images/cinema/scene-07-huyen-duong.png",
    sourceRef: "Phòng 02: Công đường & Bốn nhân vật (SGK Ngữ văn 10)",
  },
  {
    id: "hdvb-02",
    category: "huyen-duong-van-ban",
    categoryLabel: "Dự án Huyện đường: Ngữ liệu & Châm biếm",
    difficulty: "Thông hiểu",
    question:
      "Ngay khi bước ra sân khấu trong 'Huyện đường', thủ pháp nghệ thuật độc đáo nào giúp nhân vật Tri huyện tự lột trần bản chất của mình trước khán giả?",
    options: [
      "Thủ pháp im lặng hoàn toàn từ đầu đến cuối màn diễn",
      "Thủ pháp tự giới thiệu (xưng danh) và thẳng thắn nói toạc phương châm làm quan ăn hối lộ",
      "Để một nhân vật ẩn danh đứng ngoài sân khấu kể lại tiểu sử quan huyện",
      "Trình chiếu văn bản cáo trạng bằng chữ trên màn hình nền",
    ],
    correctIndex: 1,
    explanation:
      "Nghệ thuật tuồng đồ sử dụng lời xưng danh tự bộc lộ rất đặc sắc: Tri huyện vừa khoe uy quyền vừa công khai tuyên bố xử kiện dựa theo túi tiền nhiều hay ít và nhan sắc của đương sự.",
    artworkImage: "/images/cinema/scene-07-huyen-duong.png",
    sourceRef: "Diễn đàn học tập – Câu hỏi định hướng Huyện đường",
  },
  {
    id: "hdvb-03",
    category: "huyen-duong-van-ban",
    categoryLabel: "Dự án Huyện đường: Ngữ liệu & Châm biếm",
    difficulty: "Thông hiểu",
    question:
      "Bộ bốn nhân vật trọng tâm tạo nên mạng lưới quan hệ mua chuộc và tiếng cười châm biếm tại Huyện đường gồm những ai?",
    options: [
      "Tri huyện, Đề lại, Lính lệ và Trùm Sò",
      "Đăm Săn, Hơ Nhị, Mtao Mxây và Nữ thần Mặt Trời",
      "Tri huyện, thầy đồ Nho, người nông dân và người lái đò",
      "Trùm Sò, bà huyện và hai người lính gác cổng thành",
    ],
    correctIndex: 0,
    explanation:
      "Chủ đề 01 và cảnh xử kiện công đường xoay quanh tứ giác nhân vật: Tri huyện (chủ tọa), Đề lại (thư lại hiến kế), Lính lệ (tay sai gác cửa quan) và trọc phú Trùm Sò.",
    artworkImage: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
    sourceRef: "Chủ đề 01: Mã màu và nét mặt ước lệ (Huyện đường)",
  },
  {
    id: "hdvb-04",
    category: "huyen-duong-van-ban",
    categoryLabel: "Dự án Huyện đường: Ngữ liệu & Châm biếm",
    difficulty: "Thông hiểu",
    question:
      "Vai trò của Trùm Sò trong cảnh kiện cáo nơi Huyện đường mang tính chất bi hài như thế nào?",
    options: [
      "Là người anh hùng đứng ra dẹp bỏ nạn tham nhũng của quan huyện",
      "Tuy là nạn nhân bị mất trộm đi kêu quan nhưng bản tính giàu có mà keo kiệt, khúm núm nhưng khư khư giữ hầu bao",
      "Là viên thư lại nắm giữ toàn bộ hồ sơ án từ của nha môn",
      "Là người nghệ nhân chế tác trống chầu và mặt nạ cho đoàn hát",
    ],
    correctIndex: 1,
    explanation:
      "Trùm Sò mang tâm lý vừa xót của mất trộm vừa tiếc từng đồng lễ lót tay cửa quan, khiến cuộc đối đáp mặc cả ở chốn Huyện đường trở thành tấn hài kịch sâu cay.",
    artworkImage: "/images/cinema/scene-vi-dien-huyen-duong.png",
    sourceRef: "Hồ sơ nhân vật Trùm Sò (Chủ đề 01)",
  },
  {
    id: "hdvb-05",
    category: "huyen-duong-van-ban",
    categoryLabel: "Dự án Huyện đường: Ngữ liệu & Châm biếm",
    difficulty: "Thông hiểu",
    question:
      "Trong vi diễn trích đoạn Huyện đường, các động tác hình thể nào của diễn viên cần phối hợp ăn khớp để làm nổi bật tính ước lệ trào phúng?",
    options: [
      "Diễn viên ngồi bất động đọc thoại như phát thanh viên",
      "Cử chỉ vuốt râu, vỗ án, khom lưng rỉ tai, xoa tay vái lạy và ánh mắt liếc ngang dọc dò xét lễ vật",
      "Thực hiện các màn nhào lộn võ thuật cung đình suốt toàn bộ trích đoạn",
      "Đi lại tự nhiên hoàn toàn giống đời thường không cường điệu",
    ],
    correctIndex: 1,
    explanation:
      "Mỗi động tác ước lệ như Tri huyện vuốt râu vỗ án, Đề lại khom lưng rỉ tai hay Trùm Sò ôm túi tiền vái lạy đều gắn chặt với tính cách nhân vật và nhịp trống sân khấu tuồng.",
    artworkImage: "/images/cinema/scene-vi-dien-huyen-duong.png",
    sourceRef: "Triển lãm số – Tư liệu Vi diễn Huyện đường",
  },

  // ==========================================
  // 2. HUYỆN ĐƯỜNG: MÃ MÀU & 4 NHÂN VẬT (5 câu)
  // ==========================================
  {
    id: "hdmn-01",
    category: "huyen-duong-mat-na",
    categoryLabel: "Dự án Huyện đường: Mã màu & 4 Nhân vật",
    difficulty: "Nhận biết",
    question:
      "Theo hệ thống mã màu hóa trang Tuồng trong Chủ đề 01, gương mặt nhân vật Tri huyện được phối màu và tạo hình đặc trưng như thế nào?",
    options: [
      "Nền mặt trắng mốc pha xám bệch, điểm vệt đỏ sẫm nơi gò má, mày xếch đuôi cụp và râu ba chòm tỉa mảnh",
      "Toàn bộ khuôn mặt sơn đỏ rực rỡ biểu trưng cho võ tướng trung liệt",
      "Mặt nâu đất với một vệt phấn trắng vắt ngang sống mũi",
      "Khuôn mặt toàn vàng kim cân đối không có nếp nhăn",
    ],
    correctIndex: 0,
    explanation:
      "Sắc trắng mốc pha xám bệch điểm đỏ gò má cùng râu ba chòm tự đắc của Tri huyện mã hóa trực quan kẻ đội lốt quan trường đạo mạo nhưng tham lam và háo sắc.",
    artworkImage: "/images/cinema/scene-03-sac-tuong.png",
    sourceRef: "Chủ đề 01 – Hồ sơ giải mã nhân vật Tri huyện",
  },
  {
    id: "hdmn-02",
    category: "huyen-duong-mat-na",
    categoryLabel: "Dự án Huyện đường: Mã màu & 4 Nhân vật",
    difficulty: "Thông hiểu",
    question:
      "Nhân vật nào trong bộ tứ Huyện đường có nền mặt trắng bệch điểm mảng xanh xám quanh hốc mắt, đường nét sắc mảnh và khóe miệng nhếch lệch?",
    options: [
      "Lính lệ",
      "Trùm Sò",
      "Đề lại",
      "Tri huyện",
    ],
    correctIndex: 2,
    explanation:
      "Đề lại là viên thư lại thân cận thông thuộc giấy tờ nhưng gian ngoan, chuyên bày mưu ăn đút hai mang; mã màu trắng bệch pha xanh xám và khóe miệng lệch khắc họa rõ bản chất mọt sách xảo quyệt này.",
    artworkImage: "/images/cinema/scene-infographic-tu-giac.png",
    sourceRef: "Chủ đề 01 – Hồ sơ giải mã nhân vật Đề lại",
  },
  {
    id: "hdmn-03",
    category: "huyen-duong-mat-na",
    categoryLabel: "Dự án Huyện đường: Mã màu & 4 Nhân vật",
    difficulty: "Thông hiểu",
    question:
      "Đặc điểm tạo hình 'vệt phấn trắng ngang sống mũi' trên nền mặt nâu đất là mã nhận diện vai diễn nào trong trích đoạn Huyện đường?",
    options: [
      "Vai hề tuồng Lính lệ – vừa dân dã bộc trực nói toạc sự thật, vừa hách dịch kiếm tiền trà nước",
      "Vai quan đầu huyện uy nghiêm giữ phép nước",
      "Vai trọc phú Trùm Sò keo kiệt",
      "Vai người anh hùng sử thi Tây Nguyên",
    ],
    correctIndex: 0,
    explanation:
      "Trên sân khấu Tuồng, vệt phấn trắng ngang sống mũi kết hợp nền nâu đất và nét cọ tròn khỏe tạo hiệu ứng hài hước cho Lính lệ – tay sai công đường tinh ranh.",
    artworkImage: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
    sourceRef: "Chủ đề 01 – Hồ sơ giải mã nhân vật Lính lệ",
  },
  {
    id: "hdmn-04",
    category: "huyen-duong-mat-na",
    categoryLabel: "Dự án Huyện đường: Mã màu & 4 Nhân vật",
    difficulty: "Vận dụng STEAM",
    question:
      "Khi phác thảo mặt nạ cho Trùm Sò, vì sao nhóm thiết kế STEAM chọn nền vàng sậm pha nâu bủn xỉn với trán nhiều nếp nhăn và lông mày rủ xoắn?",
    options: [
      "Để thể hiện vẻ đẹp oai phong lẫm liệt của bậc anh hùng",
      "Vì nền vàng sậm pha nâu bủn xỉn và nét nhăn co rúm khắc họa trực quan tâm lý giàu có nhưng hà tiện, xót của",
      "Vì chỉ có hai màu vàng và nâu mới vẽ được trên giấy mỹ thuật",
      "Vì mọi nhân vật tuồng đều bắt buộc phải tô màu vàng giống nhau",
    ],
    correctIndex: 1,
    explanation:
      "Trong nguyên tắc STEAM Ngữ văn, mọi đường nét mặt nạ đều xuất phát từ tâm lý nhân vật: gương mặt Trùm Sò co rúm nhiều nếp nhăn và sắc vàng bủn xỉn lột tả thói bủn xỉn đến cực độ.",
    artworkImage: "/images/cinema/scene-03-sac-tuong.png",
    sourceRef: "Chủ đề 01 – Hồ sơ giải mã nhân vật Trùm Sò",
  },
  {
    id: "hdmn-05",
    category: "huyen-duong-mat-na",
    categoryLabel: "Dự án Huyện đường: Mã màu & 4 Nhân vật",
    difficulty: "Thông hiểu",
    question:
      "Mục đích chính của việc thiết kế 'mặt nạ ước lệ' thay vì vẽ mặt nạ tả thực giống ảnh chụp trong dự án Huyện đường là gì?",
    options: [
      "Giúp khán giả trong lớp học nhận diện ngay tính cách nhân vật từ xa qua hệ thống mã màu và nét cường điệu tương phản",
      "Để tiết kiệm thời gian bằng cách bỏ qua công đoạn tìm hiểu tính cách nhân vật",
      "Vì sân khấu tuồng truyền thống cấm sử dụng màu sắc tươi sáng",
      "Để che giấu hoàn toàn biểu cảm của nhân vật trước người xem",
    ],
    correctIndex: 0,
    explanation:
      "Tính ước lệ và cường điệu là linh hồn của hóa trang Tuồng: bằng độ tương phản sắc nét và các mảng màu biểu tượng, thông điệp tính cách truyền tải rõ ràng ngay từ ánh nhìn đầu tiên.",
    artworkImage: "/images/cinema/scene-03-sac-tuong.png",
    sourceRef: "Phòng 01: Sắc Tuồng Huyện đường",
  },

  // ==========================================
  // 3. SỬ THI ĐĂM SĂN & VĂN HÓA Ê-ĐÊ (5 câu)
  // ==========================================
  {
    id: "ds-01",
    category: "su-thi-dam-san",
    categoryLabel: "Sử thi Đăm Săn & Văn hóa Ê-đê",
    difficulty: "Nhận biết",
    question:
      "Sử thi Đăm Săn là kiệt tác văn học dân gian của dân tộc nào ở Tây Nguyên và được diễn xướng theo hình thức truyền thống nào?",
    options: [
      "Dân tộc Ê-đê, diễn xướng kể khan (Klei Khan) bên bếp lửa nhà dài",
      "Dân tộc Kinh, diễn xướng tuồng đồ nơi công đường",
      "Dân tộc Thái, diễn xướng múa xòe vòng tròn",
      "Dân tộc Tày, diễn xướng hát Then đàn Tính",
    ],
    correctIndex: 0,
    explanation:
      "Sử thi Đăm Săn gắn liền với đời sống tinh thần của cộng đồng Ê-đê Tây Nguyên; nghệ nhân hát kể khan (Klei Khan) suốt nhiều đêm bên bếp lửa nhà dài và tiếng cồng chiêng.",
    artworkImage: "/images/cinema/scene-dam-san-nha-dai.png",
    sourceRef: "Phòng 03: Không gian Sử thi Đăm Săn",
  },
  {
    id: "ds-02",
    category: "su-thi-dam-san",
    categoryLabel: "Sử thi Đăm Săn & Văn hóa Ê-đê",
    difficulty: "Thông hiểu",
    question:
      "Trong văn bản 'Đăm Săn đi bắt Nữ thần Mặt Trời', vùng đất đầy thử thách mà người anh hùng phải cưỡi ngựa vượt qua trước khi tới nhà Nữ thần có tên là gì?",
    options: [
      "Rừng Sáp Đen với cỏ tranh sắc như dao và bùn lầy ngập ngụa",
      "Vùng đồng bằng châu thổ sông Hồng mùa lễ hội",
      "Cửa biển Đông với những đoàn thuyền buôn tấp nập",
      "Kinh thành cổ với lũy tre làng và sân đình gạch đỏ",
    ],
    correctIndex: 0,
    explanation:
      "Vượt rừng Sáp Đen âm u, cỏ tranh sắc như lưỡi dao là thử thách cực hạn khẳng định ý chí phi thường, không chùn bước của Đăm Săn trên hành trình chinh phục Nữ thần Mặt Trời.",
    artworkImage: "/images/cinema/scene-dam-san-mat-troi.png",
    sourceRef: "Phòng 04: Rừng Sáp Đen & Nữ thần Mặt Trời",
  },
  {
    id: "ds-03",
    category: "su-thi-dam-san",
    categoryLabel: "Sử thi Đăm Săn & Văn hóa Ê-đê",
    difficulty: "Thông hiểu",
    question:
      "Ý nghĩa biểu tượng sâu sắc nhất trong hành trình Đăm Săn quyết tâm đi bắt Nữ thần Mặt Trời làm vợ là gì?",
    options: [
      "Chỉ vì tò mò trước vẻ đẹp trang sức bằng vàng bạc",
      "Thể hiện khát vọng chinh phục tự nhiên kỳ vĩ, vươn tới nguồn sáng lý tưởng và khẳng định uy danh cộng đồng thị tộc",
      "Nhằm trốn tránh trách nhiệm làm tù trưởng tại buôn làng",
      "Tìm kiếm con đường giao thương trao đổi hàng hóa",
    ],
    correctIndex: 1,
    explanation:
      "Với tâm thức sử thi Ê-đê, Đăm Săn đi bắt Nữ thần Mặt Trời là biểu tượng cho tầm vóc lớn lao và khát vọng vươn lên sánh ngang lực lượng thiên nhiên tối cao của cộng đồng.",
    artworkImage: "/images/cinema/scene-dam-san-mat-troi.png",
    sourceRef: "Diễn đàn học tập – Nhóm câu hỏi Sử thi Đăm Săn",
  },
  {
    id: "ds-04",
    category: "su-thi-dam-san",
    categoryLabel: "Sử thi Đăm Săn & Văn hóa Ê-đê",
    difficulty: "Thông hiểu",
    question:
      "Cái chết của Đăm Săn trong rừng Sáp Đen trên đường trở về khi Mặt Trời lên mang giá trị thẩm mỹ nào của thể loại sử thi?",
    options: [
      "Thể hiện sự thất bại thảm hại và phủ nhận hoàn toàn sức mạnh con người",
      "Mang vẻ đẹp bi tráng: thể xác ngã xuống trước quy luật tự nhiên nhưng linh hồn và khát vọng anh hùng được bất tử hóa",
      "Chỉ nhằm gây tiếng cười trào phúng nhẹ nhàng cho người nghe",
      "Đánh dấu sự kết thúc hoàn toàn truyền thống kể khan của người Ê-đê",
    ],
    correctIndex: 1,
    explanation:
      "Bi kịch của Đăm Săn không hề bi lụy mà tỏa sáng chất bi tráng anh hùng: dám theo đuổi lý tưởng lớn lao đến hơi thở cuối cùng, hóa thân thành sức sống bất diệt trong ký ức buôn làng.",
    artworkImage: "/images/cinema/scene-dam-san-nha-dai.png",
    sourceRef: "Phòng 04: Rừng Sáp Đen & Nữ thần Mặt Trời",
  },
  {
    id: "ds-05",
    category: "su-thi-dam-san",
    categoryLabel: "Sử thi Đăm Săn & Văn hóa Ê-đê",
    difficulty: "Vận dụng STEAM",
    question:
      "Khi thực hiện sản phẩm Podcast thuyết minh 'Không gian văn hóa Ê-đê trong Sử thi Đăm Săn', chi tiết văn hóa bản địa nào nên được nhấn mạnh để gắn kết với mô hình trưng bày?",
    options: [
      "Tục kể khan (Klei Khan) bên bếp lửa nhà dài, tiếng cồng chiêng Hlong và ý nghĩa cầu thang – hoa văn thổ cẩm Ê-đê",
      "Cách tổ chức xử án tại nha môn huyện đường",
      "Kỹ thuật đan quạt giấy và trống chầu trong sân khấu tuồng",
      "Kiến trúc nhà hát kính hiện đại của châu Âu thế kỷ XXI",
    ],
    correctIndex: 0,
    explanation:
      "Podcast của Chủ đề 02 giúp người xem khi quét mã QR trên Hộp kể chuyện vừa quan sát ánh sáng diorama vừa cảm nhận được linh hồn sử thi qua bếp lửa nhà dài và âm vang cồng chiêng Ê-đê.",
    artworkImage: "/images/cinema/scene-podcast-klei-khan.png",
    sourceRef: "Triển lãm số – Podcast Sử thi Đăm Săn",
  },

  // ==========================================
  // 4. THIẾT KẾ STEAM: MẶT NẠ & HỘP KỂ CHUYỆN (5 câu)
  // ==========================================
  {
    id: "st-01",
    category: "steam-du-an",
    categoryLabel: "Thiết kế STEAM: Mặt nạ & Hộp kể chuyện",
    difficulty: "Nhận biết",
    question:
      "Quy trình thiết kế kỹ thuật 5 bước tại Xưởng sáng tạo STEAM Ngữ văn tuân theo trình tự chuẩn nào?",
    options: [
      "Xác định vấn đề → Nghiên cứu & Thiết kế → Chế tạo → Thử nghiệm → Đánh giá & Cải tiến",
      "Chế tạo → Thử nghiệm → Đọc hiểu văn bản → Trình chiếu → Viết báo cáo",
      "Thiết kế đồ họa → Mua sản phẩm sẵn → Đặt tên nhóm → Chụp ảnh",
      "Đọc lướt văn bản → Thi viết tự luận → Thử nghiệm ánh sáng",
    ],
    correctIndex: 0,
    explanation:
      "Cả Dự án Huyện đường và Dự án Sử thi Đăm Săn đều vận hành chuẩn qua 5 bước STEAM: Xác định vấn đề → Nghiên cứu & Thiết kế → Chế tạo → Thử nghiệm → Đánh giá & Cải tiến.",
    artworkImage: "/images/cinema/scene-09-xuong-steam.png",
    sourceRef: "Xưởng sáng tạo STEAM – Quy trình 5 bước",
  },
  {
    id: "st-02",
    category: "steam-du-an",
    categoryLabel: "Thiết kế STEAM: Mặt nạ & Hộp kể chuyện",
    difficulty: "Vận dụng STEAM",
    question:
      "Trong Hộp kể chuyện 3 lớp 'Đăm Săn đi bắt Nữ thần Mặt Trời', vai trò kỹ thuật của Lớp hậu cảnh (Layer 03) sử dụng giấy can mờ kết hợp LED vàng ấm là gì?",
    options: [
      "Che kín toàn bộ ánh sáng để hộp tối hoàn toàn",
      "Khuếch tán đều nguồn sáng LED tạo hiệu ứng hào quang bình minh sử thi mà không bị chói gắt",
      "Làm bề mặt bảng viết phấn ghi câu hỏi thảo luận",
      "Tăng trọng lượng hộp lên mức tối đa để khỏi di chuyển",
    ],
    correctIndex: 1,
    explanation:
      "Ứng dụng nguyên lý Khoa học quang học (tán xạ ánh sáng qua giấy can mờ), lớp hậu cảnh chuyển ánh sáng điểm từ LED thành vầng hào quang êm dịu tôn bật bóng cắt nhân vật phía trước.",
    artworkImage: "/images/cinema/scene-05-dam-san-steam.png",
    sourceRef: "Chủ đề 02 – Thiết kế cấu trúc Hộp kể chuyện 3 lớp",
  },
  {
    id: "st-03",
    category: "steam-du-an",
    categoryLabel: "Thiết kế STEAM: Mặt nạ & Hộp kể chuyện",
    difficulty: "Thông hiểu",
    question:
      "Trong yếu tố 'M – Mathematics (Toán học)' của Dự án 01 (Mặt nạ Huyện đường), nhóm học sinh cần tính toán điều gì trước khi cắt bìa cứng?",
    options: [
      "Đo đạc tỉ lệ nhân trắc khuôn mặt theo trục dọc sống mũi, trục ngang mắt – mày – miệng và góc lệch nét bất đối xứng có chủ ý",
      "Tính tốc độ phát âm thanh của loa Bluetooth trong hội trường",
      "Tính diện tích mặt hồ ao làng nơi biểu diễn",
      "Chỉ ước lượng ngẫu nhiên bằng mắt mà không cần thước đo",
    ],
    correctIndex: 0,
    explanation:
      "Toán học tỷ lệ và lưới tọa độ đối xứng giúp mặt nạ vừa vặn khuôn mặt người diễn, đồng thời cho phép tạo độ lệch nét tinh tế (như khóe miệng lệch của Đề lại) để nhấn mạnh tính cách.",
    artworkImage: "/images/cinema/scene-09-xuong-steam.png",
    sourceRef: "Xưởng STEAM – Yếu tố Mathematics (Toán học)",
  },
  {
    id: "st-04",
    category: "steam-du-an",
    categoryLabel: "Thiết kế STEAM: Mặt nạ & Hộp kể chuyện",
    difficulty: "Vận dụng STEAM",
    question:
      "Ở Bước 4 (Thử nghiệm) của Dự án 01 (Mặt nạ Huyện đường), bài kiểm tra thực tế nào quyết định hiệu quả sân khấu của sản phẩm?",
    options: [
      "Đeo thử khi tập luyện vi diễn trên lớp để kiểm tra độ bền khung bìa, tầm nhìn mắt, độ thoáng giọng nói và khả năng nhận diện sắc mặt từ cuối lớp",
      "Cất kín mặt nạ trong tủ không cho diễn viên đeo thử trước giờ trình bày",
      "Chỉ chụp ảnh cận cảnh ở khoảng cách 10cm trong phòng tối",
      "Xóa hết màu sắc tương phản để mặt nạ có màu giống tường lớp học",
    ],
    correctIndex: 0,
    explanation:
      "Bước 4 Thử nghiệm giúp phát hiện sớm hạn chế thực tế (ví dụ khe mắt hẹp hay viền nét quá mảnh) để điều chỉnh kích thước hốc mắt và tăng độ tương phản màu ở Bước 5 Cải tiến.",
    artworkImage: "/images/cinema/scene-10-trien-lam.png",
    sourceRef: "Xưởng STEAM – Bước 4: Thử nghiệm & Cải tiến",
  },
  {
    id: "st-05",
    category: "steam-du-an",
    categoryLabel: "Thiết kế STEAM: Mặt nạ & Hộp kể chuyện",
    difficulty: "Thông hiểu",
    question:
      "Vì sao Phiếu 01 (Giải mã Ngữ văn) và Thẻ giải mã (Decoding Card) là yêu cầu bắt buộc đi kèm mọi sản phẩm trong Xưởng sáng tạo STEAM?",
    options: [
      "Để chứng minh mọi lựa chọn gam màu, đường nét mặt nạ hay lớp cảnh sử thi đều bắt nguồn từ dẫn chứng cụ thể trong văn bản SGK Ngữ văn 10",
      "Chỉ để trang trí cho bài trưng bày trông dày dặn hơn",
      "Để thay thế hoàn toàn phần chế tạo mô hình bằng bìa cứng",
      "Vì đây là quy định dành riêng cho bài thi môn Mỹ thuật không liên quan tới Ngữ văn",
    ],
    correctIndex: 0,
    explanation:
      "Điểm đặc trưng của học liệu STEAM Ngữ văn là sợi dây nối tri thức văn bản với tạo hình kỹ thuật: học sinh phải giải trình rõ chi tiết màu sắc hay bố cục bắt nguồn từ lời thoại hoặc câu văn nào.",
    artworkImage: "/images/cinema/scene-so-tay-the-giai-ma.png",
    sourceRef: "Sổ tay Xưởng STEAM & Hướng dẫn Nói và Nghe",
  },
];

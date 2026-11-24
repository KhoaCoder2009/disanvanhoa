export type QuizCategoryId =
  | "huyen-duong-van-ban"
  | "huyen-duong-mat-na"
  | "huyen-duong-san-khau"
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
    label: "Ngữ liệu & Nghệ thuật Trào phúng Huyện đường",
    shortLabel: "Ngữ liệu Huyện đường",
    accentColor: "crimson",
    description:
      "Bối cảnh công đường Nghêu, Sò, Ốc, Hến, lời thoại tự xưng và bút pháp châm biếm dân gian.",
    artworkImage: "/images/cinema/scene-07-huyen-duong.png",
  },
  {
    id: "huyen-duong-mat-na",
    label: "Mã màu Ước lệ & Tạo hình 4 Nhân vật",
    shortLabel: "Mặt nạ 4 Nhân vật",
    accentColor: "bronze",
    description:
      "Giải mã hóa trang ước lệ của Tri huyện, Đề lại, Lính lệ và trọc phú Trùm Sò.",
    artworkImage: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
  },
  {
    id: "huyen-duong-san-khau",
    label: "Sân khấu hóa & Thuyết minh Lớp 10.3",
    shortLabel: "Sân khấu hóa",
    accentColor: "emerald",
    description:
      "Bối cảnh hoành phi Công đường, kỹ năng Nói – Nghe thuyết minh mặt nạ và diễn xuất nhập vai.",
    artworkImage: "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg",
  },
  {
    id: "steam-du-an",
    label: "Quy trình Kỹ thuật STEAM Chế tác Mặt nạ 3D",
    shortLabel: "Quy trình STEAM",
    accentColor: "indigo",
    description:
      "Quy trình 5 bước STEAM, bản vẽ tỷ lệ cm/mm, dưỡng giấy 1:1 và kỹ thuật tạo khối 3D trên bìa carton.",
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
    categoryLabel: "Ngữ liệu & Nghệ thuật Trào phúng Huyện đường",
    difficulty: "Nhận biết",
    question:
      "Trích đoạn tuồng hài 'Huyện đường' (Ngữ văn 10) thuộc vở tuồng đồ dân gian nào, và dựng lại không gian đặc trưng nào?",
    options: [
      "Thuộc vở Nghêu, Sò, Ốc, Hến; tái hiện cảnh công đường nơi quan huyện và thuộc hạ xử kiện",
      "Thuộc vở tuồng cung đình Sơn Hậu; tái hiện cảnh triều đình đánh giặc ngoại xâm",
      "Thuộc vở kịch hiện đại Hồn Trương Ba, da hàng thịt",
      "Thuộc truyện thơ Nôm Truyện Kiều của Nguyễn Du",
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
    categoryLabel: "Ngữ liệu & Nghệ thuật Trào phúng Huyện đường",
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
    categoryLabel: "Ngữ liệu & Nghệ thuật Trào phúng Huyện đường",
    difficulty: "Thông hiểu",
    question:
      "Bộ bốn nhân vật trọng tâm tạo nên mạng lưới quan hệ mua chuộc và tiếng cười châm biếm tại Huyện đường gồm những ai?",
    options: [
      "Tri huyện, Đề lại, Lính lệ và Trùm Sò",
      "Tri huyện, thầy đồ Nho, người nông dân và người lái đò",
      "Trùm Sò, bà huyện và hai người lính gác cổng thành",
      "Quan thượng thư, thái y, tướng quân và sứ giả",
    ],
    correctIndex: 0,
    explanation:
      "Dự án Huyện đường xoay quanh tứ giác nhân vật: Tri huyện (Tổ 1), Đề lại (Tổ 2), Lính lệ (Tổ 3) và trọc phú Trùm Sò (Tổ 4).",
    artworkImage: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
    sourceRef: "Chặng 01: Mã màu và nét mặt ước lệ (Huyện đường)",
  },
  {
    id: "hdvb-04",
    category: "huyen-duong-van-ban",
    categoryLabel: "Ngữ liệu & Nghệ thuật Trào phúng Huyện đường",
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
    artworkImage: "/student-products/huyen-duong/mat-na-to-4-trum-so.jpg",
    sourceRef: "Chuyên trang Tổ 4 – Hồ sơ nhân vật Trùm Sò",
  },
  {
    id: "hdvb-05",
    category: "huyen-duong-van-ban",
    categoryLabel: "Ngữ liệu & Nghệ thuật Trào phúng Huyện đường",
    difficulty: "Thông hiểu",
    question:
      "Qua lời thoại của Đề lại: 'Vâng, hôm nay chả thấy ai kiện cáo gì cả. Còn vụ Thị Hến, Nguyễn Sò quan đã định dứt khoát như thế nào chưa?', tính cách nào của nhân vật hiện lên rõ nhất?",
    options: [
      "Sự ngay thẳng, cương trực bảo vệ dân nghèo vô điều kiện",
      "Sự khéo léo nịnh nọt cấp trên, dò ý và mớm cung để cùng quan huyện trục lợi từ vụ kiện",
      "Sự ngây thơ không hiểu biết luật lệ công đường",
      "Sự nóng nảy muốn từ chức rời khỏi nha môn",
    ],
    correctIndex: 1,
    explanation:
      "Bề ngoài câu hỏi có vẻ cung kính bẩm báo công việc, nhưng bên trong là sự tính toán, gợi ý để Tri huyện 'vắt kiệt' các bên liên quan trong vụ án Thị Hến – Trùm Sò.",
    artworkImage: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
    sourceRef: "Bài thuyết minh Mặt nạ Đề lại – Tổ 2 Lớp 10.3",
  },

  // ==========================================
  // 2. HUYỆN ĐƯỜNG: MÃ MÀU & 4 NHÂN VẬT (5 câu)
  // ==========================================
  {
    id: "hdmn-01",
    category: "huyen-duong-mat-na",
    categoryLabel: "Mã màu Ước lệ & Tạo hình 4 Nhân vật",
    difficulty: "Nhận biết",
    question:
      "Theo quy ước hóa trang Tuồng đồ, gương mặt nhân vật Tri huyện được phối màu và tạo hình đặc trưng như thế nào?",
    options: [
      "Nền mặt trắng mốc pha xám bệch, điểm vệt đỏ sẫm nơi gò má, mày xếch đuôi cụp và râu ba chòm tỉa mảnh",
      "Toàn bộ khuôn mặt sơn đỏ rực rỡ biểu trưng cho võ tướng trung liệt",
      "Mặt nâu đất với chóp mũi tròn đỏ tươi lối hề tuồng",
      "Khuôn mặt toàn vàng kim cân đối không có nếp nhăn",
    ],
    correctIndex: 0,
    explanation:
      "Sắc trắng mốc pha xám bệch điểm đỏ gò má cùng râu ba chòm tự đắc của Tri huyện mã hóa trực quan kẻ đội lốt quan trường đạo mạo nhưng tham lam và háo sắc.",
    artworkImage: "/images/cinema/scene-03-sac-tuong.png",
    sourceRef: "Hồ sơ giải mã nhân vật Tri huyện (Tổ 1)",
  },
  {
    id: "hdmn-02",
    category: "huyen-duong-mat-na",
    categoryLabel: "Mã màu Ước lệ & Tạo hình 4 Nhân vật",
    difficulty: "Thông hiểu",
    question:
      "Trong thiết kế mặt nạ Đề lại của Tổ 2 (Lớp 10.3), dải viền màu vàng đồng cũ bạc màu trên chiếc mũ tròn đen nâu mang ý nghĩa biểu tượng gì?",
    options: [
      "Biểu trưng cho ngôi vị hoàng đế tối cao trong triều đình",
      "Gợi thân phận một phụ quan hầu cận (không phải quan lớn) nhưng luôn ham danh lợi và thích địa vị",
      "Thể hiện sự ngây thơ trong sáng của tuổi học trò",
      "Chỉ dùng để che vết cắt giấy ngẫu nhiên không mang ý nghĩa",
    ],
    correctIndex: 1,
    explanation:
      "Theo bài thuyết minh của Tổ 2, chiếc mũ tròn đen nâu không hoa văn kèm viền vàng đồng bạc màu vừa đúng vị thế phụ quan dưới quyền Tri huyện, vừa ngầm chỉ lòng tham danh lợi.",
    artworkImage: "/student-products/huyen-duong/mat-na-to-2-de-lai.jpg",
    sourceRef: "Chuyên trang Tổ 2 – Bài thuyết minh Mặt nạ Đề lại",
  },
  {
    id: "hdmn-03",
    category: "huyen-duong-mat-na",
    categoryLabel: "Mã màu Ước lệ & Tạo hình 4 Nhân vật",
    difficulty: "Thông hiểu",
    question:
      "Chi tiết 'chóp mũi tròn đắp nổi sơn đỏ tươi (Ø 1,5 cm)' kết hợp viền mắt trắng trợn ngược trên mặt nạ của Tổ 3 là dấu hiệu nhận diện vai diễn nào?",
    options: [
      "Vai Lính lệ mang phong cách hề tuồng – vừa hách dịch nạt nộ dân thường, vừa láu cá vòi tiền lễ",
      "Vai quan đầu huyện uy nghiêm giữ phép nước",
      "Vai trọc phú Trùm Sò keo kiệt",
      "Vai quan ngự sử thanh liêm chốn kinh thành",
    ],
    correctIndex: 0,
    explanation:
      "Tổ 3 sử dụng đất sét tự khô đắp nổi chóp mũi tròn đỏ kiểu hề tuồng kết hợp viền mắt trắng và ria vểnh ba nhánh để khắc họa sự hách dịch, tham vặt của Lính lệ.",
    artworkImage: "/student-products/huyen-duong/mat-na-to-3-linh-le.jpg",
    sourceRef: "Chuyên trang Tổ 3 – Mặt nạ Lính lệ",
  },
  {
    id: "hdmn-04",
    category: "huyen-duong-mat-na",
    categoryLabel: "Mã màu Ước lệ & Tạo hình 4 Nhân vật",
    difficulty: "Vận dụng STEAM",
    question:
      "Khi thiết kế mặt nạ Trùm Sò, vì sao Tổ 4 chọn khuôn mặt tròn đầy nền trắng kem pha vàng nhạt nhưng lại đi kèm 5 vệt nhăn trán, mắt mở to và miệng cam đất trề xệch?",
    options: [
      "Để thể hiện vẻ đẹp oai phong lẫm liệt của bậc võ tướng",
      "Khuôn mặt tròn đầy gợi sự giàu có của địa chủ, còn sắc vàng nhợt nhạt, nét nhăn và miệng trề khắc họa nỗi hoang mang, tiếc của khi bị quan lại vòi tiền",
      "Vì chỉ có màu vàng nhạt mới vẽ được trên bìa carton",
      "Vì mọi nhân vật tuồng đều bắt buộc phải có khuôn mặt tròn giống nhau",
    ],
    correctIndex: 1,
    explanation:
      "Sự kết hợp giữa phom mặt tròn sung túc với biểu cảm nhăn nhó, miệng méo xệch tạo nên bức biếm họa đặc sắc về lão trọc phú đi kiện nhưng lại rơi vào cảnh mất tiền đút lót.",
    artworkImage: "/student-products/huyen-duong/mat-na-to-4-trum-so.jpg",
    sourceRef: "Chuyên trang Tổ 4 – Bài thuyết minh Mặt nạ Trùm Sò",
  },
  {
    id: "hdmn-05",
    category: "huyen-duong-mat-na",
    categoryLabel: "Mã màu Ước lệ & Tạo hình 4 Nhân vật",
    difficulty: "Thông hiểu",
    question:
      "Mục đích chính của việc thiết kế 'mặt nạ ước lệ' thay vì vẽ mặt nạ tả thực giống ảnh chụp trong dự án Huyện đường là gì?",
    options: [
      "Giúp khán giả nhận diện ngay bản chất tính cách nhân vật từ xa qua hệ thống mã màu và đường nét cường điệu tương phản",
      "Để tiết kiệm thời gian bằng cách bỏ qua công đoạn đọc hiểu văn bản",
      "Vì sân khấu tuồng truyền thống cấm sử dụng màu sắc tương phản",
      "Để làm cho cả bốn nhân vật trông giống hệt nhau trên sân khấu",
    ],
    correctIndex: 0,
    explanation:
      "Tính ước lệ và cách điệu là linh hồn của hóa trang Tuồng: bằng độ tương phản sắc nét và các mảng màu biểu tượng, tính cách nhân vật hiện lên tức thì ngay từ cái nhìn đầu tiên.",
    artworkImage: "/images/cinema/scene-03-sac-tuong.png",
    sourceRef: "Phòng 01: Sắc Tuồng Huyện đường",
  },

  // ==========================================
  // 3. SÂN KHẤU HÓA & THUYẾT MINH LỚP 10.3 (5 câu)
  // ==========================================
  {
    id: "hdsk-01",
    category: "huyen-duong-san-khau",
    categoryLabel: "Sân khấu hóa & Thuyết minh Lớp 10.3",
    difficulty: "Thông hiểu",
    question:
      "Việc Lớp 10.3 trang trí bảng sân khấu bằng bức hoành phi 'Công minh chính trực – Huyện đường' làm phông nền cho cảnh xử án tạo ra hiệu quả nghệ thuật gì?",
    options: [
      "Ca ngợi sự liêm khiết tuyệt đối của bộ máy quan lại trong vở diễn",
      "Tạo sự tương phản châm biếm sâu cay giữa khẩu hiệu đạo đức treo cao với hành vi ăn hối lộ, bẻ cong công lý diễn ra ngay bên dưới",
      "Chỉ mang tác dụng lấp đầy khoảng trống trên bảng lớp học",
      "Thay đổi hoàn toàn cốt truyện Huyện đường sang thể loại bi kịch",
    ],
    correctIndex: 1,
    explanation:
      "Đặt những chữ 'Công minh chính trực', 'Chí vị quốc sự ý vô tư' ngay phía sau lưng Tri huyện và Đề lại làm nổi bật thủ pháp mỉa mai ngược đặc sắc của hài kịch dân gian.",
    artworkImage: "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg",
    sourceRef: "Phòng 03: Bối cảnh Lớp học & Sân khấu hóa Lớp 10.3",
  },
  {
    id: "hdsk-02",
    category: "huyen-duong-san-khau",
    categoryLabel: "Sân khấu hóa & Thuyết minh Lớp 10.3",
    difficulty: "Thông hiểu",
    question:
      "Trong vở diễn kịch trích đoạn Huyện đường, các động tác hình thể nào của diễn viên cần phối hợp ăn khớp với mặt nạ để làm nổi bật tính ước lệ trào phúng?",
    options: [
      "Diễn viên đứng bất động đọc thoại đều đều không biểu cảm",
      "Cử chỉ vuốt râu vỗ án của Tri huyện, khom lưng rỉ tai của Đề lại, quát tháo xòe tay của Lính lệ và dáng ôm túi tiền vái lạy của Trùm Sò",
      "Thực hiện các màn múa kiếm võ thuật suốt toàn bộ trích đoạn",
      "Quay lưng hoàn toàn về phía khán giả khi đối thoại",
    ],
    correctIndex: 1,
    explanation:
      "Khi đeo mặt nạ bìa cứng, ngôn ngữ hình thể ước lệ và ngữ điệu giọng nói đóng vai trò truyền tải sinh động tâm lý nhân vật tới toàn thể khán giả trong lớp.",
    artworkImage: "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg",
    sourceRef: "Triển lãm số – Video diễn kịch Lớp 10.3",
  },
  {
    id: "hdsk-03",
    category: "huyen-duong-san-khau",
    categoryLabel: "Sân khấu hóa & Thuyết minh Lớp 10.3",
    difficulty: "Nhận biết",
    question:
      "Khi trình bày bài thuyết minh sản phẩm mặt nạ trước lớp (hoạt động Nói và Nghe), cấu trúc thuyết trình nào giúp bài báo cáo chặt chẽ và thuyết phục nhất?",
    options: [
      "Chỉ đọc danh sách thành viên trong tổ rồi kết thúc",
      "Giới thiệu nhân vật → Giải mã ý tưởng tạo hình & mã màu gắn với lời thoại SGK → Nêu chất liệu STEAM & thông điệp nghệ thuật",
      "Chỉ liệt kê giá tiền mua màu vẽ mà không nhắc tới văn bản Ngữ văn",
      "Kể lại toàn bộ cốt truyện từ đầu đến cuối mà không giới thiệu chiếc mặt nạ",
    ],
    correctIndex: 1,
    explanation:
      "Cả bài thuyết minh của Tổ 2, Tổ 3 và Tổ 4 đều đạt điểm cao nhờ kết nối mạch lạc từ đặc điểm nhân vật & lời thoại SGK sang ý nghĩa đường nét, màu sắc và vật liệu tái chế.",
    artworkImage: "/student-products/huyen-duong/ra-mat-to-2-de-lai.jpg",
    sourceRef: "Diễn đàn học tập – Cấu trúc bài thuyết minh Nói & Nghe",
  },
  {
    id: "hdsk-04",
    category: "huyen-duong-san-khau",
    categoryLabel: "Sân khấu hóa & Thuyết minh Lớp 10.3",
    difficulty: "Thông hiểu",
    question:
      "Khi lắng nghe tổ bạn thuyết minh mặt nạ trên bục giảng, người nghe nên ghi chép và đặt câu hỏi phản biện theo nguyên tắc nào?",
    options: [
      "Ghi nhận điểm sáng tạo nổi bật, đối chiếu độ sát hợp với văn bản Huyện đường và đề xuất hướng cải tiến cụ thể với thái độ xây dựng",
      "Bắt lỗi những chi tiết nhỏ không liên quan tới nội dung bài học",
      "Không cần quan sát sản phẩm mặt nạ mà chỉ nghe lướt qua",
      "Yêu cầu tổ bạn làm lại mặt nạ theo nhân vật của tác phẩm khác",
    ],
    correctIndex: 0,
    explanation:
      "Phản biện tích cực gắn liền với dẫn chứng SGK và sản phẩm thực tế giúp các Tổ hiểu sâu hơn giá trị văn học cũng như hoàn thiện kỹ thuật chế tác trước giờ diễn kịch.",
    artworkImage: "/student-products/huyen-duong/ra-mat-to-3-linh-le.jpg",
    sourceRef: "Diễn đàn học tập – Quy tắc Lắng nghe & Phản biện",
  },
  {
    id: "hdsk-05",
    category: "huyen-duong-san-khau",
    categoryLabel: "Sân khấu hóa & Thuyết minh Lớp 10.3",
    difficulty: "Vận dụng STEAM",
    question:
      "Sự phối hợp của 6 nhóm nhiệm vụ trong mỗi Tổ (Nội dung, Bản vẽ, Chế tác, Thuyết trình, Hình ảnh/Video, Diễn kịch) thể hiện năng lực cốt lõi nào của học tập dự án?",
    options: [
      "Làm việc độc lập rời rạc không cần trao đổi giữa các bộ phận",
      "Hợp tác liên ngành: thống nhất từ khâu phân tích ngữ văn, thiết kế kỹ thuật, tạo hình mỹ thuật đến truyền thông số và biểu diễn",
      "Dồn toàn bộ công việc cho một cá nhân duy nhất thực hiện",
      "Bỏ qua khâu phân tích văn bản để chuyển thẳng sang quay video",
    ],
    correctIndex: 1,
    explanation:
      "Bảng phân công của Lớp 10.3 phát huy thế mạnh riêng của từng thành viên nhưng gắn kết chặt chẽ thành một dây chuyền sáng tạo thống nhất.",
    artworkImage: "/student-products/huyen-duong/ra-mat-to-4-trum-so.jpg",
    sourceRef: "Hồ sơ Phân công Dự án Lớp 10.3 (.docx)",
  },

  // ==========================================
  // 4. QUY TRÌNH KỸ THUẬT STEAM CHẾ TÁC MẶT NẠ 3D (5 câu)
  // ==========================================
  {
    id: "st-01",
    category: "steam-du-an",
    categoryLabel: "Quy trình Kỹ thuật STEAM Chế tác Mặt nạ 3D",
    difficulty: "Nhận biết",
    question:
      "Quy trình thiết kế kỹ thuật 5 bước tại Xưởng sáng tạo STEAM Ngữ văn tuân theo trình tự chuẩn nào?",
    options: [
      "Xác định vấn đề → Nghiên cứu & Thiết kế → Chế tạo → Thử nghiệm → Đánh giá & Cải tiến",
      "Chế tạo → Thử nghiệm → Đọc hiểu văn bản → Trình chiếu → Viết báo cáo",
      "Thiết kế đồ họa → Mua sản phẩm sẵn → Đặt tên nhóm → Chụp ảnh",
      "Đọc lướt văn bản → Thi viết tự luận → Nộp bài",
    ],
    correctIndex: 0,
    explanation:
      "Dự án Mặt nạ Huyện đường vận hành chuẩn qua 5 bước STEAM: Xác định vấn đề → Nghiên cứu & Thiết kế → Chế tạo → Thử nghiệm → Đánh giá & Cải tiến.",
    artworkImage: "/images/cinema/scene-09-xuong-steam.png",
    sourceRef: "Xưởng sáng tạo STEAM – Quy trình 5 bước",
  },
  {
    id: "st-02",
    category: "steam-du-an",
    categoryLabel: "Quy trình Kỹ thuật STEAM Chế tác Mặt nạ 3D",
    difficulty: "Vận dụng STEAM",
    question:
      "Giải pháp kỹ thuật (E – Engineering) nào được Tổ 2 sử dụng để biến tấm bìa carton phẳng thành chiếc mặt nạ Đề lại có khối vòm 3D ôm sát khuôn mặt?",
    options: [
      "Ngâm tấm bìa carton vào nước sôi cho mềm nhũn",
      "Xẻ các rãnh tai gấp xung quanh viền mép kết hợp tạo đường gấp sống mũi dọc theo trục đối xứng giữa mặt nạ",
      "Dán chồng 20 lớp giấy mỏng mà không cắt gọt",
      "Giữ nguyên tấm bìa hình vuông phẳng lì không uốn cong",
    ],
    correctIndex: 1,
    explanation:
      "Nhờ xẻ các tai bìa quanh chu vi và gấp nếp trục sống mũi, tấm carton sóng phẳng được định hình thành kết cấu vỏ cong 3 chiều vừa nhẹ vừa cứng vững.",
    artworkImage: "/student-products/huyen-duong/phac-thao-to-2-de-lai.jpg",
    sourceRef: "Chuyên trang Tổ 2 – Kỹ thuật kết cấu 3D STEAM",
  },
  {
    id: "st-03",
    category: "steam-du-an",
    categoryLabel: "Quy trình Kỹ thuật STEAM Chế tác Mặt nạ 3D",
    difficulty: "Thông hiểu",
    question:
      "Trong yếu tố 'M – Mathematics (Toán học)' của bản vẽ mặt nạ (như bản vẽ 18 × 24 cm của Tổ 3 và bản vẽ thông số mm/cm của Tổ 4), phép đo nào quan trọng nhất để người diễn nhìn rõ khi đeo?",
    options: [
      "Đo chính xác trục đối xứng dọc, khoảng cách tâm hai mắt (cách nhau ~2 cm ở sống mũi) và kích thước khoét hốc mắt phù hợp nhân trắc học",
      "Tính diện tích toàn bộ sàn phòng học",
      "Tính chu vi chiếc bàn giáo viên trên bục giảng",
      "Ước lượng vị trí khoét mắt ngẫu nhiên sau khi đã tô màu xong",
    ],
    correctIndex: 0,
    explanation:
      "Đo đạc chuẩn khoảng cách hai hốc mắt, chiều cao mũ và vị trí lỗ thở/miệng ngay trên bản vẽ và dưỡng giấy 1:1 đảm bảo mặt nạ khớp với khuôn mặt diễn viên.",
    artworkImage: "/student-products/huyen-duong/phac-thao-to-3-linh-le.jpg",
    sourceRef: "Xưởng STEAM – Yếu tố Mathematics (Toán học)",
  },
  {
    id: "st-04",
    category: "steam-du-an",
    categoryLabel: "Quy trình Kỹ thuật STEAM Chế tác Mặt nạ 3D",
    difficulty: "Vận dụng STEAM",
    question:
      "Ở Bước 4 (Thử nghiệm) của Dự án Mặt nạ Huyện đường, bài kiểm tra thực tế nào quyết định hiệu quả sân khấu của sản phẩm?",
    options: [
      "Kiểm tra độ bền khung bìa – dây đeo, tầm nhìn hai mắt, độ thoáng khi phát âm lời thoại và khả năng nhận diện sắc mặt từ cuối lớp",
      "Cất kín mặt nạ trong tủ không cho diễn viên ướm thử trước giờ diễn",
      "Chỉ chụp ảnh cận cảnh ở khoảng cách 10 cm trong bóng tối",
      "Phủ màu xám mờ lên toàn bộ đường nét để giảm độ tương phản",
    ],
    correctIndex: 0,
    explanation:
      "Bước 4 Thử nghiệm giúp phát hiện sớm các điểm cần tinh chỉnh (như mở rộng khe nhìn, gia cố dây thun hoặc nhấn đậm viền mắt trắng/đỏ sẫm) ở Bước 5 Cải tiến.",
    artworkImage: "/images/cinema/scene-10-trien-lam.png",
    sourceRef: "Xưởng STEAM – Bước 4: Thử nghiệm & Cải tiến",
  },
  {
    id: "st-05",
    category: "steam-du-an",
    categoryLabel: "Quy trình Kỹ thuật STEAM Chế tác Mặt nạ 3D",
    difficulty: "Thông hiểu",
    question:
      "Vì sao việc ưu tiên sử dụng bìa carton tái chế kết hợp màu acrylic/màu nước và bản thuyết minh giải mã lại thể hiện đúng tinh thần giáo dục STEAM hiện đại?",
    options: [
      "Vừa gắn kết chặt chẽ tư duy văn học – mỹ thuật – kỹ thuật đo lường, vừa rèn luyện ý thức vật liệu xanh bền vững, an toàn và tiết kiệm",
      "Chỉ nhằm giảm khối lượng bài tập đọc hiểu văn bản trong SGK",
      "Để thay thế hoàn toàn việc học Ngữ văn bằng giờ thủ công cắt dán",
      "Vì màu acrylic chỉ bám được trên bìa carton cũ",
    ],
    correctIndex: 0,
    explanation:
      "Mỗi chiếc mặt nạ từ bìa carton tái chế của Lớp 10.3 là sự giao thoa trọn vẹn giữa tri thức văn chương dân gian, kỹ thuật tạo hình 3D và trách nhiệm môi trường.",
    artworkImage: "/images/cinema/scene-so-tay-the-giai-ma.png",
    sourceRef: "Xưởng STEAM – Nguyên tắc Vật liệu xanh & Bền vững",
  },
];

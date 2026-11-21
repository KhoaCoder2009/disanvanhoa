export type QuizCategoryId =
  | "hon-cheo"
  | "sac-tuong"
  | "hon-nuoc"
  | "dam-san"
  | "steam";

export type QuizDifficulty =
  | "Nhận biết"
  | "Thông hiểu"
  | "Vận dụng STEAM";

export interface QuizCategoryMeta {
  id: QuizCategoryId;
  label: string;
  shortLabel: string;
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
    id: "hon-cheo",
    label: "Hồn Chèo & Xúy Vân giả dại",
    shortLabel: "Hồn Chèo",
    description:
      "Không gian chiếu chèo sân đình, tiếng đế, làn điệu dân ca và bi kịch nội tâm của Xúy Vân.",
    artworkImage: "/images/cinema/scene-02-hon-cheo.png",
  },
  {
    id: "sac-tuong",
    label: "Sắc Tuồng & Huyện đường",
    shortLabel: "Sắc Tuồng",
    description:
      "Nghệ thuật hóa trang ước lệ và giải mã 4 nhân vật: Tri huyện, Đề lại, Lính lệ, Trùm Sò.",
    artworkImage: "/images/cinema/scene-03-sac-tuong.png",
  },
  {
    id: "hon-nuoc",
    label: "Hồn Nước & Múa rối nước",
    shortLabel: "Múa rối nước",
    description:
      "Kiến trúc Thủy đình, gỗ sung sơn ta, Chú Tễu và nguyên lý cơ học điều khiển dưới nước.",
    artworkImage: "/images/cinema/scene-04-hon-nuoc.png",
  },
  {
    id: "dam-san",
    label: "Sử thi Đăm Săn",
    shortLabel: "Sử thi Đăm Săn",
    description:
      "Không gian sử thi Ê-đê, diễn xướng Klei Khan và sa bàn hộp kể chuyện 3 lớp ánh sáng.",
    artworkImage: "/images/cinema/scene-05-dam-san-steam.png",
  },
  {
    id: "steam",
    label: "Xưởng Sáng tạo STEAM",
    shortLabel: "Xưởng STEAM",
    description:
      "Quy trình thiết kế kỹ thuật 5 bước, liên môn S-T-E-A-M và thẻ giải mã học thuật.",
    artworkImage: "/images/cinema/scene-09-xuong-steam.png",
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // 1. HỒN CHÈO (4 câu)
  // ==========================================
  {
    id: "cheo-01",
    category: "hon-cheo",
    categoryLabel: "Hồn Chèo & Xúy Vân giả dại",
    difficulty: "Nhận biết",
    question:
      "Trích đoạn kinh điển 'Xúy Vân giả dại' (Ngữ văn 10 – Bài 5) thuộc vở chèo cổ nào và gắn liền với không gian biểu diễn truyền thống nào?",
    options: [
      "Vở chèo Kim Nham, biểu diễn trên chiếu chèo ở sân đình làng quê Bắc Bộ",
      "Vở tuồng Nghêu, Sò, Ốc, Hến, biểu diễn trong cung đình Huế",
      "Vở chèo Quan Âm Thị Kính, biểu diễn tại nhà hát hiện đại có phông màn khép kín",
      "Vở rối nước cổ truyền, biểu diễn trên sân khấu Thủy đình giữa mặt hồ",
    ],
    correctIndex: 0,
    explanation:
      "'Xúy Vân giả dại' là trích đoạn nổi tiếng của vở chèo cổ 'Kim Nham'. Nghệ thuật Chèo gắn bó mật thiết với không gian chiếu chèo trải giữa sân đình đồng bằng Bắc Bộ trong các dịp lễ hội.",
    artworkImage: "/images/cinema/scene-02-hon-cheo.png",
    sourceRef: "Bảo tàng số – Phòng 01: Hồn Chèo (SGK Ngữ văn 10, Bài 5)",
  },
  {
    id: "cheo-02",
    category: "hon-cheo",
    categoryLabel: "Hồn Chèo & Xúy Vân giả dại",
    difficulty: "Thông hiểu",
    question:
      "Trong sân khấu chiếu chèo truyền thống, 'tiếng đế' đóng vai trò gì đối với nhân vật và khán giả?",
    options: [
      "Chỉ là tiếng gõ giữ nhịp cho nhạc công thổi sáo lúc mở màn",
      "Tạo sự giao lưu hai chiều, gợi mở – dẫn dắt tâm lý và khơi gợi đồng cảm với số phận nhân vật",
      "Là lời tuyên án của quan lại ở cuối mỗi vở chèo",
      "Là nhạc nền thay thế hoàn toàn lời hát của diễn viên trên chiếu chèo",
    ],
    correctIndex: 1,
    explanation:
      "Khác với sân khấu đóng kín, chiếu chèo mở ra sự tương tác trực tiếp: 'tiếng đế' từ hậu trường hoặc người xem cất lên đúng lúc giúp dẫn dắt mạch tâm lý, bộc lộ mâu thuẫn nội tâm và tạo sự đồng cảm sâu sắc với Xúy Vân.",
    artworkImage: "/images/cinema/scene-02-hon-cheo.png",
    sourceRef: "Bảo tàng số – Đặc trưng nghệ thuật Chèo truyền thống",
  },
  {
    id: "cheo-03",
    category: "hon-cheo",
    categoryLabel: "Hồn Chèo & Xúy Vân giả dại",
    difficulty: "Thông hiểu",
    question:
      "Động tác múa quạt, xe tơ của Xúy Vân trong cảnh giả dại được kết hợp chặt chẽ cùng những làn điệu chèo đặc trưng nào?",
    options: [
      "Hát nói, ca trù và điệu lý phương Nam",
      "Hát văn chầu và hò giã gạo",
      "Làn điệu Con gà rừng, Sa lệch, Quá giang và hát ngược",
      "Lối nói lối, hát khách và hát nam trong nghệ thuật Tuồng",
    ],
    correctIndex: 2,
    explanation:
      "Trích đoạn sử dụng ngôn ngữ nửa tỉnh nửa mê đan xen nói vần với các làn điệu chèo kinh điển như Con gà rừng, Sa lệch, Quá giang và hát ngược, hòa quyện cùng vũ đạo quạt lụa tuân thủ nghiêm ngặt nhịp trống chèo.",
    artworkImage: "/images/cinema/scene-06-xuy-van.png",
    sourceRef: "Hồ sơ Phòng 01: Hồn Chèo – Đặc điểm nghệ thuật",
  },
  {
    id: "cheo-04",
    category: "hon-cheo",
    categoryLabel: "Hồn Chèo & Xúy Vân giả dại",
    difficulty: "Thông hiểu",
    question:
      "Ẩn sau những câu hát ngược tưởng như điên đảo, vô nghĩa của Xúy Vân trong trích đoạn 'Xúy Vân giả dại' là tầng nghĩa nhân văn sâu sắc nào?",
    options: [
      "Nỗi đau bế tắc, sự cô đơn và khát vọng hạnh phúc gia đình sum vầy giữa lễ giáo phong kiến",
      "Niềm vui thắng trận của người anh hùng bộ tộc",
      "Sự châm biếm thói tham nhũng nơi chốn công đường",
      "Lời ngợi ca cảnh đẹp thiên nhiên thuần túy không gắn với số phận con người",
    ],
    correctIndex: 0,
    explanation:
      "Xúy Vân phải giả điên để thoát khỏi cuộc hôn nhân không tình yêu. Đằng sau những nghịch lý trong lời hát ngược ('Chờ cho bông lúa chín vàng...') là nỗi dằn vặt cô đơn và khát vọng chính đáng về mái ấm sum vầy của người phụ nữ xưa.",
    artworkImage: "/images/cinema/scene-06-xuy-van.png",
    sourceRef: "Gợi ý thảo luận – Phòng 01: Hồn Chèo",
  },

  // ==========================================
  // 2. SẮC TUỒNG & HUYỆN ĐƯỜNG (5 câu)
  // ==========================================
  {
    id: "tuong-01",
    category: "sac-tuong",
    categoryLabel: "Sắc Tuồng & Huyện đường",
    difficulty: "Nhận biết",
    question:
      "Trích đoạn tuồng hài 'Huyện đường' thuộc tác phẩm tuồng đồ dân gian nào, và gồm những nhân vật trọng tâm nào xuất hiện tại công đường?",
    options: [
      "Thuộc vở Nghêu, Sò, Ốc, Hến; 4 nhân vật trọng tâm gồm Tri huyện, Đề lại, Lính lệ và Trùm Sò",
      "Thuộc vở Sơn Hậu; gồm Khương Linh Tá, Đổng Kim Lân và Phàn Công",
      "Thuộc vở Kim Nham; gồm Xúy Vân, Kim Nham và Trần Phương",
      "Thuộc sử thi Đăm Săn; gồm Đăm Săn, Hơ Nhị và Nữ thần Mặt Trời",
    ],
    correctIndex: 0,
    explanation:
      "'Huyện đường' trích từ vở tuồng đồ đặc sắc 'Nghêu, Sò, Ốc, Hến', phơi bày bộ máy quan lại tham nhũng qua 4 nhân vật điển hình: Tri huyện, Đề lại, Lính lệ và trọc phú Trùm Sò.",
    artworkImage: "/images/cinema/scene-07-huyen-duong.png",
    sourceRef: "Chủ đề 01 – Ngữ văn 10 Bài 5: Huyện đường",
  },
  {
    id: "tuong-02",
    category: "sac-tuong",
    categoryLabel: "Sắc Tuồng & Huyện đường",
    difficulty: "Thông hiểu",
    question:
      "Theo hệ thống mã màu hóa trang Tuồng trong Chủ đề 01, gương mặt nhân vật Tri huyện thường mang đặc điểm tạo hình chủ đạo nào?",
    options: [
      "Sắc đỏ son rực rỡ toàn mặt biểu trưng cho bậc anh hùng trung liệt",
      "Nền trắng mốc pha xám bệch, điểm vệt đỏ sẫm ở gò má, mày xếch đuôi cụp và râu ba chòm vểnh",
      "Nền mặt vàng sậm nhiều nếp nhăn rủ xuống vì tiếc của",
      "Mặt vẽ mảng xanh xám mọt sách kèm sống mũi trắng bệch",
    ],
    correctIndex: 1,
    explanation:
      "Nền trắng mốc pha xám bệch kết hợp vệt đỏ sẫm nơi gò má của Tri huyện lột tả kẻ đội lốt quan trường đạo mạo nhưng thực chất tham tiền, háo sắc và tự đắc.",
    artworkImage: "/images/cinema/scene-03-sac-tuong.png",
    sourceRef: "Chủ đề 01 – Bảng giải mã 4 nhân vật Huyện đường (Tri huyện)",
  },
  {
    id: "tuong-03",
    category: "sac-tuong",
    categoryLabel: "Sắc Tuồng & Huyện đường",
    difficulty: "Thông hiểu",
    question:
      "Nhân vật nào trong trích đoạn 'Huyện đường' được tạo hình với nền mặt trắng bệch điểm mảng xanh xám quanh hốc mắt, khóe miệng nhếch lệch biểu trưng cho kẻ thư lại mưu mô hai mang?",
    options: [
      "Tri huyện",
      "Lính lệ",
      "Đề lại",
      "Trùm Sò",
    ],
    correctIndex: 2,
    explanation:
      "Đề lại là viên thư lại thông thuộc luật lệ giấy tờ nhưng dùng chữ nghĩa để xoay chuyển trắng đen, cấu kết với Tri huyện vắt kiệt dân lành – thể hiện qua nền trắng bệch, mảng xanh xám quanh hốc mắt và nét vẽ sắc, lệch.",
    artworkImage: "/images/cinema/scene-03-sac-tuong.png",
    sourceRef: "Chủ đề 01 – Hồ sơ nhân vật Đề lại",
  },
  {
    id: "tuong-04",
    category: "sac-tuong",
    categoryLabel: "Sắc Tuồng & Huyện đường",
    difficulty: "Thông hiểu",
    question:
      "Điểm nhận diện tạo hình đặc trưng của 'Lính lệ' (hề tuồng nơi công đường) là chi tiết nào sau đây?",
    options: [
      "Đeo mão quan cao và vuốt chòm râu ba chòm màu trắng bạc",
      "Mặt nâu đất pha vệt chàm, cọ vẽ tròn khỏe và vệt phấn trắng ngang sống mũi tạo nét hài",
      "Khuôn mặt toàn vàng kim cân đối tuyệt đối không có nét nhăn",
      "Che kín toàn bộ gương mặt bằng mạng lụa trắng",
    ],
    correctIndex: 1,
    explanation:
      "Lính lệ mang sắc mặt nâu đất kết hợp vệt phấn trắng ngang sống mũi đặc trưng của vai hề tuồng – vừa phản ánh nét dân dã bộc trực nói toạc thói tham của quan trên, vừa hách dịch kiếm chác tiền trà nước.",
    artworkImage: "/images/cinema/scene-03-sac-tuong.png",
    sourceRef: "Chủ đề 01 – Hồ sơ nhân vật Lính lệ",
  },
  {
    id: "tuong-05",
    category: "sac-tuong",
    categoryLabel: "Sắc Tuồng & Huyện đường",
    difficulty: "Vận dụng STEAM",
    question:
      "Khi thiết kế mặt nạ cho Trùm Sò bằng phương pháp tạo hình Tuồng đồ, vì sao học sinh nên chọn nền mặt vàng sậm pha nâu bủn xỉn cùng nhiều nếp nhăn rủ?",
    options: [
      "Vì nền vàng sậm – nâu và lông mày rủ xoắn thể hiện trực quan bản chất giàu có nhưng keo kiệt, co rúm lo mất của",
      "Vì màu vàng là quy ước bắt buộc dành riêng cho võ tướng ra trận",
      "Vì bìa carton không thể sơn được các màu sáng như trắng hay đỏ",
      "Vì Trùm Sò là vị quan thanh liêm nhất trong trích đoạn Huyện đường",
    ],
    correctIndex: 0,
    explanation:
      "Mã màu và đường nét hóa trang Tuồng là bản đồ tính cách trực quan: sắc vàng sậm pha nâu bủn xỉn cùng nhiều nếp nhăn co rúm phản ánh đúng tâm lý hà tiện, khúm núm nhưng khư khư giữ túi tiền của Trùm Sò.",
    artworkImage: "/images/cinema/scene-07-huyen-duong.png",
    sourceRef: "Chủ đề 01 – Hồ sơ nhân vật Trùm Sò",
  },

  // ==========================================
  // 3. HỒN NƯỚC & MÚA RỐI NƯỚC (4 câu)
  // ==========================================
  {
    id: "nuoc-01",
    category: "hon-nuoc",
    categoryLabel: "Hồn Nước & Múa rối nước",
    difficulty: "Nhận biết",
    question:
      "Trong kiến trúc Thủy đình của nghệ thuật Múa rối nước, 'bức mành tre' rủ trước buồng trò có tác dụng quan trọng nào?",
    options: [
      "Chỉ để che nắng cho khán giả ngồi xem trên bờ",
      "Ngăn cách bí mật không gian buồng trò nơi nghệ nhân đứng điều khiển với mặt nước biểu diễn bên ngoài",
      "Dùng làm phông chiếu phim điện ảnh phía sau Thủy đình",
      "Làm hàng rào ngăn nước ao không tràn vào khu vực hậu trường",
    ],
    correctIndex: 1,
    explanation:
      "Mặt ao là sân khấu mở, còn bức mành tre rủ xuống trước Thủy đình tạo ranh giới bí ẩn che buồng trò – nơi các nghệ nhân điều khiển quân rối bằng máy sào, máy dây ẩn dưới làn nước.",
    artworkImage: "/images/cinema/scene-04-hon-nuoc.png",
    sourceRef: "Bảo tàng số – Phòng 03: Hồn Nước",
  },
  {
    id: "nuoc-02",
    category: "hon-nuoc",
    categoryLabel: "Hồn Nước & Múa rối nước",
    difficulty: "Nhận biết",
    question:
      "Quân rối nước truyền thống (như nhân vật Chú Tễu) thường được tạc từ loại gỗ nào và phủ lớp gì để vừa nhẹ, nổi tốt vừa bền trong nước?",
    options: [
      "Gỗ lim nặng phủ véc-ni công nghiệp",
      "Gỗ sung nhẹ, dễ đục tạc, phủ sơn ta chống thấm nước",
      "Kim loại đồng đúc rỗng sơn tĩnh điện",
      "Đất nung tráng men gốm sứ",
    ],
    correctIndex: 1,
    explanation:
      "Nghệ nhân dân gian chọn gỗ sung vì nhẹ, nổi tự nhiên trên mặt nước và dễ chạm khắc, sau đó phủ nhiều lớp sơn ta truyền thống để chống thấm và tạo sắc màu rực rỡ bền lâu.",
    artworkImage: "/images/cinema/scene-08-co-hoc-roi.png",
    sourceRef: "Văn bản: Múa rối nước – hiện đại soi bóng tiền nhân",
  },
  {
    id: "nuoc-03",
    category: "hon-nuoc",
    categoryLabel: "Hồn Nước & Múa rối nước",
    difficulty: "Vận dụng STEAM",
    question:
      "Khi khảo sát bộ máy điều khiển múa rối nước từ góc độ Vật lí – Kỹ thuật (STEAM), những nguyên lý khoa học nào được nghệ nhân xưa vận dụng trực tiếp?",
    options: [
      "Từ trường nam châm siêu dẫn và cảm biến hồng ngoại",
      "Lực đẩy Archimedes giữ rối nổi cùng hệ thống đòn bẩy, sào tre, dây kéo, ròng rọc truyền động dưới mặt nước",
      "Động cơ đốt trong chạy bằng hơi nước áp suất cao",
      "Hiện tượng khúc xạ tia laser trong buồng tối",
    ],
    correctIndex: 1,
    explanation:
      "Múa rối nước là minh chứng sống động cho tư duy cơ học dân gian: tận dụng lực đẩy Archimedes của mặt nước kết hợp thanh sào tre, khớp xoay, dây kéo và ròng rọc đặt ngầm dưới mặt hồ.",
    artworkImage: "/images/cinema/scene-08-co-hoc-roi.png",
    sourceRef: "Phòng 03: Hồn Nước – Kết nối Vật lí & Kỹ thuật STEAM",
  },
  {
    id: "nuoc-04",
    category: "hon-nuoc",
    categoryLabel: "Hồn Nước & Múa rối nước",
    difficulty: "Thông hiểu",
    question:
      "Nhan đề văn bản thông tin 'Múa rối nước – hiện đại soi bóng tiền nhân' nhấn mạnh thông điệp cốt lõi nào?",
    options: [
      "Múa rối nước chỉ là trò chơi tiêu khiển đã lỗi thời trong xã hội hiện đại",
      "Nghệ thuật rối nước cổ truyền vẫn giữ nguyên sức sống sáng tạo và đối thoại hài hòa với đời sống đương đại",
      "Múa rối nước ngày nay phải xóa bỏ hoàn toàn Thủy đình để diễn trên sân khấu khô",
      "Chỉ có khán giả nước ngoài mới có thể tiếp cận nghệ thuật múa rối nước",
    ],
    correctIndex: 1,
    explanation:
      "Từ mái đình ao làng truyền thống, múa rối nước bước ra đời sống hiện đại với những cách tân ánh sáng, âm nhạc và ngôn ngữ tạo hình nhưng vẫn bảo tồn nguyên vẹn căn cốt văn hóa lúa nước của cha ông.",
    artworkImage: "/images/cinema/scene-04-hon-nuoc.png",
    sourceRef: "Bảo tàng số – Phòng 03: Văn bản thông tin Ngữ văn 10",
  },

  // ==========================================
  // 4. SỬ THI ĐĂM SĂN (3 câu)
  // ==========================================
  {
    id: "damsan-01",
    category: "dam-san",
    categoryLabel: "Sử thi Đăm Săn",
    difficulty: "Nhận biết",
    question:
      "Sử thi Đăm Săn thuộc di sản văn hóa dân gian của cộng đồng dân tộc nào ở Tây Nguyên và thường được nghệ nhân diễn xướng theo hình thức truyền thống gọi là gì?",
    options: [
      "Dân tộc Mường, diễn xướng Đẻ đất đẻ nước",
      "Dân tộc Ê-đê, diễn xướng kể khan (Klei Khan)",
      "Dân tộc Thái, diễn xướng hát Xòe",
      "Dân tộc Khmer, diễn xướng sân khấu Dù Kê",
    ],
    correctIndex: 1,
    explanation:
      "Sử thi Đăm Săn là kiệt tác sử thi anh hùng của đồng bào Ê-đê Tây Nguyên, được các nghệ nhân hát kể bên bếp lửa nhà dài trong hình thức diễn xướng Klei Khan.",
    artworkImage: "/images/cinema/scene-05-dam-san-steam.png",
    sourceRef: "Chủ đề 02: Đánh thức thế giới sử thi (Ngữ văn 10)",
  },
  {
    id: "damsan-02",
    category: "dam-san",
    categoryLabel: "Sử thi Đăm Săn",
    difficulty: "Thông hiểu",
    question:
      "Trong hành trình 'Đăm Săn đi bắt Nữ thần Mặt Trời', việc người anh hùng vượt qua rừng Sáp Đen hiểm trở thể hiện phẩm chất và khát vọng nào?",
    options: [
      "Sự sợ hãi trước sức mạnh thiên nhiên và quyết định quay trở về buôn làng",
      "Ý chí phi thường, lòng kiêu hãnh và khát vọng chinh phục tự nhiên, vươn tới nguồn sáng lý tưởng của cộng đồng",
      "Khát vọng buôn bán giao thương đổi lấy châu báu phương xa",
      "Mục đích tìm nơi ẩn dật xa lánh đời sống bộ tộc",
    ],
    correctIndex: 1,
    explanation:
      "Cuộc hành trình táo bạo vượt rừng Sáp Đen lên trời gặp Nữ thần Mặt Trời khắc họa tầm vóc kỳ vĩ của Đăm Săn – biểu tượng cho khát vọng khẳng định uy danh và sức mạnh tập thể của thị tộc Ê-đê.",
    artworkImage: "/images/cinema/scene-05-dam-san-steam.png",
    sourceRef: "Chủ đề 02 – Chặng 1: Khảo cứu văn bản Sử thi Đăm Săn",
  },
  {
    id: "damsan-03",
    category: "dam-san",
    categoryLabel: "Sử thi Đăm Săn",
    difficulty: "Vận dụng STEAM",
    question:
      "Khi chế tạo Hộp kể chuyện sử thi 3 lớp (Diorama Shadowbox) cho Chủ đề 02, vật liệu nào tối ưu nhất ở Lớp hậu cảnh để tán dịu ánh sáng LED vàng ấm tạo hiệu ứng Mặt Trời tỏa rạng?",
    options: [
      "Tấm gỗ dày 2cm sơn đen hoàn toàn không xuyên sáng",
      "Giấy can mờ (tracing paper) kết hợp nguồn LED vàng ấm đặt phía sau hộp",
      "Giấy bạc nhôm che kín toàn bộ mặt sau",
      "Băng dính đen quấn quanh bóng đèn LED",
    ],
    correctIndex: 1,
    explanation:
      "Theo định hướng S – T – E – A – M của Chủ đề 02, lớp hậu cảnh dùng giấy can mờ (tracing paper) giúp khuếch tán đều ánh sáng từ đèn LED vàng ấm, tránh gắt điểm sáng và tạo chiều sâu sử thi khi phối với 2 lớp cắt trổ phía trước.",
    artworkImage: "/images/cinema/scene-05-dam-san-steam.png",
    sourceRef: "Chủ đề 02 – Thiết kế cấu trúc Hộp kể chuyện 3 lớp",
  },

  // ==========================================
  // 5. XƯỞNG SÁNG TẠO STEAM (4 câu)
  // ==========================================
  {
    id: "steam-01",
    category: "steam",
    categoryLabel: "Xưởng Sáng tạo STEAM",
    difficulty: "Nhận biết",
    question:
      "Quy trình thiết kế kỹ thuật 5 bước trong Xưởng sáng tạo STEAM Ngữ văn được sắp xếp theo trình tự chuẩn nào sau đây?",
    options: [
      "Chế tạo → Thử nghiệm → Xác định vấn đề → Đánh giá → Nghiên cứu & Thiết kế",
      "Xác định vấn đề → Nghiên cứu & Thiết kế → Chế tạo → Thử nghiệm → Đánh giá & Cải tiến",
      "Thử nghiệm → Cải tiến → Thiết kế → Chế tạo → Trình chiếu",
      "Đọc văn bản → Chép lại nội dung → Thi viết tự luận → Chấm điểm",
    ],
    correctIndex: 1,
    explanation:
      "Quy trình 5 bước của Xưởng sáng tạo STEAM gồm: Bước 1 Xác định vấn đề → Bước 2 Nghiên cứu & Thiết kế → Bước 3 Chế tạo → Bước 4 Thử nghiệm → Bước 5 Đánh giá & Cải tiến.",
    artworkImage: "/images/cinema/scene-09-xuong-steam.png",
    sourceRef: "Khu vực 3: Xưởng sáng tạo STEAM – Quy trình 5 bước",
  },
  {
    id: "steam-02",
    category: "steam",
    categoryLabel: "Xưởng Sáng tạo STEAM",
    difficulty: "Thông hiểu",
    question:
      "Trong mô hình S-T-E-A-M của dự án thiết kế mặt nạ Tuồng và hộp sử thi, yếu tố 'E – Engineering (Kỹ thuật)' tập trung trực tiếp vào nhiệm vụ nào?",
    options: [
      "Tìm hiểu hoàn cảnh sáng tác và ngôn ngữ thơ ca của tác phẩm",
      "Tính toán tỉ lệ đối xứng của gương mặt trên trục tọa độ",
      "Thiết kế kết cấu chịu lực, bồi bìa cứng 3D nhiều lớp, rãnh trượt cơ học và khớp nối bền vững cho mô hình",
      "Ghi âm bài thuyết minh Podcast sau khi đã hoàn thành triển lãm",
    ],
    correctIndex: 2,
    explanation:
      "Nếu Mathematics lo tỉ lệ – kích thước và Science nghiên cứu tính chất vật liệu – ánh sáng, thì Engineering (Kỹ thuật) giải quyết kết cấu chịu lực, kỹ thuật lắp ghép mộng giấy, rãnh trượt và tay cầm chắc chắn khi biểu diễn.",
    artworkImage: "/images/cinema/scene-09-xuong-steam.png",
    sourceRef: "Xưởng STEAM – Phân tích 5 yếu tố S-T-E-A-M",
  },
  {
    id: "steam-03",
    category: "steam",
    categoryLabel: "Xưởng Sáng tạo STEAM",
    difficulty: "Thông hiểu",
    question:
      "Theo quy tắc Nhật ký dự án tại Xưởng sáng tạo STEAM, yêu cầu học thuật quan trọng nhất cho mọi chi tiết tạo hình trên sản phẩm của học sinh là gì?",
    options: [
      "Phải trang trí càng nhiều màu sắc hiện đại rực rỡ càng tốt dù không có trong văn bản",
      "Mọi lựa chọn màu sắc, đường nét và cấu trúc đều phải giải trình được bằng dẫn chứng cụ thể từ văn bản SGK Ngữ văn 10",
      "Phải mua sẵn mô hình nhựa ngoài thị trường rồi dán tên tác phẩm lên trên",
      "Chỉ cần đẹp về mặt thẩm mỹ, không cần viết thẻ giải mã hay thuyết minh",
    ],
    correctIndex: 1,
    explanation:
      "Giá trị cốt lõi của Ngữ văn – STEAM nằm ở Phiếu giải mã học thuật (Decoding Card): học sinh phải liên kết chặt chẽ từng đường nét, gam màu hay lớp cảnh với dẫn chứng lời thoại, hành động trong văn bản gốc.",
    artworkImage: "/images/cinema/scene-09-xuong-steam.png",
    sourceRef: "Sổ tay Xưởng STEAM – Nhật ký dự án 4 biểu mẫu",
  },
  {
    id: "steam-04",
    category: "steam",
    categoryLabel: "Xưởng Sáng tạo STEAM",
    difficulty: "Vận dụng STEAM",
    question:
      "Ở Bước 4 (Thử nghiệm) đối với bộ mặt nạ nhân vật Huyện đường, tiêu chí kiểm chứng thực tế nào giúp sản phẩm phát huy hiệu quả cao nhất khi vi diễn trên lớp?",
    options: [
      "Kiểm tra độ bền khung bìa, tầm nhìn của diễn viên khi đeo và độ rõ tương phản của sắc mặt từ khoảng cách khán giả cuối lớp",
      "Chỉ đặt mặt nạ trong tủ kính và tuyệt đối không cho ai chạm vào",
      "Thử nghiệm ngâm mặt nạ bìa carton trong nước sôi để đo độ co giãn",
      "Cắt bỏ hoàn toàn chi tiết chân mày và râu để mặt nạ nhẹ hơn",
    ],
    correctIndex: 0,
    explanation:
      "Trong Bước 4 – Thử nghiệm, sản phẩm được đưa vào tập luyện vi diễn ngay tại lớp học để đo độ chắc chắn khi chuyển động, sự thông thoáng – tầm nhìn của người diễn và khả năng nhận diện biểu cảm từ xa, từ đó cải tiến ở Bước 5.",
    artworkImage: "/images/cinema/scene-10-trien-lam.png",
    sourceRef: "Xưởng STEAM – Bước 4: Thử nghiệm thực tế",
  },
];

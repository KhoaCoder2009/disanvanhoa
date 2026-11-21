import { LearningTopic } from "@/types/heritage";

export const LEARNING_TOPICS_META = {
  vietnameseName: "CHỦ ĐỀ HỌC TẬP",
  englishName: "LEARNING JOURNEYS",
  title: "HÀNH TRÌNH KHÁM PHÁ TRI THỨC",
  description:
    "Từ những văn bản trong sách giáo khoa, học sinh bước vào các hành trình khám phá, nghiên cứu và sáng tạo.",
};

export const LEARNING_TOPICS: LearningTopic[] = [
  {
    id: "chu-de-01-huyen-duong",
    topicNumber: "CHỦ ĐỀ 01",
    title: "MÃ MÀU VÀ NÉT MẶT ƯỚC LỆ",
    status: "Đang triển khai",
    summary:
      "Thiết kế mặt nạ và diễn xướng ước lệ qua trích đoạn tuồng hài Huyện đường.",
    subjectInfo: "Ngữ văn 10",
    lessonInfo: "Bài 5: Tích trò sân khấu dân gian",
    coreContent:
      "Đọc hiểu kịch bản tuồng đồ Huyện đường, giải mã tính cách nhân vật qua ngôn từ trào phúng và chuyển hóa thành ngôn ngữ tạo hình hóa trang sân khấu tuồng.",
    activities: [
      "Giải mã nhân vật qua lời thoại, cử chỉ và mâu thuẫn tại công đường.",
      "Thiết kế chân dung mô phỏng hóa trang tuồng theo nguyên tắc mã màu và đường nét ước lệ.",
      "Chế tạo bộ chân dung nhân vật bằng bìa cứng và biên soạn thẻ giải mã học thuật.",
      "Tổ chức vi diễn (diễn xướng trích đoạn ngắn) kết hợp sản phẩm tạo hình.",
    ],
    expectedProducts:
      "Bộ chân dung nhân vật bằng bìa cứng, thẻ giải mã và video trình diễn.",
    buttonLabel: "KHÁM PHÁ CHỦ ĐỀ",
    artSubject: "tuong-huyen-duong",
    expectedAssetFile: "/images/topics/chu-de-01-huyen-duong.jpg",
    characters: [
      {
        id: "tri-huyen",
        name: "Tri huyện",
        roleTitle: "Quan đầu huyện cầm cân nảy mực",
        faceColorMeaning:
          "Nền mặt trắng mốc pha sắc xám bệch, điểm vệt đỏ sẫm nơi gò má – biểu trưng cho kẻ đội lốt quan trường đạo mạo nhưng thực chất tham của đút, xử kiện theo đồng tiền và sắc đẹp.",
        paletteHex: ["#E8DEC8", "#7A2925", "#2D211B", "#A77B3D"],
        strokeFeatures:
          "Chân mày xếch cong nhưng đuôi cụp, khóe mắt nheo toan tính, râu ba chòm tỉa mảnh vểnh lên mỗi khi tự đắc.",
        personalityDecoding:
          "Vừa bước ra công đường đã tự khoe uy quyền nhưng thẳng thừng tuyên bố phương châm xử kiện vì lợi lộc, háo sắc, bất chấp công lý.",
        propsAndGesture:
          "Động tác vuốt râu, vỗ án, ánh mắt liếc ngang dọc dò xét túi tiền của nguyên cáo và bị cáo.",
      },
      {
        id: "de-lai",
        name: "Đề lại",
        roleTitle: "Viên thư lại thân cận nơi huyện đường",
        faceColorMeaning:
          "Nền trắng bệch điểm mảng xanh xám quanh hốc mắt và sống mũi trắng – mã màu của hạng mọt sách gian ngoan, chuyên bày mưu tính kế ăn của đút hai mang.",
        paletteHex: ["#DCD6C8", "#435647", "#2D211B", "#D6B77E"],
        strokeFeatures:
          "Nét vẽ mảnh, sắc, khóe miệng nhếch lệch sang một bên, ánh mắt sắc lẻm luôn nhìn nghiêng.",
        personalityDecoding:
          "Thông thuộc luật lệ giấy tờ nhưng dùng chữ nghĩa để xoay chuyển trắng đen, cấu kết chặt chẽ với Tri huyện để vắt kiệt dân lành và kẻ kiện cáo.",
        propsAndGesture:
          "Tay cầm sổ sách hoặc bút lông, dáng đứng hơi khom về phía quan huyện để rỉ tai hiến kế.",
      },
      {
        id: "linh-le",
        name: "Lính lệ",
        roleTitle: "Tay sai hầu hạ và canh gác công đường",
        faceColorMeaning:
          "Sắc mặt nâu đất pha vệt chàm hoặc vệt trắng ở chóp mũi (hề tuồng) – vừa mang nét dân dã bộc trực, vừa hách dịch bắt nạt kẻ dưới và kiếm chác tiền trà nước.",
        paletteHex: ["#B88B5A", "#7A2925", "#F2E8D5", "#2D211B"],
        strokeFeatures:
          "Nét cọ tròn, khỏe, đôi mắt mở to linh hoạt, vệt phấn trắng ngang sống mũi tạo hiệu ứng hài hước.",
        personalityDecoding:
          "Hiểu rõ thói tham nhũng của quan trên, vừa phục tùng vừa nói toạc sự thật nơi cửa quan bằng giọng điệu vừa nịnh vừa giễu.",
        propsAndGesture:
          "Cầm roi hoặc gậy lệ, bước đi dậm chân dọa nạt nhưng lập tức tươi cười khi thấy tiền lót tay.",
      },
      {
        id: "trum-so",
        name: "Trùm Sò",
        roleTitle: "Trọc phú keo kiệt bị mất trộm kiện quan",
        faceColorMeaning:
          "Nền mặt vàng sậm pha sắc nâu bủn xỉn, trán nhăn nhiều nếp – biểu hiện của kẻ giàu có nhưng keo kiệt, khúm núm trước cửa quan song vẫn cố giữ chặt hầu bao.",
        paletteHex: ["#C99E52", "#50372A", "#7A2925", "#F2E8D5"],
        strokeFeatures:
          "Lông mày rủ xoắn, nhiều nếp nhăn ở trán và khóe miệng, gương mặt co rúm vì tiếc của.",
        personalityDecoding:
          "Nạn nhân của vụ trộm nhưng bản tính hà tiện, tính toán từng đồng lễ vật khiến cảnh đối đáp tại công đường càng thêm bi hài.",
        propsAndGesture:
          "Dáng đi lật đật, hai tay ôm khư khư túi tiền hoặc vạt áo, liên tục vái lạy và than vãn.",
      },
    ],
    projectSteps: [
      {
        phase: "Chặng 1: Giải mã văn bản",
        task: "Đọc phân vai trích đoạn Huyện đường, lập bảng đối chiếu lời thoại – hành động – tính cách của 4 nhân vật: Tri huyện, Đề lại, Lính lệ, Trùm Sò.",
        output: "Phiếu hồ sơ giải mã 4 nhân vật.",
      },
      {
        phase: "Chặng 2: Thiết kế mã màu & nét vẽ",
        task: "Tra cứu quy ước màu sắc mặt nạ tuồng truyền thống, phác thảo bản thiết kế tỉ lệ 1:1 kèm chú thích ý nghĩa từng vùng màu.",
        output: "Bản vẽ thiết kế và Thẻ giải mã (Decoding Card).",
      },
      {
        phase: "Chặng 3: Chế tạo tại Xưởng STEAM",
        task: "Cắt ghép bìa cứng nhiều lớp tạo độ nổi khối (mày, râu, mão), phối màu acrylic/màu bột và xử lý kết cấu tay cầm hoặc dây đeo.",
        output: "Bộ chân dung 4 nhân vật bằng bìa cứng hoàn chỉnh.",
      },
      {
        phase: "Chặng 4: Vi diễn & Thuyết minh",
        task: "Biểu diễn trích đoạn ngắn 3–5 phút sử dụng bộ chân dung đã chế tạo, quay video tư liệu và thuyết trình trước lớp.",
        output: "Video trình diễn và hồ sơ trưng bày tại Triển lãm số.",
      },
    ],
  },
  {
    id: "chu-de-02-dam-san",
    topicNumber: "CHỦ ĐỀ 02",
    title: "ĐÁNH THỨC THẾ GIỚI SỬ THI",
    status: "Dự kiến phát triển",
    summary:
      "Thiết kế hộp kể chuyện sử thi qua văn bản Đăm Săn đi bắt Nữ thần Mặt Trời.",
    subjectInfo: "Ngữ văn 10",
    lessonInfo: "Sử thi Tây Nguyên – Đăm Săn đi bắt Nữ thần Mặt Trời",
    coreContent:
      "Hình tượng người anh hùng, không gian sử thi và văn hóa Ê-đê.",
    activities: [
      "Tìm hiểu văn bản Đăm Săn đi bắt Nữ thần Mặt Trời và không gian văn hóa nhà dài, rừng thiêng Tây Nguyên.",
      "Thiết kế các lớp cảnh xa – trung – gần tái hiện hành trình vượt rừng Sáp Đen và ngôi nhà Nữ thần Mặt Trời.",
      "Chế tạo hộp kể chuyện (Storybox / Diorama) với các lớp giấy cắt và khung gỗ/bìa cứng.",
      "Thử nghiệm hiệu ứng ánh sáng xuyên lớp và cơ cấu chuyển động nhân vật giấy.",
    ],
    expectedProducts:
      "Hộp kể chuyện sử thi có các lớp cảnh, nhân vật giấy và hiệu ứng ánh sáng đơn giản.",
    buttonLabel: "KHÁM PHÁ CHỦ ĐỀ",
    artSubject: "epic-dam-san",
    expectedAssetFile: "/images/topics/chu-de-02-su-thi-dam-san.jpg",
    storyboxLayers: [
      {
        layerName: "Lớp tiền cảnh (Layer 01)",
        description: "Cầu thang nhà dài Ê-đê, hoa văn thổ cẩm viền khung sân khấu và bóng dáng tù trưởng Đăm Săn cưỡi ngựa.",
        materialSuggestion: "Bìa cứng định lượng 350gsm cắt trổ chi tiết, bồi giấy màu nâu gỗ và đỏ son.",
      },
      {
        layerName: "Lớp trung cảnh (Layer 02 – Cơ cấu trượt)",
        description: "Rừng Sáp Đen hiểm trở, cỏ tranh sắc như lưỡi dao và con đường dẫn tới miền đất của Nữ thần Mặt Trời.",
        materialSuggestion: "Giấy mỹ thuật đục lỗ xuyên sáng, thanh trượt giấy dẫn hướng nhân vật di chuyển.",
      },
      {
        layerName: "Lớp hậu cảnh & Nguồn sáng (Layer 03)",
        description: "Ngôi nhà Nữ thần Mặt Trời rực rỡ ánh vàng và vầng mặt trời tỏa sáng khi Nữ thần bước ra.",
        materialSuggestion: "Giấy can mờ (tracing paper) tán sáng kết hợp đèn LED vàng ấm đặt phía sau hộp.",
      },
    ],
    projectSteps: [
      {
        phase: "Chặng 1: Khảo cứu văn bản & Văn hóa Ê-đê",
        task: "Phân tích vẻ đẹp bi tráng của Đăm Săn, biểu tượng Mặt Trời và hệ thống chi tiết không gian kỳ vĩ trong sử thi.",
        output: "Sơ đồ phân cảnh hành trình sử thi.",
      },
      {
        phase: "Chặng 2: Thiết kế cấu trúc Hộp kể chuyện",
        task: "Tính toán kích thước hộp, khoảng cách giữa các lớp cảnh để tạo chiều sâu thị giác và vị trí đặt nguồn sáng.",
        output: "Bản vẽ kỹ thuật 3 lớp cảnh và nhân vật giấy.",
      },
      {
        phase: "Chặng 3: Chế tạo & Thử nghiệm ánh sáng",
        task: "Cắt lắp các lớp cảnh vào khung hộp, lắp rãnh trượt cho nhân vật Đăm Săn và thử nghiệm góc chiếu sáng khi Mặt Trời lên.",
        output: "Mô hình Hộp kể chuyện sử thi hoạt động hoàn chỉnh.",
      },
      {
        phase: "Chặng 4: Kể chuyện sử thi (Klei Khan)",
        task: "Trình diễn kể chuyện kết hợp điều khiển ánh sáng, chuyển động nhân vật trong hộp và thuyết minh giá trị văn hóa.",
        output: "Bài thuyết minh và sản phẩm trưng bày.",
      },
    ],
  },
];

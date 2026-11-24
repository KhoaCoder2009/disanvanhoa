import { LearningTopic } from "@/types/heritage";

export const LEARNING_TOPICS_META = {
  vietnameseName: "CHỦ ĐỀ HỌC TẬP",
  englishName: "LEARNING JOURNEYS",
  title: "HÀNH TRÌNH DỰ ÁN TUỒNG ĐỒ HUYỆN ĐƯỜNG",
  description:
    "Từ kịch bản trích đoạn Huyện đường trong sách giáo khoa Ngữ văn 10, học sinh Lớp 10.3 bước vào hai chặng trải nghiệm liên hoàn: Giải mã tạo hình mặt nạ STEAM và Sân khấu hóa trên lớp.",
};

export const LEARNING_TOPICS: LearningTopic[] = [
  {
    id: "chu-de-01-huyen-duong",
    topicNumber: "CHẶNG DỰ ÁN 01",
    title: "MÃ MÀU VÀ NÉT MẶT ƯỚC LỆ",
    status: "Đang triển khai",
    summary:
      "Giải mã tính cách tứ đại nhân vật và chế tạo bộ mặt nạ bìa cứng 3D qua trích đoạn tuồng hài Huyện đường.",
    subjectInfo: "Ngữ văn 10",
    lessonInfo: "Bài 5: Tích trò sân khấu dân gian (Nghêu, Sò, Ốc, Hến)",
    coreContent:
      "Đọc hiểu kịch bản tuồng đồ Huyện đường, giải mã tính cách nhân vật qua ngôn từ trào phúng và chuyển hóa thành ngôn ngữ tạo hình hóa trang mặt nạ sân khấu tuồng.",
    activities: [
      "Giải mã 4 nhân vật (Tri huyện, Đề lại, Lính lệ, Trùm Sò) qua lời thoại, cử chỉ và mâu thuẫn tại công đường.",
      "Thiết kế bản vẽ kỹ thuật tỷ lệ 1:1 / cm theo nguyên tắc mã màu và đường nét ước lệ.",
      "Chế tạo mặt nạ 3D bằng bìa carton tái chế, đất sét nhẹ và màu acrylic tại 4 Tổ.",
      "Biên soạn bài thuyết minh Word (.docx) lý giải ý nghĩa từng vùng màu và nét cọ.",
    ],
    expectedProducts:
      "4 bộ bản vẽ kỹ thuật, 4 sản phẩm mặt nạ 3D hoàn thiện và hồ sơ Word thuyết minh của 4 Tổ.",
    buttonLabel: "KHÁM PHÁ CHẶNG 01",
    artSubject: "tuong-huyen-duong",
    expectedAssetFile: "/images/cinema/scene-03-sac-tuong.png",
    characters: [
      {
        id: "tri-huyen",
        name: "Tri huyện",
        roleTitle: "Quan đầu huyện cầm cân nảy mực (Tổ 1)",
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
        roleTitle: "Phụ quan thư lại mưu mô (Tổ 2)",
        faceColorMeaning:
          "Da vàng nhợt phối mũ tròn đen nâu viền vàng đồng cũ bạc màu và vùng mắt – môi đỏ sẫm: khắc họa kẻ phụ quan kín đáo, gian xảo, ham danh lợi và khéo luồn cúi.",
        paletteHex: ["#2B211E", "#991B1B", "#B59449", "#E8D3B9"],
        strokeFeatures:
          "Đôi lông mày đen vẽ xếch ngược sắc lẹm, mắt hẹp sắc, ria mép cong vểnh kết hợp nụ cười nhếch mép đầy toan tính.",
        personalityDecoding:
          "Thông thuộc luật lệ giấy tờ nhưng dùng chữ nghĩa mớm cung cho quan huyện để xoay chuyển trắng đen và ăn đút lót.",
        propsAndGesture:
          "Tay cầm sổ án, dáng đứng khom về phía Tri huyện để rỉ tai hiến kế.",
      },
      {
        id: "linh-le",
        name: "Lính lệ",
        roleTitle: "Tay sai hầu hạ công đường (Tổ 3)",
        faceColorMeaning:
          "Mũ lính đen viền vàng – tua đỏ kết hợp chóp mũi tròn đắp nổi đỏ tươi (hề tuồng) và viền mắt trắng trợn ngược – vừa hách dịch quát tháo dân đen, vừa khúm núm trước đồng tiền.",
        paletteHex: ["#DC2626", "#18181B", "#FACC15", "#FFFFFF"],
        strokeFeatures:
          "Chân mày đen dày xếch cao, sống mũi đắp nổi chóp đỏ tròn Ø 1,5 cm, bộ ria vểnh ba nhánh ngạo nghễ.",
        personalityDecoding:
          "Hiểu rõ lệ ăn hối lộ nơi cửa quan, nạt nộ người tay không đi kiện nhưng lập tức đổi giọng khi được lót tay.",
        propsAndGesture:
          "Cầm gậy lệ canh cổng quan, bước đi dậm chân dọa nạt và xòe tay đòi tiền lễ.",
      },
      {
        id: "trum-so",
        name: "Trùm Sò",
        roleTitle: "Trọc phú keo kiệt đi kiện (Tổ 4)",
        faceColorMeaning:
          "Nền trắng kem pha vàng nhạt nhợt nhạt cùng vùng má và môi cam đất trầm – thể hiện vẻ giàu có quê mùa nhưng hoang mang, tái mặt vì sợ mất của nơi cửa quan.",
        paletteHex: ["#F3E5AB", "#D97742", "#27272A", "#854D0E"],
        strokeFeatures:
          "Khuôn mặt tròn đầy, đôi mắt mở to ngơ ngác (cách 2 cm), lông mày nhíu sát tạo 5 vệt nhăn trán và miệng trề méo xệch.",
        personalityDecoding:
          "Nạn nhân bị mất trộm nhưng bản tính bủn xỉn, vừa tiếc đứt ruột từng đồng đút lót vừa phải cam chịu trước uy quyền quan huyện.",
        propsAndGesture:
          "Dáng đi lật đật, hai tay ôm khư khư túi bạc, liên tục vái lạy và than vãn.",
      },
    ],
    projectSteps: [
      {
        phase: "Bước 1: Giải mã văn bản",
        task: "Đọc phân vai trích đoạn Huyện đường, lập bảng đối chiếu lời thoại – hành động – tính cách của 4 nhân vật theo 4 Tổ.",
        output: "Phiếu hồ sơ giải mã nhân vật của từng Tổ.",
      },
      {
        phase: "Bước 2: Bản vẽ kỹ thuật tỷ lệ",
        task: "Tra cứu quy ước màu sắc mặt nạ tuồng, dựng bản vẽ trục đối xứng có chú thích kích thước (cm/mm) và cắt dưỡng giấy 1:1.",
        output: "Bản phác thảo kỹ thuật & dưỡng giấy.",
      },
      {
        phase: "Bước 3: Chế tạo mặt nạ 3D",
        task: "Xẻ tai gấp khối bìa carton sóng hoặc đắp đất sét tự khô tạo độ nổi khối (mũi, mão, râu), phối màu acrylic và gắn dây đeo.",
        output: "Sản phẩm mặt nạ 3D hoàn thiện của 4 Tổ.",
      },
      {
        phase: "Bước 4: Biên soạn thuyết minh",
        task: "Hoàn thiện tệp Word thuyết minh giải trình mối liên hệ giữa tạo hình mặt nạ với nghệ thuật châm biếm của văn bản.",
        output: "Bản Word thuyết minh (.docx) lưu trữ trên Triển lãm số.",
      },
    ],
  },
  {
    id: "chu-de-02-san-khau-hoa",
    topicNumber: "CHẶNG DỰ ÁN 02",
    title: "THUYẾT MINH & DIỄN KỊCH HUYỆN ĐƯỜNG",
    status: "Hoàn thiện sân khấu hóa",
    summary:
      "Thuyết trình Nói & Nghe bảo vệ ý tưởng thiết kế mặt nạ của 4 Tổ và biểu diễn sân khấu hóa trích đoạn Huyện đường toàn Lớp 10.3.",
    subjectInfo: "Ngữ văn 10",
    lessonInfo: "Thực hành Nói & Nghe – Sân khấu hóa tác phẩm văn học dân gian",
    coreContent:
      "Đưa sản phẩm mặt nạ thủ công bước lên không gian sân khấu lớp học 'Công minh chính trực – Huyện đường' thông qua hoạt động thuyết trình nhóm và diễn kịch nhập vai.",
    activities: [
      "Thiết kế bối cảnh bảng phấn Công đường với hoành phi và câu đối đăng đối.",
      "Đại diện 4 Tổ lần lượt thuyết minh trực tiếp trước lớp về ý tưởng, mã màu và chất liệu mặt nạ.",
      "Phân vai diễn viên đại diện các Tổ tập luyện đài từ, cử chỉ ước lệ và tung hứng lời thoại.",
      "Ghi hình trọn vẹn buổi thuyết minh của các Tổ và vở diễn kịch chung của Lớp 10.3.",
    ],
    expectedProducts:
      "Bối cảnh sân khấu lớp học, bộ video thuyết minh mặt nạ của các Tổ và 01 Video diễn kịch chung toàn lớp.",
    buttonLabel: "KHÁM PHÁ CHẶNG 02",
    artSubject: "exhibit-micro-acting",
    expectedAssetFile: "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg",
    stagePlanSteps: [
      {
        stageName: "Hạng mục 01: Bối cảnh Công đường Lớp 10.3",
        description:
          "Trang trí bảng chính bằng bức hoành phi 'Công minh chính trực – Huyện đường' và đôi câu đối 'Chí vị quốc sự ý vô tư / Trung hiếu nhân nghĩa giữ thủy chung' tạo thế đối lập châm biếm.",
        materialSuggestion:
          "Phấn màu vàng – trắng trên bảng xanh lớp học, bàn ghế gỗ bố trí làm án thư quan huyện.",
      },
      {
        stageName: "Hạng mục 02: Báo cáo Thuyết minh Mặt nạ (Nói & Nghe)",
        description:
          "Đại diện từng Tổ cầm mặt nạ hoàn thiện đứng trước lớp phân tích căn cứ lời thoại SGK, ý nghĩa từng gam màu và quy trình chế tác bìa carton tái chế.",
        materialSuggestion:
          "Mặt nạ 3D của Tổ, văn bản thuyết minh và máy quay ghi hình trực tiếp.",
      },
      {
        stageName: "Hạng mục 03: Vở Diễn kịch Sân khấu hóa Toàn lớp",
        description:
          "Kết nối các vai Tri huyện, Đề lại, Lính lệ, Trùm Sò và các nhân vật trong vụ kiện thành vở diễn hoàn chỉnh giàu tiếng cười phê phán.",
        materialSuggestion:
          "Bộ mặt nạ 4 Tổ, đạo cụ quạt giấy, sổ án, túi tiền và trang phục biểu diễn.",
      },
    ],
    projectSteps: [
      {
        phase: "Chặng 1: Biên tập kịch bản & Phân vai",
        task: "Chắt lọc các lớp thoại đắt giá trong trích đoạn Huyện đường, thống nhất danh sách diễn viên đại diện từ cả 4 Tổ.",
        output: "Bảng phân công diễn xuất Lớp 10.3 (.docx).",
      },
      {
        phase: "Chặng 2: Dựng bối cảnh Công đường",
        task: "Thiết kế mỹ thuật bảng sân khấu và sắp đặt vị trí án thư, lối ra vào của quan huyện, nha lại và người đi kiện.",
        output: "Không gian sân khấu lớp học hoàn chỉnh.",
      },
      {
        phase: "Chặng 3: Thuyết trình bảo vệ sản phẩm",
        task: "Các Tổ trình bày bài thuyết minh mặt nạ trong 1–4 phút, lắng nghe nhận xét từ giáo viên và các tổ bạn.",
        output: "Hệ thống video thuyết minh mặt nạ trên lớp.",
      },
      {
        phase: "Chặng 4: Công diễn & Lưu trữ số",
        task: "Biểu diễn chính thức trích đoạn kịch Huyện đường, ghi hình tư liệu và xuất bản lên chuyên trang Triển lãm số.",
        output: "Video diễn kịch chung của Lớp 10.3.",
      },
    ],
  },
];

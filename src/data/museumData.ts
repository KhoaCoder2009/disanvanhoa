import { MuseumWing } from "@/types/heritage";

export const MUSEUM_SECTION_META = {
  vietnameseName: "BẢO TÀNG SỐ",
  englishName: "DIGITAL MUSEUM",
  title: "KHÁM PHÁ KHO TÀNG DI SẢN",
  description:
    "Hai không gian di sản trọng tâm của Ngữ văn 10: Nghệ thuật Tuồng đồ Huyện đường (Nghêu, Sò, Ốc, Hến) và Sử thi anh hùng Đăm Săn của đồng bào Ê-đê Tây Nguyên.",
};

export const MUSEUM_WINGS: MuseumWing[] = [
  {
    id: "sac-tuong-huyen-duong",
    code: "PHÒNG TRƯNG BÀY 01",
    title: "SẮC TUỒNG HUYỆN ĐƯỜNG",
    subtitle: "Nghệ thuật hóa trang ước lệ & Mã màu tính cách",
    themeAccent: "crimson",
    workReference: "Trích đoạn: Huyện đường (Tuồng đồ Nghêu, Sò, Ốc, Hến)",
    gradeReference: "Ngữ văn 10 – Dự án Huyện đường",
    shortDescription:
      "Giải mã hệ thống mã màu sắc – đường nét ước lệ trên mặt nạ Tuồng đồ truyền thống, nơi sắc trắng mốc, vệt đỏ sẫm, mảng xanh xám hay vàng sậm bộc lộ ngay bản chất từng nhân vật trước khi cất lời.",
    highlights: [
      "Bảng quy ước màu sắc mặt tuồng: trắng mốc giả nhân, xanh xám gian ngoan, nâu đất hề tuồng.",
      "Kỹ thuật cường điệu dáng mày, râu ba chòm và tỷ lệ đối xứng trên khuôn mặt.",
      "Liên kết trực tiếp tới Dự án 01 chế tạo mặt nạ bìa cứng nhiều lớp.",
    ],
    buttonLabel: "KHÁM PHÁ SẮC TUỒNG",
    artSubject: "tuong-huyen-duong",
    expectedAssetFile: "/images/cinema/scene-03-sac-tuong.png",
    assetNote: "Tư liệu Diorama Mặt nạ Tuồng ước lệ tại Bảo tàng số",
    detailContent: {
      culturalContext:
        "Tuồng đồ là dòng tuồng hài dân gian giàu tinh thần phê phán, sử dụng thủ pháp ước lệ, tượng trưng và phóng đại để bóc trần những thói hư tật xấu của bộ máy quan lại phong kiến xưa.",
      literaryExcerptInfo:
        "Trích đoạn 'Huyện đường' (trích vở Nghêu, Sò, Ốc, Hến) mở ra cảnh công đường nơi vị quan đầu huyện và thuộc hạ công khai bàn chuyện xử kiện vì tiền tài và tư lợi.",
      artisticFeatures: [
        "Mặt nạ không mô tả tả thực mà mã hóa tính cách thông qua gam màu đỏ son, trắng mốc, xanh rêu, vàng sậm.",
        "Đường nét mày xếch, khóe miệng lệch hay vệt phấn sống mũi giúp khán giả nhận diện tức thì vai nịnh – vai hài.",
        "Mối liên kết chặt chẽ giữa tạo hình khuôn mặt và điệu bộ vuốt râu, khom lưng, vỗ án.",
      ],
      steamConnection:
        "Ứng dụng Toán học tỷ lệ gương mặt và Kỹ thuật bồi bìa cứng 3D nhiều lớp để chế tạo mặt nạ biểu diễn trực quan ngay trên lớp.",
      discussionPrompt:
        "Vì sao nghệ thuật hóa trang mặt tuồng truyền thống lại giúp người xem nhận diện được bản chất nhân vật nơi Huyện đường ngay trước cả khi họ cất lời?",
    },
  },
  {
    id: "tu-dai-nhan-vat",
    code: "PHÒNG TRƯNG BÀY 02",
    title: "CÔNG ĐƯỜNG & BỐN NHÂN VẬT",
    subtitle: "Tiếng cười trào phúng qua Tri huyện, Đề lại, Lính lệ, Trùm Sò",
    themeAccent: "bronze",
    workReference: "Trích đoạn: Huyện đường (Tứ đại nhân vật công đường)",
    gradeReference: "Ngữ văn 10 – Dự án Huyện đường",
    shortDescription:
      "Khảo sát không gian án thư công đường nơi bốn nhân vật Tri huyện, Đề lại, Lính lệ và Trùm Sò tự bộc lộ chân tướng tham lam, lươn lẹo và keo kiệt qua lời thoại xưng danh và đối đáp.",
    highlights: [
      "Bóc tách quan hệ quyền lực – lợi ích giữa Tri huyện, Đề lại, Lính lệ và Trùm Sò.",
      "Nghệ thuật dùng lời nhân vật tự giới thiệu để tự lột trần thói xấu.",
      "Tài liệu nền cho kịch bản vi diễn sân khấu hóa 3–5 phút trên lớp.",
    ],
    buttonLabel: "KHÁM PHÁ CÔNG ĐƯỜNG",
    artSubject: "huyen-duong-court",
    expectedAssetFile: "/images/cinema/scene-07-huyen-duong.png",
    assetNote: "Tư liệu Diorama Bàn án thư công đường Huyện đường",
    detailContent: {
      culturalContext:
        "Trong nghệ thuật Tuồng hài dân gian, chốn công đường vốn là biểu tượng của công lý nhưng lại bị biến thành sàn giao dịch lễ vật, tạo nên sức mạnh phê phán sâu sắc.",
      literaryExcerptInfo:
        "Qua màn chào đầu tự xưng của Tri huyện, lời rỉ tai xúi bẩy của Đề lại, giọng đùa cợt bộc trực của Lính lệ và dáng vẻ khúm núm giữ tiền của Trùm Sò, toàn bộ vụ kiện bị đảo lộn trắng đen.",
      artisticFeatures: [
        "Thủ pháp tự bộc lộ: nhân vật đứng ra kể thẳng phương châm 'làm quan ăn lễ' một cách thản nhiên.",
        "Ngôn ngữ đối đáp giàu tính khẩu ngữ dân gian, xen giữa nói lối và hát khách trào lộng.",
        "Tứ giác tính cách tương phản tạo nhịp kịch sinh động khi đưa lên sân khấu học đường.",
      ],
      steamConnection:
        "Thiết kế bộ tứ chân dung 4 nhân vật (Tri huyện – Đề lại – Lính lệ – Trùm Sò) đi kèm 4 Thẻ giải mã học thuật trích dẫn lời thoại gốc SGK.",
      discussionPrompt:
        "Sự cấu kết và đối lập tính cách giữa Tri huyện, Đề lại, Lính lệ và Trùm Sò phơi bày điều gì về hiện thực xã hội phong kiến?",
    },
  },
  {
    id: "khong-gian-dam-san",
    code: "PHÒNG TRƯNG BÀY 03",
    title: "KHÔNG GIAN SỬ THI ĐĂM SĂN",
    subtitle: "Văn hóa Ê-đê, Nhà dài, Cồng chiêng & Diễn xướng Klei Khan",
    themeAccent: "emerald",
    workReference: "Sử thi Tây Nguyên: Đăm Săn đi bắt Nữ thần Mặt Trời",
    gradeReference: "Ngữ văn 10 – Dự án Sử thi Đăm Săn",
    shortDescription:
      "Bước vào thế giới sử thi anh hùng của đồng bào Ê-đê với kiến trúc nhà dài, tiếng cồng chiêng Hlong vang vọng đại ngàn và truyền thống hát kể khan (Klei Khan) bên bếp lửa.",
    highlights: [
      "Tái hiện không gian buôn làng Ê-đê: nhà dài, cầu thang gỗ và hoa văn thổ cẩm.",
      "Hình tượng người tù trưởng Đăm Săn kỳ vĩ đại diện cho ý chí thị tộc.",
      "Kết nối tư liệu âm thanh Podcast thuyết minh văn hóa Tây Nguyên.",
    ],
    buttonLabel: "KHÁM PHÁ SỬ THI ĐĂM SĂN",
    artSubject: "dam-san-longhouse",
    expectedAssetFile: "/images/cinema/scene-dam-san-nha-dai.png",
    assetNote: "Tư liệu Diorama Đăm Săn & Nhà dài Ê-đê Tây Nguyên",
    detailContent: {
      culturalContext:
        "Sử thi (Klei Khan) là pho sử bằng lời của các dân tộc Tây Nguyên, gắn với không gian sinh hoạt cộng đồng nơi bếp lửa nhà dài và nhịp cồng chiêng trang trọng.",
      literaryExcerptInfo:
        "Hình tượng chàng Đăm Săn mang tầm vóc vũ trụ với ngoại hình, sức mạnh và danh tiếng vang dội khắp núi rừng, sẵn sàng chinh phục những thử thách vượt giới hạn con người.",
      artisticFeatures: [
        "Ngôn ngữ sử thi giàu tính khoa trương, trùng điệp và hình ảnh so sánh phóng đại lấy từ thiên nhiên đại ngàn.",
        "Không gian văn hóa vật chất đặc trưng: cầu thang chạm khắc, ghế Kpan dài, ché rượu cần và vải thổ cẩm.",
        "Vẻ đẹp bi tráng hòa quyện giữa con người anh hùng và núi rừng Tây Nguyên.",
      ],
      steamConnection:
        "Phân tích kiến trúc nhà dài Ê-đê và hoa văn thổ cẩm để dựng mô hình tiền cảnh hộp diorama kết hợp thu âm Podcast thuyết minh.",
      discussionPrompt:
        "Không gian nhà dài và tiếng cồng chiêng góp phần khắc họa tầm vóc người anh hùng Đăm Săn như thế nào?",
    },
  },
  {
    id: "hanh-trinh-mat-troi",
    code: "PHÒNG TRƯNG BÀY 04",
    title: "RỪNG SÁP ĐEN & NỮ THẦN MẶT TRỜI",
    subtitle: "Khát vọng chinh phục thiên nhiên & Quang học Hộp sáng 3 lớp",
    themeAccent: "amber",
    workReference: "Trích đoạn: Đăm Săn đi bắt Nữ thần Mặt Trời",
    gradeReference: "Ngữ văn 10 – Dự án Sử thi Đăm Săn",
    shortDescription:
      "Theo dấu hành trình Đăm Săn cưỡi ngựa vượt rừng Sáp Đen tiến tới ngôi nhà Nữ thần Mặt Trời – nơi vẻ đẹp bi tráng của sử thi gặp gỡ nghệ thuật cắt lớp và quang học LED trong Hộp kể chuyện 3 lớp.",
    highlights: [
      "Biểu tượng Nữ thần Mặt Trời và thử thách khắc nghiệt của rừng Sáp Đen.",
      "Ý nghĩa bất tử hóa khát vọng vươn tới ánh sáng lý tưởng của cộng đồng.",
      "Cơ sở khoa học quang học tán sáng qua giấy can cho Hộp kể chuyện 3 lớp.",
    ],
    buttonLabel: "KHÁM PHÁ HÀNH TRÌNH MẶT TRỜI",
    artSubject: "dam-san-sun-goddess",
    expectedAssetFile: "/images/cinema/scene-dam-san-mat-troi.png",
    assetNote: "Tư liệu Diorama Vầng Mặt Trời & Rừng Sáp Đen Sử thi Đăm Săn",
    detailContent: {
      culturalContext:
        "Chuyến đi bắt Nữ thần Mặt Trời là đỉnh cao táo bạo trong sử thi Đăm Săn, biểu trưng cho khát vọng khẳng định uy danh và sức mạnh tập thể trước tự nhiên huyền bí.",
      literaryExcerptInfo:
        "Dù biết con đường qua rừng Sáp Đen cỏ tranh sắc như dao và bùn lầy ngập ngụa đầy hiểm nguy, Đăm Săn vẫn dấn bước không lùi trước vầng sáng chói lòa của Nữ thần Mặt Trời.",
      artisticFeatures: [
        "Thủ pháp tương phản ánh sáng – bóng tối giữa rừng Sáp Đen âm u và ngôi nhà Nữ thần rực rỡ.",
        "Nhịp điệu dồn dập mô tả bước ngựa phi và thái độ kiêu hãnh bất khuất trước sự từ chối của Nữ thần.",
        "Kết cục bi tráng nâng người anh hùng lên tầm biểu tượng vĩnh cửu trong ký ức buôn làng.",
      ],
      steamConnection:
        "Thiết kế hộp kể chuyện 3 lớp (Tiền cảnh – Trung cảnh có rãnh trượt Đăm Săn – Hậu cảnh giấy can tán sáng đèn LED vàng ấm).",
      discussionPrompt:
        "Vì sao cái chết của Đăm Săn trên đường trở về từ nhà Nữ thần Mặt Trời lại mang vẻ đẹp bi tráng và bất tử thay vì bi lụy?",
    },
  },
];

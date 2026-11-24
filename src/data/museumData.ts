import { MuseumWing } from "@/types/heritage";

export const MUSEUM_SECTION_META = {
  vietnameseName: "BẢO TÀNG SỐ",
  englishName: "DIGITAL MUSEUM",
  title: "KHÁM PHÁ KHÔNG GIAN TUỒNG ĐỒ HUYỆN ĐƯỜNG",
  description:
    "Không gian bảo tàng số chuyên sâu phục vụ Dự án Ngữ văn 10 – STEAM: giải mã nghệ thuật hóa trang mặt nạ ước lệ, tứ đại nhân vật công đường và bối cảnh sân khấu hóa trích đoạn Huyện đường (Nghêu, Sò, Ốc, Hến).",
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
      "Giải mã hệ thống mã màu sắc – đường nét ước lệ trên mặt nạ Tuồng đồ truyền thống, nơi sắc trắng mốc, vệt đỏ sẫm, đen nâu hay vàng sậm bộc lộ ngay bản chất từng nhân vật trước khi cất lời.",
    highlights: [
      "Bảng quy ước màu sắc mặt tuồng: trắng mốc giả nhân, đen nâu – đỏ sẫm gian ngoan, đỏ tươi hề tuồng, vàng kem bủn xỉn.",
      "Kỹ thuật cường điệu dáng mày xếch, ria vểnh, chóp mũi hề và tỷ lệ đối xứng trên khuôn mặt.",
      "Liên kết trực tiếp tới hoạt động chế tác mặt nạ bìa cứng 3D của 4 Tổ Lớp 10.3.",
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
        "Mặt nạ không mô tả tả thực mà mã hóa tính cách thông qua gam màu đỏ son, trắng mốc, đen nâu, vàng sậm.",
        "Đường nét mày xếch, khóe miệng nhếch lệch hay chóp mũi tròn đỏ giúp khán giả nhận diện tức thì vai nịnh – vai hề.",
        "Mối liên kết chặt chẽ giữa tạo hình khuôn mặt và điệu bộ vuốt râu, khom lưng, vỗ án.",
      ],
      steamConnection:
        "Ứng dụng Toán học tỷ lệ gương mặt, Kỹ thuật xẻ tai gấp bìa cứng 3D hoặc đắp đất sét tự khô để chế tạo mặt nạ biểu diễn trực quan ngay trên lớp.",
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
      "Tài liệu nền cho 4 Tổ Lớp 10.3 phân tích vai diễn và viết bài thuyết minh mặt nạ.",
    ],
    buttonLabel: "KHÁM PHÁ CÔNG ĐƯỜNG",
    artSubject: "huyen-duong-court",
    expectedAssetFile: "/images/cinema/scene-07-huyen-duong.png",
    assetNote: "Tư liệu Diorama Bàn án thư công đường Huyện đường",
    detailContent: {
      culturalContext:
        "Trong nghệ thuật Tuồng hài dân gian, chốn công đường vốn là biểu tượng của công lý nhưng lại bị biến thành sàn giao dịch lễ vật, tạo nên sức mạnh phê phán sâu sắc.",
      literaryExcerptInfo:
        "Qua màn chào đầu tự xưng của Tri huyện, lời rỉ tai mớm cung của Đề lại, giọng quát tháo vòi tiền của Lính lệ và dáng vẻ khúm núm xót của của Trùm Sò, toàn bộ vụ kiện bị đảo lộn trắng đen.",
      artisticFeatures: [
        "Thủ pháp tự bộc lộ: nhân vật đứng ra kể thẳng phương châm 'làm quan ăn lễ' một cách thản nhiên.",
        "Ngôn ngữ đối đáp giàu tính khẩu ngữ dân gian, xen giữa nói lối và đối thoại trào lộng.",
        "Tứ giác tính cách tương phản tạo nhịp kịch sinh động khi đưa lên sân khấu học đường.",
      ],
      steamConnection:
        "Mỗi Tổ đảm nhận chuyên sâu một mảnh ghép nhân vật (Tổ 1: Tri huyện, Tổ 2: Đề lại, Tổ 3: Lính lệ, Tổ 4: Trùm Sò) từ bản vẽ kỹ thuật đến bài thuyết minh Word.",
      discussionPrompt:
        "Sự cấu kết và đối lập tính cách giữa Tri huyện, Đề lại, Lính lệ và Trùm Sò phơi bày điều gì về hiện thực xã hội phong kiến?",
    },
  },
  {
    id: "san-khau-hoa-lop-hoc",
    code: "PHÒNG TRƯNG BÀY 03",
    title: "BỐI CẢNH LỚP HỌC & SÂN KHẤU HÓA",
    subtitle: "Không gian 'Công minh chính trực – Huyện đường' của Lớp 10.3",
    themeAccent: "amber",
    workReference: "Thực hành Sân khấu hóa – Lớp 10.3, Trường THPT Bình Phú",
    gradeReference: "Ngữ văn 10 – Trải nghiệm Diễn kịch & Nói - Nghe",
    shortDescription:
      "Tái hiện không gian công đường ngay trên bục giảng Lớp 10.3 với bức hoành phi đối liễn vẽ phấn công phu, làm phông nền cho các buổi thuyết minh mặt nạ của 4 Tổ và vở diễn kịch chung toàn lớp.",
    highlights: [
      "Hoành phi 'Công minh chính trực – Huyện đường' đối lập châm biếm với hành vi xử kiện ăn đút lót.",
      "Đôi câu đối 'Chí vị quốc sự ý vô tư – Trung hiếu nhân nghĩa giữ thủy chung' do học sinh tự thiết kế.",
      "Kết nối trọn vẹn từ sản phẩm thủ công STEAM sang nghệ thuật biểu diễn tập thể.",
    ],
    buttonLabel: "XEM BỐI CẢNH LỚP 10.3",
    artSubject: "exhibit-micro-acting",
    expectedAssetFile: "/student-products/huyen-duong/boi-canh-chung-lop-hoc.jpg",
    assetNote: "Bối cảnh bảng phấn sân khấu Huyện đường thực tế của Lớp 10.3 – THPT Bình Phú",
    detailContent: {
      culturalContext:
        "Sân khấu hóa tác phẩm văn học dân gian giúp học sinh không chỉ đọc kịch bản bằng mắt mà trực tiếp sống trong không khí đối đáp, nhịp điệu hình thể và tiếng cười trào phúng của tuồng đồ.",
      literaryExcerptInfo:
        "Bức hoành phi 'Công minh chính trực' treo cao phía sau lưng Tri huyện và Đề lại càng làm bật lên sự mỉa mai sâu cay trước những màn ngã giá công khai nơi cửa quan.",
      artisticFeatures: [
        "Bố cục bảng sân khấu đăng đối cổ điển với mây cuộn, hoành phi trung tâm và hai dải câu đối dọc.",
        "Sự kết hợp trực quan giữa mặt nạ bìa cứng thủ công, trang phục học đường/đạo cụ và diễn xuất nhập vai.",
        "Phát triển đồng thời năng lực thẩm mỹ, làm việc nhóm và kỹ năng thuyết trình Nói – Nghe.",
      ],
      steamConnection:
        "Kiểm chứng chất lượng mặt nạ ở Bước 4 (Thử nghiệm): độ rõ của đường cọ dưới ánh sáng lớp học, tầm nhìn hai hốc mắt và độ chắc chắn khi diễn xuất.",
      discussionPrompt:
        "Chi tiết bức hoành phi 'Công minh chính trực' đặt làm bối cảnh phía sau cảnh xử án Huyện đường tạo ra hiệu quả châm biếm ngược như thế nào?",
    },
  },
];

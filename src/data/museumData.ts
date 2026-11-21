import { MuseumWing } from "@/types/heritage";

export const MUSEUM_SECTION_META = {
  vietnameseName: "BẢO TÀNG SỐ",
  englishName: "DIGITAL MUSEUM",
  title: "KHÁM PHÁ KHO TÀNG DI SẢN",
  description:
    "Mỗi tác phẩm văn học là một cánh cửa mở ra thế giới nghệ thuật và văn hóa. Hãy cùng khám phá những giá trị truyền thống qua các không gian trưng bày số.",
};

export const MUSEUM_WINGS: MuseumWing[] = [
  {
    id: "hon-cheo",
    code: "PHÒNG TRƯNG BÀY 01",
    title: "HỒN CHÈO",
    subtitle: "Sân khấu chiếu chèo & Bi kịch nội tâm nhân vật",
    workReference: "Trích đoạn: Xúy Vân giả dại (Chèo cổ Kim Nham)",
    gradeReference: "Ngữ văn 10 – Bài 5: Tích trò sân khấu dân gian",
    shortDescription:
      "Khám phá không gian sân khấu chiếu chèo truyền thống vùng đồng bằng Bắc Bộ, nơi tiếng trống chèo, làn điệu dân ca và vũ đạo cách điệu khắc họa sâu sắc bi kịch tâm trạng của nhân vật Xúy Vân.",
    highlights: [
      "Đặc trưng sân khấu chiếu chèo và sự giao lưu hai chiều với khán giả (tiếng đế).",
      "Nhân vật Xúy Vân trong trích đoạn kinh điển Xúy Vân giả dại.",
      "Sự hòa quyện giữa làn điệu Con gà rừng, Sa lệch và động tác múa quạt, xe tơ.",
    ],
    buttonLabel: "KHÁM PHÁ CHÈO",
    artSubject: "cheo-xuy-van",
    expectedAssetFile: "/images/museum/san-khau-cheo-xuy-van.jpg",
    assetNote: "Tranh minh họa đồ họa sân khấu chiếu chèo (Cập nhật ảnh tư liệu tại /public/images/museum/san-khau-cheo-xuy-van.jpg)",
    detailContent: {
      culturalContext:
        "Chèo là loại hình kịch hát dân gian lâu đời của người Việt ở châu thổ sông Hồng, gắn liền với sân đình và lễ hội làng quê. Nghệ thuật chèo kết hợp nhuần nhuyễn giữa ngôn từ thơ ca, âm nhạc dân tộc và múa dân gian có tính ước lệ cao.",
      literaryExcerptInfo:
        "Trích đoạn 'Xúy Vân giả dại' (thuộc vở chèo cổ Kim Nham) tái hiện đỉnh điểm bi kịch tinh thần của Xúy Vân – người phụ nữ khao khát hạnh phúc gia đình sum vầy nhưng rơi vào bế tắc, dằn vặt giữa lầm lỗi và nỗi cô đơn giữa định kiến lễ giáo.",
      artisticFeatures: [
        "Ngôn ngữ nửa tỉnh nửa mê, đan xen giữa lời nói vần, hát quá giang, hát con gà rừng và hát ngược.",
        "Vũ đạo tay quạt, bước chân lảo đảo nhưng tuân thủ nghiêm ngặt nhịp trống chèo.",
        "Tiếng đế từ hậu trường vừa dẫn dắt tâm lý, vừa tạo sự đồng cảm sâu sắc với số phận nhân vật.",
      ],
      steamConnection:
        "Phân tích cấu trúc âm thanh nhịp phách chèo, thiết kế sơ đồ không gian sân đình ba mặt và biên tập infographic giải mã tầng nghĩa biểu tượng trong lời hát của Xúy Vân.",
      discussionPrompt:
        "Vì sao trong cảnh giả dại, đằng sau những câu hát tưởng như điên đảo, vô nghĩa của Xúy Vân lại ẩn chứa nỗi đau rất thật của người phụ nữ truyền thống?",
    },
  },
  {
    id: "sac-tuong",
    code: "PHÒNG TRƯNG BÀY 02",
    title: "SẮC TUỒNG",
    subtitle: "Nghệ thuật hóa trang, ước lệ & Châm biếm dân gian",
    workReference: "Trích đoạn: Huyện đường (Tuồng đồ Nghêu, Sò, Ốc, Hến)",
    gradeReference: "Ngữ văn 10 – Bài 5: Tích trò sân khấu dân gian",
    shortDescription:
      "Tìm hiểu ngôn ngữ màu sắc hóa trang mặt nạ tuồng, kỹ thuật biểu diễn ước lệ, động tác hình thể sắc sảo và tiếng cười phê phán sâu cay qua trích đoạn tuồng hài Huyện đường.",
    highlights: [
      "Đặc trưng hóa trang mặt tuồng: mỗi gam màu và đường cọ là một bản mã tính cách.",
      "Nghệ thuật biểu diễn ước lệ, cường điệu trong động tác, dáng đi và giọng nói.",
      "Liên kết trực tiếp tới trích đoạn Huyện đường và dự án STEAM thiết kế mặt nạ.",
    ],
    buttonLabel: "KHÁM PHÁ TUỒNG",
    artSubject: "tuong-huyen-duong",
    expectedAssetFile: "/images/museum/hoa-trang-san-khau-tuong.jpg",
    assetNote: "Tranh minh họa đồ họa mặt nạ và sân khấu tuồng (Cập nhật ảnh tư liệu tại /public/images/museum/hoa-trang-san-khau-tuong.jpg)",
    detailContent: {
      culturalContext:
        "Tuồng (Hát bội) là nghệ thuật sân khấu cổ điển mang tính ước lệ, tượng trưng và cách điệu bậc cao. Bên cạnh Tuồng pho (tuồng cung đình bi hùng), Tuồng đồ (tuồng hài dân gian) sử dụng bút pháp trào phúng sắc bén để phơi bày thói hư tật xấu của tầng lớp quan lại phong kiến.",
      literaryExcerptInfo:
        "Trích đoạn 'Huyện đường' (thuộc vở tuồng đồ đặc sắc Nghêu, Sò, Ốc, Hến) dựng lại cảnh xử kiện tại công đường nơi Tri huyện, Đề lại, Lính lệ và Trùm Sò tự bộc lộ bản chất tham lam, lươn lẹo qua từng lời thoại và cử chỉ.",
      artisticFeatures: [
        "Ngôn ngữ hóa trang ước lệ: sắc trắng mốc, nét râu vểnh, vết chàm hay mảng màu tương phản phản ánh tức thì bản chất nhân vật.",
        "Động tác hình thể (vuốt râu, xoa tay, khom lưng, trợn mắt) gắn chặt với nhịp trống chầu.",
        "Kết cấu đối thoại nhịp nhàng, dùng chính lời nhân vật tự giới thiệu để lột trần bộ mặt thật.",
      ],
      steamConnection:
        "Kết nối trực tiếp với Chủ đề học tập 01: Giải mã tâm lý nhân vật thành hệ mã màu sắc – đường nét, thiết kế và chế tạo bộ chân dung mô phỏng hóa trang tuồng bằng bìa cứng kèm video vi diễn.",
      discussionPrompt:
        "Màu sắc và đường nét hóa trang trên gương mặt các nhân vật tại Huyện đường hỗ trợ người xem nhận diện bản chất của bộ máy quan lại xưa như thế nào trước cả khi nhân vật cất lời?",
    },
  },
  {
    id: "hon-nuoc",
    code: "PHÒNG TRƯNG BÀY 03",
    title: "HỒN NƯỚC",
    subtitle: "Thủy đình, con rối & Cơ chế điều khiển dưới mặt nước",
    workReference: "Văn bản: Múa rối nước – hiện đại soi bóng tiền nhân",
    gradeReference: "Ngữ văn 10 – Bài 5: Tích trò sân khấu dân gian",
    shortDescription:
      "Chiêm ngưỡng kiến trúc thủy đình mái đao soi bóng mặt hồ, nghệ thuật tạc con rối gỗ sung và cơ chế máy sào, máy dây tài hoa ẩn dưới làn nước của các nghệ nhân dân gian.",
    highlights: [
      "Kiến trúc thủy đình giữa mặt nước – buồng trò bí mật và sân khấu mở.",
      "Nghệ thuật tạo hình con rối gỗ sung sơn ta và nhân vật chú Tễu hóm hỉnh.",
      "Liên kết văn bản thông tin Múa rối nước – hiện đại soi bóng tiền nhân.",
    ],
    buttonLabel: "KHÁM PHÁ MÚA RỐI NƯỚC",
    artSubject: "mua-roi-nuoc",
    expectedAssetFile: "/images/museum/mua-roi-nuoc-thuy-dinh.jpg",
    assetNote: "Tranh minh họa đồ họa thủy đình và con rối nước (Cập nhật ảnh tư liệu tại /public/images/museum/mua-roi-nuoc-thuy-dinh.jpg)",
    detailContent: {
      culturalContext:
        "Múa rối nước là sáng tạo nghệ thuật độc nhất vô nhị của cư dân văn minh lúa nước đồng bằng sông Hồng. Mặt nước ao làng trở thành sàn diễn sống động, vừa che giấu bộ máy điều khiển bên dưới, vừa tạo hiệu ứng sóng nước, ánh sáng lung linh.",
      literaryExcerptInfo:
        "Văn bản thông tin 'Múa rối nước – hiện đại soi bóng tiền nhân' giúp người đọc khám phá lịch sử hình thành, không gian biểu diễn thủy đình, kỹ thuật chế tác quân rối và sức sống bền bỉ của môn nghệ thuật này trong nhịp sống đương đại.",
      artisticFeatures: [
        "Thủy đình (nhà rối nước) mang dáng dấp mái đình cổ truyền với bức mành tre ngăn cách buồng trò và mặt nước.",
        "Con rối được đục đẽo từ gỗ sung nhẹ, nổi trên nước, phủ sơn ta chống thấm và trang trí rực rỡ.",
        "Cơ chế điều khiển từ xa dưới nước qua hệ thống sào tre, dây kéo, bàn xoay, bánh lái đòi hỏi sự hiệp đồng chính xác.",
      ],
      steamConnection:
        "Khảo sát nguyên lý lực đẩy Archimedes, đòn bẩy và cơ cấu truyền động dây – ròng rọc trong điều khiển rối nước để dựng mô hình sân khấu thủy đình thu nhỏ.",
      discussionPrompt:
        "Sự kết hợp giữa chất liệu tự nhiên (mặt nước, gỗ sung, tre trúc) và tư duy kỹ thuật cơ học của nghệ nhân xưa đã tạo nên vẻ đẹp kỳ ảo cho múa rối nước như thế nào?",
    },
  },
];

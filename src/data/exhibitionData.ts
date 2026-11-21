import { ExhibitionCategory, ExhibitionItem } from "@/types/heritage";

export const EXHIBITION_SECTION_META = {
  vietnameseName: "TRIỂN LÃM SỐ",
  englishName: "DIGITAL EXHIBITION",
  title: "NHỮNG SÁNG TẠO TỪ TRANG SÁCH",
  description:
    "Không gian trưng bày số chuyên sâu cho hai dự án Ngữ văn 10 trọng tâm: Tuồng đồ Huyện đường và Sử thi Đăm Săn.",
  sampleNotice:
    "Lưu ý minh bạch học liệu: Các thẻ dưới đây hiện là MẪU MINH HỌA định hướng cấu trúc trưng bày. Giáo viên sẽ cập nhật hình ảnh, video và thông tin nhóm học sinh thực tế sau khi kết thúc từng chặng dự án.",
};

export const EXHIBITION_CATEGORIES: ExhibitionCategory[] = [
  "Tất cả",
  "Sản phẩm thủ công",
  "Mô hình sân khấu",
  "Mặt nạ và tạo hình nhân vật",
  "Hộp kể chuyện",
  "Video vi diễn",
  "Podcast và thuyết minh",
  "Infographic và học liệu số",
];

export const EXHIBITION_TOPICS_FILTER = [
  { id: "all", label: "Tất cả hai dự án" },
  { id: "chu-de-01-huyen-duong", label: "Dự án 01: Huyện đường (Tuồng)" },
  { id: "chu-de-02-dam-san", label: "Dự án 02: Sử thi Đăm Săn" },
];

export const EXHIBITION_ITEMS: ExhibitionItem[] = [
  {
    id: "exhibit-01-bo-chan-dung-huyen-duong",
    title: "Bộ chân dung 4 nhân vật Huyện đường & Thẻ giải mã",
    category: "Mặt nạ và tạo hình nhân vật",
    topicTitle: "Mã màu và nét mặt ước lệ (Huyện đường)",
    topicId: "chu-de-01-huyen-duong",
    authorNote: "Mẫu minh họa học liệu – Giáo viên cập nhật tên nhóm/lớp sau khi nghiệm thu",
    isIllustrativeSample: true,
    ideaDescription:
      "Bộ tứ chân dung mô phỏng hóa trang tuồng gồm Tri huyện, Đề lại, Lính lệ và Trùm Sò. Mỗi gương mặt được thiết kế dựa trên việc đối chiếu lời thoại tự bộc lộ trong văn bản với quy ước sắc diện sân khấu tuồng đồ.",
    makingProcess: [
      "Bước 1: Trích xuất từ khóa tính cách của 4 nhân vật từ văn bản SGK Ngữ văn 10.",
      "Bước 2: Phác thảo lưới tỉ lệ khuôn mặt và xác định vùng mã màu (trắng mốc, xanh xám, nâu đất, vàng sậm).",
      "Bước 3: Cắt ghép 3 lớp bìa cứng tạo độ nổi cho phần mày, râu, mão quan và tô màu acrylic.",
      "Bước 4: Biên soạn 4 thẻ giải mã đính kèm giải thích ý nghĩa từng đường cọ.",
    ],
    materialsUsed: [
      "Bìa cứng carton 3 lớp và giấy mỹ thuật định lượng cao",
      "Màu acrylic, bút lông tỉa nét, keo sữa",
      "Que cầm gỗ và thẻ thông tin in hai mặt",
    ],
    videoStatusNote:
      "Khung video giới thiệu sản phẩm (Tệp chờ cập nhật: /public/videos/exhibition/bo-chan-dung-huyen-duong.mp4)",
    artSubject: "exhibit-mask-set",
    expectedAssetFile: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
  },
  {
    id: "exhibit-02-hop-ke-chuyen-dam-san",
    title: "Hộp kể chuyện sử thi: Đăm Săn đi bắt Nữ thần Mặt Trời",
    category: "Hộp kể chuyện",
    topicTitle: "Đánh thức thế giới sử thi (Đăm Săn)",
    topicId: "chu-de-02-dam-san",
    authorNote: "Mẫu minh họa học liệu – Dự án 02: Sử thi Đăm Săn",
    isIllustrativeSample: true,
    ideaDescription:
      "Mô hình hộp kể chuyện (Storybox) kết hợp 3 lớp cảnh giấy cắt xuyên sáng, tái hiện hành trình chàng Đăm Săn vượt rừng Sáp Đen đến ngôi nhà rực rỡ của Nữ thần Mặt Trời.",
    makingProcess: [
      "Bước 1: Phân tích không gian nghệ thuật trong văn bản sử thi để chia thành 3 lớp tiền cảnh, trung cảnh, hậu cảnh.",
      "Bước 2: Thiết kế khung hộp có viền hoa văn thổ cẩm Ê-đê và khe cài các lớp cảnh.",
      "Bước 3: Trổ giấy tạo hình nhà dài, rừng cỏ tranh, vầng mặt trời và nhân vật giấy có thanh trượt.",
      "Bước 4: Lắp nguồn sáng ấm phía sau lớp giấy can để thử nghiệm hiệu ứng bình minh sử thi.",
    ],
    materialsUsed: [
      "Bìa mô hình formex/carton cứng làm khung hộp",
      "Giấy mỹ thuật đen, đỏ son, vàng cổ và giấy can tán sáng",
      "Đèn LED dây dùng pin AA an toàn",
    ],
    videoStatusNote:
      "Khung video thử nghiệm hiệu ứng ánh sáng hộp kể chuyện (Tệp chờ cập nhật: /public/videos/exhibition/hop-ke-chuyen-dam-san.mp4)",
    artSubject: "exhibit-storybox",
    expectedAssetFile: "/images/cinema/scene-05-dam-san-steam.png",
  },
  {
    id: "exhibit-03-mo-hinh-nha-dai-dam-san",
    title: "Sa bàn Nhà dài Ê-đê & Hoa văn thổ cẩm trong Sử thi Đăm Săn",
    category: "Mô hình sân khấu",
    topicTitle: "Đánh thức thế giới sử thi (Đăm Săn)",
    topicId: "chu-de-02-dam-san",
    authorNote: "Mẫu minh họa học liệu – Dự án 02: Sử thi Đăm Săn",
    isIllustrativeSample: true,
    ideaDescription:
      "Sa bàn tái hiện kiến trúc nhà dài Ê-đê với cầu thang gỗ chạm khắc, dãy cồng chiêng đồng và dải hoa văn thổ cẩm đỏ – đen – vàng làm phông nền kể chuyện Klei Khan.",
    makingProcess: [
      "Bước 1: Khảo cứu tư liệu kiến trúc nhà dài Tây Nguyên và họa tiết thổ cẩm bản địa.",
      "Bước 2: Tính toán tỉ lệ thu nhỏ sàn nhà, cầu thang đục bậc và độ dốc mái tranh.",
      "Bước 3: Lắp ghép vật liệu tre gỗ tái chế và bổ sung bảng chú giải văn hóa Ê-đê.",
    ],
    materialsUsed: [
      "Que tre, gỗ balsa mảnh và bìa kraft nâu",
      "Vải thổ cẩm hoặc giấy vẽ hoa văn đỏ – đen – vàng",
      "Bảng chú thích thuật ngữ văn hóa Tây Nguyên",
    ],
    videoStatusNote:
      "Khung video giới thiệu sa bàn nhà dài Ê-đê (Tệp chờ cập nhật: /public/videos/exhibition/sa-ban-nha-dai-dam-san.mp4)",
    artSubject: "exhibit-longhouse",
    expectedAssetFile: "/images/cinema/scene-dam-san-nha-dai.png",
  },
  {
    id: "exhibit-04-vi-dien-huyen-duong",
    title: "Tư liệu Vi diễn: Cảnh xử kiện nơi Huyện đường",
    category: "Video vi diễn",
    topicTitle: "Mã màu và nét mặt ước lệ (Huyện đường)",
    topicId: "chu-de-01-huyen-duong",
    authorNote: "Mẫu minh họa học liệu – Khung lưu trữ video biểu diễn của học sinh",
    isIllustrativeSample: true,
    ideaDescription:
      "Hoạt động sân khấu hóa ngắn (3–5 phút) nơi học sinh sử dụng chính bộ chân dung mặt nạ bìa cứng đã chế tạo để nhập vai Tri huyện, Đề lại, Lính lệ và Trùm Sò.",
    makingProcess: [
      "Bước 1: Biên tập kịch bản vi diễn giữ nguyên các lời thoại đắt giá trong SGK.",
      "Bước 2: Tập luyện dáng đi, điệu bộ ước lệ (vuốt râu, khom lưng, xoa tay) khớp với nhịp trống.",
      "Bước 3: Kết hợp đạo cụ, mặt nạ bìa cứng và ghi hình tại không gian lớp học.",
    ],
    materialsUsed: [
      "Bộ chân dung 4 nhân vật Huyện đường bằng bìa cứng",
      "Đạo cụ sân khấu đơn giản: quạt giấy, sổ án, tráp gỗ",
      "Kịch bản phân vai và bảng phân cảnh ghi hình",
    ],
    videoStatusNote:
      "Khung phát video vi diễn của nhóm học sinh (Giáo viên cập nhật tệp video sau buổi thực hành trên lớp)",
    artSubject: "exhibit-micro-acting",
    expectedAssetFile: "/images/cinema/scene-07-huyen-duong.png",
  },
  {
    id: "exhibit-05-infographic-huyen-duong",
    title: "Infographic giải mã Tứ giác nhân vật & Bút pháp châm biếm Huyện đường",
    category: "Infographic và học liệu số",
    topicTitle: "Mã màu và nét mặt ước lệ (Huyện đường)",
    topicId: "chu-de-01-huyen-duong",
    authorNote: "Mẫu minh họa học liệu – Sản phẩm học liệu số Dự án 01",
    isIllustrativeSample: true,
    ideaDescription:
      "Infographic trực quan hóa mạng lưới quan hệ lợi ích giữa Tri huyện – Đề lại – Lính lệ – Trùm Sò, đối chiếu từng câu thoại trào phúng với mã màu sắc diện mặt tuồng.",
    makingProcess: [
      "Bước 1: Lập bảng đối chiếu 4 nhân vật theo 3 cột: Lời tự xưng – Hành động công đường – Mã màu hóa trang.",
      "Bước 2: Vẽ sơ đồ mũi tên quan hệ mua chuộc và đảo lộn công lý trong phiên xử kiện.",
      "Bước 3: Dàn trang đồ họa theo tông Đỏ son – Trắng ngà – Vàng kim rõ nét, dễ tra cứu.",
    ],
    materialsUsed: [
      "Ngữ liệu trích đoạn Huyện đường (SGK Ngữ văn 10)",
      "Bảng mã hex màu sắc mặt nạ tuồng chuẩn hóa",
      "Phần mềm thiết kế đồ họa và in ấn học tập",
    ],
    videoStatusNote:
      "Tài liệu học liệu số đính kèm (Tệp chờ cập nhật: /public/docs/infographic-huyen-duong.pdf)",
    artSubject: "exhibit-infographic",
    expectedAssetFile: "/images/cinema/scene-vi-dien-podcast.png",
  },
  {
    id: "exhibit-06-podcast-am-vang-su-thi",
    title: "Podcast thuyết minh: Không gian văn hóa Ê-đê & Hành trình Đăm Săn",
    category: "Podcast và thuyết minh",
    topicTitle: "Đánh thức thế giới sử thi (Đăm Săn)",
    topicId: "chu-de-02-dam-san",
    authorNote: "Mẫu minh họa học liệu – Hồ sơ âm thanh thuyết minh Dự án 02",
    isIllustrativeSample: true,
    ideaDescription:
      "Bản thu âm thuyết minh giới thiệu tục kể khan bên bếp lửa nhà dài, ý nghĩa chiếc cồng Hlong và khát vọng chinh phục Nữ thần Mặt Trời của cộng đồng Ê-đê qua hình tượng Đăm Săn.",
    makingProcess: [
      "Bước 1: Tổng hợp kiến thức ngữ văn và tư liệu văn hóa dân tộc Ê-đê ở Tây Nguyên.",
      "Bước 2: Viết kịch bản lời bình ngắn gọn, giàu hình ảnh và cảm xúc.",
      "Bước 3: Thu âm giọng đọc kết hợp thuyết minh trực tiếp cho mô hình Hộp kể chuyện.",
    ],
    materialsUsed: [
      "Kịch bản thuyết minh học thuật 3 phút",
      "Bản ghi âm giọng đọc của nhóm học sinh",
      "Mã QR gắn trực tiếp lên Hộp kể chuyện sử thi",
    ],
    videoStatusNote:
      "Khung nghe tệp âm thanh thuyết minh (Tệp chờ cập nhật: /public/audio/podcast-su-thi-dam-san.mp3)",
    artSubject: "exhibit-podcast",
    expectedAssetFile: "/images/cinema/scene-dam-san-mat-troi.png",
  },
  {
    id: "exhibit-07-the-giai-ma-thu-cong",
    title: "Bộ sổ tay & Thẻ gỗ giải mã quy ước hóa trang Tuồng Huyện đường",
    category: "Sản phẩm thủ công",
    topicTitle: "Mã màu và nét mặt ước lệ (Huyện đường)",
    topicId: "chu-de-01-huyen-duong",
    authorNote: "Mẫu minh họa học liệu – Sản phẩm thủ công nhóm",
    isIllustrativeSample: true,
    ideaDescription:
      "Bộ thẻ tra cứu thủ công trình bày hệ thống thuật ngữ sân khấu Tuồng (ước lệ, cách điệu, nói lối, mặt nạ mã màu, râu ba chòm) dưới dạng thẻ xếp quạt tiện dụng khi học Huyện đường.",
    makingProcess: [
      "Bước 1: Hệ thống hóa các khái niệm và quy ước hóa trang từ kịch bản Huyện đường.",
      "Bước 2: Vẽ minh họa thủ công từng sắc diện Tri huyện, Đề lại, Lính lệ, Trùm Sò trên thẻ bìa bồi giấy ngà.",
      "Bước 3: Đóng quyển bằng dây gai truyền thống để lưu trữ tại góc học tập lớp.",
    ],
    materialsUsed: [
      "Bìa kraft định lượng 400gsm, giấy ngà",
      "Dây gai, khoen đồng cố định thẻ",
      "Mực vẽ và bút lông tỉa nét",
    ],
    videoStatusNote:
      "Khung video lật mở bộ thẻ thủ công (Tệp chờ cập nhật: /public/videos/exhibition/bo-the-thu-cong.mp4)",
    artSubject: "exhibit-mask-set",
    expectedAssetFile: "/images/cinema/scene-09-xuong-steam.png",
  },
];

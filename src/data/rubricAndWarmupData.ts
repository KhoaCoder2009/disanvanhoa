export interface RubricCriterion {
  id: string;
  title: string;
  steamTag: string;
  weightPercent: number;
  goodDesc: string;
  fairDesc: string;
  needsWorkDesc: string;
}

export interface WarmupQuestion {
  id: string;
  number: number;
  question: string;
  options: { key: "A" | "B" | "C" | "D"; text: string }[];
  correctKey: "A" | "B" | "C" | "D";
  feedback: string;
}

export const WARMUP_CHATGPT_META = {
  badge: "HOẠT ĐỘNG KHỞI ĐỘNG • 5–7 PHÚT • CHƯA ĐỌC VĂN BẢN",
  title: "PHIÊN XỬ KÌ LẠ – AI CÓ NHẬN RA SỰ THẬT?",
  subtitle:
    "Một vụ kiện tại công đường xưa... Người dân đến cửa quan để tìm công lí. Nhưng điều gì có thể xảy ra phía sau cánh cửa công đường? Hãy thử tài phán đoán qua 3 câu hỏi tình huống và phản biện nhận định của AI trước khi bước vào văn bản Huyện đường.",
  chatgptUrl: "https://chatgpt.com/share/6b051f99-2164-83ec-a884-925b4f2a0e2c",
  questions: [
    {
      id: "warmup-q1",
      number: 1,
      question:
        "Một người dân mang đơn đến công đường để kêu oan. Theo em, người có trách nhiệm xử kiện cần làm gì trước tiên?",
      options: [
        { key: "A", text: "Nghe và xem xét chứng cứ của các bên" },
        { key: "B", text: "Yêu cầu người dân nộp tiền trước" },
        { key: "C", text: "Tin ngay lời người có chức quyền" },
        { key: "D", text: "Tìm cách kết thúc vụ việc thật nhanh" },
      ],
      correctKey: "A",
      feedback:
        "Chính xác! Người xử kiện công minh phải lắng nghe và xem xét chứng cứ khách quan của các bên trước khi phán xét.",
    },
    {
      id: "warmup-q2",
      number: 2,
      question:
        "Nếu người có quyền lực lợi dụng chức vụ để vòi vĩnh người dân, điều gì đáng phê phán nhất?",
      options: [
        { key: "A", text: "Người dân không biết cách trình bày" },
        { key: "B", text: "Sự lạm quyền và trục lợi cá nhân" },
        { key: "C", text: "Công việc ở công đường quá nhiều" },
        { key: "D", text: "Người dân đến kiện quá đông" },
      ],
      correctKey: "B",
      feedback:
        "Đúng rồi! Dùng quyền lực công để mưu lợi riêng làm mất công bằng và gây bất bình cho người dân.",
    },
    {
      id: "warmup-q3",
      number: 3,
      question:
        "Theo em, cách nào có thể phê phán thói xấu của những kẻ có quyền lực một cách sâu cay?",
      options: [
        { key: "A", text: "Kể lại sự việc bằng giọng trung tính" },
        { key: "B", text: "Ca ngợi những người có chức quyền" },
        { key: "C", text: "Dùng tiếng cười, sự hài hước và châm biếm" },
        { key: "D", text: "Im lặng trước những điều sai trái" },
      ],
      correctKey: "C",
      feedback:
        "Chính xác! Tiếng cười hài hước, châm biếm giúp vạch trần thói hư tật xấu một cách sắc bén và sâu cay — cũng là tinh thần của tuồng đồ dân gian.",
    },
  ] as WarmupQuestion[],
  aiDebate: {
    badge: "TÍCH HỢP AI • THỬ THÁCH PHẢN BIỆN",
    statement:
      "“Một người có vẻ ngoài đạo mạo, ngồi ở vị trí quyền lực thì chắc chắn là người chính trực.”",
    promptQuestion: "Em đồng ý hay không đồng ý? Vì sao?",
    stances: ["Đồng ý", "Không đồng ý", "Chưa thể kết luận"] as const,
    guidingQuestion:
      "Vậy làm thế nào để nhận ra bản chất thật sự của một con người? Liệu vẻ ngoài và chức danh có phản ánh đúng phẩm chất bên trong?",
    lessonBridge:
      "Trong sân khấu tuồng, nhân vật không chỉ được nhận diện qua lời nói, hành động mà còn được thể hiện bằng hình thức nghệ thuật ước lệ, cách điệu. Có những nhân vật mang dáng vẻ đường bệ, đạo mạo nhưng bản chất lại hoàn toàn trái ngược. Hôm nay, chúng ta sẽ cùng khám phá điều thú vị ấy qua trích đoạn Huyện đường (trích tuồng Nghêu, Sò, Ốc, Hến), đồng thời vận dụng hiểu biết về nhân vật để thiết kế những chiếc mặt nạ tuồng độc đáo.",
  },
};

export const RUBRIC_META = {
  badge: "ĐÁNH GIÁ ĐA CHIỀU • SỐ HÓA TRÊN WEBSITE",
  title: "RUBRIC ĐÁNH GIÁ SẢN PHẨM & NĂNG LỰC HỌC SINH",
  subtitle:
    "Thang đo Rubric 4 tiêu chí được tích hợp trực tiếp để giáo viên và học sinh chấm điểm trực tuyến, đánh giá chéo giữa 4 Tổ và tự động xuất kết quả tổng hợp.",
};

export const RUBRIC_CRITERIA: RubricCriterion[] = [
  {
    id: "van-hoc",
    title: "1. Chiều sâu Văn học",
    steamTag: "Science & Language",
    weightPercent: 35,
    goodDesc:
      "Trích dẫn chính xác lời xưng danh/đối thoại trong SGK; phân tích sâu bản chất, tính cách và thủ đoạn nhân vật; nhận diện được tính ước lệ, tính biểu cảm của ngôn ngữ sân khấu và giải thích lựa chọn tạo hình bằng căn cứ văn bản/nguồn đáng tin cậy.",
    fairDesc:
      "Trích dẫn cơ bản đúng; nhận diện được tính cách nhân vật nhưng phân tích còn khái quát; giải thích tạo hình có liên hệ văn bản nhưng chưa sâu.",
    needsWorkDesc:
      "Trích dẫn thiếu/sai; hiểu sai nhân vật; tạo hình tùy tiện, không có căn cứ văn bản; khẳng định quy ước màu sắc tuồng khi không có nguồn xác thực.",
  },
  {
    id: "ky-thuat",
    title: "2. Kỹ thuật mặt nạ STEAM",
    steamTag: "Engineering & Math",
    weightPercent: 30,
    goodDesc:
      "Mặt nạ cân đối theo tỉ lệ thiết kế; kích thước phù hợp người đeo; lỗ mắt, lỗ thở hợp lí; quai đeo chắc; người diễn nhìn, nói và cử động thoải mái, an toàn; hoàn thiện thẩm mĩ; có thử nghiệm và cải tiến.",
    fairDesc:
      "Mặt nạ cơ bản chắc chắn, sử dụng được; có lỗi nhỏ về độ vừa vặn, tầm nhìn hoặc hoàn thiện; đã thử nghiệm nhưng điều chỉnh chưa triệt để.",
    needsWorkDesc:
      "Mặt nạ méo, dễ hỏng; che khuất tầm nhìn/khó thở; quai đeo lỏng hoặc có cạnh sắc; không thử nghiệm hoặc không khắc phục lỗi mất an toàn.",
  },
  {
    id: "dien-xuat",
    title: "3. Diễn xuất & Thuyết minh",
    steamTag: "Art & Communication",
    weightPercent: 20,
    goodDesc:
      "Phần vi diễn chung thể hiện đúng tình huống, nhân vật; lời thoại rõ, giọng điệu/động tác phù hợp, tạo được sắc thái châm biếm. Đại diện tổ thuyết minh mạch lạc, nêu được căn cứ văn bản, ý tưởng tạo hình và cải tiến; phần giới thiệu trực tiếp gọn, đúng thời lượng đã giao.",
    fairDesc:
      "Diễn đúng phần lớn lời thoại nhưng biểu cảm/động tác còn hạn chế; thuyết minh đủ ý nhưng còn phụ thuộc ghi chú hoặc chưa giải thích rõ căn cứ tạo hình.",
    needsWorkDesc:
      "Quên/sai lời thoại; diễn xuất thiếu phối hợp; thuyết minh rời rạc, không nêu được căn cứ văn bản hoặc không làm rõ sản phẩm.",
  },
  {
    id: "chuyen-doi-so",
    title: "4. Ứng dụng Chuyển đổi số",
    steamTag: "Technology & Collaboration",
    weightPercent: 15,
    goodDesc:
      "Chủ động khai thác website qua 01 QR chung; hợp tác tạo và lưu hồ sơ số; ảnh/video rõ, đúng nội dung; nộp đúng hạn vào Google Drive; tham gia phản hồi/đánh giá chéo theo công cụ GV tổ chức; ghi nguồn, khai báo AI và bảo đảm quyền riêng tư.",
    fairDesc:
      "Có truy cập website và nộp sản phẩm qua Drive; hồ sơ số cơ bản đầy đủ nhưng chất lượng tệp hoặc sự tham gia của một số thành viên chưa đồng đều; khai báo nguồn/AI còn thiếu.",
    needsWorkDesc:
      "Không khai thác học liệu số hoặc không nộp/ nộp muộn; thiếu minh chứng; không tham gia phản hồi; không ghi nguồn, không khai báo AI hoặc vi phạm quyền riêng tư.",
  },
];

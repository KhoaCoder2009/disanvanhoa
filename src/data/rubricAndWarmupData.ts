export interface RubricCriterion {
  id: string;
  title: string;
  steamTag: string;
  weightPercent: number;
  goodDesc: string;
  fairDesc: string;
  needsWorkDesc: string;
}

export const WARMUP_CHATGPT_META = {
  badge: "HOẠT ĐỘNG KHỞI ĐỘNG • KẾT NỐI AI HỌC TẬP",
  title: "KHỞI ĐỘNG CÙNG TRỢ LÝ CHATGPT",
  subtitle:
    "Trước khi bước vào giải mã văn bản và chế tác mặt nạ Tuồng đồ Huyện đường, học sinh thực hiện nhiệm vụ khởi động nhanh theo link ChatGPT của giáo viên để kích hoạt tư duy về sân khấu trào phúng dân gian.",
  chatgptUrl: "https://chatgpt.com/",
  samplePrompt:
    "Đóng vai một nghệ nhân Tuồng cổ Việt Nam, hãy đặt 3 câu đố ngắn giúp học sinh lớp 10 đoán tính cách của 4 nhân vật trong trích đoạn 'Huyện đường' (Tri huyện, Đề lại, Lính lệ, Trùm Sò) dựa trên màu sắc mặt nạ và dáng lông mày ước lệ. Chưa tiết lộ đáp án ngay, chờ học sinh trả lời từng câu.",
  warmupSteps: [
    {
      step: "Bước 01",
      title: "Mở phiên Khởi động ChatGPT",
      detail:
        "Nhấp nút mở ChatGPT (hoặc dán câu lệnh gợi ý của giáo viên) để tương tác hỏi – đáp nhanh trong 3 phút đầu tiết học.",
    },
    {
      step: "Bước 02",
      title: "Đoán mã màu & thần thái vai Tuồng",
      detail:
        "Quan sát gợi ý về màu trắng mốc, đen nâu, đỏ hề tuồng, vàng nhợt và dự đoán bản chất từng nhân vật chốn công đường.",
    },
    {
      step: "Bước 03",
      title: "Kết nối vào nhiệm vụ 4 Tổ Lớp 10.3",
      detail:
        "Chốt từ khóa tính cách của nhân vật Tổ mình đảm nhận (Tri huyện / Đề lại / Lính lệ / Trùm Sò) để bắt đầu thiết kế bản vẽ mặt nạ.",
    },
  ],
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

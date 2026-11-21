import { ExternalLinkItem } from "@/types/heritage";

/**
 * TỆP CẤU HÌNH LIÊN KẾT NGOÀI & THÔNG TIN QUẢN TRỊ
 * Giáo viên chỉ cần cập nhật đường dẫn (url) tại tệp này mà không cần chỉnh sửa mã nguồn giao diện.
 * Khi url để trống (""), giao diện sẽ tự động hiển thị trạng thái "Giáo viên sẽ cập nhật" và không tạo liên kết lỗi.
 */
export const SITE_CONFIG = {
  brand: {
    vietnameseName: "DI SẢN VĂN HỌC VIỆT",
    englishName: "Digital Literature & STEAM Heritage",
    slogan: "Từ trang sách đến không gian di sản – Từ tri thức đến sáng tạo.",
    educationalPurpose:
      "Học liệu số phục vụ dạy học Ngữ văn THPT theo định hướng STEM/STEAM, nghiên cứu văn học, khám phá văn hóa, trải nghiệm sáng tạo, tổ chức triển lãm số và lưu trữ minh chứng phục vụ nghiên cứu sáng kiến.",
  },
  teacherInfo: {
    teacherName: "Giáo viên Ngữ văn THPT (Cập nhật tại src/config/externalLinks.ts)",
    schoolUnit: "Tổ Ngữ văn – Trường THPT (Cập nhật đơn vị công tác)",
    academicYear: "Năm học 2026 – 2027",
    contactNote: "Mọi tư liệu học tập và sản phẩm học sinh được quản lý, kiểm duyệt bởi giáo viên phụ trách trước khi công bố.",
  },
  externalTools: [
    {
      id: "padlet-board",
      title: "Bảng chia sẻ học tập Padlet",
      toolName: "Padlet",
      purpose: "Nơi các nhóm đăng tải bản phác thảo mặt nạ Tuồng, sơ đồ hộp kể chuyện sử thi và nhật ký chế tạo theo từng tuần.",
      url: "",
      placeholderStatus: "Giáo viên sẽ cập nhật",
      configKeyName: "externalTools[0].url (Padlet)",
    },
    {
      id: "google-forms-submission",
      title: "Biểu mẫu nộp sản phẩm & Tự đánh giá",
      toolName: "Google Forms",
      purpose: "Phiếu thu nhận hồ sơ dự án STEAM, liên kết video vi diễn và phiếu đánh giá đồng đẳng của các nhóm học tập.",
      url: "",
      placeholderStatus: "Giáo viên sẽ cập nhật",
      configKeyName: "externalTools[1].url (Google Forms)",
    },
    {
      id: "question-box",
      title: "Khu vực đặt câu hỏi nghiên cứu",
      toolName: "Biểu mẫu Câu hỏi",
      purpose: "Tiếp nhận các thắc mắc của học sinh về ngữ liệu văn bản, kỹ thuật tạo hình và quy trình thực hành STEAM.",
      url: "",
      placeholderStatus: "Giáo viên sẽ cập nhật",
      configKeyName: "externalTools[2].url (Khu vực đặt câu hỏi)",
    },
    {
      id: "peer-feedback",
      title: "Khu vực nhận xét và góp ý sản phẩm",
      toolName: "Phiếu Phản biện",
      purpose: "Kênh gửi nhận xét theo Rubric sau buổi thuyết trình Nói và Nghe trên lớp (có kiểm duyệt của giáo viên).",
      url: "",
      placeholderStatus: "Giáo viên sẽ cập nhật",
      configKeyName: "externalTools[3].url (Nhận xét & góp ý)",
    },
    {
      id: "quizizz-practice",
      title: "Trò chơi giải mã tri thức văn học",
      toolName: "Quizizz",
      purpose: "Hệ thống câu hỏi tương tác kiểm tra kiến thức nền về Chèo, Tuồng, Múa rối nước và Sử thi Tây Nguyên.",
      url: "",
      placeholderStatus: "Giáo viên sẽ cập nhật",
      configKeyName: "externalTools[4].url (Quizizz)",
    },
  ] satisfies ExternalLinkItem[],
};

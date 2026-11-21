---
name: DI SẢN VĂN HỌC VIỆT (Digital Literature & STEAM Heritage)
description: Không gian bảo tàng học liệu số và xưởng sáng tạo Ngữ văn STEAM THPT.
colors:
  wood-dark: "#7A1C18"
  wood-light: "#96241F"
  gold-antique: "#C59B27"
  gold-soft: "#F5E1A4"
  crimson: "#B91C1C"
  moss: "#2E6F40"
  ivory: "#FFFFFF"
  ivory-light: "#FDF8F6"
  ivory-deep: "#F9ECE8"
  ink: "#2B1816"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "3.35rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.35
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.04em"
  caption:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.35
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.lg}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.gold-antique}"
    textColor: "{colors.wood-dark}"
  button-secondary:
    backgroundColor: "{colors.wood-light}"
    textColor: "{colors.gold-soft}"
    rounded: "{rounded.lg}"
    padding: "14px 24px"
  card-museum:
    backgroundColor: "{colors.ivory-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: DI SẢN VĂN HỌC VIỆT

## Overview

**Creative North Star: "Không gian Kiến trúc Bảo tàng & Thủy đình Sân khấu Dân gian"**

Hệ thống thiết kế của **DI SẢN VĂN HỌC VIỆT (Digital Literature & STEAM Heritage)** tái hiện cảm giác bước vào một bảo tàng di sản văn hóa Việt Nam đương đại: nơi sắc trầm của khung gỗ lim (`#2D211B`, `#50372A`), ánh kim của vàng cổ (`#A77B3D`, `#D6B77E`) và sắc đỏ son truyền thống (`#7A2925`) bao bọc lấy mặt giấy dó ngà ấm (`#F2E8D5`). Thay vì sử dụng bố cục phẳng của các trang học trực tuyến thông thường, giao diện phân chia thành các không gian trưng bày đối xứng có chiều sâu như các gian phòng bảo tàng, dẫn dắt học sinh từ thưởng lãm văn bản Ngữ văn đến thực hành chế tác tại Xưởng sáng tạo STEAM.

Mọi thành phần thị giác đều ưu tiên tính trang trọng, rõ ràng và minh bạch học thuật: các khung tranh đồ họa minh họa luôn đi kèm nhãn định danh tệp tư liệu để giáo viên dễ dàng cập nhật; các thẻ sản phẩm được đóng khung như tủ trưng bày có phân loại danh mục rõ ràng.

**Key Characteristics:**
- Sự đối lập có nhịp điệu giữa các khu vực nền **Nâu gỗ trầm** (Hero Banner, Chủ đề trọng điểm Huyện đường, Xưởng STEAM, Khu Phản hồi & Chia sẻ, Footer) và các khu vực nền **Giấy ngà ấm** (Bảo tàng số, Triển lãm số, Diễn đàn học tập).
- Nghệ thuật chữ kết hợp **Noto Serif** trang trọng cho hệ thống tiêu đề phòng trưng bày và **Be Vietnam Pro** chuẩn dấu tiếng Việt cho nội dung học liệu.
- Khung đồ họa vector hình học (`HeritageArtwork`) mô phỏng kiến trúc thủy đình, quạt chèo, bộ tứ mặt nạ tuồng và hộp kể chuyện 3 lớp cảnh kèm nhãn đường dẫn tệp.

## Colors

Bảng màu lấy cảm hứng trực tiếp từ chất liệu sơn mài, gỗ lim, giấy dó và sắc màu hóa trang sân khấu truyền thống Việt Nam.

### Primary
- **Đỏ Son Sân Khấu** (`#7A2925`): Màu nhấn chủ đạo cho các nút hành động chính (`KHÁM PHÁ BẢO TÀNG`, `KHÁM PHÁ CHỦ ĐỀ`), huy hiệu trạng thái "Đang triển khai", và khu vực Lời mời tham gia.

### Secondary
- **Vàng Cổ Điển** (`#A77B3D`) & **Vàng Nhạt Ánh Kim** (`#D6B77E`): Dùng cho hệ thống đường viền khung bảo tàng, chữ nhấn trên nền gỗ trầm, thanh cuộn và trạng thái hover.

### Tertiary
- **Xanh Rêu Cổ Đồ** (`#435647`): Dùng cho nhãn trạng thái "Dự kiến phát triển", nhãn "Mẫu minh họa" và các điểm nhấn phân loại học thuật.

### Neutral
- **Nâu Gỗ Trầm** (`#2D211B`): Nền chủ đạo của Header, Hero Banner, Xưởng sáng tạo STEAM, thẻ Chủ đề 01 và Footer.
- **Nâu Gỗ Sáng** (`#50372A`): Nền các thẻ con, hộp thông tin trên bề mặt gỗ trầm.
- **Trắng Giấy Ngà** (`#F2E8D5`), **Giấy Ngà Sáng** (`#F8F2E6`) & **Giấy Ngà Đậm** (`#E6D7BC`): Hệ nền chính của trang chủ và các thẻ trưng bày bảo tàng.
- **Mực Nâu Chính** (`#45352B`): Màu chữ nội dung chính trên nền giấy ngà, đảm bảo độ tương phản cao và êm mắt khi đọc lâu.

### Named Rules
**The Wood-and-Ivory Rhythm Rule.** Các khu vực trên trang chủ luân phiên giữa nền Giấy ngà (`#F2E8D5` / `#F8F2E6`) và nền Nâu gỗ trầm (`#2D211B`) để tạo nhịp điệu không gian như đi qua từng sảnh bảo tàng.
**The Honest Provenance Rule.** Không bao giờ dùng màu xám trung tính vô hồn; mọi chữ phụ trên nền gỗ trầm đều dùng sắc Vàng nhạt (`#D6B77E`) hoặc Trắng giấy ngà giảm độ đục.

## Typography

**Display Font:** Noto Serif (với Georgia, Cambria làm dự phòng)
**Body Font:** Be Vietnam Pro (với system-ui, sans-serif làm dự phòng)
**Label/Mono Font:** Hệ font monospace chuẩn cho nhãn đường dẫn tệp tư liệu (`/images/...`)

**Character:** Sự kết hợp giữa nét chữ có chân cổ điển, giàu chất văn chương của Noto Serif và cấu trúc hiện đại, thoáng đãng, tối ưu hóa dấu tiếng Việt của Be Vietnam Pro.

### Hierarchy
- **Display** (700, `3.35rem`, line-height `1.15`): Tiêu đề chính `DI SẢN VĂN HỌC VIỆT` trên Hero Banner.
- **Headline** (700, `2.25rem`, line-height `1.25`): Tiêu đề của 5 khu vực chính trên trang chủ.
- **Title** (700, `1.5rem`, line-height `1.35`): Tiêu đề các phòng trưng bày (`HỒN CHÈO`, `SẮC TUỒNG`, `HỒN NƯỚC`), tên chủ đề học tập và tiêu đề thẻ triển lãm.
- **Body** (400/500, `1rem`, line-height `1.65`, độ rộng dòng `65–75ch`): Đoạn văn giới thiệu, mô tả ý tưởng và hướng dẫn thảo luận.
- **Label** (600, `0.75rem`, letter-spacing `0.04em`): Nhãn phân loại môn học, danh mục sản phẩm và trạng thái triển khai.

### Named Rules
**The Vietnamese Diacritic Clarity Rule.** Không viết hoa toàn bộ đối với các đoạn văn mô tả dài; giữ khoảng cách dòng tối thiểu `1.6` ở văn bản nội dung để dấu tiếng Việt luôn rõ nét.

## Layout

Giao diện sử dụng khung chứa trung tâm tối đa `1280px` (`max-w-7xl`) với khoảng đệm ngang linh hoạt (`16px` trên di động, `24px` trên máy tính bảng, `32px` trên máy tính để bàn).
- **Hero Banner**: Bố cục 12 cột bất đối xứng (6 cột tuyên ngôn thương hiệu & hành động bên trái, 6 cột khung sân khấu di sản bên phải).
- **Bảo tàng số & Triển lãm số**: Lưới 3 cột cân xứng (`lg:grid-cols-3`) trên màn hình lớn, thu gọn về 2 cột và 1 cột trên thiết bị nhỏ.
- **Chủ đề học tập**: Lưới 12 cột phân tách tỷ lệ `7:5` giữa Chủ đề 01 (Đang triển khai - nền gỗ trầm nổi bật) và Chủ đề 02 (Dự kiến phát triển - nền giấy ngà).
- **Xưởng sáng tạo STEAM**: Sơ đồ tiến trình 5 bước xếp ngang (`md:grid-cols-5`) kết hợp bảng chọn 5 thành tố `S – T – E – A – M` tương tác trực tiếp bên dưới.

## Elevation & Depth

Hệ thống kết hợp giữa phân lớp sắc độ (tonal layering) của các bề mặt giấy ngà/gỗ trầm và bóng đổ có hướng ấm áp cho các tủ trưng bày nổi bật và cửa sổ chi tiết (Modal).

### Shadow Vocabulary
- **Museum Ambient** (`box-shadow: 0 14px 34px -10px rgba(45, 33, 27, 0.16)`): Dùng cho thanh Header cố định và các thẻ chủ đề chính.
- **Cabinet Deep** (`box-shadow: 0 18px 40px -12px rgba(20, 14, 11, 0.45)`): Dùng cho các khối trưng bày trên nền gỗ trầm và hộp thoại Modal xem chi tiết.

### Named Rules
**The Single-Elevation Declaration Rule.** Các thẻ trưng bày thông thường trong lưới sử dụng viền mảnh vàng cổ (`1px solid rgba(167, 123, 61, 0.5)`) và hiệu ứng nâng nhẹ khi di chuột (`hover:-translate-y-1.5`) thay vì chồng chéo nhiều lớp bóng đổ nặng nề.

## Shapes

- **Bo góc thẻ trưng bày**: Sử dụng độ bo góc `16px` (`rounded-2xl`) cho toàn bộ thẻ phòng trưng bày, thẻ chủ đề, thẻ triển lãm và khung hội thoại.
- **Bo góc nút bấm và ô thông tin**: Sử dụng độ bo góc `12px` (`rounded-xl`) cho các nút hành động và hộp thông tin bên trong thẻ.
- **Nhãn danh mục (Pills)**: Sử dụng `rounded-full` cho các nút lọc danh mục sản phẩm triển lãm và huy hiệu trạng thái.

## Components

### Buttons
- **Shape:** Bo góc vừa phải (`12px` radius).
- **Primary:** Nền Đỏ son (`#7A2925`), chữ Trắng giấy ngà (`#F2E8D5`), viền mảnh Vàng nhạt (`#D6B77E`), đệm `14px 24px`.
- **Hover / Focus:** Chuyển nền sang Vàng cổ (`#A77B3D`) và chữ sang Nâu gỗ trầm (`#2D211B`), vòng focus rõ ràng `2px` màu Vàng nhạt.
- **Secondary:** Nền Nâu gỗ sáng (`#50372A`) hoặc Nâu gỗ trầm (`#2D211B`), chữ Vàng nhạt (`#D6B77E`), viền Vàng cổ (`#A77B3D`).

### Chips
- **Style:** Nền Giấy ngà (`#F2E8D5`), chữ Mực nâu (`#45352B`), viền Vàng cổ 40% (`border-heritage-goldAntique/40`), bo tròn `9999px`.
- **State:** Khi được chọn chuyển sang nền Đỏ son (`#7A2925`) và chữ Trắng giấy ngà (`#F2E8D5`).

### Cards / Containers
- **Corner Style:** Bo góc `16px` (`rounded-2xl`).
- **Background:** Giấy ngà sáng (`#F8F2E6`) trên nền Giấy ngà (`#F2E8D5`), hoặc Nâu gỗ sáng (`#50372A`) trên nền Nâu gỗ trầm (`#2D211B`).
- **Border:** Viền `1px` hoặc `2px` màu Vàng cổ (`#A77B3D`).
- **Internal Padding:** `24px` đến `32px`.

### Navigation
- **Header cố định (`sticky top-0 z-40`):** Nền Nâu gỗ trầm (`#2D211B`), chữ Trắng giấy ngà, mục đang hoạt động có nền Nâu gỗ sáng (`#50372A`) và chữ Vàng nhạt (`#D6B77E`). Trên điện thoại thu gọn thành nút đóng/mở menu trực quan.

### HeritageArtwork (Khung đồ họa minh họa di sản)
- **Đặc trưng:** Khung vector hình học 4 góc kỷ hà mạ vàng cổ trên nền gỗ trầm, minh họa từng chủ đề sân khấu (Chèo, Tuồng, Rối nước, Sử thi Ê-đê) và luôn kèm thanh nhãn định danh tệp ảnh ở chân khung để giáo viên dễ dàng cập nhật ảnh tư liệu thật.

## Do's and Don'ts

### Do:
- **Do** giữ đúng bảng màu di sản 8 sắc độ (`#2D211B`, `#50372A`, `#A77B3D`, `#D6B77E`, `#7A2925`, `#435647`, `#F2E8D5`, `#45352B`) trên mọi thành phần mới.
- **Do** hiển thị rõ nhãn "Mẫu minh họa" và đường dẫn tệp cần bổ sung khi chưa có ảnh tư liệu hoặc sản phẩm thật của học sinh.
- **Do** quản lý toàn bộ đường dẫn Padlet, Google Forms, Quizizz trong tệp `src/config/externalLinks.ts` và hiển thị trạng thái "Giáo viên sẽ cập nhật" khi URL để trống.

### Don't:
- **Don't** tự tạo số liệu thống kê giả (số lượng học sinh, số sản phẩm, lượt truy cập, giải thưởng hoặc bình luận giả).
- **Don't** sử dụng hình ảnh do AI sinh ra rồi gắn nhãn là tư liệu lịch sử hay hiện vật truyền thống nguyên bản.
- **Don't** tạo nút bấm chết hoặc dẫn tới liên kết lỗi khi giáo viên chưa cung cấp URL công cụ ngoài.

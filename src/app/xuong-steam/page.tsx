import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { SteamMakerspaceSection } from "@/components/SteamMakerspaceSection";
import { TiltSpotlightCard } from "@/components/effects/TiltSpotlightCard";
import { STEAM_MAKERSPACE_META } from "@/data/steamMakerspaceData";
import { ArrowRight, ClipboardList, ShieldCheck, Wrench } from "lucide-react";

const DIARY_FORMS = [
  {
    code: "PHIẾU 01",
    title: "Hồ sơ Giải mã Văn bản Ngữ văn",
    fields: [
      "Tên văn bản & Trích đoạn nghiên cứu (Huyện đường / Đăm Săn / Xúy Vân giả dại).",
      "Bảng trích xuất từ khóa: Lời thoại – Cử chỉ – Đặc điểm tính cách nhân vật.",
      "Ý tưởng chuyển hóa từ ngôn từ văn chương sang hình tượng thị giác (màu sắc, đường nét, lớp cảnh).",
    ],
  },
  {
    code: "PHIẾU 02",
    title: "Bản vẽ Thiết kế Kỹ thuật & Vật liệu",
    fields: [
      "Bản phác thảo tỉ lệ sản phẩm (trục đối xứng gương mặt hoặc sơ đồ 3 lớp hộp kể chuyện).",
      "Bảng mã màu sử dụng và giải thích ý nghĩa ước lệ của từng vùng màu.",
      "Danh mục vật liệu thủ công dự kiến (bìa carton, giấy can, màu acrylic, đèn LED pin).",
    ],
  },
  {
    code: "PHIẾU 03",
    title: "Nhật ký Chế tạo & Thử nghiệm tại Xưởng",
    fields: [
      "Bảng phân công nhiệm vụ cụ thể cho từng thành viên trong nhóm.",
      "Nhật ký hình ảnh 3 công đoạn: Tạo khung thô -> Lắp ghép/Bồi lớp -> Hoàn thiện màu sắc.",
      "Ghi nhận kết quả thử nghiệm (độ bền, độ xuyên sáng, tầm nhìn khi đeo vi diễn) và phương án cải tiến.",
    ],
  },
  {
    code: "PHIẾU 04",
    title: "Bản Thuyết minh & Kịch bản Vi diễn",
    fields: [
      "Bài giới thiệu sản phẩm 3 phút theo cấu trúc Nói và Nghe.",
      "Kịch bản phân cảnh vi diễn hoặc trình diễn kể chuyện sử thi kết hợp ánh sáng.",
      "Tổng hợp câu hỏi phản biện và tự đánh giá nhóm theo Rubric.",
    ],
  },
];

export default function XuongSteamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-heritage-ivory text-heritage-ink">
      <Header />

      <main className="flex-1">
        <PageBanner
          badge="KHU VỰC 03 • STEAM MAKERSPACE"
          title="XƯỞNG SÁNG TẠO NGỮ VĂN STEAM"
          subtitle={STEAM_MAKERSPACE_META.description}
          breadcrumbs={[{ label: "Xưởng STEAM" }]}
          accentVariant="makerspace"
          actions={
            <>
              <Link
                href="/chu-de-hoc-tap"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-5 py-3 text-sm font-semibold text-heritage-ivory border border-heritage-goldSoft/60 hover:bg-heritage-goldAntique hover:text-heritage-woodDark transition-colors"
              >
                <span>Chọn Chủ đề học tập</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/trien-lam-so"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-woodLight px-5 py-3 text-sm font-semibold text-heritage-goldSoft border border-heritage-goldAntique hover:bg-heritage-goldSoft hover:text-heritage-woodDark transition-colors"
              >
                <span>Xem mẫu sản phẩm Triển lãm</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          }
        />

        <SteamMakerspaceSection />

        {/* Bộ 4 Phiếu Nhật ký Dự án STEAM dành cho học sinh */}
        <section className="py-16 sm:py-20 bg-heritage-ivory border-b border-heritage-goldAntique/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5">
                <ClipboardList className="h-6 w-6 text-heritage-crimson" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heritage-woodDark">
                  BỘ HỒ SƠ &amp; NHẬT KÝ DỰ ÁN STEAM (4 PHIẾU HỌC TẬP)
                </h2>
              </div>
              <p className="mt-2.5 text-sm sm:text-base text-heritage-ink leading-relaxed">
                Mỗi nhóm học sinh sử dụng cấu trúc 4 phiếu dưới đây để ghi chép minh chứng học tập từ lúc đọc văn bản đến khi hoàn thiện sản phẩm trưng bày.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {DIARY_FORMS.map((form) => (
                <TiltSpotlightCard
                  key={form.code}
                  className="rounded-2xl bg-heritage-ivoryLight p-6 border border-heritage-goldAntique/50 shadow-museum"
                >
                  <div>
                    <span className="inline-block rounded-lg bg-heritage-woodDark px-3 py-1 text-xs font-semibold text-heritage-goldSoft">
                      {form.code}
                    </span>
                    <h3 className="mt-3 font-serif text-xl font-bold text-heritage-woodDark">
                      {form.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-heritage-ink">
                      {form.fields.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-crimson" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltSpotlightCard>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-heritage-woodDark p-6 sm:p-8 text-heritage-ivory border border-heritage-goldAntique shadow-cabinet">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <ShieldCheck className="h-7 w-7 text-heritage-goldSoft shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-heritage-ivory">
                      Nguyên tắc An toàn, Tiết kiệm &amp; Bền vững tại Xưởng STEAM
                    </h3>
                    <p className="mt-1.5 text-sm text-heritage-ivory/90 leading-relaxed">
                      Khuyến khích học sinh sử dụng bìa carton tái chế, giấy báo cũ để bồi mặt nạ, màu vẽ không độc hại và mạch đèn LED dùng pin tiểu AA/AAA an toàn. Mọi dụng cụ cắt trổ giấy cần được sử dụng trên tấm lót cắt dưới sự hướng dẫn của giáo viên.
                    </p>
                  </div>
                </div>
                <Link
                  href="/dien-dan-hoc-tap"
                  className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-5 py-3 text-xs sm:text-sm font-semibold text-heritage-ivory border border-heritage-goldSoft/60 hover:bg-heritage-goldAntique hover:text-heritage-woodDark transition-colors shrink-0"
                >
                  <Wrench className="h-4 w-4" />
                  <span>Gửi nhật ký qua Diễn đàn</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

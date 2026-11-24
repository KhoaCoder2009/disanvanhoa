import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Landmark } from "lucide-react";
import { SITE_CONFIG } from "@/config/externalLinks";
import { AuroraParticlesCanvas } from "./effects/AuroraParticlesCanvas";

export const CallToActionAndFooter: React.FC = () => {
  return (
    <>
      {/* PHẦN LỜI MỜI THAM GIA */}
      <section
        id="loi-moi-tham-gia"
        aria-labelledby="cta-invitation-heading"
        className="relative bg-heritage-crimson text-white py-12 sm:py-16 border-b-2 border-heritage-goldAntique overflow-hidden"
      >
        <AuroraParticlesCanvas variant="cta" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            id="cta-invitation-heading"
            className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white leading-snug"
          >
            DI SẢN KHÔNG CHỈ ĐỂ LƯU GIỮ, MÀ CÒN ĐỂ TIẾP NỐI
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-lg text-white/95 leading-relaxed">
            Mỗi trang kịch bản văn học dân gian đều ẩn chứa nguồn cảm hứng bất tận. Hãy bắt đầu hành trình giải mã văn hóa Tuồng đồ Huyện đường, thiết kế và chế tác sản phẩm sáng tạo của riêng bạn ngay hôm nay.
          </p>
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/#chu-de-hoc-tap"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-5 sm:px-7 py-3.5 text-xs sm:text-base font-bold text-heritage-crimson border-2 border-white shadow-cabinet transition-colors duration-200 hover:bg-heritage-woodDark hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Compass className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>KHÁM PHÁ CÁC CHỦ ĐỀ HỌC TẬP</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>

            <Link
              href="/trac-nghiem"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-heritage-woodDark px-5 sm:px-7 py-3.5 text-xs sm:text-base font-bold text-white border-2 border-heritage-goldAntique/80 shadow-cabinet transition-colors duration-200 hover:bg-white hover:text-heritage-crimson focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>THỬ SỨC TRẮC NGHIỆM DI SẢN</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="h-1 w-full heritage-ribbon-bar" aria-hidden="true" />

      {/* FOOTER */}
      <footer className="bg-heritage-woodDark text-heritage-ivory pt-10 pb-8 sm:pt-14 sm:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 border-b border-heritage-goldAntique/30 pb-10">
            {/* Cột 1: Tên website, Khẩu hiệu, Mục đích học tập */}
            <div className="md:col-span-7 space-y-3.5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-heritage-crimson text-heritage-goldSoft border border-heritage-goldAntique">
                  <Landmark className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="block font-serif text-xl font-bold text-heritage-ivory">
                    {SITE_CONFIG.brand.vietnameseName}
                  </span>
                  <span className="block text-xs text-heritage-goldSoft">
                    {SITE_CONFIG.brand.englishName}
                  </span>
                </div>
              </div>

              <p className="font-serif italic text-heritage-goldSoft text-base">
                &ldquo;{SITE_CONFIG.brand.slogan}&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-heritage-ivory/85 leading-relaxed">
                {SITE_CONFIG.brand.educationalPurpose}
              </p>
            </div>

            {/* Cột 2: Liên kết cuộn nhanh 5 chặng trên Scrolling Landing Page */}
            <div className="md:col-span-5 space-y-2.5">
              <h3 className="font-serif text-base font-bold text-heritage-goldSoft">
                Lộ trình Cuộn Trang chủ
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                <li>
                  <Link href="/#bao-tang-so" className="hover:text-heritage-goldSoft transition-colors">
                    1. Bảo tàng số (Tuồng đồ Huyện đường)
                  </Link>
                </li>
                <li>
                  <Link href="/#chu-de-hoc-tap" className="hover:text-heritage-goldSoft transition-colors">
                    2. Chủ đề học tập (Mặt nạ &amp; Sân khấu hóa)
                  </Link>
                </li>
                <li>
                  <Link href="/#xuong-steam" className="hover:text-heritage-goldSoft transition-colors">
                    3. Xưởng sáng tạo STEAM (Quy trình 5 bước)
                  </Link>
                </li>
                <li>
                  <Link href="/#trien-lam-so" className="hover:text-heritage-goldSoft transition-colors">
                    4. Triển lãm số (Sản phẩm học tập)
                  </Link>
                </li>
                <li>
                  <Link href="/#dien-dan-hoc-tap" className="hover:text-heritage-goldSoft transition-colors">
                    5. Diễn đàn học tập (Thảo luận &amp; Nói - Nghe)
                  </Link>
                </li>
                <li>
                  <Link href="/trac-nghiem" className="font-semibold text-heritage-goldSoft hover:text-white transition-colors">
                    6. Trắc nghiệm Di sản Văn học &amp; STEAM
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left text-xs text-heritage-ivory/75">
            <p>
              © {SITE_CONFIG.teacherInfo.academicYear} {SITE_CONFIG.brand.vietnameseName}. Phục vụ mục đích giáo dục và nghiên cứu sư phạm.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

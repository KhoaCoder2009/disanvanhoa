import React from "react";
import { BookOpen, Layers, Palette } from "lucide-react";
import { TiltSpotlightCard } from "./effects/TiltSpotlightCard";
import { HeritageStage3DCanvas } from "./effects/HeritageStage3DCanvas";
import { ScrollVisualCinema } from "./ScrollVisualCinema";

export const HeroSection: React.FC = () => {
  return (
    <>
      {/* 1. HÀNH TRÌNH THỊ GIÁC GHIM KHUNG HÌNH (Pinned Scroll-Scrubbed Visual Cinema) */}
      <ScrollVisualCinema />

      {/* 2. GIỚI THIỆU KHÔNG GIAN & SÂN KHẤU 3D TƯƠNG TÁC */}
      <section
        id="gioi-thieu-khong-gian"
        aria-label="Giới thiệu không gian Di sản và Sân khấu 3D"
        className="bg-heritage-ivoryLight border-b border-heritage-crimson/15 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Cột trái: Thông điệp & 3 trụ cột giá trị */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block rounded-full bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-heritage-crimson border border-heritage-crimson/25">
                  Kiến trúc học tập liên môn
                </span>
                <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-heritage-crimson tracking-tight">
                  MỘT KHÔNG GIAN – NHIỀU HÀNH TRÌNH KHÁM PHÁ
                </h2>
                <p className="mt-3 text-base text-heritage-ink leading-relaxed">
                  Kết nối mạch nguồn văn chương trong sách giáo khoa với phương pháp học tập trải nghiệm, nghiên cứu liên môn và thực hành chế tác.
                </p>
              </div>

              <div className="space-y-4">
                {/* Giá trị 1 */}
                <TiltSpotlightCard className="rounded-2xl bg-white p-5 border border-heritage-crimson/25 shadow-museum">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-heritage-crimson text-white">
                      <BookOpen className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                        Khám phá di sản văn học và văn hóa
                      </h3>
                      <p className="mt-1.5 text-sm text-heritage-ink leading-relaxed">
                        Tiếp cận các kiệt tác kịch hát dân gian (Chèo, Tuồng, Múa rối nước) và sử thi Tây Nguyên trong không gian trưng bày trực quan, giàu bản sắc văn hóa Việt Nam.
                      </p>
                    </div>
                  </div>
                </TiltSpotlightCard>

                {/* Giá trị 2 */}
                <TiltSpotlightCard className="rounded-2xl bg-white p-5 border border-heritage-crimson/25 shadow-museum">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-heritage-crimson text-white">
                      <Palette className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                        Học tập qua nghiên cứu và sáng tạo
                      </h3>
                      <p className="mt-1.5 text-sm text-heritage-ink leading-relaxed">
                        Vận dụng quy trình thiết kế kỹ thuật 5 bước STEAM để giải mã nhân vật, phác thảo bản vẽ, chế tạo mô hình thủ công, vi diễn và thuyết minh học thuật.
                      </p>
                    </div>
                  </div>
                </TiltSpotlightCard>

                {/* Giá trị 3 */}
                <TiltSpotlightCard className="rounded-2xl bg-white p-5 border border-heritage-crimson/25 shadow-museum">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-heritage-crimson text-white">
                      <Layers className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                        Kết nối di sản với đời sống hiện đại
                      </h3>
                      <p className="mt-1.5 text-sm text-heritage-ink leading-relaxed">
                        Đưa các giá trị thẩm mỹ truyền thống bước ra khỏi trang sách thông qua triển lãm số, infographic, podcast và các buổi đối thoại học thuật trên lớp.
                      </p>
                    </div>
                  </div>
                </TiltSpotlightCard>
              </div>
            </div>

            {/* Cột phải: Khung Không gian Sân khấu 3D Tương tác */}
            <div className="lg:col-span-6">
              <HeritageStage3DCanvas />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

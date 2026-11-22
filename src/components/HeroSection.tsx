import React from "react";
import { BookOpen, Layers, Palette } from "lucide-react";
import { TiltSpotlightCard } from "./effects/TiltSpotlightCard";
import { HeritageStage3DCanvas } from "./effects/HeritageStage3DCanvas";
import { ScrollVisualCinema } from "./ScrollVisualCinema";

export const HeroSection: React.FC = () => {
  return (
    <>
      {/* 1. HÀNH TRÌNH THỊ GIÁC GHIM KHUNG HÌNH (8 phân cảnh Huyện đường & Đăm Săn) */}
      <ScrollVisualCinema />

      {/* 2. GIỚI THIỆU KHÔNG GIAN & SÂN KHẤU 3D TƯƠNG TÁC */}
      <section
        id="gioi-thieu-khong-gian"
        aria-label="Giới thiệu không gian Di sản và Sân khấu 3D"
        className="bg-heritage-ivoryLight border-b border-heritage-crimson/15 py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block rounded-full bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-heritage-crimson border border-heritage-crimson/25">
                  Kiến trúc học tập liên môn • Ngữ văn 10
                </span>
                <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-heritage-crimson tracking-tight">
                  MỘT KHÔNG GIAN – HAI DỰ ÁN TRỌNG TÂM
                </h2>
                <p className="mt-3 text-sm sm:text-base text-heritage-ink leading-relaxed">
                  Kết nối hai tác phẩm tiêu biểu trong chương trình Ngữ văn 10 — Tuồng đồ{" "}
                  <strong>Huyện đường</strong> và Sử thi{" "}
                  <strong>Đăm Săn</strong> — với phương pháp học tập trải nghiệm, nghiên cứu liên môn và thực hành chế tác STEAM.
                </p>
              </div>

              <div className="space-y-4">
                {/* Trụ cột 1: Đỏ Son (Huyện đường & Đăm Săn) */}
                <TiltSpotlightCard className="rounded-2xl bg-white p-4 sm:p-5 border-l-4 border-heritage-crimson border border-heritage-crimson/20 shadow-museum">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-heritage-crimson text-white">
                      <BookOpen className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-xl font-bold text-heritage-woodDark">
                        Giải mã Tuồng Huyện đường &amp; Sử thi Đăm Săn
                      </h3>
                      <p className="mt-1.5 text-sm text-heritage-ink leading-relaxed">
                        Tiếp cận nghệ thuật hóa trang ước lệ của tứ đại nhân vật (Tri huyện, Đề lại, Lính lệ, Trùm Sò) và không gian nhà dài – Mặt Trời của người anh hùng Đăm Săn.
                      </p>
                    </div>
                  </div>
                </TiltSpotlightCard>

                {/* Trụ cột 2: Vàng Hổ Phách (Thực hành STEAM) */}
                <TiltSpotlightCard className="rounded-2xl bg-white p-4 sm:p-5 border-l-4 border-heritage-amber border border-heritage-amber/25 shadow-museum">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-heritage-amber text-white">
                      <Palette className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-xl font-bold text-heritage-woodDark">
                        Học tập qua nghiên cứu và chế tác STEAM
                      </h3>
                      <p className="mt-1.5 text-sm text-heritage-ink leading-relaxed">
                        Vận dụng quy trình 5 bước để chế tạo mặt nạ bìa cứng nhiều lớp (Huyện đường), sa bàn Hộp kể chuyện 3 lớp ánh sáng (Đăm Săn), vi diễn và thuyết minh học thuật.
                      </p>
                    </div>
                  </div>
                </TiltSpotlightCard>

                {/* Trụ cột 3: Xanh Đại Ngàn (Triển lãm & Trắc nghiệm) */}
                <TiltSpotlightCard className="rounded-2xl bg-white p-4 sm:p-5 border-l-4 border-heritage-emerald border border-heritage-emerald/25 shadow-museum">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-heritage-emerald text-white">
                      <Layers className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-xl font-bold text-heritage-woodDark">
                        Triển lãm số, Đối thoại &amp; Củng cố tri thức
                      </h3>
                      <p className="mt-1.5 text-sm text-heritage-ink leading-relaxed">
                        Đưa sản phẩm học tập bước ra khỏi trang sách thông qua Triển lãm số, Infographic, Podcast văn hóa Tây Nguyên, diễn đàn phản biện và ngân hàng Trắc nghiệm chuyên sâu.
                      </p>
                    </div>
                  </div>
                </TiltSpotlightCard>
              </div>
            </div>

            <div className="lg:col-span-6">
              <HeritageStage3DCanvas />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

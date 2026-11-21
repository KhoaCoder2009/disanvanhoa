"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, Film, BookMarked, Sparkles, MessageSquare, ExternalLink } from "lucide-react";
import { MUSEUM_SECTION_META, MUSEUM_WINGS } from "@/data/museumData";
import { MuseumWing } from "@/types/heritage";
import { HeritageArtwork } from "./HeritageArtwork";
import { TiltSpotlightCard } from "./effects/TiltSpotlightCard";

export const DigitalMuseumSection: React.FC = () => {
  const [selectedWing, setSelectedWing] = useState<MuseumWing | null>(null);

  return (
    <section
      id="bao-tang-so"
      aria-labelledby="museum-section-heading"
      className="py-16 sm:py-20 bg-heritage-ivory border-b border-heritage-goldAntique/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề Khu vực 1: BẢO TÀNG SỐ */}
        <div className="max-w-3xl">
          <h2
            id="museum-section-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-heritage-crimson tracking-tight"
          >
            {MUSEUM_SECTION_META.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-heritage-ink leading-relaxed">
            {MUSEUM_SECTION_META.description}
          </p>
        </div>

        {/* 4 Thẻ trưng bày (2×2 Grid): 2 phòng Dự án Huyện đường (Đỏ Son/Vàng) & 2 phòng Sử thi Đăm Săn (Xanh Đại Ngàn/Hổ Phách) */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {MUSEUM_WINGS.map((wing) => {
            const accent = wing.themeAccent || "crimson";
            const themeStyles =
              accent === "emerald"
                ? {
                    cardBorder: "border-heritage-emerald/35",
                    badge: "bg-heritage-emeraldSoft text-heritage-emerald",
                    subtitle: "text-heritage-emerald",
                    dot: "bg-heritage-emerald",
                    btn: "bg-heritage-emerald border-heritage-emerald hover:bg-heritage-woodDark focus-visible:ring-heritage-emerald",
                  }
                : accent === "amber"
                ? {
                    cardBorder: "border-heritage-amber/35",
                    badge: "bg-heritage-amberSoft text-heritage-amber",
                    subtitle: "text-heritage-amber",
                    dot: "bg-heritage-amber",
                    btn: "bg-heritage-amber border-heritage-amber hover:bg-heritage-woodDark focus-visible:ring-heritage-amber",
                  }
                : accent === "bronze"
                ? {
                    cardBorder: "border-heritage-bronze/35",
                    badge: "bg-heritage-ivoryDeep text-heritage-woodDark",
                    subtitle: "text-heritage-bronze",
                    dot: "bg-heritage-bronze",
                    btn: "bg-heritage-woodDark border-heritage-woodDark hover:bg-heritage-crimson focus-visible:ring-heritage-woodDark",
                  }
                : {
                    cardBorder: "border-heritage-crimson/35",
                    badge: "bg-heritage-ivoryDeep text-heritage-crimson",
                    subtitle: "text-heritage-crimson",
                    dot: "bg-heritage-crimson",
                    btn: "bg-heritage-crimson border-heritage-crimson hover:bg-heritage-woodDark focus-visible:ring-heritage-crimson",
                  };

            return (
              <TiltSpotlightCard
                key={wing.id}
                className={`group rounded-2xl bg-heritage-ivoryLight border-2 ${themeStyles.cardBorder}`}
              >
                <div>
                  {/* Hình ảnh lớn của phòng trưng bày */}
                  <div
                    onClick={() => setSelectedWing(wing)}
                    className="block cursor-pointer"
                  >
                    <HeritageArtwork
                      subject={wing.artSubject}
                      expectedFile={wing.expectedAssetFile}
                      caption={wing.title}
                      className="aspect-[16/10] w-full"
                    />
                  </div>

                  {/* Nội dung phòng trưng bày */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-heritage-woodLight">
                      <span
                        className={`rounded-md px-2.5 py-1 font-semibold ${themeStyles.badge}`}
                      >
                        {wing.gradeReference}
                      </span>
                      <span className="font-mono text-[11px] font-bold text-heritage-ink/60">
                        {wing.code}
                      </span>
                    </div>

                    <h3 className="mt-3.5 font-serif text-2xl font-bold text-heritage-woodDark">
                      {wing.title}
                    </h3>
                    <p className={`mt-1 text-sm font-semibold ${themeStyles.subtitle}`}>
                      {wing.workReference}
                    </p>

                    <p className="mt-3 text-sm text-heritage-ink leading-relaxed">
                      {wing.shortDescription}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-heritage-crimson/15 pt-4 text-xs sm:text-sm text-heritage-ink">
                      {wing.highlights.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${themeStyles.dot}`}
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Nút hành động thực tế mở ngay trên Scrolling Landing Page */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedWing(wing)}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white border transition-colors duration-200 focus:outline-none focus-visible:ring-2 ${themeStyles.btn}`}
                  >
                    <span>{wing.buttonLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </TiltSpotlightCard>
            );
          })}
        </div>
      </div>

      {/* Cửa sổ xem chi tiết Phòng trưng bày Bảo tàng số */}
      {selectedWing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-heritage-woodDark/80 p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="museum-modal-title"
        >
          <div className="relative my-8 w-full max-w-3xl rounded-2xl bg-heritage-ivory border-2 border-heritage-goldAntique p-6 sm:p-8 text-heritage-ink shadow-cabinet max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-heritage-goldAntique/40 pb-4">
              <div>
                <span className="inline-block rounded-md bg-heritage-woodDark px-3 py-1 text-xs font-semibold text-heritage-goldSoft">
                  Không gian Bảo tàng số • {selectedWing.gradeReference}
                </span>
                <h3
                  id="museum-modal-title"
                  className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-heritage-woodDark"
                >
                  {selectedWing.title} — {selectedWing.subtitle}
                </h3>
                <p className="mt-1 text-sm font-semibold text-heritage-crimson">
                  {selectedWing.workReference}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedWing(null)}
                aria-label="Đóng không gian trưng bày"
                className="rounded-lg bg-heritage-woodDark p-2 text-heritage-goldSoft hover:bg-heritage-crimson hover:text-heritage-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <HeritageArtwork
                subject={selectedWing.artSubject}
                expectedFile={selectedWing.expectedAssetFile}
                caption={selectedWing.title}
                className="aspect-[16/9] w-full rounded-xl border border-heritage-goldAntique/50"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/40">
                  <div className="flex items-center gap-2 font-serif font-bold text-heritage-woodDark">
                    <BookMarked className="h-4 w-4 text-heritage-crimson" />
                    <h4>Giá trị văn hóa &amp; Lịch sử</h4>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed">
                    {selectedWing.detailContent.culturalContext}
                  </p>
                </div>

                <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/40">
                  <div className="flex items-center gap-2 font-serif font-bold text-heritage-woodDark">
                    <Sparkles className="h-4 w-4 text-heritage-crimson" />
                    <h4>Trọng tâm văn bản Ngữ văn 10</h4>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed">
                    {selectedWing.detailContent.literaryExcerptInfo}
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-heritage-ivoryLight p-5 border border-heritage-goldAntique/40">
                <h4 className="font-serif text-lg font-bold text-heritage-woodDark">
                  Đặc trưng nghệ thuật biểu diễn &amp; Ước lệ
                </h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {selectedWing.detailContent.artisticFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-heritage-crimson" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-heritage-woodDark p-5 text-heritage-ivory border border-heritage-goldAntique/50">
                <div className="flex items-center gap-2.5 text-heritage-goldSoft font-serif font-bold">
                  <Film className="h-5 w-5" />
                  <h4>Tư liệu Video Trích đoạn &amp; Kết nối STEAM</h4>
                </div>
                <p className="mt-2 text-sm text-heritage-ivory/90 leading-relaxed">
                  {selectedWing.detailContent.steamConnection}
                </p>
                <div className="mt-3 rounded-lg bg-heritage-woodLight/80 px-3.5 py-2.5 text-xs text-heritage-goldSoft border border-heritage-goldAntique/30">
                  Vị trí tích hợp video tư liệu của giáo viên: <code>/public/videos/museum/{selectedWing.id}.mp4</code>
                </div>
              </div>

              <div className="rounded-xl bg-heritage-ivoryDeep/70 p-4 border border-heritage-goldAntique/40">
                <div className="flex items-center gap-2 font-serif font-bold text-heritage-woodDark">
                  <MessageSquare className="h-4 w-4 text-heritage-moss" />
                  <h4>Câu hỏi gợi mở khám phá</h4>
                </div>
                <p className="mt-1.5 text-sm italic text-heritage-ink">
                  &ldquo;{selectedWing.detailContent.discussionPrompt}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-heritage-goldAntique/40 pt-4">
              <Link
                href={`/bao-tang-so/${selectedWing.id}`}
                onClick={() => setSelectedWing(null)}
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-5 py-2.5 text-sm font-semibold text-heritage-ivory hover:bg-heritage-woodDark transition-colors"
              >
                <span>Mở toàn trang phòng {selectedWing.title}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => setSelectedWing(null)}
                className="rounded-xl bg-heritage-woodLight px-5 py-2.5 text-sm font-semibold text-heritage-goldSoft hover:bg-heritage-woodDark transition-colors"
              >
                Đóng cửa sổ
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

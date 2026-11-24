"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  Eye,
  X,
  Film,
  Layers,
  Info,
  Hammer,
  Sparkles,
  Filter,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import {
  EXHIBITION_CATEGORIES,
  EXHIBITION_ITEMS,
  EXHIBITION_SECTION_META,
} from "@/data/exhibitionData";
import { ExhibitionCategory, ExhibitionItem } from "@/types/heritage";
import { HeritageArtwork } from "./HeritageArtwork";
import { TiltSpotlightCard } from "./effects/TiltSpotlightCard";
import { HuyenDuongStudentArchive } from "./HuyenDuongStudentArchive";

export const DigitalExhibitionSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ExhibitionCategory>("Tất cả");
  const [activeExhibit, setActiveExhibit] = useState<ExhibitionItem | null>(
    null
  );

  useEffect(() => {
    if (!activeExhibit) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveExhibit(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeExhibit]);

  const filteredItems = useMemo(() => {
    return EXHIBITION_ITEMS.filter((item) => {
      return (
        selectedCategory === "Tất cả" || item.category === selectedCategory
      );
    });
  }, [selectedCategory]);

  return (
    <section
      id="trien-lam-so"
      aria-labelledby="exhibition-section-heading"
      className="py-12 sm:py-16 lg:py-20 bg-heritage-ivory border-b border-heritage-goldAntique/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề Khu vực 4: TRIỂN LÃM SỐ */}
        <div className="max-w-3xl">
          <h2
            id="exhibition-section-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-heritage-crimson tracking-tight"
          >
            {EXHIBITION_SECTION_META.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-heritage-ink leading-relaxed">
            {EXHIBITION_SECTION_META.description}
          </p>
        </div>

        {/* Thông báo minh bạch học liệu (Mẫu minh họa) */}
        <div className="mt-6 flex items-start gap-3 rounded-xl bg-heritage-ivoryDeep/75 p-4 border border-heritage-goldAntique/50 text-xs sm:text-sm text-heritage-woodDark">
          <Info
            className="mt-0.5 h-5 w-5 shrink-0 text-heritage-crimson"
            aria-hidden="true"
          />
          <p className="leading-relaxed">
            {EXHIBITION_SECTION_META.sampleNotice}
          </p>
        </div>

        {/* Hồ sơ Sản phẩm Học sinh Dự án Huyện đường (5 đầu mục lớp & 4 nhóm) */}
        <HuyenDuongStudentArchive />

        {/* Bộ lọc theo loại sản phẩm */}
        <div className="mt-7 sm:mt-8 rounded-2xl bg-heritage-ivoryLight p-4 sm:p-5 border border-heritage-goldAntique/40">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-heritage-woodDark mb-3">
            <Filter className="h-4 w-4 text-heritage-crimson" />
            <span>Danh mục trưng bày Dự án Huyện đường:</span>
          </div>
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {EXHIBITION_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 whitespace-nowrap min-h-[38px] rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-heritage-crimson text-heritage-ivory border border-heritage-goldSoft shadow-sm"
                      : "bg-heritage-ivory text-heritage-ink border border-heritage-goldAntique/40 hover:bg-heritage-ivoryDeep"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Lưới Thẻ triển lãm dạng Phòng trưng bày bảo tàng */}
        {filteredItems.length === 0 ? (
          <div className="mt-10 rounded-2xl bg-heritage-ivoryLight p-10 text-center border border-heritage-goldAntique/40">
            <p className="font-serif text-xl font-bold text-heritage-woodDark">
              Chưa có sản phẩm nào khớp với danh mục hiện tại
            </p>
            <p className="mt-2 text-sm text-heritage-ink">
              Hãy chọn &ldquo;Tất cả&rdquo; danh mục để xem đầy đủ các hồ sơ sản phẩm Dự án Huyện đường.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("Tất cả");
              }}
              className="mt-4 rounded-xl bg-heritage-woodDark px-5 py-2.5 text-sm font-semibold text-heritage-goldSoft hover:bg-heritage-crimson hover:text-heritage-ivory transition-colors"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => {
              const groupDedicatedHref = item.id.includes("to-2")
                ? "/trien-lam-so/to-2"
                : item.id.includes("to-3")
                  ? "/trien-lam-so/to-3"
                  : item.id.includes("to-4")
                    ? "/trien-lam-so/to-4"
                    : null;
              const targetHref =
                groupDedicatedHref ||
                (item.topicId.includes("san-khau")
                  ? "/chu-de-hoc-tap/chu-de-02-san-khau-hoa"
                  : "/chu-de-hoc-tap/chu-de-01-huyen-duong");
              return (
              <TiltSpotlightCard
                key={item.id}
                className="group rounded-2xl bg-heritage-ivoryLight border border-heritage-goldAntique/50"
              >
                <div id={`exhibit-${item.id}`}>
                  <div className="relative">
                    <HeritageArtwork
                      subject={item.artSubject}
                      expectedFile={item.expectedAssetFile}
                      caption={item.title}
                      linkHref={targetHref}
                      linkLabel={item.title}
                      onQuickPreview={() => setActiveExhibit(item)}
                      className="aspect-[16/10] w-full"
                    />
                    <div className="pointer-events-none absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-1.5">
                      <span className="rounded-md bg-heritage-woodDark/90 px-2.5 py-1 text-[11px] font-semibold text-heritage-goldSoft border border-heritage-goldAntique/50">
                        {item.category}
                      </span>
                      {item.isIllustrativeSample ? (
                        <span className="rounded-md bg-heritage-moss/95 px-2.5 py-1 text-[11px] font-semibold text-heritage-ivory">
                          Mẫu minh họa
                        </span>
                      ) : (
                        <span className="rounded-md bg-heritage-crimson px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
                          Sản phẩm thật Lớp 10.3
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <p className="text-xs font-semibold text-heritage-crimson">
                      Chủ đề: {item.topicTitle}
                    </p>
                    <h3 className="mt-1.5 font-serif text-lg sm:text-xl font-bold text-heritage-woodDark leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-heritage-woodLight italic">
                      {item.authorNote}
                    </p>

                    <div className="mt-3 space-y-2.5 border-t border-heritage-goldAntique/30 pt-3 text-xs sm:text-sm text-heritage-ink">
                      <div>
                        <span className="font-semibold text-heritage-woodDark">
                          Mô tả ý tưởng:{" "}
                        </span>
                        <span className="line-clamp-3 leading-relaxed">
                          {item.ideaDescription}
                        </span>
                      </div>

                      <div className="rounded-lg bg-heritage-ivoryDeep/60 p-2.5">
                        <span className="font-semibold text-heritage-woodDark block text-xs">
                          Tóm tắt quá trình chế tạo:
                        </span>
                        <p className="mt-1 text-xs text-heritage-ink line-clamp-2">
                          {item.makingProcess.join(" • ")}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-heritage-woodLight">
                        <Film className="h-3.5 w-3.5 shrink-0 text-heritage-crimson" />
                        <span className="truncate">{item.videoStatusNote}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveExhibit(item)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-heritage-woodDark px-4 py-3 text-xs sm:text-sm font-semibold text-heritage-goldSoft border border-heritage-goldAntique/50 transition-colors duration-200 hover:bg-heritage-crimson hover:text-heritage-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson"
                  >
                    <Eye className="h-4 w-4" aria-hidden="true" />
                    <span>XEM NHANH</span>
                  </button>
                  {groupDedicatedHref && (
                    <Link
                      href={groupDedicatedHref}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-heritage-crimson px-4 py-3 text-xs sm:text-sm font-bold text-white transition-colors duration-200 hover:bg-heritage-woodDark focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson"
                    >
                      <span>TRANG RIÊNG TỔ</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </TiltSpotlightCard>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal Xem chi tiết Hồ sơ Sản phẩm Triển lãm số */}
      {activeExhibit && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveExhibit(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-heritage-woodDark/80 p-3 sm:p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="exhibit-modal-title"
        >
          <div className="relative my-2 sm:my-8 w-full max-w-3xl rounded-2xl bg-heritage-ivory border-2 border-heritage-goldAntique p-4 sm:p-8 text-heritage-ink shadow-cabinet max-h-[92dvh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3 sm:gap-4 border-b border-heritage-goldAntique/40 pb-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-heritage-woodDark px-3 py-1 text-xs font-semibold text-heritage-goldSoft">
                    {activeExhibit.category}
                  </span>
                  {activeExhibit.isIllustrativeSample ? (
                    <span className="rounded-md bg-heritage-moss px-3 py-1 text-xs font-semibold text-heritage-ivory">
                      Mẫu minh họa cấu trúc trưng bày
                    </span>
                  ) : (
                    <span className="rounded-md bg-heritage-crimson px-3 py-1 text-xs font-bold text-white">
                      Sản phẩm học sinh Lớp 10.3 — THPT Bình Phú
                    </span>
                  )}
                </div>
                <h3
                  id="exhibit-modal-title"
                  className="mt-2 font-serif text-xl sm:text-3xl font-bold text-heritage-woodDark"
                >
                  {activeExhibit.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-heritage-crimson">
                  Chủ đề: {activeExhibit.topicTitle}
                </p>
                <p className="mt-0.5 text-xs text-heritage-woodLight italic">
                  Thông tin nhóm/lớp: {activeExhibit.authorNote}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveExhibit(null)}
                aria-label="Đóng hồ sơ sản phẩm"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-heritage-woodDark text-heritage-goldSoft hover:bg-heritage-crimson hover:text-heritage-ivory"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <HeritageArtwork
                subject={activeExhibit.artSubject}
                expectedFile={activeExhibit.expectedAssetFile}
                caption={activeExhibit.title}
                className="aspect-[16/9] w-full rounded-xl border border-heritage-goldAntique/50"
              />

              <div className="rounded-xl bg-heritage-ivoryLight p-5 border border-heritage-goldAntique/40">
                <div className="flex items-center gap-2 font-serif text-lg font-bold text-heritage-woodDark">
                  <Sparkles className="h-5 w-5 text-heritage-crimson" />
                  <h4>Mô tả ý tưởng thiết kế &amp; Kết nối văn bản</h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  {activeExhibit.ideaDescription}
                </p>
              </div>

              <div className="rounded-xl bg-heritage-ivoryLight p-5 border border-heritage-goldAntique/40">
                <div className="flex items-center gap-2 font-serif text-lg font-bold text-heritage-woodDark">
                  <Hammer className="h-5 w-5 text-heritage-crimson" />
                  <h4>Quá trình chế tạo sản phẩm</h4>
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {activeExhibit.makingProcess.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-heritage-crimson" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/40">
                  <div className="flex items-center gap-2 font-serif font-bold text-heritage-woodDark">
                    <Layers className="h-4 w-4 text-heritage-moss" />
                    <h4>Vật liệu &amp; Học liệu sử dụng</h4>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs sm:text-sm">
                    {activeExhibit.materialsUsed.map((mat, i) => (
                      <li key={i}>• {mat}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-heritage-woodDark p-4 text-heritage-ivory border border-heritage-goldAntique/50">
                  <div className="flex items-center gap-2 font-serif font-bold text-heritage-goldSoft">
                    <Film className="h-4 w-4" />
                    <h4>Video &amp; Tài liệu sản phẩm</h4>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-heritage-ivory/90 leading-relaxed">
                    {activeExhibit.videoStatusNote}
                  </p>
                  {activeExhibit.videoUrl ? (
                    <div className="mt-3 overflow-hidden rounded-lg border border-heritage-goldAntique/40 bg-black">
                      <video
                        controls
                        preload="metadata"
                        playsInline
                        poster={activeExhibit.videoPoster}
                        className="aspect-video w-full object-contain"
                      >
                        <source src={activeExhibit.videoUrl} type="video/mp4" />
                      </video>
                    </div>
                  ) : (
                    <p className="mt-2 text-[11px] text-heritage-goldSoft/90">
                      Giáo viên cập nhật đường dẫn video tại{" "}
                      <code className="break-all">src/data/exhibitionData.ts</code>
                    </p>
                  )}
                  {activeExhibit.documentUrl && (
                    <a
                      href={activeExhibit.documentUrl}
                      download
                      className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-heritage-crimson px-3 py-1.5 text-xs font-semibold text-white hover:bg-white hover:text-heritage-woodDark transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Tải bản Word thuyết minh (.docx)</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end border-t border-heritage-goldAntique/40 pt-4">
              <button
                type="button"
                onClick={() => setActiveExhibit(null)}
                className="rounded-xl bg-heritage-woodDark px-6 py-2.5 text-sm font-semibold text-heritage-goldSoft hover:bg-heritage-crimson hover:text-heritage-ivory transition-colors"
              >
                Đóng hồ sơ trưng bày
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

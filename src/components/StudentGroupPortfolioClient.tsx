"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  Film,
  Hammer,
  Layers,
  Link2,
  Palette,
  PenTool,
  Sparkles,
  Users,
  X,
  ZoomIn,
} from "lucide-react";
import {
  HUYEN_DUONG_GROUPS_PORTFOLIO,
  HUYEN_DUONG_STUDENT_ARCHIVE_META,
  type StudentGroupPortfolio,
} from "@/data/studentProductsData";
import { TiltSpotlightCard } from "./effects/TiltSpotlightCard";

interface StudentGroupPortfolioClientProps {
  group: StudentGroupPortfolio;
}

export const StudentGroupPortfolioClient: React.FC<
  StudentGroupPortfolioClientProps
> = ({ group }) => {
  const [lightboxMedia, setLightboxMedia] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);
  const [revealedLinkKey, setRevealedLinkKey] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxMedia) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxMedia(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxMedia]);

  const currentIdx = HUYEN_DUONG_GROUPS_PORTFOLIO.findIndex(
    (g) => g.slug === group.slug
  );
  const prevGroup =
    currentIdx > 0
      ? HUYEN_DUONG_GROUPS_PORTFOLIO[currentIdx - 1]
      : HUYEN_DUONG_GROUPS_PORTFOLIO[HUYEN_DUONG_GROUPS_PORTFOLIO.length - 1];
  const nextGroup =
    currentIdx < HUYEN_DUONG_GROUPS_PORTFOLIO.length - 1
      ? HUYEN_DUONG_GROUPS_PORTFOLIO[currentIdx + 1]
      : HUYEN_DUONG_GROUPS_PORTFOLIO[0];

  const renderLinkOverlay = (
    key: string,
    sectionHref: string,
    sectionLabel: string
  ) => {
    if (revealedLinkKey !== key) return null;
    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute inset-0 z-20 flex flex-col justify-between bg-[#1F110E]/95 p-3.5 text-white"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-heritage-crimson px-2.5 py-0.5 text-[10px] font-bold">
            <Link2 className="h-3 w-3" />
            Đường dẫn trực tiếp
          </span>
          <button
            type="button"
            onClick={() => setRevealedLinkKey(null)}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 hover:bg-heritage-crimson"
            aria-label="Đóng bảng đường dẫn"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
        <code className="block truncate rounded bg-black/50 px-2.5 py-1.5 text-[11px] text-[#FDE68A]">
          {sectionHref}
        </code>
        <a
          href={sectionHref}
          onClick={() => setRevealedLinkKey(null)}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-heritage-crimson px-3 py-2 text-xs font-semibold text-white hover:bg-white hover:text-heritage-woodDark transition-colors"
        >
          <span>Đi tới {sectionLabel}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    );
  };

  return (
    <div id="noi-dung-chuyen-trang-to" className="bg-heritage-ivory">
      {/* Thanh chuyển đổi nhanh 4 Tổ & Mục lục chuyên trang */}
      <div className="sticky top-[58px] sm:top-[66px] z-30 bg-white/95 backdrop-blur-md border-b border-heritage-goldAntique/40 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5 lg:pb-0">
            <Link
              href="/trien-lam-so#kho-san-pham-hoc-sinh"
              className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-heritage-ivoryLight px-3 py-1.5 text-xs font-semibold text-heritage-woodDark border border-heritage-goldAntique/50 hover:bg-heritage-crimson hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Kho 4 Tổ</span>
            </Link>

            <span
              className="h-4 w-px bg-heritage-goldAntique/40 shrink-0"
              aria-hidden="true"
            />

            {HUYEN_DUONG_GROUPS_PORTFOLIO.map((item) => {
              const isCurrent = item.slug === group.slug;
              return (
                <Link
                  key={item.slug}
                  href={`/trien-lam-so/${item.slug}`}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    isCurrent
                      ? "bg-heritage-crimson text-white shadow-sm border border-heritage-crimson"
                      : "bg-heritage-ivory text-heritage-ink border border-heritage-goldAntique/40 hover:bg-heritage-ivoryDeep hover:text-heritage-crimson"
                  }`}
                >
                  <span>{item.groupName}</span>
                  <span
                    className={`text-[11px] ${
                      isCurrent ? "text-[#FDE68A]" : "text-heritage-crimson"
                    }`}
                  >
                    • {item.characterName}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs">
            <a
              href="#phan-nhan-vat-phan-cong"
              className="rounded-lg px-2.5 py-1 font-medium text-heritage-ink hover:bg-heritage-ivoryDeep hover:text-heritage-crimson transition-colors"
            >
              1. Phân công
            </a>
            <a
              href="#phan-mat-na-phac-thao"
              className="rounded-lg px-2.5 py-1 font-medium text-heritage-ink hover:bg-heritage-ivoryDeep hover:text-heritage-crimson transition-colors"
            >
              2. Mặt nạ &amp; Bản vẽ
            </a>
            <a
              href="#phan-thuyet-minh-word"
              className="rounded-lg px-2.5 py-1 font-medium text-heritage-ink hover:bg-heritage-ivoryDeep hover:text-heritage-crimson transition-colors"
            >
              3. Bản Word
            </a>
            <a
              href="#phan-video-hoat-dong"
              className="rounded-lg px-2.5 py-1 font-medium text-heritage-ink hover:bg-heritage-ivoryDeep hover:text-heritage-crimson transition-colors"
            >
              4. Video &amp; Ảnh nhóm
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        {/* PHẦN 1: HỒ SƠ NHÂN VẬT & PHÂN CÔNG THÀNH VIÊN TRONG TỔ */}
        <section
          id="phan-nhan-vat-phan-cong"
          className="scroll-mt-32 rounded-2xl bg-heritage-ivoryLight p-5 sm:p-8 border border-heritage-goldAntique/50 shadow-museum"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-heritage-goldAntique/35 pb-5">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-heritage-woodDark px-3 py-1 text-xs font-bold text-heritage-goldSoft">
                  CHUYÊN TRANG {group.groupName.toUpperCase()} • {group.classLabel.toUpperCase()}
                </span>
                <span className="rounded-md bg-heritage-crimson px-3 py-1 text-xs font-bold text-white">
                  {group.statusBadge}
                </span>
              </div>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-heritage-woodDark">
                1. Hồ sơ Nhân vật {group.characterName} &amp; Phân công {group.groupName}
              </h2>
            </div>

            <a
              href={HUYEN_DUONG_STUDENT_ARCHIVE_META.driveFolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-heritage-crimson border border-heritage-crimson/35 hover:bg-heritage-crimson hover:text-white transition-colors"
            >
              <span>Mở thư mục Google Drive dự án</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Cột trái: Ngữ cảnh văn học & Bảng mã màu */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl bg-heritage-ivory p-5 border border-heritage-goldAntique/40">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-crimson">
                  Ngữ liệu trích đoạn Huyện đường (Ngữ văn 10)
                </span>
                <blockquote className="mt-2 font-serif text-base sm:text-lg italic font-semibold text-heritage-woodDark border-l-4 border-heritage-crimson pl-3.5">
                  {group.classicQuote}
                </blockquote>
                <p className="mt-3 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                  {group.literaryContext}
                </p>
              </div>

              <div className="rounded-xl bg-heritage-ivory p-5 border border-heritage-goldAntique/40">
                <div className="flex items-center gap-2 font-serif text-base font-bold text-heritage-woodDark">
                  <Palette className="h-4 w-4 text-heritage-crimson" />
                  <h3>Bảng mã màu ước lệ trên mặt nạ {group.characterName}</h3>
                </div>
                <div className="mt-3 space-y-2.5">
                  {group.colorSwatches.map((swatch, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-lg bg-white p-2.5 border border-heritage-goldAntique/30"
                    >
                      <span
                        className="mt-0.5 h-6 w-6 shrink-0 rounded-full border border-heritage-woodDark/30 shadow-inner"
                        style={{ backgroundColor: swatch.hex }}
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-heritage-woodDark">
                          {swatch.label}{" "}
                          <code className="font-mono text-[10px] text-heritage-crimson">
                            {swatch.hex}
                          </code>
                        </p>
                        <p className="text-xs text-heritage-ink leading-snug">
                          {swatch.meaning}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cột phải: Bảng phân công 6 nhiệm vụ chi tiết của Tổ */}
            <div className="lg:col-span-7 rounded-xl bg-heritage-ivory p-5 border border-heritage-goldAntique/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-serif text-lg font-bold text-heritage-woodDark">
                    <Users className="h-5 w-5 text-heritage-crimson" />
                    <h3>Danh sách thành viên &amp; nhiệm vụ ({group.groupName})</h3>
                  </div>
                  <a
                    href={group.writtenScript.rosterDocxUrl}
                    download
                    className="inline-flex items-center gap-1 rounded-lg bg-heritage-woodDark px-3 py-1.5 text-[11px] font-semibold text-heritage-goldSoft hover:bg-heritage-crimson hover:text-white transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>File Phân công (.docx)</span>
                  </a>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-white p-3.5 border border-heritage-goldAntique/35">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-heritage-crimson">
                      1. Nghiên cứu nội dung &amp; lời thuyết minh
                    </span>
                    <p className="mt-1 text-sm font-semibold text-heritage-woodDark">
                      {group.roster.contentTeam}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-3.5 border border-heritage-goldAntique/35">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-heritage-crimson">
                      2. Thiết kế bản vẽ phác thảo tỷ lệ
                    </span>
                    <p className="mt-1 text-sm font-semibold text-heritage-woodDark">
                      {group.roster.sketchTeam}
                    </p>
                  </div>

                  <div className="sm:col-span-2 rounded-xl bg-white p-3.5 border border-heritage-goldAntique/35">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-heritage-crimson">
                      3. Chế tác mặt nạ 3D &amp; tô màu thủ công
                    </span>
                    <p className="mt-1 text-sm font-semibold text-heritage-woodDark">
                      {group.roster.craftTeam}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-3.5 border border-heritage-goldAntique/35">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-heritage-crimson">
                      4. Thuyết trình sản phẩm trên lớp
                    </span>
                    <p className="mt-1 text-sm font-semibold text-heritage-woodDark">
                      {group.roster.presenter}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-3.5 border border-heritage-goldAntique/35">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-heritage-crimson">
                      5. Quay dựng video &amp; chụp ảnh tư liệu
                    </span>
                    <p className="mt-1 text-sm font-semibold text-heritage-woodDark">
                      {group.roster.mediaTeam}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-heritage-woodDark p-3.5 text-heritage-ivory flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs sm:text-sm">
                  <strong className="text-heritage-goldSoft">
                    6. Đại diện {group.groupName} nhập vai diễn kịch chung của lớp:
                  </strong>{" "}
                  Vai {group.characterName} —{" "}
                  <span className="font-bold underline decoration-heritage-goldAntique underline-offset-4">
                    {group.roster.actor}
                  </span>
                </span>
                <span className="rounded bg-heritage-crimson px-2.5 py-0.5 text-[11px] font-bold text-white">
                  Sân khấu hóa Lớp 10.3
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PHẦN 2: MẶT NẠ HOÀN THIỆN & BẢN VẼ KỸ THUẬT TỶ LỆ */}
        <section
          id="phan-mat-na-phac-thao"
          className="scroll-mt-32 rounded-2xl bg-heritage-ivoryLight p-5 sm:p-8 border border-heritage-goldAntique/50 shadow-museum"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-heritage-goldAntique/35 pb-4">
            <div className="flex items-center gap-2.5">
              <PenTool className="h-6 w-6 text-heritage-crimson" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heritage-woodDark">
                2. Sản phẩm Mặt nạ &amp; Bản vẽ Kỹ thuật ({group.groupName})
              </h2>
            </div>
            <span className="text-xs font-medium text-heritage-crimson">
              Nhấn kính lúp để phóng to ảnh gốc • Nhấp vào ảnh để lấy link phần này
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Thẻ 2A: Mặt nạ hoàn thiện */}
            <TiltSpotlightCard className="rounded-2xl bg-heritage-ivory border border-heritage-goldAntique/50 overflow-hidden">
              <div
                onClick={() =>
                  setRevealedLinkKey(
                    revealedLinkKey === "mask-finished" ? null : "mask-finished"
                  )
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setRevealedLinkKey(
                      revealedLinkKey === "mask-finished"
                        ? null
                        : "mask-finished"
                    );
                  }
                }}
                className="relative aspect-[4/3] w-full bg-heritage-woodDark/95 flex items-center justify-center border-b border-heritage-goldAntique/40 cursor-pointer group overflow-hidden"
              >
                {group.maskProduct.finishedMaskUrl ? (
                  <>
                    <img
                      src={group.maskProduct.finishedMaskUrl}
                      alt={`Mặt nạ hoàn thiện ${group.characterName} - ${group.groupName}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-md bg-heritage-crimson px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                      Mặt nạ hoàn thiện • {group.groupName}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxMedia({
                          src: group.maskProduct.finishedMaskUrl,
                          title: `Mặt nạ ${group.characterName} hoàn thiện (${group.groupName} — Lớp 10.3)`,
                          caption: group.maskProduct.artisticAnalysis,
                        });
                      }}
                      className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1F110E]/85 text-[#FDE68A] hover:bg-heritage-crimson hover:text-white border border-heritage-goldAntique/50 transition-colors"
                      aria-label="Phóng to mặt nạ hoàn thiện"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <div className="p-6 text-center space-y-2">
                    <Sparkles className="mx-auto h-9 w-9 text-heritage-goldSoft" />
                    <p className="font-serif text-base font-bold text-heritage-goldSoft">
                      Mặt nạ {group.characterName} ({group.groupName})
                    </p>
                    <p className="text-xs text-heritage-ivory/80 max-w-sm">
                      Đang chờ {group.groupName} tải ảnh sản phẩm mặt nạ hoàn thiện lên thư mục{" "}
                      <code>{group.maskProduct.expectedDrivePath}</code>.
                    </p>
                  </div>
                )}
                {renderLinkOverlay(
                  "mask-finished",
                  `/trien-lam-so/${group.slug}#phan-mat-na-phac-thao`,
                  `Mặt nạ ${group.groupName}`
                )}
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-heritage-woodDark">
                  Sản phẩm Mặt nạ 3D nhân vật {group.characterName}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                  {group.maskProduct.artisticAnalysis}
                </p>
              </div>
            </TiltSpotlightCard>

            {/* Thẻ 2B: Bản vẽ phác thảo kỹ thuật (hoặc ảnh ra mắt sân khấu nếu chưa có bản vẽ) */}
            <TiltSpotlightCard className="rounded-2xl bg-heritage-ivory border border-heritage-goldAntique/50 overflow-hidden">
              <div
                onClick={() =>
                  setRevealedLinkKey(
                    revealedLinkKey === "mask-sketch" ? null : "mask-sketch"
                  )
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setRevealedLinkKey(
                      revealedLinkKey === "mask-sketch" ? null : "mask-sketch"
                    );
                  }
                }}
                className="relative aspect-[4/3] w-full bg-heritage-woodDark/95 flex items-center justify-center border-b border-heritage-goldAntique/40 cursor-pointer group overflow-hidden"
              >
                {group.maskProduct.sketchImageUrl ? (
                  <>
                    <img
                      src={group.maskProduct.sketchImageUrl}
                      alt={`Bản vẽ tỷ lệ mặt nạ ${group.characterName} - ${group.groupName}`}
                      className="h-full w-full object-contain bg-white p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-md bg-heritage-woodDark px-2.5 py-1 text-xs font-bold text-heritage-goldSoft shadow-sm">
                      Bản vẽ phác thảo tỷ lệ • {group.groupName}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxMedia({
                          src: group.maskProduct.sketchImageUrl,
                          title: `Bản vẽ phác thảo tỷ lệ mặt nạ ${group.characterName} (${group.groupName})`,
                          caption: group.maskProduct.dimensionsAndSpecs.join(" • "),
                        });
                      }}
                      className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1F110E]/85 text-[#FDE68A] hover:bg-heritage-crimson hover:text-white border border-heritage-goldAntique/50 transition-colors"
                      aria-label="Phóng to bản vẽ phác thảo"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <div className="p-6 text-center space-y-2">
                    <PenTool className="mx-auto h-9 w-9 text-heritage-goldSoft" />
                    <p className="font-serif text-base font-bold text-heritage-goldSoft">
                      Bản phác thảo giấy {group.groupName} ({group.roster.sketchTeam})
                    </p>
                    <p className="text-xs text-heritage-ivory/80 max-w-sm">
                      Khung lưu trữ bản vẽ tay tỷ lệ cm của {group.groupName} (sẽ hiển thị ngay khi bổ sung ảnh chụp bản vẽ lên Google Drive).
                    </p>
                  </div>
                )}
                {renderLinkOverlay(
                  "mask-sketch",
                  `/trien-lam-so/${group.slug}#phan-mat-na-phac-thao`,
                  `Bản vẽ ${group.groupName}`
                )}
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-heritage-woodDark">
                  Thông số Thiết kế Kỹ thuật &amp; Vật liệu STEAM
                </h3>
                <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-heritage-ink">
                  {group.maskProduct.dimensionsAndSpecs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-heritage-crimson" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltSpotlightCard>
          </div>

          {/* Hàng thông tin vật liệu & Ảnh đeo thử / ra mắt sân khấu nếu có */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div
              className={`${
                group.maskProduct.wearingOrStageUrl
                  ? "lg:col-span-6"
                  : "lg:col-span-12"
              } rounded-xl bg-heritage-ivory p-5 border border-heritage-goldAntique/40`}
            >
              <div className="flex items-center gap-2 font-serif text-lg font-bold text-heritage-woodDark">
                <Layers className="h-5 w-5 text-heritage-moss" />
                <h3>Danh mục Vật liệu &amp; Dụng cụ Chế tác ({group.groupName})</h3>
              </div>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-heritage-ink">
                {group.maskProduct.materialsUsed.map((mat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-heritage-crimson shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-heritage-goldAntique/30 flex flex-wrap gap-2">
                <Link
                  href="/xuong-steam"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-heritage-crimson px-3.5 py-2 text-xs font-semibold text-white hover:bg-heritage-woodDark transition-colors"
                >
                  <Hammer className="h-3.5 w-3.5" />
                  <span>Thử xoay mô hình Mặt nạ 3D tại Xưởng STEAM</span>
                </Link>
              </div>
            </div>

            {group.maskProduct.wearingOrStageUrl && (
              <div className="lg:col-span-6 rounded-xl bg-heritage-ivory p-4 border border-heritage-goldAntique/40 flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:w-56 shrink-0 aspect-[4/3] rounded-lg overflow-hidden border border-heritage-goldAntique/40 bg-heritage-woodDark">
                  <img
                    src={group.maskProduct.wearingOrStageUrl}
                    alt={`Thử nghiệm sân khấu ${group.groupName}`}
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxMedia({
                        src: group.maskProduct.wearingOrStageUrl,
                        title: `Thử nghiệm sân khấu — ${group.groupName} (${group.characterName})`,
                        caption: group.maskProduct.wearingCaption || "",
                      })
                    }
                    className="absolute top-2 right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1F110E]/85 text-[#FDE68A] hover:bg-heritage-crimson hover:text-white"
                    aria-label="Phóng to ảnh sân khấu"
                  >
                    <ZoomIn className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div>
                  <span className="inline-block rounded bg-heritage-woodDark px-2.5 py-0.5 text-[11px] font-semibold text-heritage-goldSoft">
                    Kiểm thử thực tế trên lớp
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                    {group.maskProduct.wearingCaption}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* PHẦN 3: BẢN WORD THUYẾT MINH & HỒ SƠ VĂN BẢN CỦA TỔ */}
        <section
          id="phan-thuyet-minh-word"
          className="scroll-mt-32 rounded-2xl bg-heritage-ivoryLight p-5 sm:p-8 border border-heritage-goldAntique/50 shadow-museum"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-heritage-goldAntique/35 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-heritage-crimson" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heritage-woodDark">
                  3. {group.writtenScript.title}
                </h2>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-heritage-crimson">
                {group.writtenScript.authorCredit}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.writtenScript.docxDownloadUrl && (
                <a
                  href={group.writtenScript.docxDownloadUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-heritage-woodDark transition-colors shadow-sm"
                >
                  <Download className="h-4 w-4" />
                  <span>Tải Bản Word {group.groupName} (.docx)</span>
                </a>
              )}
              {group.writtenScript.externalDocUrl && (
                <a
                  href={group.writtenScript.externalDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-heritage-woodDark transition-colors shadow-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Mở Bản Word trực tuyến {group.groupName}</span>
                </a>
              )}
              <a
                href={group.writtenScript.rosterDocxUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-woodDark px-4 py-2.5 text-xs sm:text-sm font-semibold text-heritage-goldSoft hover:bg-heritage-crimson hover:text-white transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Tải Phân công Lớp 10.3 (.docx)</span>
              </a>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {group.writtenScript.sections.map((sec, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-heritage-ivory p-5 border border-heritage-goldAntique/40"
              >
                <h3 className="font-serif text-base sm:text-lg font-bold text-heritage-woodDark">
                  {sec.heading}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-heritage-ink leading-relaxed">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PHẦN 4: VIDEO THUYẾT MINH MẶT NẠ & VIDEO CÔNG ĐOẠN CHẾ TÁC */}
        <section
          id="phan-video-hoat-dong"
          className="scroll-mt-32 rounded-2xl bg-heritage-ivoryLight p-5 sm:p-8 border border-heritage-goldAntique/50 shadow-museum space-y-10"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-heritage-goldAntique/35 pb-4">
              <div className="flex items-center gap-2.5">
                <Film className="h-6 w-6 text-heritage-crimson" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heritage-woodDark">
                  4. Video Thuyết minh &amp; Hậu trường Chế tác ({group.groupName})
                </h2>
              </div>
              {group.presentationVideo.durationBadge && (
                <span className="rounded-full bg-heritage-crimson px-3 py-1 font-mono text-xs font-bold text-white">
                  Thời lượng thuyết minh: {group.presentationVideo.durationBadge}
                </span>
              )}
            </div>

            {/* Trình phát Video thuyết minh chính của Tổ */}
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 items-center rounded-2xl bg-heritage-ivory p-4 sm:p-6 border border-heritage-goldAntique/50">
              <div className="lg:col-span-7 overflow-hidden rounded-xl bg-black border border-heritage-goldAntique/40">
                {group.presentationVideo.videoUrl ? (
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    poster={group.presentationVideo.posterUrl}
                    className="aspect-video w-full object-contain bg-black"
                  >
                    <source
                      src={group.presentationVideo.videoUrl}
                      type="video/mp4"
                    />
                    Trình duyệt của bạn không hỗ trợ phát video HTML5.
                  </video>
                ) : (
                  <div className="aspect-video w-full bg-heritage-woodDark flex flex-col items-center justify-center p-6 text-center space-y-2">
                    <Film className="h-10 w-10 text-heritage-goldSoft" />
                    <p className="font-serif text-base font-bold text-heritage-goldSoft">
                      {group.presentationVideo.title}
                    </p>
                    <p className="text-xs text-heritage-ivory/80 max-w-md">
                      {group.presentationVideo.description}
                    </p>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 space-y-3">
                <span className="inline-block rounded-md bg-heritage-woodDark px-3 py-1 text-xs font-semibold text-heritage-goldSoft">
                  Bài nói &amp; nghe trực tiếp trên lớp
                </span>
                <h3 className="font-serif text-xl font-bold text-heritage-woodDark">
                  {group.presentationVideo.title}
                </h3>
                <p className="text-xs font-semibold text-heritage-crimson">
                  {group.presentationVideo.presenterInfo}
                </p>
                <p className="text-sm text-heritage-ink leading-relaxed">
                  {group.presentationVideo.description}
                </p>
              </div>
            </div>

            {/* Các video công đoạn chế tác / thảo luận nhóm của riêng Tổ này (nếu có) */}
            {group.processVideos.length > 0 && (
              <div className="mt-8">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark mb-4">
                  Video Hậu trường Chế tác &amp; Làm việc Nhóm của {group.groupName}
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {group.processVideos.map((vid) => (
                    <div
                      key={vid.id}
                      className="rounded-2xl bg-heritage-ivory border border-heritage-goldAntique/50 overflow-hidden"
                    >
                      <div className="bg-black border-b border-heritage-goldAntique/40">
                        <video
                          controls
                          preload="metadata"
                          playsInline
                          poster={vid.posterUrl}
                          className="aspect-video w-full object-contain"
                        >
                          <source src={vid.videoUrl} type="video/mp4" />
                        </video>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded bg-heritage-woodDark px-2.5 py-0.5 text-[11px] font-semibold text-heritage-goldSoft">
                            {vid.groupName}
                          </span>
                          <span className="font-mono text-xs font-bold text-heritage-crimson">
                            {vid.durationBadge}
                          </span>
                        </div>
                        <h4 className="mt-2 font-serif text-base font-bold text-heritage-woodDark">
                          {vid.title}
                        </h4>
                        <p className="mt-1 text-xs text-heritage-ink leading-relaxed">
                          {vid.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* PHẦN 5: ALBUM HÌNH ẢNH HOẠT ĐỘNG NHÓM TẠI LỚP CỦA TỔ */}
          <div className="border-t border-heritage-goldAntique/35 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
              <div className="flex items-center gap-2.5">
                <Camera className="h-6 w-6 text-heritage-crimson" />
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-heritage-woodDark">
                  5. Album Hình ảnh Thực hành của {group.groupName} ({group.activityPhotos.length} ảnh)
                </h2>
              </div>
              <span className="text-xs text-heritage-woodLight">
                Bấm vào từng ảnh để xem kích thước lớn
              </span>
            </div>

            {group.activityPhotos.length === 0 ? (
              <div className="rounded-xl bg-heritage-ivory p-6 text-center border border-heritage-goldAntique/40">
                <p className="font-serif text-base font-bold text-heritage-woodDark">
                  Thư mục ảnh hoạt động của {group.groupName} đang chờ cập nhật
                </p>
                <p className="mt-1 text-xs sm:text-sm text-heritage-ink">
                  Bộ phận truyền thông ({group.roster.mediaTeam}) sẽ bổ sung hình ảnh quá trình thảo luận &amp; chế tác của {group.groupName} vào thư mục Google Drive của lớp.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.activityPhotos.map((photo) => (
                  <TiltSpotlightCard
                    key={photo.id}
                    className="rounded-2xl bg-heritage-ivory border border-heritage-goldAntique/50 overflow-hidden"
                  >
                    <div
                      onClick={() =>
                        setLightboxMedia({
                          src: photo.imageUrl,
                          title: `${photo.groupName} — ${photo.title}`,
                          caption: photo.caption,
                        })
                      }
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setLightboxMedia({
                            src: photo.imageUrl,
                            title: `${photo.groupName} — ${photo.title}`,
                            caption: photo.caption,
                          });
                        }
                      }}
                      className="relative aspect-[4/3] w-full overflow-hidden bg-heritage-woodDark cursor-pointer group border-b border-heritage-goldAntique/40"
                    >
                      <img
                        src={photo.imageUrl}
                        alt={photo.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-[#1F110E]/85 px-2.5 py-1 text-[10px] font-semibold text-[#FDE68A]">
                        <ZoomIn className="h-3 w-3" />
                        Phóng to
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-sm sm:text-base font-bold text-heritage-woodDark">
                        {photo.title}
                      </h3>
                      <p className="mt-1 text-xs text-heritage-ink leading-relaxed">
                        {photo.caption}
                      </p>
                    </div>
                  </TiltSpotlightCard>
                ))}
              </div>
            )}
          </div>

          {/* PHẦN 6: INFOGRAPHIC DI SẢN SÂN KHẤU TUỒNG (NẾU TỔ ĐÃ NỘP) */}
          {group.infographicImage && (
            <div className="border-t border-heritage-goldAntique/35 pt-8 mt-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="h-6 w-6 text-heritage-crimson" />
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-heritage-woodDark">
                    6. Infographic Tuồng — Di sản Sân khấu Dân tộc ({group.groupName})
                  </h2>
                </div>
                <a
                  href={group.infographicImage}
                  download
                  className="inline-flex items-center gap-1.5 rounded-lg bg-heritage-crimson px-3.5 py-2 text-xs font-bold text-white hover:bg-heritage-woodDark transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Tải Infographic</span>
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-2xl bg-heritage-ivory p-4 sm:p-6 border border-heritage-goldAntique/50">
                <div
                  onClick={() =>
                    setLightboxMedia({
                      src: group.infographicImage!,
                      title: `Infographic Tuồng — ${group.groupName} (${group.characterName})`,
                      caption: `Sản phẩm truyền thông số tổng hợp kiến thức Tuồng & trích đoạn Huyện đường của ${group.groupName}.`,
                    })
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightboxMedia({
                        src: group.infographicImage!,
                        title: `Infographic Tuồng — ${group.groupName} (${group.characterName})`,
                        caption: `Sản phẩm truyền thông số tổng hợp kiến thức Tuồng & trích đoạn Huyện đường của ${group.groupName}.`,
                      });
                    }
                  }}
                  className="lg:col-span-5 relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-xl bg-white border border-heritage-goldAntique/50 cursor-pointer group shadow-sm"
                >
                  <img
                    src={group.infographicImage}
                    alt={`Infographic Tuồng của ${group.groupName}`}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-[#1F110E]/85 px-2.5 py-1 text-[10px] font-semibold text-[#FDE68A]">
                    <ZoomIn className="h-3 w-3" />
                    Phóng to
                  </span>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <span className="inline-block rounded-full bg-heritage-crimson px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    Sản phẩm truyền thông số • {group.groupName}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-heritage-woodDark">
                    Tuồng — Di sản sân khấu dân tộc
                  </h3>
                  <p className="text-sm text-heritage-ink leading-relaxed">
                    Infographic do {group.groupName} thực hiện gồm 5 mạch nội dung: (1) Giới thiệu nghệ thuật tuồng, (2) Đặc trưng nghệ thuật (hóa trang, phục trang, diễn xuất, âm nhạc, ngôn ngữ), (3) Liên hệ trích đoạn <em>Huyện đường</em>, (4) Giá trị văn hóa cần gìn giữ và (5) Thông điệp lan tỏa tới thế hệ trẻ.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Điều hướng chuyển tiếp giữa các Tổ */}
        <nav
          aria-label="Chuyển trang giữa các Tổ"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <Link
            href={`/trien-lam-so/${prevGroup.slug}`}
            className="group flex items-center justify-between gap-4 rounded-2xl bg-heritage-ivoryLight p-5 border border-heritage-goldAntique/50 hover:border-heritage-crimson hover:shadow-museum transition-all"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-heritage-woodDark text-heritage-goldSoft group-hover:bg-heritage-crimson group-hover:text-white transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-heritage-crimson">
                  Tổ trước đó
                </span>
                <p className="font-serif text-base sm:text-lg font-bold text-heritage-woodDark truncate">
                  {prevGroup.groupName} — Nhân vật {prevGroup.characterName}
                </p>
              </div>
            </div>
          </Link>

          <Link
            href={`/trien-lam-so/${nextGroup.slug}`}
            className="group flex items-center justify-between gap-4 rounded-2xl bg-heritage-ivoryLight p-5 border border-heritage-goldAntique/50 hover:border-heritage-crimson hover:shadow-museum transition-all text-right"
          >
            <div className="min-w-0 flex-1">
              <span className="text-xs font-semibold text-heritage-crimson">
                Tổ tiếp theo
              </span>
              <p className="font-serif text-base sm:text-lg font-bold text-heritage-woodDark truncate">
                {nextGroup.groupName} — Nhân vật {nextGroup.characterName}
              </p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-heritage-woodDark text-heritage-goldSoft group-hover:bg-heritage-crimson group-hover:text-white transition-colors">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </nav>
      </div>

      {/* Lightbox xem ảnh kích thước lớn */}
      {lightboxMedia && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxMedia(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxMedia.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6"
        >
          <div className="relative max-h-[92dvh] w-full max-w-4xl overflow-hidden rounded-2xl bg-heritage-ivory border-2 border-heritage-goldAntique shadow-cabinet flex flex-col">
            <div className="flex items-center justify-between gap-3 bg-heritage-woodDark px-4 py-3 text-heritage-ivory">
              <h3 className="font-serif text-sm sm:text-lg font-bold text-heritage-goldSoft truncate">
                {lightboxMedia.title}
              </h3>
              <button
                type="button"
                onClick={() => setLightboxMedia(null)}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white hover:bg-heritage-crimson"
                aria-label="Đóng cửa sổ phóng to"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="bg-black flex items-center justify-center overflow-auto max-h-[72dvh] p-2 sm:p-4">
              <img
                src={lightboxMedia.src}
                alt={lightboxMedia.title}
                className="max-h-[68dvh] w-auto object-contain rounded"
              />
            </div>
            {lightboxMedia.caption && (
              <div className="p-4 bg-heritage-ivoryLight text-xs sm:text-sm text-heritage-ink border-t border-heritage-goldAntique/40">
                {lightboxMedia.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

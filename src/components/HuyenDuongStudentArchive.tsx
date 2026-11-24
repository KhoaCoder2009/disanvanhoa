"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Camera,
  FileText,
  Film,
  PenTool,
  Download,
  Clapperboard,
  CheckCircle2,
  Link2,
  ArrowRight,
  X,
  ExternalLink,
  ZoomIn,
  Users,
  Sparkles,
} from "lucide-react";
import {
  HUYEN_DUONG_ACTIVITY_PHOTOS,
  HUYEN_DUONG_CLASSROOM_GALLERY,
  HUYEN_DUONG_CLASS_DRAMA,
  HUYEN_DUONG_GROUPS_PORTFOLIO,
  HUYEN_DUONG_GROUP_ROSTER,
  HUYEN_DUONG_MASK_SKETCHES,
  HUYEN_DUONG_MASK_VIDEOS,
  HUYEN_DUONG_PROCESS_VIDEOS,
  HUYEN_DUONG_STUDENT_ARCHIVE_META,
  HUYEN_DUONG_WORD_SCRIPT,
} from "@/data/studentProductsData";
import { TiltSpotlightCard } from "./effects/TiltSpotlightCard";

function getGroupPageHref(groupLabel: string): string {
  if (groupLabel.includes("Tổ 1")) return "/trien-lam-so/to-1";
  if (groupLabel.includes("Tổ 2")) return "/trien-lam-so/to-2";
  if (groupLabel.includes("Tổ 3")) return "/trien-lam-so/to-3";
  if (groupLabel.includes("Tổ 4")) return "/trien-lam-so/to-4";
  return "/trien-lam-so";
}

type ArchiveTab =
  | "activity-photos"
  | "mask-sketches"
  | "infographics"
  | "word-script"
  | "mask-videos"
  | "class-drama";

const ARCHIVE_TABS: {
  id: ArchiveTab;
  label: string;
  countBadge: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "activity-photos",
    label: "Ảnh & Video hoạt động",
    countBadge: "22 ảnh • 4 clip",
    icon: <Camera className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
  },
  {
    id: "mask-sketches",
    label: "Phác thảo & Mặt nạ",
    countBadge: "4/4 tổ",
    icon: <PenTool className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
  },
  {
    id: "infographics",
    label: "Sáng tạo trẻ & Di sản",
    countBadge: "3/4 tổ",
    icon: <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
  },
  {
    id: "word-script",
    label: "Bản Word & Phân công",
    countBadge: "4 file .docx",
    icon: <FileText className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
  },
  {
    id: "mask-videos",
    label: "Video thuyết minh mặt nạ",
    countBadge: "4/4 đã nộp",
    icon: <Film className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
  },
  {
    id: "class-drama",
    label: "Video diễn kịch lớp",
    countBadge: "02:32",
    icon: <Clapperboard className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
  },
];

export const HuyenDuongStudentArchive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ArchiveTab>("mask-sketches");
  const [revealedSlotId, setRevealedSlotId] = useState<string | null>(null);
  const [sketchViewMode, setSketchViewMode] = useState<
    Record<string, "sketch" | "finished">
  >({
    "hd-sketch-to-1": "finished",
    "hd-sketch-to-2": "finished",
    "hd-sketch-to-3": "finished",
    "hd-sketch-to-4": "finished",
  });
  const [lightboxMedia, setLightboxMedia] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);

  return (
    <div
      id="kho-san-pham-hoc-sinh"
      className="mt-8 sm:mt-10 rounded-2xl bg-heritage-ivoryLight p-4 sm:p-6 lg:p-8 border border-heritage-goldAntique/50 shadow-museum"
    >
      {/* Tiêu đề & Thanh chọn danh mục đồng bộ với phong cách Bảo tàng Giấy Ngà - Đỏ Son */}
      <div className="border-b border-heritage-goldAntique/35 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block rounded-md bg-heritage-woodDark px-3 py-1 text-xs font-semibold text-heritage-goldSoft border border-heritage-goldAntique/50">
            {HUYEN_DUONG_STUDENT_ARCHIVE_META.badge}
          </span>
          <a
            href={HUYEN_DUONG_STUDENT_ARCHIVE_META.driveFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-heritage-crimson border border-heritage-crimson/30 hover:bg-heritage-crimson hover:text-white transition-colors"
          >
            <span>Kho Google Drive Lớp 10.3</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        <h3 className="mt-3 font-serif text-xl sm:text-2xl font-bold text-heritage-woodDark tracking-tight">
          {HUYEN_DUONG_STUDENT_ARCHIVE_META.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-heritage-ink leading-relaxed max-w-4xl">
          {HUYEN_DUONG_STUDENT_ARCHIVE_META.subtitle}
        </p>

        {/* CỔNG CHUYÊN TRANG RIÊNG TỪNG TỔ (NHẤP VÀO MỞ TRANG RIÊNG CỦA TỔ ĐÓ) */}
        <div className="mt-5 rounded-2xl bg-heritage-ivory p-3.5 sm:p-4 border border-heritage-goldAntique/45">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-heritage-crimson">
              Chuyên trang riêng từng Tổ — Nhấp vào Tổ để xem toàn bộ sản phẩm của Tổ đó:
            </span>
            <span className="text-[11px] font-medium text-heritage-woodLight">
              4 chuyên trang độc lập • Đầy đủ Phân công, Mặt nạ, Bản vẽ, Word &amp; Video
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {HUYEN_DUONG_GROUPS_PORTFOLIO.map((grp) => (
              <Link
                key={grp.slug}
                href={`/trien-lam-so/${grp.slug}`}
                className="group flex items-center gap-3 rounded-xl bg-white p-3 border border-heritage-goldAntique/45 hover:border-heritage-crimson hover:bg-heritage-ivoryLight transition-all shadow-sm"
              >
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-heritage-woodDark border border-heritage-goldAntique/40">
                  <img
                    src={grp.heroImage}
                    alt={`${grp.groupName} - ${grp.characterName}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-serif text-sm font-bold text-heritage-woodDark group-hover:text-heritage-crimson transition-colors">
                      {grp.groupName} • {grp.characterName}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-heritage-crimson transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <p className="mt-0.5 text-[11px] text-heritage-ink truncate">
                    {grp.statsSummary}
                  </p>
                  <span className="mt-1 inline-block text-[10px] font-bold text-heritage-crimson underline underline-offset-2">
                    Mở trang riêng {grp.groupName}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Thanh 5 Tab dạng viên thuốc chuẩn Triển lãm số */}
        <div
          role="tablist"
          aria-label="Danh mục sản phẩm học sinh Dự án Huyện đường"
          className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0"
        >
          {ARCHIVE_TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 whitespace-nowrap inline-flex min-h-[40px] items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-heritage-crimson text-heritage-ivory border border-heritage-goldSoft shadow-sm"
                    : "bg-heritage-ivory text-heritage-ink border border-heritage-goldAntique/40 hover:bg-heritage-ivoryDeep"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-bold ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-heritage-ivoryDeep text-heritage-crimson"
                  }`}
                >
                  {tab.countBadge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Nội dung hiển thị đồng bộ dạng Thẻ Bảo tàng */}
      <div className="mt-6">
        {/* 1. HÌNH ẢNH & VIDEO HOẠT ĐỘNG CỦA CÁC TỔ */}
        {activeTab === "activity-photos" && (
          <div className="space-y-8">
            <div>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                  1A. Hình ảnh hoạt động &amp; chế tác theo 4 Tổ (Lớp 10.3)
                </h4>
                <span className="text-xs font-medium text-heritage-crimson">
                  Nhấp vào hình để hiện link hoặc nhấn biểu tượng kính lúp để phóng to
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {HUYEN_DUONG_ACTIVITY_PHOTOS.map((slot) => {
                  const isOpen = revealedSlotId === slot.id;
                  const slotHref = getGroupPageHref(slot.groupName);
                  return (
                    <TiltSpotlightCard
                      key={slot.id}
                      className="rounded-2xl bg-heritage-ivory border border-heritage-goldAntique/50 overflow-hidden"
                    >
                      <div id={`nhom-${slot.id}`}>
                        <div
                          onClick={() => setRevealedSlotId(isOpen ? null : slot.id)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setRevealedSlotId(isOpen ? null : slot.id);
                            }
                          }}
                          className="relative aspect-[4/3] w-full overflow-hidden bg-heritage-woodDark/95 flex items-center justify-center border-b border-heritage-goldAntique/40 cursor-pointer group"
                        >
                          {slot.imageUrl ? (
                            <>
                              <img
                                src={slot.imageUrl}
                                alt={`${slot.groupName} - ${slot.title}`}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                              />
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLightboxMedia({
                                    src: slot.imageUrl,
                                    title: `${slot.groupName} (${slot.characterRole}) — ${slot.title}`,
                                    caption: slot.caption,
                                  });
                                }}
                                className="absolute top-2.5 right-2.5 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1F110E]/80 text-[#FDE68A] hover:bg-heritage-crimson hover:text-white border border-heritage-goldAntique/50 transition-colors"
                                title="Phóng to hình ảnh"
                                aria-label="Phóng to hình ảnh"
                              >
                                <ZoomIn className="h-4 w-4" />
                              </button>
                            </>
                          ) : (
                            <div className="p-4 text-center space-y-2">
                              <Camera
                                className="mx-auto h-8 w-8 text-heritage-goldSoft"
                                aria-hidden="true"
                              />
                              <p className="text-xs font-bold text-heritage-goldSoft">
                                {slot.groupName} • {slot.characterRole}
                              </p>
                              <p className="font-mono text-[10px] text-heritage-ivory/75 break-all">
                                {slot.expectedPath}
                              </p>
                            </div>
                          )}

                          {isOpen && (
                            <div
                              onClick={(e) => e.stopPropagation()}
                              className="absolute inset-0 z-20 flex flex-col justify-between bg-[#1F110E]/95 p-3 text-white"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="inline-flex items-center gap-1 rounded-full bg-heritage-crimson px-2 py-0.5 text-[10px] font-bold">
                                  <Link2 className="h-3 w-3" />
                                  Link phần này
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setRevealedSlotId(null)}
                                  className="h-6 w-6 rounded-full bg-white/15 hover:bg-heritage-crimson inline-flex items-center justify-center"
                                  aria-label="Đóng link"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </div>
                              <code className="block truncate rounded bg-black/50 px-2 py-1 text-[10px] text-[#FDE68A]">
                                {slotHref}
                              </code>
                              <Link
                                href={slotHref}
                                className="inline-flex items-center justify-center gap-1 rounded-lg bg-heritage-crimson hover:bg-[#991B1B] px-2.5 py-1.5 text-[11px] font-bold text-white"
                              >
                                <span>Mở trang riêng {slot.groupName}</span>
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          )}
                        </div>
                        <div className="p-4 sm:p-5">
                          <div className="flex flex-wrap items-center justify-between gap-1.5">
                            <Link
                              href={slotHref}
                              className="inline-block rounded-md bg-heritage-woodDark hover:bg-heritage-crimson px-2.5 py-0.5 text-[11px] font-semibold text-heritage-goldSoft hover:text-white transition-colors"
                            >
                              {slot.groupName}
                            </Link>
                            <span className="text-[11px] font-bold text-heritage-crimson">
                              Vai {slot.characterRole}
                            </span>
                          </div>
                          <h5 className="mt-2 font-serif text-base font-bold text-heritage-woodDark leading-snug">
                            <Link
                              href={slotHref}
                              className="hover:text-heritage-crimson transition-colors"
                            >
                              {slot.title}
                            </Link>
                          </h5>
                          <p className="mt-1.5 text-xs text-heritage-ink leading-relaxed">
                            {slot.caption}
                          </p>
                          <p className="mt-2 pt-2 border-t border-heritage-goldAntique/30 text-[11px] font-medium text-heritage-woodLight">
                            {slot.membersSummary}
                          </p>
                          <Link
                            href={slotHref}
                            className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-heritage-ivoryDeep/80 hover:bg-heritage-crimson px-3 py-2 text-xs font-bold text-heritage-crimson hover:text-white border border-heritage-crimson/25 transition-colors"
                          >
                            <span>Xem tất cả phần của {slot.groupName}</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </TiltSpotlightCard>
                  );
                })}
              </div>
            </div>

            {/* 1B. VIDEO HẬU TRƯỜNG CHẾ TÁC & THẢO LUẬN TRÊN LỚP */}
            <div className="pt-4 border-t border-heritage-goldAntique/35">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                  1B. Video hậu trường chế tác &amp; thảo luận tại lớp (3 video thực tế)
                </h4>
                <span className="text-xs font-semibold text-heritage-crimson">
                  Trích xuất &amp; tối ưu chuẩn MP4 H.264 từ Google Drive
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {HUYEN_DUONG_PROCESS_VIDEOS.map((pvid) => (
                  <div
                    key={pvid.id}
                    className="rounded-2xl bg-heritage-ivory border border-heritage-goldAntique/50 overflow-hidden shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-video w-full bg-heritage-woodDark overflow-hidden border-b border-heritage-goldAntique/40">
                        <video
                          controls
                          preload="metadata"
                          poster={pvid.posterUrl}
                          className="h-full w-full object-cover"
                        >
                          <source src={pvid.videoUrl} type="video/mp4" />
                        </video>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded-md bg-heritage-woodDark px-2.5 py-0.5 text-[11px] font-semibold text-heritage-goldSoft">
                            {pvid.groupName}
                          </span>
                          <span className="font-mono text-[11px] font-bold text-heritage-crimson">
                            {pvid.durationBadge}
                          </span>
                        </div>
                        <h5 className="mt-2 font-serif text-sm sm:text-base font-bold text-heritage-woodDark leading-snug">
                          {pvid.title}
                        </h5>
                        <p className="mt-1 text-xs text-heritage-ink leading-relaxed">
                          {pvid.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 1C. ALBUM 11 KHOẢNH KHẮC THỰC HÀNH TRÊN LỚP */}
            <div className="pt-4 border-t border-heritage-goldAntique/35">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                  1C. Nhật ký ảnh thực hành tại lớp của Tổ 2, Tổ 3 &amp; Tổ 4 ({HUYEN_DUONG_CLASSROOM_GALLERY.length} ảnh)
                </h4>
                <span className="text-xs text-heritage-woodLight">
                  Nhấn vào từng ảnh để phóng to chi tiết vở ghi, bản vẽ và sân khấu lớp học
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
                {HUYEN_DUONG_CLASSROOM_GALLERY.map((photo) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() =>
                      setLightboxMedia({
                        src: photo.imageUrl,
                        title: `${photo.groupName} — ${photo.title}`,
                        caption: photo.caption,
                      })
                    }
                    className="group text-left rounded-xl bg-heritage-ivory border border-heritage-goldAntique/45 overflow-hidden hover:border-heritage-crimson transition-all"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-heritage-woodDark">
                      <img
                        src={photo.imageUrl}
                        alt={photo.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2 left-2 rounded bg-[#1F110E]/80 px-2 py-0.5 text-[10px] font-semibold text-[#FDE68A]">
                        {photo.groupName}
                      </span>
                    </div>
                    <div className="p-2.5 sm:p-3">
                      <p className="font-serif text-xs sm:text-sm font-bold text-heritage-woodDark line-clamp-2 leading-snug">
                        {photo.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. BẢN PHÁC THẢO & MẶT NẠ HOÀN THIỆN (4 TỔ) */}
        {activeTab === "mask-sketches" && (
          <div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                2. Hồ sơ Phác thảo Kỹ thuật &amp; Sản phẩm Mặt nạ Hoàn thiện (4 Tổ)
              </h4>
              <span className="text-xs font-medium text-heritage-crimson">
                Chuyển đổi giữa [Bản vẽ tỷ lệ] và [Mặt nạ thật] ngay trên từng thẻ
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HUYEN_DUONG_MASK_SKETCHES.map((sketch) => {
                const isOpen = revealedSlotId === sketch.id;
                const hasBoth = Boolean(
                  sketch.sketchImageUrl && sketch.finishedMaskUrl
                );
                const currentMode = sketchViewMode[sketch.id] || "finished";
                const activeImg = hasBoth
                  ? currentMode === "sketch"
                    ? sketch.sketchImageUrl
                    : sketch.finishedMaskUrl
                  : sketch.finishedMaskUrl || sketch.sketchImageUrl || sketch.imageUrl;
                const sketchHref = getGroupPageHref(sketch.groupName);

                return (
                  <TiltSpotlightCard
                    key={sketch.id}
                    className="rounded-2xl bg-heritage-ivory border border-heritage-goldAntique/50 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div
                        onClick={() => setRevealedSlotId(isOpen ? null : sketch.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setRevealedSlotId(isOpen ? null : sketch.id);
                          }
                        }}
                        className="relative aspect-[4/3] w-full overflow-hidden bg-heritage-woodDark/95 flex items-center justify-center border-b border-heritage-goldAntique/40 cursor-pointer group"
                      >
                        {activeImg ? (
                          <>
                            <img
                              src={activeImg}
                              alt={`${sketch.groupName} - ${sketch.characterName}`}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setLightboxMedia({
                                  src: activeImg,
                                  title: `${sketch.groupName} — ${sketch.characterName}`,
                                  caption: sketch.analysisNote,
                                });
                              }}
                              className="absolute top-2.5 right-2.5 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1F110E]/80 text-[#FDE68A] hover:bg-heritage-crimson hover:text-white border border-heritage-goldAntique/50 transition-colors"
                              title="Phóng to xem chi tiết thông số"
                              aria-label="Phóng to xem chi tiết"
                            >
                              <ZoomIn className="h-4 w-4" />
                            </button>
                          </>
                        ) : (
                          <div className="p-4 text-center space-y-2">
                            <PenTool
                              className="mx-auto h-8 w-8 text-heritage-goldSoft"
                              aria-hidden="true"
                            />
                            <p className="text-xs font-bold text-heritage-goldSoft">
                              {sketch.groupName} • {sketch.characterName}
                            </p>
                            <p className="font-mono text-[10px] text-heritage-ivory/75 break-all">
                              {sketch.expectedPath}
                            </p>
                          </div>
                        )}

                        {isOpen && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute inset-0 z-20 flex flex-col justify-between bg-[#1F110E]/95 p-3 text-white"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="inline-flex items-center gap-1 rounded-full bg-heritage-crimson px-2 py-0.5 text-[10px] font-bold">
                                <Link2 className="h-3 w-3" />
                                Link phần này
                              </span>
                              <button
                                type="button"
                                onClick={() => setRevealedSlotId(null)}
                                className="h-6 w-6 rounded-full bg-white/15 hover:bg-heritage-crimson inline-flex items-center justify-center"
                                aria-label="Đóng link"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </div>
                            <code className="block truncate rounded bg-black/50 px-2 py-1 text-[10px] text-[#FDE68A]">
                              {sketchHref}
                            </code>
                            <Link
                              href={sketchHref}
                              className="inline-flex items-center justify-center gap-1 rounded-lg bg-heritage-crimson hover:bg-[#991B1B] px-2.5 py-1.5 text-[11px] font-bold text-white"
                            >
                              <span>Mở trang riêng {sketch.groupName}</span>
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* Nút chuyển đổi giữa Bản phác thảo chì và Sản phẩm mặt nạ hoàn thiện */}
                      {hasBoth && (
                        <div className="grid grid-cols-2 bg-heritage-ivoryDeep/70 p-1 gap-1 border-b border-heritage-goldAntique/30">
                          <button
                            type="button"
                            onClick={() =>
                              setSketchViewMode((prev) => ({
                                ...prev,
                                [sketch.id]: "finished",
                              }))
                            }
                            className={`rounded-md py-1 text-[11px] font-bold transition-colors ${
                              currentMode === "finished"
                                ? "bg-heritage-crimson text-white shadow-sm"
                                : "text-heritage-woodDark hover:bg-white/60"
                            }`}
                          >
                            Mặt nạ thật
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setSketchViewMode((prev) => ({
                                ...prev,
                                [sketch.id]: "sketch",
                              }))
                            }
                            className={`rounded-md py-1 text-[11px] font-bold transition-colors ${
                              currentMode === "sketch"
                                ? "bg-heritage-crimson text-white shadow-sm"
                                : "text-heritage-woodDark hover:bg-white/60"
                            }`}
                          >
                            Bản vẽ tỷ lệ
                          </button>
                        </div>
                      )}

                      <div className="p-4 sm:p-5 space-y-2.5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <Link
                            href={sketchHref}
                            className="rounded-md bg-heritage-woodDark hover:bg-heritage-crimson px-2.5 py-0.5 text-[11px] font-semibold text-heritage-goldSoft hover:text-white transition-colors"
                          >
                            {sketch.groupName}
                          </Link>
                          <Link
                            href={sketchHref}
                            className="text-xs font-bold text-heritage-crimson hover:underline"
                          >
                            {sketch.characterName}
                          </Link>
                        </div>
                        <p className="text-xs text-heritage-ink leading-relaxed">
                          {sketch.sketchNote}
                        </p>
                        <div className="rounded-lg bg-heritage-ivoryLight p-2.5 border border-heritage-goldAntique/35 text-[11px] text-heritage-woodDark leading-relaxed">
                          <Sparkles className="inline h-3 w-3 mr-1 text-heritage-crimson" />
                          {sketch.analysisNote}
                        </div>
                        <p className="pt-1 text-[11px] font-medium text-heritage-woodLight">
                          {sketch.designers}
                        </p>
                        <Link
                          href={sketchHref}
                          className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-heritage-crimson px-3 py-2 text-xs font-bold text-white hover:bg-heritage-woodDark transition-colors shadow-sm"
                        >
                          <span>Vào trang riêng {sketch.groupName}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </TiltSpotlightCard>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. BẢN WORD THUYẾT MINH & BẢNG PHÂN CÔNG LỚP 10.3 */}
        {activeTab === "word-script" && (
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 rounded-2xl bg-heritage-ivory p-4 sm:p-5 border border-heritage-goldAntique/45">
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                  3A. {HUYEN_DUONG_WORD_SCRIPT.title}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-heritage-ink leading-relaxed max-w-3xl">
                  {HUYEN_DUONG_WORD_SCRIPT.summaryNote}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={HUYEN_DUONG_WORD_SCRIPT.to1DocxUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-heritage-crimson px-4 py-2.5 text-xs font-semibold text-white hover:bg-heritage-woodDark transition-colors"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Tải Thuyết minh Tổ 1 (.docx)</span>
                </a>
                <a
                  href={HUYEN_DUONG_WORD_SCRIPT.to2DocxUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-heritage-crimson px-4 py-2.5 text-xs font-semibold text-white hover:bg-heritage-woodDark transition-colors"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Tải Thuyết minh Tổ 2 (.docx)</span>
                </a>
                <a
                  href={HUYEN_DUONG_WORD_SCRIPT.docxUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-heritage-crimson px-4 py-2.5 text-xs font-semibold text-white hover:bg-heritage-woodDark transition-colors"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Tải Thuyết minh Tổ 4 (.docx)</span>
                </a>
                <a
                  href={HUYEN_DUONG_WORD_SCRIPT.rosterDocxUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-heritage-woodDark px-4 py-2.5 text-xs font-semibold text-heritage-goldSoft hover:bg-heritage-crimson hover:text-white transition-colors"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Tải Phân công 10.3 (.docx)</span>
                </a>
                <a
                  href={HUYEN_DUONG_WORD_SCRIPT.to3ExternalDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-3.5 py-2.5 text-xs font-semibold text-heritage-crimson border border-heritage-crimson/35 hover:bg-heritage-crimson hover:text-white transition-colors"
                >
                  <span>Bản Word Tổ 3 (WPS)</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {HUYEN_DUONG_WORD_SCRIPT.scriptSections.map((sec, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-heritage-ivory p-4 sm:p-5 border border-heritage-goldAntique/45 shadow-sm"
                >
                  <h5 className="font-serif text-base font-bold text-heritage-crimson">
                    {sec.heading}
                  </h5>
                  <p className="mt-2 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Bảng phân công nhiệm vụ chi tiết của 4 Tổ Lớp 10.3 */}
            <div className="rounded-2xl bg-heritage-ivory p-4 sm:p-6 border border-heritage-goldAntique/45">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-heritage-crimson" />
                  <h5 className="font-serif text-base sm:text-lg font-bold text-heritage-woodDark">
                    3B. Bảng Phân công Thành viên 4 Tổ — Lớp 10.3
                  </h5>
                </div>
                <span className="text-xs font-semibold text-heritage-crimson">
                  {HUYEN_DUONG_STUDENT_ARCHIVE_META.boardArtists}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {HUYEN_DUONG_GROUP_ROSTER.map((row) => (
                  <div
                    key={row.groupName}
                    className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/40 space-y-1.5 text-xs sm:text-sm"
                  >
                    <div className="flex items-center justify-between border-b border-heritage-goldAntique/30 pb-2 mb-2">
                      <Link
                        href={`/trien-lam-so/${row.slug}`}
                        className="font-serif font-bold text-base text-heritage-woodDark hover:text-heritage-crimson transition-colors"
                      >
                        {row.groupName} — Nhân vật {row.character}
                      </Link>
                      <Link
                        href={`/trien-lam-so/${row.slug}`}
                        className="inline-flex items-center gap-1 rounded-full bg-heritage-crimson px-2.5 py-0.5 text-[11px] font-bold text-white hover:bg-heritage-woodDark transition-colors"
                      >
                        <span>Trang {row.groupName}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                    <p>
                      <strong className="text-heritage-woodDark">Nội dung:</strong>{" "}
                      {row.contentTeam}
                    </p>
                    <p>
                      <strong className="text-heritage-woodDark">Bản vẽ:</strong>{" "}
                      {row.sketchTeam}
                    </p>
                    <p>
                      <strong className="text-heritage-woodDark">Chế tác mặt nạ:</strong>{" "}
                      {row.craftTeam}
                    </p>
                    <p>
                      <strong className="text-heritage-woodDark">Thuyết minh:</strong>{" "}
                      {row.presenter} &bull;{" "}
                      <strong className="text-heritage-woodDark">Hình ảnh &amp; Video:</strong>{" "}
                      {row.mediaTeam}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. VIDEO THUYẾT MINH MẶT NẠ (MỖI TỔ 1 VIDEO) */}
        {activeTab === "mask-videos" && (
          <div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                4. Video thuyết minh mặt nạ trực tiếp trên lớp (4 Tổ)
              </h4>
              <span className="text-xs font-medium text-heritage-crimson">
                Đủ 4/4 Tổ: Tổ 1 (01:38), Tổ 2 (03:13), Tổ 3 (01:50) &amp; Tổ 4 (00:47)
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {HUYEN_DUONG_MASK_VIDEOS.map((vid) => (
                <TiltSpotlightCard
                  key={vid.id}
                  className="overflow-hidden rounded-2xl bg-heritage-ivory border border-heritage-goldAntique/50"
                >
                  <div>
                    <div className="aspect-video w-full bg-heritage-woodDark flex items-center justify-center border-b border-heritage-goldAntique/40 overflow-hidden relative">
                      {vid.videoUrl ? (
                        <video
                          controls
                          preload="metadata"
                          poster={vid.posterUrl}
                          className="h-full w-full object-cover"
                        >
                          <source src={vid.videoUrl} type="video/mp4" />
                        </video>
                      ) : (
                        <div className="p-5 text-center space-y-2 relative z-10">
                          <Film
                            className="mx-auto h-9 w-9 text-heritage-goldSoft"
                            aria-hidden="true"
                          />
                          <p className="font-serif text-sm sm:text-base font-bold text-heritage-ivory">
                            Khung Video {vid.groupName} • Mặt nạ {vid.characterFocus}
                          </p>
                          <p className="font-mono text-[11px] text-heritage-goldSoft/90 break-all">
                            {vid.expectedPath}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-md bg-heritage-woodDark px-2.5 py-0.5 text-[11px] font-semibold text-heritage-goldSoft">
                          {vid.groupName} • Mặt nạ {vid.characterFocus}
                        </span>
                        {vid.durationBadge ? (
                          <span className="rounded-full bg-heritage-crimson px-2.5 py-0.5 font-mono text-[11px] font-bold text-white">
                            Đã đăng • {vid.durationBadge}
                          </span>
                        ) : (
                          <span className="text-xs font-semibold text-heritage-woodLight">
                            Đang chờ nộp file
                          </span>
                        )}
                      </div>
                      <h5 className="mt-2 font-serif text-base sm:text-lg font-bold text-heritage-woodDark">
                        {vid.title}
                      </h5>
                      <p className="mt-1 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                        {vid.description}
                      </p>
                      <p className="mt-2 pt-2 border-t border-heritage-goldAntique/30 text-[11px] font-medium text-heritage-crimson">
                        {vid.presenterInfo}
                      </p>
                      <Link
                        href={getGroupPageHref(vid.groupName)}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-heritage-ivoryDeep/80 hover:bg-heritage-crimson px-3 py-1.5 text-xs font-bold text-heritage-crimson hover:text-white border border-heritage-crimson/25 transition-colors"
                      >
                        <span>Mở chuyên trang {vid.groupName}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </TiltSpotlightCard>
              ))}
            </div>
          </div>
        )}

        {/* 2B. INFOGRAPHIC TUỒNG (3/4 TỔ: TỔ 2, TỔ 3, TỔ 4) */}
        {activeTab === "infographics" && (
          <div className="space-y-5">
            <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/45 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="text-xs sm:text-sm text-heritage-ink leading-relaxed">
                Bộ infographic <strong>Sáng tạo trẻ &amp; Di sản</strong> do <strong>Tổ 2, Tổ 3 và Tổ 4</strong> (Lớp 10.3) thiết kế nhằm hệ thống hóa đặc trưng hóa trang, phục trang, diễn xuất, âm nhạc, liên hệ trích đoạn <em>Huyện đường</em> và thông điệp gìn giữ di sản.
              </p>
              <span className="shrink-0 rounded-full bg-heritage-crimson px-3 py-1 text-[11px] font-bold text-white">
                Bấm vào từng poster để phóng to
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {HUYEN_DUONG_GROUPS_PORTFOLIO.filter((g) => g.infographicImage).map(
                (group) => (
                  <TiltSpotlightCard
                    key={`infographic-${group.slug}`}
                    className="rounded-2xl bg-white border border-heritage-goldAntique/55 overflow-hidden shadow-museum flex flex-col justify-between"
                  >
                    <div
                      onClick={() =>
                        setLightboxMedia({
                          src: group.infographicImage!,
                          title: `Infographic Tuồng — ${group.groupName} (${group.characterName})`,
                          caption: `Sản phẩm truyền thông số của ${group.groupName} (Lớp 10.3 — THPT Bình Phú).`,
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
                            caption: `Sản phẩm truyền thông số của ${group.groupName} (Lớp 10.3 — THPT Bình Phú).`,
                          });
                        }
                      }}
                      className="relative aspect-[3/4] w-full overflow-hidden bg-heritage-ivoryLight cursor-pointer group border-b border-heritage-goldAntique/35"
                    >
                      <img
                        src={group.infographicImage}
                        alt={`Infographic Tuồng của ${group.groupName} — ${group.characterName}`}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute top-3 left-3 rounded-md bg-heritage-crimson px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                        {group.groupName} • {group.characterName}
                      </span>
                      <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-[#1F110E]/85 px-2.5 py-1 text-[10px] font-semibold text-[#FDE68A]">
                        <ZoomIn className="h-3 w-3" />
                        Phóng to
                      </span>
                    </div>

                    <div className="p-4 flex items-center justify-between gap-2">
                      <div>
                        <h4 className="font-serif text-sm sm:text-base font-bold text-heritage-woodDark">
                          Sáng tạo trẻ &amp; Di sản — {group.groupName}
                        </h4>
                        <p className="text-xs text-heritage-ink">
                          Tuồng – Di sản sân khấu dân tộc
                        </p>
                      </div>
                      <Link
                        href={`/trien-lam-so/${group.slug}`}
                        className="inline-flex items-center gap-1 rounded-lg bg-heritage-ivory px-3 py-1.5 text-xs font-bold text-heritage-crimson border border-heritage-crimson/30 hover:bg-heritage-crimson hover:text-white transition-colors"
                      >
                        <span>Xem trang Tổ</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </TiltSpotlightCard>
                )
              )}
            </div>
          </div>
        )}

        {/* 5. VIDEO DIỄN KỊCH: 1 SẢN PHẨM CHUNG CỦA LỚP */}
        {activeTab === "class-drama" && (
          <div className="rounded-2xl bg-heritage-ivory border border-heritage-goldAntique/55 overflow-hidden shadow-museum">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 aspect-video w-full bg-heritage-woodDark flex items-center justify-center border-b lg:border-b-0 lg:border-r border-heritage-goldAntique/40 relative overflow-hidden">
                {HUYEN_DUONG_CLASS_DRAMA.videoUrl ? (
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    poster={HUYEN_DUONG_CLASS_DRAMA.stageBackdropImage}
                    className="h-full w-full object-contain bg-black"
                  >
                    <source
                      src={HUYEN_DUONG_CLASS_DRAMA.videoUrl}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <>
                    <img
                      src={HUYEN_DUONG_CLASS_DRAMA.stageBackdropImage}
                      alt="Sân khấu lớp học Công minh chính trực – Huyện đường"
                      className="absolute inset-0 h-full w-full object-cover opacity-35"
                    />
                    <div className="relative z-10 p-6 text-center space-y-2.5 max-w-md bg-[#1F110E]/85 rounded-2xl border border-heritage-goldAntique/50 mx-4">
                      <Clapperboard
                        className="mx-auto h-10 w-10 text-heritage-goldSoft"
                        aria-hidden="true"
                      />
                      <p className="font-serif text-base sm:text-xl font-bold text-heritage-ivory">
                        Sân khấu Vi diễn Chung Lớp 10.3
                      </p>
                      <p className="text-xs text-heritage-ivory/85 leading-relaxed">
                        Không gian bục giảng đã hoàn thiện bức hoành phi phấn &ldquo;Công minh chính trực – Huyện đường&rdquo;, sẵn sàng cập nhật tệp video vở diễn chung toàn lớp.
                      </p>
                      <p className="font-mono text-[11px] text-heritage-goldSoft break-all">
                        {HUYEN_DUONG_CLASS_DRAMA.expectedPath}
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="lg:col-span-5 p-4 sm:p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-md bg-heritage-crimson px-3 py-1 text-xs font-semibold text-white">
                    {HUYEN_DUONG_CLASS_DRAMA.badge}
                  </span>
                  <h4 className="mt-3 font-serif text-xl sm:text-2xl font-bold text-heritage-woodDark">
                    {HUYEN_DUONG_CLASS_DRAMA.title}
                  </h4>
                  <p className="mt-2 text-sm text-heritage-ink leading-relaxed">
                    {HUYEN_DUONG_CLASS_DRAMA.description}
                  </p>

                  <div className="mt-4 rounded-xl bg-heritage-ivoryLight p-3.5 border border-heritage-goldAntique/40">
                    <p className="text-xs font-bold uppercase tracking-wider text-heritage-crimson mb-2">
                      Phân vai biểu diễn Lớp 10.3:
                    </p>
                    <ul className="space-y-1 text-xs sm:text-sm text-heritage-woodDark font-medium">
                      {HUYEN_DUONG_CLASS_DRAMA.castList.map((actorLine, idx) => (
                        <li key={idx}>&bull; {actorLine}</li>
                      ))}
                    </ul>
                  </div>

                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-heritage-ink border-t border-heritage-goldAntique/35 pt-4">
                    {HUYEN_DUONG_CLASS_DRAMA.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-heritage-crimson"
                          aria-hidden="true"
                        />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox phóng to hình ảnh & bản vẽ phác thảo tỷ lệ cm */}
      {lightboxMedia && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxMedia(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxMedia.title}
        >
          <div className="relative max-w-4xl w-full rounded-2xl bg-[#1F110E] border border-heritage-goldAntique/60 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/15">
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#FDE68A] truncate">
                {lightboxMedia.title}
              </h4>
              <button
                type="button"
                onClick={() => setLightboxMedia(null)}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 hover:bg-heritage-crimson text-white transition-colors"
                aria-label="Đóng cửa sổ phóng to"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="bg-black flex items-center justify-center max-h-[72vh] overflow-auto">
              <img
                src={lightboxMedia.src}
                alt={lightboxMedia.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="px-4 py-3 text-xs sm:text-sm text-white/90 bg-[#1F110E]">
              {lightboxMedia.caption}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

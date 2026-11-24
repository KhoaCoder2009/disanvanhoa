"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Copy, Eye, Link2, X } from "lucide-react";
import { ArtSubject } from "@/types/heritage";

interface HeritageArtworkProps {
  subject: ArtSubject;
  expectedFile?: string;
  caption?: string;
  className?: string;
  showFileBadge?: boolean;
  linkHref?: string;
  linkLabel?: string;
  onQuickPreview?: () => void;
}

const MUSEUM_IMAGE_MAP: Partial<Record<ArtSubject, string>> = {
  "hero-stage": "/images/cinema/scene-01-di-san.png",
  "tuong-huyen-duong": "/images/cinema/scene-03-sac-tuong.png",
  "huyen-duong-court": "/images/cinema/scene-07-huyen-duong.png",
  "epic-dam-san": "/images/cinema/scene-05-dam-san-steam.png",
  "dam-san-longhouse": "/images/cinema/scene-dam-san-nha-dai.png",
  "dam-san-sun-goddess": "/images/cinema/scene-dam-san-mat-troi.png",
  "exhibit-mask-set": "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
  "exhibit-storybox": "/images/cinema/scene-05-dam-san-steam.png",
  "exhibit-longhouse": "/images/cinema/scene-dam-san-nha-dai.png",
  "exhibit-infographic": "/images/cinema/scene-infographic-tu-giac.png",
  "exhibit-micro-acting": "/images/cinema/scene-vi-dien-huyen-duong.png",
  "exhibit-podcast": "/images/cinema/scene-podcast-klei-khan.png",
  "exhibit-handbook": "/images/cinema/scene-so-tay-the-giai-ma.png",
};

const DEFAULT_SUBJECT_LINKS: Record<ArtSubject, { href: string; label: string }> = {
  "hero-stage": { href: "/#gioi-thieu-khong-gian", label: "Không gian Khởi hành 3D" },
  "tuong-huyen-duong": {
    href: "/bao-tang-so/sac-tuong-huyen-duong",
    label: "Phòng 01: Sắc Tuồng Huyện đường",
  },
  "huyen-duong-court": {
    href: "/chu-de-hoc-tap/chu-de-01-huyen-duong",
    label: "Chủ đề 01: Dự án Mặt nạ Huyện đường",
  },
  "epic-dam-san": {
    href: "/chu-de-hoc-tap/chu-de-02-dam-san",
    label: "Chủ đề 02: Hộp kể chuyện Sử thi Đăm Săn",
  },
  "dam-san-longhouse": {
    href: "/bao-tang-so/khong-gian-dam-san",
    label: "Phòng 03: Không gian văn hóa Ê-đê & Đăm Săn",
  },
  "dam-san-sun-goddess": {
    href: "/bao-tang-so/hanh-trinh-mat-troi",
    label: "Phòng 04: Hành trình bắt Nữ thần Mặt Trời",
  },
  "exhibit-mask-set": {
    href: "/bao-tang-so/tu-dai-nhan-vat",
    label: "Phòng 02: Tứ đại nhân vật Huyện đường",
  },
  "exhibit-storybox": {
    href: "/chu-de-hoc-tap/chu-de-02-dam-san",
    label: "Chủ đề 02: Hộp kể chuyện Đăm Săn",
  },
  "exhibit-longhouse": {
    href: "/bao-tang-so/khong-gian-dam-san",
    label: "Phòng 03: Mô hình Nhà dài Ê-đê",
  },
  "exhibit-infographic": {
    href: "/trien-lam-so#noi-dung-trien-lam",
    label: "Triển lãm số: Infographic Tứ giác Huyện đường",
  },
  "exhibit-micro-acting": {
    href: "/trien-lam-so#noi-dung-trien-lam",
    label: "Triển lãm số: Vi diễn sân khấu Huyện đường",
  },
  "exhibit-podcast": {
    href: "/trien-lam-so#noi-dung-trien-lam",
    label: "Triển lãm số: Podcast sử thi Đăm Săn",
  },
  "exhibit-handbook": {
    href: "/xuong-steam",
    label: "Xưởng STEAM & Sổ tay giải mã",
  },
};

/**
 * Hệ thống Bản khắc Kiến trúc & Tạo hình Di sản (Archival Architectural & Stage Plates)
 * Khi nhấp vào hình ảnh sẽ hiển thị thẻ đường link dẫn trực tiếp vào phần / trang tương ứng.
 */
export const HeritageArtwork: React.FC<HeritageArtworkProps> = ({
  subject,
  expectedFile,
  caption,
  className = "",
  showFileBadge = true,
  linkHref,
  linkLabel,
  onQuickPreview,
}) => {
  const [showLinkCard, setShowLinkCard] = useState(false);
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const highResImage = expectedFile?.startsWith("/student-products/")
    ? expectedFile
    : MUSEUM_IMAGE_MAP[subject];
  const fallback = DEFAULT_SUBJECT_LINKS[subject];
  const targetHref = linkHref || fallback.href;
  const targetLabel = linkLabel || caption || fallback.label;
  const displayUrl = origin ? `${origin}${targetHref}` : targetHref;

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(displayUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Ignore clipboard permission denials in restricted frames
    }
  };

  if (highResImage) {
    return (
      <div
        className={`relative overflow-hidden bg-white text-heritage-ink select-none border-b border-heritage-crimson/20 cursor-pointer group/art ${className}`}
        role="button"
        tabIndex={0}
        aria-expanded={showLinkCard}
        aria-label={`Nhấp để hiện đường link tới ${targetLabel}`}
        onClick={(e) => {
          // Avoid toggling when clicking inside already revealed interactive controls
          if ((e.target as HTMLElement).closest("[data-artwork-link-panel]")) {
            return;
          }
          setShowLinkCard((prev) => !prev);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setShowLinkCard((prev) => !prev);
          } else if (e.key === "Escape") {
            setShowLinkCard(false);
          }
        }}
      >
        <img
          src={highResImage}
          alt={caption || `Tác phẩm minh họa chủ đề ${subject}`}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-heritage-ivoryLight/95 via-white/40 to-transparent"
        />

        {showFileBadge && !showLinkCard && (caption || expectedFile) && (
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between gap-2 rounded-lg bg-white/95 backdrop-blur-sm px-3 py-1.5 text-[11px] text-heritage-crimson border border-heritage-crimson/25 shadow-sm">
            <span className="min-w-0 flex-1 font-semibold tracking-wide truncate">
              {caption || "Tư liệu Diorama Bảo tàng số"}
            </span>
            <span className="inline-flex shrink-0 items-center gap-1 rounded bg-heritage-crimson/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-heritage-crimson">
              <Link2 className="h-3 w-3" aria-hidden="true" />
              <span className="hidden sm:inline">Nhấp xem link</span>
            </span>
          </div>
        )}

        {/* Bảng hiển thị đường link trực tiếp khi người dùng nhấp vào hình */}
        {showLinkCard && (
          <div
            data-artwork-link-panel
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 z-20 flex flex-col justify-between bg-[#1F110E]/95 backdrop-blur-sm p-3.5 sm:p-4 text-white animate-fadeIn cursor-default"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-heritage-crimson px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white border border-heritage-goldAntique/50">
                <Link2 className="h-3 w-3" aria-hidden="true" />
                <span>Đường dẫn tới phần này</span>
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowLinkCard(false);
                }}
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 hover:bg-heritage-crimson text-white transition-colors"
                aria-label="Đóng bảng đường link"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="my-auto space-y-2 py-2">
              <p className="font-serif text-sm sm:text-base font-bold text-[#FDE68A] line-clamp-2 leading-snug">
                {targetLabel}
              </p>
              <div className="flex items-center gap-1.5 rounded-lg bg-black/45 px-2.5 py-1.5 border border-heritage-goldAntique/45">
                <Link
                  href={targetHref}
                  className="min-w-0 flex-1 truncate font-mono text-[11px] sm:text-xs text-white hover:text-[#FDE68A] underline underline-offset-2"
                >
                  {targetHref}
                </Link>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex shrink-0 items-center gap-1 rounded bg-white/15 hover:bg-white/25 px-2 py-1 text-[10px] font-semibold text-[#FDE68A] transition-colors"
                  title={`Sao chép ${displayUrl}`}
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-300" />
                      <span>Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Chép</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={targetHref}
                className="inline-flex flex-1 min-w-[140px] items-center justify-center gap-1.5 rounded-lg bg-heritage-crimson hover:bg-[#991B1B] px-3 py-2 text-xs font-bold text-white border border-heritage-goldAntique/60 transition-colors"
              >
                <span>Đi tới phần này</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              {onQuickPreview && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowLinkCard(false);
                    onQuickPreview();
                  }}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-white/15 hover:bg-white/25 px-3 py-2 text-xs font-semibold text-white transition-colors"
                >
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Xem nhanh</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-heritage-woodDark text-heritage-ivory select-none ${className}`}
      role="img"
      aria-label={caption || `Bản vẽ minh họa chủ đề ${subject}`}
    >
      <svg
        viewBox="0 0 800 500"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`bg-${subject}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6E1714" />
            <stop offset="50%" stopColor="#52100E" />
            <stop offset="100%" stopColor="#2B1410" />
          </linearGradient>
        </defs>
        <rect width="800" height="500" fill={`url(#bg-${subject})`} />
      </svg>
    </div>
  );
};

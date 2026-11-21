"use client";

import React, { useEffect, useState } from "react";
import {
  Landmark,
  Compass,
  BookOpen,
  Wrench,
  Eye,
  MessageCircle,
  Sparkles,
  ArrowUp,
} from "lucide-react";

interface ScrollChapter {
  id: string;
  number: string;
  label: string;
  shortLabel: string;
  icon: React.ReactNode;
}

const CHAPTERS: ScrollChapter[] = [
  {
    id: "trang-chu",
    number: "00",
    label: "Khởi hành • Sân khấu 3D",
    shortLabel: "Mở đầu",
    icon: <Landmark className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "bao-tang-so",
    number: "01",
    label: "Chặng 1 • Bảo tàng số",
    shortLabel: "Bảo tàng",
    icon: <Compass className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "chu-de-hoc-tap",
    number: "02",
    label: "Chặng 2 • Chủ đề học tập",
    shortLabel: "Chủ đề",
    icon: <BookOpen className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "xuong-steam",
    number: "03",
    label: "Chặng 3 • Xưởng STEAM",
    shortLabel: "Xưởng STEAM",
    icon: <Wrench className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "trien-lam-so",
    number: "04",
    label: "Chặng 4 • Triển lãm số",
    shortLabel: "Triển lãm",
    icon: <Eye className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "dien-dan-hoc-tap",
    number: "05",
    label: "Chặng 5 • Diễn đàn học tập",
    shortLabel: "Diễn đàn",
    icon: <MessageCircle className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: "loi-moi-tham-gia",
    number: "06",
    label: "Kết thúc • Tiếp nối di sản",
    shortLabel: "Tiếp nối",
    icon: <Sparkles className="h-4 w-4" aria-hidden="true" />,
  },
];

/**
 * Hệ thống Điều hướng Hành trình Cuộn Trang (Scroll Storytelling Chapter Rail & Dock)
 * Theo chuẩn UI/UX Pro Max (Scroll-Triggered Storytelling) & Emil Kowalski (Tactile Navigation):
 * - Trên Desktop: Thanh lộ trình dọc cố định bên phải (Chapter Rail) hiển thị rõ học sinh đang ở Chặng nào (00 -> 06).
 * - Trên Điện thoại: Thanh Dock nổi gọn gàng ở cạnh dưới màn hình để chuyển nhanh giữa các chương.
 */
export const ScrollStoryNavigator: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("trang-chu");
  const [scrollRatio, setScrollRatio] = useState<number>(0);
  const [showRail, setShowRail] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - doc.clientHeight);
      setScrollRatio(Math.min(1, Math.max(0, window.scrollY / maxScroll)));

      const introEl = document.getElementById("gioi-thieu-khong-gian");
      const pastCinema = introEl
        ? introEl.getBoundingClientRect().top <= window.innerHeight * 0.65
        : window.scrollY > window.innerHeight * 3.4;
      setShowRail(pastCinema);

      const viewportMid = window.innerHeight * 0.36;
      for (const ch of [...CHAPTERS].reverse()) {
        const el = document.getElementById(ch.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportMid) {
            setActiveId(ch.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToChapter = (id: string) => {
    if (id === "trang-chu") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveId("trang-chu");
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <>
      {/* 1. DESKTOP RIGHT CHAPTER RAIL (Hiện ra mượt mà khi cuộn qua phần trình chiếu ghim) */}
      <aside
        aria-label="Lộ trình cuộn trang 7 chặng"
        className={`fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:flex flex-col items-end gap-2.5 transition-all duration-300 [transition-timing-function:var(--ease-out-strong)] ${
          showRail
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl bg-white/95 backdrop-blur-md p-2.5 border-2 border-heritage-crimson/25 shadow-museum flex flex-col gap-1.5">
          <div className="px-2.5 py-1 border-b border-heritage-crimson/15 flex items-center justify-between gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-heritage-crimson">
              Lộ trình cuộn
            </span>
            <span className="font-mono text-[11px] font-bold text-heritage-woodDark">
              {Math.round(scrollRatio * 100)}%
            </span>
          </div>

          {CHAPTERS.map((ch) => {
            const isActive = activeId === ch.id;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => scrollToChapter(ch.id)}
                className={`group flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-xs font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-heritage-crimson text-white shadow-sm"
                    : "text-heritage-ink hover:bg-heritage-ivoryDeep hover:text-heritage-crimson"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[11px] font-bold ${
                      isActive ? "text-heritage-goldSoft" : "text-heritage-crimson"
                    }`}
                  >
                    {ch.number}
                  </span>
                  <span className="whitespace-nowrap">{ch.shortLabel}</span>
                </span>
                <span
                  className={`h-2 w-2 rounded-full transition-transform duration-200 ${
                    isActive
                      ? "bg-white scale-125"
                      : "bg-heritage-crimson/30 group-hover:bg-heritage-crimson"
                  }`}
                />
              </button>
            );
          })}

          {scrollRatio > 0.15 && (
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-heritage-ivoryLight px-3 py-1.5 text-[11px] font-bold text-heritage-crimson border border-heritage-crimson/25 hover:bg-heritage-crimson hover:text-white transition-colors"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>Lên đầu trang</span>
            </button>
          )}
        </div>
      </aside>

      {/* 2. MOBILE & TABLET FLOATING BOTTOM DOCK (Hiện khi cuộn qua rạp chiếu ghim để không chồng lấn scrubber) */}
      <nav
        aria-label="Điều hướng cuộn nhanh trên di động"
        className={`fixed bottom-3 left-3 right-3 z-40 xl:hidden transition-all duration-300 [transition-timing-function:var(--ease-out-strong)] ${
          showRail
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-lg rounded-2xl bg-white/95 backdrop-blur-md px-2 py-1.5 border-2 border-heritage-crimson/30 shadow-cabinet flex items-center justify-between gap-1 overflow-x-auto">
          {CHAPTERS.slice(0, 6).map((ch) => {
            const isActive = activeId === ch.id;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => scrollToChapter(ch.id)}
                className={`flex flex-col items-center justify-center rounded-xl px-2.5 py-1.5 text-[11px] font-semibold shrink-0 transition-colors ${
                  isActive
                    ? "bg-heritage-crimson text-white"
                    : "text-heritage-ink hover:bg-heritage-ivoryDeep"
                }`}
              >
                {ch.icon}
                <span className="mt-0.5">{ch.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

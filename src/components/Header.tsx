"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Landmark,
  Search,
  ArrowRight,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Trang chủ", id: "trang-chu", href: "/#trang-chu" },
  { label: "Bảo tàng số", id: "bao-tang-so", href: "/#bao-tang-so" },
  { label: "Chủ đề học tập", id: "chu-de-hoc-tap", href: "/#chu-de-hoc-tap" },
  { label: "Xưởng STEAM", id: "xuong-steam", href: "/#xuong-steam" },
  { label: "Triển lãm số", id: "trien-lam-so", href: "/#trien-lam-so" },
  { label: "Diễn đàn học tập", id: "dien-dan-hoc-tap", href: "/#dien-dan-hoc-tap" },
  { label: "Trắc nghiệm", id: "trac-nghiem", href: "/trac-nghiem" },
];

interface QuickIndexEntry {
  title: string;
  subtitle: string;
  category: string;
  href: string;
}

const HERITAGE_SEARCH_INDEX: QuickIndexEntry[] = [
  {
    title: "Chuyên trang Tổ 1 — Mặt nạ Tri huyện (Lớp 10.3 THPT Bình Phú)",
    subtitle: "Xem phân công thành viên, hồ sơ nhân vật Tri huyện & tiến độ nộp sản phẩm Tổ 1",
    category: "Chuyên trang Tổ 1",
    href: "/trien-lam-so/to-1",
  },
  {
    title: "Chuyên trang Tổ 2 — Mặt nạ Đề lại (Lớp 10.3 THPT Bình Phú)",
    subtitle: "Xem ảnh mặt nạ bìa cứng 3D Đề lại, bảng mã màu & phân công Tổ 2",
    category: "Chuyên trang Tổ 2",
    href: "/trien-lam-so/to-2",
  },
  {
    title: "Chuyên trang Tổ 3 — Mặt nạ Lính lệ & 3 Video (Lớp 10.3 THPT Bình Phú)",
    subtitle: "Xem mặt nạ đắp nổi, bản vẽ 18×24cm, video thuyết minh 01:50 & 6 ảnh hoạt động Tổ 3",
    category: "Chuyên trang Tổ 3",
    href: "/trien-lam-so/to-3",
  },
  {
    title: "Chuyên trang Tổ 4 — Mặt nạ Trùm Sò, Word & 2 Video (Lớp 10.3 THPT Bình Phú)",
    subtitle: "Xem mặt nạ Trùm Sò, bản vẽ mm/cm, nguyên văn BÀI THUYẾT MINH.docx & 2 video Tổ 4",
    category: "Chuyên trang Tổ 4",
    href: "/trien-lam-so/to-4",
  },
  {
    title: "Trắc nghiệm Di sản Văn học & STEAM (20 câu hỏi)",
    subtitle:
      "Chuyên trang ôn luyện Tuồng đồ Huyện đường, Sử thi Đăm Săn & Quy trình STEAM",
    category: "Trắc nghiệm",
    href: "/trac-nghiem",
  },
  {
    title: "Chặng 01: Bảo tàng số — Sắc Tuồng & Công đường Huyện đường",
    subtitle: "Cuộn tới không gian hóa trang ước lệ và 4 nhân vật: Tri huyện, Đề lại, Lính lệ, Trùm Sò",
    category: "Bảo tàng số",
    href: "/#bao-tang-so",
  },
  {
    title: "Chặng 01: Bảo tàng số — Không gian Sử thi Đăm Săn (Ê-đê)",
    subtitle: "Cuộn tới nhà dài Tây Nguyên, diễn xướng Klei Khan, Rừng Sáp Đen & Nữ thần Mặt Trời",
    category: "Bảo tàng số",
    href: "/#bao-tang-so",
  },
  {
    title: "Chặng 02: Chủ đề 01 — Mã màu và nét mặt ước lệ (Huyện đường)",
    subtitle: "Cuộn tới hồ sơ giải mã 4 nhân vật: Tri huyện, Đề lại, Lính lệ, Trùm Sò",
    category: "Chủ đề học tập",
    href: "/#chu-de-hoc-tap",
  },
  {
    title: "Chặng 02: Chủ đề 02 — Đánh thức thế giới sử thi (Đăm Săn)",
    subtitle: "Cuộn tới thiết kế hộp kể chuyện 3 lớp cảnh Đăm Săn đi bắt Nữ thần Mặt Trời",
    category: "Chủ đề học tập",
    href: "/#chu-de-hoc-tap",
  },
  {
    title: "Chặng 03: Xưởng sáng tạo STEAM & Bàn mô phỏng trực tuyến",
    subtitle: "Cuộn tới quy trình 5 bước thiết kế, 5 thành tố S-T-E-A-M & Bàn phối màu mặt nạ",
    category: "Xưởng STEAM",
    href: "/#xuong-steam",
  },
  {
    title: "Chặng 04: Triển lãm số — Những sáng tạo từ trang sách",
    subtitle: "Cuộn tới sản phẩm Mặt nạ Huyện đường, Hộp kể chuyện Đăm Săn, Infographic & Podcast",
    category: "Triển lãm số",
    href: "/#trien-lam-so",
  },
  {
    title: "Chặng 05: Diễn đàn học tập & Hướng dẫn Nói và Nghe",
    subtitle: "Cuộn tới câu hỏi thảo luận Huyện đường & Đăm Săn, cấu trúc thuyết trình",
    category: "Diễn đàn",
    href: "/#dien-dan-hoc-tap",
  },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState("trang-chu");
  const pathname = usePathname() || "/";

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      if (total > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (window.scrollY / total) * 100)));
      }
      if (pathname === "/") {
        const viewportMid = window.innerHeight * 0.35;
        for (const item of [...NAV_ITEMS].reverse()) {
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= viewportMid) {
              setActiveSectionId(item.id);
              break;
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isNavItemActive = (item: (typeof NAV_ITEMS)[number]) => {
    if (pathname === "/") {
      return activeSectionId === item.id;
    }
    return pathname.startsWith(`/${item.id}`);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      if (sectionId === "trang-chu") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSectionId("trang-chu");
        return;
      }
      const el = document.getElementById(sectionId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSectionId(sectionId);
      }
    }
  };

  const filteredEntries = HERITAGE_SEARCH_INDEX.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md text-heritage-ink border-b-2 border-heritage-crimson/20 shadow-museum">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 lg:gap-3 xl:gap-4 px-3 py-2.5 sm:px-6 sm:py-3 xl:px-8">
          {/* Logo và tên website (Trắng & Đỏ Son) */}
          <Link
            href="/"
            onClick={(e) => {
              setMobileMenuOpen(false);
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSectionId("trang-chu");
              }
            }}
            className="group flex min-w-0 shrink items-center gap-2 sm:gap-2.5 xl:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson rounded-lg"
          >
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-heritage-crimson text-white border border-heritage-goldAntique transition-transform duration-200 group-hover:scale-105 shadow-sm">
              <Landmark className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 whitespace-nowrap">
              <span className="block font-serif text-[15px] sm:text-lg xl:text-xl font-bold tracking-[-0.015em] leading-tight text-heritage-crimson truncate">
                DI SẢN VĂN HỌC VIỆT
              </span>
              <span className="block text-[10px] sm:text-[11px] font-medium tracking-[0.01em] xl:tracking-[0.02em] text-heritage-ink/75 truncate">
                Digital Literature &amp; STEAM Heritage
              </span>
            </div>
          </Link>

          {/* Menu điều hướng Desktop & Tablet ngang (fit gọn 1 hàng tại 1024px) */}
          <nav aria-label="Điều hướng chính" className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = isNavItemActive(item);
              const navClass = `whitespace-nowrap rounded-lg px-1.5 py-1.5 xl:px-2.5 text-[12px] xl:text-[13px] font-medium tracking-[-0.005em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson ${
                isActive
                  ? "bg-heritage-crimson text-white shadow-sm"
                  : "text-heritage-ink hover:bg-heritage-ivoryDeep hover:text-heritage-crimson"
              }`;

              if (!item.href.startsWith("/#")) {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={navClass}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={navClass}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Nút Tra cứu nhanh Học liệu (Command Palette) & Nút Menu Mobile/Tablet */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
              aria-label="Tra cứu nhanh học liệu và phòng trưng bày (Ctrl+K)"
              className="whitespace-nowrap inline-flex min-h-[40px] sm:min-h-[42px] items-center gap-1.5 sm:gap-2 rounded-xl bg-heritage-ivoryLight px-2.5 sm:px-3 py-2 text-xs font-semibold text-heritage-crimson border border-heritage-crimson/30 hover:bg-heritage-crimson hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson"
            >
              <Search className="h-4 w-4 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline lg:hidden xl:inline">Tra cứu</span>
              <kbd className="hidden xl:inline-block rounded bg-white px-1.5 py-0.5 font-mono text-[11px] text-heritage-crimson border border-heritage-crimson/25">
                Ctrl K
              </kbd>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={mobileMenuOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
              className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl text-heritage-crimson hover:bg-heritage-ivoryDeep focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Thanh tiến độ đọc trang màu Đỏ Son */}
        <div className="h-0.5 w-full bg-heritage-ivoryDeep" aria-hidden="true">
          <div
            className="h-full bg-heritage-crimson transition-[width] duration-150 ease-out"
            style={{ width: `${scrollPercent}%` }}
          />
        </div>

        {/* Menu thu gọn trên điện thoại & máy tính bảng dọc */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation-menu"
            aria-label="Điều hướng di động"
            className="relative z-40 border-t border-heritage-crimson/20 bg-white px-4 pb-5 pt-3 shadow-cabinet lg:hidden max-h-[calc(100dvh-64px)] overflow-y-auto"
          >
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = isNavItemActive(item);
                const mobileClass = `flex min-h-[44px] items-center rounded-xl px-4 py-2.5 text-sm sm:text-base font-semibold transition-colors ${
                  isActive
                    ? "bg-heritage-crimson text-white shadow-sm"
                    : "text-heritage-ink hover:bg-heritage-ivoryDeep hover:text-heritage-crimson"
                }`;

                if (!item.href.startsWith("/#")) {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={mobileClass}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={mobileClass}
                  >
                    {item.label}
                  </a>
                );
              })}

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="sm:col-span-2 mt-1 flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-heritage-ivoryLight px-4 py-2.5 text-sm font-semibold text-heritage-crimson border border-heritage-crimson/30 hover:bg-heritage-crimson hover:text-white transition-colors"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                <span>Tra cứu nhanh học liệu</span>
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Nền mờ đóng nhanh Menu di động khi chạm bên ngoài */}
      {mobileMenuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 top-[60px] z-30 bg-black/35 lg:hidden"
        />
      )}

      {/* Hộp thoại Tra cứu nhanh Học liệu (Trắng & Đỏ Son) */}
      {searchOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSearchOpen(false);
            }
          }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-3 pt-10 sm:p-4 sm:pt-24"
          role="dialog"
          aria-modal="true"
          aria-label="Tra cứu nhanh học liệu và chuyên trang"
        >
          <div className="w-full max-w-2xl rounded-2xl bg-white text-heritage-ink border-2 border-heritage-crimson shadow-cabinet overflow-hidden">
            <div className="flex items-center gap-2.5 sm:gap-3 bg-heritage-crimson px-3.5 py-3 sm:px-4 sm:py-3.5 text-white">
              <Search className="h-5 w-5 text-white shrink-0" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm nhanh: Huyện đường, Tri huyện, Đề lại, Trùm Sò, Đăm Săn..."
                className="min-w-0 w-full bg-transparent text-sm sm:text-base text-white placeholder:text-white/75 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Đóng hộp thoại tra cứu"
                className="shrink-0 rounded-lg bg-white/20 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-white hover:text-heritage-crimson"
              >
                <X className="h-4 w-4 sm:hidden" aria-hidden="true" />
                <span className="hidden sm:inline">ESC</span>
              </button>
            </div>

            <div className="max-h-[75dvh] sm:max-h-[65vh] overflow-y-auto p-3 divide-y divide-heritage-crimson/15">
              {filteredEntries.length === 0 ? (
                <div className="py-8 text-center text-sm text-heritage-ink/70">
                  Không tìm thấy mục học liệu nào khớp với từ khóa &ldquo;{searchQuery}&rdquo;.
                </div>
              ) : (
                filteredEntries.map((entry, idx) => (
                  <Link
                    key={idx}
                    href={entry.href}
                    onClick={(e) => {
                      setSearchOpen(false);
                      setSearchQuery("");
                      if (pathname === "/" && entry.href.startsWith("/#")) {
                        const secId = entry.href.replace("/#", "");
                        const el = document.getElementById(secId);
                        if (el) {
                          e.preventDefault();
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }
                    }}
                    className="flex items-center justify-between gap-3 sm:gap-4 rounded-xl p-3 hover:bg-heritage-ivoryDeep transition-colors"
                  >
                    <div className="min-w-0">
                      <span className="inline-block rounded bg-heritage-crimson px-2 py-0.5 text-[11px] font-semibold text-white">
                        {entry.category}
                      </span>
                      <h4 className="mt-1 font-serif text-sm sm:text-base font-bold text-heritage-woodDark">
                        {entry.title}
                      </h4>
                      <p className="text-xs text-heritage-ink leading-relaxed">
                        {entry.subtitle}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-heritage-crimson" />
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

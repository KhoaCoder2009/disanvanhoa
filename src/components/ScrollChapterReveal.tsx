"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollChapterRevealProps {
  children: React.ReactNode;
  chapterNumber: string;
  chapterName: string;
  className?: string;
}

/**
 * Hiệu ứng Chuyển Chương Cuộn Trang Điện Ảnh (Scroll-Triggered Chapter Entrance)
 * Áp dụng chuẩn Emil Kowalski (--ease-out-strong) và UI/UX Pro Max (prefers-reduced-motion safe):
 * Nội dung luôn hiển thị rõ ràng, và khi cuộn tới từng chặng sẽ có thanh chỉ báo chương (Chapter Divider)
 * dẫn dắt mạch kể chuyện liền mạch từ đầu tới cuối Landing Page.
 */
export const ScrollChapterReveal: React.FC<ScrollChapterRevealProps> = ({
  children,
  chapterNumber,
  chapterName,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative transition-transform duration-500 [transition-timing-function:var(--ease-out-strong)] ${
        inView ? "translate-y-0" : "translate-y-2"
      } ${className}`}
    >
      {/* Thanh Dấu Ấn Chặng Hành Trình (Scroll Storytelling Chapter Marker) */}
      <div className="bg-white border-t border-heritage-crimson/15">
        <div className="mx-auto max-w-7xl px-4 pt-5 sm:pt-6 sm:px-6 lg:px-8 flex items-center gap-3 sm:gap-4">
          <span className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-0.5 rounded-2xl sm:rounded-full bg-heritage-crimson px-3 py-1 sm:px-3.5 text-[11px] sm:text-xs font-bold leading-snug text-white shadow-sm">
            <span className="font-mono shrink-0">{chapterNumber}</span>
            <span aria-hidden="true">•</span>
            <span>{chapterName}</span>
          </span>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-heritage-crimson/40 via-heritage-crimson/15 to-transparent" />
        </div>
      </div>
      {children}
    </div>
  );
};

"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  Copy,
  Home,
  Link2,
  X,
} from "lucide-react";

export type TransitionType =
  | "base"
  | "iris-right"
  | "curtain-up"
  | "curtain-down"
  | "screen-sweep"
  | "screen-right"
  | "solar-iris";

export interface CinemaScene {
  id: string;
  title: string;
  isHeroTitle?: boolean;
  slogan: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  detailHref?: string;
  detailLabel?: string;
  image: string;
  transitionType: TransitionType;
}

export interface CinemaBreadcrumb {
  label: string;
  href?: string;
}

export interface ScrollVisualCinemaProps {
  id?: string;
  scenes?: CinemaScene[];
  skipHref?: string;
  skipLabel?: string;
  breadcrumbs?: CinemaBreadcrumb[];
  ariaLabel?: string;
}

const DEFAULT_CINEMA_SCENES: CinemaScene[] = [
  {
    id: "scene-01",
    title: "DI SẢN VĂN HỌC VIỆT",
    isHeroTitle: true,
    slogan: "Dự án Tuồng đồ Huyện đường & Sử thi Đăm Săn (Ngữ văn 10 – STEAM)",
    description:
      "Không gian học tập số kết nối hai kiệt tác văn học dân gian: tiếng cười trào phúng chốn công đường Huyện đường và khát vọng kỳ vĩ của sử thi Đăm Săn.",
    ctaLabel: "Khám phá Bảo tàng số",
    ctaHref: "#bao-tang-so",
    detailHref: "/bao-tang-so",
    detailLabel: "Bảo tàng số Di sản Văn học",
    image: "/images/cinema/scene-01-di-san.png",
    transitionType: "base",
  },
  {
    id: "scene-02",
    title: "SẮC TUỒNG — NGÔN NGỮ MẶT NẠ ƯỚC LỆ",
    slogan: "Bảng mã màu đỏ – trắng mốc – xanh xám – vàng sậm trong hóa trang cổ",
    description:
      "Đọc vị bản chất trung – nịnh qua từng đường nét vẽ mặt và tỷ lệ hình khối đối xứng đặc trưng của nghệ thuật tuồng hài dân gian.",
    ctaLabel: "Xem Sắc Tuồng Huyện đường",
    ctaHref: "#bao-tang-so",
    detailHref: "/bao-tang-so/sac-tuong-huyen-duong",
    detailLabel: "Phòng 01: Sắc Tuồng Huyện đường",
    image: "/images/cinema/scene-03-sac-tuong.png",
    transitionType: "iris-right",
  },
  {
    id: "scene-03",
    title: "HUYỆN ĐƯỜNG — PHONG THÁI CÔNG ĐƯỜNG",
    slogan: "Trích đoạn tuồng đồ Nghêu, Sò, Ốc, Hến (Ngữ văn 10)",
    description:
      "Khảo sát không gian án thư nơi công lý bị mua chuộc bằng lễ vật, mở màn tấn hài kịch phê phán bộ máy quan lại phong kiến xưa.",
    ctaLabel: "Vào Dự án 01: Huyện đường",
    ctaHref: "#chu-de-hoc-tap",
    detailHref: "/chu-de-hoc-tap/chu-de-01-huyen-duong",
    detailLabel: "Chủ đề 01: Dự án Tuồng đồ Huyện đường",
    image: "/images/cinema/scene-07-huyen-duong.png",
    transitionType: "curtain-up",
  },
  {
    id: "scene-04",
    title: "TỨ ĐẠI NHÂN VẬT CÔNG ĐƯỜNG",
    slogan: "Tri huyện • Đề lại • Lính lệ • Trùm Sò",
    description:
      "Chuyển hóa lời thoại tự xưng và bản tính tham lam, lươn lẹo, keo kiệt thành bộ chân dung mặt nạ 3D bằng bìa cứng và vi diễn sân khấu hóa.",
    ctaLabel: "Giải mã 4 nhân vật Huyện đường",
    ctaHref: "#chu-de-hoc-tap",
    detailHref: "/bao-tang-so/tu-dai-nhan-vat",
    detailLabel: "Phòng 02: Tứ đại nhân vật công đường",
    image: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
    transitionType: "screen-sweep",
  },
  {
    id: "scene-05",
    title: "KHÔNG GIAN Ê-ĐÊ — NHÀ DÀI & KLEI KHAN",
    slogan: "Bối cảnh văn hóa Tây Nguyên trong Sử thi Đăm Săn",
    description:
      "Tái hiện kiến trúc nhà dài cổ truyền, tiếng cồng chiêng Hlong và nhịp hát kể khan vang vọng bên bếp lửa buôn làng Tây Nguyên.",
    ctaLabel: "Khám phá Sử thi Đăm Săn",
    ctaHref: "#bao-tang-so",
    detailHref: "/bao-tang-so/khong-gian-dam-san",
    detailLabel: "Phòng 03: Không gian văn hóa Ê-đê & Đăm Săn",
    image: "/images/cinema/scene-dam-san-nha-dai.png",
    transitionType: "solar-iris",
  },
  {
    id: "scene-06",
    title: "ĐĂM SĂN ĐI BẮT NỮ THẦN MẶT TRỜI",
    slogan: "Đánh thức thế giới sử thi qua Hộp kể chuyện 3 lớp ánh sáng",
    description:
      "Vượt rừng Sáp Đen tiến tới ánh dương chói lòa: kết hợp quang học LED vàng ấm, giấy can mờ và thanh trượt cơ học kể chuyện tương tác.",
    ctaLabel: "Xem Chủ đề 02: Đăm Săn",
    ctaHref: "#chu-de-hoc-tap",
    detailHref: "/chu-de-hoc-tap/chu-de-02-dam-san",
    detailLabel: "Chủ đề 02: Hộp kể chuyện Sử thi Đăm Săn",
    image: "/images/cinema/scene-05-dam-san-steam.png",
    transitionType: "curtain-down",
  },
  {
    id: "scene-07",
    title: "XƯỞNG CHẾ TÁC STEAM — QUY TRÌNH 5 BƯỚC",
    slogan: "Xác định vấn đề • Thiết kế • Chế tạo • Thử nghiệm • Cải tiến",
    description:
      "Từ bản vẽ hình học tỉ lệ chuẩn, pha màu mặt nạ Huyện đường đến thử nghiệm mạch LED cho hộp sử thi Đăm Săn.",
    ctaLabel: "Vào Xưởng sáng tạo STEAM",
    ctaHref: "#xuong-steam",
    detailHref: "/xuong-steam",
    detailLabel: "Xưởng Sáng tạo Ngữ văn STEAM (Mô hình 3D)",
    image: "/images/cinema/scene-09-xuong-steam.png",
    transitionType: "screen-right",
  },
  {
    id: "scene-08",
    title: "TRIỂN LÃM SỐ — TỪ TRANG SÁCH ĐẾN HIỆN ĐẠI",
    slogan: "Mặt nạ 3D • Sa bàn sử thi • Infographic • Podcast & Trắc nghiệm",
    description:
      "Lưu trữ và tôn vinh các sản phẩm sáng tạo học sinh, sẵn sàng cho hoạt động Nói – Nghe và củng cố kiến thức qua trắc nghiệm trực tuyến.",
    ctaLabel: "Tham quan Triển lãm số",
    ctaHref: "#trien-lam-so",
    detailHref: "/trien-lam-so",
    detailLabel: "Triển lãm số & Hồ sơ Dự án Huyện đường",
    image: "/images/cinema/scene-10-trien-lam.png",
    transitionType: "solar-iris",
  },
];

const HEADER_OFFSET = 64;

const clamp = (val: number, min: number, max: number) =>
  Math.min(max, Math.max(min, val));

const smoothstep = (edge0: number, edge1: number, x: number) => {
  const u = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return u * u * (3 - 2 * u);
};

export const ScrollVisualCinema: React.FC<ScrollVisualCinemaProps> = ({
  id = "trang-chu",
  scenes = DEFAULT_CINEMA_SCENES,
  skipHref = "#gioi-thieu-khong-gian",
  skipLabel = "Bỏ qua trình chiếu",
  breadcrumbs,
  ariaLabel = "Hành trình thị giác Dự án Huyện đường và Sử thi Đăm Săn",
}) => {
  const runwayRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const copyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const curtainLineRef = useRef<HTMLDivElement | null>(null);
  const screenLineRef = useRef<HTMLDivElement | null>(null);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const targetPointerRef = useRef({ x: 0, y: 0 });
  const currentPointerRef = useRef({ x: 0, y: 0 });
  const lastSceneIdxRef = useRef(0);

  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const [showSceneLink, setShowSceneLink] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [siteOrigin, setSiteOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSiteOrigin(window.location.origin);
    }
  }, []);

  useEffect(() => {
    const sceneCount = scenes.length;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarsePointer = window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    ).matches;

    const damp = (cur: number, to: number, rate: number, dt: number) =>
      cur + (to - cur) * (1 - Math.exp(-rate * dt));

    const computeScrollTarget = () => {
      const runway = runwayRef.current;
      if (!runway) return;
      const rect = runway.getBoundingClientRect();
      const stageEl = stageRef.current;
      const headerOffset = stageEl
        ? parseFloat(window.getComputedStyle(stageEl).top) || HEADER_OFFSET
        : HEADER_OFFSET;
      const scrollable = Math.max(
        1,
        runway.offsetHeight - (window.innerHeight - headerOffset)
      );
      const ratio = clamp((headerOffset - rect.top) / scrollable, 0, 1);
      targetProgressRef.current = ratio * Math.max(1, sceneCount - 1);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (isCoarsePointer || prefersReducedMotion) return;
      const stage = stageRef.current;
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1;
      const ny = ((e.clientY - rect.top) / Math.max(1, rect.height)) * 2 - 1;
      targetPointerRef.current = { x: clamp(nx, -1, 1), y: clamp(ny, -1, 1) };
    };

    const handlePointerLeave = () => {
      targetPointerRef.current = { x: 0, y: 0 };
    };

    window.addEventListener("scroll", computeScrollTarget, { passive: true });
    window.addEventListener("resize", computeScrollTarget, { passive: true });
    const stageEl = stageRef.current;
    stageEl?.addEventListener("pointermove", handlePointerMove);
    stageEl?.addEventListener("pointerleave", handlePointerLeave);

    computeScrollTarget();
    currentProgressRef.current = targetProgressRef.current;

    let rafId = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick);
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      if (prefersReducedMotion) {
        currentProgressRef.current = targetProgressRef.current;
        currentPointerRef.current = { x: 0, y: 0 };
      } else {
        currentProgressRef.current = damp(
          currentProgressRef.current,
          targetProgressRef.current,
          10.0,
          dt
        );
        currentPointerRef.current.x = damp(
          currentPointerRef.current.x,
          targetPointerRef.current.x,
          6.0,
          dt
        );
        currentPointerRef.current.y = damp(
          currentPointerRef.current.y,
          targetPointerRef.current.y,
          6.0,
          dt
        );
      }

      const cur = currentProgressRef.current;
      const px = prefersReducedMotion ? 0 : -currentPointerRef.current.x * 10;
      const py = prefersReducedMotion ? 0 : -currentPointerRef.current.y * 8;

      let horizontalSeamPos: number | null = null;
      let horizontalSeamAlpha = 0;
      let verticalSeamPos: number | null = null;
      let verticalSeamAlpha = 0;

      for (let i = 0; i < scenes.length; i++) {
        const scene = scenes[i];
        const layer = layerRefs.current[i];
        const img = imgRefs.current[i];
        if (!layer || !img) continue;

        if (i === 0) {
          const baseScale = 1 + Math.min(1, cur) * 0.08;
          layer.style.visibility = "visible";
          layer.style.opacity = "1";
          img.style.transform = `translate3d(${(px * 0.6).toFixed(2)}px, ${(
            py * 0.6
          ).toFixed(2)}px, 0) scale(${baseScale.toFixed(4)})`;
          continue;
        }

        const t = clamp(cur - (i - 1), 0, 1);
        const m = smoothstep(0.1, 0.9, t);

        if (t <= 0.001) {
          layer.style.visibility = "hidden";
          layer.style.opacity = "0";
        } else {
          layer.style.visibility = "visible";
          layer.style.opacity = String(clamp(m * 1.35, 0, 1));

          if (scene.transitionType === "iris-right") {
            layer.style.clipPath = `circle(${(m * 145).toFixed(2)}% at 64% 50%)`;
          } else if (scene.transitionType === "solar-iris") {
            layer.style.clipPath = `circle(${(m * 150).toFixed(2)}% at 64% 46%)`;
          } else if (scene.transitionType === "curtain-up") {
            const topPct = (1 - m) * 100;
            layer.style.clipPath = `inset(${topPct.toFixed(2)}% 0% 0% 0%)`;
            if (m > 0.01 && m < 0.99) {
              horizontalSeamPos = topPct;
              horizontalSeamAlpha = Math.sin(m * Math.PI);
            }
          } else if (scene.transitionType === "curtain-down") {
            const bottomPct = (1 - m) * 100;
            layer.style.clipPath = `inset(0% 0% ${bottomPct.toFixed(2)}% 0%)`;
            if (m > 0.01 && m < 0.99) {
              horizontalSeamPos = m * 100;
              horizontalSeamAlpha = Math.sin(m * Math.PI);
            }
          } else if (scene.transitionType === "screen-sweep") {
            const leftPct = (1 - m) * 100;
            layer.style.clipPath = `inset(0% 0% 0% ${leftPct.toFixed(2)}%)`;
            if (m > 0.01 && m < 0.99) {
              verticalSeamPos = leftPct;
              verticalSeamAlpha = Math.sin(m * Math.PI);
            }
          } else if (scene.transitionType === "screen-right") {
            const rightPct = (1 - m) * 100;
            layer.style.clipPath = `inset(0% ${rightPct.toFixed(2)}% 0% 0%)`;
            if (m > 0.01 && m < 0.99) {
              verticalSeamPos = m * 100;
              verticalSeamAlpha = Math.sin(m * Math.PI);
            }
          }

          const holdZoom = clamp(cur - i, 0, 1) * 0.07;
          const settleScale = 1.1 - m * 0.1 + holdZoom;
          const depthFactor = 0.72 + (i % 4) * 0.09;
          img.style.transform = `translate3d(${(px * depthFactor).toFixed(
            2
          )}px, ${(py * depthFactor).toFixed(2)}px, 0) scale(${settleScale.toFixed(
            4
          )})`;
        }
      }

      if (curtainLineRef.current) {
        if (horizontalSeamPos !== null && horizontalSeamAlpha > 0.01) {
          curtainLineRef.current.style.opacity = horizontalSeamAlpha.toFixed(3);
          curtainLineRef.current.style.top = `${horizontalSeamPos.toFixed(2)}%`;
        } else {
          curtainLineRef.current.style.opacity = "0";
        }
      }
      if (screenLineRef.current) {
        if (verticalSeamPos !== null && verticalSeamAlpha > 0.01) {
          screenLineRef.current.style.opacity = verticalSeamAlpha.toFixed(3);
          screenLineRef.current.style.left = `${verticalSeamPos.toFixed(2)}%`;
        } else {
          screenLineRef.current.style.opacity = "0";
        }
      }

      for (let i = 0; i < scenes.length; i++) {
        const copyEl = copyRefs.current[i];
        if (!copyEl) continue;
        const dist = Math.abs(cur - i);
        const alpha = clamp(1 - dist * 1.9, 0, 1);
        const dy = (cur - i) * -28;
        copyEl.style.opacity = alpha.toFixed(3);
        copyEl.style.transform = `translate3d(0, ${dy.toFixed(2)}px, 0)`;
        copyEl.style.pointerEvents = dist < 0.45 ? "auto" : "none";
        copyEl.style.visibility = alpha > 0.02 ? "visible" : "hidden";
      }

      const nearestIdx = clamp(Math.round(cur), 0, Math.max(0, scenes.length - 1));
      if (nearestIdx !== lastSceneIdxRef.current) {
        lastSceneIdxRef.current = nearestIdx;
        setActiveSceneIdx(nearestIdx);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", computeScrollTarget);
      window.removeEventListener("resize", computeScrollTarget);
      stageEl?.removeEventListener("pointermove", handlePointerMove);
      stageEl?.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [scenes]);

  const runwayHeightClass =
    scenes.length <= 3
      ? "h-[230vh] md:h-[270vh] lg:h-[310vh]"
      : scenes.length <= 5
        ? "h-[290vh] md:h-[350vh] lg:h-[410vh]"
        : "h-[440vh] md:h-[580vh] lg:h-[720vh]";

  const handleAnchorScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;
    const idTarget = href.replace("#", "");
    const el = document.getElementById(idTarget);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentScene = scenes[activeSceneIdx] || scenes[0];
  const resolvedLinkHref = currentScene.detailHref || currentScene.ctaHref;
  const resolvedLinkLabel = currentScene.detailLabel || currentScene.title;
  const displayLinkUrl = siteOrigin
    ? `${siteOrigin}${resolvedLinkHref}`
    : resolvedLinkHref;

  const handleStageImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (
      target.closest("a") ||
      target.closest("button") ||
      target.closest("nav") ||
      target.closest("[data-cinema-link-panel]")
    ) {
      return;
    }
    setShowSceneLink((prev) => !prev);
  };

  const handleCopySceneLink = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(displayLinkUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 1800);
    } catch {
      // Clipboard may be blocked in restricted browser contexts
    }
  };

  return (
    <section
      id={id}
      ref={runwayRef}
      aria-label={ariaLabel}
      className={`relative ${runwayHeightClass} bg-white`}
    >
      <div
        ref={stageRef}
        onClick={handleStageImageClick}
        className="sticky top-[60px] sm:top-[68px] lg:top-16 h-[calc(100dvh-60px)] sm:h-[calc(100dvh-68px)] lg:h-[calc(100vh-4rem)] w-full overflow-hidden bg-white border-b border-heritage-crimson/15 cursor-pointer"
        title="Nhấp vào hình ảnh để hiện đường link dẫn đến phần tương ứng"
      >
        {scenes.map((scene, idx) => (
          <div
            key={scene.id}
            ref={(el) => {
              layerRefs.current[idx] = el;
            }}
            className="absolute inset-0 will-change-[clip-path,opacity]"
            style={{
              zIndex: idx + 1,
              visibility: idx === 0 ? "visible" : "hidden",
              opacity: idx === 0 ? 1 : 0,
            }}
          >
            <img
              ref={(el) => {
                imgRefs.current[idx] = el;
              }}
              src={scene.image}
              alt={`${scene.title} — ${scene.slogan}`}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-center will-change-transform select-none"
            />
          </div>
        ))}

        <div
          ref={curtainLineRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 z-20 h-1 heritage-ribbon-bar shadow-[0_0_24px_rgba(185,28,28,0.45)] opacity-0"
        />
        <div
          ref={screenLineRef}
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 z-20 w-1 bg-gradient-to-b from-heritage-crimson via-heritage-goldAntique to-heritage-crimson shadow-[0_0_24px_rgba(185,28,28,0.45)] opacity-0"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-white via-white/95 via-45% to-white/10 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/80 lg:to-transparent"
        />

        {/* Breadcrumb định vị trang con (nếu có) */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="absolute top-3 left-3 sm:top-4 sm:left-6 z-40 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-xs border border-heritage-crimson/20 shadow-sm"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-heritage-crimson hover:underline font-semibold"
            >
              <Home className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Trang chủ</span>
            </Link>
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight
                  className="h-3.5 w-3.5 text-heritage-crimson/45"
                  aria-hidden="true"
                />
                {bc.href ? (
                  <Link
                    href={bc.href}
                    className="text-heritage-crimson hover:underline font-semibold"
                  >
                    {bc.label}
                  </Link>
                ) : (
                  <span className="text-heritage-ink font-bold">{bc.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Nút cuộn nhanh bỏ qua phần trình chiếu trên màn hình chạm */}
        <a
          href={skipHref}
          onClick={(e) => handleAnchorScroll(e, skipHref)}
          className="absolute top-3 right-3 sm:top-4 sm:right-6 z-40 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold text-heritage-crimson border border-heritage-crimson/30 shadow-sm hover:bg-heritage-crimson hover:text-white transition-colors"
        >
          <span>{skipLabel}</span>
          <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
        </a>

        <div className="pointer-events-none relative z-30 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-end lg:items-center pb-6 sm:pb-10 lg:pb-0">
          <div className="relative w-full max-w-xl min-h-[290px] sm:min-h-[330px] lg:h-[400px]">
            {scenes.map((scene, idx) => (
              <div
                key={scene.id}
                ref={(el) => {
                  copyRefs.current[idx] = el;
                }}
                className="absolute inset-0 flex flex-col justify-end lg:justify-center will-change-[transform,opacity]"
                style={{
                  opacity: idx === 0 ? 1 : 0,
                  pointerEvents: idx === 0 ? "auto" : "none",
                  visibility: idx === 0 ? "visible" : "hidden",
                }}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-mono font-medium tracking-[0.22em] sm:tracking-[0.26em] text-heritage-crimson/80">
                  <span>
                    {String(idx + 1).padStart(2, "0")} /{" "}
                    {String(scenes.length).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-heritage-crimson/40" />
                </div>

                {scene.isHeroTitle ? (
                  <h1 className="mt-2.5 sm:mt-4 font-serif text-2xl sm:text-4xl lg:text-[3.5rem] font-bold tracking-[-0.025em] text-heritage-crimson leading-[1.08]">
                    {scene.title}
                  </h1>
                ) : (
                  <h2 className="mt-2.5 sm:mt-4 font-serif text-xl sm:text-3xl lg:text-[2.85rem] font-bold tracking-[-0.025em] text-heritage-crimson leading-[1.12]">
                    {scene.title}
                  </h2>
                )}

                <p className="mt-2 sm:mt-3.5 font-serif text-sm sm:text-lg lg:text-2xl italic font-medium text-heritage-woodDark leading-snug">
                  &ldquo;{scene.slogan}&rdquo;
                </p>

                <p className="mt-2 sm:mt-4 text-xs sm:text-sm lg:text-base text-heritage-ink/90 leading-relaxed max-w-md line-clamp-3 sm:line-clamp-none">
                  {scene.description}
                </p>

                <div className="mt-4 sm:mt-7">
                  <a
                    href={scene.ctaHref}
                    onClick={(e) => handleAnchorScroll(e, scene.ctaHref)}
                    className="inline-flex w-full sm:w-fit items-center justify-center gap-2.5 rounded-xl bg-heritage-crimson px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-museum hover:bg-heritage-woodDark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson"
                  >
                    <span>{scene.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Gợi ý nhấp vào hình & Thẻ hiện đường link dẫn trực tiếp vào phần đó */}
        {!showSceneLink ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowSceneLink(true);
            }}
            className="absolute bottom-3 right-3 sm:bottom-5 sm:right-6 z-40 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold text-heritage-crimson border border-heritage-crimson/30 shadow-sm hover:bg-heritage-crimson hover:text-white transition-colors"
          >
            <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Nhấp hình để hiện link phần này</span>
          </button>
        ) : (
          <div
            data-cinema-link-panel
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-3 left-3 right-3 sm:left-auto sm:bottom-5 sm:right-6 sm:w-[370px] z-40 rounded-2xl bg-[#1F110E]/95 backdrop-blur-md p-4 text-white border border-heritage-goldAntique/70 shadow-[0_18px_42px_rgba(31,17,14,0.45)] cursor-default"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-heritage-crimson px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white border border-heritage-goldAntique/50">
                <Link2 className="h-3 w-3" aria-hidden="true" />
                <span>Link phần {String(activeSceneIdx + 1).padStart(2, "0")}</span>
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSceneLink(false);
                }}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 hover:bg-heritage-crimson text-white transition-colors"
                aria-label="Đóng thẻ đường dẫn"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <p className="mt-2 font-serif text-sm sm:text-base font-bold text-[#FDE68A] leading-snug">
              {resolvedLinkLabel}
            </p>

            <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-black/45 px-2.5 py-1.5 border border-heritage-goldAntique/45">
              {resolvedLinkHref.startsWith("#") ? (
                <a
                  href={resolvedLinkHref}
                  onClick={(e) => handleAnchorScroll(e, resolvedLinkHref)}
                  className="min-w-0 flex-1 truncate font-mono text-xs text-white hover:text-[#FDE68A] underline underline-offset-2"
                >
                  {resolvedLinkHref}
                </a>
              ) : (
                <Link
                  href={resolvedLinkHref}
                  className="min-w-0 flex-1 truncate font-mono text-xs text-white hover:text-[#FDE68A] underline underline-offset-2"
                >
                  {resolvedLinkHref}
                </Link>
              )}
              <button
                type="button"
                onClick={handleCopySceneLink}
                className="inline-flex shrink-0 items-center gap-1 rounded bg-white/15 hover:bg-white/25 px-2 py-1 text-[10px] font-semibold text-[#FDE68A] transition-colors"
                title={`Sao chép ${displayLinkUrl}`}
              >
                {copiedLink ? (
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

            <div className="mt-3">
              {resolvedLinkHref.startsWith("#") ? (
                <a
                  href={resolvedLinkHref}
                  onClick={(e) => {
                    setShowSceneLink(false);
                    handleAnchorScroll(e, resolvedLinkHref);
                  }}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-heritage-crimson hover:bg-[#991B1B] px-4 py-2 text-xs font-bold text-white border border-heritage-goldAntique/60 transition-colors"
                >
                  <span>Đi tới phần này</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : (
                <Link
                  href={resolvedLinkHref}
                  onClick={() => setShowSceneLink(false)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-heritage-crimson hover:bg-[#991B1B] px-4 py-2 text-xs font-bold text-white border border-heritage-goldAntique/60 transition-colors"
                >
                  <span>Đi tới phần này</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

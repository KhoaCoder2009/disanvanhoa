"use client";

import React, { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

type TransitionType =
  | "base"
  | "iris-right"
  | "curtain-up"
  | "curtain-down"
  | "screen-sweep"
  | "screen-right"
  | "solar-iris";

interface CinemaScene {
  id: string;
  title: string;
  isHeroTitle?: boolean;
  slogan: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  transitionType: TransitionType;
  accentHex: string;
  hoverHex: string;
}

const CINEMA_SCENES: CinemaScene[] = [
  {
    id: "scene-01",
    title: "DI SẢN VĂN HỌC VIỆT",
    isHeroTitle: true,
    slogan: "Dự án Tuồng đồ Huyện đường & Sử thi Đăm Săn (Ngữ văn 10 – STEAM)",
    description:
      "Không gian học tập số kết nối hai kiệt tác văn học dân gian: tiếng cười trào phúng chốn công đường Huyện đường và khát vọng kỳ vĩ của sử thi Đăm Săn.",
    ctaLabel: "Khám phá Bảo tàng số",
    ctaHref: "#bao-tang-so",
    image: "/images/cinema/scene-01-di-san.png",
    transitionType: "base",
    accentHex: "#B91C1C",
    hoverHex: "#7A1C18",
  },
  {
    id: "scene-02",
    title: "SẮC TUỒNG — NGÔN NGỮ MẶT NẠ ƯỚC LỆ",
    slogan: "Bảng mã màu đỏ – trắng mốc – xanh xám – vàng sậm trong hóa trang cổ",
    description:
      "Đọc vị bản chất trung – nịnh qua từng đường nét vẽ mặt và tỷ lệ hình khối đối xứng đặc trưng của nghệ thuật tuồng hài dân gian.",
    ctaLabel: "Xem Sắc Tuồng Huyện đường",
    ctaHref: "#bao-tang-so",
    image: "/images/cinema/scene-03-sac-tuong.png",
    transitionType: "iris-right",
    accentHex: "#B91C1C",
    hoverHex: "#7A1C18",
  },
  {
    id: "scene-03",
    title: "HUYỆN ĐƯỜNG — PHONG THÁI CÔNG ĐƯỜNG",
    slogan: "Trích đoạn tuồng đồ Nghêu, Sò, Ốc, Hến (Ngữ văn 10)",
    description:
      "Khảo sát không gian án thư nơi công lý bị mua chuộc bằng lễ vật, mở màn tấn hài kịch phê phán bộ máy quan lại phong kiến xưa.",
    ctaLabel: "Vào Dự án 01: Huyện đường",
    ctaHref: "#chu-de-hoc-tap",
    image: "/images/cinema/scene-07-huyen-duong.png",
    transitionType: "curtain-up",
    accentHex: "#96241F",
    hoverHex: "#7A1C18",
  },
  {
    id: "scene-04",
    title: "TỨ ĐẠI NHÂN VẬT CÔNG ĐƯỜNG",
    slogan: "Tri huyện • Đề lại • Lính lệ • Trùm Sò",
    description:
      "Chuyển hóa lời thoại tự xưng và bản tính tham lam, lươn lẹo, keo kiệt thành bộ chân dung mặt nạ 3D bằng bìa cứng và vi diễn sân khấu hóa.",
    ctaLabel: "Giải mã 4 nhân vật Huyện đường",
    ctaHref: "#chu-de-hoc-tap",
    image: "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
    transitionType: "screen-sweep",
    accentHex: "#B91C1C",
    hoverHex: "#7A1C18",
  },
  {
    id: "scene-05",
    title: "KHÔNG GIAN Ê-ĐÊ — NHÀ DÀI & KLEI KHAN",
    slogan: "Bối cảnh văn hóa Tây Nguyên trong Sử thi Đăm Săn",
    description:
      "Tái hiện kiến trúc nhà dài cổ truyền, tiếng cồng chiêng Hlong và nhịp hát kể khan vang vọng bên bếp lửa buôn làng Tây Nguyên.",
    ctaLabel: "Khám phá Sử thi Đăm Săn",
    ctaHref: "#bao-tang-so",
    image: "/images/cinema/scene-dam-san-nha-dai.png",
    transitionType: "solar-iris",
    accentHex: "#1F5E3B",
    hoverHex: "#16442A",
  },
  {
    id: "scene-06",
    title: "ĐĂM SĂN ĐI BẮT NỮ THẦN MẶT TRỜI",
    slogan: "Đánh thức thế giới sử thi qua Hộp kể chuyện 3 lớp ánh sáng",
    description:
      "Vượt rừng Sáp Đen tiến tới ánh dương chói lòa: kết hợp quang học LED vàng ấm, giấy can mờ và thanh trượt cơ học kể chuyện tương tác.",
    ctaLabel: "Xem Chủ đề 02: Đăm Săn",
    ctaHref: "#chu-de-hoc-tap",
    image: "/images/cinema/scene-05-dam-san-steam.png",
    transitionType: "curtain-down",
    accentHex: "#B45309",
    hoverHex: "#854D0E",
  },
  {
    id: "scene-07",
    title: "XƯỞNG CHẾ TÁC STEAM — QUY TRÌNH 5 BƯỚC",
    slogan: "Xác định vấn đề • Thiết kế • Chế tạo • Thử nghiệm • Cải tiến",
    description:
      "Từ bản vẽ hình học tỉ lệ chuẩn, pha màu mặt nạ Huyện đường đến thử nghiệm mạch LED cho hộp sử thi Đăm Săn.",
    ctaLabel: "Vào Xưởng sáng tạo STEAM",
    ctaHref: "#xuong-steam",
    image: "/images/cinema/scene-09-xuong-steam.png",
    transitionType: "screen-right",
    accentHex: "#1E3A5F",
    hoverHex: "#152943",
  },
  {
    id: "scene-08",
    title: "TRIỂN LÃM SỐ — TỪ TRANG SÁCH ĐẾN HIỆN ĐẠI",
    slogan: "Mặt nạ 3D • Sa bàn sử thi • Infographic • Podcast & Trắc nghiệm",
    description:
      "Lưu trữ và tôn vinh các sản phẩm sáng tạo học sinh, sẵn sàng cho hoạt động Nói – Nghe và củng cố kiến thức qua trắc nghiệm trực tuyến.",
    ctaLabel: "Tham quan Triển lãm số",
    ctaHref: "#trien-lam-so",
    image: "/images/cinema/scene-10-trien-lam.png",
    transitionType: "solar-iris",
    accentHex: "#B91C1C",
    hoverHex: "#7A1C18",
  },
];

const HEADER_OFFSET = 64;

const clamp = (val: number, min: number, max: number) =>
  Math.min(max, Math.max(min, val));

const smoothstep = (edge0: number, edge1: number, x: number) => {
  const u = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return u * u * (3 - 2 * u);
};

export const ScrollVisualCinema: React.FC = () => {
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

  useEffect(() => {
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
      targetProgressRef.current = ratio * (CINEMA_SCENES.length - 1);
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

      for (let i = 0; i < CINEMA_SCENES.length; i++) {
        const scene = CINEMA_SCENES[i];
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

      for (let i = 0; i < CINEMA_SCENES.length; i++) {
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
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", computeScrollTarget);
      window.removeEventListener("resize", computeScrollTarget);
      stageEl?.removeEventListener("pointermove", handlePointerMove);
      stageEl?.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  const handleAnchorScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="trang-chu"
      ref={runwayRef}
      aria-label="Hành trình thị giác Dự án Huyện đường và Sử thi Đăm Săn"
      className="relative h-[440vh] md:h-[580vh] lg:h-[720vh] bg-white"
    >
      <div
        ref={stageRef}
        className="sticky top-[60px] sm:top-[68px] lg:top-16 h-[calc(100dvh-60px)] sm:h-[calc(100dvh-68px)] lg:h-[calc(100vh-4rem)] w-full overflow-hidden bg-white border-b border-heritage-crimson/15"
      >
        {CINEMA_SCENES.map((scene, idx) => (
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

        {/* Nút cuộn nhanh bỏ qua phần trình chiếu trên màn hình chạm */}
        <a
          href="#gioi-thieu-khong-gian"
          onClick={(e) => handleAnchorScroll(e, "#gioi-thieu-khong-gian")}
          className="absolute top-3 right-3 sm:top-4 sm:right-6 z-30 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-heritage-crimson border border-heritage-crimson/30 shadow-sm hover:bg-heritage-crimson hover:text-white transition-colors"
        >
          <span>Bỏ qua trình chiếu</span>
          <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
        </a>

        <div className="relative z-30 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-end lg:items-center pb-6 sm:pb-10 lg:pb-0">
          <div className="relative w-full max-w-xl min-h-[290px] sm:min-h-[330px] lg:h-[400px]">
            {CINEMA_SCENES.map((scene, idx) => (
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
                <div
                  className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-mono font-medium tracking-[0.22em] sm:tracking-[0.26em]"
                  style={{ color: scene.accentHex }}
                >
                  <span>
                    {String(idx + 1).padStart(2, "0")} / 0{CINEMA_SCENES.length}
                  </span>
                  <span
                    className="h-px w-8 opacity-50"
                    style={{ backgroundColor: scene.accentHex }}
                  />
                </div>

                {scene.isHeroTitle ? (
                  <h1
                    className="mt-2.5 sm:mt-4 font-serif text-2xl sm:text-4xl lg:text-[3.5rem] font-bold tracking-[-0.025em] leading-[1.08]"
                    style={{ color: scene.accentHex }}
                  >
                    {scene.title}
                  </h1>
                ) : (
                  <h2
                    className="mt-2.5 sm:mt-4 font-serif text-xl sm:text-3xl lg:text-[2.85rem] font-bold tracking-[-0.025em] leading-[1.12]"
                    style={{ color: scene.accentHex }}
                  >
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
                    style={{ backgroundColor: scene.accentHex }}
                    className="inline-flex w-full sm:w-fit items-center justify-center gap-2.5 rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-museum hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson"
                  >
                    <span>{scene.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

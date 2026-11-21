"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

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
}

const CINEMA_SCENES: CinemaScene[] = [
  {
    id: "scene-01",
    title: "DI SẢN VĂN HỌC VIỆT",
    isHeroTitle: true,
    slogan: "Từ trang sách đến không gian di sản – Từ tri thức đến sáng tạo.",
    description:
      "Không gian học tập số kết nối văn học Ngữ văn 10, nghệ thuật truyền thống và STEM/STEAM trong kiến trúc trưng bày bảo tàng đương đại.",
    ctaLabel: "Khám phá Bảo tàng số",
    ctaHref: "#bao-tang-so",
    image: "/images/cinema/scene-01-di-san.png",
    transitionType: "base",
  },
  {
    id: "scene-02",
    title: "HỒN CHÈO — SÂN KHẤU CHIẾU CHÈO",
    slogan: "Ngữ văn 10 – Bài 5 • Không gian sân đình dân gian",
    description:
      "Tái hiện chiếu chèo sân đình với quạt lụa, trống đế và ước lệ vũ đạo trữ tình, nơi tiếng hát dân gian hòa cùng nhịp sống làng quê Việt.",
    ctaLabel: "Mở hồ sơ Hồn Chèo",
    ctaHref: "#bao-tang-so",
    image: "/images/cinema/scene-02-hon-cheo.png",
    transitionType: "iris-right",
  },
  {
    id: "scene-03",
    title: "XÚY VÂN GIẢ DẠI — VŨ ĐẠO & QUẠT LỤA",
    slogan: "Nghệ thuật biểu trưng nội tâm qua đạo cụ và dải lụa",
    description:
      "Giải mã bi kịch khát vọng qua động tác xoay quạt, khung cửi dệt tơ và nhịp trống đế truyền thống trên nền sân khấu ước lệ.",
    ctaLabel: "Đọc giải mã Xúy Vân",
    ctaHref: "#bao-tang-so",
    image: "/images/cinema/scene-06-xuy-van.png",
    transitionType: "curtain-up",
  },
  {
    id: "scene-04",
    title: "SẮC TUỒNG — NGÔN NGỮ MẶT NẠ ƯỚC LỆ",
    slogan: "Bảng mã màu đỏ – trắng – đen – vàng kim trong hóa trang cổ",
    description:
      "Đọc vị bản chất trung – nịnh qua từng đường nét vẽ mặt và tỷ lệ hình khối đối xứng đặc trưng của nghệ thuật sân khấu Tuồng.",
    ctaLabel: "Khám phá nghệ thuật Tuồng",
    ctaHref: "#bao-tang-so",
    image: "/images/cinema/scene-03-sac-tuong.png",
    transitionType: "screen-sweep",
  },
  {
    id: "scene-05",
    title: "HUYỆN ĐƯỜNG — BỐN NHÂN VẬT CHÂM BIẾM",
    slogan: "Tri huyện • Đề lại • Lính lệ • Trùm Sò",
    description:
      "Chủ đề 01 đang triển khai: bóc tách lớp lang tiếng cười phê phán chốn công đường và chuyển hóa tri thức văn bản thành mặt nạ thủ công STEAM.",
    ctaLabel: "Vào Chủ đề 01: Huyện đường",
    ctaHref: "#chu-de-hoc-tap",
    image: "/images/cinema/scene-07-huyen-duong.png",
    transitionType: "solar-iris",
  },
  {
    id: "scene-06",
    title: "HỒN NƯỚC — KIẾN TRÚC THỦY ĐÌNH",
    slogan: "Múa rối nước • Nghệ thuật sân khấu trên mặt hồ",
    description:
      "Khám phá kiến trúc hai tầng mái đao cong Thủy đình, bức mành tre che buồng trò và ánh phản chiếu lung linh trên mặt thủy đình.",
    ctaLabel: "Khám phá Thủy đình",
    ctaHref: "#bao-tang-so",
    image: "/images/cinema/scene-04-hon-nuoc.png",
    transitionType: "curtain-down",
  },
  {
    id: "scene-07",
    title: "CƠ HỌC DÂN GIAN — RỐI GỖ SUNG",
    slogan: "Nguyên lý đòn bẩy, khớp xoay và sào tre dưới làn nước",
    description:
      "Kết nối tri thức Vật lí – Kỹ thuật trong từng con rối gỗ sung sơn son thếp vàng và hệ thống dây lèo truyền động tài hoa của nghệ nhân.",
    ctaLabel: "Tìm hiểu cơ chế Múa rối nước",
    ctaHref: "#bao-tang-so",
    image: "/images/cinema/scene-08-co-hoc-roi.png",
    transitionType: "screen-right",
  },
  {
    id: "scene-08",
    title: "SỬ THI ĐĂM SĂN — HỘP SÁNG BA LỚP",
    slogan: "Đánh thức không gian sử thi Tây Nguyên qua quang học & cắt lớp",
    description:
      "Chủ đề 02: chuyển thể trường đoạn Đăm Săn đi bắt Nữ thần Mặt Trời thành sa bàn hộp kể chuyện 3 lớp phối hợp ánh sáng LED ấm.",
    ctaLabel: "Xem Chủ đề 02: Đăm Săn",
    ctaHref: "#chu-de-hoc-tap",
    image: "/images/cinema/scene-05-dam-san-steam.png",
    transitionType: "iris-right",
  },
  {
    id: "scene-09",
    title: "XƯỞNG CHẾ TÁC STEAM — QUY TRÌNH NĂM BƯỚC",
    slogan: "Nghiên cứu văn bản • Phác thảo kỹ thuật • Thử nghiệm • Hoàn thiện",
    description:
      "Từ bản vẽ hình học tỷ lệ chuẩn, pha màu thủ công đến lắp ráp vật liệu bền vững nhằm tạo nên sản phẩm mang dấu ấn cá nhân.",
    ctaLabel: "Vào Xưởng sáng tạo STEAM",
    ctaHref: "#xuong-steam",
    image: "/images/cinema/scene-09-xuong-steam.png",
    transitionType: "curtain-up",
  },
  {
    id: "scene-10",
    title: "TRIỂN LÃM SỐ — TỪ TRANG SÁCH ĐẾN HIỆN ĐẠI",
    slogan: "Trưng bày • Thuyết minh học thuật • Lan tỏa di sản",
    description:
      "Không gian tôn vinh các sản phẩm mặt nạ, sa bàn, thủy đình, infographic và podcast sáng tạo từ chính những giờ học Ngữ văn THPT.",
    ctaLabel: "Tham quan Triển lãm số",
    ctaHref: "#trien-lam-so",
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
      const scrollable = Math.max(
        1,
        runway.offsetHeight - (window.innerHeight - HEADER_OFFSET)
      );
      const ratio = clamp((HEADER_OFFSET - rect.top) / scrollable, 0, 1);
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

      // 1. Update 10 visual layers & GPU-composited clip-path morphs
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

      // Synchronized architectural seam accent lines
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

      // 2. Cross-morph editorial copy blocks smoothly
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
      aria-label="Hành trình thị giác Di sản Văn học Việt"
      className="relative h-[840vh] sm:h-[920vh] bg-white"
    >
      {/* Khung sân khấu ghim cố định toàn màn hình (Ultra-Clean Sticky Visual Morphing Stage) */}
      <div
        ref={stageRef}
        className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden bg-white border-b border-heritage-crimson/15"
      >
        {/* 10 TẦNG HÌNH ẢNH DI SẢN BIẾN ĐỔI THEO CUỘN */}
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

        {/* Đường chỉ Đỏ Son - Vàng Kim lướt dọc mép vén màn */}
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

        {/* Lớp phủ Gradient Trắng Ngà tạo độ tương phản chữ biên tập */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-white/95 via-white/80 to-white/15 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/80 lg:to-transparent"
        />

        {/* KHỐI CHỮ BIÊN TẬP TỐI GIẢN CHUẨN BẢO TÀNG (Pure Editorial Left Block) */}
        <div className="relative z-30 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-end lg:items-center pb-12 lg:pb-0">
          <div className="relative w-full max-w-xl h-[340px] sm:h-[360px] lg:h-[400px]">
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
                <div className="flex items-center gap-3 text-xs font-mono font-medium tracking-[0.26em] text-heritage-crimson/80">
                  <span>{String(idx + 1).padStart(2, "0")} / 10</span>
                  <span className="h-px w-8 bg-heritage-crimson/40" />
                </div>

                {scene.isHeroTitle ? (
                  <h1 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.025em] text-heritage-crimson leading-[1.08]">
                    {scene.title}
                  </h1>
                ) : (
                  <h2 className="mt-4 font-serif text-2xl sm:text-4xl lg:text-[2.9rem] font-bold tracking-[-0.025em] text-heritage-crimson leading-[1.1]">
                    {scene.title}
                  </h2>
                )}

                <p className="mt-3.5 font-serif text-lg sm:text-xl lg:text-2xl italic font-medium text-heritage-woodDark leading-snug">
                  &ldquo;{scene.slogan}&rdquo;
                </p>

                <p className="mt-4 text-sm sm:text-base text-heritage-ink/90 leading-relaxed max-w-md">
                  {scene.description}
                </p>

                <div className="mt-7">
                  <a
                    href={scene.ctaHref}
                    onClick={(e) => handleAnchorScroll(e, scene.ctaHref)}
                    className="inline-flex w-fit items-center gap-2.5 rounded-xl bg-heritage-crimson px-6 py-3.5 text-sm font-semibold text-white shadow-museum hover:bg-heritage-woodDark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson"
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

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sun, Layers, RotateCcw } from "lucide-react";

type StageSubject = "all" | "tuong" | "dam-san";

interface HeritageStage3DCanvasProps {
  initialSubject?: StageSubject;
  className?: string;
}

/**
 * Sân khấu Không gian 3D Tương tác cho Hai Dự Án Trọng Tâm:
 * Tái hiện Mặt nạ Tuồng Huyện đường (Đỏ son - Vàng kim) và Không gian Sử thi Đăm Săn
 * (Vầng Mặt Trời rực rỡ, Dãy núi Rừng Sáp Đen & Nhà dài Ê-đê) với phép chiếu phối cảnh 3D.
 */
export const HeritageStage3DCanvas: React.FC<HeritageStage3DCanvasProps> = ({
  initialSubject = "all",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeSubject, setActiveSubject] = useState<StageSubject>(initialSubject);
  const [lightingMode, setLightingMode] = useState<"court-stage" | "storybox-backlight">(
    "court-stage"
  );

  const subjectRef = useRef<StageSubject>(activeSubject);
  subjectRef.current = activeSubject;

  const lightRef = useRef(lightingMode);
  lightRef.current = lightingMode;

  const targetRotRef = useRef({ x: 0, y: 0 });
  const currentRotRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let rafId = 0;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let lastTime = performance.now();

    const damp = (cur: number, to: number, rate: number, dt: number) =>
      cur + (to - cur) * (1 - Math.exp(-rate * dt));

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const dust3D = Array.from({ length: 34 }, (_, i) => ({
      x: ((i * 73) % 200) - 100,
      y: ((i * 41) % 140) - 70,
      z: ((i * 29) % 120) - 60,
      size: (i % 3) * 0.7 + 1.1,
      speed: 0.15 + (i % 5) * 0.06,
    }));

    const project3D = (
      x: number,
      y: number,
      z: number,
      rotX: number,
      rotY: number
    ) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY - z * sinY;
      const z1 = z * cosY + x * sinY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = z1 * cosX + y * sinX;

      const fov = 420;
      const viewerDist = 340;
      const scale = fov / Math.max(60, viewerDist + z2);
      return {
        px: width * 0.5 + x1 * scale,
        py: height * 0.48 + y2 * scale,
        scale,
        z: z2,
      };
    };

    const render = (now: number) => {
      rafId = requestAnimationFrame(render);
      if (!isVisible || width === 0 || height === 0) return;

      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      const t = prefersReducedMotion ? 0 : now * 0.001;

      currentRotRef.current.x = damp(
        currentRotRef.current.x,
        targetRotRef.current.x,
        6.5,
        dt
      );
      currentRotRef.current.y = damp(
        currentRotRef.current.y,
        targetRotRef.current.y,
        6.5,
        dt
      );

      const rx = currentRotRef.current.x;
      const ry = currentRotRef.current.y;
      const mode = subjectRef.current;
      const light = lightRef.current;

      ctx.clearRect(0, 0, width, height);

      // 1. Nền chiều sâu: Đỏ son Công đường vs. Ánh vàng Rừng đại ngàn Sử thi
      const bgGrad = ctx.createRadialGradient(
        width * 0.5 + ry * 70,
        height * 0.42 + rx * 50,
        15,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.72
      );
      if (light === "storybox-backlight" || mode === "dam-san") {
        bgGrad.addColorStop(0, "#854D0E");
        bgGrad.addColorStop(0.45, "#4E1D15");
        bgGrad.addColorStop(1, "#1D3B2A");
      } else {
        bgGrad.addColorStop(0, "#7A1C18");
        bgGrad.addColorStop(0.55, "#4E100E");
        bgGrad.addColorStop(1, "#2A0706");
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Lưới phối cảnh bản vẽ kỹ thuật
      ctx.save();
      ctx.strokeStyle =
        mode === "dam-san"
          ? "rgba(245, 225, 164, 0.25)"
          : "rgba(197, 155, 39, 0.25)";
      ctx.lineWidth = 1;
      for (let gx = -180; gx <= 180; gx += 30) {
        const p1 = project3D(gx, 88, -120, rx, ry);
        const p2 = project3D(gx, 88, 120, rx, ry);
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      }
      for (let gz = -120; gz <= 120; gz += 30) {
        const p1 = project3D(-180, 88, gz, rx, ry);
        const p2 = project3D(180, 88, gz, rx, ry);
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Lớp Hậu cảnh 3D (Z = -65): Vầng Mặt Trời Nữ thần Đăm Săn & Vòng Hào quang
      const backCenter = project3D(
        mode === "dam-san" ? 0 : mode === "tuong" ? 0 : -45,
        -18,
        -65,
        rx,
        ry
      );
      ctx.save();
      ctx.translate(backCenter.px, backCenter.py);
      ctx.scale(backCenter.scale, backCenter.scale);

      ctx.save();
      ctx.rotate(t * 0.12);
      ctx.strokeStyle = "rgba(245, 225, 164, 0.42)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([5, 6]);
      ctx.beginPath();
      ctx.arc(0, 0, 124, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      for (let i = 0; i < 16; i++) {
        const ang = (i * Math.PI * 2) / 16;
        ctx.beginPath();
        ctx.moveTo(Math.cos(ang) * 96, Math.sin(ang) * 96);
        ctx.lineTo(Math.cos(ang) * 120, Math.sin(ang) * 120);
        ctx.strokeStyle = "rgba(245, 225, 164, 0.45)";
        ctx.stroke();
      }
      ctx.restore();

      if (mode === "dam-san" || mode === "all") {
        const sunRadius = mode === "dam-san" ? 72 : 52;
        const sunGrad = ctx.createRadialGradient(0, 0, 4, 0, 0, sunRadius * 1.4);
        sunGrad.addColorStop(
          0,
          light === "storybox-backlight"
            ? "rgba(254, 243, 199, 0.96)"
            : "rgba(245, 225, 164, 0.85)"
        );
        sunGrad.addColorStop(0.55, "rgba(180, 83, 9, 0.42)");
        sunGrad.addColorStop(1, "rgba(122, 28, 24, 0)");
        ctx.fillStyle = sunGrad;
        ctx.beginPath();
        ctx.arc(0, 0, sunRadius * 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 4. Lớp Trung cảnh 3D (Z = 0): Dãy núi Rừng Sáp Đen & Nhà dài Ê-đê hoặc Bình phong Công đường
      const midCenter = project3D(0, 8, 0, rx, ry);
      ctx.save();
      ctx.translate(midCenter.px, midCenter.py);
      ctx.scale(midCenter.scale, midCenter.scale);

      if (mode === "dam-san" || mode === "all") {
        // Dãy núi rừng đại ngàn xanh rêu đậm & Nhà dài Ê-đê bên trái/trung tâm
        ctx.fillStyle = "#1F5E3B";
        ctx.strokeStyle = "#F5E1A4";
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(-165, 76);
        ctx.lineTo(-98, -14);
        ctx.lineTo(-40, 32);
        ctx.lineTo(28, -32);
        ctx.lineTo(95, 38);
        ctx.lineTo(mode === "dam-san" ? 165 : 20, 76);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Mái nhà dài Ê-đê
        ctx.fillStyle = "#854D0E";
        ctx.strokeStyle = "#F5E1A4";
        ctx.beginPath();
        ctx.moveTo(-125, 76);
        ctx.lineTo(-78, 12);
        ctx.lineTo(-30, 76);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      if (mode === "tuong") {
        // Bình phong chạm trổ & án thư Huyện đường ở trung cảnh
        ctx.fillStyle = "#5A1310";
        ctx.strokeStyle = "#C59B27";
        ctx.lineWidth = 1.6;
        ctx.fillRect(-120, -45, 240, 120);
        ctx.strokeRect(-120, -45, 240, 120);

        for (let col = -80; col <= 80; col += 80) {
          ctx.strokeStyle = "rgba(245, 225, 164, 0.35)";
          ctx.beginPath();
          ctx.moveTo(col, -45);
          ctx.lineTo(col, 75);
          ctx.stroke();
        }
      }
      ctx.restore();

      // 5. Lớp Tiền cảnh Nổi 3D (Z = +55): Mặt nạ Tuồng Huyện đường & Bảng mã màu
      if (mode === "all" || mode === "tuong") {
        const maskPos = project3D(
          mode === "tuong" ? 0 : 96,
          mode === "tuong" ? 4 : 12,
          56,
          rx,
          ry
        );
        ctx.save();
        ctx.translate(maskPos.px, maskPos.py);
        const mScale = maskPos.scale * (mode === "tuong" ? 1.42 : 0.96);
        ctx.scale(mScale, mScale);

        // Mão quan công đường
        ctx.fillStyle = "#B91C1C";
        ctx.strokeStyle = "#F5E1A4";
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(-30, -28);
        ctx.lineTo(0, -60);
        ctx.lineTo(30, -28);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Khuôn mặt ước lệ Tri huyện (trắng mốc, má son, râu ba chòm)
        ctx.fillStyle = "#FDF8F6";
        ctx.strokeStyle = "#C59B27";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 5, 30, 38, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = "#2B1816";
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(-19, -8);
        ctx.quadraticCurveTo(-11, -19, -4, -8);
        ctx.moveTo(4, -8);
        ctx.quadraticCurveTo(11, -19, 19, -8);
        ctx.stroke();

        ctx.fillStyle = "rgba(185, 28, 28, 0.72)";
        ctx.beginPath();
        ctx.arc(-15, 9, 6.5, 0, Math.PI * 2);
        ctx.arc(15, 9, 6.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#2B1816";
        ctx.lineWidth = 1.7;
        ctx.beginPath();
        ctx.moveTo(-11, 23);
        ctx.quadraticCurveTo(0, 17, 11, 23);
        ctx.stroke();
        ctx.restore();
      }

      // 6. Hạt bụi vàng ánh sáng trôi
      dust3D.forEach((d, idx) => {
        const dy = ((d.y - t * d.speed * 18 + 70) % 140) - 70;
        const proj = project3D(d.x, dy, d.z, rx, ry);
        const alpha = 0.28 + 0.22 * Math.sin(t * 2 + idx);
        ctx.fillStyle = `rgba(245, 225, 164, ${alpha.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(
          proj.px,
          proj.py,
          Math.max(0.6, d.size * proj.scale),
          0,
          Math.PI * 2
        );
        ctx.fill();
      });

      ctx.strokeStyle = "rgba(197, 155, 39, 0.55)";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(12, 12, width - 24, height - 24);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1;
    const ny = ((e.clientY - rect.top) / Math.max(1, rect.height)) * 2 - 1;
    targetRotRef.current = {
      x: -ny * 0.24,
      y: nx * 0.34,
    };
  };

  const handlePointerLeave = () => {
    targetRotRef.current = { x: 0, y: 0 };
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative rounded-2xl bg-heritage-woodLight p-2.5 sm:p-3 border border-heritage-goldAntique/60 shadow-cabinet select-none ${className}`}
    >
      <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-xl bg-heritage-woodDark">
        <canvas
          ref={canvasRef}
          aria-label="Mô hình không gian 3D tương tác: Mặt nạ Tuồng Huyện đường và Sử thi Đăm Săn"
          className="block h-full w-full touch-pan-y cursor-grab active:cursor-grabbing"
        />

        <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex flex-wrap items-center justify-end sm:justify-between gap-2 pointer-events-none">
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-heritage-woodDark/90 px-2.5 py-1 text-[11px] font-medium text-heritage-goldSoft border border-heritage-goldAntique/40">
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Sân khấu 3D Tương tác (Di chuột xoay góc nhìn)</span>
          </span>

          <button
            type="button"
            onClick={() =>
              setLightingMode((prev) =>
                prev === "court-stage" ? "storybox-backlight" : "court-stage"
              )
            }
            className="pointer-events-auto inline-flex items-center gap-1.5 rounded-lg bg-heritage-woodDark/90 px-2.5 py-1.5 text-[11px] font-semibold text-heritage-goldSoft border border-heritage-goldAntique/50 transition-transform duration-150 active:scale-[0.97] hover:bg-heritage-crimson hover:text-heritage-ivory"
          >
            <Sun className="h-3.5 w-3.5" aria-hidden="true" />
            <span>
              {lightingMode === "court-stage"
                ? "Ánh sáng: Công đường Huyện đường"
                : "Ánh sáng: Hộp sử thi Đăm Săn"}
            </span>
          </button>
        </div>

        <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:left-3 sm:right-3 flex flex-wrap items-center justify-between gap-2 rounded bg-heritage-woodDark/90 px-2.5 py-1 sm:px-3 text-[11px] text-heritage-ivory/90 border border-heritage-goldAntique/40 pointer-events-none">
          <span className="font-medium text-heritage-goldSoft truncate">
            Mô hình song hành: Huyện đường (Tuồng) &amp; Sử thi Đăm Săn
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-heritage-goldSoft/90 shrink-0">
            Ngữ văn 10 • STEAM
          </span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-0.5 sm:px-1">
        <div
          role="group"
          aria-label="Chọn mô hình di sản 3D"
          className="flex flex-wrap items-center gap-1.5"
        >
          {[
            { id: "all", label: "Song hành 2 Dự án" },
            { id: "tuong", label: "Dự án Huyện đường" },
            { id: "dam-san", label: "Sử thi Đăm Săn" },
          ].map((tab) => {
            const active = activeSubject === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveSubject(tab.id as StageSubject)}
                className={`min-h-[38px] rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-150 active:scale-[0.97] ${
                  active
                    ? "bg-heritage-crimson text-heritage-ivory border border-heritage-goldSoft/60"
                    : "bg-heritage-woodDark/80 text-heritage-goldSoft border border-heritage-goldAntique/30 hover:bg-heritage-woodDark"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => {
            targetRotRef.current = { x: 0, y: 0 };
            setActiveSubject("all");
          }}
          title="Đặt lại góc nhìn chính diện"
          className="min-h-[38px] inline-flex items-center gap-1 rounded-lg bg-heritage-woodDark/70 px-3 py-1.5 text-xs text-heritage-goldSoft hover:bg-heritage-woodDark active:scale-[0.97] transition-transform duration-150"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Chính diện</span>
        </button>
      </div>
    </div>
  );
};

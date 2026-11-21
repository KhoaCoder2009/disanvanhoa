"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Eye, Sun, Layers, RotateCcw } from "lucide-react";

type StageSubject = "all" | "cheo" | "tuong" | "roi-nuoc" | "dam-san";

interface HeritageStage3DCanvasProps {
  initialSubject?: StageSubject;
  className?: string;
}

/**
 * Sân khấu Không gian 3D Tương tác (ThreeUI + Emil Kowalski Damping Physics):
 * Tái hiện không gian Thủy đình - Chiếu Chèo - Mặt nạ Tuồng - Mặt trời Sử thi Đăm Săn
 * với phép chiếu phối cảnh 3D (3D perspective projection), nội suy quán tính mượt mà
 * `damp(cur, to, rate, dt)` theo chuột/cảm ứng, sóng nước động và hiệu ứng đèn chiếu (Lighting Mode).
 */
export const HeritageStage3DCanvas: React.FC<HeritageStage3DCanvasProps> = ({
  initialSubject = "all",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeSubject, setActiveSubject] = useState<StageSubject>(initialSubject);
  const [lightingMode, setLightingMode] = useState<"warm-stage" | "storybox-backlight">(
    "warm-stage"
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

    // Tạo hạt bụi vàng 3D trong không gian sân khấu
    const dust3D = Array.from({ length: 38 }, (_, i) => ({
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
      // Xoay quanh trục Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY - z * sinY;
      const z1 = z * cosY + x * sinY;

      // Xoay quanh trục X
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

      // 1. Nền sơn son đỏ thẫm chiều sâu 3D (hài hòa với giao diện Trắng - Đỏ)
      const bgGrad = ctx.createRadialGradient(
        width * 0.5 + ry * 70,
        height * 0.42 + rx * 50,
        15,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.72
      );
      if (light === "storybox-backlight") {
        bgGrad.addColorStop(0, "#8F201B");
        bgGrad.addColorStop(0.5, "#5A1310");
        bgGrad.addColorStop(1, "#330908");
      } else {
        bgGrad.addColorStop(0, "#7A1C18");
        bgGrad.addColorStop(0.55, "#4E100E");
        bgGrad.addColorStop(1, "#2A0706");
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Lưới mặt sàn phối cảnh 3D (Sân đình / Mặt hồ Thủy đình)
      ctx.save();
      ctx.strokeStyle =
        mode === "roi-nuoc"
          ? "rgba(67, 86, 71, 0.45)"
          : "rgba(167, 123, 61, 0.24)";
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
        const waveY =
          mode === "roi-nuoc" || mode === "all"
            ? Math.sin(t * 2.2 + gz * 0.06) * 3.2
            : 0;
        const p1 = project3D(-180, 88 + waveY, gz, rx, ry);
        const p2 = project3D(180, 88 + waveY, gz, rx, ry);
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Lớp Hậu cảnh 3D (Z = -65): Vầng Mặt Trời Sử Thi & Vòng Trống Đồng
      const backCenter = project3D(0, -18, -65, rx, ry);
      ctx.save();
      ctx.translate(backCenter.px, backCenter.py);
      ctx.scale(backCenter.scale, backCenter.scale);

      // Vòng hào quang đồng cổ xoay chậm
      ctx.save();
      ctx.rotate(t * 0.12);
      ctx.strokeStyle = "rgba(214, 183, 126, 0.38)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([5, 6]);
      ctx.beginPath();
      ctx.arc(0, 0, 128, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      for (let i = 0; i < 16; i++) {
        const ang = (i * Math.PI * 2) / 16;
        ctx.beginPath();
        ctx.moveTo(Math.cos(ang) * 102, Math.sin(ang) * 102);
        ctx.lineTo(Math.cos(ang) * 124, Math.sin(ang) * 124);
        ctx.strokeStyle = "rgba(214, 183, 126, 0.35)";
        ctx.stroke();
      }
      ctx.restore();

      // Nếu chọn Sử thi Đăm Săn hoặc Tất cả: Hiển thị Mặt Trời xuyên sáng & Dãy núi Sáp Đen
      if (mode === "dam-san" || mode === "all") {
        const sunRadius = mode === "dam-san" ? 72 : 54;
        const sunGrad = ctx.createRadialGradient(0, 0, 4, 0, 0, sunRadius * 1.4);
        sunGrad.addColorStop(
          0,
          light === "storybox-backlight"
            ? "rgba(242, 232, 213, 0.95)"
            : "rgba(214, 183, 126, 0.75)"
        );
        sunGrad.addColorStop(0.55, "rgba(167, 123, 61, 0.38)");
        sunGrad.addColorStop(1, "rgba(122, 41, 37, 0)");
        ctx.fillStyle = sunGrad;
        ctx.beginPath();
        ctx.arc(0, 0, sunRadius * 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 4. Lớp Trung cảnh 3D (Z = 0): Kiến trúc Thủy Đình / Nhà Dài / Mành Tre
      const midCenter = project3D(0, 5, 0, rx, ry);
      ctx.save();
      ctx.translate(midCenter.px, midCenter.py);
      ctx.scale(midCenter.scale, midCenter.scale);

      if (mode === "dam-san") {
        // Lớp cảnh Rừng Sáp Đen & Nhà dài Ê-đê trong Hộp kể chuyện
        ctx.fillStyle = "#3E2A20";
        ctx.strokeStyle = "#D6B77E";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-145, 78);
        ctx.lineTo(-85, -15);
        ctx.lineTo(-25, 35);
        ctx.lineTo(45, -35);
        ctx.lineTo(115, 42);
        ctx.lineTo(155, 5);
        ctx.lineTo(155, 78);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Mái nhà dài Ê-đê
        ctx.fillStyle = "#7A2925";
        ctx.beginPath();
        ctx.moveTo(-115, 78);
        ctx.lineTo(-65, -2);
        ctx.lineTo(-15, 78);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else {
        // Kiến trúc Thủy Đình 2 tầng mái đao truyền thống
        ctx.fillStyle = "#A77B3D";
        ctx.strokeStyle = "#F2E8D5";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(-132, -48);
        ctx.quadraticCurveTo(0, -96, 132, -48);
        ctx.lineTo(108, -32);
        ctx.quadraticCurveTo(0, -68, -108, -32);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#7A2925";
        ctx.strokeStyle = "#D6B77E";
        ctx.beginPath();
        ctx.moveTo(-108, -26);
        ctx.quadraticCurveTo(0, -62, 108, -26);
        ctx.lineTo(90, -10);
        ctx.quadraticCurveTo(0, -40, -90, -10);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Mành tre buồng trò & 4 cột đình sơn son
        ctx.fillStyle = "rgba(45, 33, 27, 0.85)";
        ctx.fillRect(-78, -10, 156, 86);
        ctx.strokeStyle = "rgba(214, 183, 126, 0.35)";
        for (let bx = -66; bx <= 66; bx += 12) {
          ctx.beginPath();
          ctx.moveTo(bx, -10);
          ctx.lineTo(bx, 76);
          ctx.stroke();
        }

        [-78, -26, 26, 78].forEach((colX) => {
          ctx.fillStyle = "#7A2925";
          ctx.strokeStyle = "#D6B77E";
          ctx.fillRect(colX - 4, -10, 8, 86);
          ctx.strokeRect(colX - 4, -10, 8, 86);
        });
      }
      ctx.restore();

      // 5. Lớp Tiền cảnh Nổi 3D (Z = +52): Quạt Chèo Xúy Vân & Mặt nạ Tuồng Huyện đường
      // Bên trái: Quạt Chèo
      if (mode === "all" || mode === "cheo") {
        const fanPos = project3D(
          mode === "cheo" ? 0 : -118,
          mode === "cheo" ? 28 : 34,
          55,
          rx,
          ry
        );
        ctx.save();
        ctx.translate(fanPos.px, fanPos.py);
        const fanScale = fanPos.scale * (mode === "cheo" ? 1.35 : 0.92);
        ctx.scale(fanScale, fanScale);
        ctx.rotate(Math.sin(t * 1.4) * 0.05);

        ctx.fillStyle = "#7A2925";
        ctx.strokeStyle = "#D6B77E";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 28);
        ctx.arc(0, 28, 76, -Math.PI * 0.82, -Math.PI * 0.18);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        for (let i = -3; i <= 3; i++) {
          const a = -Math.PI * 0.5 + i * 0.15;
          ctx.beginPath();
          ctx.moveTo(0, 28);
          ctx.lineTo(Math.cos(a) * 74, 28 + Math.sin(a) * 74);
          ctx.strokeStyle = "rgba(214, 183, 126, 0.75)";
          ctx.lineWidth = 1.1;
          ctx.stroke();
        }
        ctx.restore();
      }

      // Bên phải: Mặt nạ Tuồng Ước lệ
      if (mode === "all" || mode === "tuong") {
        const maskPos = project3D(
          mode === "tuong" ? 0 : 118,
          mode === "tuong" ? 8 : 16,
          58,
          rx,
          ry
        );
        ctx.save();
        ctx.translate(maskPos.px, maskPos.py);
        const mScale = maskPos.scale * (mode === "tuong" ? 1.35 : 0.92);
        ctx.scale(mScale, mScale);

        // Mão quan
        ctx.fillStyle = "#7A2925";
        ctx.strokeStyle = "#D6B77E";
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(-28, -28);
        ctx.lineTo(0, -56);
        ctx.lineTo(28, -28);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Khuôn mặt ước lệ
        ctx.fillStyle = "#F2E8D5";
        ctx.strokeStyle = "#A77B3D";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 4, 28, 36, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Nét mày kiếm & mảng màu gò má tuồng cổ
        ctx.strokeStyle = "#2D211B";
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(-18, -8);
        ctx.quadraticCurveTo(-10, -18, -4, -8);
        ctx.moveTo(4, -8);
        ctx.quadraticCurveTo(10, -18, 18, -8);
        ctx.stroke();

        ctx.fillStyle = "rgba(122, 41, 37, 0.65)";
        ctx.beginPath();
        ctx.arc(-14, 8, 6, 0, Math.PI * 2);
        ctx.arc(14, 8, 6, 0, Math.PI * 2);
        ctx.fill();

        // Chòm râu 3 nét khắc
        ctx.strokeStyle = "#2D211B";
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(-10, 22);
        ctx.quadraticCurveTo(0, 17, 10, 22);
        ctx.stroke();
        ctx.restore();
      }

      // 6. Hạt bụi ánh sáng 3D trôi trong không gian
      dust3D.forEach((d, idx) => {
        const dy = ((d.y - t * d.speed * 18 + 70) % 140) - 70;
        const proj = project3D(d.x, dy, d.z, rx, ry);
        const alpha = 0.25 + 0.2 * Math.sin(t * 2 + idx);
        ctx.fillStyle = `rgba(214, 183, 126, ${alpha.toFixed(2)})`;
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

      // 7. Khung viền đồng bản vẽ bảo tàng
      ctx.strokeStyle = "rgba(167, 123, 61, 0.55)";
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
      className={`relative rounded-2xl bg-heritage-woodLight p-3 border border-heritage-goldAntique/60 shadow-cabinet select-none ${className}`}
    >
      {/* Màn hình Canvas 3D Tương tác */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-heritage-woodDark">
        <canvas
          ref={canvasRef}
          aria-label="Mô hình không gian 3D tương tác: Thủy đình, Quạt Chèo, Mặt nạ Tuồng và Sử thi Đăm Săn"
          className="block h-full w-full cursor-grab active:cursor-grabbing"
        />

        {/* Bảng điều khiển góc trên: Chế độ ánh sáng & Gợi ý xoay 3D */}
        <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-heritage-woodDark/90 px-2.5 py-1 text-[11px] font-medium text-heritage-goldSoft border border-heritage-goldAntique/40">
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Không gian 3D Tương tác (Di chuột để xoay góc nhìn)</span>
          </span>

          <button
            type="button"
            onClick={() =>
              setLightingMode((prev) =>
                prev === "warm-stage" ? "storybox-backlight" : "warm-stage"
              )
            }
            className="pointer-events-auto inline-flex items-center gap-1.5 rounded-lg bg-heritage-woodDark/90 px-2.5 py-1 text-[11px] font-semibold text-heritage-goldSoft border border-heritage-goldAntique/50 transition-transform duration-150 active:scale-[0.97] hover:bg-heritage-crimson hover:text-heritage-ivory"
          >
            <Sun className="h-3.5 w-3.5" aria-hidden="true" />
            <span>
              {lightingMode === "warm-stage"
                ? "Ánh sáng: Sân khấu Đình làng"
                : "Ánh sáng: Hộp kể chuyện Xuyên sáng"}
            </span>
          </button>
        </div>

        {/* Nhãn định danh tệp ảnh tư liệu cho giáo viên */}
        <div className="absolute bottom-2.5 left-3 right-3 flex flex-wrap items-center justify-between gap-2 rounded bg-heritage-woodDark/90 px-3 py-1 text-[11px] text-heritage-ivory/90 border border-heritage-goldAntique/40 pointer-events-none">
          <span className="font-medium text-heritage-goldSoft">
            Mô hình 3D Sân khấu &amp; Hộp kể chuyện
          </span>
          <code className="font-mono text-[11px] text-heritage-ivory/80">
            Tệp ảnh thay thế: /images/hero/di-san-san-khau-van-hoa-viet.jpg
          </code>
        </div>
      </div>

      {/* Thanh chọn Lớp Không gian Di sản 3D (Theo chuẩn Emil Kowalski tactile tabs) */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1">
        <div
          role="group"
          aria-label="Chọn mô hình di sản 3D"
          className="flex flex-wrap items-center gap-1.5"
        >
          {[
            { id: "all", label: "Toàn cảnh Tam Liên" },
            { id: "cheo", label: "Hồn Chèo" },
            { id: "tuong", label: "Sắc Tuồng" },
            { id: "roi-nuoc", label: "Thủy Đình" },
            { id: "dam-san", label: "Sử Thi Đăm Săn" },
          ].map((tab) => {
            const active = activeSubject === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveSubject(tab.id as StageSubject)}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all duration-150 active:scale-[0.97] ${
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
          className="inline-flex items-center gap-1 rounded-lg bg-heritage-woodDark/70 px-2.5 py-1 text-xs text-heritage-goldSoft hover:bg-heritage-woodDark active:scale-[0.97] transition-transform duration-150"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Chính diện</span>
        </button>
      </div>
    </div>
  );
};

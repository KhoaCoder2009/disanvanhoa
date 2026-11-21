"use client";

import React, { useEffect, useRef } from "react";

interface AuroraParticlesCanvasProps {
  variant?: "hero" | "makerspace" | "cta";
  className?: string;
}

interface DustMote {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  phase: number;
  color: string;
}

/**
 * Hiệu ứng ánh sáng phòng trưng bày Trắng & Đỏ Son (White & Crimson Gallery Glow):
 * Tạo vầng sáng đỏ son nhẹ và các hạt bụi ánh kim lơ lửng tinh tế trên nền trắng hoặc nền đỏ son.
 */
export const AuroraParticlesCanvas: React.FC<AuroraParticlesCanvasProps> = ({
  variant = "hero",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId = 0;
    let isVisible = true;
    let width = 0;
    let height = 0;

    const motes: DustMote[] = [];

    const initMotes = (w: number, h: number) => {
      motes.length = 0;
      const count = Math.min(Math.floor((w * h) / 38000), 22);
      const colors =
        variant === "cta"
          ? ["#FFFFFF", "#F5E1A4"]
          : ["#B91C1C", "#C59B27", "#7A1C18"];
      for (let i = 0; i < count; i++) {
        motes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: -Math.random() * 0.22 - 0.05,
          radius: Math.random() * 1.6 + 0.7,
          alpha: Math.random() * 0.22 + 0.08,
          phase: Math.random() * Math.PI * 2,
          color: colors[i % colors.length],
        });
      }
    };

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
      initMotes(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let tick = 0;
    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      tick += 1;
      ctx.clearRect(0, 0, width, height);

      // Vầng sáng đỏ son nhẹ trên nền trắng
      const cx1 = width * (0.28 + 0.06 * Math.cos(tick * 0.002));
      const cy1 = height * 0.45;
      const r1 = Math.max(width, height) * 0.48;
      const grad1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, r1);
      grad1.addColorStop(
        0,
        variant === "cta"
          ? "rgba(255, 255, 255, 0.14)"
          : "rgba(185, 28, 28, 0.07)"
      );
      grad1.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(cx1, cy1, r1, 0, Math.PI * 2);
      ctx.fill();

      const cx2 = width * (0.74 + 0.05 * Math.sin(tick * 0.0018));
      const cy2 = height * 0.52;
      const r2 = Math.max(width, height) * 0.42;
      const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, r2);
      grad2.addColorStop(
        0,
        variant === "cta"
          ? "rgba(245, 225, 164, 0.14)"
          : "rgba(197, 155, 39, 0.07)"
      );
      grad2.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(cx2, cy2, r2, 0, Math.PI * 2);
      ctx.fill();

      motes.forEach((m) => {
        if (!prefersReducedMotion) {
          m.x += m.vx;
          m.y += m.vy;
          m.phase += 0.012;
          if (m.y < -5) m.y = height + 5;
          if (m.x < -5) m.x = width + 5;
          if (m.x > width + 5) m.x = -5;
        }
        const a = m.alpha * (0.7 + 0.3 * Math.sin(m.phase));
        ctx.save();
        ctx.globalAlpha = a;
        ctx.fillStyle = m.color;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
    />
  );
};

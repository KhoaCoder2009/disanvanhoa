"use client";

import React, { useRef, useState } from "react";

interface TiltSpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  maxTilt?: number;
}

/**
 * Hiệu ứng ánh đèn rọi tủ kính bảo tàng tinh tế (Subtle Museum Spotlight):
 * Bỏ độ nghiêng 3D quá đà dễ gây cảm giác màu mè công nghiệp; chỉ giữ lại hiệu ứng nâng nhẹ 2px
 * và vầng sáng vàng cổ rất êm dịu bám theo góc nhìn của người thưởng lãm.
 */
export const TiltSpotlightCard: React.FC<TiltSpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(185, 28, 28, 0.08)",
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden transition-[transform,border-color] duration-200 [transition-timing-function:var(--ease-out-strong)] [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 75%)`,
        }}
      />
      <div className="relative z-20 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

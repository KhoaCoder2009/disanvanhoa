"use client";

import React from "react";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

/**
 * SplitText từ React Bits:
 * Tách từng từ trong tiêu đề và tạo hiệu ứng trỗi dậy mượt mà theo nhịp (staggered spring rise).
 * Mặc định luôn hiển thị rõ ràng (opacity: 1) để đảm bảo khả năng tiếp cận và chụp màn hình tức thì.
 */
export const SplitTextReveal: React.FC<SplitTextRevealProps> = ({
  text,
  className = "",
  as: Tag = "h1",
}) => {
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block animate-word-rise mr-[0.26em] last:mr-0"
          style={{
            animationDelay: `${idx * 55}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
};

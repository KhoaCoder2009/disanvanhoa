"use client";

import React from "react";

/**
 * Wrapper tĩnh tại, trang nhã cho không gian Bảo tàng Di sản Văn học Việt.
 * Loại bỏ các tia pháo sáng giải trí gây xao nhãng khi đọc học liệu Ngữ văn.
 */
export const ClickSparkProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

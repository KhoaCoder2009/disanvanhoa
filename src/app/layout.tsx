import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DI SẢN VĂN HỌC VIỆT | Digital Literature & STEAM Heritage",
  description:
    "Từ trang sách đến không gian di sản – Từ tri thức đến sáng tạo. Website học liệu số phục vụ dạy học Ngữ văn THPT theo định hướng STEM/STEAM, bảo tàng số và triển lãm sáng tạo.",
  other: {
    "google-adsense-account": "ca-pub-4912924561709603",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#B91C1C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4912924561709603"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased bg-heritage-ivory text-heritage-ink min-h-screen flex flex-col overflow-x-clip">
        {children}
      </body>
    </html>
  );
}

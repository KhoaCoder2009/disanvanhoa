import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DigitalMuseumSection } from "@/components/DigitalMuseumSection";
import { LearningTopicsSection } from "@/components/LearningTopicsSection";
import { SteamMakerspaceSection } from "@/components/SteamMakerspaceSection";
import { DigitalExhibitionSection } from "@/components/DigitalExhibitionSection";
import { LearningForumSection } from "@/components/LearningForumSection";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { ScrollChapterReveal } from "@/components/ScrollChapterReveal";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-heritage-ink">
      {/* Header cố định có điều hướng cuộn mượt theo từng chặng và thanh tiến độ */}
      <Header />

      {/* Nội dung Scrolling Landing Page liền mạch */}
      <main className="flex-1">
        {/* CHẶNG 00: KHỞI HÀNH — Hero Banner Sân khấu 3D & Giới thiệu 3 giá trị */}
        <HeroSection />

        {/* CHẶNG 01: BẢO TÀNG SỐ – DIGITAL MUSEUM */}
        <ScrollChapterReveal
          chapterNumber="CHẶNG 01 / 05"
          chapterName="BẢO TÀNG SỐ • KHÁM PHÁ KHO TÀNG DI SẢN"
        >
          <DigitalMuseumSection />
        </ScrollChapterReveal>

        {/* CHẶNG 02: CHỦ ĐỀ HỌC TẬP – LEARNING JOURNEYS */}
        <ScrollChapterReveal
          chapterNumber="CHẶNG 02 / 05"
          chapterName="CHỦ ĐỀ HỌC TẬP • HÀNH TRÌNH KHÁM PHÁ TRI THỨC"
        >
          <LearningTopicsSection />
        </ScrollChapterReveal>

        {/* CHẶNG 03: XƯỞNG SÁNG TẠO STEAM – STEAM MAKERSPACE */}
        <ScrollChapterReveal
          chapterNumber="CHẶNG 03 / 05"
          chapterName="XƯỞNG SÁNG TẠO STEAM • TỪ Ý TƯỞNG ĐẾN SẢN PHẨM"
        >
          <SteamMakerspaceSection />
        </ScrollChapterReveal>

        {/* CHẶNG 04: TRIỂN LÃM SỐ – DIGITAL EXHIBITION */}
        <ScrollChapterReveal
          chapterNumber="CHẶNG 04 / 05"
          chapterName="TRIỂN LÃM SỐ • NHỮNG SÁNG TẠO TỪ TRANG SÁCH"
        >
          <DigitalExhibitionSection />
        </ScrollChapterReveal>

        {/* CHẶNG 05: DIỄN ĐÀN HỌC TẬP – LEARNING FORUM */}
        <ScrollChapterReveal
          chapterNumber="CHẶNG 05 / 05"
          chapterName="DIỄN ĐÀN HỌC TẬP • LẮNG NGHE – ĐỐI THOẠI – LAN TỎA"
        >
          <LearningForumSection />
        </ScrollChapterReveal>
      </main>

      {/* CHẶNG KẾT: Lời mời tham gia khám phá & Footer */}
      <CallToActionAndFooter />
    </div>
  );
}

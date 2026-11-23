import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ScrollVisualCinema } from "@/components/ScrollVisualCinema";
import { DIEN_DAN_CINEMA } from "@/data/pageCinemaData";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { LearningForumSection } from "@/components/LearningForumSection";
import { ArrowRight } from "lucide-react";

export default function DienDanHocTapPage() {
  return (
    <div className="min-h-screen flex flex-col bg-heritage-ivory text-heritage-ink">
      <Header />

      <main className="flex-1">
        <ScrollVisualCinema
          id="trinh-chieu-dien-dan"
          scenes={DIEN_DAN_CINEMA}
          skipHref="#noi-dung-dien-dan"
          breadcrumbs={[{ label: "Diễn đàn học tập" }]}
          ariaLabel="Trình chiếu Diễn đàn Học tập và Đối thoại"
        />

        <div id="noi-dung-dien-dan">
          <div className="bg-heritage-ivoryLight border-b border-heritage-crimson/15 py-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-3">
              <Link
                href="/chu-de-hoc-tap"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-heritage-woodDark transition-colors"
              >
                <span>Xem Chủ đề thảo luận</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/trien-lam-so"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-heritage-crimson border border-heritage-crimson/35 hover:bg-heritage-crimson hover:text-white transition-colors"
              >
                <span>Xem Triển lãm sản phẩm</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <LearningForumSection />
        </div>
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

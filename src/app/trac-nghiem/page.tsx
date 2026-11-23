import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ScrollVisualCinema } from "@/components/ScrollVisualCinema";
import { TRAC_NGHIEM_CINEMA } from "@/data/pageCinemaData";
import { HeritageQuizStudio } from "@/components/HeritageQuizStudio";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { BookOpen, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Trắc nghiệm Huyện đường & Sử thi Đăm Săn | DI SẢN VĂN HỌC VIỆT",
  description:
    "Hệ thống câu hỏi trắc nghiệm củng cố kiến thức Ngữ văn 10 (Dự án Tuồng đồ Huyện đường, Sử thi Đăm Săn) và Quy trình Sáng tạo STEAM.",
};

export default function TracNghiemPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-heritage-ink">
      <Header />

      <main className="flex-1">
        <ScrollVisualCinema
          id="trinh-chieu-trac-nghiem"
          scenes={TRAC_NGHIEM_CINEMA}
          skipHref="#noi-dung-trac-nghiem"
          breadcrumbs={[{ label: "Trắc nghiệm Di sản" }]}
          ariaLabel="Trình chiếu Trắc nghiệm Di sản Văn học và STEAM"
        />

        <div id="noi-dung-trac-nghiem">
          <div className="bg-heritage-ivoryLight border-b border-heritage-crimson/15 py-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-3">
              <Link
                href="/bao-tang-so"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-heritage-woodDark transition-colors"
              >
                <Compass className="h-4 w-4" aria-hidden="true" />
                <span>Ôn lại tại Bảo tàng số</span>
              </Link>
              <Link
                href="/chu-de-hoc-tap"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-heritage-crimson border border-heritage-crimson/35 hover:bg-heritage-crimson hover:text-white transition-colors"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                <span>Xem Chủ đề học tập</span>
              </Link>
            </div>
          </div>

          <HeritageQuizStudio />
        </div>
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { HeritageQuizStudio } from "@/components/HeritageQuizStudio";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { BookOpen, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Trắc nghiệm Di sản Văn học & STEAM | DI SẢN VĂN HỌC VIỆT",
  description:
    "Hệ thống câu hỏi trắc nghiệm củng cố kiến thức Ngữ văn 10 (Hồn Chèo, Sắc Tuồng Huyện đường, Múa rối nước, Sử thi Đăm Săn) và Quy trình Sáng tạo STEAM.",
};

export default function TracNghiemPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-heritage-ink">
      <Header />

      <main className="flex-1">
        <PageBanner
          badge="KIỂM TRA & CỦNG CỐ TRI THỨC"
          title="TRẮC NGHIỆM DI SẢN VĂN HỌC & STEAM"
          subtitle="Ôn luyện, giải mã và kiểm tra mức độ thông hiểu các trích đoạn sân khấu dân gian, sử thi Tây Nguyên và phương pháp thiết kế kỹ thuật 5 bước STEAM."
          breadcrumbs={[{ label: "Trắc nghiệm Di sản" }]}
          accentVariant="hero"
          actions={
            <>
              <Link
                href="/#bao-tang-so"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-5 py-2.5 text-sm font-semibold text-white hover:bg-heritage-woodDark transition-colors"
              >
                <Compass className="h-4 w-4" aria-hidden="true" />
                <span>Ôn lại tại Bảo tàng số</span>
              </Link>
              <Link
                href="/#chu-de-hoc-tap"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-heritage-crimson border-2 border-heritage-crimson hover:bg-heritage-ivoryDeep transition-colors"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                <span>Xem Chủ đề học tập</span>
              </Link>
            </>
          }
        />

        <HeritageQuizStudio />
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { LearningForumSection } from "@/components/LearningForumSection";
import { LEARNING_FORUM_META, PRESENTATION_RUBRIC } from "@/data/forumData";
import { ArrowRight, ClipboardCheck } from "lucide-react";

export default function DienDanHocTapPage() {
  return (
    <div className="min-h-screen flex flex-col bg-heritage-ivory text-heritage-ink">
      <Header />

      <main className="flex-1">
        <PageBanner
          badge="KHU VỰC 05 • LEARNING FORUM"
          title="DIỄN ĐÀN HỌC TẬP: LẮNG NGHE – ĐỐI THOẠI – LAN TỎA"
          subtitle={LEARNING_FORUM_META.description}
          breadcrumbs={[{ label: "Diễn đàn học tập" }]}
          accentVariant="hero"
          actions={
            <>
              <Link
                href="/chu-de-hoc-tap"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-5 py-3 text-sm font-semibold text-heritage-ivory border border-heritage-goldSoft/60 hover:bg-heritage-goldAntique hover:text-heritage-woodDark transition-colors"
              >
                <span>Xem Chủ đề thảo luận</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/trien-lam-so"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-woodLight px-5 py-3 text-sm font-semibold text-heritage-goldSoft border border-heritage-goldAntique hover:bg-heritage-goldSoft hover:text-heritage-woodDark transition-colors"
              >
                <span>Xem Triển lãm sản phẩm</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          }
        />

        <LearningForumSection />

        <section className="py-12 sm:py-16 bg-heritage-ivory border-b border-heritage-goldAntique/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-start sm:items-center gap-2.5">
                <ClipboardCheck className="mt-0.5 sm:mt-0 h-6 w-6 shrink-0 text-heritage-crimson" />
                <h2 className="font-serif text-xl sm:text-3xl font-bold text-heritage-woodDark">
                  BẢNG RUBRIC ĐÁNH GIÁ TOÀN DIỆN BÀI THUYẾT TRÌNH &amp; SẢN PHẨM STEAM
                </h2>
              </div>
              <p className="mt-2 text-sm sm:text-base text-heritage-ink">
                Bảng tiêu chí đánh giá 3 mức độ phục vụ hoạt động đánh giá của giáo viên và đánh giá đồng đẳng giữa các nhóm học sinh trong tiết Nói và Nghe.
              </p>
            </div>

            {/* Thẻ Rubric thân thiện màn hình điện thoại */}
            <div className="mt-6 space-y-4 md:hidden">
              {PRESENTATION_RUBRIC.map((rb, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/50 shadow-museum space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-heritage-goldAntique/35 pb-2.5">
                    <h3 className="font-serif text-base font-bold text-heritage-woodDark">
                      {rb.criterion}
                    </h3>
                    <span className="shrink-0 rounded-md bg-heritage-woodDark px-2.5 py-0.5 font-mono text-xs font-bold text-heritage-goldSoft">
                      Trọng số: {rb.weight}
                    </span>
                  </div>
                  <div className="rounded-xl bg-white p-3 border-l-4 border-heritage-emerald">
                    <span className="block text-[11px] font-bold uppercase text-heritage-emerald">
                      Mức Tốt (8.5 – 10 điểm)
                    </span>
                    <p className="mt-1 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                      {rb.excellentDescription}
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-3 border-l-4 border-heritage-amber">
                    <span className="block text-[11px] font-bold uppercase text-heritage-amber">
                      Mức Đạt (6.5 – 8.0 điểm)
                    </span>
                    <p className="mt-1 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                      {rb.goodDescription}
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-3 border-l-4 border-heritage-crimson">
                    <span className="block text-[11px] font-bold uppercase text-heritage-crimson">
                      Cần cố gắng (&lt; 6.5 điểm)
                    </span>
                    <p className="mt-1 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                      {rb.needsImprovementDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 hidden md:block overflow-x-auto rounded-2xl border border-heritage-goldAntique/50 shadow-museum">
              <table className="w-full text-left border-collapse bg-heritage-ivoryLight text-xs sm:text-sm">
                <thead>
                  <tr className="bg-heritage-woodDark text-heritage-goldSoft font-serif">
                    <th className="p-4 border-b border-heritage-goldAntique/40">Tiêu chí đánh giá</th>
                    <th className="p-4 border-b border-heritage-goldAntique/40">Trọng số</th>
                    <th className="p-4 border-b border-heritage-goldAntique/40">Mức Tốt (8.5 – 10 điểm)</th>
                    <th className="p-4 border-b border-heritage-goldAntique/40">Mức Đạt (6.5 – 8.0 điểm)</th>
                    <th className="p-4 border-b border-heritage-goldAntique/40">Cần cố gắng (&lt; 6.5 điểm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-heritage-goldAntique/30">
                  {PRESENTATION_RUBRIC.map((rb, idx) => (
                    <tr key={idx}>
                      <td className="p-4 font-bold text-heritage-woodDark bg-heritage-ivory">
                        {rb.criterion}
                      </td>
                      <td className="p-4 font-bold text-heritage-crimson bg-heritage-ivory">
                        {rb.weight}
                      </td>
                      <td className="p-4 leading-relaxed">{rb.excellentDescription}</td>
                      <td className="p-4 leading-relaxed">{rb.goodDescription}</td>
                      <td className="p-4 leading-relaxed">{rb.needsImprovementDescription}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

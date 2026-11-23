import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ScrollVisualCinema } from "@/components/ScrollVisualCinema";
import { CHU_DE_HOC_TAP_CINEMA } from "@/data/pageCinemaData";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { LearningTopicsSection } from "@/components/LearningTopicsSection";
import { LEARNING_TOPICS } from "@/data/learningTopicsData";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

export default function ChuDeHocTapPage() {
  return (
    <div className="min-h-screen flex flex-col bg-heritage-ivory text-heritage-ink">
      <Header />

      <main className="flex-1">
        <ScrollVisualCinema
          id="trinh-chieu-chu-de"
          scenes={CHU_DE_HOC_TAP_CINEMA}
          skipHref="#noi-dung-chu-de"
          breadcrumbs={[{ label: "Chủ đề học tập" }]}
          ariaLabel="Trình chiếu Chủ đề học tập và Dự án STEAM"
        />

        <div id="noi-dung-chu-de">
          <div className="bg-heritage-ivoryLight border-b border-heritage-crimson/15 py-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-3">
              {LEARNING_TOPICS.map((tp) => (
                <Link
                  key={tp.id}
                  href={`/chu-de-hoc-tap/${tp.id}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-heritage-woodDark transition-colors"
                >
                  {tp.status === "Đang triển khai" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Clock className="h-4 w-4" />
                  )}
                  <span>
                    {tp.topicNumber}: {tp.title}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <LearningTopicsSection />
        </div>
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

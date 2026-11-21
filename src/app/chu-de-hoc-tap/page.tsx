import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { LearningTopicsSection } from "@/components/LearningTopicsSection";
import { LEARNING_TOPICS, LEARNING_TOPICS_META } from "@/data/learningTopicsData";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

export default function ChuDeHocTapPage() {
  return (
    <div className="min-h-screen flex flex-col bg-heritage-ivory text-heritage-ink">
      <Header />

      <main className="flex-1">
        <PageBanner
          badge="KHU VỰC 02 • LEARNING JOURNEYS"
          title="HÀNH TRÌNH KHÁM PHÁ TRI THỨC & DỰ ÁN HỌC TẬP"
          subtitle={LEARNING_TOPICS_META.description}
          breadcrumbs={[{ label: "Chủ đề học tập" }]}
          accentVariant="hero"
          actions={
            <>
              {LEARNING_TOPICS.map((tp) => (
                <Link
                  key={tp.id}
                  href={`/chu-de-hoc-tap/${tp.id}`}
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-heritage-ivory border border-heritage-goldSoft/60 transition-colors ${
                    tp.status === "Đang triển khai"
                      ? "bg-heritage-crimson hover:bg-heritage-goldAntique hover:text-heritage-woodDark"
                      : "bg-heritage-moss hover:bg-heritage-goldAntique hover:text-heritage-woodDark"
                  }`}
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
            </>
          }
        />

        <LearningTopicsSection />
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

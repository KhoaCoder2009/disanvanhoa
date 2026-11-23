import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { LearningForumSection } from "@/components/LearningForumSection";
import { LEARNING_FORUM_META } from "@/data/forumData";
import { ArrowRight } from "lucide-react";

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
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

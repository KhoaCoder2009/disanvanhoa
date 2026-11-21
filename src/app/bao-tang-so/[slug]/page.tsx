import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { HeritageArtwork } from "@/components/HeritageArtwork";
import { MUSEUM_WINGS } from "@/data/museumData";
import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  Film,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function generateStaticParams() {
  return MUSEUM_WINGS.map((w) => ({ slug: w.id }));
}

export default async function MuseumWingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const wingIndex = MUSEUM_WINGS.findIndex((w) => w.id === slug);
  if (wingIndex === -1) {
    notFound();
  }

  const wing = MUSEUM_WINGS[wingIndex];
  const nextWing = MUSEUM_WINGS[(wingIndex + 1) % MUSEUM_WINGS.length];

  return (
    <div className="min-h-screen flex flex-col bg-heritage-ivory text-heritage-ink">
      <Header />

      <main className="flex-1">
        <PageBanner
          badge={`${wing.code} • ${wing.gradeReference}`}
          title={`${wing.title} — ${wing.subtitle}`}
          subtitle={wing.shortDescription}
          breadcrumbs={[
            { label: "Bảo tàng số", href: "/bao-tang-so" },
            { label: wing.title },
          ]}
          accentVariant="hero"
          actions={
            <>
              <Link
                href="/bao-tang-so"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-woodLight px-5 py-3 text-sm font-semibold text-heritage-goldSoft border border-heritage-goldAntique hover:bg-heritage-goldSoft hover:text-heritage-woodDark transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Quay lại sảnh Bảo tàng số</span>
              </Link>
              <Link
                href="/chu-de-hoc-tap"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-5 py-3 text-sm font-semibold text-heritage-ivory border border-heritage-goldSoft/60 hover:bg-heritage-goldAntique hover:text-heritage-woodDark transition-colors"
              >
                <span>Thực hành dự án STEAM</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          }
        />

        <section className="py-14 sm:py-18 bg-heritage-ivory">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              {/* Cột trái: Tranh lớn & Khung Video tư liệu */}
              <div className="lg:col-span-6 space-y-6">
                <div className="rounded-2xl bg-heritage-woodDark p-3 border border-heritage-goldAntique shadow-cabinet">
                  <HeritageArtwork
                    subject={wing.artSubject}
                    expectedFile={wing.expectedAssetFile}
                    caption={wing.title}
                    className="aspect-[16/10] w-full rounded-xl"
                  />
                </div>

                {/* Khung Video tư liệu */}
                <div className="rounded-2xl bg-heritage-woodDark p-6 text-heritage-ivory border border-heritage-goldAntique/60 shadow-cabinet">
                  <div className="flex items-center gap-2.5 text-heritage-goldSoft font-serif text-lg font-bold">
                    <Film className="h-5 w-5" />
                    <h2>Tư liệu Video Trích đoạn &amp; Diễn xướng</h2>
                  </div>
                  <p className="mt-2 text-sm text-heritage-ivory/90 leading-relaxed">
                    Không gian trình chiếu trích đoạn sân khấu phục vụ hoạt động quan sát, phân tích ngôn ngữ hình thể, làn điệu và hóa trang trên lớp.
                  </p>
                  <div className="mt-4 rounded-xl bg-heritage-woodLight/80 p-4 border border-heritage-goldAntique/40 text-xs space-y-1.5">
                    <p className="font-semibold text-heritage-goldSoft">
                      Đường dẫn tệp video dành cho giáo viên cập nhật:
                    </p>
                    <code className="block bg-heritage-woodDark px-3 py-2 rounded text-heritage-ivory">
                      /public/videos/museum/{wing.id}.mp4
                    </code>
                  </div>
                </div>
              </div>

              {/* Cột phải: Hồ sơ học thuật chi tiết */}
              <div className="lg:col-span-6 space-y-6">
                <div className="rounded-2xl bg-heritage-ivoryLight p-6 border border-heritage-goldAntique/50 shadow-museum">
                  <div className="flex items-center gap-2 font-serif text-xl font-bold text-heritage-woodDark">
                    <BookMarked className="h-5 w-5 text-heritage-crimson" />
                    <h2>1. Bối cảnh Văn hóa &amp; Lịch sử</h2>
                  </div>
                  <p className="mt-3 text-sm sm:text-base text-heritage-ink leading-relaxed">
                    {wing.detailContent.culturalContext}
                  </p>
                </div>

                <div className="rounded-2xl bg-heritage-ivoryLight p-6 border border-heritage-goldAntique/50 shadow-museum">
                  <div className="flex items-center gap-2 font-serif text-xl font-bold text-heritage-woodDark">
                    <Sparkles className="h-5 w-5 text-heritage-crimson" />
                    <h2>2. Trọng tâm Văn bản Ngữ văn 10</h2>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-heritage-crimson">
                    {wing.workReference}
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-heritage-ink leading-relaxed">
                    {wing.detailContent.literaryExcerptInfo}
                  </p>

                  <h3 className="mt-5 font-serif text-base font-bold text-heritage-woodDark">
                    Đặc trưng nghệ thuật biểu diễn &amp; ước lệ:
                  </h3>
                  <ul className="mt-2.5 space-y-2 text-sm">
                    {wing.detailContent.artisticFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-heritage-crimson" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-heritage-ivoryLight p-6 border border-heritage-goldAntique/50 shadow-museum">
                  <h2 className="font-serif text-xl font-bold text-heritage-woodDark">
                    3. Kết nối Xưởng sáng tạo STEAM
                  </h2>
                  <p className="mt-2.5 text-sm sm:text-base text-heritage-ink leading-relaxed">
                    {wing.detailContent.steamConnection}
                  </p>
                </div>

                <div className="rounded-2xl bg-heritage-ivoryDeep/75 p-6 border border-heritage-goldAntique">
                  <div className="flex items-center gap-2 font-serif text-lg font-bold text-heritage-woodDark">
                    <MessageSquare className="h-5 w-5 text-heritage-moss" />
                    <h2>Câu hỏi Định hướng Thảo luận</h2>
                  </div>
                  <p className="mt-2 text-sm sm:text-base italic text-heritage-ink leading-relaxed">
                    &ldquo;{wing.detailContent.discussionPrompt}&rdquo;
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/dien-dan-hoc-tap"
                      className="inline-flex items-center gap-2 rounded-xl bg-heritage-woodDark px-4 py-2 text-xs sm:text-sm font-semibold text-heritage-goldSoft hover:bg-heritage-crimson hover:text-heritage-ivory transition-colors"
                    >
                      <span>Tham gia thảo luận tại Diễn đàn</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={`/bao-tang-so/${nextWing.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-heritage-moss px-4 py-2 text-xs sm:text-sm font-semibold text-heritage-ivory hover:bg-heritage-woodDark transition-colors"
                    >
                      <span>Phòng tiếp theo: {nextWing.title}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

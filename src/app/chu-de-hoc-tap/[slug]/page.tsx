import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { ScrollVisualCinema } from "@/components/ScrollVisualCinema";
import { buildTopicDetailCinema } from "@/data/pageCinemaData";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { TiltSpotlightCard } from "@/components/effects/TiltSpotlightCard";
import { HeritageArtwork } from "@/components/HeritageArtwork";
import { LEARNING_TOPICS } from "@/data/learningTopicsData";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Layers,
  PackageCheck,
  Users,
  Wrench,
} from "lucide-react";

export function generateStaticParams() {
  return LEARNING_TOPICS.map((t) => ({ slug: t.id }));
}

export default async function LearningTopicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topicIndex = LEARNING_TOPICS.findIndex((t) => t.id === slug);
  if (topicIndex === -1) {
    notFound();
  }

  const topic = LEARNING_TOPICS[topicIndex];
  const otherTopic = LEARNING_TOPICS[(topicIndex + 1) % LEARNING_TOPICS.length];
  const topicScenes = buildTopicDetailCinema(topic);

  return (
    <div className="min-h-screen flex flex-col bg-heritage-ivory text-heritage-ink">
      <Header />

      <main className="flex-1">
        <ScrollVisualCinema
          id={`trinh-chieu-du-an-${topic.id}`}
          scenes={topicScenes}
          skipHref="#noi-dung-du-an-chi-tiet"
          breadcrumbs={[
            { label: "Chủ đề học tập", href: "/chu-de-hoc-tap" },
            { label: topic.title },
          ]}
          ariaLabel={`Trình chiếu dự án ${topic.title}`}
        />

        <section
          id="noi-dung-du-an-chi-tiet"
          className="py-10 sm:py-14 lg:py-16 bg-heritage-ivory border-b border-heritage-goldAntique/30"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/chu-de-hoc-tap"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-heritage-crimson border border-heritage-crimson/35 hover:bg-heritage-crimson hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Tất cả Chủ đề học tập</span>
              </Link>
              <Link
                href="/xuong-steam"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-4 py-2.5 text-sm font-semibold text-white hover:bg-heritage-woodDark transition-colors"
              >
                <Wrench className="h-4 w-4" />
                <span>Quy trình Xưởng STEAM</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-heritage-woodDark p-2.5 sm:p-3 border border-heritage-goldAntique shadow-cabinet">
                  <HeritageArtwork
                    subject={topic.artSubject}
                    expectedFile={topic.expectedAssetFile}
                    caption={topic.title}
                    className="aspect-[16/10] w-full rounded-xl"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-5">
                <div
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-heritage-ivory ${
                    topic.status === "Đang triển khai"
                      ? "bg-heritage-crimson"
                      : "bg-heritage-moss"
                  }`}
                >
                  {topic.status === "Đang triển khai" ? (
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  ) : (
                    <Clock className="h-3.5 w-3.5" />
                  )}
                  <span>Trạng thái: {topic.status}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heritage-woodDark">
                  Mục tiêu &amp; Trọng tâm Dự án Học tập
                </h2>

                <p className="text-base text-heritage-ink leading-relaxed">
                  {topic.coreContent}
                </p>

                <div className="rounded-2xl bg-heritage-ivoryLight p-5 border border-heritage-goldAntique/50 space-y-2.5">
                  <h3 className="font-serif text-lg font-bold text-heritage-woodDark">
                    Chuỗi hoạt động học tập trên lớp &amp; tại xưởng:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {topic.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-heritage-crimson" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-heritage-woodDark p-5 text-heritage-ivory border border-heritage-goldAntique">
                  <div className="flex items-center gap-3">
                    <PackageCheck className="h-6 w-6 text-heritage-goldSoft shrink-0" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-heritage-goldSoft block">
                        Sản phẩm đầu ra của học sinh
                      </span>
                      <p className="font-serif text-base sm:text-lg font-bold text-heritage-ivory">
                        {topic.expectedProducts}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {topic.characters && (
              <div className="pt-4">
                <div className="flex items-center gap-2.5">
                  <Users className="h-6 w-6 text-heritage-crimson" />
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heritage-woodDark">
                    HỒ SƠ GIẢI MÃ MÃ MÀU &amp; NÉT MẶT 4 NHÂN VẬT (HUYỆN ĐƯỜNG)
                  </h2>
                </div>
                <p className="mt-2 text-sm sm:text-base text-heritage-ink">
                  Tư liệu hướng dẫn học sinh chuyển hóa lời thoại trào phúng trong SGK Ngữ văn 10 thành ngôn ngữ tạo hình mặt nạ tuồng bằng bìa cứng.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {topic.characters.map((char, idx) => (
                    <TiltSpotlightCard
                      key={char.id}
                      className="rounded-2xl bg-heritage-ivoryLight p-6 border border-heritage-goldAntique/55 shadow-museum"
                    >
                      <div>
                        <div className="flex items-center justify-between border-b border-heritage-goldAntique/40 pb-3">
                          <div>
                            <h3 className="font-serif text-2xl font-bold text-heritage-woodDark">
                              0{idx + 1}. {char.name}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-heritage-crimson">
                              {char.roleTitle}
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5">
                            {char.paletteHex.map((hex, i) => (
                              <span
                                key={i}
                                className="h-5 w-5 rounded-full border border-heritage-woodDark/40"
                                style={{ backgroundColor: hex }}
                                title={`Mã màu: ${hex}`}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 space-y-2.5 text-sm leading-relaxed">
                          <p>
                            <strong className="text-heritage-crimson">Giải mã sắc diện (Mã màu):</strong>{" "}
                            {char.faceColorMeaning}
                          </p>
                          <p>
                            <strong className="text-heritage-woodDark">Nét cọ ước lệ (Mày – Mắt – Râu):</strong>{" "}
                            {char.strokeFeatures}
                          </p>
                          <p>
                            <strong className="text-heritage-moss">Căn cứ tính cách trong văn bản:</strong>{" "}
                            {char.personalityDecoding}
                          </p>
                          <p className="rounded-xl bg-heritage-ivoryDeep/65 p-3 text-xs sm:text-sm">
                            <strong className="text-heritage-woodDark">Đạo cụ &amp; Động tác vi diễn:</strong>{" "}
                            {char.propsAndGesture}
                          </p>
                        </div>
                      </div>
                    </TiltSpotlightCard>
                  ))}
                </div>
              </div>
            )}

            {topic.stagePlanSteps && (
              <div className="pt-4">
                <div className="flex items-center gap-2.5">
                  <Layers className="h-6 w-6 text-heritage-moss" />
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heritage-woodDark">
                    3 HẠNG MỤC SÂN KHẤU HÓA &amp; THUYẾT MINH LỚP 10.3
                  </h2>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {topic.stagePlanSteps.map((layer, idx) => (
                    <TiltSpotlightCard
                      key={idx}
                      className="rounded-2xl bg-heritage-ivoryLight p-6 border border-heritage-goldAntique/55 shadow-museum"
                    >
                      <div>
                        <h3 className="font-serif text-xl font-bold text-heritage-woodDark">
                          {layer.stageName}
                        </h3>
                        <p className="mt-2 text-sm text-heritage-ink leading-relaxed">
                          {layer.description}
                        </p>
                      </div>
                      <div className="mt-4 rounded-xl bg-heritage-ivoryDeep/70 p-3.5 text-xs sm:text-sm border border-heritage-goldAntique/40">
                        <strong className="text-heritage-crimson block">
                          Đạo cụ &amp; Tư liệu sử dụng:
                        </strong>
                        <span className="mt-1 block">{layer.materialSuggestion}</span>
                      </div>
                    </TiltSpotlightCard>
                  ))}
                </div>
              </div>
            )}

            {/* Tiến trình 4 chặng thực hiện dự án */}
            <div className="pt-4">
              <div className="flex items-center gap-2.5">
                <BookOpen className="h-6 w-6 text-heritage-crimson" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heritage-woodDark">
                  TIẾN TRÌNH 4 CHẶNG THỰC HIỆN DỰ ÁN
                </h2>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {topic.projectSteps.map((st, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-2xl bg-heritage-ivoryLight p-5 border border-heritage-goldAntique/50"
                  >
                    <div>
                      <span className="inline-block rounded-md bg-heritage-woodDark px-2.5 py-1 text-xs font-semibold text-heritage-goldSoft">
                        {st.phase}
                      </span>
                      <p className="mt-3 text-sm text-heritage-ink leading-relaxed">
                        {st.task}
                      </p>
                    </div>
                    <div className="mt-4 border-t border-heritage-goldAntique/30 pt-3 text-xs font-semibold text-heritage-moss">
                      Đầu ra: {st.output}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-heritage-woodDark p-5 sm:p-6 text-heritage-ivory border border-heritage-goldAntique flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-heritage-goldSoft">
                  Khám phá chủ đề tiếp theo
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-heritage-ivory">
                  {otherTopic.topicNumber}: {otherTopic.title} ({otherTopic.status})
                </h3>
              </div>
              <Link
                href={`/chu-de-hoc-tap/${otherTopic.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-heritage-crimson px-5 py-3 text-sm font-semibold text-heritage-ivory border border-heritage-goldSoft/60 hover:bg-heritage-goldAntique hover:text-heritage-woodDark transition-colors shrink-0"
              >
                <span>Xem {otherTopic.topicNumber}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

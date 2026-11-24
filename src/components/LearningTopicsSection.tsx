"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  X,
  CheckCircle2,
  Clock,
  BookOpen,
  Users,
  Layers,
  PackageCheck,
  ExternalLink,
} from "lucide-react";
import { LEARNING_TOPICS, LEARNING_TOPICS_META } from "@/data/learningTopicsData";
import { LearningTopic } from "@/types/heritage";
import { HeritageArtwork } from "./HeritageArtwork";
import { TiltSpotlightCard } from "./effects/TiltSpotlightCard";

export const LearningTopicsSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<LearningTopic | null>(null);
  const [activeCharId, setActiveCharId] = useState<string>("tri-huyen");

  useEffect(() => {
    if (!selectedTopic) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTopic(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedTopic]);

  const topic01 = LEARNING_TOPICS[0];
  const topic02 = LEARNING_TOPICS[1];

  return (
    <section
      id="chu-de-hoc-tap"
      aria-labelledby="topics-section-heading"
      className="py-12 sm:py-16 lg:py-20 bg-heritage-ivoryLight border-b border-heritage-goldAntique/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề Khu vực 2: CHỦ ĐỀ HỌC TẬP */}
        <div className="max-w-3xl">
          <h2
            id="topics-section-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-heritage-crimson tracking-tight"
          >
            {LEARNING_TOPICS_META.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-heritage-ink leading-relaxed">
            {LEARNING_TOPICS_META.description}
          </p>
        </div>

        {/* Hai thẻ chủ đề trên nền Trắng - Đỏ Son */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 lg:gap-10 lg:grid-cols-12">
          {/* CHỦ ĐỀ 01: MÃ MÀU VÀ NÉT MẶT ƯỚC LỆ (Huyện đường - Đang triển khai) */}
          <TiltSpotlightCard className="lg:col-span-7 rounded-2xl bg-white text-heritage-ink border-2 border-heritage-crimson shadow-museum">
            <div>
              <div className="relative">
                <HeritageArtwork
                  subject={topic01.artSubject}
                  expectedFile={topic01.expectedAssetFile}
                  caption={topic01.title}
                  linkHref={`/chu-de-hoc-tap/${topic01.id}`}
                  linkLabel={`${topic01.topicNumber}: ${topic01.title}`}
                  onQuickPreview={() => setSelectedTopic(topic01)}
                  className="aspect-[16/9] w-full"
                />
                <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-lg bg-white/95 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold tracking-wider text-heritage-crimson border border-heritage-crimson">
                    {topic01.topicNumber} • {topic01.subjectInfo}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-heritage-crimson px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs font-semibold text-white border border-white/60">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{topic01.status}</span>
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-heritage-crimson">
                  {topic01.lessonInfo}
                </p>
                <h3 className="mt-1.5 font-serif text-xl sm:text-3xl font-bold text-heritage-crimson">
                  {topic01.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-heritage-woodDark font-medium">
                  {topic01.summary}
                </p>

                {/* Lưới 4 nhân vật cần hiển thị đúng: Tri huyện, Đề lại, Lính lệ, Trùm Sò */}
                <div className="mt-5 sm:mt-6 rounded-xl bg-heritage-ivoryLight p-3.5 sm:p-4 border border-heritage-crimson/30">
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-heritage-crimson">
                      Bốn nhân vật giải mã tạo hình (Huyện đường)
                    </span>
                    <span className="text-xs text-heritage-ink/80">
                      Nhấn để xem mã màu
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                    {topic01.characters?.map((char) => {
                      const isSelected = activeCharId === char.id;
                      return (
                        <button
                          key={char.id}
                          type="button"
                          onClick={() => setActiveCharId(char.id)}
                          className={`flex min-h-[44px] flex-col items-start rounded-lg p-2.5 text-left transition-colors ${
                            isSelected
                              ? "bg-heritage-crimson text-white border border-heritage-crimson shadow-sm"
                              : "bg-white text-heritage-ink border border-heritage-crimson/25 hover:border-heritage-crimson"
                          }`}
                        >
                          <div className="flex items-center gap-1.5">
                            {char.paletteHex.slice(0, 3).map((hex, i) => (
                              <span
                                key={i}
                                className="h-3 w-3 rounded-full border border-black/20"
                                style={{ backgroundColor: hex }}
                              />
                            ))}
                          </div>
                          <span className="mt-1.5 font-serif text-sm font-bold">
                            {char.name}
                          </span>
                          <span
                            className={`text-[11px] line-clamp-1 ${
                              isSelected ? "text-white/90" : "text-heritage-crimson"
                            }`}
                          >
                            {char.roleTitle}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Chi tiết nhanh của nhân vật đang chọn */}
                  {topic01.characters
                    ?.filter((c) => c.id === activeCharId)
                    .map((char) => (
                      <div
                        key={char.id}
                        className="mt-3 rounded-lg bg-white p-3 text-xs sm:text-sm text-heritage-ink border border-heritage-crimson/25"
                      >
                        <p className="font-bold text-heritage-crimson">
                          {char.name} — {char.roleTitle}
                        </p>
                        <p className="mt-1 leading-relaxed">{char.faceColorMeaning}</p>
                      </div>
                    ))}
                </div>

                {/* Thông tin Hoạt động & Sản phẩm */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm">
                  <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-crimson/20">
                    <span className="font-serif font-bold text-heritage-crimson block">
                      Hoạt động trọng tâm
                    </span>
                    <p className="mt-1.5 text-heritage-ink leading-relaxed">
                      Giải mã nhân vật, thiết kế chân dung mô phỏng hóa trang tuồng, chế tạo, vi diễn.
                    </p>
                  </div>
                  <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-crimson/20">
                    <span className="font-serif font-bold text-heritage-crimson block">
                      Sản phẩm dự án
                    </span>
                    <p className="mt-1.5 text-heritage-ink leading-relaxed">
                      {topic01.expectedProducts}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 pb-4 sm:px-8 sm:pb-8">
              <button
                type="button"
                onClick={() => setSelectedTopic(topic01)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-heritage-crimson px-6 py-3.5 text-sm sm:text-base font-semibold text-white border border-heritage-crimson transition-colors duration-200 hover:bg-heritage-woodDark focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson"
              >
                <span>{topic01.buttonLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </TiltSpotlightCard>

          {/* CHỦ ĐỀ 02: ĐÁNH THỨC THẾ GIỚI SỬ THI (Đăm Săn - Đồng bộ bảng màu bảo tàng) */}
          <TiltSpotlightCard className="lg:col-span-5 rounded-2xl bg-heritage-ivory text-heritage-ink border-2 border-heritage-goldAntique/60 shadow-museum">
            <div>
              <div className="relative">
                <HeritageArtwork
                  subject={topic02.artSubject}
                  expectedFile={topic02.expectedAssetFile}
                  caption={topic02.title}
                  linkHref={`/chu-de-hoc-tap/${topic02.id}`}
                  linkLabel={`${topic02.topicNumber}: ${topic02.title}`}
                  onQuickPreview={() => setSelectedTopic(topic02)}
                  className="aspect-[16/10] w-full"
                />
                <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-lg bg-heritage-woodDark/90 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold tracking-wider text-heritage-goldSoft border border-heritage-goldAntique">
                    {topic02.topicNumber} • {topic02.subjectInfo}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-heritage-moss px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs font-semibold text-heritage-ivory border border-heritage-goldSoft/50">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{topic02.status}</span>
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-heritage-crimson">
                  {topic02.lessonInfo}
                </p>
                <h3 className="mt-1.5 font-serif text-2xl font-bold text-heritage-woodDark">
                  {topic02.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-medium text-heritage-woodLight">
                  {topic02.summary}
                </p>

                {/* Các hạng mục thực hành Sân khấu hóa */}
                <div className="mt-5 rounded-xl bg-heritage-ivoryDeep/60 p-4 border border-heritage-goldAntique/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-heritage-woodDark block">
                    3 Hạng mục Sân khấu hóa Lớp 10.3
                  </span>
                  <div className="mt-2.5 space-y-2 text-xs sm:text-sm">
                    {topic02.stagePlanSteps?.map((layer, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg bg-heritage-ivoryLight p-2.5 border border-heritage-goldAntique/30"
                      >
                        <span className="font-semibold text-heritage-crimson">
                          {layer.stageName}:
                        </span>{" "}
                        <span className="text-heritage-ink">{layer.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="rounded-xl bg-heritage-ivoryLight p-3.5 border border-heritage-goldAntique/40">
                    <span className="font-serif font-bold text-heritage-woodDark">
                      Nội dung &amp; Hoạt động:
                    </span>
                    <p className="mt-1 text-heritage-ink leading-relaxed">
                      {topic02.coreContent}
                    </p>
                  </div>
                  <div className="rounded-xl bg-heritage-ivoryLight p-3.5 border border-heritage-goldAntique/40">
                    <span className="font-serif font-bold text-heritage-woodDark">
                      Sản phẩm đầu ra:
                    </span>
                    <p className="mt-1 text-heritage-ink leading-relaxed">
                      {topic02.expectedProducts}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7">
              <button
                type="button"
                onClick={() => setSelectedTopic(topic02)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-heritage-crimson px-6 py-3.5 text-sm sm:text-base font-semibold text-white border border-heritage-crimson transition-colors duration-200 hover:bg-heritage-woodDark focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson"
              >
                <span>{topic02.buttonLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </TiltSpotlightCard>
        </div>
      </div>

      {/* Modal xem chi tiết Chủ đề học tập */}
      {selectedTopic && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedTopic(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-heritage-woodDark/80 p-3 sm:p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="topic-modal-title"
        >
          <div className="relative my-2 sm:my-8 w-full max-w-4xl rounded-2xl bg-heritage-ivory border-2 border-heritage-goldAntique p-4 sm:p-8 text-heritage-ink shadow-cabinet max-h-[92dvh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3 sm:gap-4 border-b border-heritage-goldAntique/40 pb-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-heritage-woodDark px-3 py-1 text-xs font-semibold text-heritage-goldSoft">
                    {selectedTopic.topicNumber} • {selectedTopic.subjectInfo}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold text-heritage-ivory ${
                      selectedTopic.status === "Đang triển khai"
                        ? "bg-heritage-crimson"
                        : "bg-heritage-moss"
                    }`}
                  >
                    {selectedTopic.status}
                  </span>
                </div>
                <h3
                  id="topic-modal-title"
                  className="mt-2 font-serif text-xl sm:text-3xl font-bold text-heritage-woodDark"
                >
                  {selectedTopic.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-heritage-crimson">
                  {selectedTopic.lessonInfo} — {selectedTopic.summary}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTopic(null)}
                aria-label="Đóng chi tiết chủ đề"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-heritage-woodDark text-heritage-goldSoft hover:bg-heritage-crimson hover:text-heritage-ivory"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {selectedTopic.characters && (
                <div>
                  <h4 className="flex items-center gap-2 font-serif text-xl font-bold text-heritage-woodDark">
                    <Users className="h-5 w-5 text-heritage-crimson" />
                    <span>Hồ sơ giải mã 4 nhân vật trích đoạn Huyện đường</span>
                  </h4>
                  <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {selectedTopic.characters.map((char) => (
                      <div
                        key={char.id}
                        className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/50"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-lg font-bold text-heritage-woodDark">
                            {char.name}
                          </span>
                          <div className="flex items-center gap-1.5">
                            {char.paletteHex.map((hex, i) => (
                              <span
                                key={i}
                                className="h-4 w-4 rounded-full border border-heritage-woodDark/40"
                                style={{ backgroundColor: hex }}
                                title={`Mã màu: ${hex}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs font-semibold text-heritage-crimson">
                          {char.roleTitle}
                        </p>
                        <p className="mt-2 text-xs sm:text-sm leading-relaxed">
                          <strong>Mã màu:</strong> {char.faceColorMeaning}
                        </p>
                        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed">
                          <strong>Nét mặt &amp; Điệu bộ:</strong> {char.strokeFeatures}{" "}
                          {char.propsAndGesture}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTopic.stagePlanSteps && (
                <div>
                  <h4 className="flex items-center gap-2 font-serif text-xl font-bold text-heritage-woodDark">
                    <Layers className="h-5 w-5 text-heritage-moss" />
                    <span>3 Hạng mục Sân khấu hóa &amp; Thuyết minh Lớp 10.3</span>
                  </h4>
                  <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {selectedTopic.stagePlanSteps.map((layer, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/50"
                      >
                        <span className="font-serif font-bold text-heritage-crimson block">
                          {layer.stageName}
                        </span>
                        <p className="mt-2 text-sm leading-relaxed">
                          {layer.description}
                        </p>
                        <p className="mt-2 text-xs text-heritage-woodLight bg-heritage-ivoryDeep/60 p-2 rounded">
                          <strong>Đạo cụ &amp; Tư liệu:</strong> {layer.materialSuggestion}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="flex items-center gap-2 font-serif text-xl font-bold text-heritage-woodDark">
                  <BookOpen className="h-5 w-5 text-heritage-crimson" />
                  <span>Tiến trình tổ chức hoạt động học tập</span>
                </h4>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {selectedTopic.projectSteps.map((st, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/40"
                    >
                      <span className="text-xs font-bold uppercase tracking-wider text-heritage-crimson">
                        {st.phase}
                      </span>
                      <p className="mt-1 text-sm leading-relaxed">{st.task}</p>
                      <p className="mt-2 text-xs font-semibold text-heritage-moss">
                        Đầu ra: {st.output}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-heritage-woodDark p-4 text-heritage-ivory flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <PackageCheck className="h-6 w-6 text-heritage-goldSoft shrink-0" />
                  <div>
                    <span className="text-xs text-heritage-goldSoft block">
                      Sản phẩm cần hoàn thành
                    </span>
                    <span className="font-serif font-bold text-sm sm:text-base">
                      {selectedTopic.expectedProducts}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/chu-de-hoc-tap/${selectedTopic.id}`}
                  onClick={() => setSelectedTopic(null)}
                  className="w-full sm:w-auto text-center rounded-lg bg-heritage-crimson px-4 py-2.5 text-xs sm:text-sm font-semibold text-heritage-ivory hover:bg-heritage-goldAntique hover:text-heritage-woodDark transition-colors"
                >
                  Mở toàn trang chủ đề này
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

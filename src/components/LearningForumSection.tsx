"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Mic,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import {
  DISCUSSION_CORNER_GROUPS,
  LEARNING_FORUM_META,
  SPEAKING_LISTENING_GUIDES,
} from "@/data/forumData";

export const LearningForumSection: React.FC = () => {
  const [selectedDiscussionId, setSelectedDiscussionId] = useState<string>(
    DISCUSSION_CORNER_GROUPS[0].id
  );
  const [activeSpeakingTab, setActiveSpeakingTab] = useState<
    "structure" | "listening"
  >("structure");

  const currentDiscussion =
    DISCUSSION_CORNER_GROUPS.find((d) => d.id === selectedDiscussionId) ||
    DISCUSSION_CORNER_GROUPS[0];

  return (
    <section
      id="dien-dan-hoc-tap"
      aria-labelledby="forum-section-heading"
      className="py-12 sm:py-16 lg:py-20 bg-heritage-ivoryLight border-b border-heritage-goldAntique/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề Khu vực 5: DIỄN ĐÀN HỌC TẬP */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <h2
              id="forum-section-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-heritage-crimson tracking-tight"
            >
              {LEARNING_FORUM_META.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-heritage-ink leading-relaxed">
              {LEARNING_FORUM_META.description}
            </p>
          </div>
        </div>

        {/* Ba khu chức năng: A. GÓC THẢO LUẬN, B. NÓI VÀ NGHE, C. PHẢN HỒI VÀ CHIA SẺ */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-12">
          {/* KHU A: GÓC THẢO LUẬN (Chiếm 12 cột ở hàng trên hoặc 6 cột) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl bg-heritage-ivory p-4 sm:p-6 lg:p-8 border border-heritage-goldAntique/50 shadow-museum">
            <div>
              <div className="flex items-center gap-3 border-b border-heritage-goldAntique/40 pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-heritage-woodDark text-heritage-goldSoft">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-heritage-woodDark">
                    A. GÓC THẢO LUẬN
                  </h3>
                  <p className="text-xs text-heritage-woodLight">
                    Câu hỏi định hướng • Vấn đề trao đổi • Câu hỏi nghiên cứu mở
                  </p>
                </div>
              </div>

              {/* Bộ chọn chủ đề thảo luận */}
              <div className="mt-4">
                <label
                  htmlFor="discussion-topic-select"
                  className="text-xs font-bold uppercase tracking-wider text-heritage-woodDark block mb-2"
                >
                  Chọn chủ đề thảo luận:
                </label>
                <div className="flex flex-col gap-2">
                  {DISCUSSION_CORNER_GROUPS.map((grp) => {
                    const active = grp.id === selectedDiscussionId;
                    return (
                      <button
                        key={grp.id}
                        type="button"
                        onClick={() => setSelectedDiscussionId(grp.id)}
                        className={`rounded-xl px-4 py-2.5 text-left text-xs sm:text-sm font-semibold transition-colors ${
                          active
                            ? "bg-heritage-crimson text-heritage-ivory border border-heritage-crimson"
                            : "bg-heritage-ivoryLight text-heritage-ink border border-heritage-goldAntique/30 hover:bg-heritage-ivoryDeep"
                        }`}
                      >
                        {grp.topicName}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Nội dung câu hỏi của chủ đề đang chọn */}
              <div className="mt-5 space-y-4 text-sm">
                <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/40">
                  <h4 className="font-serif font-bold text-heritage-crimson">
                    1. Câu hỏi định hướng theo chủ đề
                  </h4>
                  <ul className="mt-2 space-y-2 text-heritage-ink">
                    {currentDiscussion.guidingQuestions.map((q, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-crimson" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/40">
                  <h4 className="font-serif font-bold text-heritage-woodDark">
                    2. Các vấn đề học sinh cần trao đổi nhóm
                  </h4>
                  <ul className="mt-2 space-y-2 text-heritage-ink">
                    {currentDiscussion.exchangeIssues.map((iss, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-woodDark" />
                        <span>{iss}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-heritage-ivoryDeep/70 p-4 border border-heritage-goldAntique/40">
                  <h4 className="font-serif font-bold text-heritage-moss">
                    3. Câu hỏi nghiên cứu mở
                  </h4>
                  {currentDiscussion.openResearchQuestions.map((oq, idx) => (
                    <p key={idx} className="mt-1.5 italic text-heritage-ink">
                      &ldquo;{oq}&rdquo;
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* KHU B: NÓI VÀ NGHE (Chiếm 6 cột) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl bg-heritage-ivory p-4 sm:p-6 lg:p-8 border border-heritage-goldAntique/50 shadow-museum">
            <div>
              <div className="flex items-center gap-3 border-b border-heritage-goldAntique/40 pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-heritage-crimson text-heritage-ivory">
                  <Mic className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-heritage-woodDark">
                    B. NÓI VÀ NGHE
                  </h3>
                  <p className="text-xs text-heritage-woodLight">
                    Cấu trúc thuyết trình • Lắng nghe &amp; Phản hồi
                  </p>
                </div>
              </div>

              {/* 2 Tab chuyển đổi trong khu Nói và Nghe */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveSpeakingTab("structure")}
                  className={`flex min-h-[44px] items-center justify-center rounded-xl px-3 py-2 text-center text-xs sm:text-sm leading-tight font-semibold transition-colors ${
                    activeSpeakingTab === "structure"
                      ? "bg-heritage-crimson text-heritage-ivory"
                      : "bg-heritage-ivoryLight text-heritage-ink border border-heritage-goldAntique/30 hover:bg-heritage-ivoryDeep"
                  }`}
                >
                  Cấu trúc bài nói
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSpeakingTab("listening")}
                  className={`flex min-h-[44px] items-center justify-center rounded-xl px-3 py-2 text-center text-xs sm:text-sm leading-tight font-semibold transition-colors ${
                    activeSpeakingTab === "listening"
                      ? "bg-heritage-crimson text-heritage-ivory"
                      : "bg-heritage-ivoryLight text-heritage-ink border border-heritage-goldAntique/30 hover:bg-heritage-ivoryDeep"
                  }`}
                >
                  Lắng nghe &amp; Hỏi
                </button>
              </div>

              {/* Nội dung Tab 1: Hướng dẫn cấu trúc thuyết trình */}
              {activeSpeakingTab === "structure" && (
                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center gap-2 font-serif font-bold text-heritage-woodDark">
                    <BookOpen className="h-4 w-4 text-heritage-crimson" />
                    <h4>Hướng dẫn cấu trúc bài thuyết trình sản phẩm STEAM</h4>
                  </div>
                  {SPEAKING_LISTENING_GUIDES.presentationStructure.map(
                    (st, i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-heritage-ivoryLight p-3.5 border border-heritage-goldAntique/40"
                      >
                        <span className="font-bold text-heritage-crimson block">
                          {st.part}
                        </span>
                        <p className="mt-1 text-heritage-ink leading-relaxed">
                          {st.detail}
                        </p>
                      </div>
                    )
                  )}
                </div>
              )}

              {/* Nội dung Tab 2: Hướng dẫn lắng nghe, ghi chép và đặt câu hỏi phản hồi */}
              {activeSpeakingTab === "listening" && (
                <div className="mt-5 space-y-4 text-sm">
                  <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/40">
                    <h4 className="font-serif font-bold text-heritage-woodDark">
                      Hướng dẫn lắng nghe và ghi chép
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {SPEAKING_LISTENING_GUIDES.listeningAndNoteTaking.map(
                        (item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-heritage-moss" />
                            <span>{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/40">
                    <h4 className="font-serif font-bold text-heritage-crimson">
                      Hướng dẫn đặt câu hỏi và phản hồi tích cực
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {SPEAKING_LISTENING_GUIDES.questioningAndFeedbackRules.map(
                        (rule, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-heritage-crimson" />
                            <span>{rule}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

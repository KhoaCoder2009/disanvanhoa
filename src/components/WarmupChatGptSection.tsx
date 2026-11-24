"use client";

import React, { useMemo, useState } from "react";
import {
  Bot,
  CheckCircle2,
  ExternalLink,
  RotateCcw,
  Scale,
  Send,
  Sparkles,
  XCircle,
} from "lucide-react";
import { WARMUP_CHATGPT_META } from "@/data/rubricAndWarmupData";

export const WarmupChatGptSection: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, "A" | "B" | "C" | "D">
  >({});
  const [lockedQuestions, setLockedQuestions] = useState<Record<string, boolean>>({});
  const [selectedStance, setSelectedStance] = useState<string>("");
  const [debateReason, setDebateReason] = useState<string>("");
  const [debateSubmitted, setDebateSubmitted] = useState<boolean>(false);

  const lockedCount = useMemo(
    () => Object.values(lockedQuestions).filter(Boolean).length,
    [lockedQuestions]
  );

  const correctCount = useMemo(
    () =>
      WARMUP_CHATGPT_META.questions.filter(
        (q) => lockedQuestions[q.id] && selectedAnswers[q.id] === q.correctKey
      ).length,
    [lockedQuestions, selectedAnswers]
  );

  const handleSelectOption = (questionId: string, optionKey: "A" | "B" | "C" | "D") => {
    if (lockedQuestions[questionId]) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionKey }));
  };

  const handleLockQuestion = (questionId: string) => {
    if (!selectedAnswers[questionId]) return;
    setLockedQuestions((prev) => ({ ...prev, [questionId]: true }));
  };

  const handleSubmitDebate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStance) return;
    setDebateSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setLockedQuestions({});
    setSelectedStance("");
    setDebateReason("");
    setDebateSubmitted(false);
  };

  return (
    <section
      id="khoi-dong-du-an"
      aria-labelledby="warmup-section-heading"
      className="py-10 sm:py-14 bg-white border-b border-heritage-crimson/15"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-heritage-ivoryLight p-5 sm:p-8 border-2 border-heritage-crimson/30 shadow-museum">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-heritage-goldAntique/35 pb-5">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-heritage-crimson px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                <Scale className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{WARMUP_CHATGPT_META.badge}</span>
              </span>
              <h2
                id="warmup-section-heading"
                className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-heritage-woodDark tracking-tight"
              >
                {WARMUP_CHATGPT_META.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-heritage-ink leading-relaxed">
                {WARMUP_CHATGPT_META.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <div className="rounded-xl bg-white px-4 py-2.5 border border-heritage-goldAntique/50 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-heritage-crimson">
                  Thử tài phán đoán
                </span>
                <span className="font-serif text-lg font-bold text-heritage-woodDark">
                  {correctCount}/{WARMUP_CHATGPT_META.questions.length} câu đúng
                </span>
              </div>

              {(lockedCount > 0 || debateSubmitted) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-heritage-crimson/30 bg-white px-3.5 py-2.5 text-xs font-bold text-heritage-crimson hover:bg-heritage-crimson hover:text-white transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Làm lại</span>
                </button>
              )}

              <a
                href={WARMUP_CHATGPT_META.chatgptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-heritage-woodDark px-4 py-2.5 text-xs font-bold text-heritage-goldSoft hover:bg-heritage-crimson hover:text-white transition-colors"
              >
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Xem kịch bản ChatGPT</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Vòng 1: 3 câu hỏi tình huống */}
          <div className="mt-6">
            <div className="flex items-center justify-between gap-2 mb-4">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                Vòng 1 · Thử tài phán đoán (3 câu hỏi tình huống)
              </h3>
              <span className="rounded-full bg-heritage-woodDark px-3 py-1 text-xs font-bold text-heritage-goldSoft">
                Đã chốt: {lockedCount}/{WARMUP_CHATGPT_META.questions.length} câu
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {WARMUP_CHATGPT_META.questions.map((q) => {
                const chosen = selectedAnswers[q.id];
                const isLocked = Boolean(lockedQuestions[q.id]);
                const isCorrect = isLocked && chosen === q.correctKey;

                return (
                  <div
                    key={q.id}
                    className="flex flex-col justify-between rounded-xl bg-white p-4 sm:p-5 border border-heritage-goldAntique/45 shadow-sm"
                  >
                    <div>
                      <span className="inline-block rounded-md bg-heritage-crimson px-2.5 py-0.5 font-mono text-[11px] font-bold text-white">
                        Câu {q.number}
                      </span>
                      <p className="mt-2.5 text-sm sm:text-base font-bold text-heritage-woodDark leading-snug">
                        {q.question}
                      </p>

                      <div className="mt-3.5 space-y-2">
                        {q.options.map((opt) => {
                          const isSelected = chosen === opt.key;
                          const isRightOpt = isLocked && opt.key === q.correctKey;
                          const isWrongSelected =
                            isLocked && isSelected && opt.key !== q.correctKey;

                          let btnStyle =
                            "border-heritage-goldAntique/35 bg-heritage-ivoryLight/50 text-heritage-ink hover:border-heritage-crimson/60 hover:bg-heritage-ivoryLight";
                          if (isRightOpt) {
                            btnStyle =
                              "border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold";
                          } else if (isWrongSelected) {
                            btnStyle =
                              "border-red-600 bg-red-50 text-red-950 font-semibold";
                          } else if (isSelected) {
                            btnStyle =
                              "border-heritage-crimson bg-heritage-crimson/10 text-heritage-woodDark font-semibold";
                          }

                          return (
                            <button
                              key={opt.key}
                              type="button"
                              disabled={isLocked}
                              onClick={() => handleSelectOption(q.id, opt.key)}
                              className={`w-full flex items-start gap-2.5 rounded-lg border px-3 py-2 text-left text-xs sm:text-sm transition-colors ${btnStyle}`}
                            >
                              <span className="font-mono font-bold shrink-0 mt-0.5">
                                {opt.key}.
                              </span>
                              <span className="leading-snug">{opt.text}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-heritage-goldAntique/25">
                      {!isLocked ? (
                        <button
                          type="button"
                          disabled={!chosen}
                          onClick={() => handleLockQuestion(q.id)}
                          className="w-full rounded-lg bg-heritage-crimson px-3.5 py-2 text-xs font-bold text-white hover:bg-heritage-woodDark disabled:opacity-45 disabled:cursor-not-allowed transition-colors"
                        >
                          Chốt đáp án
                        </button>
                      ) : (
                        <div
                          className={`rounded-lg p-2.5 text-xs leading-relaxed flex items-start gap-2 ${
                            isCorrect
                              ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                              : "bg-amber-50 text-amber-950 border border-amber-200"
                          }`}
                        >
                          {isCorrect ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                          )}
                          <span>
                            <strong>Đáp án {q.correctKey}:</strong> {q.feedback}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vòng 2: Tích hợp AI - Một nhận định gây tranh luận */}
          <div className="mt-6 rounded-xl bg-heritage-woodDark p-5 sm:p-6 text-heritage-ivory border border-heritage-goldAntique/50">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="lg:w-7/12 space-y-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-heritage-crimson px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  <Bot className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{WARMUP_CHATGPT_META.aiDebate.badge}</span>
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-heritage-goldSoft">
                  AI đưa ra ý kiến — Em đồng ý hay phản biện?
                </h3>
                <blockquote className="rounded-xl bg-white/10 border-l-4 border-heritage-goldSoft p-4 font-serif italic text-base sm:text-lg text-white leading-relaxed">
                  {WARMUP_CHATGPT_META.aiDebate.statement}
                </blockquote>
                <p className="text-xs sm:text-sm text-heritage-ivory/85">
                  {WARMUP_CHATGPT_META.aiDebate.promptQuestion}
                </p>
              </div>

              <form onSubmit={handleSubmitDebate} className="lg:w-5/12 space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  {WARMUP_CHATGPT_META.aiDebate.stances.map((stance) => {
                    const active = selectedStance === stance;
                    return (
                      <button
                        key={stance}
                        type="button"
                        onClick={() => {
                          setSelectedStance(stance);
                          setDebateSubmitted(false);
                        }}
                        className={`rounded-lg border px-2.5 py-2 text-xs font-bold transition-colors ${
                          active
                            ? "border-heritage-goldSoft bg-heritage-goldSoft text-heritage-woodDark"
                            : "border-white/25 bg-white/10 text-white hover:bg-white/20"
                        }`}
                      >
                        {stance}
                      </button>
                    );
                  })}
                </div>

                <textarea
                  rows={2}
                  value={debateReason}
                  onChange={(e) => setDebateReason(e.target.value)}
                  placeholder="Ghi nhanh lí do của em (không bắt buộc)..."
                  className="w-full rounded-lg border border-white/25 bg-white/10 px-3 py-2 text-xs sm:text-sm text-white placeholder:text-white/55 focus:border-heritage-goldSoft focus:outline-none"
                />

                <button
                  type="submit"
                  disabled={!selectedStance}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-heritage-crimson px-4 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white hover:text-heritage-woodDark disabled:opacity-45 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Gửi ý kiến thảo luận</span>
                </button>
              </form>
            </div>

            {debateSubmitted && (
              <div className="mt-5 rounded-xl bg-white/95 p-4 sm:p-5 text-heritage-ink border border-heritage-goldAntique">
                <p className="text-xs font-bold uppercase tracking-wider text-heritage-crimson">
                  Quan điểm đã ghi nhận: {selectedStance}
                  {debateReason.trim() ? ` — “${debateReason.trim()}”` : ""}
                </p>
                <p className="mt-2 font-serif text-sm sm:text-base font-bold text-heritage-woodDark">
                  Câu hỏi gợi mở vào bài học:{" "}
                  {WARMUP_CHATGPT_META.aiDebate.guidingQuestion}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                  {WARMUP_CHATGPT_META.aiDebate.lessonBridge}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

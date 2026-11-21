"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  Layers,
  Play,
  RotateCcw,
  Shuffle,
  Sparkles,
  XCircle,
} from "lucide-react";
import {
  QUIZ_CATEGORIES,
  QUIZ_QUESTIONS,
  QuizCategoryId,
  QuizQuestion,
} from "@/data/quizData";

type QuizScope = "all" | "quick-10" | QuizCategoryId;
type QuizMode = "practice" | "exam";
type QuizPhase = "setup" | "playing" | "result";

const OPTION_LETTERS = ["A", "B", "C", "D"] as const;

function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatDuration(totalSeconds: number): string {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function getMasteryBadge(percent: number): {
  title: string;
  note: string;
} {
  if (percent >= 90) {
    return {
      title: "Nghệ nhân Di sản",
      note: "Bạn nắm vững toàn diện cả ngữ liệu văn học lẫn tư duy thiết kế kỹ thuật STEAM.",
    };
  }
  if (percent >= 70) {
    return {
      title: "Nhà Nghiên cứu Trẻ",
      note: "Nền tảng tri thức vững vàng. Hãy xem lại các câu còn nhầm lẫn để đạt mức xuất sắc.",
    };
  }
  if (percent >= 50) {
    return {
      title: "Người Khám phá Tri thức",
      note: "Bạn đã nắm được các nét chính; nên ôn thêm mã màu Tuồng Huyện đường và bối cảnh Sử thi Đăm Săn.",
    };
  }
  return {
    title: "Hành trình Khởi đầu",
    note: "Hãy ghé lại Bảo tàng số và Xưởng STEAM để củng cố ngữ liệu Huyện đường & Đăm Săn trước khi thử sức lại.",
  };
}

export const HeritageQuizStudio: React.FC = () => {
  const [phase, setPhase] = useState<QuizPhase>("setup");
  const [scope, setScope] = useState<QuizScope>("all");
  const [mode, setMode] = useState<QuizMode>("practice");
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(false);
  const [showTimer, setShowTimer] = useState<boolean>(true);

  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [reviewFilter, setReviewFilter] = useState<"all" | "wrong">("all");

  // Đếm thời gian làm bài chỉ khi đang ở phase "playing"
  useEffect(() => {
    if (phase !== "playing" || !showTimer) return;
    const id = window.setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(id);
  }, [phase, showTimer]);

  const startSessionWithQuestions = useCallback(
    (questions: QuizQuestion[], nextMode: QuizMode = mode) => {
      if (questions.length === 0) return;
      setActiveQuestions(questions);
      setCurrentIdx(0);
      setAnswers({});
      setElapsedSeconds(0);
      setReviewFilter("all");
      setMode(nextMode);
      setPhase("playing");
    },
    [mode]
  );

  const handleStartQuiz = () => {
    let pool: QuizQuestion[];
    if (scope === "all") {
      pool = shuffleQuestions
        ? shuffleArray(QUIZ_QUESTIONS)
        : [...QUIZ_QUESTIONS];
    } else if (scope === "quick-10") {
      pool = shuffleArray(QUIZ_QUESTIONS).slice(0, 10);
    } else {
      const catPool = QUIZ_QUESTIONS.filter((q) => q.category === scope);
      pool = shuffleQuestions ? shuffleArray(catPool) : catPool;
    }
    startSessionWithQuestions(pool, mode);
  };

  const currentQuestion = activeQuestions[currentIdx];

  const handleSelectOption = useCallback(
    (optionIndex: number) => {
      if (!currentQuestion) return;
      if (mode === "practice" && answers[currentQuestion.id] !== undefined) {
        return;
      }
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: optionIndex,
      }));
    },
    [answers, currentQuestion, mode]
  );

  // Điều hướng bàn phím: 1-4 / A-D chọn đáp án, ArrowLeft / ArrowRight chuyển câu
  useEffect(() => {
    if (phase !== "playing" || !currentQuestion) return;

    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      const key = e.key.toLowerCase();
      if (key === "1" || key === "a") {
        handleSelectOption(0);
      } else if (key === "2" || key === "b") {
        handleSelectOption(1);
      } else if (key === "3" || key === "c") {
        handleSelectOption(2);
      } else if (key === "4" || key === "d") {
        handleSelectOption(3);
      } else if (e.key === "ArrowRight") {
        setCurrentIdx((idx) =>
          Math.min(activeQuestions.length - 1, idx + 1)
        );
      } else if (e.key === "ArrowLeft") {
        setCurrentIdx((idx) => Math.max(0, idx - 1));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeQuestions.length, currentQuestion, handleSelectOption, phase]);

  const handleSubmitQuiz = () => {
    setPhase("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resultStats = useMemo(() => {
    const total = activeQuestions.length;
    let correct = 0;
    const wrongList: QuizQuestion[] = [];
    const perCategory: Record<
      string,
      { label: string; total: number; correct: number }
    > = {};

    for (const q of activeQuestions) {
      if (!perCategory[q.category]) {
        perCategory[q.category] = {
          label: q.categoryLabel,
          total: 0,
          correct: 0,
        };
      }
      perCategory[q.category].total += 1;

      const picked = answers[q.id];
      if (picked === q.correctIndex) {
        correct += 1;
        perCategory[q.category].correct += 1;
      } else {
        wrongList.push(q);
      }
    }

    const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
    return {
      total,
      correct,
      wrongList,
      percent,
      categoryBreakdown: Object.entries(perCategory),
      badge: getMasteryBadge(percent),
    };
  }, [activeQuestions, answers]);

  const answeredCount = useMemo(
    () =>
      activeQuestions.reduce(
        (acc, q) => (answers[q.id] !== undefined ? acc + 1 : acc),
        0
      ),
    [activeQuestions, answers]
  );

  return (
    <section
      aria-label="Không gian Trắc nghiệm Di sản Văn học và STEAM"
      className="py-12 sm:py-16 bg-heritage-ivoryLight min-h-[65vh]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============================================================ */}
        {/* PHA 1: LOBBY THIẾT LẬP BỘ ĐỀ (SETUP) */}
        {/* ============================================================ */}
        {phase === "setup" && (
          <div className="space-y-10">
            {/* Chọn phạm vi kiến thức */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heritage-crimson">
                  1. Chọn bộ đề theo chuyên đề học tập
                </h2>
                <span className="font-mono text-xs font-semibold text-heritage-woodDark">
                  Ngân hàng chuẩn hóa: {QUIZ_QUESTIONS.length} câu hỏi
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-base text-heritage-ink/85">
                Câu hỏi được biên soạn trực tiếp từ ngữ liệu Ngữ văn 10 (Dự án Tuồng đồ Huyện đường, Sử thi Đăm Săn) và Quy trình STEAM 5 bước.
              </p>

              {/* Hai gói đề tổng hợp */}
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setScope("all")}
                  className={`text-left rounded-2xl p-6 border-2 transition-colors ${
                    scope === "all"
                      ? "bg-heritage-crimson text-white border-heritage-crimson shadow-museum"
                      : "bg-white text-heritage-ink border-heritage-crimson/25 hover:border-heritage-crimson"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider">
                      <Layers className="h-4 w-4" aria-hidden="true" />
                      <span>Tổng hợp toàn diện</span>
                    </span>
                    <span
                      className={`rounded-full px-3 py-0.5 font-mono text-xs font-bold ${
                        scope === "all"
                          ? "bg-white/20 text-white"
                          : "bg-heritage-ivoryDeep text-heritage-crimson"
                      }`}
                    >
                      {QUIZ_QUESTIONS.length} câu
                    </span>
                  </div>
                  <h3
                    className={`mt-2.5 font-serif text-xl font-bold ${
                      scope === "all" ? "text-white" : "text-heritage-woodDark"
                    }`}
                  >
                    Toàn bộ Kho tàng Di sản &amp; STEAM
                  </h3>
                  <p
                    className={`mt-1.5 text-sm leading-relaxed ${
                      scope === "all" ? "text-white/90" : "text-heritage-ink/80"
                    }`}
                  >
                    Bao quát đủ 5 chuyên đề từ nghệ thuật sân khấu dân gian, sử thi Tây Nguyên tới phương pháp chế tác STEAM.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setScope("quick-10");
                    setShuffleQuestions(true);
                  }}
                  className={`text-left rounded-2xl p-6 border-2 transition-colors ${
                    scope === "quick-10"
                      ? "bg-heritage-crimson text-white border-heritage-crimson shadow-museum"
                      : "bg-white text-heritage-ink border-heritage-crimson/25 hover:border-heritage-crimson"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                      <span>Ôn tập tinh gọn</span>
                    </span>
                    <span
                      className={`rounded-full px-3 py-0.5 font-mono text-xs font-bold ${
                        scope === "quick-10"
                          ? "bg-white/20 text-white"
                          : "bg-heritage-ivoryDeep text-heritage-crimson"
                      }`}
                    >
                      10 câu
                    </span>
                  </div>
                  <h3
                    className={`mt-2.5 font-serif text-xl font-bold ${
                      scope === "quick-10"
                        ? "text-white"
                        : "text-heritage-woodDark"
                    }`}
                  >
                    Đề nhanh Ngẫu nhiên
                  </h3>
                  <p
                    className={`mt-1.5 text-sm leading-relaxed ${
                      scope === "quick-10"
                        ? "text-white/90"
                        : "text-heritage-ink/80"
                    }`}
                  >
                    Rút ngẫu nhiên 10 câu hỏi đa chuyên đề để khởi động đầu giờ học hoặc tự kiểm tra kiến thức trong 5 phút.
                  </p>
                </button>
              </div>

              {/* 4 Chuyên đề riêng lẻ */}
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {QUIZ_CATEGORIES.map((cat) => {
                  const count = QUIZ_QUESTIONS.filter(
                    (q) => q.category === cat.id
                  ).length;
                  const isSelected = scope === cat.id;
                  const topBarClass =
                    cat.accentColor === "emerald"
                      ? "border-t-4 border-t-heritage-emerald"
                      : cat.accentColor === "indigo"
                      ? "border-t-4 border-t-heritage-indigo"
                      : cat.accentColor === "bronze"
                      ? "border-t-4 border-t-heritage-bronze"
                      : "border-t-4 border-t-heritage-crimson";

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setScope(cat.id)}
                      className={`group flex flex-col overflow-hidden rounded-2xl border-2 text-left transition-colors ${topBarClass} ${
                        isSelected
                          ? "bg-heritage-crimson text-white border-heritage-crimson shadow-museum"
                          : "bg-white text-heritage-ink border-heritage-crimson/20 hover:border-heritage-crimson"
                      }`}
                    >
                      <div className="aspect-[16/10] w-full overflow-hidden bg-white border-b border-heritage-crimson/15">
                        <img
                          src={cat.artworkImage}
                          alt={cat.label}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <span
                            className={`inline-block font-mono text-[11px] font-bold uppercase ${
                              isSelected
                                ? "text-heritage-goldSoft"
                                : "text-heritage-crimson"
                            }`}
                          >
                            {count} câu hỏi
                          </span>
                          <h3
                            className={`mt-1 font-serif text-base font-bold leading-snug ${
                              isSelected ? "text-white" : "text-heritage-woodDark"
                            }`}
                          >
                            {cat.shortLabel}
                          </h3>
                          <p
                            className={`mt-1.5 text-xs leading-relaxed ${
                              isSelected
                                ? "text-white/90"
                                : "text-heritage-ink/80"
                            }`}
                          >
                            {cat.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chọn chế độ làm bài & Tùy chọn */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7 rounded-2xl bg-white p-6 border border-heritage-crimson/25 shadow-museum">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-heritage-crimson">
                  2. Chế độ làm bài
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setMode("practice")}
                    className={`rounded-xl p-4 text-left border-2 transition-colors ${
                      mode === "practice"
                        ? "bg-heritage-ivoryDeep border-heritage-crimson text-heritage-woodDark"
                        : "bg-white border-heritage-crimson/20 text-heritage-ink hover:border-heritage-crimson/60"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-sm text-heritage-crimson">
                      <BookOpen className="h-4 w-4" aria-hidden="true" />
                      <span>Luyện tập (Giải thích ngay)</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-heritage-ink/85">
                      Chấm đúng/sai tức thì sau khi chọn và mở ngay hộp Giải mã học thuật trích dẫn nguồn SGK.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode("exam")}
                    className={`rounded-xl p-4 text-left border-2 transition-colors ${
                      mode === "exam"
                        ? "bg-heritage-ivoryDeep border-heritage-crimson text-heritage-woodDark"
                        : "bg-white border-heritage-crimson/20 text-heritage-ink hover:border-heritage-crimson/60"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-sm text-heritage-crimson">
                      <Award className="h-4 w-4" aria-hidden="true" />
                      <span>Thử thách (Chấm điểm cuối bài)</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-heritage-ink/85">
                      Tự do chuyển câu và thay đổi đáp án cho tới khi nhấn nút Nộp bài để nhận bảng tổng kết chi tiết.
                    </p>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl bg-white p-6 border border-heritage-crimson/25 shadow-museum flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-heritage-crimson">
                    3. Tùy chỉnh &amp; Khởi động
                  </h2>
                  <div className="mt-4 space-y-3 text-sm">
                    <label className="flex items-center justify-between gap-3 rounded-xl bg-heritage-ivoryLight px-4 py-2.5 border border-heritage-crimson/15 cursor-pointer">
                      <span className="flex items-center gap-2 font-medium text-heritage-ink">
                        <Shuffle
                          className="h-4 w-4 text-heritage-crimson"
                          aria-hidden="true"
                        />
                        <span>Đảo thứ tự câu hỏi</span>
                      </span>
                      <input
                        type="checkbox"
                        checked={shuffleQuestions}
                        onChange={(e) => setShuffleQuestions(e.target.checked)}
                        className="h-4 w-4 accent-heritage-crimson"
                      />
                    </label>

                    <label className="flex items-center justify-between gap-3 rounded-xl bg-heritage-ivoryLight px-4 py-2.5 border border-heritage-crimson/15 cursor-pointer">
                      <span className="flex items-center gap-2 font-medium text-heritage-ink">
                        <Clock
                          className="h-4 w-4 text-heritage-crimson"
                          aria-hidden="true"
                        />
                        <span>Hiển thị đồng hồ ghi thời gian</span>
                      </span>
                      <input
                        type="checkbox"
                        checked={showTimer}
                        onChange={(e) => setShowTimer(e.target.checked)}
                        className="h-4 w-4 accent-heritage-crimson"
                      />
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleStartQuiz}
                  className="mt-5 w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-heritage-crimson px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-museum hover:bg-heritage-woodDark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson"
                >
                  <Play className="h-4 w-4" aria-hidden="true" />
                  <span>Bắt đầu làm bài</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* PHA 2: ĐANG LÀM BÀI (PLAYING) */}
        {/* ============================================================ */}
        {phase === "playing" && currentQuestion && (
          <div className="space-y-6">
            {/* Thanh tiến độ phía trên */}
            <div className="rounded-2xl bg-white p-4 sm:p-5 border border-heritage-crimson/25 shadow-museum">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-lg bg-heritage-crimson px-3 py-1 font-mono text-xs font-bold text-white">
                    Câu {String(currentIdx + 1).padStart(2, "0")} /{" "}
                    {String(activeQuestions.length).padStart(2, "0")}
                  </span>
                  <span className="rounded-lg bg-heritage-ivoryDeep px-3 py-1 text-xs font-semibold text-heritage-crimson">
                    {currentQuestion.categoryLabel}
                  </span>
                  <span className="rounded-lg bg-heritage-ivoryLight px-2.5 py-1 text-xs font-medium text-heritage-woodDark border border-heritage-crimson/20">
                    {currentQuestion.difficulty}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {showTimer && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-heritage-woodDark bg-heritage-ivoryLight px-3 py-1.5 rounded-lg border border-heritage-crimson/20">
                      <Clock className="h-3.5 w-3.5 text-heritage-crimson" />
                      <span>{formatDuration(elapsedSeconds)}</span>
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setPhase("setup")}
                    className="rounded-lg border border-heritage-crimson/30 px-3 py-1.5 text-xs font-semibold text-heritage-crimson hover:bg-heritage-ivoryDeep transition-colors"
                  >
                    Đổi bộ đề
                  </button>
                </div>
              </div>

              <div className="mt-3.5 h-2 w-full overflow-hidden rounded-full bg-heritage-ivoryDeep">
                <div
                  className="h-full rounded-full bg-heritage-crimson transition-[width] duration-300 ease-out"
                  style={{
                    width: `${Math.round(
                      ((currentIdx + 1) / activeQuestions.length) * 100
                    )}%`,
                  }}
                />
              </div>
            </div>

            {/* Lưới 2 cột: Thẻ câu hỏi + Bảng điều hướng câu */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Cột chính: Câu hỏi & Đáp án */}
              <div className="lg:col-span-8 rounded-2xl bg-white p-6 sm:p-8 border border-heritage-crimson/25 shadow-museum flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-heritage-woodDark leading-snug">
                    {currentQuestion.question}
                  </h2>

                  <div className="mt-6 space-y-3" role="radiogroup" aria-label="Các phương án trả lời">
                    {currentQuestion.options.map((optText, optIdx) => {
                      const pickedIdx = answers[currentQuestion.id];
                      const hasAnswered = pickedIdx !== undefined;
                      const isPicked = pickedIdx === optIdx;
                      const isCorrectOption =
                        optIdx === currentQuestion.correctIndex;

                      let btnStyle =
                        "bg-white border-heritage-crimson/25 text-heritage-ink hover:border-heritage-crimson hover:bg-heritage-ivoryLight";
                      let badgeStyle =
                        "bg-heritage-ivoryDeep text-heritage-crimson border-heritage-crimson/25";

                      if (mode === "practice" && hasAnswered) {
                        if (isCorrectOption) {
                          btnStyle =
                            "bg-emerald-50 border-heritage-moss text-heritage-ink";
                          badgeStyle =
                            "bg-heritage-moss text-white border-heritage-moss";
                        } else if (isPicked) {
                          btnStyle =
                            "bg-heritage-ivoryDeep border-heritage-crimson text-heritage-crimson";
                          badgeStyle =
                            "bg-heritage-crimson text-white border-heritage-crimson";
                        } else {
                          btnStyle =
                            "bg-white/70 border-heritage-crimson/15 text-heritage-ink/60";
                        }
                      } else if (isPicked) {
                        btnStyle =
                          "bg-heritage-ivoryDeep border-heritage-crimson text-heritage-woodDark shadow-sm";
                        badgeStyle =
                          "bg-heritage-crimson text-white border-heritage-crimson";
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectOption(optIdx)}
                          disabled={mode === "practice" && hasAnswered}
                          className={`w-full flex items-start gap-3.5 rounded-xl border-2 p-4 text-left transition-colors ${btnStyle}`}
                        >
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border font-mono text-xs font-bold ${badgeStyle}`}
                          >
                            {OPTION_LETTERS[optIdx]}
                          </span>
                          <span className="flex-1 text-sm sm:text-base font-medium leading-relaxed">
                            {optText}
                          </span>
                          {mode === "practice" &&
                            hasAnswered &&
                            isCorrectOption && (
                              <CheckCircle2
                                className="h-5 w-5 shrink-0 text-heritage-moss mt-0.5"
                                aria-hidden="true"
                              />
                            )}
                          {mode === "practice" &&
                            hasAnswered &&
                            isPicked &&
                            !isCorrectOption && (
                              <XCircle
                                className="h-5 w-5 shrink-0 text-heritage-crimson mt-0.5"
                                aria-hidden="true"
                              />
                            )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Giải mã học thuật tức thì (chế độ Luyện tập) */}
                  {mode === "practice" &&
                    answers[currentQuestion.id] !== undefined && (
                      <div
                        className={`mt-6 rounded-xl border p-5 ${
                          answers[currentQuestion.id] ===
                          currentQuestion.correctIndex
                            ? "bg-emerald-50/70 border-heritage-moss/50"
                            : "bg-heritage-ivoryLight border-heritage-crimson/35"
                        }`}
                      >
                        <div className="flex items-center gap-2 font-serif text-base font-bold text-heritage-woodDark">
                          <BookOpen
                            className="h-4 w-4 text-heritage-crimson"
                            aria-hidden="true"
                          />
                          <span>
                            {answers[currentQuestion.id] ===
                            currentQuestion.correctIndex
                              ? "Chính xác! Giải mã học thuật:"
                              : `Chưa chính xác (Đáp án đúng: ${OPTION_LETTERS[currentQuestion.correctIndex]}). Giải mã học thuật:`}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-heritage-ink leading-relaxed">
                          {currentQuestion.explanation}
                        </p>
                        <p className="mt-2 font-mono text-[11px] font-semibold text-heritage-crimson/85">
                          Tham chiếu: {currentQuestion.sourceRef}
                        </p>
                      </div>
                    )}
                </div>

                {/* Nút chuyển câu / Nộp bài */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-heritage-crimson/15 pt-5">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentIdx((idx) => Math.max(0, idx - 1))
                    }
                    disabled={currentIdx === 0}
                    className="inline-flex items-center gap-2 rounded-xl border border-heritage-crimson/30 bg-white px-4 py-2.5 text-sm font-semibold text-heritage-crimson hover:bg-heritage-ivoryDeep disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    <span>Câu trước</span>
                  </button>

                  {currentIdx < activeQuestions.length - 1 ? (
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentIdx((idx) =>
                          Math.min(activeQuestions.length - 1, idx + 1)
                        )
                      }
                      className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-5 py-2.5 text-sm font-semibold text-white hover:bg-heritage-woodDark transition-colors"
                    >
                      <span>Câu tiếp theo</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmitQuiz}
                      className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-6 py-2.5 text-sm font-bold text-white shadow-museum hover:bg-heritage-woodDark transition-colors"
                    >
                      <Award className="h-4 w-4" aria-hidden="true" />
                      <span>Nộp bài &amp; Chấm điểm</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Cột phụ: Ảnh minh họa Diorama & Bảng câu hỏi */}
              <aside className="lg:col-span-4 space-y-6">
                <div className="overflow-hidden rounded-2xl bg-white border border-heritage-crimson/25 shadow-museum">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-white">
                    <img
                      src={currentQuestion.artworkImage}
                      alt={currentQuestion.categoryLabel}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="px-4 py-3 border-t border-heritage-crimson/15 bg-heritage-ivoryLight">
                    <span className="block font-mono text-[11px] font-bold uppercase text-heritage-crimson">
                      Ngữ cảnh di sản minh họa
                    </span>
                    <p className="mt-0.5 text-xs font-semibold text-heritage-woodDark">
                      {currentQuestion.categoryLabel}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-5 border border-heritage-crimson/25 shadow-museum">
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-heritage-crimson/15">
                    <h3 className="font-serif text-base font-bold text-heritage-woodDark">
                      Bảng câu hỏi
                    </h3>
                    <span className="font-mono text-xs font-semibold text-heritage-crimson">
                      {answeredCount}/{activeQuestions.length} đã chọn
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {activeQuestions.map((q, idx) => {
                      const picked = answers[q.id];
                      const isCurrent = idx === currentIdx;
                      let pillClass =
                        "bg-heritage-ivoryLight text-heritage-ink border-heritage-crimson/20 hover:border-heritage-crimson";

                      if (picked !== undefined) {
                        if (mode === "practice") {
                          pillClass =
                            picked === q.correctIndex
                              ? "bg-heritage-moss text-white border-heritage-moss"
                              : "bg-heritage-crimson text-white border-heritage-crimson";
                        } else {
                          pillClass =
                            "bg-heritage-crimson text-white border-heritage-crimson";
                        }
                      }

                      return (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => setCurrentIdx(idx)}
                          aria-label={`Chuyển đến câu ${idx + 1}`}
                          className={`rounded-lg border py-2 font-mono text-xs font-bold transition-all ${pillClass} ${
                            isCurrent
                              ? "ring-2 ring-heritage-goldAntique ring-offset-2"
                              : ""
                          }`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmitQuiz}
                    className="mt-5 w-full rounded-xl bg-heritage-woodDark px-4 py-3 text-sm font-bold text-white hover:bg-heritage-crimson transition-colors"
                  >
                    Nộp bài &amp; Xem kết quả
                  </button>
                </div>
              </aside>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* PHA 3: BẢNG KẾT QUẢ & ÔN TẬP (RESULT) */}
        {/* ============================================================ */}
        {phase === "result" && (
          <div className="space-y-8">
            {/* Phiếu điểm tổng hợp */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 border-2 border-heritage-crimson/30 shadow-museum">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-heritage-crimson px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    <Award className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{resultStats.badge.title}</span>
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heritage-crimson">
                    Kết quả: {resultStats.correct} / {resultStats.total} câu đúng ({resultStats.percent}%)
                  </h2>

                  <p className="text-sm sm:text-base text-heritage-ink leading-relaxed">
                    {resultStats.badge.note}
                  </p>

                  {showTimer && (
                    <p className="font-mono text-xs font-semibold text-heritage-woodDark">
                      Thời gian hoàn thành: {formatDuration(elapsedSeconds)}
                    </p>
                  )}

                  <div className="pt-3 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        startSessionWithQuestions(activeQuestions, mode)
                      }
                      className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-5 py-2.5 text-sm font-semibold text-white hover:bg-heritage-woodDark transition-colors"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      <span>Làm lại bộ đề này</span>
                    </button>

                    {resultStats.wrongList.length > 0 && (
                      <button
                        type="button"
                        onClick={() =>
                          startSessionWithQuestions(
                            resultStats.wrongList,
                            "practice"
                          )
                        }
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-heritage-crimson border-2 border-heritage-crimson hover:bg-heritage-ivoryDeep transition-colors"
                      >
                        <BookOpen className="h-4 w-4" aria-hidden="true" />
                        <span>
                          Ôn lại các câu làm sai ({resultStats.wrongList.length} câu)
                        </span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setPhase("setup")}
                      className="inline-flex items-center gap-2 rounded-xl bg-heritage-ivoryLight px-5 py-2.5 text-sm font-semibold text-heritage-woodDark border border-heritage-crimson/25 hover:bg-heritage-ivoryDeep transition-colors"
                    >
                      <span>Chọn chủ đề khác</span>
                    </button>

                    <Link
                      href="/#bao-tang-so"
                      className="inline-flex items-center gap-2 rounded-xl bg-heritage-ivoryLight px-5 py-2.5 text-sm font-semibold text-heritage-ink border border-heritage-crimson/20 hover:text-heritage-crimson transition-colors"
                    >
                      <Compass className="h-4 w-4" aria-hidden="true" />
                      <span>Về Bảo tàng số</span>
                    </Link>
                  </div>
                </div>

                {/* Phân tích độ chính xác từng chuyên đề */}
                <div className="lg:col-span-5 rounded-xl bg-heritage-ivoryLight p-5 border border-heritage-crimson/20 space-y-3.5">
                  <h3 className="font-serif text-lg font-bold text-heritage-woodDark">
                    Phân tích theo chuyên đề
                  </h3>
                  {resultStats.categoryBreakdown.map(([catId, stat]) => {
                    const catPct =
                      stat.total > 0
                        ? Math.round((stat.correct / stat.total) * 100)
                        : 0;
                    return (
                      <div key={catId} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span className="text-heritage-ink">{stat.label}</span>
                          <span className="font-mono text-heritage-crimson">
                            {stat.correct}/{stat.total} ({catPct}%)
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-white border border-heritage-crimson/15">
                          <div
                            className="h-full rounded-full bg-heritage-crimson"
                            style={{ width: `${catPct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Danh sách xem lại đáp án & giải thích chi tiết */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-serif text-2xl font-bold text-heritage-crimson">
                  Xem lại đáp án &amp; Giải mã học thuật
                </h3>
                <div className="inline-flex rounded-xl bg-white p-1 border border-heritage-crimson/25">
                  <button
                    type="button"
                    onClick={() => setReviewFilter("all")}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-colors ${
                      reviewFilter === "all"
                        ? "bg-heritage-crimson text-white"
                        : "text-heritage-ink hover:text-heritage-crimson"
                    }`}
                  >
                    Tất cả ({resultStats.total})
                  </button>
                  <button
                    type="button"
                    onClick={() => setReviewFilter("wrong")}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-colors ${
                      reviewFilter === "wrong"
                        ? "bg-heritage-crimson text-white"
                        : "text-heritage-ink hover:text-heritage-crimson"
                    }`}
                  >
                    Chỉ câu làm sai ({resultStats.wrongList.length})
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {(reviewFilter === "wrong"
                  ? resultStats.wrongList
                  : activeQuestions
                ).map((q, idx) => {
                  const picked = answers[q.id];
                  const isCorrect = picked === q.correctIndex;
                  return (
                    <article
                      key={q.id}
                      className={`rounded-2xl bg-white p-6 border shadow-sm ${
                        isCorrect
                          ? "border-heritage-moss/40"
                          : "border-heritage-crimson/40"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-heritage-crimson">
                          Câu {idx + 1} • {q.categoryLabel}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-xs font-bold ${
                            isCorrect
                              ? "bg-emerald-50 text-heritage-moss"
                              : "bg-heritage-ivoryDeep text-heritage-crimson"
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              <span>Trả lời đúng</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="h-3.5 w-3.5" />
                              <span>
                                {picked === undefined
                                  ? "Chưa chọn đáp án"
                                  : "Cần ôn lại"}
                              </span>
                            </>
                          )}
                        </span>
                      </div>

                      <h4 className="mt-2 font-serif text-lg font-bold text-heritage-woodDark">
                        {q.question}
                      </h4>

                      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs sm:text-sm">
                        <div className="rounded-xl bg-heritage-ivoryLight px-3.5 py-2.5 border border-heritage-crimson/15">
                          <span className="font-bold text-heritage-woodDark block">
                            Phương án bạn chọn:
                          </span>
                          <span
                            className={
                              isCorrect
                                ? "text-heritage-moss font-semibold"
                                : "text-heritage-crimson font-semibold"
                            }
                          >
                            {picked !== undefined
                              ? `${OPTION_LETTERS[picked]}. ${q.options[picked]}`
                              : "Chưa chọn phương án"}
                          </span>
                        </div>
                        <div className="rounded-xl bg-emerald-50/70 px-3.5 py-2.5 border border-heritage-moss/30">
                          <span className="font-bold text-heritage-moss block">
                            Đáp án đúng:
                          </span>
                          <span className="text-heritage-ink font-semibold">
                            {OPTION_LETTERS[q.correctIndex]}.{" "}
                            {q.options[q.correctIndex]}
                          </span>
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-heritage-ink leading-relaxed">
                        <strong className="text-heritage-woodDark">
                          Giải thích:
                        </strong>{" "}
                        {q.explanation}
                      </p>
                      <p className="mt-1 font-mono text-[11px] text-heritage-crimson/80">
                        Nguồn: {q.sourceRef}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

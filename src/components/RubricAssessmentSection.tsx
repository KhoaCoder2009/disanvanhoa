"use client";

import React, { useMemo, useState } from "react";
import {
  Award,
  Calculator,
  Check,
  ClipboardCheck,
  Copy,
  RotateCcw,
} from "lucide-react";
import { RUBRIC_CRITERIA, RUBRIC_META } from "@/data/rubricAndWarmupData";

const GROUPS = [
  "Tổ 1 • Tri huyện",
  "Tổ 2 • Đề lại",
  "Tổ 3 • Lính lệ",
  "Tổ 4 • Trùm Sò",
];

function getLevelInfo(score: number): {
  label: string;
  badgeClass: string;
} {
  if (score >= 8) {
    return {
      label: "Mức Tốt (8–10 điểm)",
      badgeClass: "bg-emerald-700 text-white",
    };
  }
  if (score >= 6) {
    return {
      label: "Mức Khá (6–7,9 điểm)",
      badgeClass: "bg-amber-600 text-white",
    };
  }
  return {
    label: "Mức Cần cố gắng (dưới 6 điểm)",
    badgeClass: "bg-heritage-crimson text-white",
  };
}

export const RubricAssessmentSection: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>(GROUPS[0]);
  const [evaluatorName, setEvaluatorName] = useState<string>("");
  const [scores, setScores] = useState<Record<string, number>>({
    "van-hoc": 8.5,
    "ky-thuat": 8.5,
    "dien-xuat": 8.0,
    "chuyen-doi-so": 9.0,
  });
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  const weightedTotal = useMemo(() => {
    const sum = RUBRIC_CRITERIA.reduce((acc, c) => {
      const s = scores[c.id] ?? 0;
      return acc + (s * c.weightPercent) / 100;
    }, 0);
    return Number(sum.toFixed(2));
  }, [scores]);

  const totalLevel = getLevelInfo(weightedTotal);

  const handleReset = () => {
    setScores({
      "van-hoc": 8.0,
      "ky-thuat": 8.0,
      "dien-xuat": 8.0,
      "chuyen-doi-so": 8.0,
    });
    setEvaluatorName("");
  };

  const handleCopyResult = async () => {
    const lines = [
      `PHIẾU CHẤM ĐIỂM RUBRIC DỰ ÁN HUYỆN ĐƯỜNG — LỚP 10.3 THPT BÌNH PHÚ`,
      `Nhóm được đánh giá: ${selectedGroup}`,
      `Người chấm / Đánh giá chéo: ${evaluatorName.trim() || "Giáo viên / Thành viên lớp 10.3"}`,
      ...RUBRIC_CRITERIA.map(
        (c) => `- ${c.title} (${c.weightPercent}%): ${scores[c.id] ?? 0}/10`
      ),
      `=> TỔNG ĐIỂM TRỌNG SỐ: ${weightedTotal}/10 (${totalLevel.label})`,
    ];
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopiedSummary(true);
      window.setTimeout(() => setCopiedSummary(false), 2400);
    } catch {
      setCopiedSummary(false);
    }
  };

  return (
    <section
      id="rubric-danh-gia"
      aria-labelledby="rubric-section-heading"
      className="py-12 sm:py-16 bg-heritage-ivory border-b border-heritage-goldAntique/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Rubric */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-heritage-woodDark px-3 py-1 text-xs font-bold text-heritage-goldSoft">
            <ClipboardCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{RUBRIC_META.badge}</span>
          </span>
          <h2
            id="rubric-section-heading"
            className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-heritage-crimson tracking-tight"
          >
            {RUBRIC_META.title}
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-heritage-ink leading-relaxed">
            {RUBRIC_META.subtitle}
          </p>
        </div>

        {/* Bảng Rubric 4 Tiêu chí (Thẻ trên di động, Bảng chuẩn trên Tablet/Desktop) */}
        <div className="space-y-4 lg:hidden">
          {RUBRIC_CRITERIA.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-4 border border-heritage-goldAntique/50 shadow-museum space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-heritage-crimson/15 pb-2.5">
                <div>
                  <h3 className="font-serif text-base font-bold text-heritage-woodDark">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-heritage-crimson">
                    [{item.steamTag}]
                  </span>
                </div>
                <span className="rounded-full bg-heritage-crimson px-3 py-1 font-mono text-xs font-bold text-white">
                  {item.weightPercent}%
                </span>
              </div>

              <div className="space-y-2 text-xs leading-relaxed">
                <div className="rounded-lg bg-emerald-50 p-3 border-l-4 border-emerald-700">
                  <strong className="text-emerald-800 block">
                    Mức Tốt (8–10 điểm):
                  </strong>
                  <p className="mt-0.5 text-heritage-ink">{item.goodDesc}</p>
                </div>
                <div className="rounded-lg bg-amber-50 p-3 border-l-4 border-amber-600">
                  <strong className="text-amber-900 block">
                    Mức Khá (6–7,9 điểm):
                  </strong>
                  <p className="mt-0.5 text-heritage-ink">{item.fairDesc}</p>
                </div>
                <div className="rounded-lg bg-rose-50 p-3 border-l-4 border-heritage-crimson">
                  <strong className="text-heritage-crimson block">
                    Mức Cần cố gắng (dưới 6 điểm):
                  </strong>
                  <p className="mt-0.5 text-heritage-ink">{item.needsWorkDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block overflow-x-auto rounded-2xl border-2 border-heritage-goldAntique/60 shadow-museum bg-white">
          <table className="w-full text-left border-collapse text-xs xl:text-sm">
            <thead>
              <tr className="bg-heritage-woodDark text-heritage-goldSoft font-serif">
                <th className="p-4 border-b border-heritage-goldAntique/40 w-[18%]">
                  Tiêu chí và trọng số
                </th>
                <th className="p-4 border-b border-heritage-goldAntique/40 bg-emerald-900/80 text-white w-[26%]">
                  Mức Tốt (8–10 điểm)
                </th>
                <th className="p-4 border-b border-heritage-goldAntique/40 bg-amber-900/70 text-white w-[24%]">
                  Mức Khá (6–7,9 điểm)
                </th>
                <th className="p-4 border-b border-heritage-goldAntique/40 bg-heritage-crimson text-white w-[24%]">
                  Mức Cần cố gắng (dưới 6 điểm)
                </th>
                <th className="p-4 border-b border-heritage-goldAntique/40 text-center w-[8%]">
                  Trọng số
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-heritage-goldAntique/30 align-top">
              {RUBRIC_CRITERIA.map((item) => (
                <tr key={item.id} className="hover:bg-heritage-ivoryLight/60">
                  <td className="p-4 bg-heritage-ivoryLight font-semibold text-heritage-woodDark">
                    <span className="block font-serif text-sm xl:text-base font-bold">
                      {item.title}
                    </span>
                    <span className="mt-1 inline-block rounded bg-heritage-crimson/10 px-2 py-0.5 text-[11px] font-bold text-heritage-crimson">
                      [{item.steamTag}]
                    </span>
                  </td>
                  <td className="p-4 leading-relaxed text-heritage-ink">
                    {item.goodDesc}
                  </td>
                  <td className="p-4 leading-relaxed text-heritage-ink">
                    {item.fairDesc}
                  </td>
                  <td className="p-4 leading-relaxed text-heritage-ink">
                    {item.needsWorkDesc}
                  </td>
                  <td className="p-4 text-center font-mono text-base font-bold text-heritage-crimson bg-heritage-ivoryLight/40">
                    {item.weightPercent}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Công cụ Chấm điểm Rubric Trực tuyến & Xuất kết quả tự động */}
        <div className="rounded-2xl bg-heritage-ivoryLight p-5 sm:p-7 border-2 border-heritage-crimson/35 shadow-cabinet">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-heritage-goldAntique/40 pb-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-heritage-crimson text-white">
                <Calculator className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                  CÔNG CỤ CHẤM ĐIỂM RUBRIC TRỰC TUYẾN
                </h3>
                <p className="text-xs sm:text-sm text-heritage-ink">
                  Chọn Tổ, kéo thanh điểm cho 4 tiêu chí để hệ thống tự động tính điểm trọng số và xuất phiếu đánh giá.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-xs font-semibold text-heritage-woodDark border border-heritage-goldAntique/50 hover:bg-heritage-crimson hover:text-white transition-colors shrink-0"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Đặt lại mức chuẩn 8.0</span>
            </button>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
            <div className="lg:col-span-8 space-y-4">
              {/* Chọn Tổ & Tên người chấm */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="rubric-group-select"
                    className="block text-xs font-bold uppercase tracking-wider text-heritage-woodDark mb-1.5"
                  >
                    Tổ được đánh giá
                  </label>
                  <select
                    id="rubric-group-select"
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                    className="w-full rounded-xl bg-white px-3.5 py-2.5 text-sm font-semibold text-heritage-woodDark border border-heritage-goldAntique/60 focus:outline-none focus:ring-2 focus:ring-heritage-crimson"
                  >
                    {GROUPS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="rubric-evaluator-input"
                    className="block text-xs font-bold uppercase tracking-wider text-heritage-woodDark mb-1.5"
                  >
                    Giáo viên / Tổ đánh giá chéo
                  </label>
                  <input
                    id="rubric-evaluator-input"
                    type="text"
                    value={evaluatorName}
                    onChange={(e) => setEvaluatorName(e.target.value)}
                    placeholder="VD: Cô Ngữ văn hoặc Tổ 3 chấm chéo Tổ 2"
                    className="w-full rounded-xl bg-white px-3.5 py-2.5 text-sm text-heritage-ink border border-heritage-goldAntique/60 focus:outline-none focus:ring-2 focus:ring-heritage-crimson"
                  />
                </div>
              </div>

              {/* 4 thanh trượt điểm */}
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {RUBRIC_CRITERIA.map((c) => {
                  const val = scores[c.id] ?? 0;
                  const lv = getLevelInfo(val);
                  return (
                    <div
                      key={c.id}
                      className="rounded-xl bg-white p-4 border border-heritage-goldAntique/45 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-serif text-sm font-bold text-heritage-woodDark">
                          {c.title} ({c.weightPercent}%)
                        </span>
                        <span className="rounded bg-heritage-woodDark px-2 py-0.5 font-mono text-xs font-bold text-heritage-goldSoft">
                          {val.toFixed(1)} / 10
                        </span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={10}
                        step={0.5}
                        value={val}
                        onChange={(e) =>
                          setScores((prev) => ({
                            ...prev,
                            [c.id]: Number(e.target.value),
                          }))
                        }
                        aria-label={`Điểm ${c.title}`}
                        className="w-full accent-heritage-crimson cursor-pointer"
                      />
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold ${lv.badgeClass}`}
                      >
                        {lv.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Khung Tổng kết & Xuất phiếu điểm */}
            <div className="lg:col-span-4 rounded-2xl bg-heritage-woodDark p-5 text-heritage-ivory border border-heritage-goldAntique space-y-4">
              <div className="flex items-center justify-between border-b border-heritage-goldAntique/35 pb-3">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-heritage-goldSoft" />
                  <span className="font-serif text-base font-bold text-heritage-goldSoft">
                    KẾT QUẢ TỔNG HỢP
                  </span>
                </div>
                <span className="text-xs text-heritage-ivory/80">Thang 10</span>
              </div>

              <div className="text-center py-2">
                <p className="text-xs font-semibold text-heritage-goldSoft">
                  {selectedGroup}
                </p>
                <p className="mt-1 font-mono text-4xl sm:text-5xl font-extrabold text-white">
                  {weightedTotal.toFixed(2)}
                </p>
                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-bold ${totalLevel.badgeClass}`}
                >
                  {totalLevel.label}
                </span>
              </div>

              <div className="space-y-1 text-xs border-t border-heritage-goldAntique/35 pt-3 text-heritage-ivory/90">
                {RUBRIC_CRITERIA.map((c) => {
                  const contrib = ((scores[c.id] ?? 0) * c.weightPercent) / 100;
                  return (
                    <div key={c.id} className="flex justify-between">
                      <span>
                        {c.title.split(".")[1]?.trim()} ({c.weightPercent}%)
                      </span>
                      <span className="font-mono font-semibold text-heritage-goldSoft">
                        +{contrib.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleCopyResult}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-heritage-crimson px-4 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white hover:text-heritage-woodDark transition-colors shadow-sm"
              >
                {copiedSummary ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Đã sao chép Phiếu điểm Rubric</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Xuất &amp; Sao chép Phiếu điểm</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, MessageSquareShare, Sparkles } from "lucide-react";
import { WARMUP_CHATGPT_META } from "@/data/rubricAndWarmupData";
import { TiltSpotlightCard } from "./effects/TiltSpotlightCard";

export const WarmupChatGptSection: React.FC = () => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(WARMUP_CHATGPT_META.samplePrompt);
      setCopiedPrompt(true);
      window.setTimeout(() => setCopiedPrompt(false), 2200);
    } catch {
      setCopiedPrompt(false);
    }
  };

  return (
    <section
      id="khoi-dong-du-an"
      aria-labelledby="warmup-section-heading"
      className="py-10 sm:py-14 bg-white border-b border-heritage-crimson/15"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-heritage-ivoryLight p-5 sm:p-8 border-2 border-heritage-crimson/30 shadow-museum">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-heritage-goldAntique/35 pb-5">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-heritage-crimson px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
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
              <a
                href={WARMUP_CHATGPT_META.chatgptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-heritage-crimson px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-heritage-woodDark transition-colors shadow-sm"
              >
                <MessageSquareShare className="h-4 w-4" aria-hidden="true" />
                <span>Mở Khởi động trên ChatGPT</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {WARMUP_CHATGPT_META.warmupSteps.map((item) => (
              <TiltSpotlightCard
                key={item.step}
                className="rounded-xl bg-white p-4 sm:p-5 border border-heritage-goldAntique/45"
              >
                <div>
                  <span className="inline-block rounded-md bg-heritage-woodDark px-2.5 py-0.5 font-mono text-[11px] font-bold text-heritage-goldSoft">
                    {item.step}
                  </span>
                  <h3 className="mt-2.5 font-serif text-base sm:text-lg font-bold text-heritage-woodDark">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </TiltSpotlightCard>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-heritage-woodDark p-4 sm:p-5 text-heritage-ivory border border-heritage-goldAntique/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-heritage-goldSoft">
                Câu lệnh Khởi động mẫu (Dán vào ChatGPT nếu chưa có link phiên riêng của cô):
              </span>
              <button
                type="button"
                onClick={handleCopyPrompt}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-heritage-crimson px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-white hover:text-heritage-woodDark transition-colors shrink-0"
              >
                {copiedPrompt ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>Đã sao chép câu lệnh</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Sao chép câu lệnh Khởi động</span>
                  </>
                )}
              </button>
            </div>
            <p className="mt-2.5 rounded-lg bg-black/35 p-3 font-mono text-xs text-heritage-ivory/95 leading-relaxed">
              {WARMUP_CHATGPT_META.samplePrompt}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

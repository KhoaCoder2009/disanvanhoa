"use client";

import React, { useState } from "react";
import {
  Camera,
  FileText,
  Film,
  PenTool,
  Download,
  Clapperboard,
  FolderOpen,
  CheckCircle2,
} from "lucide-react";
import {
  HUYEN_DUONG_ACTIVITY_PHOTOS,
  HUYEN_DUONG_CLASS_DRAMA,
  HUYEN_DUONG_MASK_SKETCHES,
  HUYEN_DUONG_MASK_VIDEOS,
  HUYEN_DUONG_STUDENT_ARCHIVE_META,
  HUYEN_DUONG_WORD_SCRIPT,
} from "@/data/studentProductsData";

type ArchiveTab =
  | "activity-photos"
  | "mask-sketches"
  | "word-script"
  | "mask-videos"
  | "class-drama";

const ARCHIVE_TABS: {
  id: ArchiveTab;
  label: string;
  countBadge: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "activity-photos",
    label: "Ảnh hoạt động nhóm",
    countBadge: "4 nhóm",
    icon: <Camera className="h-4 w-4 shrink-0" aria-hidden="true" />,
  },
  {
    id: "mask-sketches",
    label: "Ảnh phác thảo mặt nạ",
    countBadge: "4 nhóm",
    icon: <PenTool className="h-4 w-4 shrink-0" aria-hidden="true" />,
  },
  {
    id: "word-script",
    label: "Bản Word thuyết minh",
    countBadge: "Phần lời",
    icon: <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />,
  },
  {
    id: "mask-videos",
    label: "Video thuyết minh mặt nạ",
    countBadge: "4 video",
    icon: <Film className="h-4 w-4 shrink-0" aria-hidden="true" />,
  },
  {
    id: "class-drama",
    label: "Video diễn kịch lớp",
    countBadge: "1 chung",
    icon: <Clapperboard className="h-4 w-4 shrink-0" aria-hidden="true" />,
  },
];

export const HuyenDuongStudentArchive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ArchiveTab>("activity-photos");

  return (
    <div className="mt-8 sm:mt-10 rounded-2xl bg-white border-2 border-heritage-crimson/35 shadow-cabinet overflow-hidden">
      {/* Đầu mục Hồ sơ sản phẩm học sinh Dự án Huyện đường */}
      <div className="bg-heritage-crimson text-white p-4 sm:p-6 border-b border-heritage-goldAntique/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-heritage-goldSoft">
              <FolderOpen className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{HUYEN_DUONG_STUDENT_ARCHIVE_META.badge}</span>
            </span>
            <h3 className="mt-2 font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              {HUYEN_DUONG_STUDENT_ARCHIVE_META.title}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-white/90 max-w-4xl leading-relaxed">
              {HUYEN_DUONG_STUDENT_ARCHIVE_META.subtitle}
            </p>
          </div>
        </div>

        {/* 5 Tab chuyển đổi theo đúng 5 loại sản phẩm */}
        <div
          role="tablist"
          aria-label="Danh mục sản phẩm học sinh Dự án Huyện đường"
          className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0"
        >
          {ARCHIVE_TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 whitespace-nowrap lg:whitespace-normal flex min-h-[44px] items-center justify-between gap-2 rounded-xl px-3.5 py-2.5 text-left text-xs sm:text-sm font-semibold transition-colors ${
                  isSelected
                    ? "bg-white text-heritage-crimson shadow-sm"
                    : "bg-heritage-woodDark/45 text-white/95 hover:bg-heritage-woodDark/75 border border-white/20"
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab.icon}
                  <span>{tab.label}</span>
                </span>
                <span
                  className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-bold ${
                    isSelected
                      ? "bg-heritage-ivoryDeep text-heritage-crimson"
                      : "bg-black/25 text-heritage-goldSoft"
                  }`}
                >
                  {tab.countBadge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Nội dung chi tiết từng mục sản phẩm */}
      <div className="p-4 sm:p-6 lg:p-8 bg-heritage-ivoryLight">
        {/* 1. HÌNH ẢNH HOẠT ĐỘNG CỦA CÁC NHÓM */}
        {activeTab === "activity-photos" && (
          <div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                1. Hình ảnh hoạt động của các nhóm (4 nhóm)
              </h4>
              <span className="text-xs font-medium text-heritage-ink/80">
                Cập nhật ảnh thật tại{" "}
                <code className="break-all bg-white px-1.5 py-0.5 rounded border border-heritage-crimson/20 text-heritage-crimson">
                  src/data/studentProductsData.ts
                </code>
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {HUYEN_DUONG_ACTIVITY_PHOTOS.map((slot) => (
                <article
                  key={slot.id}
                  className="flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-heritage-crimson/25 shadow-sm"
                >
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden bg-heritage-ivoryDeep/60 flex items-center justify-center border-b border-heritage-crimson/15">
                      {slot.imageUrl ? (
                        <img
                          src={slot.imageUrl}
                          alt={`${slot.groupName} - ${slot.title}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="p-4 text-center space-y-2">
                          <Camera
                            className="mx-auto h-8 w-8 text-heritage-crimson/60"
                            aria-hidden="true"
                          />
                          <p className="text-xs font-bold text-heritage-crimson">
                            Khung ảnh hoạt động {slot.groupName}
                          </p>
                          <p className="font-mono text-[10px] text-heritage-ink/70 break-all">
                            {slot.expectedPath}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="inline-block rounded-md bg-heritage-crimson px-2.5 py-0.5 text-[11px] font-bold text-white">
                        {slot.groupName}
                      </span>
                      <h5 className="mt-2 font-serif text-base font-bold text-heritage-woodDark">
                        {slot.title}
                      </h5>
                      <p className="mt-1 text-xs text-heritage-ink/85 leading-relaxed">
                        {slot.caption}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* 2. ẢNH BẢN PHÁC THẢO MẶT NẠ (4 NHÓM) */}
        {activeTab === "mask-sketches" && (
          <div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                2. Ảnh bản phác thảo mặt nạ (4 nhóm)
              </h4>
              <span className="text-xs font-medium text-heritage-ink/80">
                4 bản phác thảo ứng với 4 nhân vật công đường
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {HUYEN_DUONG_MASK_SKETCHES.map((sketch) => (
                <article
                  key={sketch.id}
                  className="flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-heritage-amber/35 shadow-sm"
                >
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden bg-heritage-amberSoft/40 flex items-center justify-center border-b border-heritage-amber/20">
                      {sketch.imageUrl ? (
                        <img
                          src={sketch.imageUrl}
                          alt={`${sketch.groupName} - ${sketch.characterName}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="p-4 text-center space-y-2">
                          <PenTool
                            className="mx-auto h-8 w-8 text-heritage-amber/75"
                            aria-hidden="true"
                          />
                          <p className="text-xs font-bold text-heritage-woodDark">
                            Bản phác thảo {sketch.groupName}
                          </p>
                          <p className="font-mono text-[10px] text-heritage-ink/70 break-all">
                            {sketch.expectedPath}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-md bg-heritage-amber px-2.5 py-0.5 text-[11px] font-bold text-white">
                          {sketch.groupName}
                        </span>
                        <span className="text-[11px] font-bold text-heritage-crimson">
                          {sketch.characterName}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-heritage-ink leading-relaxed">
                        {sketch.sketchNote}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* 3. BẢN WORD THUYẾT MINH (PHẦN LỜI) */}
        {activeTab === "word-script" && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-white p-4 sm:p-5 border border-heritage-crimson/25">
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                  3. {HUYEN_DUONG_WORD_SCRIPT.title}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-heritage-ink/85">
                  {HUYEN_DUONG_WORD_SCRIPT.summaryNote}
                </p>
              </div>
              {HUYEN_DUONG_WORD_SCRIPT.docxUrl ? (
                <a
                  href={HUYEN_DUONG_WORD_SCRIPT.docxUrl}
                  download
                  className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-heritage-crimson px-5 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-heritage-woodDark transition-colors"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Tải bản Word (.docx)</span>
                </a>
              ) : (
                <div className="shrink-0 rounded-xl bg-heritage-ivoryLight px-4 py-2.5 text-xs font-semibold text-heritage-crimson border border-heritage-crimson/30">
                  Tệp Word chờ tải lên:{" "}
                  <code className="break-all">{HUYEN_DUONG_WORD_SCRIPT.expectedPath}</code>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {HUYEN_DUONG_WORD_SCRIPT.scriptSections.map((sec, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-4 sm:p-5 border border-heritage-crimson/20 shadow-sm"
                >
                  <h5 className="font-serif text-base font-bold text-heritage-crimson">
                    {sec.heading}
                  </h5>
                  <p className="mt-2 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. VIDEO THUYẾT MINH MẶT NẠ (MỖI NHÓM 1 VIDEO) */}
        {activeTab === "mask-videos" && (
          <div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                4. Video thuyết minh mặt nạ (Mỗi nhóm 1 video)
              </h4>
              <span className="text-xs font-medium text-heritage-ink/80">
                Tổng cộng 4 video riêng của 4 nhóm
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {HUYEN_DUONG_MASK_VIDEOS.map((vid) => (
                <article
                  key={vid.id}
                  className="overflow-hidden rounded-2xl bg-white border border-heritage-indigo/30 shadow-sm"
                >
                  <div className="aspect-video w-full bg-heritage-woodDark flex items-center justify-center border-b border-heritage-goldAntique/30">
                    {vid.videoUrl ? (
                      <video
                        controls
                        preload="metadata"
                        className="h-full w-full object-cover"
                      >
                        <source src={vid.videoUrl} type="video/mp4" />
                      </video>
                    ) : (
                      <div className="p-5 text-center space-y-2">
                        <Film
                          className="mx-auto h-9 w-9 text-heritage-goldSoft"
                          aria-hidden="true"
                        />
                        <p className="font-serif text-sm sm:text-base font-bold text-white">
                          Khung Video {vid.groupName} • Nhân vật {vid.characterFocus}
                        </p>
                        <p className="font-mono text-[11px] text-heritage-goldSoft/90 break-all">
                          {vid.expectedPath}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md bg-heritage-indigo px-2.5 py-0.5 text-[11px] font-bold text-white">
                        {vid.groupName}
                      </span>
                      <span className="text-xs font-bold text-heritage-crimson">
                        Mặt nạ {vid.characterFocus}
                      </span>
                    </div>
                    <h5 className="mt-2 font-serif text-base sm:text-lg font-bold text-heritage-woodDark">
                      {vid.title}
                    </h5>
                    <p className="mt-1 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                      {vid.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* 5. VIDEO DIỄN KỊCH: 1 SẢN PHẨM CHUNG CỦA LỚP */}
        {activeTab === "class-drama" && (
          <div className="rounded-2xl bg-white border-2 border-heritage-crimson/30 overflow-hidden shadow-museum">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 aspect-video w-full bg-heritage-woodDark flex items-center justify-center">
                {HUYEN_DUONG_CLASS_DRAMA.videoUrl ? (
                  <video
                    controls
                    preload="metadata"
                    className="h-full w-full object-cover"
                  >
                    <source
                      src={HUYEN_DUONG_CLASS_DRAMA.videoUrl}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <div className="p-6 text-center space-y-2.5 max-w-md">
                    <Clapperboard
                      className="mx-auto h-11 w-11 text-heritage-goldSoft"
                      aria-hidden="true"
                    />
                    <p className="font-serif text-base sm:text-xl font-bold text-white">
                      Khung Video Diễn kịch Chung của Lớp
                    </p>
                    <p className="text-xs text-white/80">
                      1 sản phẩm sân khấu hóa tổng hợp toàn lớp cho trích đoạn Huyện đường
                    </p>
                    <p className="font-mono text-[11px] text-heritage-goldSoft break-all">
                      {HUYEN_DUONG_CLASS_DRAMA.expectedPath}
                    </p>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 p-4 sm:p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full bg-heritage-crimson px-3 py-1 text-xs font-bold text-white">
                    {HUYEN_DUONG_CLASS_DRAMA.badge}
                  </span>
                  <h4 className="mt-3 font-serif text-xl sm:text-2xl font-bold text-heritage-woodDark">
                    {HUYEN_DUONG_CLASS_DRAMA.title}
                  </h4>
                  <p className="mt-2 text-sm text-heritage-ink leading-relaxed">
                    {HUYEN_DUONG_CLASS_DRAMA.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-heritage-ink border-t border-heritage-crimson/15 pt-4">
                    {HUYEN_DUONG_CLASS_DRAMA.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-heritage-crimson"
                          aria-hidden="true"
                        />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

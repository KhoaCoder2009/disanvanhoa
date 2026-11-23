"use client";

import React, { useState } from "react";
import {
  Camera,
  FileText,
  Film,
  PenTool,
  Download,
  Clapperboard,
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
import { TiltSpotlightCard } from "./effects/TiltSpotlightCard";

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
    icon: <Camera className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
  },
  {
    id: "mask-sketches",
    label: "Ảnh phác thảo mặt nạ",
    countBadge: "4 nhóm",
    icon: <PenTool className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
  },
  {
    id: "word-script",
    label: "Bản Word thuyết minh",
    countBadge: "Phần lời",
    icon: <FileText className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
  },
  {
    id: "mask-videos",
    label: "Video thuyết minh mặt nạ",
    countBadge: "4 video",
    icon: <Film className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
  },
  {
    id: "class-drama",
    label: "Video diễn kịch lớp",
    countBadge: "1 chung",
    icon: <Clapperboard className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />,
  },
];

export const HuyenDuongStudentArchive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ArchiveTab>("activity-photos");

  return (
    <div className="mt-8 sm:mt-10 rounded-2xl bg-heritage-ivoryLight p-4 sm:p-6 lg:p-8 border border-heritage-goldAntique/50 shadow-museum">
      {/* Tiêu đề & Thanh chọn danh mục đồng bộ hoàn toàn với phong cách Bảo tàng Giấy Ngà - Đỏ Son */}
      <div className="border-b border-heritage-goldAntique/35 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block rounded-md bg-heritage-woodDark px-3 py-1 text-xs font-semibold text-heritage-goldSoft border border-heritage-goldAntique/50">
            {HUYEN_DUONG_STUDENT_ARCHIVE_META.badge}
          </span>
          <span className="font-mono text-[11px] font-semibold text-heritage-crimson">
            5 hạng mục lưu trữ thực tế
          </span>
        </div>

        <h3 className="mt-3 font-serif text-xl sm:text-2xl font-bold text-heritage-woodDark tracking-tight">
          {HUYEN_DUONG_STUDENT_ARCHIVE_META.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-heritage-ink leading-relaxed max-w-4xl">
          {HUYEN_DUONG_STUDENT_ARCHIVE_META.subtitle}
        </p>

        {/* Thanh 5 Tab dạng viên thuốc chuẩn Triển lãm số */}
        <div
          role="tablist"
          aria-label="Danh mục sản phẩm học sinh Dự án Huyện đường"
          className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0"
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
                className={`shrink-0 whitespace-nowrap inline-flex min-h-[40px] items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-heritage-crimson text-heritage-ivory border border-heritage-goldSoft shadow-sm"
                    : "bg-heritage-ivory text-heritage-ink border border-heritage-goldAntique/40 hover:bg-heritage-ivoryDeep"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-bold ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-heritage-ivoryDeep text-heritage-crimson"
                  }`}
                >
                  {tab.countBadge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Nội dung hiển thị đồng bộ dạng Thẻ Bảo tàng */}
      <div className="mt-6">
        {/* 1. HÌNH ẢNH HOẠT ĐỘNG CỦA CÁC NHÓM */}
        {activeTab === "activity-photos" && (
          <div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                1. Hình ảnh hoạt động của các nhóm (4 nhóm)
              </h4>
              <span className="text-xs font-medium text-heritage-woodLight">
                Cập nhật tại{" "}
                <code className="break-all bg-white px-1.5 py-0.5 rounded border border-heritage-goldAntique/30 text-heritage-crimson">
                  src/data/studentProductsData.ts
                </code>
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {HUYEN_DUONG_ACTIVITY_PHOTOS.map((slot) => (
                <TiltSpotlightCard
                  key={slot.id}
                  className="rounded-2xl bg-heritage-ivory border border-heritage-goldAntique/50 overflow-hidden"
                >
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden bg-heritage-woodDark/95 flex items-center justify-center border-b border-heritage-goldAntique/40">
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
                            className="mx-auto h-8 w-8 text-heritage-goldSoft"
                            aria-hidden="true"
                          />
                          <p className="text-xs font-bold text-heritage-goldSoft">
                            Ảnh hoạt động • {slot.groupName}
                          </p>
                          <p className="font-mono text-[10px] text-heritage-ivory/75 break-all">
                            {slot.expectedPath}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="p-4 sm:p-5">
                      <span className="inline-block rounded-md bg-heritage-woodDark px-2.5 py-0.5 text-[11px] font-semibold text-heritage-goldSoft">
                        {slot.groupName}
                      </span>
                      <h5 className="mt-2 font-serif text-base font-bold text-heritage-woodDark">
                        {slot.title}
                      </h5>
                      <p className="mt-1.5 text-xs text-heritage-ink leading-relaxed">
                        {slot.caption}
                      </p>
                    </div>
                  </div>
                </TiltSpotlightCard>
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
              <span className="text-xs font-medium text-heritage-crimson">
                4 bản phác thảo ứng với 4 nhân vật công đường
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {HUYEN_DUONG_MASK_SKETCHES.map((sketch) => (
                <TiltSpotlightCard
                  key={sketch.id}
                  className="rounded-2xl bg-heritage-ivory border border-heritage-goldAntique/50 overflow-hidden"
                >
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden bg-heritage-woodDark/95 flex items-center justify-center border-b border-heritage-goldAntique/40">
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
                            className="mx-auto h-8 w-8 text-heritage-goldSoft"
                            aria-hidden="true"
                          />
                          <p className="text-xs font-bold text-heritage-goldSoft">
                            Phác thảo • {sketch.groupName}
                          </p>
                          <p className="font-mono text-[10px] text-heritage-ivory/75 break-all">
                            {sketch.expectedPath}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-md bg-heritage-woodDark px-2.5 py-0.5 text-[11px] font-semibold text-heritage-goldSoft">
                          {sketch.groupName}
                        </span>
                        <span className="text-[11px] font-bold text-heritage-crimson">
                          {sketch.characterName}
                        </span>
                      </div>
                      <p className="mt-2.5 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                        {sketch.sketchNote}
                      </p>
                    </div>
                  </div>
                </TiltSpotlightCard>
              ))}
            </div>
          </div>
        )}

        {/* 3. BẢN WORD THUYẾT MINH (PHẦN LỜI) */}
        {activeTab === "word-script" && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-heritage-ivory p-4 sm:p-5 border border-heritage-goldAntique/45">
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-woodDark">
                  3. {HUYEN_DUONG_WORD_SCRIPT.title}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-heritage-ink">
                  {HUYEN_DUONG_WORD_SCRIPT.summaryNote}
                </p>
              </div>
              {HUYEN_DUONG_WORD_SCRIPT.docxUrl ? (
                <a
                  href={HUYEN_DUONG_WORD_SCRIPT.docxUrl}
                  download
                  className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-heritage-crimson px-5 py-3 text-xs sm:text-sm font-semibold text-heritage-ivory hover:bg-heritage-woodDark transition-colors"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Tải bản Word (.docx)</span>
                </a>
              ) : (
                <div className="shrink-0 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-heritage-crimson border border-heritage-crimson/30">
                  Tệp Word chờ tải lên:{" "}
                  <code className="break-all">{HUYEN_DUONG_WORD_SCRIPT.expectedPath}</code>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {HUYEN_DUONG_WORD_SCRIPT.scriptSections.map((sec, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-heritage-ivory p-4 sm:p-5 border border-heritage-goldAntique/45 shadow-sm"
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
              <span className="text-xs font-medium text-heritage-crimson">
                Tổng cộng 4 video riêng của 4 nhóm
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {HUYEN_DUONG_MASK_VIDEOS.map((vid) => (
                <TiltSpotlightCard
                  key={vid.id}
                  className="overflow-hidden rounded-2xl bg-heritage-ivory border border-heritage-goldAntique/50"
                >
                  <div>
                    <div className="aspect-video w-full bg-heritage-woodDark flex items-center justify-center border-b border-heritage-goldAntique/40">
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
                          <p className="font-serif text-sm sm:text-base font-bold text-heritage-ivory">
                            Khung Video {vid.groupName} • {vid.characterFocus}
                          </p>
                          <p className="font-mono text-[11px] text-heritage-goldSoft/90 break-all">
                            {vid.expectedPath}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-md bg-heritage-woodDark px-2.5 py-0.5 text-[11px] font-semibold text-heritage-goldSoft">
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
                  </div>
                </TiltSpotlightCard>
              ))}
            </div>
          </div>
        )}

        {/* 5. VIDEO DIỄN KỊCH: 1 SẢN PHẨM CHUNG CỦA LỚP */}
        {activeTab === "class-drama" && (
          <div className="rounded-2xl bg-heritage-ivory border border-heritage-goldAntique/55 overflow-hidden shadow-museum">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 aspect-video w-full bg-heritage-woodDark flex items-center justify-center border-b lg:border-b-0 lg:border-r border-heritage-goldAntique/40">
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
                    <p className="font-serif text-base sm:text-xl font-bold text-heritage-ivory">
                      Khung Video Diễn kịch Chung của Lớp
                    </p>
                    <p className="text-xs text-heritage-ivory/80">
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
                  <span className="inline-block rounded-md bg-heritage-crimson px-3 py-1 text-xs font-semibold text-white">
                    {HUYEN_DUONG_CLASS_DRAMA.badge}
                  </span>
                  <h4 className="mt-3 font-serif text-xl sm:text-2xl font-bold text-heritage-woodDark">
                    {HUYEN_DUONG_CLASS_DRAMA.title}
                  </h4>
                  <p className="mt-2 text-sm text-heritage-ink leading-relaxed">
                    {HUYEN_DUONG_CLASS_DRAMA.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-heritage-ink border-t border-heritage-goldAntique/35 pt-4">
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

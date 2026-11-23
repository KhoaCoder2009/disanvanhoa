"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Wrench,
  ArrowRight,
  CheckCircle,
  X,
  Compass,
  Cpu,
  Cog,
  Palette,
  Ruler,
} from "lucide-react";
import {
  STEAM_ELEMENTS,
  STEAM_MAKERSPACE_META,
  STEAM_STEPS,
} from "@/data/steamMakerspaceData";
import { SteamElement } from "@/types/heritage";
import { AuroraParticlesCanvas } from "./effects/AuroraParticlesCanvas";
import { TiltSpotlightCard } from "./effects/TiltSpotlightCard";
import { InteractiveHeritageLab } from "./InteractiveHeritageLab";

export const SteamMakerspaceSection: React.FC = () => {
  const [activeStepNum, setActiveStepNum] = useState<number>(1);
  const [activeLetter, setActiveLetter] = useState<SteamElement["letter"]>("S");
  const [workshopModalOpen, setWorkshopModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!workshopModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setWorkshopModalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [workshopModalOpen]);

  const selectedElement =
    STEAM_ELEMENTS.find((el) => el.letter === activeLetter) || STEAM_ELEMENTS[0];
  const selectedStep =
    STEAM_STEPS.find((st) => st.stepNumber === activeStepNum) || STEAM_STEPS[0];

  const getElementIcon = (letter: SteamElement["letter"]) => {
    switch (letter) {
      case "S":
        return <Compass className="h-5 w-5" aria-hidden="true" />;
      case "T":
        return <Cpu className="h-5 w-5" aria-hidden="true" />;
      case "E":
        return <Cog className="h-5 w-5" aria-hidden="true" />;
      case "A":
        return <Palette className="h-5 w-5" aria-hidden="true" />;
      case "M":
        return <Ruler className="h-5 w-5" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="xuong-steam"
      aria-labelledby="steam-section-heading"
      className="relative py-12 sm:py-16 lg:py-20 bg-white text-heritage-ink border-b-2 border-heritage-crimson/20 overflow-hidden"
    >
      <AuroraParticlesCanvas variant="makerspace" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề Khu vực 3: XƯỞNG SÁNG TẠO STEAM (Nền Trắng - Chữ Đỏ Son) */}
        <div className="flex flex-col justify-between gap-5 sm:gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2
              id="steam-section-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-heritage-crimson tracking-tight"
            >
              {STEAM_MAKERSPACE_META.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-heritage-ink leading-relaxed">
              {STEAM_MAKERSPACE_META.description}
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setWorkshopModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-heritage-crimson px-6 py-3.5 text-sm sm:text-base font-semibold text-white border border-heritage-crimson shadow-museum transition-colors duration-200 hover:bg-heritage-woodDark focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson"
            >
              <Wrench className="h-4 w-4" aria-hidden="true" />
              <span>{STEAM_MAKERSPACE_META.buttonLabel}</span>
            </button>
          </div>
        </div>

        {/* Sơ đồ trực quan 5 BƯỚC quy trình thiết kế STEAM (Tông Trắng & Đỏ Son) */}
        <div className="mt-10 sm:mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STEAM_STEPS.map((step, index) => {
              const isCurrent = step.stepNumber === activeStepNum;
              return (
                <TiltSpotlightCard
                  key={step.stepNumber}
                  className={`group rounded-2xl cursor-pointer transition-colors duration-200 ${
                    index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  } ${
                    isCurrent
                      ? "bg-heritage-crimson text-white border-2 border-heritage-crimson shadow-museum"
                      : "bg-heritage-ivoryLight text-heritage-ink border border-heritage-crimson/25 hover:border-heritage-crimson"
                  }`}
                >
                  <div
                    onClick={() => setActiveStepNum(step.stepNumber)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStepNum(step.stepNumber);
                      }
                    }}
                    className="p-4 sm:p-5 h-full flex flex-col justify-between focus:outline-none"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-xl font-serif text-base font-bold ${
                            isCurrent
                              ? "bg-white text-heritage-crimson"
                              : "bg-heritage-crimson text-white"
                          }`}
                        >
                          0{step.stepNumber}
                        </span>
                        {index < STEAM_STEPS.length - 1 && (
                          <ArrowRight
                            className={`hidden lg:block h-4 w-4 ${
                              isCurrent ? "text-white/80" : "text-heritage-crimson"
                            }`}
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      <h3
                        className={`mt-4 font-serif text-base sm:text-lg font-bold ${
                          isCurrent ? "text-white" : "text-heritage-woodDark"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <ul
                        className={`mt-3 space-y-2 text-xs sm:text-sm ${
                          isCurrent ? "text-white/95" : "text-heritage-ink"
                        }`}
                      >
                        {step.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle
                              className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                                isCurrent ? "text-heritage-goldSoft" : "text-heritage-crimson"
                              }`}
                              aria-hidden="true"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`mt-4 border-t pt-2.5 text-[11px] font-semibold ${
                        isCurrent
                          ? "border-white/30 text-heritage-goldSoft"
                          : "border-heritage-crimson/20 text-heritage-crimson"
                      }`}
                    >
                      {isCurrent ? "Đang xem minh họa bước này" : "Nhấn để xem ví dụ thực hành"}
                    </div>
                  </div>
                </TiltSpotlightCard>
              );
            })}
          </div>

          {/* Hộp minh họa thực hành cho Bước đang chọn */}
          <div className="mt-4 rounded-xl bg-heritage-ivoryLight px-5 py-4 border-2 border-heritage-crimson/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-heritage-crimson">
                Ví dụ thực hành tại lớp ({selectedStep.title}):
              </span>
              <p className="mt-1 text-sm text-heritage-ink leading-relaxed">
                {selectedStep.artifactExample}
              </p>
            </div>
            <span className="shrink-0 rounded-lg bg-heritage-crimson px-3 py-1.5 text-xs font-semibold text-white">
              Bước {selectedStep.stepNumber} / 5
            </span>
          </div>
        </div>

        {/* 5 THẺ THÀNH TỐ STEAM TƯƠNG TÁC (Trắng & Đỏ Son) */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-heritage-crimson">
              NĂM THÀNH TỐ TRONG DỰ ÁN NGỮ VĂN STEAM
            </h3>
            <span className="text-xs sm:text-sm font-medium text-heritage-woodDark">
              Nhấn vào từng thành tố S – T – E – A – M để xem giải thích và liên hệ chủ đề
            </span>
          </div>

          <div
            role="tablist"
            aria-label="Năm thành tố STEAM"
            className="mt-5 grid grid-cols-2 gap-2.5 md:grid-cols-5 lg:gap-3"
          >
            {STEAM_ELEMENTS.map((el) => {
              const isSelected = el.letter === activeLetter;
              return (
                <button
                  key={el.letter}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveLetter(el.letter)}
                  className={`flex flex-col items-start rounded-2xl p-3 sm:p-3.5 lg:p-4 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson ${
                    el.letter === "M" ? "col-span-2 md:col-span-1" : ""
                  } ${
                    isSelected
                      ? "bg-heritage-crimson text-white border-2 border-heritage-crimson shadow-museum"
                      : "bg-heritage-ivoryLight text-heritage-ink border border-heritage-crimson/25 hover:bg-heritage-ivoryDeep"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={`font-serif text-2xl sm:text-3xl font-bold ${
                        isSelected ? "text-white" : "text-heritage-crimson"
                      }`}
                    >
                      {el.letter}
                    </span>
                    <span
                      className={
                        isSelected ? "text-heritage-goldSoft" : "text-heritage-crimson"
                      }
                    >
                      {getElementIcon(el.letter)}
                    </span>
                  </div>
                  <span className="mt-2 text-[11px] lg:text-xs font-bold tracking-wider uppercase">
                    {el.letter} – {el.englishName}
                  </span>
                  <span
                    className={`text-sm font-serif font-semibold ${
                      isSelected ? "text-heritage-goldSoft" : "text-heritage-woodDark"
                    }`}
                  >
                    {el.vietnameseName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bảng giải thích chi tiết và ví dụ liên hệ với chủ đề đang học */}
          <div
            role="tabpanel"
            className="mt-5 rounded-2xl bg-white text-heritage-ink p-4 sm:p-6 lg:p-8 border-2 border-heritage-crimson/35 shadow-museum"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-heritage-crimson/20 pb-4">
              <div className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-heritage-crimson font-serif text-xl sm:text-2xl font-bold text-white">
                  {selectedElement.letter}
                </span>
                <div>
                  <h4 className="font-serif text-lg sm:text-2xl font-bold text-heritage-crimson">
                    {selectedElement.letter} – {selectedElement.englishName}:{" "}
                    {selectedElement.vietnameseName}
                  </h4>
                  <p className="text-xs sm:text-sm text-heritage-woodDark">
                    Giải thích vai trò liên môn &amp; Ví dụ liên hệ trực tiếp với Huyện đường &amp; Sử thi Đăm Săn
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base text-heritage-ink leading-relaxed">
              {selectedElement.shortExplanation}
            </p>

            <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-crimson/25">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-crimson block">
                  Liên hệ Dự án 01: Huyện đường (Tuồng)
                </span>
                <p className="mt-2 text-sm leading-relaxed">
                  {selectedElement.huyenDuongExample}
                </p>
              </div>

              <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-crimson/25">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-woodDark block">
                  Liên hệ Dự án 02: Sử thi Đăm Săn
                </span>
                <p className="mt-2 text-sm leading-relaxed">
                  {selectedElement.damSanExample}
                </p>
              </div>

              <div className="md:col-span-2 lg:col-span-1 rounded-xl bg-heritage-ivoryDeep/70 p-4 border border-heritage-crimson/25">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-crimson block">
                  Học liệu &amp; Vật liệu thực hành
                </span>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {selectedElement.toolsAndMaterials.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-heritage-crimson" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BÀN MÔ PHỎNG THIẾT KẾ KỸ THUẬT STEAM TRỰC TUYẾN */}
        <InteractiveHeritageLab />
      </div>

      {/* Modal Khám phá Xưởng STEAM */}
      {workshopModalOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setWorkshopModalOpen(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="steam-workshop-modal-title"
        >
          <div className="relative my-2 sm:my-8 w-full max-w-3xl rounded-2xl bg-white border-2 border-heritage-crimson p-4 sm:p-8 text-heritage-ink shadow-cabinet max-h-[92dvh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3 sm:gap-4 border-b border-heritage-crimson/20 pb-4">
              <div className="min-w-0">
                <span className="rounded-md bg-heritage-crimson px-3 py-1 text-xs font-semibold text-white">
                  Sổ tay Xưởng sáng tạo STEAM Ngữ văn
                </span>
                <h3
                  id="steam-workshop-modal-title"
                  className="mt-2 font-serif text-xl sm:text-3xl font-bold text-heritage-crimson"
                >
                  HƯỚNG DẪN TỔ CHỨC XƯỞNG &amp; NHẬT KÝ DỰ ÁN
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setWorkshopModalOpen(false)}
                aria-label="Đóng sổ tay xưởng STEAM"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-heritage-crimson text-white hover:bg-heritage-woodDark"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-5 text-sm leading-relaxed">
              <div className="rounded-xl bg-heritage-ivoryLight p-5 border border-heritage-crimson/25">
                <h4 className="font-serif text-lg font-bold text-heritage-crimson">
                  1. Hồ sơ Nhật ký dự án STEAM (4 biểu mẫu bắt buộc)
                </h4>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-white p-3.5 border border-heritage-crimson/20">
                    <span className="text-xs font-bold uppercase text-heritage-crimson">
                      Phiếu 01 • Giải mã Ngữ văn
                    </span>
                    <p className="mt-1 text-xs text-heritage-ink">
                      Ghi chép dẫn chứng từ SGK Ngữ văn 10 (lời thoại Tri huyện, Đề lại, Trùm Sò hoặc đoạn miêu tả nhà Đăm Săn) làm căn cứ tạo hình.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-3.5 border border-heritage-crimson/20">
                    <span className="text-xs font-bold uppercase text-heritage-crimson">
                      Phiếu 02 • Bản vẽ Kỹ thuật &amp; Tỷ lệ (E &amp; M)
                    </span>
                    <p className="mt-1 text-xs text-heritage-ink">
                      Bản phác thảo 3 chiều, kích thước chuẩn (cm), góc mở sân khấu, bảng dự toán vật liệu tái chế và phân công thành viên.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-3.5 border border-heritage-crimson/20">
                    <span className="text-xs font-bold uppercase text-heritage-crimson">
                      Phiếu 03 • Nhật ký Thử nghiệm Khoa học (S &amp; T)
                    </span>
                    <p className="mt-1 text-xs text-heritage-ink">
                      Ghi nhận các lần thử nghiệm độ bền kết cấu, độ bám màu, mạch đèn LED chiếu bóng hoặc mã QR âm thanh thuyết minh.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-3.5 border border-heritage-crimson/20">
                    <span className="text-xs font-bold uppercase text-heritage-crimson">
                      Phiếu 04 • Bản thuyết minh Bảo tàng (A)
                    </span>
                    <p className="mt-1 text-xs text-heritage-ink">
                      Nội dung nhãn trưng bày hiện vật (tên tác phẩm, thông điệp nghệ thuật, kết nối văn bản gốc) chuẩn bị cho buổi bảo vệ.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-heritage-ivoryDeep/60 p-5 border border-heritage-crimson/25">
                <h4 className="font-serif text-lg font-bold text-heritage-woodDark">
                  2. Nguyên tắc An toàn &amp; Vật liệu xanh trong Xưởng
                </h4>
                <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-heritage-ink">
                  <li>
                    • Ưu tiên tối thiểu 70% vật liệu tái chế, thân thiện môi trường (bìa carton, giấy báo, que tre, vải vụn, màu acrylic không độc hại).
                  </li>
                  <li>
                    • Mọi chi tiết tạo hình đều phải giải trình được bằng dẫn chứng văn bản trong sách giáo khoa Ngữ văn 10.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex justify-end border-t border-heritage-crimson/20 pt-4">
              <button
                type="button"
                onClick={() => setWorkshopModalOpen(false)}
                className="rounded-lg bg-heritage-crimson px-5 py-2.5 text-sm font-semibold text-white hover:bg-heritage-woodDark transition-colors"
              >
                Đã nắm rõ quy trình Xưởng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

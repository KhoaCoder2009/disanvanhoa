"use client";

import React, { useState } from "react";
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
      className="relative py-16 sm:py-20 bg-white text-heritage-ink border-b-2 border-heritage-crimson/20 overflow-hidden"
    >
      <AuroraParticlesCanvas variant="makerspace" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề Khu vực 3: XƯỞNG SÁNG TẠO STEAM (Nền Trắng - Chữ Đỏ Son) */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2
              id="steam-section-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-heritage-crimson tracking-tight"
            >
              {STEAM_MAKERSPACE_META.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-heritage-ink leading-relaxed">
              {STEAM_MAKERSPACE_META.description}
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setWorkshopModalOpen(true)}
              className="inline-flex items-center gap-2.5 rounded-xl bg-heritage-crimson px-6 py-3.5 text-sm sm:text-base font-semibold text-white border border-heritage-crimson shadow-museum transition-colors duration-200 hover:bg-heritage-woodDark focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson"
            >
              <Wrench className="h-4 w-4" aria-hidden="true" />
              <span>{STEAM_MAKERSPACE_META.buttonLabel}</span>
            </button>
          </div>
        </div>

        {/* Cặp Hình ảnh Trực quan Song hành Hai Dự án Chế tác tại Xưởng STEAM */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="group overflow-hidden rounded-2xl bg-heritage-ivoryLight border-2 border-heritage-crimson/25 shadow-museum">
            <div className="aspect-[16/9] w-full overflow-hidden bg-white">
              <img
                src="/images/cinema/scene-09-xuong-steam.png"
                alt="Xưởng chế tác Mặt nạ Huyện đường – Đo đạc tỉ lệ và bồi bìa 3D"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between gap-3 border-t border-heritage-crimson/15">
              <div>
                <span className="inline-block rounded-md bg-heritage-crimson px-2.5 py-0.5 text-[11px] font-bold uppercase text-white">
                  Bàn Chế Tác 01 • Huyện đường
                </span>
                <p className="mt-1.5 font-serif text-base sm:text-lg font-bold text-heritage-woodDark">
                  Thiết kế Mặt nạ Ước lệ &amp; Đo đạc Nhân trắc
                </p>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl bg-heritage-emeraldSoft/40 border-2 border-heritage-emerald/30 shadow-museum">
            <div className="aspect-[16/9] w-full overflow-hidden bg-white">
              <img
                src="/images/cinema/scene-dam-san-mat-troi.png"
                alt="Mô hình Hộp kể chuyện 3 lớp Sử thi Đăm Săn với ánh sáng LED"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between gap-3 border-t border-heritage-emerald/20">
              <div>
                <span className="inline-block rounded-md bg-heritage-emerald px-2.5 py-0.5 text-[11px] font-bold uppercase text-white">
                  Bàn Chế Tác 02 • Sử thi Đăm Săn
                </span>
                <p className="mt-1.5 font-serif text-base sm:text-lg font-bold text-heritage-woodDark">
                  Hộp Kể Chuyện 3 Lớp &amp; Quang Học Ánh Sáng LED
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sơ đồ trực quan 5 BƯỚC quy trình thiết kế STEAM (Tông Trắng & Đỏ Son) */}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {STEAM_STEPS.map((step, index) => {
              const isCurrent = step.stepNumber === activeStepNum;
              return (
                <TiltSpotlightCard
                  key={step.stepNumber}
                  className={`group rounded-2xl cursor-pointer transition-colors duration-200 ${
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
                    className="p-5 h-full flex flex-col justify-between focus:outline-none"
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
                            className={`hidden md:block h-4 w-4 ${
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
            className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5"
          >
            {STEAM_ELEMENTS.map((el) => {
              const isSelected = el.letter === activeLetter;
              const tabColorMap: Record<
                SteamElement["letter"],
                { activeBg: string; border: string; text: string }
              > = {
                S: {
                  activeBg: "bg-heritage-emerald border-heritage-emerald",
                  border: "border-heritage-emerald/30 hover:bg-heritage-emeraldSoft",
                  text: "text-heritage-emerald",
                },
                T: {
                  activeBg: "bg-heritage-indigo border-heritage-indigo",
                  border: "border-heritage-indigo/30 hover:bg-heritage-indigoSoft",
                  text: "text-heritage-indigo",
                },
                E: {
                  activeBg: "bg-heritage-amber border-heritage-amber",
                  border: "border-heritage-amber/30 hover:bg-heritage-amberSoft",
                  text: "text-heritage-amber",
                },
                A: {
                  activeBg: "bg-heritage-crimson border-heritage-crimson",
                  border: "border-heritage-crimson/30 hover:bg-heritage-ivoryDeep",
                  text: "text-heritage-crimson",
                },
                M: {
                  activeBg: "bg-heritage-bronze border-heritage-bronze",
                  border: "border-heritage-bronze/30 hover:bg-amber-50",
                  text: "text-heritage-bronze",
                },
              };
              const c = tabColorMap[el.letter];
              return (
                <button
                  key={el.letter}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveLetter(el.letter)}
                  className={`flex flex-col items-start rounded-2xl p-4 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage-crimson ${
                    isSelected
                      ? `${c.activeBg} text-white border-2 shadow-museum`
                      : `bg-white text-heritage-ink border-2 ${c.border}`
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={`font-serif text-2xl sm:text-3xl font-bold ${
                        isSelected ? "text-white" : c.text
                      }`}
                    >
                      {el.letter}
                    </span>
                    <span className={isSelected ? "text-white/90" : c.text}>
                      {getElementIcon(el.letter)}
                    </span>
                  </div>
                  <span className="mt-2 text-xs font-bold tracking-wider uppercase">
                    {el.letter} – {el.englishName}
                  </span>
                  <span
                    className={`text-sm font-serif font-semibold ${
                      isSelected ? "text-white/95" : "text-heritage-woodDark"
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
            className="mt-5 rounded-2xl bg-white text-heritage-ink p-6 sm:p-8 border-2 border-heritage-crimson/35 shadow-museum"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-heritage-crimson/20 pb-4">
              <div className="flex items-center gap-3.5">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl font-serif text-2xl font-bold text-white ${
                    selectedElement.letter === "S"
                      ? "bg-heritage-emerald"
                      : selectedElement.letter === "T"
                      ? "bg-heritage-indigo"
                      : selectedElement.letter === "E"
                      ? "bg-heritage-amber"
                      : selectedElement.letter === "M"
                      ? "bg-heritage-bronze"
                      : "bg-heritage-crimson"
                  }`}
                >
                  {selectedElement.letter}
                </span>
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-heritage-woodDark">
                    {selectedElement.letter} – {selectedElement.englishName}:{" "}
                    {selectedElement.vietnameseName}
                  </h4>
                  <p className="text-xs sm:text-sm text-heritage-crimson font-medium">
                    Giải thích vai trò liên môn &amp; Ví dụ liên hệ trực tiếp với Huyện đường &amp; Sử thi Đăm Săn
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-base text-heritage-ink leading-relaxed">
              {selectedElement.shortExplanation}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
              <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-crimson/25">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-crimson block">
                  Liên hệ Dự án 01: Huyện đường (Tuồng)
                </span>
                <p className="mt-2 text-sm leading-relaxed">
                  {selectedElement.huyenDuongExample}
                </p>
              </div>

              <div className="rounded-xl bg-heritage-emeraldSoft/45 p-4 border border-heritage-emerald/25">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-emerald block">
                  Liên hệ Dự án 02: Sử thi Đăm Săn
                </span>
                <p className="mt-2 text-sm leading-relaxed">
                  {selectedElement.damSanExample}
                </p>
              </div>

              <div className="rounded-xl bg-heritage-indigoSoft/45 p-4 border border-heritage-indigo/25">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-indigo block">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="steam-workshop-modal-title"
        >
          <div className="relative my-8 w-full max-w-3xl rounded-2xl bg-white border-2 border-heritage-crimson p-6 sm:p-8 text-heritage-ink shadow-cabinet max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-heritage-crimson/20 pb-4">
              <div>
                <span className="rounded-md bg-heritage-crimson px-3 py-1 text-xs font-semibold text-white">
                  Sổ tay Xưởng sáng tạo STEAM Ngữ văn
                </span>
                <h3
                  id="steam-workshop-modal-title"
                  className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-heritage-crimson"
                >
                  HƯỚNG DẪN TỔ CHỨC XƯỞNG &amp; NHẬT KÝ DỰ ÁN
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setWorkshopModalOpen(false)}
                aria-label="Đóng sổ tay xưởng STEAM"
                className="rounded-lg bg-heritage-crimson p-2 text-white hover:bg-heritage-woodDark"
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

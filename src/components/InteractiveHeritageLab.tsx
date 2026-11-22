"use client";

import React, { useState } from "react";
import {
  Palette,
  Sun,
  Layers,
  RotateCcw,
  CheckCircle2,
  Sliders,
  Sparkles,
  BookOpen,
} from "lucide-react";

type LabTab = "mask-studio" | "storybox-light";

interface MaskPreset {
  id: string;
  name: string;
  role: string;
  baseColor: string;
  accentColor: string;
  browStyle: "quyen-uy" | "gian-xao" | "he-tuong" | "keo-kiet";
  beardStyle: "ba-chom" | "ria-mep" | "khong-rau" | "rau-ngan";
  quote: string;
  decodingNote: string;
}

const MASK_PRESETS: MaskPreset[] = [
  {
    id: "tri-huyen",
    name: "Tri huyện",
    role: "Quan đầu huyện (Huyện đường)",
    baseColor: "#F2E8D5",
    accentColor: "#7A2925",
    browStyle: "quyen-uy",
    beardStyle: "ba-chom",
    quote: "“Cầm cân nảy mực khảo tra / Cứ trong lễ vật nhiều ít mà xử phân...”",
    decodingNote:
      "Nền mặt trắng mốc pha sắc đỏ sẫm gò má và râu ba chòm tỉa mảnh: Bề ngoài đạo mạo quan trường nhưng bên trong tham của đút và háo sắc.",
  },
  {
    id: "de-lai",
    name: "Đề lại",
    role: "Thư lại nha môn (Huyện đường)",
    baseColor: "#E2DDD2",
    accentColor: "#435647",
    browStyle: "gian-xao",
    beardStyle: "ria-mep",
    quote: "“Chữ nghĩa văn từ vốn sẵn / Xoay vần án từ ăn đút hai mang...”",
    decodingNote:
      "Nền mặt xám bệch phối mảng xanh rêu quanh hốc mắt và nét mày xếch lệch: Đặc trưng của kẻ mọt sách gian ngoan, bày mưu tính kế.",
  },
  {
    id: "linh-le",
    name: "Lính lệ",
    role: "Tay sai công đường (Huyện đường)",
    baseColor: "#D6B77E",
    accentColor: "#7A2925",
    browStyle: "he-tuong",
    beardStyle: "khong-rau",
    quote: "“Quan trên ăn lễ đã đành / Lệ dưới cũng kiếm chút tiền rượu tăm...”",
    decodingNote:
      "Nền mặt nâu vàng dân dã kèm vệt phấn trắng sống mũi (hề tuồng): Vừa hách dịch dọa nạt kẻ dưới, vừa bộc trực phơi bày sự thật cửa quan.",
  },
  {
    id: "trum-so",
    name: "Trùm Sò",
    role: "Trọc phú kiện quan (Huyện đường)",
    baseColor: "#E6D7BC",
    accentColor: "#50372A",
    browStyle: "keo-kiet",
    beardStyle: "rau-ngan",
    quote: "“Của đau con xót kêu quan / Mà nghe lễ lạt ruột gan bồi hồi...”",
    decodingNote:
      "Sắc diện vàng sậm nhiều nếp nhăn co rúm trên trán và khóe miệng: Khắc họa bản tính keo kiệt, khúm núm nhưng tiếc từng đồng tiền lễ.",
  },
];

const BASE_SWATCHES = [
  { hex: "#F2E8D5", label: "Trắng mốc (Quan lại giả nhân)" },
  { hex: "#E2DDD2", label: "Xám bệch (Gian ngoan, mưu mô)" },
  { hex: "#D6B77E", label: "Vàng đất (Dân dã / Hề tuồng)" },
  { hex: "#E6D7BC", label: "Ngà sậm (Trọc phú bủn xỉn)" },
];

const ACCENT_SWATCHES = [
  { hex: "#7A2925", label: "Đỏ son (Tham vọng / Uy quyền)" },
  { hex: "#435647", label: "Xanh rêu (Toan tính / Lạnh lùng)" },
  { hex: "#50372A", label: "Nâu gỗ (Khắc khổ / Keo kiệt)" },
  { hex: "#A77B3D", label: "Vàng cổ (Phẩm hàm / Hào nhoáng)" },
];

/**
 * Phòng Thực Hành Mô Phỏng STEAM Tương Tác (Interactive STEAM Simulation Studio)
 * Kết hợp triết lý Emil Kowalski (clip-path comparison, tactile controls, custom ease-out)
 * và Taste Skill (show real interactive workbench UI inside an app-frame).
 */
export const InteractiveHeritageLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LabTab>("mask-studio");

  // State cho Xưởng Phối Màu Mặt Nạ Tuồng (Chủ đề 01)
  const [selectedPresetId, setSelectedPresetId] = useState<string>("tri-huyen");
  const [baseColor, setBaseColor] = useState<string>(MASK_PRESETS[0].baseColor);
  const [accentColor, setAccentColor] = useState<string>(
    MASK_PRESETS[0].accentColor
  );
  const [browStyle, setBrowStyle] = useState<MaskPreset["browStyle"]>(
    MASK_PRESETS[0].browStyle
  );
  const [beardStyle, setBeardStyle] = useState<MaskPreset["beardStyle"]>(
    MASK_PRESETS[0].beardStyle
  );
  const [comparePercent, setComparePercent] = useState<number>(100);

  // State cho Bàn Thử Nghiệm Ánh Sáng Hộp Kể Chuyện Đăm Săn (Chủ đề 02)
  const [sunElevation, setSunElevation] = useState<number>(68);
  const [ledIntensity, setLedIntensity] = useState<number>(85);
  const [heroProgress, setHeroProgress] = useState<number>(45);
  const [showLayerExplode, setShowLayerExplode] = useState<boolean>(false);

  const currentPreset =
    MASK_PRESETS.find((p) => p.id === selectedPresetId) || MASK_PRESETS[0];

  const handleSelectPreset = (preset: MaskPreset) => {
    setSelectedPresetId(preset.id);
    setBaseColor(preset.baseColor);
    setAccentColor(preset.accentColor);
    setBrowStyle(preset.browStyle);
    setBeardStyle(preset.beardStyle);
  };

  return (
    <div className="mt-12 sm:mt-14 rounded-2xl bg-heritage-ivory text-heritage-ink border-2 border-heritage-goldAntique shadow-cabinet overflow-hidden">
      {/* Thanh tiêu đề App-Frame của Bàn Thực Hành */}
      <div className="bg-heritage-woodDark text-heritage-ivory px-4 py-4 sm:px-6 border-b border-heritage-goldAntique/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-heritage-crimson text-heritage-goldSoft border border-heritage-goldAntique">
            <Sliders className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="font-serif text-base sm:text-xl font-bold text-heritage-ivory leading-snug">
              BÀN MÔ PHỎNG THIẾT KẾ KỸ THUẬT STEAM TRỰC TUYẾN
            </h3>
            <p className="text-xs text-heritage-goldSoft leading-snug">
              Thử nghiệm mã màu mặt nạ Tuồng &amp; Quang học hộp kể chuyện sử thi trước khi chế tác thủ công
            </p>
          </div>
        </div>

        {/* Chuyển đổi 2 Bàn mô phỏng (Chủ đề 01 & Chủ đề 02) */}
        <div
          role="tablist"
          aria-label="Chọn mô phỏng dự án STEAM"
          className="grid w-full sm:w-auto grid-cols-1 gap-1 sm:inline-flex sm:gap-0 rounded-xl bg-heritage-woodLight p-1 border border-heritage-goldAntique/40"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "mask-studio"}
            onClick={() => setActiveTab("mask-studio")}
            className={`inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg px-3 sm:px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors duration-200 ${
              activeTab === "mask-studio"
                ? "bg-heritage-crimson text-heritage-ivory shadow-sm"
                : "text-heritage-goldSoft hover:text-heritage-ivory"
            }`}
          >
            <Palette className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Chủ đề 01: Phối màu Mặt nạ Tuồng</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "storybox-light"}
            onClick={() => setActiveTab("storybox-light")}
            className={`inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg px-3 sm:px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors duration-200 ${
              activeTab === "storybox-light"
                ? "bg-heritage-crimson text-heritage-ivory shadow-sm"
                : "text-heritage-goldSoft hover:text-heritage-ivory"
            }`}
          >
            <Sun className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Chủ đề 02: Quang học Hộp Sử thi</span>
          </button>
        </div>
      </div>

      {/* MÔ PHỎNG 01: XƯỞNG PHỐI MÀU & NÉT CỌ MẶT NẠ TUỒNG (HUYỆN ĐƯỜNG) */}
      {activeTab === "mask-studio" && (
        <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-12">
          {/* Cột trái trên desktop, xuống thứ 2 trên mobile/tablet để bản xem trước hiện ngay đầu */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-5 sm:space-y-6">
            {/* 1. Chọn nhân vật mẫu từ văn bản Huyện đường */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-heritage-woodDark block mb-2.5">
                1. Chọn hồ sơ nhân vật gốc (Trích đoạn Huyện đường – Ngữ văn 10):
              </span>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {MASK_PRESETS.map((preset) => {
                  const active = selectedPresetId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      className={`flex flex-col items-start rounded-xl p-3 text-left transition-colors duration-150 border ${
                        active
                          ? "bg-heritage-woodDark text-heritage-goldSoft border-heritage-goldAntique shadow-sm"
                          : "bg-heritage-ivoryLight text-heritage-ink border-heritage-goldAntique/40 hover:bg-heritage-ivoryDeep/60"
                      }`}
                    >
                      <span className="font-serif text-sm font-bold">
                        {preset.name}
                      </span>
                      <span
                        className={`text-[11px] line-clamp-1 ${
                          active ? "text-heritage-ivory/80" : "text-heritage-woodLight"
                        }`}
                      >
                        {preset.role}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Tuỳ chỉnh Sắc diện nền & Màu nhấn ước lệ */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/40">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-woodDark block mb-2.5">
                  2. Mã màu nền khuôn mặt:
                </span>
                <div className="space-y-2">
                  {BASE_SWATCHES.map((sw) => (
                    <button
                      key={sw.hex}
                      type="button"
                      onClick={() => setBaseColor(sw.hex)}
                      className={`w-full flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-left text-xs font-medium border transition-colors ${
                        baseColor === sw.hex
                          ? "bg-heritage-woodDark text-heritage-goldSoft border-heritage-goldAntique"
                          : "bg-heritage-ivory text-heritage-ink border-heritage-goldAntique/30 hover:bg-heritage-ivoryDeep/50"
                      }`}
                    >
                      <span
                        className="h-4 w-4 shrink-0 rounded-full border border-heritage-woodDark/50"
                        style={{ backgroundColor: sw.hex }}
                      />
                      <span className="truncate">{sw.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/40">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-woodDark block mb-2.5">
                  3. Mã màu mảng nhấn &amp; Mão:
                </span>
                <div className="space-y-2">
                  {ACCENT_SWATCHES.map((sw) => (
                    <button
                      key={sw.hex}
                      type="button"
                      onClick={() => setAccentColor(sw.hex)}
                      className={`w-full flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-left text-xs font-medium border transition-colors ${
                        accentColor === sw.hex
                          ? "bg-heritage-woodDark text-heritage-goldSoft border-heritage-goldAntique"
                          : "bg-heritage-ivory text-heritage-ink border-heritage-goldAntique/30 hover:bg-heritage-ivoryDeep/50"
                      }`}
                    >
                      <span
                        className="h-4 w-4 shrink-0 rounded-full border border-heritage-ivory/60"
                        style={{ backgroundColor: sw.hex }}
                      />
                      <span className="truncate">{sw.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Chọn kiểu nét mày & râu ước lệ */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/40">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-woodDark block mb-2">
                  4. Nét vẽ chân mày &amp; Hốc mắt:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: "quyen-uy", label: "Mày xếch quan trường" },
                    { id: "gian-xao", label: "Mày lệch gian ngoan" },
                    { id: "he-tuong", label: "Mày tròn hề tuồng" },
                    { id: "keo-kiet", label: "Mày rủ nhăn nhó" },
                  ].map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() =>
                        setBrowStyle(b.id as MaskPreset["browStyle"])
                      }
                      className={`rounded-lg px-2.5 py-2 font-medium border text-left ${
                        browStyle === b.id
                          ? "bg-heritage-crimson text-heritage-ivory border-heritage-goldSoft"
                          : "bg-heritage-ivory text-heritage-ink border-heritage-goldAntique/30"
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-heritage-ivoryLight p-4 border border-heritage-goldAntique/40">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-woodDark block mb-2">
                  5. Tạo hình râu &amp; Phấn mũi:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: "ba-chom", label: "Râu 3 chòm tỉa mảnh" },
                    { id: "ria-mep", label: "Ria mép vểnh lệch" },
                    { id: "khong-rau", label: "Phấn trắng sống mũi" },
                    { id: "rau-ngan", label: "Cằm nhăn tiếc của" },
                  ].map((bd) => (
                    <button
                      key={bd.id}
                      type="button"
                      onClick={() =>
                        setBeardStyle(bd.id as MaskPreset["beardStyle"])
                      }
                      className={`rounded-lg px-2.5 py-2 font-medium border text-left ${
                        beardStyle === bd.id
                          ? "bg-heritage-crimson text-heritage-ivory border-heritage-goldSoft"
                          : "bg-heritage-ivory text-heritage-ink border-heritage-goldAntique/30"
                      }`}
                    >
                      {bd.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Thanh trượt Clip-Path đối chiếu Bản phác thảo chì ↔ Bản hoàn thiện màu (Emil Kowalski clip-path slider) */}
            <div className="rounded-xl bg-heritage-ivoryDeep/60 p-4 border border-heritage-goldAntique/50">
              <div className="flex items-center justify-between gap-2 text-xs font-bold text-heritage-woodDark mb-2">
                <span className="leading-snug">
                  Thanh kéo đối chiếu: Bản vẽ khung tỉ lệ bìa cứng (0%) ↔ Bản hoàn thiện màu ước lệ (100%)
                </span>
                <span className="shrink-0 rounded bg-heritage-woodDark px-2 py-0.5 text-heritage-goldSoft">
                  {comparePercent}%
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={comparePercent}
                onChange={(e) => setComparePercent(Number(e.target.value))}
                aria-label="Thanh kéo đối chiếu bản vẽ khung tỉ lệ và bản hoàn thiện màu mặt nạ"
                className="w-full accent-heritage-crimson cursor-pointer"
              />
            </div>
          </div>

          {/* Cột phải trên desktop, hiển thị trước trên mobile/tablet: Khung hiển thị Mặt nạ trực tiếp & Thẻ Giải Mã Tự Động */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-between rounded-2xl bg-heritage-woodDark p-4 sm:p-5 text-heritage-ivory border border-heritage-goldAntique">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-heritage-goldAntique/40 pb-3">
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-heritage-goldSoft block">
                    Bản xem trước tỉ lệ 1:1
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-ivory">
                    {currentPreset.name} — {currentPreset.role}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleSelectPreset(currentPreset);
                    setComparePercent(100);
                  }}
                  className="shrink-0 inline-flex items-center gap-1 rounded-lg bg-heritage-woodLight px-2.5 py-1.5 text-xs text-heritage-goldSoft hover:bg-heritage-crimson hover:text-heritage-ivory"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Mặc định</span>
                </button>
              </div>

              {/* Khung SVG đối chiếu 2 lớp bằng clip-path: inset() theo kỹ thuật Emil Kowalski */}
              <div className="relative mt-4 aspect-[4/3] w-full rounded-xl bg-[#1D1410] border border-heritage-goldAntique/50 overflow-hidden">
                {/* Lớp dưới: Bản phác thảo khung lưới nhân trắc học trên bìa carton */}
                <svg
                  viewBox="0 0 360 270"
                  className="absolute inset-0 h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="360" height="270" fill="#231813" />
                  {/* Lưới tọa độ Toán học (M - Mathematics) */}
                  {[45, 90, 135, 180, 225, 270, 315].map((x) => (
                    <line
                      key={x}
                      x1={x}
                      y1="0"
                      x2={x}
                      y2="270"
                      stroke="#A77B3D"
                      strokeWidth="0.6"
                      strokeDasharray="3 3"
                      strokeOpacity="0.4"
                    />
                  ))}
                  {[45, 90, 135, 180, 225].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="360"
                      y2={y}
                      stroke="#A77B3D"
                      strokeWidth="0.6"
                      strokeDasharray="3 3"
                      strokeOpacity="0.4"
                    />
                  ))}
                  <line x1="180" y1="15" x2="180" y2="255" stroke="#D6B77E" strokeWidth="1.2" strokeDasharray="5 3" />
                  <line x1="60" y1="135" x2="300" y2="135" stroke="#D6B77E" strokeWidth="1.2" strokeDasharray="5 3" />
                  <path
                    d="M 118 82 C 114 156, 134 212, 180 228 C 226 212, 246 156, 242 82 Z"
                    fill="none"
                    stroke="#D6B77E"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                  />
                  <text x="18" y="252" fill="#D6B77E" fontSize="10" fontFamily="monospace">
                    LỚP BÌA CỨNG &amp; TRỤC TỈ LỆ ĐỐI XỨNG (BƯỚC 2)
                  </text>
                </svg>

                {/* Lớp trên: Bản hoàn thiện màu hóa trang ước lệ được cắt bằng clip-path */}
                <div
                  className="absolute inset-0 transition-[clip-path] duration-150"
                  style={{
                    clipPath: `inset(0 ${100 - comparePercent}% 0 0)`,
                  }}
                >
                  <svg
                    viewBox="0 0 360 270"
                    className="h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="360" height="270" fill="#1D1410" />
                    {/* Mão đội đầu */}
                    <path
                      d="M 122 82 L 180 28 L 238 82 Z"
                      fill={accentColor}
                      stroke="#D6B77E"
                      strokeWidth="2"
                    />
                    <line x1="102" y1="82" x2="258" y2="82" stroke="#D6B77E" strokeWidth="3.5" />

                    {/* Gương mặt bìa cứng bồi màu */}
                    <path
                      d="M 118 84 C 114 156, 134 212, 180 228 C 226 212, 246 156, 242 84 Z"
                      fill={baseColor}
                      stroke={accentColor}
                      strokeWidth="3.5"
                    />

                    {/* Chân mày theo lựa chọn */}
                    {browStyle === "quyen-uy" && (
                      <path
                        d="M 134 118 C 146 102, 164 104, 170 118 M 190 118 C 196 104, 214 102, 226 118"
                        fill="none"
                        stroke="#2D211B"
                        strokeWidth="4"
                      />
                    )}
                    {browStyle === "gian-xao" && (
                      <path
                        d="M 134 122 L 168 108 M 192 114 L 226 102"
                        fill="none"
                        stroke="#2D211B"
                        strokeWidth="3.8"
                      />
                    )}
                    {browStyle === "he-tuong" && (
                      <path
                        d="M 136 114 Q 152 96 168 114 M 192 114 Q 208 96 224 114"
                        fill="none"
                        stroke="#2D211B"
                        strokeWidth="4"
                      />
                    )}
                    {browStyle === "keo-kiet" && (
                      <g>
                        <path
                          d="M 136 108 Q 152 124 168 112 M 192 112 Q 208 124 224 108"
                          fill="none"
                          stroke="#2D211B"
                          strokeWidth="3.5"
                        />
                        <path
                          d="M 155 96 Q 180 102 205 96"
                          fill="none"
                          stroke={accentColor}
                          strokeWidth="2"
                        />
                      </g>
                    )}

                    {/* Đôi mắt ước lệ */}
                    <polygon points="142,128 166,128 154,136" fill="#2D211B" />
                    <polygon points="194,128 218,128 206,136" fill="#2D211B" />

                    {/* Mảng màu gò má */}
                    <circle cx="142" cy="154" r="14" fill={accentColor} fillOpacity="0.55" />
                    <circle cx="218" cy="154" r="14" fill={accentColor} fillOpacity="0.55" />

                    {/* Râu & Nét đặc trưng */}
                    {beardStyle === "ba-chom" && (
                      <path
                        d="M 156 184 Q 180 174 204 184 M 162 192 L 154 220 M 180 190 L 180 224 M 198 192 L 206 220"
                        fill="none"
                        stroke="#2D211B"
                        strokeWidth="2.8"
                      />
                    )}
                    {beardStyle === "ria-mep" && (
                      <path
                        d="M 152 186 Q 180 176 212 180"
                        fill="none"
                        stroke="#2D211B"
                        strokeWidth="3"
                      />
                    )}
                    {beardStyle === "khong-rau" && (
                      <g>
                        <ellipse cx="180" cy="148" rx="11" ry="15" fill="#FFFFFF" stroke="#2D211B" strokeWidth="1.5" />
                        <path d="M 158 188 Q 180 198 202 188" fill="none" stroke="#7A2925" strokeWidth="3.2" />
                      </g>
                    )}
                    {beardStyle === "rau-ngan" && (
                      <path
                        d="M 162 190 Q 180 180 198 190 M 168 202 Q 180 196 192 202"
                        fill="none"
                        stroke="#50372A"
                        strokeWidth="2.8"
                      />
                    )}
                  </svg>
                </div>
              </div>

              {/* Thẻ Giải Mã Học Thuật Tự Động */}
              <div className="mt-4 rounded-xl bg-heritage-woodLight/80 p-4 border border-heritage-goldAntique/40 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-heritage-goldSoft font-serif font-bold">
                  <BookOpen className="h-4 w-4" />
                  <span>Thẻ Giải Mã Tự Động (Decoding Card)</span>
                </div>
                <p className="italic text-heritage-goldSoft/95">
                  {currentPreset.quote}
                </p>
                <p className="text-heritage-ivory/90 leading-relaxed">
                  {currentPreset.decodingNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MÔ PHỎNG 02: BÀN THỬ NGHIỆM ÁNH SÁNG & LỚP CẢNH HỘP KỂ CHUYỆN SỬ THI ĐĂM SĂN */}
      {activeTab === "storybox-light" && (
        <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-12">
          {/* Cột trái trên desktop, hiển thị sau bản xem trước trên mobile/tablet */}
          <div className="order-2 lg:order-1 lg:col-span-6 space-y-5">
            <div className="rounded-xl bg-heritage-ivoryLight p-4 sm:p-5 border border-heritage-goldAntique/40 space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-bold text-heritage-woodDark mb-1.5">
                  <span className="leading-snug">1. Độ cao Vầng Mặt Trời (Lớp hậu cảnh 03):</span>
                  <span className="shrink-0 rounded bg-heritage-woodDark px-2 py-0.5 text-xs text-heritage-goldSoft">
                    {sunElevation}%
                  </span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={90}
                  value={sunElevation}
                  onChange={(e) => setSunElevation(Number(e.target.value))}
                  aria-label="Điều chỉnh độ cao vầng mặt trời trong hộp kể chuyện"
                  className="w-full accent-heritage-crimson cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-bold text-heritage-woodDark mb-1.5">
                  <span className="leading-snug">2. Cường độ đèn LED xuyên qua giấy can tán sáng (S – Science):</span>
                  <span className="shrink-0 rounded bg-heritage-woodDark px-2 py-0.5 text-xs text-heritage-goldSoft">
                    {ledIntensity}%
                  </span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={100}
                  value={ledIntensity}
                  onChange={(e) => setLedIntensity(Number(e.target.value))}
                  aria-label="Điều chỉnh cường độ đèn LED chiếu sau hộp kể chuyện"
                  className="w-full accent-heritage-crimson cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-bold text-heritage-woodDark mb-1.5">
                  <span className="leading-snug">3. Rãnh trượt cơ học đưa Đăm Săn vượt rừng Sáp Đen (E – Engineering):</span>
                  <span className="shrink-0 rounded bg-heritage-woodDark px-2 py-0.5 text-xs text-heritage-goldSoft">
                    Vị trí: {heroProgress}%
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={85}
                  value={heroProgress}
                  onChange={(e) => setHeroProgress(Number(e.target.value))}
                  aria-label="Thanh trượt di chuyển nhân vật Đăm Săn"
                  className="w-full accent-heritage-crimson cursor-pointer"
                />
              </div>
            </div>

            <div className="rounded-xl bg-heritage-ivoryDeep/65 p-4 sm:p-5 border border-heritage-goldAntique/50 space-y-3 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <span className="font-serif font-bold text-heritage-woodDark text-base">
                  Nguyên lý Quang học &amp; Cơ học trong Hộp kể chuyện
                </span>
                <button
                  type="button"
                  onClick={() => setShowLayerExplode((prev) => !prev)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-lg bg-heritage-woodDark px-3 py-2 text-xs font-semibold text-heritage-goldSoft hover:bg-heritage-crimson hover:text-heritage-ivory shrink-0"
                >
                  <Layers className="h-3.5 w-3.5" />
                  <span>
                    {showLayerExplode ? "Thu gọn khung hộp" : "Hiển thị tách lớp 1-2-3"}
                  </span>
                </button>
              </div>
              <ul className="space-y-1.5 text-heritage-ink">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-heritage-crimson" />
                  <span>
                    <strong>Lớp 03 (Hậu cảnh &amp; Giấy can mờ):</strong> Đặt đèn LED vàng ấm phía sau lớp giấy can giúp ánh sáng tán xạ đều, làm nổi bật bóng đổ của núi rừng.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-heritage-crimson" />
                  <span>
                    <strong>Lớp 02 (Trung cảnh &amp; Rãnh trượt):</strong> Khi kéo thanh trượt đưa Đăm Săn tiến gần ngôi nhà Nữ thần Mặt Trời, rừng Sáp Đen chảy tan dưới ánh nắng.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cột phải trên desktop, hiển thị đầu tiên trên mobile/tablet: Mô phỏng Hộp kể chuyện Diorama thời gian thực */}
          <div className="order-1 lg:order-2 lg:col-span-6 rounded-2xl bg-heritage-woodDark p-4 sm:p-5 text-heritage-ivory border border-heritage-goldAntique flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-heritage-goldAntique/40 pb-3">
              <div className="min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-heritage-goldSoft block">
                  Mô phỏng Hộp kể chuyện 3 lớp (Diorama)
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-heritage-ivory">
                  Đăm Săn đi bắt Nữ thần Mặt Trời
                </h4>
              </div>
              <span className="shrink-0 rounded-md bg-heritage-moss px-2.5 py-1 text-xs font-semibold text-heritage-ivory">
                Đèn LED: {ledIntensity}%
              </span>
            </div>

            <div className="relative mt-4 aspect-[16/10] w-full rounded-xl bg-[#160F0C] border-2 border-heritage-goldAntique overflow-hidden">
              <svg
                viewBox="0 0 500 310"
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    id="storybox-led-glow"
                    cx="72%"
                    cy={`${100 - sunElevation}%`}
                    r="65%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#F2E8D5"
                      stopOpacity={(ledIntensity / 100) * 0.95}
                    />
                    <stop
                      offset="40%"
                      stopColor="#D6B77E"
                      stopOpacity={(ledIntensity / 100) * 0.65}
                    />
                    <stop
                      offset="75%"
                      stopColor="#7A2925"
                      stopOpacity={(ledIntensity / 100) * 0.35}
                    />
                    <stop offset="100%" stopColor="#160F0C" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ánh sáng đèn LED xuyên qua lớp giấy can */}
                <rect width="500" height="310" fill="#160F0C" />
                <rect width="500" height="310" fill="url(#storybox-led-glow)" />

                {/* LỚP 03: Vầng Mặt Trời & Ngôi nhà Nữ thần Mặt Trời */}
                <g
                  transform={`translate(0, ${
                    showLayerExplode ? -12 : 0
                  })`}
                >
                  <circle
                    cx="360"
                    cy={275 - sunElevation * 1.9}
                    r={38 + (ledIntensity / 100) * 18}
                    fill="#D6B77E"
                    fillOpacity={0.35 + (ledIntensity / 100) * 0.5}
                    stroke="#F2E8D5"
                    strokeWidth="1.5"
                  />
                  {/* Ngôi nhà Nữ thần Mặt Trời phía chân trời */}
                  <path
                    d="M 335 215 L 360 172 L 385 215 Z"
                    fill="#A77B3D"
                    stroke="#F2E8D5"
                    strokeWidth="1.5"
                  />
                  {showLayerExplode && (
                    <text x="16" y="32" fill="#D6B77E" fontSize="10" fontWeight="700">
                      [LỚP 03 - HẬU CẢNH &amp; GIẤY CAN TÁN SÁNG]
                    </text>
                  )}
                </g>

                {/* LỚP 02: Dãy núi Rừng Sáp Đen & Nhân vật Đăm Săn trên thanh trượt */}
                <g>
                  <path
                    d="M 0 265 L 95 168 L 175 225 L 265 148 L 365 232 L 445 178 L 500 220 L 500 310 L 0 310 Z"
                    fill="#38251C"
                    stroke="#A77B3D"
                    strokeWidth="1.5"
                  />

                  {/* Nhân vật giấy Đăm Săn di chuyển theo thanh trượt heroProgress */}
                  <g
                    transform={`translate(${40 + heroProgress * 3.2}, ${
                      232 - heroProgress * 0.45
                    })`}
                  >
                    {/* Thanh cài giấy bên dưới */}
                    <rect x="-4" y="18" width="8" height="45" fill="#D6B77E" fillOpacity="0.6" />
                    {/* Bóng nhân vật Đăm Săn cầm khiên & đao */}
                    <circle cx="0" cy="-14" r="8" fill="#F2E8D5" stroke="#7A2925" strokeWidth="2" />
                    <path d="M -8 -18 L 10 -26" stroke="#D6B77E" strokeWidth="2.5" />
                    <path d="M -10 -4 L 10 -4 L 6 18 L -6 18 Z" fill="#7A2925" stroke="#D6B77E" strokeWidth="1.5" />
                    <ellipse cx="12" cy="4" rx="5" ry="12" fill="#D6B77E" stroke="#2D211B" strokeWidth="1.2" />
                  </g>

                  {showLayerExplode && (
                    <text x="16" y="160" fill="#F2E8D5" fontSize="10" fontWeight="700">
                      [LỚP 02 - TRUNG CẢNH RỪNG SÁP ĐEN &amp; RÃNH TRƯỢT NHÂN VẬT]
                    </text>
                  )}
                </g>

                {/* LỚP 01: Tiền cảnh Nhà dài Ê-đê & Khung viền Thổ cẩm */}
                <g
                  transform={`translate(0, ${
                    showLayerExplode ? 10 : 0
                  })`}
                >
                  <path
                    d="M 22 272 L 78 192 L 134 272 Z"
                    fill="#241712"
                    stroke="#D6B77E"
                    strokeWidth="1.8"
                  />
                  <rect x="0" y="272" width="500" height="38" fill="#7A2925" stroke="#D6B77E" strokeWidth="1.5" />
                  <path
                    d="M 10 291 L 26 280 L 42 291 L 58 280 L 74 291 L 90 280 L 106 291 L 122 280 L 138 291 L 154 280 L 170 291 L 186 280 L 202 291 L 218 280 L 234 291 L 250 280 L 266 291 L 282 280 L 298 291 L 314 280 L 330 291 L 346 280 L 362 291 L 378 280 L 394 291 L 410 280 L 426 291 L 442 280 L 458 291 L 474 280 L 490 291"
                    fill="none"
                    stroke="#D6B77E"
                    strokeWidth="1.8"
                  />
                  {showLayerExplode && (
                    <text x="16" y="264" fill="#D6B77E" fontSize="10" fontWeight="700">
                      [LỚP 01 - TIỀN CẢNH NHÀ DÀI &amp; KHUNG HỘP THỔ CẨM]
                    </text>
                  )}
                </g>
              </svg>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-heritage-goldSoft">
              <span>
                Gợi ý thực hành: Kéo thanh trượt 1, 2, 3 để kiểm tra hiệu ứng xuyên sáng
              </span>
              <span className="font-mono shrink-0">Tỉ lệ hộp: 40×25×15cm</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React from "react";
import { ArtSubject } from "@/types/heritage";

interface HeritageArtworkProps {
  subject: ArtSubject;
  expectedFile?: string;
  caption?: string;
  className?: string;
  showFileBadge?: boolean;
}

const MUSEUM_IMAGE_MAP: Partial<Record<ArtSubject, string>> = {
  "hero-stage": "/images/cinema/scene-01-di-san.png",
  "tuong-huyen-duong": "/images/cinema/scene-03-sac-tuong.png",
  "huyen-duong-court": "/images/cinema/scene-07-huyen-duong.png",
  "epic-dam-san": "/images/cinema/scene-05-dam-san-steam.png",
  "dam-san-longhouse": "/images/cinema/scene-dam-san-nha-dai.png",
  "dam-san-sun-goddess": "/images/cinema/scene-dam-san-mat-troi.png",
  "exhibit-mask-set": "/images/cinema/scene-huyen-duong-tu-nhan-vat.png",
  "exhibit-storybox": "/images/cinema/scene-05-dam-san-steam.png",
  "exhibit-longhouse": "/images/cinema/scene-dam-san-nha-dai.png",
  "exhibit-infographic": "/images/cinema/scene-vi-dien-podcast.png",
  "exhibit-micro-acting": "/images/cinema/scene-07-huyen-duong.png",
  "exhibit-podcast": "/images/cinema/scene-dam-san-mat-troi.png",
};

/**
 * Hệ thống Bản khắc Kiến trúc & Tạo hình Di sản (Archival Architectural & Stage Plates)
 * Hiển thị ảnh nghệ thuật diorama bảo tàng cho 4 chủ đề chính, hoặc bản vẽ kỹ thuật SVG
 * chuẩn mực trên nền sơn mài trầm kết hợp nét khắc vàng cổ.
 */
export const HeritageArtwork: React.FC<HeritageArtworkProps> = ({
  subject,
  expectedFile,
  caption,
  className = "",
  showFileBadge = true,
}) => {
  const highResImage = MUSEUM_IMAGE_MAP[subject];

  if (highResImage) {
    return (
      <div
        className={`relative overflow-hidden bg-white text-heritage-ink select-none border-b border-heritage-crimson/20 ${className}`}
        role="img"
        aria-label={caption || `Tác phẩm minh họa di sản ${subject}`}
      >
        <img
          src={highResImage}
          alt={caption || `Tác phẩm minh họa chủ đề ${subject}`}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-heritage-ivoryLight/95 via-white/40 to-transparent"
        />
        {showFileBadge && (caption || expectedFile) && (
          <div className="absolute bottom-2.5 left-3 right-3 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white/92 backdrop-blur-sm px-3 py-1.5 text-[11px] text-heritage-crimson border border-heritage-crimson/25 shadow-sm">
            <span className="font-semibold tracking-wide truncate">
              {caption || "Tư liệu Diorama Bảo tàng số"}
            </span>
            {expectedFile && (
              <span className="font-mono text-[10px] text-heritage-woodDark/80">
                Gallery Plate
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-heritage-woodDark text-heritage-ivory select-none ${className}`}
      role="img"
      aria-label={caption || `Bản vẽ minh họa chủ đề ${subject}`}
    >
      <svg
        viewBox="0 0 800 500"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`bg-${subject}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6E1714" />
            <stop offset="50%" stopColor="#52100E" />
            <stop offset="100%" stopColor="#300807" />
          </linearGradient>
          <radialGradient id={`focus-${subject}`} cx="50%" cy="48%" r="55%">
            <stop offset="0%" stopColor="#A77B3D" stopOpacity="0.16" />
            <stop offset="65%" stopColor="#50372A" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#2D211B" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="gold-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F2E8D5" />
            <stop offset="45%" stopColor="#D6B77E" />
            <stop offset="100%" stopColor="#A77B3D" />
          </linearGradient>
          <linearGradient id="crimson-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8C2F2B" />
            <stop offset="100%" stopColor="#5A1C19" />
          </linearGradient>
          <linearGradient id="moss-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F6654" />
            <stop offset="100%" stopColor="#314034" />
          </linearGradient>
          <pattern
            id={`arch-grid-${subject}`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#A77B3D"
              strokeWidth="0.45"
              strokeOpacity="0.16"
            />
          </pattern>
        </defs>

        {/* Nền gỗ trầm & lưới tọa độ bản vẽ bảo tàng */}
        <rect width="800" height="500" fill={`url(#bg-${subject})`} />
        <rect width="800" height="500" fill={`url(#focus-${subject})`} />
        <rect width="800" height="500" fill={`url(#arch-grid-${subject})`} />

        {/* Trục đối xứng kỹ thuật mảnh (Architectural Axis Lines) */}
        <line x1="400" y1="24" x2="400" y2="476" stroke="#A77B3D" strokeWidth="0.6" strokeDasharray="4 6" strokeOpacity="0.35" />
        <line x1="24" y1="250" x2="776" y2="250" stroke="#A77B3D" strokeWidth="0.6" strokeDasharray="4 6" strokeOpacity="0.35" />

        {/* Khung viền đồng hồ sơ bảo tàng */}
        <rect
          x="20"
          y="20"
          width="760"
          height="460"
          fill="none"
          stroke="#A77B3D"
          strokeWidth="1.2"
          strokeOpacity="0.7"
        />
        <rect
          x="28"
          y="28"
          width="744"
          height="444"
          fill="none"
          stroke="#D6B77E"
          strokeWidth="0.6"
          strokeOpacity="0.4"
        />

        {/* Góc đóng dấu bản vẽ kỹ thuật */}
        <path
          d="M 20 48 L 48 48 L 48 20 M 780 48 L 752 48 L 752 20 M 20 452 L 48 452 L 48 480 M 780 452 L 752 452 L 752 480"
          fill="none"
          stroke="#D6B77E"
          strokeWidth="1.5"
          strokeOpacity="0.75"
        />

        {/* 1. HERO STAGE: Bản vẽ mặt đứng Thủy Đình & Vòng tròn Di sản */}
        {subject === "hero-stage" && (
          <g>
            {/* Vòng tròn đồng tâm kiến trúc */}
            <circle cx="400" cy="240" r="192" fill="none" stroke="#A77B3D" strokeWidth="1" strokeDasharray="3 5" strokeOpacity="0.65" />
            <circle cx="400" cy="240" r="168" fill="none" stroke="#D6B77E" strokeWidth="1.2" strokeOpacity="0.5" />
            <circle cx="400" cy="240" r="142" fill="#7A2925" fillOpacity="0.24" stroke="#A77B3D" strokeWidth="1" />

            {/* Họa tiết tia mặt trời trống đồng mảnh */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={deg}
                x1={400 + 142 * Math.cos((deg * Math.PI) / 180)}
                y1={240 + 142 * Math.sin((deg * Math.PI) / 180)}
                x2={400 + 168 * Math.cos((deg * Math.PI) / 180)}
                y2={240 + 168 * Math.sin((deg * Math.PI) / 180)}
                stroke="#D6B77E"
                strokeWidth="0.9"
                strokeOpacity="0.45"
              />
            ))}

            {/* Mái đao Thủy Đình 2 tầng với đầu đao cong truyền thống */}
            <path
              d="M 165 162 Q 210 182 260 154 L 400 112 L 540 154 Q 590 182 635 162 Q 595 194 550 186 L 250 186 Q 205 194 165 162 Z"
              fill="url(#gold-stroke)"
              stroke="#F2E8D5"
              strokeWidth="1"
            />
            <path
              d="M 210 198 Q 245 212 285 192 L 400 162 L 515 192 Q 555 212 590 198 Q 560 222 525 216 L 275 216 Q 240 222 210 198 Z"
              fill="url(#crimson-fill)"
              stroke="#D6B77E"
              strokeWidth="1.2"
            />

            {/* Hệ cột gỗ đình làng & bức mành tre */}
            <rect x="278" y="216" width="244" height="132" fill="#231914" stroke="#A77B3D" strokeWidth="1" />
            {[298, 318, 338, 358, 378, 398, 418, 438, 458, 478, 498].map((x) => (
              <line key={x} x1={x} y1="216" x2={x} y2="348" stroke="#D6B77E" strokeWidth="0.7" strokeOpacity="0.35" />
            ))}
            {[274, 354, 434, 514].map((cx) => (
              <g key={cx}>
                <rect x={cx} y="216" width="12" height="136" fill="url(#crimson-fill)" stroke="#D6B77E" strokeWidth="1" />
                <rect x={cx - 3} y="216" width="18" height="6" fill="#D6B77E" />
                <rect x={cx - 3} y="346" width="18" height="6" fill="#D6B77E" />
              </g>
            ))}

            {/* Bên trái: Cồng chiêng & Hoa văn Sử thi Đăm Săn */}
            <g transform="translate(155, 255)">
              <circle cx="0" cy="0" r="56" fill="url(#gold-stroke)" stroke="#F2E8D5" strokeWidth="1.6" />
              <circle cx="0" cy="0" r="24" fill="url(#crimson-fill)" stroke="#D6B77E" strokeWidth="1.4" />
              <circle cx="0" cy="0" r="8" fill="#D6B77E" />
            </g>

            {/* Bên phải: Bản khắc đường nét ước lệ Mặt nạ Tuồng cổ (Không dùng nét mặt hoạt hình) */}
            <g transform="translate(645, 255)">
              <rect x="-54" y="-76" width="108" height="148" rx="8" fill="#231915" stroke="#A77B3D" strokeWidth="1.2" />
              {/* Mão quan chạm khắc hình học */}
              <path d="M -34 -38 L 0 -64 L 34 -38 Z" fill="url(#crimson-fill)" stroke="#D6B77E" strokeWidth="1.2" />
              <path d="M -38 -38 L 38 -38" stroke="#D6B77E" strokeWidth="2" />
              {/* Khuôn mặt chia trục nhân trắc học */}
              <path
                d="M -32 -32 C -34 12, -24 44, 0 52 C 24 44, 34 12, 32 -32 Z"
                fill="#F2E8D5"
                stroke="#A77B3D"
                strokeWidth="1.8"
              />
              <line x1="0" y1="-36" x2="0" y2="52" stroke="#A77B3D" strokeWidth="0.7" strokeDasharray="2 2" />
              {/* Họa tiết mày kiếm & hốc mắt tuồng cổ */}
              <path d="M -24 -12 C -16 -22, -6 -20, -4 -12" fill="none" stroke="#2D211B" strokeWidth="2.4" />
              <path d="M 4 -12 C 6 -20, 16 -22, 24 -12" fill="none" stroke="#2D211B" strokeWidth="2.4" />
              <path d="M -20 -6 L -8 -6 L -14 -2 Z M 8 -6 L 20 -6 L 14 -2 Z" fill="#7A2925" />
              {/* Đường vân má ước lệ & chòm râu 3 nét khắc */}
              <path d="M -24 6 C -18 14, -10 14, -6 8" fill="none" stroke="#7A2925" strokeWidth="1.8" />
              <path d="M 6 8 C 10 14, 18 14, 24 6" fill="none" stroke="#7A2925" strokeWidth="1.8" />
              <path d="M -14 26 Q 0 20 14 26 M -8 34 L -12 46 M 0 32 L 0 48 M 8 34 L 12 46" fill="none" stroke="#2D211B" strokeWidth="1.6" />
            </g>

            {/* Nền bậc thềm & sóng nước kỷ hà */}
            <line x1="120" y1="354" x2="680" y2="354" stroke="#D6B77E" strokeWidth="1.5" />
            <path
              d="M 150 382 Q 212 368 275 382 T 400 382 T 525 382 T 650 382"
              fill="none"
              stroke="#D6B77E"
              strokeWidth="1.6"
              strokeOpacity="0.85"
            />
            <path
              d="M 180 402 Q 242 390 305 402 T 430 402 T 555 402 T 620 402"
              fill="none"
              stroke="#A77B3D"
              strokeWidth="1.1"
              strokeOpacity="0.65"
            />
          </g>
        )}

        {/* 3. SẮC TUỒNG & BỘ 4 BẢN KHẮC MẶT NẠ ƯỚC LỆ HUYỆN ĐƯỜNG */}
        {(subject === "tuong-huyen-duong" || subject === "exhibit-mask-set") && (
          <g>
            {[
              {
                x: 155,
                code: "MÃ 01",
                label: "TRI HUYỆN",
                role: "Quan đầu huyện",
                faceColor: "#F2E8D5",
                accent: "#7A2925",
                crownType: "quan",
              },
              {
                x: 318,
                code: "MÃ 02",
                label: "ĐỀ LẠI",
                role: "Thư lại nha môn",
                faceColor: "#E5DFD3",
                accent: "#435647",
                crownType: "de-lai",
              },
              {
                x: 482,
                code: "MÃ 03",
                label: "LÍNH LỆ",
                role: "Tay sai công đường",
                faceColor: "#D6B77E",
                accent: "#7A2925",
                crownType: "linh",
              },
              {
                x: 645,
                code: "MÃ 04",
                label: "TRÙM SÒ",
                role: "Trọc phú kiện quan",
                faceColor: "#E6D7BC",
                accent: "#50372A",
                crownType: "trum",
              },
            ].map((item, idx) => (
              <g key={idx} transform={`translate(${item.x}, 232)`}>
                {/* Khung thẻ hồ sơ nhân trắc học */}
                <rect
                  x="-66"
                  y="-135"
                  width="132"
                  height="248"
                  rx="8"
                  fill="#211713"
                  stroke="#A77B3D"
                  strokeWidth="1.5"
                />
                <rect
                  x="-60"
                  y="-129"
                  width="120"
                  height="236"
                  rx="5"
                  fill="none"
                  stroke="#D6B77E"
                  strokeWidth="0.6"
                  strokeOpacity="0.45"
                />

                {/* Mã hồ sơ góc trên */}
                <text x="0" y="-110" textAnchor="middle" fill="#D6B77E" fontSize="9" fontWeight="600" letterSpacing="1.5">
                  {item.code} • ƯỚC LỆ
                </text>

                {/* Mão đội đầu theo chức sắc */}
                {item.crownType === "quan" && (
                  <g>
                    <path d="M -32 -54 L 0 -92 L 32 -54 Z" fill={item.accent} stroke="#D6B77E" strokeWidth="1.4" />
                    <line x1="-48" y1="-58" x2="48" y2="-58" stroke="#D6B77E" strokeWidth="2.5" />
                  </g>
                )}
                {item.crownType === "de-lai" && (
                  <path d="M -30 -54 L -22 -86 L 22 -86 L 30 -54 Z" fill={item.accent} stroke="#D6B77E" strokeWidth="1.4" />
                )}
                {item.crownType === "linh" && (
                  <path d="M -38 -54 L 0 -84 L 38 -54 Z" fill={item.accent} stroke="#D6B77E" strokeWidth="1.4" />
                )}
                {item.crownType === "trum" && (
                  <path d="M -32 -54 Q 0 -86 32 -54 Z" fill={item.accent} stroke="#D6B77E" strokeWidth="1.4" />
                )}

                {/* Khuôn mặt mặt nạ với trục tỉ lệ kỹ thuật */}
                <path
                  d="M -34 -50 C -36 0, -26 34, 0 44 C 26 34, 36 0, 34 -50 Z"
                  fill={item.faceColor}
                  stroke={item.accent}
                  strokeWidth="2.2"
                />
                <line x1="0" y1="-54" x2="0" y2="46" stroke="#A77B3D" strokeWidth="0.7" strokeDasharray="3 2" />
                <line x1="-34" y1="-16" x2="34" y2="-16" stroke="#A77B3D" strokeWidth="0.7" strokeDasharray="3 2" />

                {/* Họa tiết nét vẽ mặt tuồng cổ điển (stylized theatrical mask lines) */}
                <path
                  d="M -25 -22 C -17 -32, -7 -30, -4 -22 M 4 -22 C 7 -30, 17 -32, 25 -22"
                  fill="none"
                  stroke="#2D211B"
                  strokeWidth="2.4"
                />
                <polygon points="-20,-14 -8,-14 -14,-9" fill={item.accent} />
                <polygon points="8,-14 20,-14 14,-9" fill={item.accent} />

                {/* Vệt màu ước lệ hai bên gò má */}
                <path
                  d="M -26 -2 C -20 8, -12 8, -7 0 M 7 0 C 12 8, 20 8, 26 -2"
                  fill="none"
                  stroke={item.accent}
                  strokeWidth="2"
                />
                <path
                  d="M -16 18 L 0 13 L 16 18"
                  fill="none"
                  stroke="#2D211B"
                  strokeWidth="2"
                />

                {/* Bảng đồng khắc tên nhân vật */}
                <rect x="-52" y="58" width="104" height="24" rx="4" fill={item.accent} stroke="#D6B77E" strokeWidth="1" />
                <text
                  x="0"
                  y="74"
                  textAnchor="middle"
                  fill="#F2E8D5"
                  fontSize="10.5"
                  fontWeight="700"
                  letterSpacing="1.2"
                >
                  {item.label}
                </text>
                <text
                  x="0"
                  y="98"
                  textAnchor="middle"
                  fill="#D6B77E"
                  fontSize="9"
                  opacity="0.85"
                >
                  {item.role}
                </text>
              </g>
            ))}
          </g>
        )}

        {/* 5. SỬ THI ĐĂM SĂN: Bản vẽ Phối cảnh 3 Lớp Hộp kể chuyện (Diorama) */}
        {(subject === "epic-dam-san" || subject === "exhibit-storybox") && (
          <g>
            {/* Khung hộp gỗ Diorama */}
            <rect x="115" y="72" width="570" height="352" rx="8" fill="#1D1410" stroke="#D6B77E" strokeWidth="2.5" />
            <rect x="127" y="84" width="546" height="328" fill="none" stroke="#A77B3D" strokeWidth="1" strokeDasharray="4 4" />

            {/* Lớp 03 (Hậu cảnh): Vầng Mặt Trời & Họa tiết Cồng Chiêng Tây Nguyên */}
            <circle cx="485" cy="208" r="102" fill="none" stroke="#D6B77E" strokeWidth="1.2" strokeDasharray="3 4" />
            <circle cx="485" cy="208" r="78" fill="#A77B3D" fillOpacity="0.28" stroke="#D6B77E" strokeWidth="1.4" />
            <circle cx="485" cy="208" r="46" fill="url(#gold-stroke)" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={deg}
                x1="485"
                y1="208"
                x2={485 + 102 * Math.cos((deg * Math.PI) / 180)}
                y2={208 + 102 * Math.sin((deg * Math.PI) / 180)}
                stroke="#D6B77E"
                strokeWidth="1.1"
                strokeOpacity="0.5"
              />
            ))}

            {/* Lớp 02 (Trung cảnh): Dãy núi & Rừng Sáp Đen */}
            <path
              d="M 118 372 L 232 232 L 335 312 L 442 204 L 572 330 L 682 254 L 682 420 L 118 420 Z"
              fill="#463025"
              stroke="#D6B77E"
              strokeWidth="1.5"
            />

            {/* Lớp 01 (Tiền cảnh): Kiến trúc Nhà dài Ê-đê & Diềm thổ cẩm kỷ hà */}
            <path
              d="M 148 372 L 222 262 L 296 372 Z"
              fill="url(#crimson-fill)"
              stroke="#D6B77E"
              strokeWidth="1.8"
            />
            <rect x="118" y="382" width="564" height="40" fill="#7A2925" stroke="#D6B77E" strokeWidth="1.2" />
            <path
              d="M 130 402 L 146 390 L 162 402 L 178 390 L 194 402 L 210 390 L 226 402 L 242 390 L 258 402 L 274 390 L 290 402 L 306 390 L 322 402 L 338 390 L 354 402 L 370 390 L 386 402 L 402 390 L 418 402 L 434 390 L 450 402 L 466 390 L 482 402 L 498 390 L 514 402 L 530 390 L 546 402 L 562 390 L 578 402 L 594 390 L 610 402 L 626 390 L 642 402 L 658 390"
              fill="none"
              stroke="#D6B77E"
              strokeWidth="1.8"
            />
          </g>
        )}

        {/* 6. VIDEO VI DIỄN */}
        {subject === "exhibit-micro-acting" && (
          <g>
            <rect x="130" y="90" width="540" height="316" rx="8" fill="#211713" stroke="#D6B77E" strokeWidth="2" />
            <line x1="130" y1="138" x2="670" y2="138" stroke="#A77B3D" strokeWidth="1.2" />
            <circle cx="400" cy="262" r="48" fill="url(#crimson-fill)" stroke="#D6B77E" strokeWidth="2" />
            <polygon points="390,242 390,282 424,262" fill="#F2E8D5" />
            <text x="400" y="120" textAnchor="middle" fill="#D6B77E" fontSize="12.5" fontWeight="700" letterSpacing="2">
              HỒ SƠ GHI HÌNH VI DIỄN SÂN KHẤU HÓA
            </text>
          </g>
        )}

        {/* 7. INFOGRAPHIC */}
        {subject === "exhibit-infographic" && (
          <g>
            <rect x="140" y="84" width="520" height="330" rx="8" fill="#F2E8D5" stroke="#A77B3D" strokeWidth="2.5" />
            <rect x="174" y="118" width="200" height="72" rx="4" fill="#7A2925" />
            <rect x="426" y="118" width="200" height="72" rx="4" fill="#435647" />
            <rect x="174" y="230" width="452" height="144" rx="4" fill="#E6D7BC" stroke="#50372A" strokeWidth="1.4" />
            <line x1="274" y1="190" x2="274" y2="230" stroke="#2D211B" strokeWidth="2" />
            <line x1="526" y1="190" x2="526" y2="230" stroke="#2D211B" strokeWidth="2" />
            <line x1="208" y1="270" x2="592" y2="270" stroke="#50372A" strokeWidth="2" />
            <line x1="208" y1="304" x2="542" y2="304" stroke="#50372A" strokeWidth="2" />
            <line x1="208" y1="338" x2="482" y2="338" stroke="#50372A" strokeWidth="2" />
          </g>
        )}

        {/* 8. PODCAST */}
        {subject === "exhibit-podcast" && (
          <g>
            <circle cx="275" cy="250" r="92" fill="url(#gold-stroke)" stroke="#F2E8D5" strokeWidth="2" />
            <circle cx="275" cy="250" r="62" fill="none" stroke="#2D211B" strokeWidth="1.2" strokeDasharray="5 4" />
            <circle cx="275" cy="250" r="34" fill="url(#crimson-fill)" stroke="#D6B77E" strokeWidth="2.5" />
            {[420, 448, 476, 504, 532, 560, 588, 616].map((xBar, i) => {
              const heights = [68, 124, 172, 108, 152, 92, 134, 64];
              const h = heights[i % heights.length];
              return (
                <rect
                  key={xBar}
                  x={xBar}
                  y={250 - h / 2}
                  width="12"
                  height={h}
                  rx="6"
                  fill="#D6B77E"
                />
              );
            })}
          </g>
        )}
      </svg>

      {/* Bảng đồng chú thích hồ sơ ảnh tư liệu ở góc dưới */}
      {showFileBadge && expectedFile && (
        <div className="absolute bottom-2.5 left-3 right-3 flex flex-wrap items-center justify-between gap-2 rounded bg-heritage-woodDark/90 px-3 py-1 text-[11px] text-heritage-ivory/90 border border-heritage-goldAntique/40">
          <span className="font-medium text-heritage-goldSoft tracking-wide">
            Bản vẽ định hướng trưng bày
          </span>
          <code className="font-mono text-[11px] text-heritage-ivory/80">
            Nguồn ảnh cập nhật: {expectedFile}
          </code>
        </div>
      )}
    </div>
  );
};

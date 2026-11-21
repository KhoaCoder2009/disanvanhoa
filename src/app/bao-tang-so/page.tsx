import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { TiltSpotlightCard } from "@/components/effects/TiltSpotlightCard";
import { HeritageArtwork } from "@/components/HeritageArtwork";
import { MUSEUM_SECTION_META, MUSEUM_WINGS } from "@/data/museumData";
import { ArrowRight, BookMarked, Sparkles } from "lucide-react";

export default function BaoTangSoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-heritage-ivory text-heritage-ink">
      <Header />

      <main className="flex-1">
        <PageBanner
          badge="KHU VỰC 01 • DIGITAL MUSEUM"
          title="BẢO TÀNG SỐ DI SẢN VĂN HỌC"
          subtitle={MUSEUM_SECTION_META.description}
          breadcrumbs={[{ label: "Bảo tàng số" }]}
          accentVariant="hero"
          actions={
            <>
              <Link
                href="/bao-tang-so/hon-cheo"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-5 py-3 text-sm font-semibold text-heritage-ivory border border-heritage-goldSoft/60 hover:bg-heritage-goldAntique hover:text-heritage-woodDark transition-colors"
              >
                <span>Phòng 01: Hồn Chèo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/bao-tang-so/sac-tuong"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-woodLight px-5 py-3 text-sm font-semibold text-heritage-goldSoft border border-heritage-goldAntique hover:bg-heritage-goldSoft hover:text-heritage-woodDark transition-colors"
              >
                <span>Phòng 02: Sắc Tuồng</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/bao-tang-so/hon-nuoc"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-woodLight px-5 py-3 text-sm font-semibold text-heritage-goldSoft border border-heritage-goldAntique hover:bg-heritage-goldSoft hover:text-heritage-woodDark transition-colors"
              >
                <span>Phòng 03: Hồn Nước</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          }
        />

        {/* Danh sách 3 Không gian Phòng trưng bày chuyên sâu */}
        <section className="py-16 sm:py-20 bg-heritage-ivory border-b border-heritage-goldAntique/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            {MUSEUM_WINGS.map((wing, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <TiltSpotlightCard
                  key={wing.id}
                  className="rounded-2xl bg-heritage-ivoryLight border border-heritage-goldAntique/50 shadow-museum overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Cột Hình ảnh */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <Link href={`/bao-tang-so/${wing.id}`} className="block h-full">
                        <HeritageArtwork
                          subject={wing.artSubject}
                          expectedFile={wing.expectedAssetFile}
                          caption={wing.title}
                          className="h-full min-h-[280px] w-full"
                        />
                      </Link>
                    </div>

                    {/* Cột Nội dung chi tiết */}
                    <div
                      className={`lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="rounded-md bg-heritage-woodDark px-3 py-1 text-xs font-semibold text-heritage-goldSoft">
                            {wing.gradeReference}
                          </span>
                          <span className="text-xs font-semibold text-heritage-crimson">
                            {wing.workReference}
                          </span>
                        </div>

                        <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-heritage-woodDark">
                          {wing.title} — {wing.subtitle}
                        </h2>

                        <p className="mt-3 text-sm sm:text-base text-heritage-ink leading-relaxed">
                          {wing.detailContent.culturalContext}
                        </p>

                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                          <div className="rounded-xl bg-heritage-ivory p-3.5 border border-heritage-goldAntique/40">
                            <div className="flex items-center gap-1.5 font-serif font-bold text-heritage-crimson">
                              <BookMarked className="h-4 w-4" />
                              <span>Trọng tâm Ngữ văn 10</span>
                            </div>
                            <p className="mt-1.5 text-heritage-ink line-clamp-3">
                              {wing.detailContent.literaryExcerptInfo}
                            </p>
                          </div>

                          <div className="rounded-xl bg-heritage-ivory p-3.5 border border-heritage-goldAntique/40">
                            <div className="flex items-center gap-1.5 font-serif font-bold text-heritage-moss">
                              <Sparkles className="h-4 w-4" />
                              <span>Định hướng STEAM</span>
                            </div>
                            <p className="mt-1.5 text-heritage-ink line-clamp-3">
                              {wing.detailContent.steamConnection}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-heritage-goldAntique/30 flex flex-wrap items-center justify-between gap-3">
                        <Link
                          href={`/bao-tang-so/${wing.id}`}
                          className="inline-flex items-center gap-2 rounded-xl bg-heritage-woodDark px-6 py-3 text-sm font-semibold text-heritage-goldSoft border border-heritage-goldAntique/50 hover:bg-heritage-crimson hover:text-heritage-ivory transition-colors"
                        >
                          <span>VÀO PHÒNG TRƯNG BÀY: {wing.title}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                          href="/chu-de-hoc-tap"
                          className="text-xs sm:text-sm font-semibold text-heritage-woodDark hover:text-heritage-crimson underline"
                        >
                          Xem dự án học tập liên quan →
                        </Link>
                      </div>
                    </div>
                  </div>
                </TiltSpotlightCard>
              );
            })}
          </div>
        </section>

        {/* Bảng đối chiếu 3 loại hình Sân khấu dân gian Việt Nam */}
        <section className="py-16 bg-heritage-ivoryLight border-b border-heritage-goldAntique/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heritage-woodDark">
                BẢNG ĐỐI CHIẾU ĐẶC TRƯNG SÂN KHẤU DÂN GIAN (BÀI 5 – NGỮ VĂN 10)
              </h2>
              <p className="mt-2 text-sm sm:text-base text-heritage-ink">
                Tư liệu hệ thống hóa kiến thức giúp học sinh so sánh không gian diễn xướng, nghệ thuật tạo hình và ngôn ngữ ước lệ trước khi bước vào Xưởng STEAM.
              </p>
            </div>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-heritage-goldAntique/50 shadow-museum">
              <table className="w-full text-left border-collapse bg-heritage-ivory text-xs sm:text-sm">
                <thead>
                  <tr className="bg-heritage-woodDark text-heritage-goldSoft font-serif text-sm sm:text-base">
                    <th className="p-4 border-b border-heritage-goldAntique/40">Tiêu chí đối chiếu</th>
                    <th className="p-4 border-b border-heritage-goldAntique/40">Nghệ thuật Chèo (Hồn Chèo)</th>
                    <th className="p-4 border-b border-heritage-goldAntique/40">Nghệ thuật Tuồng (Sắc Tuồng)</th>
                    <th className="p-4 border-b border-heritage-goldAntique/40">Múa rối nước (Hồn Nước)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-heritage-goldAntique/30">
                  <tr>
                    <td className="p-4 font-bold text-heritage-woodDark bg-heritage-ivoryLight">Văn bản trọng tâm SGK</td>
                    <td className="p-4">Xúy Vân giả dại (Chèo cổ Kim Nham)</td>
                    <td className="p-4">Huyện đường (Tuồng đồ Nghêu, Sò, Ốc, Hến)</td>
                    <td className="p-4">Múa rối nước – hiện đại soi bóng tiền nhân</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-heritage-woodDark bg-heritage-ivoryLight">Không gian biểu diễn</td>
                    <td className="p-4">Chiếu chèo trải giữa sân đình, khán giả vây quanh 3 mặt, tương tác qua tiếng đế.</td>
                    <td className="p-4">Sân khấu công đường hoặc đình làng với đạo cụ tối giản, lấy diễn viên làm trung tâm.</td>
                    <td className="p-4">Thủy đình (nhà rối) dựng giữa mặt hồ/ao làng; buồng trò ẩn sau mành tre.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-heritage-woodDark bg-heritage-ivoryLight">Đặc trưng tạo hình &amp; Ước lệ</td>
                    <td className="p-4">Trang phục dân gian cách điệu, đạo cụ chiếc quạt biểu đạt tâm trạng đa chiều.</td>
                    <td className="p-4">Mặt nạ hóa trang mã màu đậm nét (trắng mốc, đỏ, xanh xám, râu ba chòm) quy ước rõ tính cách.</td>
                    <td className="p-4">Quân rối tạc bằng gỗ sung nhẹ, phủ sơn ta chống thấm với tạo hình tươi vui, hóm hỉnh.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-heritage-woodDark bg-heritage-ivoryLight">Ứng dụng thực hành STEAM</td>
                    <td className="p-4">Thiết kế Infographic bản đồ làn điệu &amp; tâm lý nhân vật Xúy Vân.</td>
                    <td className="p-4">Thiết kế, chế tạo bộ chân dung mặt nạ 4 nhân vật bằng bìa cứng và vi diễn.</td>
                    <td className="p-4">Mô hình kiến trúc Thủy đình thu nhỏ và khảo sát cơ cấu đòn bẩy, dây kéo.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

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
                href="/bao-tang-so/sac-tuong-huyen-duong"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-4 py-2.5 text-sm font-semibold text-white hover:bg-heritage-woodDark transition-colors"
              >
                <span>Phòng 01: Sắc Tuồng Huyện đường</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/bao-tang-so/tu-dai-nhan-vat"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-woodDark px-4 py-2.5 text-sm font-semibold text-heritage-goldSoft hover:bg-heritage-crimson transition-colors"
              >
                <span>Phòng 02: Bốn nhân vật</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/bao-tang-so/khong-gian-dam-san"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-emerald px-4 py-2.5 text-sm font-semibold text-white hover:bg-heritage-amber transition-colors"
              >
                <span>Phòng 03: Sử thi Đăm Săn</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/bao-tang-so/hanh-trinh-mat-troi"
                className="inline-flex items-center gap-2 rounded-xl bg-heritage-amber px-4 py-2.5 text-sm font-semibold text-white hover:bg-heritage-bronze transition-colors"
              >
                <span>Phòng 04: Nữ thần Mặt Trời</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          }
        />

        {/* Danh sách Không gian Phòng trưng bày chuyên sâu */}
        <section className="py-12 sm:py-16 lg:py-20 bg-heritage-ivory border-b border-heritage-goldAntique/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
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
                          className="h-full min-h-[220px] sm:min-h-[280px] w-full"
                        />
                      </Link>
                    </div>

                    {/* Cột Nội dung chi tiết */}
                    <div
                      className={`lg:col-span-7 p-4 sm:p-6 lg:p-8 flex flex-col justify-between ${
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

                        <h2 className="mt-3 font-serif text-xl sm:text-3xl font-bold text-heritage-woodDark">
                          {wing.title} — {wing.subtitle}
                        </h2>

                        <p className="mt-3 text-sm sm:text-base text-heritage-ink leading-relaxed">
                          {wing.detailContent.culturalContext}
                        </p>

                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                          <div className="rounded-xl bg-heritage-ivory p-3.5 border border-heritage-goldAntique/40">
                            <div className="flex items-center gap-1.5 font-serif font-bold text-heritage-crimson">
                              <BookMarked className="h-4 w-4 shrink-0" />
                              <span>Trọng tâm Ngữ văn 10</span>
                            </div>
                            <p className="mt-1.5 text-heritage-ink line-clamp-3">
                              {wing.detailContent.literaryExcerptInfo}
                            </p>
                          </div>

                          <div className="rounded-xl bg-heritage-ivory p-3.5 border border-heritage-goldAntique/40">
                            <div className="flex items-center gap-1.5 font-serif font-bold text-heritage-moss">
                              <Sparkles className="h-4 w-4 shrink-0" />
                              <span>Định hướng STEAM</span>
                            </div>
                            <p className="mt-1.5 text-heritage-ink line-clamp-3">
                              {wing.detailContent.steamConnection}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-heritage-goldAntique/30 flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-3">
                        <Link
                          href={`/bao-tang-so/${wing.id}`}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-heritage-woodDark px-6 py-3 text-sm font-semibold text-heritage-goldSoft border border-heritage-goldAntique/50 hover:bg-heritage-crimson hover:text-heritage-ivory transition-colors"
                        >
                          <span>VÀO PHÒNG TRƯNG BÀY: {wing.title}</span>
                          <ArrowRight className="h-4 w-4 shrink-0" />
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

        {/* Bảng đối chiếu Song hành Hai Dự Án Trọng Tâm (Huyện đường & Sử thi Đăm Săn) */}
        <section className="py-12 sm:py-16 bg-heritage-ivoryLight border-b border-heritage-goldAntique/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-serif text-xl sm:text-3xl font-bold text-heritage-woodDark">
                BẢNG ĐỐI CHIẾU HAI DỰ ÁN: TUỒNG HUYỆN ĐƯỜNG &amp; SỬ THI ĐĂM SĂN
              </h2>
              <p className="mt-2 text-sm sm:text-base text-heritage-ink">
                Tư liệu hệ thống hóa giúp học sinh đối chiếu đặc trưng thể loại, không gian văn hóa, ngôn ngữ tạo hình và sản phẩm chế tác tại Xưởng STEAM.
              </p>
            </div>

            {/* Thẻ xếp dọc gọn gàng trên điện thoại */}
            <div className="mt-6 space-y-4 md:hidden">
              {[
                {
                  criterion: "Văn bản trọng tâm SGK",
                  huyenDuong: "Huyện đường (Trích vở tuồng đồ Nghêu, Sò, Ốc, Hến)",
                  damSan: "Đăm Săn đi bắt Nữ thần Mặt Trời (Sử thi Ê-đê Tây Nguyên)",
                },
                {
                  criterion: "Không gian văn hóa & diễn xướng",
                  huyenDuong:
                    "Sân khấu công đường lấy diễn viên làm trung tâm với đối đáp trào phúng và nói lối.",
                  damSan:
                    "Không gian nhà dài Tây Nguyên, bếp lửa cộng đồng, tiếng cồng chiêng và nghệ thuật kể khan (Klei Khan).",
                },
                {
                  criterion: "Đặc trưng tạo hình & Mã màu",
                  huyenDuong:
                    "Mặt nạ ước lệ bộ tứ Tri huyện, Đề lại, Lính lệ, Trùm Sò (trắng mốc, đỏ son, xanh xám, vàng sậm).",
                  damSan:
                    "Bóng cắt đa tầng (nhà dài Ê-đê, rừng Sáp Đen, vầng Mặt Trời rực sáng) phối hoa văn thổ cẩm đỏ – đen – vàng.",
                },
                {
                  criterion: "Sản phẩm thực hành STEAM",
                  huyenDuong:
                    "Bộ chân dung mặt nạ 3D bằng bìa cứng nhiều lớp, thẻ giải mã và video vi diễn 3–5 phút.",
                  damSan:
                    "Sa bàn Hộp kể chuyện 3 lớp (Storybox Diorama) dùng giấy can tán sáng LED ấm, thanh trượt cơ học và Podcast QR.",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white p-4 border border-heritage-crimson/25 shadow-museum space-y-3"
                >
                  <h3 className="font-serif text-base font-bold text-heritage-woodDark border-b border-heritage-crimson/15 pb-2">
                    {row.criterion}
                  </h3>
                  <div className="rounded-xl bg-heritage-ivoryLight p-3 border-l-4 border-heritage-crimson">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-heritage-crimson">
                      Dự án 01: Tuồng đồ Huyện đường
                    </span>
                    <p className="mt-1 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                      {row.huyenDuong}
                    </p>
                  </div>
                  <div className="rounded-xl bg-heritage-emeraldSoft/45 p-3 border-l-4 border-heritage-emerald">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-heritage-emerald">
                      Dự án 02: Sử thi Đăm Săn
                    </span>
                    <p className="mt-1 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                      {row.damSan}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 hidden md:block overflow-x-auto rounded-2xl border border-heritage-crimson/30 shadow-museum">
              <table className="w-full text-left border-collapse bg-white text-xs sm:text-sm">
                <thead>
                  <tr className="bg-heritage-woodDark text-heritage-goldSoft font-serif text-sm sm:text-base">
                    <th className="p-4 border-b border-heritage-goldAntique/40">Tiêu chí đối chiếu</th>
                    <th className="p-4 border-b border-heritage-goldAntique/40 bg-heritage-crimson text-white">
                      Dự án 01: Tuồng đồ Huyện đường
                    </th>
                    <th className="p-4 border-b border-heritage-goldAntique/40 bg-heritage-emerald text-white">
                      Dự án 02: Sử thi Đăm Săn
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-heritage-crimson/15">
                  <tr>
                    <td className="p-4 font-bold text-heritage-woodDark bg-heritage-ivoryLight">Văn bản trọng tâm SGK</td>
                    <td className="p-4">Huyện đường (Trích vở tuồng đồ Nghêu, Sò, Ốc, Hến)</td>
                    <td className="p-4">Đăm Săn đi bắt Nữ thần Mặt Trời (Sử thi Ê-đê Tây Nguyên)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-heritage-woodDark bg-heritage-ivoryLight">Không gian văn hóa &amp; diễn xướng</td>
                    <td className="p-4">Sân khấu công đường lấy diễn viên làm trung tâm với đối đáp trào phúng và nói lối.</td>
                    <td className="p-4">Không gian nhà dài Tây Nguyên, bếp lửa cộng đồng, tiếng cồng chiêng và nghệ thuật kể khan (Klei Khan).</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-heritage-woodDark bg-heritage-ivoryLight">Đặc trưng tạo hình &amp; Mã màu</td>
                    <td className="p-4">Mặt nạ ước lệ bộ tứ Tri huyện, Đề lại, Lính lệ, Trùm Sò (trắng mốc, đỏ son, xanh xám, vàng sậm).</td>
                    <td className="p-4">Bóng cắt đa tầng (nhà dài Ê-đê, rừng Sáp Đen, vầng Mặt Trời rực sáng) phối hoa văn thổ cẩm đỏ – đen – vàng.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-heritage-woodDark bg-heritage-ivoryLight">Sản phẩm thực hành STEAM</td>
                    <td className="p-4">Bộ chân dung mặt nạ 3D bằng bìa cứng nhiều lớp, thẻ giải mã và video vi diễn 3–5 phút.</td>
                    <td className="p-4">Sa bàn Hộp kể chuyện 3 lớp (Storybox Diorama) dùng giấy can tán sáng LED ấm, thanh trượt cơ học và Podcast QR.</td>
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

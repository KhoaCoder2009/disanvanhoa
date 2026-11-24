import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ScrollVisualCinema } from "@/components/ScrollVisualCinema";
import { BAO_TANG_SO_CINEMA } from "@/data/pageCinemaData";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { TiltSpotlightCard } from "@/components/effects/TiltSpotlightCard";
import { HeritageArtwork } from "@/components/HeritageArtwork";
import { MUSEUM_WINGS } from "@/data/museumData";
import { ArrowRight, BookMarked, Sparkles } from "lucide-react";

export default function BaoTangSoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-heritage-ivory text-heritage-ink">
      <Header />

      <main className="flex-1">
        <ScrollVisualCinema
          id="trinh-chieu-bao-tang"
          scenes={BAO_TANG_SO_CINEMA}
          skipHref="#noi-dung-bao-tang"
          breadcrumbs={[{ label: "Bảo tàng số" }]}
          ariaLabel="Trình chiếu Bảo tàng số Di sản Văn học"
        />

        {/* Danh sách Không gian Phòng trưng bày chuyên sâu */}
        <section
          id="noi-dung-bao-tang"
          className="py-12 sm:py-16 lg:py-20 bg-heritage-ivory border-b border-heritage-goldAntique/30"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
            {/* Thanh chọn nhanh 4 phòng trưng bày */}
            <div className="flex flex-wrap items-center gap-2.5">
              {MUSEUM_WINGS.map((w, i) => (
                <Link
                  key={w.id}
                  href={`/bao-tang-so/${w.id}`}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-colors ${
                    i % 2 === 0
                      ? "bg-heritage-crimson text-white hover:bg-heritage-woodDark"
                      : "bg-white text-heritage-crimson border border-heritage-crimson/35 hover:bg-heritage-crimson hover:text-white"
                  }`}
                >
                  <span>
                    {w.code}: {w.title}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
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
                      <HeritageArtwork
                        subject={wing.artSubject}
                        expectedFile={wing.expectedAssetFile}
                        caption={wing.title}
                        linkHref={`/bao-tang-so/${wing.id}`}
                        linkLabel={`${wing.code}: ${wing.title}`}
                        className="h-full min-h-[220px] sm:min-h-[280px] w-full"
                      />
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

        {/* Bảng tổng hợp 4 Tổ & 4 Nhân vật Dự án Tuồng đồ Huyện đường */}
        <section className="py-12 sm:py-16 bg-heritage-ivoryLight border-b border-heritage-goldAntique/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-serif text-xl sm:text-3xl font-bold text-heritage-woodDark">
                BẢNG HỆ THỐNG TỨ ĐẠI NHÂN VẬT DỰ ÁN HUYỆN ĐƯỜNG (LỚP 10.3)
              </h2>
              <p className="mt-2 text-sm sm:text-base text-heritage-ink">
                Tổng hợp mã màu ước lệ, đặc trưng tạo hình và sản phẩm chế tác thực tế của 4 Tổ tại Trường THPT Bình Phú.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  group: "Tổ 1 • Tri huyện",
                  href: "/trien-lam-so/to-1",
                  palette: "Đỏ son – Mão cánh chuồn đen viền vàng – Ria đen",
                  trait: "Đầu bảng công đường nhưng tham của đút lót và háo sắc.",
                },
                {
                  group: "Tổ 2 • Đề lại",
                  href: "/trien-lam-so/to-2",
                  palette: "Đen nâu – Đỏ sẫm – Vàng đồng cũ – Da vàng nhợt",
                  trait: "Phụ quan gian xảo, mớm cung và gập sống mũi bìa 3D.",
                },
                {
                  group: "Tổ 3 • Lính lệ",
                  href: "/trien-lam-so/to-3",
                  palette: "Mũ đen viền vàng tua đỏ – Chóp mũi đỏ tròn – Viền mắt trắng",
                  trait: "Hách dịch nạt dân, khúm núm trước đồng tiền; đắp nổi đất sét.",
                },
                {
                  group: "Tổ 4 • Trùm Sò",
                  href: "/trien-lam-so/to-4",
                  palette: "Trắng kem pha vàng nhạt – Cam đất trầm – Nét nhăn đen",
                  trait: "Trọc phú keo kiệt, mắt ngơ ngác & miệng trề xót của.",
                },
              ].map((item) => (
                <Link
                  key={item.group}
                  href={item.href}
                  className="rounded-2xl bg-white p-5 border border-heritage-crimson/25 shadow-museum hover:border-heritage-crimson transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block rounded-md bg-heritage-crimson px-2.5 py-1 text-xs font-bold text-white">
                      {item.group}
                    </span>
                    <p className="mt-3 text-xs font-semibold text-heritage-woodDark">
                      Mã màu: {item.palette}
                    </p>
                    <p className="mt-1.5 text-xs sm:text-sm text-heritage-ink leading-relaxed">
                      {item.trait}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-heritage-crimson">
                    <span>Mở chuyên trang {item.group.split(" • ")[0]}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

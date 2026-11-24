import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ScrollVisualCinema } from "@/components/ScrollVisualCinema";
import { TRIEN_LAM_SO_CINEMA } from "@/data/pageCinemaData";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { DigitalExhibitionSection } from "@/components/DigitalExhibitionSection";
import { ArrowRight, Camera, FileCheck, UploadCloud } from "lucide-react";

export default function TrienLamSoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-heritage-ivory text-heritage-ink">
      <Header />

      <main className="flex-1">
        <ScrollVisualCinema
          id="trinh-chieu-trien-lam"
          scenes={TRIEN_LAM_SO_CINEMA}
          skipHref="#noi-dung-trien-lam"
          breadcrumbs={[{ label: "Triển lãm số" }]}
          ariaLabel="Trình chiếu Không gian Triển lãm số"
        />

        <div id="noi-dung-trien-lam">
          <div className="bg-heritage-ivoryLight border-b border-heritage-crimson/15 py-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-woodDark mr-1">
                  Chuyên trang 4 Tổ (Lớp 10.3):
                </span>
                <Link
                  href="/trien-lam-so/to-1"
                  className="inline-flex items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-heritage-woodDark border border-heritage-goldAntique/50 hover:bg-heritage-crimson hover:text-white transition-colors"
                >
                  <span>Tổ 1 • Tri huyện</span>
                </Link>
                <Link
                  href="/trien-lam-so/to-2"
                  className="inline-flex items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-heritage-woodDark border border-heritage-goldAntique/50 hover:bg-heritage-crimson hover:text-white transition-colors"
                >
                  <span>Tổ 2 • Đề lại</span>
                </Link>
                <Link
                  href="/trien-lam-so/to-3"
                  className="inline-flex items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-heritage-woodDark border border-heritage-goldAntique/50 hover:bg-heritage-crimson hover:text-white transition-colors"
                >
                  <span>Tổ 3 • Lính lệ</span>
                </Link>
                <Link
                  href="/trien-lam-so/to-4"
                  className="inline-flex items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-heritage-woodDark border border-heritage-goldAntique/50 hover:bg-heritage-crimson hover:text-white transition-colors"
                >
                  <span>Tổ 4 • Trùm Sò</span>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href="/xuong-steam"
                  className="inline-flex items-center gap-2 rounded-xl bg-heritage-crimson px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-heritage-woodDark transition-colors"
                >
                  <span>Xem quy trình chế tạo</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/dien-dan-hoc-tap"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-heritage-crimson border border-heritage-crimson/35 hover:bg-heritage-crimson hover:text-white transition-colors"
                >
                  <span>Nộp hồ sơ &amp; Phản biện</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <DigitalExhibitionSection />
        </div>

        <section className="py-12 sm:py-16 bg-heritage-ivoryLight border-b border-heritage-goldAntique/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-serif text-xl sm:text-3xl font-bold text-heritage-woodDark">
                QUY CHUẨN LƯU TRỮ MINH CHỨNG &amp; TRƯNG BÀY SẢN PHẨM
              </h2>
              <p className="mt-2 text-sm sm:text-base text-heritage-ink">
                Hướng dẫn các nhóm học sinh chuẩn bị tư liệu hình ảnh, video và thuyết minh trước khi giáo viên nghiệm thu đưa lên Triển lãm số.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-heritage-ivory p-6 border border-heritage-goldAntique/50">
                <Camera className="h-7 w-7 text-heritage-crimson" />
                <h3 className="mt-3 font-serif text-xl font-bold text-heritage-woodDark">
                  1. Hình ảnh Sản phẩm &amp; Quá trình
                </h3>
                <p className="mt-2 text-sm text-heritage-ink leading-relaxed">
                  Chụp tối thiểu 3 góc ảnh sản phẩm hoàn thiện trên phông nền sáng hoặc sân khấu lớp học, kèm 2–3 ảnh quá trình cả nhóm đang chế tác tại xưởng.
                </p>
              </div>

              <div className="rounded-2xl bg-heritage-ivory p-6 border border-heritage-goldAntique/50">
                <FileCheck className="h-7 w-7 text-heritage-woodDark" />
                <h3 className="mt-3 font-serif text-xl font-bold text-heritage-woodDark">
                  2. Thẻ Giải mã &amp; Bản Thuyết minh
                </h3>
                <p className="mt-2 text-sm text-heritage-ink leading-relaxed">
                  Mỗi sản phẩm đi kèm bản mô tả ý tưởng ngắn gọn (150–250 chữ), nêu rõ căn cứ văn bản Ngữ văn 10 và danh mục vật liệu đã sử dụng.
                </p>
              </div>

              <div className="rounded-2xl bg-heritage-ivory p-6 border border-heritage-goldAntique/50">
                <UploadCloud className="h-7 w-7 text-heritage-moss" />
                <h3 className="mt-3 font-serif text-xl font-bold text-heritage-woodDark">
                  3. Kiểm duyệt &amp; Công bố
                </h3>
                <p className="mt-2 text-sm text-heritage-ink leading-relaxed">
                  Giáo viên kiểm duyệt nội dung học thuật và sự đồng thuận công bố tên nhóm/lớp trước khi cập nhật chính thức vào tệp dữ liệu <code className="break-all sm:break-normal">src/data/exhibitionData.ts</code>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

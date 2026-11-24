import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { ScrollVisualCinema } from "@/components/ScrollVisualCinema";
import { CallToActionAndFooter } from "@/components/CallToActionAndFooter";
import { StudentGroupPortfolioClient } from "@/components/StudentGroupPortfolioClient";
import { buildStudentGroupCinema } from "@/data/pageCinemaData";
import {
  HUYEN_DUONG_GROUPS_PORTFOLIO,
  getStudentGroupBySlug,
} from "@/data/studentProductsData";

export function generateStaticParams() {
  return HUYEN_DUONG_GROUPS_PORTFOLIO.map((group) => ({
    slug: group.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const group = getStudentGroupBySlug(slug);
  if (!group) {
    return { title: "Không tìm thấy trang Tổ — Di sản Văn học Việt" };
  }
  return {
    title: `${group.groupName} (${group.characterName}) — Lớp 10.3 THPT Bình Phú | Di sản Văn học Việt`,
    description: group.summary,
  };
}

export default async function StudentGroupDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const group = getStudentGroupBySlug(slug);

  if (!group) {
    notFound();
  }

  const cinemaScenes = buildStudentGroupCinema(group);

  return (
    <div className="min-h-screen flex flex-col bg-heritage-ivory text-heritage-ink">
      <Header />

      <main className="flex-1">
        <ScrollVisualCinema
          id={`trinh-chieu-${group.slug}`}
          scenes={cinemaScenes}
          skipHref="#noi-dung-chuyen-trang-to"
          breadcrumbs={[
            { label: "Triển lãm số", href: "/trien-lam-so" },
            { label: `${group.groupName} — ${group.characterName}` },
          ]}
          ariaLabel={`Trình chiếu chuyên trang ${group.groupName} nhân vật ${group.characterName}`}
        />

        <StudentGroupPortfolioClient group={group} />
      </main>

      <CallToActionAndFooter />
    </div>
  );
}

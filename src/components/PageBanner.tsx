import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { AuroraParticlesCanvas } from "./effects/AuroraParticlesCanvas";
import { SplitTextReveal } from "./effects/SplitTextReveal";

interface PageBannerProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; href?: string }[];
  accentVariant?: "hero" | "makerspace" | "cta";
  actions?: React.ReactNode;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  breadcrumbs,
  accentVariant = "hero",
  actions,
}) => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-heritage-ivoryLight to-white text-heritage-ink border-b-2 border-heritage-crimson/25 overflow-hidden">
      <div className="h-1 w-full heritage-ribbon-bar" aria-hidden="true" />
      <AuroraParticlesCanvas variant={accentVariant} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Thanh điều hướng Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-heritage-ink/80">
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-heritage-crimson hover:underline font-semibold"
              >
                <Home className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Trang chủ</span>
              </Link>
            </li>
            {breadcrumbs.map((bc, idx) => (
              <li key={idx} className="inline-flex items-center gap-2">
                <ChevronRight
                  className="h-3.5 w-3.5 text-heritage-crimson/50"
                  aria-hidden="true"
                />
                {bc.href ? (
                  <Link
                    href={bc.href}
                    className="text-heritage-crimson hover:underline font-semibold"
                  >
                    {bc.label}
                  </Link>
                ) : (
                  <span className="text-heritage-ink font-bold">
                    {bc.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-4xl space-y-3 sm:space-y-4">
          <SplitTextReveal
            text={title}
            as="h1"
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-heritage-crimson leading-tight"
          />

          <p className="text-sm sm:text-base lg:text-lg text-heritage-ink leading-relaxed max-w-3xl">
            {subtitle}
          </p>

          {actions && (
            <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3 [&>a]:justify-center">
              {actions}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

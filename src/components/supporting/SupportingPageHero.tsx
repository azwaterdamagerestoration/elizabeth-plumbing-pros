import React from "react";
import Image from "next/image";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { CallButton } from "@/shared/CallButton";
import { siteConfig } from "@/config/site";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SupportingPageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  showCallButton?: boolean;
  callButtonLabel?: string;
  image?: {
    src: string;
    alt: string;
  };
  className?: string;
}

export function SupportingPageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  showCallButton = true,
  callButtonLabel = `CALL ${siteConfig.phone.display}`,
  image,
  className = "",
}: SupportingPageHeroProps) {
  return (
    <section
      className={`bg-gradient-to-b from-[#080F1F] via-[#0B172D] to-[#102B4E] text-white pt-8 pb-14 sm:pb-20 relative overflow-hidden ${className}`}
    >
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1677C8]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#23B8D4]/10 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <Breadcrumbs variant="light" items={breadcrumbs} className="mb-6" />

        <div className={`grid grid-cols-1 ${image ? "lg:grid-cols-12 gap-10 lg:gap-14 items-center" : "max-w-4xl"}`}>
          <div className={image ? "lg:col-span-7 space-y-5" : "space-y-5"}>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1677C8]/25 border border-[#23B8D4]/40 text-[#23B8D4] text-xs font-extrabold uppercase tracking-widest">
                <span>{eyebrow}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              {title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal text-balance">
              {description}
            </p>

            {showCallButton && (
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <CallButton
                  size="md"
                  variant="primary"
                  label={callButtonLabel}
                  trackingEvent="hero_call_click"
                  className="shadow-md hover:shadow-orange-500/20 text-base"
                />
                <span className="text-xs sm:text-sm text-slate-400">
                  Direct connection • Elizabeth &amp; Union County
                </span>
              </div>
            )}
          </div>

          {image && (
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}


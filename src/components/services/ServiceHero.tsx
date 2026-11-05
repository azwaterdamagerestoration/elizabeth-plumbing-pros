import React from "react";
import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CallButton } from "@/shared/CallButton";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { ServiceBadge } from "@/types";

interface ServiceHeroProps {
  serviceTitle: string;
  eyebrow?: string;
  h1: string;
  description: string;
  image: string;
  imageAlt: string;
  badges?: ServiceBadge[];
  secondaryCtaText?: string;
}

export function ServiceHero({
  serviceTitle,
  eyebrow,
  h1,
  description,
  image,
  imageAlt,
  badges = [],
  secondaryCtaText = "EXPLORE SERVICE SOLUTIONS",
}: ServiceHeroProps) {
  const displayEyebrow =
    eyebrow || `${serviceTitle.toUpperCase()} SERVICES \u2022 ELIZABETH, NJ`;

  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#080F1F] text-white overflow-hidden">
      {/* 1. Full-Bleed Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] sm:object-[72%_center] lg:object-[82%_center]"
        />

        {/* 2. Multi-Layer Precision Gradient Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #080F1F 0%, rgba(8, 15, 31, 0.96) 38%, rgba(8, 15, 31, 0.82) 58%, rgba(8, 15, 31, 0.45) 80%, rgba(8, 15, 31, 0.28) 100%)",
          }}
        />

        {/* Vertical gradient on mobile & tablet */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#080F1F] via-[#080F1F]/70 to-transparent lg:hidden" />

        {/* Subtle decorative glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1677C8]/20 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* 3. Hero Content Container */}
      <Container className="relative z-20 py-12 sm:py-16 lg:py-20">
        <Breadcrumbs
          variant="light"
          items={[
            { label: "Services", href: "/services" },
            { label: serviceTitle },
          ]}
          className="mb-6"
        />

        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102B4E]/85 backdrop-blur-md border border-[#23B8D4]/40 text-[#23B8D4] text-xs sm:text-sm font-extrabold tracking-wider uppercase shadow-md">
            <MapPin className="w-3.5 h-3.5 text-[#23B8D4] shrink-0" />
            <span>{displayEyebrow}</span>
          </div>

          {/* Main H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.12] text-white">
            {h1}
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
            {description}
          </p>

          {/* Dual Conversion CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <CallButton
              size="lg"
              variant="primary"
              label={`CALL ${siteConfig.phone.display}`}
              trackingEvent="hero_call_click"
              className="w-full sm:w-auto shadow-2xl hover:shadow-[#FF8533]/40 font-extrabold text-lg px-8 py-4 uppercase tracking-wide"
            />
            <a
              href="#service-overview"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-white/30 bg-[#080F1F]/60 backdrop-blur-md text-white font-bold hover:bg-white/10 hover:border-white transition-all text-sm sm:text-base min-h-[44px]"
            >
              <span>{secondaryCtaText}</span>
              <ArrowDown className="w-4 h-4 text-[#23B8D4]" />
            </a>
          </div>

          {/* Supporting Badges */}
          {badges.length > 0 && (
            <div className="pt-4 border-t border-slate-700/60">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 text-xs sm:text-sm font-semibold shadow-sm hover:bg-white/15 transition-colors"
                  >
                    <DynamicIcon
                      name={badge.iconName}
                      className="w-4 h-4 text-[#23B8D4] shrink-0"
                    />
                    <span className="truncate">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}


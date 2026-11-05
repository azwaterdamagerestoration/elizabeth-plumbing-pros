import React from "react";
import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CallButton } from "@/shared/CallButton";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { LocationBadge } from "@/types/location";

interface LocationHeroProps {
  cityName: string;
  stateAbbr: string;
  eyebrow: string;
  h1: string;
  description: string;
  image: string;
  imageAlt: string;
  badges: LocationBadge[];
  secondaryCtaText?: string;
}

export function LocationHero({
  cityName,
  stateAbbr,
  eyebrow,
  h1,
  description,
  image,
  imageAlt,
  badges,
  secondaryCtaText = "EXPLORE PLUMBING SERVICES",
}: LocationHeroProps) {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-[#080F1F] text-white overflow-hidden">
      {/* 1. Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] sm:object-[70%_center] lg:object-[80%_center]"
        />

        {/* 2. Precision Gradient Overlay (95% dark navy left -> transparent right) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #080F1F 0%, rgba(8, 15, 31, 0.96) 42%, rgba(8, 15, 31, 0.85) 60%, rgba(8, 15, 31, 0.45) 82%, rgba(8, 15, 31, 0.25) 100%)",
          }}
        />

        {/* Mobile/Tablet vertical gradient protector */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#080F1F] via-[#080F1F]/65 to-transparent lg:hidden" />

        {/* Decorative ambient glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1677C8]/20 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* 3. Hero Content Container */}
      <Container className="relative z-20 py-12 sm:py-16 lg:py-20">
        {/* Breadcrumbs inside Hero for clean context */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Service Areas", href: "/service-areas" },
              { label: `${cityName}, ${stateAbbr}` },
            ]}
            className="text-slate-300"
          />
        </div>

        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-7">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102B4E]/80 backdrop-blur-md border border-[#23B8D4]/40 text-[#23B8D4] text-xs sm:text-sm font-extrabold tracking-wider uppercase shadow-md">
            <MapPin className="w-3.5 h-3.5 text-[#23B8D4] shrink-0" />
            <span>{eyebrow}</span>
          </div>

          {/* Main H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.14] text-white">
            {h1}
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-xl">
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
              href="#services-section"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border border-white/30 bg-[#080F1F]/60 backdrop-blur-md text-white font-bold hover:bg-white/10 hover:border-white transition-all text-sm uppercase tracking-wider min-h-[44px]"
            >
              <span>{secondaryCtaText}</span>
              <ArrowDown className="w-4 h-4 text-[#23B8D4]" />
            </a>
          </div>

          {/* 4 Supporting Badges */}
          <div className="pt-4 border-t border-slate-700/60">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.label}
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
        </div>
      </Container>
    </section>
  );
}


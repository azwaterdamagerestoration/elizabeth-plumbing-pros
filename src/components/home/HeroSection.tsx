import React from "react";
import Image from "next/image";
import { ArrowDown, MapPin, Wrench, Flame, Droplets } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CallButton } from "@/shared/CallButton";
import { Container } from "@/shared/Container";

const heroBadges = [
  { label: "Elizabeth Area Focus", icon: MapPin },
  { label: "Plumbing Repairs", icon: Wrench },
  { label: "Drain & Sewer Services", icon: Droplets },
  { label: "Water Heater Services", icon: Flame },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[680px] lg:min-h-[760px] flex items-center bg-[#080F1F] text-white overflow-hidden">
      {/* 1. Full-Bleed Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/elizabeth-plumbing-hero.webp"
          alt="Professional plumbing technician in Elizabeth, NJ"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] sm:object-[72%_center] lg:object-[82%_center]"
        />

        {/* 2. Multi-Layer Precision Gradient Overlay (Dark Navy 95% left -> Subtle overlay right) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #080F1F 0%, rgba(8, 15, 31, 0.96) 38%, rgba(8, 15, 31, 0.82) 58%, rgba(8, 15, 31, 0.42) 80%, rgba(8, 15, 31, 0.25) 100%)",
          }}
        />

        {/* Vertical gradient on mobile & tablet to protect text contrast */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#080F1F] via-[#080F1F]/60 to-transparent lg:hidden" />

        {/* Subtle decorative glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1677C8]/20 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* 3. Hero Content Container */}
      <Container className="relative z-20 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-7">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102B4E]/80 backdrop-blur-md border border-[#23B8D4]/40 text-[#23B8D4] text-xs sm:text-sm font-extrabold tracking-wider uppercase shadow-md">
            <MapPin className="w-3.5 h-3.5 text-[#23B8D4] shrink-0" />
            <span>PLUMBING SERVICES &bull; ELIZABETH, NJ</span>
          </div>

          {/* Main H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.12] text-white">
            Plumbing Services in Elizabeth, NJ &mdash;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#23B8D4] to-[#1677C8]">
              Help When You Need It
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-xl">
            From leaking pipes and clogged drains to water heater problems and urgent plumbing repairs, call Elizabeth Plumbing Pros to discuss your needs and available service options.
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
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border border-white/30 bg-[#080F1F]/60 backdrop-blur-md text-white font-bold hover:bg-white/10 hover:border-white transition-all text-base min-h-[44px]"
            >
              <span>EXPLORE OUR SERVICES</span>
              <ArrowDown className="w-4 h-4 text-[#23B8D4]" />
            </a>
          </div>

          {/* 4 Supporting Badges */}
          <div className="pt-4 border-t border-slate-700/60">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {heroBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 text-xs sm:text-sm font-semibold shadow-sm hover:bg-white/15 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[#23B8D4] shrink-0" />
                    <span className="truncate">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

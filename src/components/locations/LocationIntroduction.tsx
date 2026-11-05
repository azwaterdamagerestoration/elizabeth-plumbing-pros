import React from "react";
import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "@/shared/Container";
import { CallButton } from "@/shared/CallButton";
import { siteConfig } from "@/config/site";

interface LocationIntroductionProps {
  cityName: string;
  stateAbbr: string;
  county: string;
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  calloutTitle?: string;
  calloutText?: string;
}

export function LocationIntroduction({
  cityName,
  stateAbbr,
  county,
  heading,
  paragraphs,
  image,
  imageAlt,
  calloutTitle,
  calloutText,
}: LocationIntroductionProps) {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Unique Local Introduction Editorial */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1677C8] border border-blue-200/70 text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>
                {cityName.toUpperCase()}, {stateAbbr} &bull; {county.toUpperCase()}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              {heading}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#5D6B7C] leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {calloutTitle && calloutText && (
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F6F9FC] border border-slate-200/90 shadow-2xs space-y-1.5">
                <p className="font-extrabold text-sm sm:text-base text-[#102B4E]">
                  {calloutTitle}
                </p>
                <p className="text-xs sm:text-sm text-[#5D6B7C] leading-relaxed">
                  {calloutText}
                </p>
              </div>
            )}

            {/* Contextual CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <CallButton
                size="md"
                variant="primary"
                label={`CALL ${siteConfig.phone.display}`}
                trackingEvent="hero_call_click"
                className="shadow-lg hover:shadow-[#FF8533]/30 font-extrabold uppercase tracking-wide text-sm"
              />
              <a
                href="#neighborhoods-section"
                className="inline-flex items-center justify-center gap-2 text-sm font-extrabold text-[#1677C8] hover:text-[#102B4E] transition-colors py-2.5 px-4"
              >
                <span>Explore {cityName} Neighborhoods</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Relevant Residential Plumbing Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 shadow-2xl aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] bg-slate-100">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080F1F]/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 text-[#102B4E] shadow-xl">
                  <p className="text-xs font-extrabold text-[#1677C8] uppercase tracking-wider">
                    {cityName} Plumbing Context
                  </p>
                  <p className="text-xs sm:text-sm font-semibold mt-1 text-[#5D6B7C] line-clamp-2">
                    Professional residential plumbing diagnostics and tailored service coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


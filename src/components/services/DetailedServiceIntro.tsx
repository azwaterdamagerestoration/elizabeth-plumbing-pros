import React from "react";
import Image from "next/image";
import { PhoneCall, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/shared/Container";
import { CallButton } from "@/shared/CallButton";
import { siteConfig } from "@/config/site";

interface DetailedServiceIntroProps {
  heading: string;
  paragraphs: string[];
  calloutTitle?: string;
  calloutText?: string;
  image?: {
    src: string;
    alt: string;
  };
  serviceTitle: string;
}

export function DetailedServiceIntro({
  heading,
  paragraphs,
  calloutTitle,
  calloutText,
  image,
  serviceTitle,
}: DetailedServiceIntroProps) {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: 60% Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1677C8] border border-blue-200/70 text-xs font-extrabold uppercase tracking-wider">
              <span>LOCAL SERVICE INSIGHT</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              {heading}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#172B45] leading-relaxed">
              {paragraphs.map((para, idx) => (
                <p key={idx} className="text-[#5D6B7C]">
                  {para}
                </p>
              ))}
            </div>

            {calloutTitle && calloutText && (
              <div className="p-6 rounded-2xl bg-[#F6F9FC] border-l-4 border-[#1677C8] space-y-2 mt-6">
                <h3 className="text-base font-bold text-[#102B4E]">
                  {calloutTitle}
                </h3>
                <p className="text-sm text-[#5D6B7C] leading-relaxed">
                  {calloutText}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: 40% Supporting Visual / Action Panel */}
          <div className="lg:col-span-5 space-y-6">
            {image ? (
              <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            ) : null}

            {/* Direct Phone Dispatch Card */}
            <div className="p-7 rounded-3xl bg-[#102B4E] text-white shadow-xl border border-slate-800 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#23B8D4] uppercase tracking-wider">
                <PhoneCall className="w-4 h-4" />
                <span>DIRECT SERVICE COORDINATION</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Need {serviceTitle} Assistance?
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Describe your symptoms, confirm your Elizabeth or Union County address, and connect with an independent local professional ready to inspect and service your property.
              </p>

              <div className="pt-2">
                <CallButton
                  size="md"
                  variant="primary"
                  label={`CALL ${siteConfig.phone.display}`}
                  trackingEvent="service_card_click"
                  className="w-full justify-center shadow-lg font-extrabold uppercase tracking-wide text-sm"
                />
              </div>

              <div className="pt-4 border-t border-slate-700/80 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#23B8D4] shrink-0" />
                  <span>Free referral coordination &amp; phone consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23B8D4] shrink-0" />
                  <span>Serving Elizabeth &amp; Union County neighborhoods</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

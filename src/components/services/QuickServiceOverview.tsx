import React from "react";
import { Container } from "@/shared/Container";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { QuickHighlight } from "@/types";

interface QuickServiceOverviewProps {
  serviceTitle: string;
  intro: string;
  highlights: QuickHighlight[];
}

export function QuickServiceOverview({
  serviceTitle,
  intro,
  highlights,
}: QuickServiceOverviewProps) {
  return (
    <section id="service-overview" className="py-14 sm:py-16 bg-[#F6F9FC] border-b border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Focused Overview Introduction */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1677C8] border border-blue-200/70 text-xs font-extrabold uppercase tracking-wider">
              <span>QUICK SERVICE SCOPE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B4E] leading-snug">
              What Our {serviceTitle} Assistance Covers
            </h2>
            <p className="text-sm sm:text-base text-[#5D6B7C] leading-relaxed">
              {intro}
            </p>
          </div>

          {/* Right Column: 3-4 Compact Service Highlights */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-blue-50 text-[#1677C8] shrink-0 border border-blue-100">
                  <DynamicIcon name={item.iconName} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#102B4E] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D6B7C] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


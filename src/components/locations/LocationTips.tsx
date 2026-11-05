import React from "react";
import { BookOpen } from "lucide-react";
import { Container } from "@/shared/Container";
import { DynamicIcon } from "@/shared/DynamicIcon";

interface LocationTipItem {
  title: string;
  description: string;
  iconName: string;
}

interface LocationTipsProps {
  cityName: string;
  heading: string;
  intro: string;
  tips: LocationTipItem[];
}

export function LocationTips({
  cityName,
  heading,
  intro,
  tips,
}: LocationTipsProps) {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1677C8] border border-blue-200/70 text-xs font-extrabold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>HOMEOWNER PLUMBING GUIDANCE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              {heading}
            </h2>

            <p className="text-base sm:text-lg text-[#5D6B7C] leading-relaxed max-w-2xl mx-auto">
              {intro}
            </p>
          </div>

          {/* Practical Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {tips.map((tip, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-[#F6F9FC] border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#1677C8] flex items-center justify-center mb-5 group-hover:bg-[#1677C8] group-hover:text-white transition-colors duration-200 shadow-xs">
                    <DynamicIcon name={tip.iconName} className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                    {tip.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#5D6B7C] leading-relaxed">
                    {tip.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 text-xs font-bold text-[#1677C8] uppercase tracking-wider">
                  {cityName} Homeowner Tip #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


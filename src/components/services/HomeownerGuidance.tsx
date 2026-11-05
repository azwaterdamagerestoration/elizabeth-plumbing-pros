import React from "react";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { Container } from "@/shared/Container";
import { HomeownerGuideSection } from "@/types";

interface HomeownerGuidanceProps {
  serviceTitle: string;
  heading: string;
  intro: string;
  sections: HomeownerGuideSection[];
}

export function HomeownerGuidance({
  serviceTitle,
  heading,
  intro,
  sections,
}: HomeownerGuidanceProps) {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1677C8] border border-blue-200/70 text-xs font-extrabold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{serviceTitle.toUpperCase()} EDUCATIONAL GUIDE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              {heading}
            </h2>

            <p className="text-base sm:text-lg text-[#5D6B7C] leading-relaxed max-w-2xl mx-auto">
              {intro}
            </p>
          </div>

          {/* Guide Sections */}
          <div className="space-y-10">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-[#F6F9FC] border border-slate-200/90 shadow-2xs space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#1677C8] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#102B4E]">
                    {section.subheading}
                  </h3>
                </div>

                <div className="space-y-3.5 text-sm sm:text-base text-[#5D6B7C] leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {section.tips && section.tips.length > 0 && (
                  <div className="pt-4 border-t border-slate-200/80">
                    <p className="text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-2.5">
                      Helpful Practical Considerations:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#172B45]">
                      {section.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

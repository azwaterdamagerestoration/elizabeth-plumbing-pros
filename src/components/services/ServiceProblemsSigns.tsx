import React from "react";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { ProblemSign } from "@/types";

interface ServiceProblemsSignsProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  items: ProblemSign[];
}

export function ServiceProblemsSigns({
  eyebrow = "SYMPTOMS & WARNING SIGNS",
  heading,
  subtitle,
  items,
}: ServiceProblemsSignsProps) {
  return (
    <section className="py-20 sm:py-24 bg-[#F6F9FC]">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={heading}
          description={subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF8533] border border-orange-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <DynamicIcon name={item.iconName} className="w-6 h-6" />
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-[#5D6B7C] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#FF8533] uppercase tracking-wider">
                <span>Observed Indicator</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


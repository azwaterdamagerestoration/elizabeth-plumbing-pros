import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { commonProblemsData } from "@/data/problems";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";
import { DynamicIcon } from "@/shared/DynamicIcon";

export function PlumbingProblems() {
  // First 2 problems are featured
  const featuredProblems = commonProblemsData.slice(0, 2);
  const remainingProblems = commonProblemsData.slice(2);

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F6F9FC]">
      <Container>
        <SectionHeading
          eyebrow="DIAGNOSTIC SYMPTOM GUIDE"
          title="Common Plumbing Repair Issues We Help Elizabeth Residents Resolve"
          description="Recognize warning signs early to avoid catastrophic water damage and connect with the right plumbing repair specialist in Elizabeth, NJ."
        />

        {/* 2 Featured Symptom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-7">
          {featuredProblems.map((problem) => (
            <div
              key={problem.id}
              className="p-7 sm:p-8 rounded-3xl bg-white border-2 border-[#1677C8]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1677C8]/5 rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1677C8] flex items-center justify-center group-hover:bg-[#1677C8] group-hover:text-white transition-colors duration-200 shadow-sm">
                    <DynamicIcon name={problem.iconName} className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1677C8] text-xs font-extrabold uppercase tracking-wider">
                    High Priority Symptom
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#5D6B7C] leading-relaxed">
                  {problem.symptoms}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <Link
                  href={`/services/${problem.recommendedServiceSlug}`}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                >
                  <span>{problem.recommendedServiceTitle}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Supporting Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingProblems.map((problem) => (
            <div
              key={problem.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#1677C8] flex items-center justify-center mb-4 group-hover:bg-[#1677C8] group-hover:text-white transition-colors duration-200">
                  <DynamicIcon name={problem.iconName} className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors">
                  {problem.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#5D6B7C] leading-relaxed line-clamp-3">
                  {problem.symptoms}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <Link
                  href={`/services/${problem.recommendedServiceSlug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                >
                  <span>{problem.recommendedServiceTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

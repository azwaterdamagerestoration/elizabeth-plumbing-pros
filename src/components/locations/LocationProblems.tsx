import React from "react";
import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { LocationProblem } from "@/types/location";

interface LocationProblemsProps {
  cityName: string;
  problems: LocationProblem[];
}

export function LocationProblems({ cityName, problems }: LocationProblemsProps) {
  const featuredProblems = problems.slice(0, 2);
  const supportingProblems = problems.slice(2);

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F6F9FC]">
      <Container>
        <SectionHeading
          eyebrow="SYMPTOM EVALUATION"
          title={`Common Plumbing Problems ${cityName} Homeowners May Encounter`}
          description={`Identify your household symptoms to learn about likely causes, potential risks, and recommended professional solutions in ${cityName}.`}
        />

        {/* 2 Featured Symptom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-7">
          {featuredProblems.map((problem) => (
            <div
              key={problem.id}
              className="p-7 sm:p-8 rounded-3xl bg-white border-2 border-[#1677C8]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#1677C8]/5 rounded-bl-full pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
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

                <div className="space-y-2.5 text-xs sm:text-sm text-[#5D6B7C] leading-relaxed">
                  <p>
                    <strong className="text-[#102B4E]">Observed Symptoms: </strong>
                    {problem.symptoms}
                  </p>
                  <p>
                    <strong className="text-[#102B4E]">Likely Causes: </strong>
                    {problem.possibleCauses}
                  </p>
                  <p>
                    <strong className="text-[#102B4E]">Why It Matters: </strong>
                    {problem.whyItMatters}
                  </p>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 text-xs text-[#172B45]">
                    <AlertCircle className="w-4 h-4 text-[#1677C8] shrink-0 mt-0.5" />
                    <span>
                      <strong>When to evaluate: </strong>
                      {problem.whenToCall}
                    </span>
                  </div>
                </div>
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
          {supportingProblems.map((problem) => (
            <div
              key={problem.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#1677C8] flex items-center justify-center mb-1 group-hover:bg-[#1677C8] group-hover:text-white transition-colors duration-200">
                  <DynamicIcon name={problem.iconName} className="w-5 h-5" />
                </div>

                <h4 className="text-base font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                  {problem.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#5D6B7C] leading-relaxed line-clamp-3">
                  {problem.symptoms}
                </p>

                <p className="text-xs text-[#5D6B7C] line-clamp-2">
                  <strong className="text-[#102B4E]">Causes: </strong>
                  {problem.possibleCauses}
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


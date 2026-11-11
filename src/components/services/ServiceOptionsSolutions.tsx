import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";
import { ServiceSolutionOption } from "@/types";

interface ServiceOptionsSolutionsProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  options: ServiceSolutionOption[];
}

export function ServiceOptionsSolutions({
  eyebrow = "SERVICE APPROACHES & METHODS",
  heading,
  subtitle,
  options,
}: ServiceOptionsSolutionsProps) {
  return (
    <section id="service-solutions" className="py-20 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={heading}
          description={subtitle}
        />

        <div className="space-y-16 lg:space-y-24 mt-12">
          {options.map((option, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Media Column */}
                <div
                  className={`lg:col-span-5 ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
                    {option.image ? (
                      <Image
                        src={option.image}
                        alt={option.imageAlt || option.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#102B4E] to-[#1677C8] flex items-center justify-center p-8 text-white text-center">
                        <div>
                          <span className="text-4xl font-extrabold text-[#23B8D4]">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-xl font-bold mt-2">
                            {option.title}
                          </h3>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080F1F]/70 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#080F1F]/90 backdrop-blur-md border border-white/10 text-white text-xs">
                      <span className="font-extrabold text-[#23B8D4] uppercase tracking-wider block">
                        Best Suited For:
                      </span>
                      <span className="text-slate-200 mt-0.5 block">
                        {option.suitableFor}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1677C8] border border-blue-200/60 text-xs font-bold uppercase tracking-wider">
                    <span>Method {idx + 1} of {options.length}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-snug">
                    {option.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#5D6B7C] leading-relaxed">
                    {option.description}
                  </p>

                  {/* Key Capabilities / Diagnostic points */}
                  <div className="pt-2">
                    <p className="text-xs font-bold text-[#102B4E] uppercase tracking-wider mb-3">
                      Key Diagnostic &amp; Service Elements:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#172B45]">
                      {option.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {option.relatedServiceSlug && (
                    <div className="pt-3">
                      <Link
                        href={`/services/${option.relatedServiceSlug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#1677C8] hover:text-[#102B4E] transition-colors"
                      >
                        <span>Explore Related {option.title} Resources</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}


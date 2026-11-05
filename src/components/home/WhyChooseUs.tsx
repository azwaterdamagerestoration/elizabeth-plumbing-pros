import React from "react";
import {
  MapPin,
  Wrench,
  PhoneCall,
  BookOpen,
  Globe2,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";

const supportingBenefits = [
  {
    icon: Wrench,
    title: "Broad Plumbing Coverage",
    description:
      "Comprehensive resources covering common residential concerns from fixture leaks to water heaters.",
    accent: "text-[#1677C8]",
    bg: "bg-blue-50",
  },
  {
    icon: PhoneCall,
    title: "Straightforward Phone Contact",
    description:
      "Direct phone-based communication without confusing automated callback queues.",
    accent: "text-[#FF8533]",
    bg: "bg-orange-50",
  },
  {
    icon: BookOpen,
    title: "Helpful Symptom Insights",
    description:
      "Clear explanations of plumbing issues so homeowners can make informed decisions.",
    accent: "text-[#23B8D4]",
    bg: "bg-cyan-50",
  },
  {
    icon: Globe2,
    title: "Nearby Community Coverage",
    description:
      "Dedicated connection support for Union, Westfield, Cranford, Roselle, and Fanwood.",
    accent: "text-[#102B4E]",
    bg: "bg-slate-100",
  },
];

interface WhyChooseUsProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  featuredBadge?: string;
  featuredTitle?: string;
  featuredDescription?: string;
  featuredPoints?: string[];
  benefits?: {
    icon?: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    accent?: string;
    bg?: string;
  }[];
  className?: string;
}

export function WhyChooseUs({
  eyebrow = "WHY CONTACT US",
  title = "Why Elizabeth Residents Contact Plumbing Pros",
  description = "Connecting property owners with helpful plumbing resources and available independent local professionals.",
  featuredBadge = "Key Differentiator",
  featuredTitle = "Local Elizabeth & Union County Focus",
  featuredDescription = "Rather than dealing with impersonal nationwide directories that dispatch providers from distant counties, our connection platform focuses specifically on Elizabeth neighborhoods—from Elmora and Elizabethport to Midtown—and immediate Union County communities.",
  featuredPoints = [
    "Knowledge of local housing styles & piping",
    "Direct phone coordination with available pros",
  ],
  benefits: customBenefits,
  className = "",
}: WhyChooseUsProps = {}) {
  const activeBenefits = customBenefits || supportingBenefits;

  return (
    <section className={`py-20 sm:py-24 lg:py-28 bg-[#F6F9FC] ${className}`}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        {/* Asymmetric Engaging Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {/* 1 Large Featured Showcase Card (Left 5 Cols on LG) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#102B4E] to-[#163B66] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            {/* Ambient decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#23B8D4]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-[#23B8D4] flex items-center justify-center shadow-md">
                <MapPin className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#23B8D4]">
                  {featuredBadge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 leading-snug">
                  {featuredTitle}
                </h3>
              </div>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {featuredDescription}
              </p>

              <div className="pt-4 border-t border-white/15 space-y-2.5 text-sm text-slate-200">
                {featuredPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#23B8D4] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80 bg-white/10 px-4 py-2 rounded-xl border border-white/15">
                <ShieldCheck className="w-4 h-4 text-[#23B8D4]" />
                <span>Transparent Referral Service</span>
              </span>
            </div>
          </div>

          {/* 4 Supporting Benefit Cards (Right 7 Cols on LG in 2x2 Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
            {activeBenefits.map((benefit, idx) => {
              const Icon = benefit.icon || Wrench;
              const bg = benefit.bg || "bg-blue-50";
              const accent = benefit.accent || "text-[#1677C8]";

              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl ${bg} ${accent} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-lg font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                      {benefit.title}
                    </h4>

                    <p className="mt-2.5 text-sm text-[#5D6B7C] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

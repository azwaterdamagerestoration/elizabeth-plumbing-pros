import React from "react";
import {
  MapPin,
  Wrench,
  Clock,
  Building2,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";

const supportingBenefits = [
  {
    icon: Wrench,
    title: "Residential Plumber Services",
    description:
      "Comprehensive plumbing repair near you for leaking pipes, running toilets, faucets, and complete bathroom plumbing.",
    accent: "text-[#1677C8]",
    bg: "bg-blue-50",
  },
  {
    icon: Building2,
    title: "Commercial Plumbing Solutions",
    description:
      "Experienced commercial plumbers for Elizabeth storefronts, restaurants, offices, grease traps, and multi-family complexes.",
    accent: "text-[#FF8533]",
    bg: "bg-orange-50",
  },
  {
    icon: Clock,
    title: "24/7 & Same Day Plumber Dispatch",
    description:
      "Fast response when you need an emergency plumber or same day plumbing repair for active leaks and drain clogs.",
    accent: "text-[#23B8D4]",
    bg: "bg-cyan-50",
  },
  {
    icon: PackageCheck,
    title: "Heavy-Duty Plumbing Supplies",
    description:
      "Technicians install durable, code-compliant plumbing supply parts, brass valves, and materials for lasting longevity.",
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
  eyebrow = "LOCAL PLUMBING EXCELLENCE",
  title = "Why Elizabeth Property Owners Choose Our Plumbing Network",
  description = "Connecting you directly with vetted local plumbers, same day service availability, and verified New Jersey licensed contractors.",
  featuredBadge = "LOCAL COMMUNITY EXPERTISE",
  featuredTitle = "Dedicated Elizabeth & Union County Plumbers",
  featuredDescription = "Avoid nationwide call centers that route technicians from distant counties. Our local platform links you directly with experienced plumbers near me across Elizabeth neighborhoods—from Elmora and Elizabethport to Midtown and Peterstown—who arrive fast and understand local building codes.",
  featuredPoints = [
    "Rapid dispatch from local plumbers near Elizabeth & Union County",
    "Direct phone coordination with zero hold times at (908) 738-8526",
    "Expertise in historic cast iron, galvanized, copper, and modern PEX piping",
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

            <div className="relative z-10 mt-8 pt-6 border-t border-white/15 text-xs text-slate-300 font-medium">
              Vetted New Jersey Master Plumbers &bull; Upfront Written Estimates
            </div>
          </div>

          {/* 4 Supporting Feature Cards (Right 7 Cols on LG) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {activeBenefits.map((benefit) => {
              const Icon = benefit.icon || Wrench;
              return (
                <div
                  key={benefit.title}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl ${benefit.bg || "bg-blue-50"} ${
                        benefit.accent || "text-[#1677C8]"
                      } flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200 shadow-sm`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                      {benefit.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-[#5D6B7C] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#1677C8]">
                    <span>Verified Professional Service</span>
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

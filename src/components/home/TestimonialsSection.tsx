import React from "react";
import {
  ShieldCheck,
  HelpCircle,
  FileText,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";

const consumerTips = [
  {
    icon: HelpCircle,
    title: "1. Clearly Describe Symptoms",
    description:
      "When you call, note where water is accumulating, any unusual noises, whether multiple fixtures are affected, and whether the water is clean supply or wastewater.",
  },
  {
    icon: ShieldCheck,
    title: "2. Verify NJ State Licensing",
    description:
      "Ask the visiting technician to confirm their New Jersey Master Plumber license number and active general liability insurance before authorizing work.",
  },
  {
    icon: FileText,
    title: "3. Request a Written Estimate",
    description:
      "Ensure the contractor provides a transparent written estimate detailing diagnostic fees, parts, labor, and municipal permit needs before beginning repairs.",
  },
  {
    icon: BadgeCheck,
    title: "4. Clarify Warranty Coverage",
    description:
      "Inquire about manufacturer warranties on installed components (such as water heater tanks or valves) and the contractor's specific labor guarantee.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F6F9FC]">
      <Container>
        <SectionHeading
          eyebrow="CONSUMER TRUST &amp; HIRING GUIDANCE"
          title="What to Know Before Hiring a Plumbing Contractor in Elizabeth, NJ"
          description="Because transparency protects property owners, here is an essential checklist to verify licensing, obtain written estimates, and choose qualified local plumbers."
        />

        {/* 2-Column Editorial Trust Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: 4 Structured Guidance Steps */}
          <div className="lg:col-span-7 space-y-5">
            {consumerTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <div
                  key={tip.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#1677C8] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#102B4E]">
                      {tip.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#5D6B7C] leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Informational Panel & Consumer Rights Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#102B4E] text-white p-8 sm:p-9 shadow-2xl border border-slate-700/80 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase px-3 py-1 rounded-full bg-[#23B8D4]/20 text-[#23B8D4] border border-[#23B8D4]/30">
                <ShieldCheck className="w-4 h-4" />
                <span>AUTHENTICITY GUARANTEE</span>
              </div>

              <h4 className="text-2xl font-extrabold text-white leading-snug">
                Our Commitment to Honest, Verifiable Information
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed">
                Many online lead-generation directories display fabricated 5-star customer ratings or fake review counters. At Elizabeth Plumbing Pros, we refuse to publish artificial reviews.
              </p>

              <div className="space-y-3.5 pt-4 border-t border-slate-700 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23B8D4] shrink-0 mt-0.5" />
                  <span>Free telephone connection with independent local contractors</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23B8D4] shrink-0 mt-0.5" />
                  <span>No obligation to hire until you review and approve an estimate</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23B8D4] shrink-0 mt-0.5" />
                  <span>Direct phone coordination without unmonitored online forms</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-xs text-slate-300">
                <p className="font-semibold text-white mb-0.5">Homeowner Tip:</p>
                Always verify licensing status with the NJ Division of Consumer Affairs before authorizing major pipe replacements.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

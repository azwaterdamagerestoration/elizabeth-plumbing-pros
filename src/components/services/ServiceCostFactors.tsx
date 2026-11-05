import React from "react";
import { DollarSign, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Container } from "@/shared/Container";
import { CallButton } from "@/shared/CallButton";
import { siteConfig } from "@/config/site";
import { ServiceCostFactor } from "@/types";

interface ServiceCostFactorsProps {
  serviceTitle: string;
  heading: string;
  intro: string;
  factors: ServiceCostFactor[];
  infoPanel: {
    title: string;
    bullets: string[];
    disclaimer: string;
  };
}

export function ServiceCostFactors({
  serviceTitle,
  heading,
  intro,
  factors,
  infoPanel,
}: ServiceCostFactorsProps) {
  return (
    <section className="py-20 sm:py-24 bg-[#F6F9FC] border-t border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Cost Factors Overview & List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1677C8] border border-blue-200/70 text-xs font-extrabold uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5" />
              <span>{serviceTitle.toUpperCase()} COST CONSIDERATIONS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              {heading}
            </h2>

            <p className="text-base sm:text-lg text-[#5D6B7C] leading-relaxed">
              {intro}
            </p>

            <div className="space-y-4 pt-2">
              {factors.map((factor, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#102B4E] mb-1">
                    {factor.title}
                  </h3>
                  <p className="text-sm text-[#5D6B7C] leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Informational Panel & Call Action */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#102B4E] to-[#163B66] text-white shadow-xl space-y-6 border border-slate-700/80">
              <div className="flex items-center gap-2 text-xs font-bold text-[#23B8D4] uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                <span>UPFRONT ESTIMATE GUIDANCE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                {infoPanel.title}
              </h3>

              <ul className="space-y-3 text-sm text-slate-200">
                {infoPanel.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#23B8D4] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-slate-300 leading-relaxed">
                {infoPanel.disclaimer}
              </div>

              <div className="pt-2">
                <CallButton
                  size="md"
                  variant="primary"
                  label={`CALL ${siteConfig.phone.display}`}
                  trackingEvent="service_card_click"
                  className="w-full justify-center shadow-lg font-extrabold uppercase tracking-wide text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

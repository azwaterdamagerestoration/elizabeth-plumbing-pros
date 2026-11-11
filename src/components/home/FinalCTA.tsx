import React from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CallButton } from "@/shared/CallButton";
import { Container } from "@/shared/Container";

interface FinalCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  trustPoints?: string[];
  className?: string;
}

const defaultTrustPoints = [
  "Serving All Elizabeth Neighborhoods & Union County",
  "Local Telephone Referral Coordination",
  "Independent Local Plumbing Professionals",
];

export function FinalCTA({
  eyebrow = "24/7 LOCAL PLUMBERS READY TO HELP",
  title = "Connect With a Trusted Plumber in Elizabeth, NJ Right Now",
  description = "Don't let a burst pipe, stubborn drain clog, or failing water heater disrupt your home or commercial property. Call Elizabeth Plumbing Pros at (908) 738-8526 to speak directly with our dispatch team and schedule fast, reliable plumbing services.",
  buttonLabel,
  trustPoints = defaultTrustPoints,
  className = "",
}: FinalCTAProps = {}) {
  return (
    <section className={`py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-[#050B16] via-[#080F1F] to-[#102B4E] text-white relative overflow-hidden ${className}`}>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1677C8]/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#23B8D4]/15 border border-[#23B8D4]/30 text-[#23B8D4] text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-2">
          <MapPin className="w-4 h-4 shrink-0" />
          <span>{eyebrow}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
          {title}
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
          {description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CallButton
            size="lg"
            variant="primary"
            label={buttonLabel || `CALL ${siteConfig.phone.display} NOW`}
            trackingEvent="final_cta_call_click"
            className="w-full sm:w-auto shadow-2xl hover:shadow-[#FF8533]/40 font-extrabold text-lg px-9 py-4 uppercase tracking-wide"
          />
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#23B8D4]" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

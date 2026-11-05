import React from "react";
import { PhoneCall, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CallButton } from "@/shared/CallButton";
import { BlogInlineCTA } from "@/types";

interface InlineCTAProps {
  cta?: BlogInlineCTA;
  className?: string;
}

export function InlineCTA({ cta, className = "" }: InlineCTAProps) {
  const eyebrow = cta?.eyebrow || "NEED PROFESSIONAL LEAK EVALUATION?";
  const heading = cta?.heading || "Concerned About a Hidden Plumbing Leak in Elizabeth, NJ?";
  const description =
    cta?.description ||
    "If you notice unexplained water usage, damp walls, or musty odors, call Elizabeth Plumbing Pros to speak with our local team and discuss non-invasive diagnostic options.";
  const buttonLabel = cta?.buttonLabel || `Call ${siteConfig.phone.display}`;

  return (
    <div
      className={`my-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#080F1F] via-[#102B4E] to-[#1677C8]/90 text-white p-7 sm:p-9 shadow-lg relative overflow-hidden ${className}`}
    >
      {/* Subtle background glow */}
      <div
        className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#23B8D4]/20 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23B8D4]/20 border border-[#23B8D4]/40 text-[#23B8D4] text-xs font-extrabold uppercase tracking-widest mb-3">
          <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-snug">
          {heading}
        </h3>

        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
          {description}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <CallButton
            size="md"
            variant="primary"
            label={buttonLabel}
            trackingEvent="inline_blog_cta_click"
            className="shadow-md hover:shadow-orange-500/20 text-base"
          />

          <div className="flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#23B8D4] shrink-0" />
            <span>Direct phone connection • Elizabeth &amp; Union County</span>
          </div>
        </div>
      </div>
    </div>
  );
}


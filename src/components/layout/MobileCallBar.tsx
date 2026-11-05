"use client";

import React from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function MobileCallBar() {
  const handleCall = () => {
    trackEvent("mobile_sticky_call_click", {
      phone: siteConfig.phone.raw,
      path: typeof window !== "undefined" ? window.location.pathname : "/",
    });
  };

  return (
    <aside
      aria-label="Quick Phone Call Bar"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#080F1F] border-t border-slate-800 shadow-2xl px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]"
    >
      <a
        href={siteConfig.phone.telHref}
        onClick={handleCall}
        className="flex items-center justify-center gap-2.5 w-full bg-[#FF8533] hover:bg-[#E66E1D] text-white font-extrabold text-base py-3.5 px-5 rounded-2xl shadow-xl active:scale-[0.98] transition-all"
        aria-label={`Call Elizabeth Plumbing Pros at ${siteConfig.phone.display}`}
      >
        <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
        <span className="tracking-wide uppercase text-sm font-extrabold">Call {siteConfig.phone.display}</span>
      </a>
    </aside>
  );
}


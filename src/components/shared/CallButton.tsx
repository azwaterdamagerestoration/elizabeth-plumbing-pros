"use client";

import React from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackEvent, AnalyticsEvent } from "@/lib/analytics";

interface CallButtonProps {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  trackingEvent?: AnalyticsEvent;
  showIcon?: boolean;
}

export function CallButton({
  label = `Call ${siteConfig.phone.display}`,
  className = "",
  variant = "primary",
  size = "md",
  trackingEvent = "header_call_click",
  showIcon = true,
}: CallButtonProps) {
  const handleClick = () => {
    trackEvent(trackingEvent, {
      location: window.location.pathname,
      phone: siteConfig.phone.raw,
    });
  };

  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px] min-w-[44px]";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2.5 shadow-sm hover:shadow",
    lg: "px-8 py-4 text-lg gap-3 shadow-md hover:shadow-lg",
  };

  const variantStyles = {
    primary:
      "bg-[#FF8533] hover:bg-[#E66E1D] text-white focus:ring-[#FF8533] active:scale-[0.98]",
    secondary:
      "bg-[#1677C8] hover:bg-[#125FA0] text-white focus:ring-[#1677C8] active:scale-[0.98]",
    outline:
      "border-2 border-[#1677C8] text-[#1677C8] hover:bg-[#1677C8] hover:text-white focus:ring-[#1677C8] bg-transparent",
    white:
      "bg-white text-[#102B4E] hover:bg-slate-100 focus:ring-white border border-slate-200 shadow-sm",
  };

  return (
    <a
      href={siteConfig.phone.telHref}
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      aria-label={`Call Elizabeth Plumbing Pros at ${siteConfig.phone.display}`}
    >
      {showIcon && <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />}
      <span>{label}</span>
    </a>
  );
}


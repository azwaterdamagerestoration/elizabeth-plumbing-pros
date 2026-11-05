import React from "react";
import {
  AlertTriangle,
  ShieldAlert,
  Lightbulb,
  Info,
  XCircle,
} from "lucide-react";
import { BlogCallout, CalloutType } from "@/types";

interface EditorialCalloutProps {
  callout: BlogCallout;
  className?: string;
}

export function EditorialCallout({
  callout,
  className = "",
}: EditorialCalloutProps) {
  const configs: Record<
    CalloutType,
    {
      containerClass: string;
      iconClass: string;
      badgeText: string;
      badgeClass: string;
      Icon: React.ElementType;
    }
  > = {
    important: {
      containerClass:
        "bg-amber-50/70 border-amber-300 text-amber-950",
      iconClass: "text-amber-600 bg-amber-100",
      badgeText: "IMPORTANT NOTE",
      badgeClass: "text-amber-800 bg-amber-100/80 border-amber-200",
      Icon: AlertTriangle,
    },
    safety: {
      containerClass:
        "bg-rose-50/80 border-rose-300 text-rose-950",
      iconClass: "text-rose-600 bg-rose-100",
      badgeText: "SAFETY WARNING",
      badgeClass: "text-rose-800 bg-rose-100/80 border-rose-200",
      Icon: ShieldAlert,
    },
    tip: {
      containerClass:
        "bg-blue-50/70 border-blue-200 text-slate-900",
      iconClass: "text-[#1677C8] bg-blue-100",
      badgeText: "PRO TIP",
      badgeClass: "text-[#1677C8] bg-blue-100/80 border-blue-200",
      Icon: Lightbulb,
    },
    fact: {
      containerClass:
        "bg-teal-50/70 border-teal-200 text-teal-950",
      iconClass: "text-teal-600 bg-teal-100",
      badgeText: "QUICK FACT",
      badgeClass: "text-teal-800 bg-teal-100/80 border-teal-200",
      Icon: Info,
    },
    mistake: {
      containerClass:
        "bg-orange-50/70 border-orange-200 text-orange-950",
      iconClass: "text-[#FF8533] bg-orange-100",
      badgeText: "COMMON MISTAKE",
      badgeClass: "text-[#E66E1D] bg-orange-100/80 border-orange-200",
      Icon: XCircle,
    },
  };

  const current = configs[callout.type] || configs.important;
  const { Icon, containerClass, iconClass, badgeText, badgeClass } = current;

  return (
    <aside
      className={`my-6 rounded-2xl border p-5 sm:p-6 shadow-2xs ${containerClass} ${className}`}
      aria-label={badgeText}
    >
      <div className="flex items-start gap-3.5">
        <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${iconClass}`}>
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>

        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-2">
            <span
              className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${badgeClass}`}
            >
              {badgeText}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold leading-snug">
            {callout.title}
          </h3>

          <p className="text-sm sm:text-base leading-relaxed opacity-90">
            {callout.text}
          </p>
        </div>
      </div>
    </aside>
  );
}


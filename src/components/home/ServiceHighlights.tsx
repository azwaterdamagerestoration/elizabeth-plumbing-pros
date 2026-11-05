import React from "react";
import { MapPin, Wrench, ShieldAlert, Flame } from "lucide-react";
import { Container } from "@/shared/Container";

const highlights = [
  {
    icon: MapPin,
    title: "Local Elizabeth Coverage",
    description: "Assisting Elizabethport, Elmora, Midtown & neighboring Union County towns.",
    iconColor: "text-[#1677C8]",
    bgColor: "bg-blue-50/80",
    borderAccent: "border-blue-100",
  },
  {
    icon: Wrench,
    title: "Plumbing Repair Help",
    description: "Support for pipe leaks, fixture issues, running toilets, and shut-off valves.",
    iconColor: "text-[#FF8533]",
    bgColor: "bg-orange-50/80",
    borderAccent: "border-orange-100",
  },
  {
    icon: ShieldAlert,
    title: "Drain & Sewer Services",
    description: "Assistance with stubborn clogs, main line sewer backups, and slow drains.",
    iconColor: "text-[#23B8D4]",
    bgColor: "bg-cyan-50/80",
    borderAccent: "border-cyan-100",
  },
  {
    icon: Flame,
    title: "Water Heater Services",
    description: "Solutions for leaking tanks, loss of hot water, and system replacements.",
    iconColor: "text-[#102B4E]",
    bgColor: "bg-slate-100/80",
    borderAccent: "border-slate-200",
  },
];

export function ServiceHighlights() {
  return (
    <div className="relative z-30 -mt-6 sm:-mt-8 lg:-mt-10">
      <Container>
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-5 sm:p-7 lg:p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 pt-4 sm:pt-0 ${
                    idx !== 0 ? "sm:pl-6 lg:pl-6" : ""
                  } group`}
                >
                  <div
                    className={`p-3.5 rounded-2xl ${item.bgColor} ${item.iconColor} ${item.borderAccent} border shadow-sm shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#102B4E] leading-snug group-hover:text-[#1677C8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5D6B7C] mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

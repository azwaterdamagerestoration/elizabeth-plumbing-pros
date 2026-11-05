import React from "react";
import { Container } from "@/shared/Container";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { LocationHighlight } from "@/types/location";

interface LocationHighlightsProps {
  highlights: LocationHighlight[];
}

export function LocationHighlights({ highlights }: LocationHighlightsProps) {
  const accentStyles = [
    { iconColor: "text-[#1677C8]", bgColor: "bg-blue-50/80", borderAccent: "border-blue-100" },
    { iconColor: "text-[#FF8533]", bgColor: "bg-orange-50/80", borderAccent: "border-orange-100" },
    { iconColor: "text-[#23B8D4]", bgColor: "bg-cyan-50/80", borderAccent: "border-cyan-100" },
    { iconColor: "text-[#102B4E]", bgColor: "bg-slate-100/80", borderAccent: "border-slate-200" },
  ];

  return (
    <div className="relative z-30 -mt-6 sm:-mt-8 lg:-mt-10">
      <Container>
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-5 sm:p-7 lg:p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {highlights.map((item, idx) => {
              const style = accentStyles[idx % accentStyles.length];
              return (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 pt-4 sm:pt-0 ${
                    idx !== 0 ? "sm:pl-6 lg:pl-6" : ""
                  } group`}
                >
                  <div
                    className={`p-3.5 rounded-2xl ${style.bgColor} ${style.iconColor} ${style.borderAccent} border shadow-sm shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <DynamicIcon name={item.iconName} className="w-6 h-6" />
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


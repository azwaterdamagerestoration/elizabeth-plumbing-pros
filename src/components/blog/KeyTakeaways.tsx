import React from "react";
import { CheckCircle2, BookmarkCheck } from "lucide-react";

interface KeyTakeawaysProps {
  takeaways: string[];
  className?: string;
}

export function KeyTakeaways({
  takeaways,
  className = "",
}: KeyTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <div
      className={`rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 sm:p-7 shadow-xs ${className}`}
    >
      <div className="flex items-center gap-2.5 mb-4 text-[#102B4E]">
        <div className="p-2 rounded-xl bg-slate-200/70 text-[#1677C8]">
          <BookmarkCheck className="w-5 h-5" aria-hidden="true" />
        </div>
        <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">
          Key Takeaways
        </h2>
      </div>

      <ul className="space-y-3">
        {takeaways.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0 mt-1" aria-hidden="true" />
            <span className="text-sm sm:text-base text-[#172B45] leading-relaxed">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}


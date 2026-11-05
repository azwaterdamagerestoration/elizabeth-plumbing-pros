import React from "react";
import { Sparkles, Info } from "lucide-react";
import { BlogQuickAnswer } from "@/types";

interface QuickAnswerProps {
  quickAnswer: BlogQuickAnswer;
  className?: string;
}

export function QuickAnswer({ quickAnswer, className = "" }: QuickAnswerProps) {
  return (
    <div
      className={`rounded-2xl border border-blue-200/90 bg-blue-50/70 p-6 sm:p-7 shadow-xs relative overflow-hidden ${className}`}
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-xl bg-[#1677C8] text-white shrink-0 shadow-xs mt-0.5">
          <Sparkles className="w-5 h-5" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1677C8]">
              QUICK ANSWER / AT A GLANCE
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-extrabold text-[#102B4E] leading-snug">
            {quickAnswer.question}
          </h2>

          <p className="text-sm sm:text-base text-[#172B45] leading-relaxed font-medium">
            {quickAnswer.answer}
          </p>

          {quickAnswer.supportingNote && (
            <div className="pt-2 flex items-center gap-1.5 text-xs text-[#5D6B7C]">
              <Info className="w-3.5 h-3.5 text-[#1677C8] shrink-0" />
              <span>{quickAnswer.supportingNote}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


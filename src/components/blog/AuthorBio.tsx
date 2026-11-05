import React from "react";
import { ShieldAlert, BookOpen } from "lucide-react";
import { BlogAuthor, BlogReviewer } from "@/types";

interface AuthorBioProps {
  author?: BlogAuthor;
  reviewer?: BlogReviewer;
  className?: string;
}

export function AuthorBio({ author, reviewer, className = "" }: AuthorBioProps) {
  const defaultAuthor: BlogAuthor = {
    name: "Elizabeth Plumbing Pros Editorial Team",
    role: "Plumbing Research & Homeowner Safety Specialists",
    bio: "Our technical editorial staff researches residential plumbing codes, manufacturer maintenance standards, and homeowner water safety practices to provide verified, actionable guidance for New Jersey property owners.",
  };

  const currentAuthor = author || defaultAuthor;

  return (
    <div
      className={`my-10 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 sm:p-8 shadow-xs ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-start gap-5">
        <div className="w-14 h-14 rounded-2xl bg-[#102B4E] text-white flex items-center justify-center font-extrabold text-lg shrink-0 shadow-sm">
          EP
        </div>

        <div className="space-y-2 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1677C8] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
              EDITORIAL CREDIBILITY &amp; STANDARDS
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-[#102B4E]">
            {currentAuthor.name}
          </h3>

          <p className="text-xs sm:text-sm font-semibold text-[#5D6B7C]">
            {currentAuthor.role}
          </p>

          <p className="text-sm text-[#172B45] leading-relaxed pt-1">
            {currentAuthor.bio}
          </p>

          {/* Optional Reviewer Attribution */}
          {reviewer && (
            <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-[#1677C8] shrink-0 mt-0.5" />
              <div className="text-xs text-[#5D6B7C]">
                <span className="font-bold text-[#102B4E]">Technical Review: </span>
                Reviewed by <span className="font-semibold">{reviewer.name}</span>
                {reviewer.credentials ? ` (${reviewer.credentials})` : ""}{" "}
                {reviewer.date ? `on ${reviewer.date}` : ""}.
              </div>
            </div>
          )}

          {/* Editorial Transparency note */}
          <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-500">
            <BookOpen className="w-3.5 h-3.5 text-[#1677C8]" />
            <span>
              Our articles synthesize guidance from the International Plumbing Code (IPC), EPA WaterSense, and verified industry diagnostic protocols.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

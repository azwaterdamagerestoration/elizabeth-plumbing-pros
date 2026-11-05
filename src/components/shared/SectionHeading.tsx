import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`mb-10 sm:mb-14 ${
        isCenter ? "text-center mx-auto" : "text-left"
      } max-w-3xl ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs sm:text-sm font-bold tracking-wider uppercase mb-2.5 px-3 py-1 rounded-full ${
            isDark
              ? "bg-[#23B8D4]/20 text-[#23B8D4] border border-[#23B8D4]/30"
              : "bg-[#1677C8]/10 text-[#1677C8] border border-[#1677C8]/20"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
          isDark ? "text-white" : "text-[#102B4E]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-[#5D6B7C]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}


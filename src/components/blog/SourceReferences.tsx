import React from "react";
import { ExternalLink, BookCheck } from "lucide-react";
import { BlogSourceReference } from "@/types";

interface SourceReferencesProps {
  sources?: BlogSourceReference[];
  className?: string;
}

export function SourceReferences({
  sources,
  className = "",
}: SourceReferencesProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <section
      className={`my-10 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs ${className}`}
      aria-label="Sources and Further Reading"
    >
      <div className="flex items-center gap-2 text-[#102B4E] mb-4">
        <BookCheck className="w-5 h-5 text-[#1677C8]" aria-hidden="true" />
        <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">
          Sources &amp; Industry References
        </h2>
      </div>

      <p className="text-xs sm:text-sm text-[#5D6B7C] mb-4">
        The diagnostic procedures and plumbing benchmarks presented in this guide reference verified standards from recognized water utilities and technical authorities:
      </p>

      <ul className="space-y-3">
        {sources.map((source, index) => (
          <li
            key={index}
            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#172B45]"
          >
            <span className="font-bold text-[#1677C8] select-none shrink-0 mt-0.5">
              [{index + 1}]
            </span>
            <div>
              <a
                href={source.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="font-semibold text-[#102B4E] hover:text-[#1677C8] hover:underline inline-flex items-center gap-1 transition-colors"
              >
                <span>{source.title}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              </a>
              <span className="text-[#5D6B7C] ml-1.5 font-normal">
                — {source.organization}
                {source.publicationDate ? ` (${source.publicationDate})` : ""}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}


import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { BlogSection } from "@/types";
import { EditorialCallout } from "./EditorialCallout";
import { ComparisonTable } from "./ComparisonTable";

function renderTextWithLinks(text: string): React.ReactNode {
  const parts: (string | React.ReactNode)[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const label = match[1];
    const href = match[2];
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      parts.push(
        <Link
          key={`${match.index}-${href}`}
          href={href}
          className="font-semibold text-[#1677C8] hover:text-[#0D5494] underline decoration-blue-200 underline-offset-2 hover:decoration-[#1677C8] transition-colors"
        >
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={`${match.index}-${href}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#1677C8] hover:text-[#0D5494] underline decoration-blue-200 underline-offset-2 hover:decoration-[#1677C8] transition-colors"
        >
          {label}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

interface ArticleBodyProps {
  sections?: BlogSection[];
  legacyContent?: string[];
  className?: string;
}

export function ArticleBody({
  sections,
  legacyContent,
  className = "",
}: ArticleBodyProps) {
  // If legacy content is present without structured sections
  if (!sections || sections.length === 0) {
    if (!legacyContent || legacyContent.length === 0) return null;

    return (
      <div className={`space-y-6 text-base sm:text-lg text-[#172B45] leading-relaxed ${className}`}>
        {legacyContent.map((paragraph, index) => (
          <p key={index}>{renderTextWithLinks(paragraph)}</p>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-12 ${className}`}>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          {/* Main H2 Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B4E] tracking-tight leading-tight mb-4 pt-2">
            {section.heading}
          </h2>

          {/* Section Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-[#172B45] leading-[1.75]">
            {section.paragraphs.map((p, idx) => (
              <p key={idx}>{renderTextWithLinks(p)}</p>
            ))}
          </div>

          {/* Optional Bullets */}
          {section.bullets && section.bullets.length > 0 && (
            <ul className="my-6 space-y-2.5 pl-1">
              {section.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1677C8] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base sm:text-lg text-[#172B45] leading-relaxed">
                    {renderTextWithLinks(bullet)}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Optional Supporting Image */}
          {section.image && (
            <figure className="my-8">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-md">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 760px"
                  className="object-cover object-center"
                />
              </div>
              {section.image.caption && (
                <figcaption className="mt-2.5 text-center text-xs sm:text-sm text-slate-500 font-medium italic">
                  {section.image.caption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Optional Callout */}
          {section.callout && (
            <EditorialCallout callout={section.callout} />
          )}

          {/* Optional Table */}
          {section.table && (
            <ComparisonTable table={section.table} />
          )}

          {/* Optional H3 Subsections */}
          {section.subsections && section.subsections.length > 0 && (
            <div className="mt-8 space-y-8 pl-0 sm:pl-4 border-l-0 sm:border-l-2 sm:border-slate-100">
              {section.subsections.map((sub) => (
                <div key={sub.id} id={sub.id} className="scroll-mt-28">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102B4E] tracking-tight leading-snug mb-3">
                    {sub.heading}
                  </h3>

                  <div className="space-y-4 text-base sm:text-lg text-[#172B45] leading-[1.75]">
                    {sub.paragraphs.map((p, idx) => (
                      <p key={idx}>{renderTextWithLinks(p)}</p>
                    ))}
                  </div>

                  {sub.bullets && sub.bullets.length > 0 && (
                    <ul className="my-4 space-y-2 pl-1">
                      {sub.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#23B8D4] shrink-0 mt-1" aria-hidden="true" />
                          <span className="text-sm sm:text-base text-[#172B45] leading-relaxed">
                            {renderTextWithLinks(bullet)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sub.callout && (
                    <EditorialCallout callout={sub.callout} />
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}


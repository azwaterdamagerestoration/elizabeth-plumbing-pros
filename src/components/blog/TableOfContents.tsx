"use client";

import React, { useEffect, useState } from "react";
import { ListOrdered, ChevronDown, AlignLeft } from "lucide-react";
import { TableOfContentsItem } from "@/types";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  className?: string;
  isMobileOnly?: boolean;
}

export function TableOfContents({
  items,
  className = "",
  isMobileOnly = false,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);
  const [readingProgress, setReadingProgress] = useState<number>(0);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-90px 0px -65% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = (window.scrollY / docHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
      setIsOpenMobile(false);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  if (!items || items.length === 0) return null;

  // Mobile Collapsible Table of Contents
  if (isMobileOnly) {
    return (
      <div className={`lg:hidden mb-8 ${className}`}>
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
          <button
            type="button"
            onClick={() => setIsOpenMobile((prev) => !prev)}
            aria-expanded={isOpenMobile}
            aria-controls="mobile-toc-list"
            className="w-full flex items-center justify-between p-4.5 text-left font-bold text-[#102B4E] hover:text-[#1677C8] transition-colors"
          >
            <div className="flex items-center gap-2 text-sm">
              <ListOrdered className="w-4 h-4 text-[#1677C8]" />
              <span>Table of Contents</span>
              <span className="text-xs text-slate-400 font-normal">
                ({items.length} sections)
              </span>
            </div>
            <div
              className={`p-1.5 rounded-lg bg-slate-100 text-slate-500 transition-transform duration-200 ${
                isOpenMobile ? "rotate-180 bg-blue-50 text-[#1677C8]" : ""
              }`}
            >
              <ChevronDown className="w-4 h-4" />
            </div>
          </button>

          {isOpenMobile && (
            <div
              id="mobile-toc-list"
              className="px-4.5 pb-4.5 pt-1 border-t border-slate-100 bg-[#F8FAFC]"
            >
              <ul className="space-y-1.5 text-xs sm:text-sm">
                {items.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li
                      key={item.id}
                      className={item.level === 3 ? "pl-4 border-l border-slate-200 ml-1.5" : ""}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleLinkClick(e, item.id)}
                        className={`block py-1.5 transition-colors leading-snug rounded-md px-2 ${
                          isActive
                            ? "bg-white text-[#1677C8] font-bold shadow-2xs"
                            : "text-[#5D6B7C] hover:text-[#102B4E]"
                        }`}
                        aria-current={isActive ? "location" : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Desktop Sticky Table of Contents
  return (
    <nav
      aria-label="Table of contents"
      className={`sticky top-28 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all ${className}`}
    >
      {/* Subtle Reading Progress Header */}
      <div className="mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1.5">
          <div className="flex items-center gap-1.5 text-[#102B4E] font-bold uppercase tracking-wider text-[11px]">
            <AlignLeft className="w-3.5 h-3.5 text-[#1677C8]" />
            <span>On This Page</span>
          </div>
          <span>{Math.round(readingProgress)}%</span>
        </div>
        <div
          className="w-full bg-slate-100 h-1 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={Math.round(readingProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="bg-[#1677C8] h-full transition-all duration-150 ease-out"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      </div>

      {/* Nav List */}
      <div className="max-h-[calc(100vh-220px)] overflow-y-auto pr-1 space-y-1 text-xs">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <div
              key={item.id}
              className={`${
                item.level === 3 ? "pl-3 ml-2 border-l border-slate-200" : ""
              }`}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`group flex items-start gap-2 py-1.5 px-2 rounded-lg transition-all leading-snug ${
                  isActive
                    ? "bg-blue-50/80 text-[#1677C8] font-bold border-l-2 border-[#1677C8]"
                    : "text-[#5D6B7C] hover:text-[#102B4E] hover:bg-slate-50"
                }`}
                aria-current={isActive ? "location" : undefined}
              >
                <span className="line-clamp-2">{item.label}</span>
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
}


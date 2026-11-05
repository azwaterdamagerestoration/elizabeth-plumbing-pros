"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { Info, AlignLeft, Printer } from "lucide-react";

export interface LegalSectionItem {
  id: string;
  title: string;
}

interface LegalContentLayoutProps {
  title: string;
  lastUpdated: string;
  effectiveDate: string;
  breadcrumbs: { label: string; href?: string }[];
  tocItems: LegalSectionItem[];
  reviewNotice?: string;
  children: React.ReactNode;
}

export function LegalContentLayout({
  title,
  lastUpdated,
  effectiveDate,
  breadcrumbs,
  tocItems,
  reviewNotice = "Transparency & Operational Compliance: This document outlines the actual data practices, referral disclosures, and terms governing Elizabeth Plumbing Pros. Independent legal counsel review is conducted periodically.",
  children,
}: LegalContentLayoutProps) {
  const [activeId, setActiveId] = useState<string>(tocItems[0]?.id || "");

  useEffect(() => {
    if (tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="py-10 sm:py-16 bg-[#F8FAFC]">
      <Container className="max-w-6xl">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-7 sm:p-12 mb-10">
          {/* Header */}
          <div className="border-b border-slate-200 pb-8 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#1677C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                OFFICIAL DOCUMENTATION
              </span>
              <button
                type="button"
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#102B4E] transition-colors"
                aria-label="Print this document"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Document</span>
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102B4E] tracking-tight">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-xs sm:text-sm text-[#5D6B7C]">
              <span>Effective Date: <strong>{effectiveDate}</strong></span>
              <span>•</span>
              <span>Last Modified: <strong>{lastUpdated}</strong></span>
              <span>•</span>
              <span>Entity: <strong>{siteConfig.name}</strong></span>
            </div>
          </div>

          {/* Compliance Review Banner */}
          {reviewNotice && (
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 mb-10 flex items-start gap-3.5 text-xs sm:text-sm text-[#172B45] leading-relaxed">
              <Info className="w-5 h-5 text-[#1677C8] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#102B4E] font-bold block mb-0.5">
                  Legal &amp; Operational Notice:
                </strong>
                {reviewNotice}
              </div>
            </div>
          )}

          {/* 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Table of Contents */}
            <aside className="lg:col-span-4 xl:col-span-3.5">
              <nav
                aria-label="Document Sections"
                className="sticky top-28 rounded-2xl bg-slate-50 border border-slate-200/90 p-5 space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102B4E] pb-3 border-b border-slate-200">
                  <AlignLeft className="w-4 h-4 text-[#1677C8]" />
                  <span>Sections</span>
                </div>
                <ul className="space-y-1 text-xs">
                  {tocItems.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => handleScrollTo(e, item.id)}
                          className={`block py-1.5 px-2.5 rounded-lg transition-all leading-snug ${
                            isActive
                              ? "bg-white text-[#1677C8] font-bold shadow-2xs border-l-2 border-[#1677C8]"
                              : "text-[#5D6B7C] hover:text-[#102B4E] hover:bg-white/60"
                          }`}
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="pt-4 mt-4 border-t border-slate-200 text-xs text-[#5D6B7C] space-y-1">
                  <p className="font-semibold text-[#102B4E]">Questions?</p>
                  <p>Inquiries may be directed to our phone coordinator line at {siteConfig.phone.display}.</p>
                </div>
              </nav>
            </aside>

            {/* Right Column: Full Document Body */}
            <div className="lg:col-span-8 xl:col-span-8.5 prose prose-slate max-w-none text-base text-[#172B45] leading-[1.8] space-y-8">
              {children}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqsData } from "@/data/faqs";
import { FAQItem } from "@/types";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";

interface FAQSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: FAQItem[];
  className?: string;
}

export function FAQSection({
  eyebrow = "FREQUENTLY ASKED QUESTIONS",
  title = "Frequently Asked Questions About Plumbing Services in Elizabeth, NJ",
  description = "Clear answers to common questions regarding local plumbing repairs, emergency steps, and connecting with available specialists.",
  items: customItems,
  className = "",
}: FAQSectionProps = {}) {
  const activeItems = customItems || faqsData;
  const [openId, setOpenId] = useState<string | null>(
    activeItems.length > 0 ? activeItems[0].id : null
  );

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={`py-20 sm:py-24 lg:py-28 bg-[#F6F9FC] ${className}`}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="max-w-3xl lg:max-w-4xl mx-auto space-y-4">
          {activeItems.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#1677C8] bg-white shadow-md ring-1 ring-[#1677C8]/20"
                    : "border-slate-200/90 bg-white hover:border-slate-300 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left font-extrabold text-[#102B4E] hover:text-[#1677C8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1677C8] rounded-2xl"
                >
                  <span className="text-base sm:text-lg pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl transition-all duration-200 shrink-0 ${
                      isOpen
                        ? "bg-[#1677C8] text-white rotate-180 shadow-sm"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-6 sm:px-7 pb-7 pt-1 text-sm sm:text-base text-[#5D6B7C] leading-relaxed border-t border-slate-100"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

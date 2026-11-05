"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  ChevronDown,
  Wrench,
  AlertTriangle,
  Flame,
  Phone,
  DollarSign,
  Search,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { CallButton } from "@/shared/CallButton";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/config/site";
import { masterFAQList } from "@/data/faq";

export function FAQClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>("gen-1");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { key: "all", label: "All Questions", icon: HelpCircle },
    { key: "general", label: "General Plumbing", icon: Wrench },
    { key: "emergency", label: "Emergency Steps", icon: AlertTriangle },
    { key: "drains", label: "Drain Cleaning", icon: Wrench },
    { key: "heaters", label: "Water Heaters", icon: Flame },
    { key: "requests", label: "Service Requests", icon: Phone },
    { key: "pricing", label: "Pricing & Estimates", icon: DollarSign },
  ];

  const filteredFAQs = masterFAQList.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.categoryKey === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#080F1F] via-[#0B172D] to-[#102B4E] text-white pt-8 pb-14 sm:pb-20 relative overflow-hidden">
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1677C8]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 max-w-4xl">
          <Breadcrumbs
            variant="light"
            items={[{ label: "Frequently Asked Questions" }]}
            className="mb-6"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1677C8]/25 border border-[#23B8D4]/40 text-[#23B8D4] text-xs font-extrabold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CENTRAL HELP CENTER</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-white tracking-tight leading-[1.15]">
            Frequently Asked Plumbing Questions
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
            Clear, transparent answers regarding local plumbing repairs, emergency steps, contractor connections, and pricing considerations in Elizabeth, NJ.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-xl relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by symptom, emergency step, or service..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#23B8D4] text-sm backdrop-blur-md"
            />
          </div>
        </Container>
      </section>

      {/* Main FAQ Section */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]">
        <Container className="max-w-5xl">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#102B4E] text-white shadow-md"
                      : "bg-white text-[#5D6B7C] border border-slate-200/90 hover:border-slate-300 hover:text-[#102B4E]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#23B8D4]" : "text-slate-400"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Accordion List */}
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
              <p className="text-base text-[#5D6B7C]">
                No questions found matching &quot;{searchQuery}&quot;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-3 text-sm font-bold text-[#1677C8] hover:underline"
              >
                Clear search filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => {
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
                      className="w-full flex items-center justify-between p-6 sm:p-7 text-left font-extrabold text-[#102B4E] hover:text-[#1677C8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1677C8] rounded-2xl cursor-pointer"
                    >
                      <div className="pr-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#1677C8] block mb-1">
                          {faq.category}
                        </span>
                        <span className="text-base sm:text-lg leading-snug">
                          {faq.question}
                        </span>
                      </div>
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
                        className="px-6 sm:px-7 pb-7 pt-1 text-sm sm:text-base text-[#5D6B7C] leading-relaxed border-t border-slate-100 space-y-3"
                      >
                        <p>{faq.answer}</p>
                        {faq.relatedLink && (
                          <div className="pt-2">
                            <Link
                              href={faq.relatedLink.href}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677C8] hover:underline"
                            >
                              <span>{faq.relatedLink.label}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Prompt Box */}
          <div className="mt-12 p-7 rounded-3xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="text-lg font-bold text-[#102B4E]">
                Have a Question Not Answered Here?
              </h2>
              <p className="text-xs sm:text-sm text-[#5D6B7C]">
                Call {siteConfig.phone.display} to speak with our Elizabeth telephone team directly.
              </p>
            </div>
            <CallButton size="md" variant="primary" />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA
        eyebrow="READY TO DISCUSS YOUR PLUMBING REPAIR?"
        title="Call Elizabeth Plumbing Pros at (908) 738-8526"
        description="Connect directly with an independent local plumbing contractor ready to assist with your repair or maintenance needs."
        buttonLabel={`CALL ${siteConfig.phone.display}`}
      />
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
} from "lucide-react";
import { blogPostsData } from "@/data/blog";
import { commonProblemsData } from "@/data/problems";
import { servicesData } from "@/data/services";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { SectionHeading } from "@/shared/SectionHeading";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/config/site";
import { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "Plumbing Resources & Homeowner Guides",
  description:
    "Comprehensive plumbing resource hub for Elizabeth, NJ homeowners: emergency response checklists, seasonal freeze prevention, leak diagnostics, and repair guides.",
  alternates: {
    canonical: `${siteConfig.url}/resources`,
  },
};

const resourceFAQs: FAQItem[] = [
  {
    id: "res-faq-1",
    question: "How do I shut off the main water supply in an Elizabeth home?",
    answer:
      "In most Elizabeth single-family and two-family homes, the main shutoff valve is located in the basement near the front foundation wall where the municipal service enters from the street. Turn gate valves clockwise until tight, or rotate ball lever valves 90 degrees until perpendicular to the pipe.",
  },
  {
    id: "res-faq-2",
    question: "How can I prevent outdoor hose bibs from freezing in winter?",
    answer:
      "Disconnect all garden hoses before the first hard freeze in November. If your home has interior shutoff valves for outdoor spigots, close the interior valve and open the outside faucet to drain remaining water out of the brass stem.",
  },
  {
    id: "res-faq-3",
    question: "Are chemical drain cleaners safe for older Elizabeth homes?",
    answer:
      "We strongly advise against chemical drain cleaners, especially in older homes with original galvanized steel or lead branch drains. The caustic sodium hydroxide or sulfuric acid creates exothermic heat reactions that accelerate pipe corrosion and can weaken solder joints.",
  },
  {
    id: "res-faq-4",
    question: "When does a plumbing issue require a municipal permit in Union County?",
    answer:
      "Under the New Jersey Uniform Construction Code, major plumbing alterations—such as water heater replacements, sewer lateral replacements, and extensive supply line repiping—require permits and subsequent municipal inspection by your local building department.",
  },
];

export default function ResourcesPage() {
  const topServices = servicesData.slice(0, 6);

  return (
    <div className="bg-white min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="bg-gradient-to-b from-[#080F1F] via-[#0B172D] to-[#102B4E] text-white pt-8 pb-14 sm:pb-20 relative overflow-hidden">
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1677C8]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 max-w-4xl">
          <Breadcrumbs
            variant="light"
            items={[{ label: "Resources" }]}
            className="mb-6"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1677C8]/25 border border-[#23B8D4]/40 text-[#23B8D4] text-xs font-extrabold uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>HOMEOWNER KNOWLEDGE HUB</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-white tracking-tight leading-[1.15]">
            Helpful Plumbing Resources for Homeowners
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
            Practical guides, diagnostic checklists, emergency steps, and seasonal maintenance advice to help you protect your residential plumbing investment in Elizabeth and Union County.
          </p>
        </Container>
      </section>

      {/* SECTION 2 — EMERGENCY GUIDANCE */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            eyebrow="EMERGENCY GUIDES"
            title="Immediate Action Protocols for Critical Failures"
            description="When pressurized water or sewage threatens your home, take these verified steps before the technician arrives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {blogPostsData.slice(0, 2).map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#102B4E]/90 text-white text-xs font-extrabold tracking-wider uppercase backdrop-blur-xs">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex items-center gap-3 text-xs text-[#5D6B7C] mb-3">
                      <div className="flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#1677C8]" />
                        <span>{post.publishedDate}</span>
                      </div>
                      <span>&bull;</span>
                      <div className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#1677C8]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="mt-3 text-sm text-[#5D6B7C] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 border-t border-slate-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 3 — MAINTENANCE & EQUIPMENT GUIDES */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
        <Container>
          <SectionHeading
            eyebrow="PREVENTATIVE CARE"
            title="Equipment Maintenance &amp; Prevention Articles"
            description="Proactive maintenance extends equipment lifespan and reduces the risk of unexpected midnight breakdowns."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {blogPostsData.slice(2, 4).map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#102B4E]/90 text-white text-xs font-extrabold tracking-wider uppercase backdrop-blur-xs">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex items-center gap-3 text-xs text-[#5D6B7C] mb-3">
                      <div className="flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#1677C8]" />
                        <span>{post.publishedDate}</span>
                      </div>
                      <span>&bull;</span>
                      <div className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#1677C8]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="mt-3 text-sm text-[#5D6B7C] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 border-t border-slate-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1677C8] hover:underline"
            >
              <span>Visit our full blog archive for all published articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION 4 — PLUMBING PROBLEM GUIDES BY SYMPTOM */}
      <section className="py-14 sm:py-20 bg-[#F6F9FC] border-t border-slate-200/80">
        <Container>
          <SectionHeading
            eyebrow="TROUBLESHOOTING"
            title="Plumbing Symptoms Directory"
            description="Quick reference guides for identifying common household plumbing symptoms."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {commonProblemsData.map((prob) => (
              <div
                key={prob.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1677C8] flex items-center justify-center mb-3">
                    <DynamicIcon name={prob.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-base text-[#102B4E]">
                    {prob.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#5D6B7C] leading-relaxed">
                    {prob.symptoms}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    href={`/services/${prob.recommendedServiceSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677C8] hover:underline"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5 — RELATED SERVICES */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
        <Container>
          <SectionHeading
            eyebrow="PROFESSIONAL SOLUTIONS"
            title="Explore Related Professional Services"
            description="When homeowner troubleshooting reaches its limits, connect with local specialists."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {topServices.map((svc) => (
              <div
                key={svc.id}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-blue-50 text-[#1677C8] shrink-0">
                  <DynamicIcon name={svc.iconName} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-[#102B4E]">
                    {svc.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#5D6B7C] line-clamp-2">
                    {svc.shortDescription}
                  </p>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1677C8] hover:underline mt-2"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 6 — FAQS */}
      <FAQSection
        eyebrow="RESOURCE FAQS"
        title="Frequently Asked Homeowner Questions"
        description="Key insights on water shutoff valves, winterization, and local building codes."
        items={resourceFAQs}
        className="border-t border-slate-200/90"
      />

      {/* SECTION 7 — FINAL CTA */}
      <FinalCTA
        eyebrow="NEED HANDS-ON PLUMBING HELP?"
        title="Connect With an Available Specialist in Elizabeth, NJ"
        description="Call (908) 738-8526 to discuss your plumbing problem with our telephone coordination team."
        buttonLabel={`CALL ${siteConfig.phone.display}`}
      />
    </div>
  );
}

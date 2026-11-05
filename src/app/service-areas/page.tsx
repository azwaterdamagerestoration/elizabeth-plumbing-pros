import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  ArrowRight,
} from "lucide-react";
import { locationsData } from "@/data/locations";
import { servicesData } from "@/data/services";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { CallButton } from "@/shared/CallButton";
import { SectionHeading } from "@/shared/SectionHeading";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { siteConfig } from "@/config/site";
import { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "Plumbing Service Areas Near Elizabeth, NJ",
  description:
    "Explore plumbing service coverage across Elizabeth, Union, Westfield, Cranford, Roselle, and Fanwood in Union County, NJ. Call (908) 738-8526.",
  alternates: {
    canonical: `${siteConfig.url}/service-areas`,
  },
};

const serviceAreaFAQs: FAQItem[] = [
  {
    id: "sa-faq-1",
    question: "Do you have physical offices in each of these cities?",
    answer:
      "No. Elizabeth Plumbing Pros functions as a digital lead-generation and telephone referral network connecting property owners with independent local plumbing contractors. We do not operate walk-in storefronts or retail branches in each town.",
  },
  {
    id: "sa-faq-2",
    question: "Are contractors licensed specifically for Union County municipalities?",
    answer:
      "Plumbing contractors operating in New Jersey hold state Master Plumber licenses issued by the New Jersey State Board of Examiners of Master Plumbers, permitting them to perform permitted work throughout Elizabeth and all Union County municipalities.",
  },
  {
    id: "sa-faq-3",
    question: "How quickly can a plumber arrive at my Union County home?",
    answer:
      "Arrival times vary depending on active technician dispatch, current traffic conditions along routes like Route 1/9, the Garden State Parkway, or Route 22, and whether your issue is classified as an urgent water emergency. Calling (908) 738-8526 provides the most accurate real-time assessment.",
  },
  {
    id: "sa-faq-4",
    question: "What if my town is just outside Elizabeth or Union County?",
    answer:
      "When you call, let the coordinator know your exact zip code. Many independent contractors in our regional network also service adjacent parts of Essex, Middlesex, and Somerset counties.",
  },
];

export default function ServiceAreasPage() {
  const topServices = servicesData.slice(0, 6);

  return (
    <div className="bg-white min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="bg-gradient-to-b from-[#080F1F] via-[#0B172D] to-[#102B4E] text-white pt-8 pb-14 sm:pb-20 relative overflow-hidden">
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1677C8]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <Breadcrumbs
            variant="light"
            items={[{ label: "Service Areas" }]}
            className="mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1677C8]/25 border border-[#23B8D4]/40 text-[#23B8D4] text-xs font-extrabold uppercase tracking-widest">
                <span>UNION COUNTY SERVICE DIRECTORY</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-white tracking-tight leading-[1.15]">
                Plumbing Service Areas in Elizabeth and Nearby Communities
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
                Connecting residential and commercial property owners with reliable independent plumbing professionals across Elizabeth, Union, Westfield, Cranford, Roselle, and Fanwood.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <CallButton
                  size="md"
                  variant="primary"
                  label={`CALL ${siteConfig.phone.display}`}
                  trackingEvent="hero_call_click"
                  className="shadow-md hover:shadow-orange-500/20 text-base"
                />
                <span className="text-xs sm:text-sm text-slate-300">
                  Direct phone dispatch • 6 Supported Municipalities
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
                <Image
                  src="/images/locations/union-hero.webp"
                  alt="Union County New Jersey plumbing service areas"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 & 3 — REGIONAL OVERVIEW & CITY CARDS */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            eyebrow="SUPPORTED MUNICIPALITIES"
            title="Local Coverage Across Union County, NJ"
            description="Explore our primary city hub in Elizabeth and our dedicated coverage hubs for neighboring communities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {locationsData.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-blue-50 text-[#1677C8] group-hover:bg-[#1677C8] group-hover:text-white transition-colors duration-200 shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-[#102B4E] font-bold">
                      {loc.postalCodes.slice(0, 2).join(", ")}
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors">
                    {loc.name}, NJ
                  </h2>
                  <p className="text-xs text-[#5D6B7C] font-semibold mt-0.5">
                    {loc.county}, {loc.state}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#5D6B7C] leading-relaxed line-clamp-3">
                    {loc.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                      Neighborhood Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.neighborhoodHighlights.map((n) => (
                        <span
                          key={n}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-[#172B45] font-medium"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={loc.id === "elizabeth" ? "/" : `/locations/plumber-${loc.id}-nj`}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                  >
                    <span>
                      {loc.id === "elizabeth"
                        ? "Explore Elizabeth Main Hub"
                        : `Explore ${loc.name} Hub`}
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5 — COMPACT SERVICES OVERVIEW */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <Container>
          <SectionHeading
            eyebrow="AVAILABLE SERVICES"
            title="Common Plumbing Solutions in These Municipalities"
            description="Our independent partners manage full residential plumbing needs across all 6 target locations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {topServices.map((svc) => (
              <div
                key={svc.id}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-blue-50 text-[#1677C8] shrink-0">
                  <DynamicIcon name={svc.iconName} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#102B4E] text-base">
                    {svc.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#5D6B7C] line-clamp-2">
                    {svc.shortDescription}
                  </p>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1677C8] hover:underline mt-2"
                  >
                    <span>Service Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1677C8] hover:underline"
            >
              <span>View all 12 services in the directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION 6 — HOW IT WORKS */}
      <HowItWorks />

      {/* SECTION 7 — FAQ */}
      <FAQSection
        eyebrow="LOCATION FAQS"
        title="Frequently Asked Questions About Regional Coverage"
        description="Clear answers regarding licensing, travel, and municipality requirements in Union County."
        items={serviceAreaFAQs}
        className="border-t border-slate-200/90"
      />

      {/* SECTION 8 — FINAL CTA */}
      <FinalCTA
        eyebrow="CHECK TECHNICIAN AVAILABILITY IN YOUR CITY"
        title="Call Elizabeth Plumbing Pros at (908) 738-8526"
        description="Speak with our telephone coordination team to verify immediate contractor availability in your specific neighborhood."
        buttonLabel={`CALL ${siteConfig.phone.display}`}
      />
    </div>
  );
}

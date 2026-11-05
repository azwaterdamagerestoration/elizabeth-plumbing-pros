import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { commonProblemsData } from "@/data/problems";
import { locationsData } from "@/data/locations";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { CallButton } from "@/shared/CallButton";
import { SectionHeading } from "@/shared/SectionHeading";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { EmergencySection } from "@/components/home/EmergencySection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/config/site";
import { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "Plumbing Services Directory",
  description:
    "Explore plumbing services in Elizabeth, NJ: drain cleaning, emergency pipe repair, leak detection, water heaters, and sewer solutions. Call (908) 738-8526.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

const serviceDirectoryFAQs: FAQItem[] = [
  {
    id: "svc-dir-faq-1",
    question: "How do I know which plumbing service to request?",
    answer:
      "If you are unsure whether your problem requires drain cleaning, sewer inspection, or leak detection, simply describe your visible symptoms when calling (908) 738-8526. Our phone team will help identify the appropriate category and connect you with a specialist.",
  },
  {
    id: "svc-dir-faq-2",
    question: "Are emergency plumbing services available for burst pipes?",
    answer:
      "Yes. If an active pipe rupture, severe drain backup, or water heater leak threatens your property, call immediately. We coordinate with local technicians who prioritize urgent residential interventions.",
  },
  {
    id: "svc-dir-faq-3",
    question: "Do independent contractors provide written estimates?",
    answer:
      "Yes. Reputable independent plumbers evaluate your plumbing issue on-site and provide an itemized written estimate detailing labor and replacement parts before any physical work starts.",
  },
  {
    id: "svc-dir-faq-4",
    question: "Are these plumbing services available outside Elizabeth?",
    answer:
      "Yes. The independent contractor network services Elizabeth as well as surrounding Union County communities including Union, Westfield, Cranford, Roselle, and Fanwood.",
  },
];

export default function ServicesPage() {
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
            items={[{ label: "Plumbing Services" }]}
            className="mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1677C8]/25 border border-[#23B8D4]/40 text-[#23B8D4] text-xs font-extrabold uppercase tracking-widest">
                <span>COMPREHENSIVE SERVICE DIRECTORY</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-white tracking-tight leading-[1.15]">
                Explore Plumbing Services in Elizabeth, NJ
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
                From emergency pipe repairs and diagnostic leak detection to motorized drain snaking and water heater replacements, explore residential plumbing solutions across Union County.
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
                  12 Dedicated Service Categories • Fast Dispatch Support
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
                <Image
                  src="/images/services/pipe-repair.webp"
                  alt="Plumbing services directory in Elizabeth, NJ"
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

      {/* SECTION 2 & 3 — COMPLETE SERVICE GRID */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            eyebrow="ALL SPECIALIZED SERVICES"
            title="Complete Plumbing Solutions Directory"
            description="Select any service below to explore detailed warning signs, repair options, cost factors, and local homeowner advice."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {servicesData.map((service) => (
              <article
                key={service.id}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} in Elizabeth, NJ`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080F1F]/60 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3.5 left-3.5 p-2.5 rounded-xl bg-white/95 text-[#1677C8] shadow-md backdrop-blur-xs group-hover:bg-[#1677C8] group-hover:text-white transition-colors duration-200">
                      <DynamicIcon name={service.iconName} className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-7">
                    <h2 className="text-xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                      {service.title}
                    </h2>

                    <p className="mt-2.5 text-xs sm:text-sm text-[#5D6B7C] leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Included Solutions:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#5D6B7C]">
                        {service.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#23B8D4] shrink-0" />
                            <span className="line-clamp-1">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 border-t border-slate-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 4 — COMMON PLUMBING PROBLEMS */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <Container>
          <SectionHeading
            eyebrow="SYMPTOM MATCHER"
            title="Identify Your Household Plumbing Symptoms"
            description="Match what you are experiencing in your home to the appropriate service category before calling."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {commonProblemsData.map((prob) => (
              <div
                key={prob.id}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#1677C8] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
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

                <div className="mt-4 pt-3 border-t border-slate-200/80">
                  <Link
                    href={`/services/${prob.recommendedServiceSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677C8] hover:underline"
                  >
                    <span>Recommended Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5 — EMERGENCY SERVICE INFORMATION */}
      <EmergencySection />

      {/* SECTION 6 — HOW IT WORKS */}
      <HowItWorks />

      {/* SECTION 7 — SERVICE AREAS */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#1677C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              REGIONAL COVERAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B4E] mt-3">
              Where These Services Are Available
            </h2>
            <p className="text-sm sm:text-base text-[#5D6B7C] mt-2">
              Our independent contractor network covers residential and commercial properties throughout Elizabeth and Union County.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {locationsData.map((loc) => (
              <Link
                key={loc.id}
                href={loc.id === "elizabeth" ? "/" : `/locations/plumber-${loc.id}-nj`}
                className="group p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 text-center hover:bg-white hover:border-[#1677C8] hover:shadow-md transition-all flex flex-col items-center justify-center space-y-1.5"
              >
                <div className="p-2.5 rounded-xl bg-blue-50 text-[#1677C8] group-hover:bg-[#1677C8] group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-sm text-[#102B4E] group-hover:text-[#1677C8] transition-colors">
                  {loc.name}, NJ
                </span>
                <span className="text-[11px] text-[#5D6B7C]">Union County</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 8 — FAQ */}
      <FAQSection
        eyebrow="DIRECTORY FAQS"
        title="Frequently Asked Service Directory Questions"
        description="Clear guidance on service selection, emergency triage, and on-site estimates."
        items={serviceDirectoryFAQs}
        className="border-t border-slate-200/90"
      />

      {/* SECTION 9 — FINAL CTA */}
      <FinalCTA
        eyebrow="READY TO DISCUSS YOUR PLUMBING REPAIR?"
        title="Call Elizabeth Plumbing Pros at (908) 738-8526"
        description="Speak directly with our phone team to describe your plumbing problem and connect with an available local contractor."
        buttonLabel={`CALL ${siteConfig.phone.display}`}
      />
    </div>
  );
}

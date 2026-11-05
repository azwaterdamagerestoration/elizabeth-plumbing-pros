import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { CallButton } from "@/shared/CallButton";
import { ContactForm } from "@/components/supporting/ContactForm";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/config/site";
import { locationsData } from "@/data/locations";
import { FAQItem } from "@/types";
import {
  generateContactPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us | Plumbing Service Inquiries",
  description:
    "Have a plumbing concern in Elizabeth or nearby Union County? Call (908) 738-8526 or submit an inquiry to discuss your plumbing needs and available service options.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

const contactFAQs: FAQItem[] = [
  {
    id: "contact-faq-1",
    question: "How can I request plumbing assistance?",
    answer:
      "The fastest and most direct method is calling our helpline at (908) 738-8526. You can also submit the inquiry form on this page with your location and symptoms, and a telephone coordinator will follow up to facilitate independent contractor connection.",
  },
  {
    id: "contact-faq-2",
    question: "What details should I provide when calling or submitting a request?",
    answer:
      "Having your specific street address or neighborhood in Elizabeth or Union County, the observed symptoms (e.g., active leak under sink, sluggish toilet, lukewarm water heater), and whether the situation is an active emergency requiring immediate water shut-off helps us route your inquiry effectively.",
  },
  {
    id: "contact-faq-3",
    question: "Can I call about an urgent plumbing emergency?",
    answer:
      "Yes. For active water leaks, burst pipes, overflowing toilets, or severe sewer backups, calling (908) 738-8526 is strongly recommended over submitting a web form so that dispatch urgency can be communicated immediately.",
  },
  {
    id: "contact-faq-4",
    question: "Which geographic areas are supported?",
    answer:
      "Our network coordinates services throughout Elizabeth (Elmora, Elizabethport, Midtown, Bayway) as well as the surrounding Union County municipalities of Union, Westfield, Cranford, Roselle, and Fanwood.",
  },
  {
    id: "contact-faq-5",
    question: "How is my contact information handled?",
    answer:
      "We respect your privacy. We never sell personal information to telemarketers. Your contact details are shared strictly with available local independent plumbing contractors to enable them to respond to your specific service request.",
  },
];

export default function ContactPage() {
  const contactSchema = generateContactPageSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([{ label: "Contact Us" }]);
  const faqSchema = generateFAQSchema(contactFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
            items={[{ label: "Contact Us" }]}
            className="mb-6"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1677C8]/25 border border-[#23B8D4]/40 text-[#23B8D4] text-xs font-extrabold uppercase tracking-widest mb-4">
            <span>GET IN TOUCH WITH US</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-white tracking-tight leading-[1.15]">
            Contact Elizabeth Plumbing Pros
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
            Have a plumbing concern in Elizabeth or a nearby Union County community? Contact us by phone or submit an inquiry to discuss your needs and available service options.
          </p>
        </Container>
      </section>

      {/* SECTION 2 — PRIMARY CONTACT INFO & SECTION 3 — FORM */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Phone & Operational Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Contact Card */}
              <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#102B4E] to-[#163B66] text-white shadow-xl space-y-6 border border-slate-700/80">
                <div className="flex items-center gap-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#FF8533] text-white shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#23B8D4] uppercase tracking-wider block">
                      Direct Phone Connection
                    </span>
                    <a
                      href={siteConfig.phone.telHref}
                      className="text-2xl sm:text-3xl font-extrabold hover:text-[#23B8D4] transition-colors"
                    >
                      {siteConfig.phone.display}
                    </a>
                  </div>
                </div>

                <p className="text-slate-200 text-sm leading-relaxed">
                  The fastest way to arrange plumbing support is by phone. Speak directly with a local coordinator to describe your problem and connect with available independent technicians.
                </p>

                <div className="pt-2">
                  <CallButton
                    size="lg"
                    variant="primary"
                    label={`CALL ${siteConfig.phone.display}`}
                    className="w-full justify-center shadow-lg text-base"
                    trackingEvent="header_call_click"
                  />
                </div>

                <div className="pt-4 border-t border-slate-700/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#23B8D4] shrink-0" />
                    <span>Phone Lines Open Daily for Urgent Coordination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#23B8D4] shrink-0" />
                    <span>Serving Elizabeth &amp; Nearby Union County Towns</span>
                  </div>
                </div>
              </div>

              {/* Checklist before calling */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3.5">
                <h2 className="text-base font-extrabold text-[#102B4E] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#1677C8]" />
                  <span>Helpful Details to Have Ready:</span>
                </h2>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#172B45]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0 mt-0.5" />
                    <span>Your specific neighborhood (e.g. Elmora, Bayway, Midtown).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0 mt-0.5" />
                    <span>Whether you have isolated your main water shut-off valve.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0 mt-0.5" />
                    <span>Type of building (single-family, condo, multi-family).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0 mt-0.5" />
                    <span>Observed symptoms: active leak, drain backup, or heater noise.</span>
                  </li>
                </ul>
              </div>

              {/* Transparency Notice */}
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-[#102B4E] space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#1677C8]" />
                  <span>Referral Model Disclosure</span>
                </div>
                <p className="text-[#5D6B7C] leading-relaxed">
                  {siteConfig.businessModel.disclaimer}
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4 — SERVICE AREAS */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#1677C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              REGIONAL COVERAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B4E] mt-3">
              Where We Coordinate Plumbing Connections
            </h2>
            <p className="text-sm sm:text-base text-[#5D6B7C] mt-2">
              Our telephone network assists property owners throughout Elizabeth and surrounding municipalities in Union County.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {locationsData.map((loc) => (
              <Link
                key={loc.id}
                href={loc.id === "elizabeth" ? "/" : `/locations/plumber-${loc.id}-nj`}
                className="group p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 text-center hover:bg-white hover:border-[#1677C8] hover:shadow-md transition-all flex flex-col items-center justify-center space-y-2"
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

          <div className="mt-8 text-center">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677C8] hover:underline"
            >
              <span>Explore all service area details &amp; postal codes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION 5 — CONTACT FAQs */}
      <FAQSection
        eyebrow="CONTACT FREQUENTLY ASKED QUESTIONS"
        title="Common Questions About Contacting Us"
        description="Learn more about how phone requests are handled, data confidentiality, and service connection steps."
        items={contactFAQs}
        className="border-t border-slate-200/90"
      />

      {/* SECTION 6 — FINAL CTA */}
      <FinalCTA
        eyebrow="READY TO DISCUSS YOUR PLUMBING PROBLEM?"
        title="Call Elizabeth Plumbing Pros at (908) 738-8526"
        description="Connect directly with an independent local plumbing contractor ready to assist with your repair or maintenance needs."
        buttonLabel={`CALL ${siteConfig.phone.display}`}
      />
    </div>
    </>
  );
}

import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  MessageSquare,
  Wrench,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  FileText,
  DollarSign,
} from "lucide-react";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { CallButton } from "@/shared/CallButton";
import { SectionHeading } from "@/shared/SectionHeading";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/config/site";
import { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "How It Works | 4-Step Referral Process",
  description:
    "Learn how Elizabeth Plumbing Pros connects homeowners in Elizabeth and Union County with independent local plumbing professionals in four simple, transparent steps.",
  alternates: {
    canonical: `${siteConfig.url}/how-it-works`,
  },
};

const howItWorksFAQs: FAQItem[] = [
  {
    id: "hiw-faq-1",
    question: "Does Elizabeth Plumbing Pros employ the plumbers who visit my home?",
    answer:
      "No. Elizabeth Plumbing Pros operates strictly as a lead generation, referral, and informational platform. We connect property owners with independent local plumbing contractors. The technicians are not employees or agents of Elizabeth Plumbing Pros.",
  },
  {
    id: "hiw-faq-2",
    question: "Are there any fees to use Elizabeth Plumbing Pros to find a contractor?",
    answer:
      "No. Our telephone referral service is completely free for homeowners and property managers. Any charges or fees for physical plumbing work, diagnostics, parts, or labor are paid directly to the independent contractor you choose to hire.",
  },
  {
    id: "hiw-faq-3",
    question: "How are pricing and estimates determined?",
    answer:
      "Because every plumbing situation differs—ranging from simple faucet cartridge replacements to complex underground sewer repairs—pricing is determined directly by the independent service contractor after evaluating your specific job on-site. We encourage every customer to request a written estimate before authorizing work.",
  },
  {
    id: "hiw-faq-4",
    question: "What should I verify before hiring an independent plumber?",
    answer:
      "We always advise property owners to confirm: (1) Current New Jersey Master Plumber licensing; (2) General liability and workers' compensation insurance; (3) Itemized written pricing; and (4) Warranty coverage on parts and labor.",
  },
  {
    id: "hiw-faq-5",
    question: "What happens if no independent contractor is available in my town?",
    answer:
      "While our network covers Elizabeth, Union, Westfield, Cranford, Roselle, and Fanwood, contractor availability can fluctuate during severe weather spikes or regional peak demand. If an immediate match cannot be coordinated, our team will inform you promptly so you can explore alternative options without delay.",
  },
];

export default function HowItWorksPage() {
  const processSteps = [
    {
      num: "01",
      icon: Phone,
      title: "Tell Us About Your Plumbing Problem",
      description:
        "Call our telephone helpline at (908) 738-8526 or submit an online request. Describe what is happening in your home—whether it is an active pipe leak, overflowing drain, failing water heater, or scheduled maintenance.",
      details: [
        "Explain visible symptoms (water staining, backing up, low pressure)",
        "Indicate whether water is currently shut off at the main valve",
        "Specify if the problem requires urgent same-day intervention",
      ],
    },
    {
      num: "02",
      icon: MessageSquare,
      title: "Discuss Your Location and Service Needs",
      description:
        "Our phone coordinator confirms your specific Elizabeth neighborhood or Union County town, the type of property (single-family, condominium, multi-unit building), and any relevant access instructions.",
      details: [
        "Coverage across Elizabeth, Union, Westfield, Cranford, Roselle, Fanwood",
        "Ensure the service required matches available contractor capabilities",
        "Clarify convenient communication and arrival windows",
      ],
    },
    {
      num: "03",
      icon: Wrench,
      title: "Review Available Assistance & Connect",
      description:
        "We relay your inquiry to available independent plumbing specialists servicing your geographic area. The contractor coordinates directly with you to discuss service options, dispatch timelines, and initial evaluation procedures.",
      details: [
        "Direct communication without unnecessary administrative layers",
        "Contractor evaluates job scope and provides on-site assessment",
        "No obligation to proceed if the proposed terms do not suit your needs",
      ],
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "Confirm Details With the Service Provider",
      description:
        "You review credentials, written estimates, and warranty terms directly with the contractor. Once you approve the scope of work, the independent professional performs the repair or installation.",
      details: [
        "Review New Jersey state licensing and insurance documentation",
        "Obtain an itemized written estimate before authorizing repairs",
        "Handle payment and service agreements directly with the contractor",
      ],
    },
  ];

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
            items={[{ label: "How It Works" }]}
            className="mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1677C8]/25 border border-[#23B8D4]/40 text-[#23B8D4] text-xs font-extrabold uppercase tracking-widest">
                <span>OUR SERVICE WORKFLOW</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-white tracking-tight leading-[1.15]">
                How Elizabeth Plumbing Pros Works
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
                A transparent, step-by-step overview of how our free phone service connects Union County property owners with independent local plumbing professionals.
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
                  Free referral coordination • No hidden fees
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
                <Image
                  src="/images/home/elizabeth-plumbing-hero.webp"
                  alt="Elizabeth Plumbing Pros service coordination workflow"
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

      {/* SECTION 2 — STEP-BY-STEP PROCESS */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="FOUR SIMPLE STEPS"
            title="The Step-by-Step Connection Process"
            description="From your first phone call to job completion, here is how our service facilitates plumbing connections."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-8 sm:p-9 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#1677C8]/5 rounded-bl-full pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#102B4E] to-[#1677C8] tracking-tight">
                        {step.num}
                      </span>
                      <div className="p-3 rounded-2xl bg-white text-[#1677C8] shadow-sm group-hover:bg-[#1677C8] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                      {step.title}
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-[#5D6B7C] leading-relaxed">
                      {step.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                        Key Points:
                      </span>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#172B45]">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#23B8D4] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 3 — WHAT INFORMATION HELPS */}
      <section className="py-16 sm:py-20 bg-[#F6F9FC] border-t border-slate-200/80">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="PREPARING YOUR REQUEST"
            title="Information That Helps Us Connect You Faster"
            description="Having these key details ready ensures we route your inquiry to the right local specialist."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-[#102B4E] font-bold text-base">
                <FileText className="w-5 h-5 text-[#1677C8]" />
                <span>1. Property &amp; Location Details</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5D6B7C] leading-relaxed">
                Provide your municipality (Elizabeth, Union, Westfield, Cranford, Roselle, Fanwood), neighborhood, and whether the building is a single-family house, apartment, or commercial space.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-[#102B4E] font-bold text-base">
                <AlertTriangle className="w-5 h-5 text-[#FF8533]" />
                <span>2. Issue Severity &amp; Safety</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5D6B7C] leading-relaxed">
                Clarify whether water is actively spraying, sewage is backing up, or if this is a minor persistent drip. Note if you have located and closed your main water shutoff valve.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-[#102B4E] font-bold text-base">
                <Wrench className="w-5 h-5 text-[#1677C8]" />
                <span>3. Affected Fixtures &amp; Equipment</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5D6B7C] leading-relaxed">
                Identify the equipment involved: water heater (gas vs. electric), kitchen sink, main sewer line, toilet, boiler supply, or underground pipe run.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-[#102B4E] font-bold text-base">
                <Phone className="w-5 h-5 text-[#1677C8]" />
                <span>4. Preferred Contact Method</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5D6B7C] leading-relaxed">
                Provide an active telephone number where the visiting technician or dispatcher can reach you directly to confirm timing and arrival estimates.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4 & 5 — WHAT TO EXPECT & TRANSPARENCY */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#172B45] leading-[1.8]">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#1677C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                TRANSPARENCY GUARANTEE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B4E] tracking-tight">
                What to Expect When Using Our Platform
              </h2>

              <p>
                We believe in straightforward business practices without misleading claims. When you contact Elizabeth Plumbing Pros, you are using a dedicated referral and lead generation network that connects property owners with independent plumbing professionals in Union County, New Jersey.
              </p>

              <p>
                We do not employ physical contractors, own service vans, or guarantee specific arrival windows. Every contractor operates independently, sets their own pricing schedules, holds their own insurance, and warrants their own physical craftsmanship.
              </p>

              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/90 space-y-3">
                <h3 className="font-bold text-[#102B4E] text-base flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#1677C8]" />
                  <span>Important Homeowner Reminder</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#5D6B7C] leading-relaxed">
                  Always verify that the independent plumber who visits your property carries an active New Jersey Master Plumber license, current liability insurance, and provides an itemized written estimate before any work commences.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#102B4E] text-white p-7 sm:p-9 shadow-xl border border-slate-700/80 space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#23B8D4] uppercase tracking-wider">
                  <DollarSign className="w-4 h-4" />
                  <span>ESTIMATES &amp; PRICING</span>
                </div>

                <h3 className="text-xl font-bold">
                  How Pricing &amp; Quotes Work
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Plumbing repairs cannot be accurately quoted over a website without on-site visual diagnosis. Pipe depth, corrosion levels, accessibility behind drywall, and local municipal permit requirements all influence total costs.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#23B8D4] shrink-0 mt-0.5" />
                    <span>Contractor assesses the job on-site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#23B8D4] shrink-0 mt-0.5" />
                    <span>Written estimate provided before work starts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#23B8D4] shrink-0 mt-0.5" />
                    <span>You decide whether to proceed</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <CallButton
                    size="md"
                    variant="primary"
                    label={`Call ${siteConfig.phone.display}`}
                    className="w-full justify-center text-sm shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6 — FAQs */}
      <FAQSection
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        title="Common Questions About Our Process"
        description="Clear, honest answers regarding our referral model, contractor relationships, and service standards."
        items={howItWorksFAQs}
        className="border-t border-slate-200/90"
      />

      {/* SECTION 7 — CTA */}
      <FinalCTA
        eyebrow="READY TO DISCUSS YOUR PLUMBING PROBLEM?"
        title="Call (908) 738-8526 to Get Started"
        description="Speak with an Elizabeth Plumbing Pros coordinator to connect with an available independent plumbing contractor in your area."
        buttonLabel={`CALL ${siteConfig.phone.display}`}
      />
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LegalContentLayout, LegalSectionItem } from "@/components/supporting/LegalContentLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Service & Information Disclaimer",
  description:
    "Read the full business model, referral relationship, and educational content disclaimer for Elizabeth Plumbing Pros in Elizabeth, NJ.",
  alternates: {
    canonical: `${siteConfig.url}/disclaimer`,
  },
};

const disclaimerTocItems: LegalSectionItem[] = [
  { id: "general", title: "1. Educational Information Disclaimer" },
  { id: "referral-model", title: "2. Referral Network Business Disclosure" },
  { id: "verification", title: "3. Independent Contractor Verification" },
  { id: "availability", title: "4. Service Availability & Response Times" },
  { id: "pricing", title: "5. Pricing, Rates & Estimates" },
  { id: "emergency-safety", title: "6. Immediate Life-Safety Emergency Notice" },
  { id: "accuracy-limits", title: "7. Limitations of General Content" },
];

export default function DisclaimerPage() {
  return (
    <LegalContentLayout
      title="Service &amp; Information Disclaimer"
      effectiveDate="November 1, 2026"
      lastUpdated="November 5, 2026"
      breadcrumbs={[{ label: "Disclaimer" }]}
      tocItems={disclaimerTocItems}
      reviewNotice="Important Consumer Disclosure: Elizabeth Plumbing Pros connects property owners with independent third-party plumbing professionals. We do not perform physical contracting work, guarantee response times, or warrant contractor craftsmanship."
    >
      {/* 1. General */}
      <section id="general" className="scroll-mt-28 space-y-4">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          1. Educational Information Disclaimer
        </h2>
        <p>
          All content, articles, symptom checklists, diagnostic matrices, and preventive guides published on {siteConfig.name} (<Link href="/" className="text-[#1677C8] hover:underline">{siteConfig.url}</Link>) are provided solely for general educational and informational purposes.
        </p>
        <p>
          This information is not intended as, and should never be used as a substitute for, an on-site visual diagnosis and physical evaluation by a licensed New Jersey Master Plumber. Plumbing systems involve pressurized fluids, volatile natural gas, and sanitary waste; improper repairs can cause catastrophic structural water damage, mold contamination, or personal injury.
        </p>
      </section>

      {/* 2. Referral Model */}
      <section id="referral-model" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          2. Referral Network Business Disclosure
        </h2>
        <p>
          {siteConfig.businessModel.disclaimer}
        </p>
        <p>
          {siteConfig.name} is a marketing and telephone lead generation service. We do not directly employ technicians, dispatch company-owned vehicles, or hold a plumbing contractor license. When you call {siteConfig.phone.display} or submit an online request, your inquiry is relayed to independent local plumbing professionals operating across Union County.
        </p>
      </section>

      {/* 3. Verification */}
      <section id="verification" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          3. Independent Contractor Verification
        </h2>
        <p>
          While we partner with reputable local specialists, {siteConfig.name} does not warrant or guarantee any work performed. It remains the exclusive responsibility of the property owner to verify that any visiting contractor holds active New Jersey state licensing, commercial liability insurance, and workers&apos; compensation coverage before authorizing physical work or issuing payments.
        </p>
      </section>

      {/* 4. Availability */}
      <section id="availability" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          4. Service Availability &amp; Response Times
        </h2>
        <p>
          We do not guarantee specific arrival times, same-day service, or 24/7 availability. Contractor availability varies depending on real-time service volume, geographic location, and severe regional weather spikes (such as freezing temperatures causing localized burst pipe outbreaks).
        </p>
      </section>

      {/* 5. Pricing */}
      <section id="pricing" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          5. Pricing, Rates &amp; Estimates
        </h2>
        <p>
          {siteConfig.name} does not set, control, or quote physical labor or material pricing. All estimates, travel fees, diagnostic assessments, and repair costs are determined strictly by the independent contractor following an on-site inspection of your property. Always request an itemized written estimate before authorizing work.
        </p>
      </section>

      {/* 6. Emergency Safety */}
      <section id="emergency-safety" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          6. Immediate Life-Safety Emergency Notice
        </h2>
        <p>
          Our platform is not a replacement for municipal 911 emergency services. If you observe water contacting live electrical panels, smell natural gas or sulfur odors, or observe imminent structural collapse, immediately evacuate the property, shut off utility supply valves from a safe exterior location if possible, and contact 911 or your local utility provider (such as PSE&amp;G or New Jersey American Water).
        </p>
      </section>

      {/* 7. Accuracy Limits */}
      <section id="accuracy-limits" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          7. Limitations of General Content
        </h2>
        <p>
          Although we strive for technical accuracy based on the International Plumbing Code and EPA guidance, local municipal building codes across Union County (e.g., Elizabeth, Westfield, Cranford) may enforce specific local amendments. Always consult your municipal construction official or a licensed plumbing inspector regarding permitted local work.
        </p>
      </section>
    </LegalContentLayout>
  );
}


import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LegalContentLayout, LegalSectionItem } from "@/components/supporting/LegalContentLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Review the terms, agreements, independent contractor disclaimers, and user obligations governing the Elizabeth Plumbing Pros platform.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

const termsTocItems: LegalSectionItem[] = [
  { id: "model", title: "1. Referral Network Business Model" },
  { id: "independent-status", title: "2. Independent Contractor Relationship" },
  { id: "verification", title: "3. Homeowner Verification Duty" },
  { id: "estimates", title: "4. Pricing & Work Authorizations" },
  { id: "content-limitations", title: "5. Educational Content Disclaimers" },
  { id: "liability", title: "6. Limitation of Liability" },
  { id: "governing-law", title: "7. Governing Law & Jurisdiction" },
  { id: "modifications", title: "8. Amendments & Contact" },
];

export default function TermsOfUsePage() {
  return (
    <LegalContentLayout
      title="Terms of Use"
      effectiveDate="November 1, 2026"
      lastUpdated="November 5, 2026"
      breadcrumbs={[{ label: "Terms of Use" }]}
      tocItems={termsTocItems}
      reviewNotice="Legal Terms Notice: Elizabeth Plumbing Pros is a referral platform connecting property owners with independent plumbing contractors. We do not provide direct contracting services, employ physical technicians, or warranty work performed."
    >
      {/* 1. Model */}
      <section id="model" className="scroll-mt-28 space-y-4">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          1. Referral Network Business Model
        </h2>
        <p>
          {siteConfig.name} (<Link href="/" className="text-[#1677C8] hover:underline">{siteConfig.url}</Link>) operates exclusively as an informational and lead generation platform designed to connect property owners in Elizabeth and Union County, New Jersey with independent local plumbing contractors.
        </p>
        <p>
          <strong>{siteConfig.name} is not a licensed plumbing contractor, does not hold itself out as a direct plumbing contractor, does not own service vehicles, and does not directly perform physical plumbing repairs, installations, or inspections.</strong>
        </p>
      </section>

      {/* 2. Independent Status */}
      <section id="independent-status" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          2. Independent Contractor Relationship
        </h2>
        <p>
          All plumbing technicians, specialists, and businesses connected through our telephone line or website are separate, independent commercial entities. No contractor is an employee, partner, joint venturer, or legal agent of {siteConfig.name}.
        </p>
        <p>
          Any contract, agreement, warranty, or scope of work agreed upon is strictly between you (the property owner or tenant) and the visiting independent contractor. {siteConfig.name} exercises no physical supervision, managerial control, or direction over the physical work performed on your premises.
        </p>
      </section>

      {/* 3. Verification */}
      <section id="verification" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          3. Homeowner Verification Duty
        </h2>
        <p>
          It is the sole responsibility of the customer to verify that any visiting contractor possesses:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#5D6B7C]">
          <li>Current, valid New Jersey State Master Plumber licensing through the New Jersey Division of Consumer Affairs.</li>
          <li>Adequate commercial general liability insurance and workers&apos; compensation coverage.</li>
          <li>Applicable local building and plumbing permits required by your municipality (e.g., City of Elizabeth, Township of Union, Town of Westfield, etc.).</li>
        </ul>
      </section>

      {/* 4. Estimates */}
      <section id="estimates" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          4. Pricing &amp; Work Authorizations
        </h2>
        <p>
          {siteConfig.name} does not establish, regulate, or guarantee service prices or dispatch rates. All estimates, diagnostic fees, hourly rates, and replacement part costs are determined directly by the independent contractor based on their on-site evaluation of your plumbing system. You should always insist on an itemized, written estimate before authorizing any work.
        </p>
      </section>

      {/* 5. Content Limitations */}
      <section id="content-limitations" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          5. Educational Content Disclaimers
        </h2>
        <p>
          Articles, guides, checklists, and diagnostic suggestions published on this website are provided strictly for general educational purposes. They do not constitute on-site engineering or licensed plumbing evaluation. If you suspect an active leak, gas leak, or electrical risk, immediately follow emergency shut-off steps and contact professional emergency services.
        </p>
      </section>

      {/* 6. Liability */}
      <section id="liability" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          6. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by applicable New Jersey law, {siteConfig.name}, its owners, operators, affiliates, and representatives shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#5D6B7C]">
          <li>Workmanship, delays, negligence, omissions, or property damages caused by any independent contractor connected through this platform.</li>
          <li>Inability to secure an available contractor during peak emergency periods or extreme weather events.</li>
          <li>Inaccuracies, typographical errors, or omissions in general educational articles.</li>
        </ul>
      </section>

      {/* 7. Governing Law */}
      <section id="governing-law" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          7. Governing Law &amp; Jurisdiction
        </h2>
        <p>
          These Terms of Use shall be governed by and construed in accordance with the laws of the State of New Jersey, without giving effect to any conflict of law principles. Any legal proceeding arising out of or related to these terms shall be instituted exclusively in the state or federal courts situated in Union County, New Jersey.
        </p>
      </section>

      {/* 8. Modifications */}
      <section id="modifications" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          8. Amendments &amp; Contact
        </h2>
        <p>
          We reserve the right to amend these terms at any time by updating this page with a revised effective date. For legal questions regarding these terms, contact us by phone at {siteConfig.phone.display}.
        </p>
      </section>
    </LegalContentLayout>
  );
}

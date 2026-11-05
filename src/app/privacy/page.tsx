import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LegalContentLayout, LegalSectionItem } from "@/components/supporting/LegalContentLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Elizabeth Plumbing Pros collects, uses, protects, and relays personal information submitted through our website and telephone referral network.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

const privacyTocItems: LegalSectionItem[] = [
  { id: "operator", title: "1. Website Operator & Scope" },
  { id: "collection", title: "2. Information We Collect" },
  { id: "usage", title: "3. How We Use Your Information" },
  { id: "sharing", title: "4. Third-Party Service Provider Relays" },
  { id: "cookies", title: "5. Cookies & Analytics Telemetry" },
  { id: "call-tracking", title: "6. Telephony & Call Data" },
  { id: "retention", title: "7. Data Retention & Protection" },
  { id: "rights", title: "8. Your Privacy Rights" },
  { id: "contact", title: "9. Privacy Inquiries" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalContentLayout
      title="Privacy Policy"
      effectiveDate="November 1, 2026"
      lastUpdated="November 5, 2026"
      breadcrumbs={[{ label: "Privacy Policy" }]}
      tocItems={privacyTocItems}
      reviewNotice="Operational Data Notice: Elizabeth Plumbing Pros operates as a free referral platform. Information you submit via telephone or web form is relayed strictly to independent local plumbing service partners to coordinate your request. We do not sell data to telemarketers."
    >
      {/* 1. Operator */}
      <section id="operator" className="scroll-mt-28 space-y-4">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          1. Website Operator &amp; Scope
        </h2>
        <p>
          This Privacy Policy governs the practices of {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) regarding information collected through our website (<Link href="/" className="text-[#1677C8] hover:underline">{siteConfig.url}</Link>) and through telephone calls placed to our referral line at {siteConfig.phone.display}.
        </p>
        <p>
          By accessing our site, submitting an online contact request, or placing a telephone call to our coordination service, you acknowledge the collection and handling of information as described in this policy.
        </p>
      </section>

      {/* 2. Collection */}
      <section id="collection" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          2. Information We Collect
        </h2>
        <p>
          We collect information strictly necessary to facilitate local plumbing connections and maintain website operations:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#5D6B7C]">
          <li>
            <strong>Voluntary Telephone Information:</strong> When you call {siteConfig.phone.display}, you provide your name, callback telephone number, residential address or neighborhood in Union County, and specific symptoms regarding your plumbing issue.
          </li>
          <li>
            <strong>Online Inquiry Form Submissions:</strong> When submitting our website contact form, you provide your full name, phone number, optional email address, municipality (e.g., Elizabeth, Union, Westfield, Cranford, Roselle, Fanwood), service category, urgency level, and job descriptions.
          </li>
          <li>
            <strong>Automated Device &amp; Usage Telemetry:</strong> When you navigate our pages, standard non-identifying telemetry (such as browser type, operating system, approximate geographic city/region, referring URL, and page interaction times) may be collected via cookies or server logs.
          </li>
        </ul>
      </section>

      {/* 3. Usage */}
      <section id="usage" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          3. How We Use Your Information
        </h2>
        <p>Information collected is used for the following operational purposes:</p>
        <ul className="list-disc pl-5 space-y-2 text-[#5D6B7C]">
          <li>To match and relay your plumbing inquiry to available independent plumbing specialists servicing your municipality.</li>
          <li>To communicate with you by telephone or text regarding your plumbing service inquiry.</li>
          <li>To analyze website navigation patterns, improve page readability, and maintain technical performance.</li>
          <li>To comply with applicable state and federal legal obligations.</li>
        </ul>
      </section>

      {/* 4. Sharing */}
      <section id="sharing" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          4. Third-Party Service Provider Relays
        </h2>
        <p>
          <strong>We never sell your personal information to third-party telemarketers or unrelated advertisers.</strong>
        </p>
        <p>
          Because {siteConfig.name} operates as a referral and lead generation network, contact details and plumbing problem descriptions you submit are transmitted directly to independent, third-party plumbing contractors operating in your area. This transmission is conducted solely to enable those contractors to contact you, evaluate your repair scope, and provide service estimates.
        </p>
      </section>

      {/* 5. Cookies */}
      <section id="cookies" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          5. Cookies &amp; Analytics Telemetry
        </h2>
        <p>
          We utilize standard first-party and third-party cookies (such as Google Analytics / GTM) to evaluate user traffic patterns, measure Core Web Vitals, and assess call button engagement. You can control or disable cookies through your individual browser settings; however, disabling cookies does not prevent you from calling our telephone referral line.
        </p>
      </section>

      {/* 6. Call Tracking */}
      <section id="call-tracking" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          6. Telephony &amp; Call Data
        </h2>
        <p>
          Telephone calls placed to {siteConfig.phone.display} may be routed through telecommunication service providers to connect your call with local contractors. Call metadata (such as caller ID, call timestamp, duration, and routing destination) may be logged for operational quality assurance and billing verification. Where call recording is active for quality monitoring, an automated audio advisory will inform you at the start of the call.
        </p>
      </section>

      {/* 7. Retention */}
      <section id="retention" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          7. Data Retention &amp; Protection
        </h2>
        <p>
          We retain inquiry information only as long as necessary to facilitate service connections and satisfy administrative requirements. We implement industry-standard organizational and technological safeguards to protect personal information against unauthorized disclosure. However, no internet transmission or telephony system is completely impenetrable.
        </p>
      </section>

      {/* 8. Rights */}
      <section id="rights" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          8. Your Privacy Rights
        </h2>
        <p>
          Depending on your jurisdiction, you may have the right to request access to the personal information we hold about you, request corrections to inaccurate records, or request deletion of your inquiry records. To exercise any of these rights, contact us using the details below.
        </p>
      </section>

      {/* 9. Contact */}
      <section id="contact" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          9. Privacy Inquiries
        </h2>
        <p>
          If you have questions regarding this Privacy Policy or wish to request data deletion, please contact us by phone at:
        </p>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-1">
          <p className="font-bold text-[#102B4E]">{siteConfig.name}</p>
          <p className="text-[#5D6B7C]">Primary Market: Elizabeth, NJ &amp; Union County</p>
          <p className="text-[#1677C8] font-semibold">Phone: {siteConfig.phone.display}</p>
          <p className="text-xs text-slate-500 pt-1">Website: {siteConfig.url}</p>
        </div>
      </section>
    </LegalContentLayout>
  );
}

import React from "react";
import type { Metadata } from "next";
import { LegalContentLayout, LegalSectionItem } from "@/components/supporting/LegalContentLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Review our commitment to digital accessibility, WCAG 2.2 Level AA conformance standards, implemented accessibility features, and contact options.",
  alternates: {
    canonical: `${siteConfig.url}/accessibility`,
  },
  openGraph: {
    title: `Accessibility Statement | ${siteConfig.name}`,
    description:
      "Review our commitment to digital accessibility, WCAG 2.2 Level AA conformance standards, implemented accessibility features, and contact options.",
    url: `${siteConfig.url}/accessibility`,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Accessibility Statement | Elizabeth Plumbing Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Accessibility Statement | ${siteConfig.name}`,
    description:
      "Review our commitment to digital accessibility, WCAG 2.2 Level AA conformance standards, implemented accessibility features, and contact options.",
  },
};

const accessibilityTocItems: LegalSectionItem[] = [
  { id: "commitment", title: "1. Our Accessibility Commitment" },
  { id: "standards", title: "2. Standards & Conformance Goals" },
  { id: "features", title: "3. Implemented Accessibility Features" },
  { id: "technologies", title: "4. Supported Assistive Technologies" },
  { id: "limitations", title: "5. Known Limitations & Ongoing Improvements" },
  { id: "feedback", title: "6. Contact & Accessibility Support" },
];

export default function AccessibilityPage() {
  return (
    <LegalContentLayout
      title="Accessibility Statement"
      effectiveDate="November 1, 2026"
      lastUpdated="November 5, 2026"
      breadcrumbs={[{ label: "Accessibility Statement" }]}
      tocItems={accessibilityTocItems}
      reviewNotice="Digital Inclusion Pledge: Elizabeth Plumbing Pros is dedicated to providing an accessible, barrier-free digital experience for all users, including those with visual, auditory, cognitive, and motor impairments."
    >
      {/* 1. Commitment */}
      <section id="commitment" className="scroll-mt-28 space-y-4">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          1. Our Accessibility Commitment
        </h2>
        <p>
          At {siteConfig.name}, we believe that vital plumbing safety instructions, emergency shut-off guidance, and repair connection services must be accessible to every member of our community, regardless of ability or assistive technology used.
        </p>
        <p>
          We are committed to designing, developing, and maintaining our website in alignment with the Web Content Accessibility Guidelines (WCAG) to ensure equal access to our information and referral resources.
        </p>
      </section>

      {/* 2. Standards */}
      <section id="standards" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          2. Standards &amp; Conformance Goals
        </h2>
        <p>
          Our development roadmap benchmarks against the <strong>World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA</strong>. These guidelines establish best practices for making web content accessible across four core principles:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#5D6B7C]">
          <li><strong>Perceivable:</strong> Information and user interface components must be presentable to users in ways they can perceive.</li>
          <li><strong>Operable:</strong> User interface components and navigation must be operable via keyboard, switch device, or voice control.</li>
          <li><strong>Understandable:</strong> Information and the operation of the user interface must be clear, logical, and predictable.</li>
          <li><strong>Robust:</strong> Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
        </ul>
      </section>

      {/* 3. Features */}
      <section id="features" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          3. Implemented Accessibility Features
        </h2>
        <p>Key technical measures incorporated into our platform include:</p>
        <ul className="list-disc pl-5 space-y-2 text-[#5D6B7C]">
          <li><strong>Semantic HTML Architecture:</strong> Utilization of proper HTML5 landmarks (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>) and a strict heading hierarchy (one H1 per page, followed by logical H2 and H3 elements).</li>
          <li><strong>Full Keyboard Navigability:</strong> All interactive elements, including buttons, telephone links, accordion disclosures, and form inputs, are reachable and operable via the <code>Tab</code>, <code>Enter</code>, and <code>Space</code> keys without keyboard traps.</li>
          <li><strong>Visible Focus Indicators:</strong> High-contrast focus rings highlight active interactive elements during keyboard navigation.</li>
          <li><strong>Contrast Ratios:</strong> Text colors against background surfaces meet or exceed the minimum 4.5:1 contrast ratio requirement for standard text and 3:1 for large text.</li>
          <li><strong>Text Scaling &amp; Zoom:</strong> Layouts support browser text scaling up to 200% without horizontal overflow or loss of functionality.</li>
          <li><strong>Descriptive Image Alt Text:</strong> Meaningful technical diagrams and editorial images feature descriptive <code>alt</code> attributes. Purely decorative elements are hidden from assistive technology using <code>aria-hidden=&quot;true&quot;</code>.</li>
          <li><strong>Form Accessibility:</strong> All contact form inputs have explicit <code>&lt;label&gt;</code> associations, clear placeholder examples, visible error descriptions, and clear validation feedback.</li>
          <li><strong>Reduced Motion Support:</strong> The site respects system-level <code>prefers-reduced-motion</code> settings by suppressing smooth scroll animations where requested.</li>
        </ul>
      </section>

      {/* 4. Assistive Technologies */}
      <section id="technologies" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          4. Supported Assistive Technologies
        </h2>
        <p>Our website is engineered to be compatible with:</p>
        <ul className="list-disc pl-5 space-y-2 text-[#5D6B7C]">
          <li>Modern screen readers (including NVDA, JAWS, VoiceOver, and TalkBack) on modern versions of Chrome, Safari, Firefox, and Edge.</li>
          <li>Standard operating system screen magnifiers and high-contrast display modes.</li>
          <li>Speech recognition software for voice-activated navigation.</li>
        </ul>
      </section>

      {/* 5. Known Limitations */}
      <section id="limitations" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          5. Known Limitations &amp; Ongoing Improvements
        </h2>
        <p>
          While we strive for complete WCAG 2.2 AA conformance across all views, some older legacy blog diagrams or external map embeds may have limited accessibility. We audit our codebase regularly and remediate identified accessibility barriers.
        </p>
      </section>

      {/* 6. Feedback & Telephone Support */}
      <section id="feedback" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          6. Contact &amp; Accessibility Support
        </h2>
        <p>
          If you encounter any difficulty accessing content on our website, or if you need assistance coordinating plumbing services using an alternative communication format, please contact us directly. Our telephone operators are happy to assist you verbally:
        </p>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-2">
          <p className="font-bold text-[#102B4E]">{siteConfig.name} Accessibility Team</p>
          <p className="text-[#1677C8] font-bold text-base">Telephone: {siteConfig.phone.display}</p>
          <p className="text-xs text-[#5D6B7C]">
            Please mention the webpage URL and the specific issue encountered so our technical team can address it promptly.
          </p>
        </div>
      </section>
    </LegalContentLayout>
  );
}

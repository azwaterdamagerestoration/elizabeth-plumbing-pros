import React from "react";
import type { Metadata } from "next";
import { LegalContentLayout, LegalSectionItem } from "@/components/supporting/LegalContentLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Editorial Policy & Content Standards",
  description:
    "Read the editorial standards, technical research protocols, fact-checking procedures, and commercial disclosures for Elizabeth Plumbing Pros.",
  alternates: {
    canonical: `${siteConfig.url}/editorial-policy`,
  },
};

const editorialTocItems: LegalSectionItem[] = [
  { id: "purpose", title: "1. Our Content Purpose" },
  { id: "research-standards", title: "2. Research & Technical References" },
  { id: "accuracy-standards", title: "3. Fact-Checking & Accuracy Protocols" },
  { id: "review-process", title: "4. The 7-Stage Editorial Workflow" },
  { id: "author-attribution", title: "5. Author Attribution & Bylines" },
  { id: "expert-review", title: "6. Professional Review Verification" },
  { id: "ai-transparency", title: "7. AI-Assisted Workflows & Human Oversight" },
  { id: "corrections", title: "8. Corrections & Feedback Process" },
  { id: "commercial-disclosure", title: "9. Commercial & Referral Transparency" },
];

export default function EditorialPolicyPage() {
  return (
    <LegalContentLayout
      title="Editorial Policy & Content Standards"
      effectiveDate="November 1, 2026"
      lastUpdated="November 5, 2026"
      breadcrumbs={[
        { label: "About", href: "/about" },
        { label: "Editorial Policy" },
      ]}
      tocItems={editorialTocItems}
      reviewNotice="Editorial Integrity Pledge: Elizabeth Plumbing Pros publishes evidence-based plumbing guidance. We do not fabricate licenses, invent customer reviews, or publish unsubstantiated technical claims."
    >
      {/* 1. Purpose */}
      <section id="purpose" className="scroll-mt-28 space-y-4">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          1. Our Content Purpose
        </h2>
        <p>
          At {siteConfig.name}, our informational content exists to empower homeowners, residential landlords, and property managers in Elizabeth and Union County, New Jersey with accurate, understandable, and actionable plumbing knowledge.
        </p>
        <p>
          Plumbing failures—such as pressurized supply line leaks, main sewer lateral clogs, and water heater element breakdowns—cause millions of dollars in preventable structural damage annually. We believe informed property owners are better equipped to recognize subtle warning signs, execute critical emergency shut-off steps safely, and evaluate contractor proposals with confidence.
        </p>
      </section>

      {/* 2. Research Standards */}
      <section id="research-standards" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          2. Research &amp; Technical References
        </h2>
        <p>
          We do not publish unsubstantiated opinions or arbitrary ranking rules. Technical content is grounded in recognized plumbing standards, municipal building codes, and manufacturer service documentation:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#5D6B7C]">
          <li>
            <strong>Building &amp; Plumbing Codes:</strong> The <em>International Plumbing Code (IPC)</em> and New Jersey Uniform Construction Code (NJ UCC) Title 5, Chapter 23.
          </li>
          <li>
            <strong>Water Conservation &amp; Safety:</strong> The U.S. Environmental Protection Agency (EPA) <em>WaterSense</em> program and American Water Works Association (AWWA).
          </li>
          <li>
            <strong>Piping Standards:</strong> The Copper Development Association (CDA) and Plastic Pipe and Fittings Association (PPFA).
          </li>
          <li>
            <strong>Equipment Specifications:</strong> Technical manuals from major manufacturers including Bradford White, Rheem, A.O. Smith, Moen, and Kohler.
          </li>
        </ul>
      </section>

      {/* 3. Accuracy Standards */}
      <section id="accuracy-standards" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          3. Fact-Checking &amp; Accuracy Protocols
        </h2>
        <p>
          Prior to publication, every guide undergoes rigorous editorial verification:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#5D6B7C]">
          <li><strong>Terminology Verification:</strong> Ensuring plumbing components (e.g., sacrificial anode rods, backwater valves, dielectric unions, pressure-reducing valves) are described accurately.</li>
          <li><strong>Life-Safety Protocols:</strong> Verifying that instructions involving electrical fixtures, gas shut-off valves, or structural drywall water damage emphasize proper safety procedures.</li>
          <li><strong>No Fabricated Claims:</strong> We strictly prohibit publishing fabricated contractor licenses, synthetic customer testimonials, invented local awards, or exaggerated response guarantees.</li>
        </ul>
      </section>

      {/* 4. The 7-Stage Workflow */}
      <section id="review-process" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          4. The 7-Stage Editorial Workflow
        </h2>
        <p>
          Our technical content is developed through a standardized multi-stage workflow:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-[#5D6B7C]">
          <li><strong>Topic Selection:</strong> Identifying frequent homeowner questions and seasonal risks in Union County (e.g., winter pipe freezing, old sewer clay pipes).</li>
          <li><strong>Technical Research:</strong> Reviewing code requirements, utility recommendations, and diagnostic practices.</li>
          <li><strong>Editorial Drafting:</strong> Writing comprehensive, plain-language guides with clear H2/H3 hierarchies, diagrams, and checklists.</li>
          <li><strong>Fact-Checking:</strong> Confirming all factual metrics (e.g., water pressure thresholds between 50–70 PSI, moisture meter percentages).</li>
          <li><strong>Qualified Review (Where Available):</strong> Review by experienced industry professionals when technical validation is appropriate.</li>
          <li><strong>Publication:</strong> Formatting with accessible headings, alt-text diagrams, and schema markup.</li>
          <li><strong>Auditing &amp; Updates:</strong> Revising articles annually or whenever relevant plumbing codes or safety practices change.</li>
        </ol>
      </section>

      {/* 5. Author Attribution */}
      <section id="author-attribution" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          5. Author Attribution &amp; Bylines
        </h2>
        <p>
          Articles produced by our in-house researchers are transparently credited to the <strong>Elizabeth Plumbing Pros Editorial Team</strong>. We do not invent fictional licensed plumbers or use fake stock photo headshots to deceive readers into believing a specific individual wrote the content.
        </p>
      </section>

      {/* 6. Expert Review */}
      <section id="expert-review" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          6. Professional Review Verification
        </h2>
        <p>
          We do not display &quot;Expert Reviewed&quot; badges unless a qualified professional has physically examined the manuscript and confirmed its technical accuracy. If an article has not undergone third-party review, no reviewer credentials will be displayed.
        </p>
      </section>

      {/* 7. AI Workflows */}
      <section id="ai-transparency" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          7. AI-Assisted Workflows &amp; Human Oversight
        </h2>
        <p>
          We may utilize modern artificial intelligence tools for grammatical structuring, diagram generation, or readability optimization. However, all technical assertions, code citations, and local references are curated and fact-checked by human editorial staff prior to publication. No automated content is published without human verification.
        </p>
      </section>

      {/* 8. Corrections */}
      <section id="corrections" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          8. Corrections &amp; Feedback Process
        </h2>
        <p>
          We take accuracy seriously. If you identify a factual error, an outdated code reference, or a broken external link in any of our published guides, we encourage you to contact us at {siteConfig.phone.display} or through our contact form. Verified errors will be corrected promptly with a note in the article&apos;s update metadata.
        </p>
      </section>

      {/* 9. Commercial Disclosures */}
      <section id="commercial-disclosure" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-extrabold text-[#102B4E]">
          9. Commercial &amp; Referral Transparency
        </h2>
        <p>
          {siteConfig.name} is a free referral network connecting homeowners with independent plumbing contractors. Our editorial guides are designed to educate visitors. While articles may include contact options and telephone CTAs linking to our referral line, editorial content is not dictated by advertiser demands. We never recommend unsafe or unnecessary plumbing procedures to generate service calls.
        </p>
      </section>
    </LegalContentLayout>
  );
}

import React from "react";
import type { Metadata } from "next";
import { FAQClient } from "@/components/faq/FAQClient";
import { masterFAQList } from "@/data/faq";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common plumbing questions in Elizabeth, NJ: emergency leak steps, drain snaking vs hydro-jetting, water heaters, and service connection details.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
  openGraph: {
    title: `Frequently Asked Questions | ${siteConfig.name}`,
    description:
      "Find answers to common plumbing questions in Elizabeth, NJ: emergency leak steps, drain snaking vs hydro-jetting, water heaters, and service connection details.",
    url: `${siteConfig.url}/faq`,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Frequently Asked Questions | Elizabeth Plumbing Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Frequently Asked Questions | ${siteConfig.name}`,
    description:
      "Find answers to common plumbing questions in Elizabeth, NJ: emergency leak steps, drain snaking vs hydro-jetting, water heaters, and service connection details.",
  },
};

export default function FAQPage() {
  const faqSchema = generateFAQSchema(
    masterFAQList.map((item) => ({
      id: item.id,
      question: item.question,
      answer: item.answer,
    }))
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Frequently Asked Questions" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FAQClient />
    </>
  );
}

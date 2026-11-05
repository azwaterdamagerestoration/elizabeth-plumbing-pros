import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ServiceHighlights } from "@/components/home/ServiceHighlights";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { AboutSection } from "@/components/home/AboutSection";
import { EmergencySection } from "@/components/home/EmergencySection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PlumbingProblems } from "@/components/home/PlumbingProblems";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { faqsData } from "@/data/faqs";
import { generateFAQSchema, generateWebPageSchema } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const faqSchema = generateFAQSchema(faqsData);
  const webPageSchema = generateWebPageSchema(
    siteConfig.seo.defaultTitle,
    siteConfig.seo.defaultDescription,
    "/"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Service Highlights */}
      <ServiceHighlights />

      {/* Section 3: Plumbing Services Grid */}
      <ServicesGrid />

      {/* Section 4: About Elizabeth Plumbing Pros */}
      <AboutSection />

      {/* Section 5: Urgent Plumbing Feature */}
      <EmergencySection />

      {/* Section 6: Why Choose Elizabeth Plumbing Pros */}
      <WhyChooseUs />

      {/* Section 7: How It Works */}
      <HowItWorks />

      {/* Section 8: Common Plumbing Problems Symptoms */}
      <PlumbingProblems />

      {/* Section 9: Service Areas (Elizabeth & Union County) */}
      <ServiceAreas />

      {/* Section 10: Consumer Trust & Pre-authorization Guidance */}
      <TestimonialsSection />

      {/* Section 11: Plumbing Tips & Blog Preview */}
      <BlogPreview />

      {/* Section 12: Frequently Asked Questions */}
      <FAQSection />

      {/* Section 13: Final Conversion CTA */}
      <FinalCTA />
    </>
  );
}

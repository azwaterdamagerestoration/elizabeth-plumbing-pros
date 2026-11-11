import React from "react";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Plumber Elizabeth NJ | 24/7 Emergency Plumbing Services",
  description:
    "Need a licensed plumber in Elizabeth, NJ? Call (908) 738-8526 for 24/7 emergency plumbing, fast leak repairs, drain cleaning, and same day local services.",
  alternates: {
    canonical: "https://elizabethplumbingpros.com",
  },
  openGraph: {
    title: "Plumber Elizabeth NJ | 24/7 Emergency Plumbing Services",
    description:
      "Need a licensed plumber in Elizabeth, NJ? Call (908) 738-8526 for 24/7 emergency plumbing, fast leak repairs, drain cleaning, and same day local services.",
    url: "https://elizabethplumbingpros.com",
    siteName: "Elizabeth Plumbing Pros",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Elizabeth Plumbing Pros - Licensed Plumbers in Elizabeth NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumber Elizabeth NJ | 24/7 Emergency Plumbing Services",
    description:
      "Need a licensed plumber in Elizabeth, NJ? Call (908) 738-8526 for 24/7 emergency plumbing, fast leak repairs, drain cleaning, and same day local services.",
  },
};

export default function HomePage() {
  const faqSchema = generateFAQSchema(faqsData);
  const webPageSchema = generateWebPageSchema(
    "Plumber Elizabeth NJ | 24/7 Emergency Plumbing Services",
    "Need a licensed plumber in Elizabeth, NJ? Call (908) 738-8526 for 24/7 emergency plumbing, fast leak repairs, drain cleaning, and same day local services.",
    "/"
  );

  const plumbingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "@id": `${siteConfig.url}/#plumbing-service`,
    name: "Elizabeth Plumbing Pros",
    url: siteConfig.url,
    telephone: siteConfig.phone.raw,
    priceRange: "$$",
    description:
      "Connecting Elizabeth, NJ homeowners and commercial facilities with licensed local plumbing contractors for 24/7 emergency plumbing, pipe repairs, drain cleaning, and water heater services.",
    image: `${siteConfig.url}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Elizabeth",
      addressRegion: "NJ",
      postalCode: "07201",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.66399,
      longitude: -74.2107,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Elizabeth",
      },
      {
        "@type": "AdministrativeArea",
        name: "Union County",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential & Commercial Plumbing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24/7 Emergency Plumbing",
            description: "Immediate emergency plumber response for burst pipes, sewage backups, and major leaks.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plumbing Repair & Leak Detection",
            description: "Comprehensive pipe leak repairs, valve replacements, and non-invasive acoustic leak detection.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drain Cleaning & Rooter Services",
            description: "Motorized rooter cabling, hydro-jetting, and video camera pipe inspections for stubborn clogs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Heater Repair & Installation",
            description: "Diagnostics, heating element replacement, and complete installation for tank and tankless water heaters.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Plumbing Services",
            description: "Backflow testing, grease trap lines, commercial restroom maintenance, and high-volume plumbing repairs.",
          },
        },
      ],
    },
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plumbingServiceSchema) }}
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

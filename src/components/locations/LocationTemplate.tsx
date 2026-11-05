import React from "react";
import { LocationPageData } from "@/types/location";
import { ServiceItem, BlogPostItem } from "@/types";
import { LocationHero } from "./LocationHero";
import { LocationHighlights } from "./LocationHighlights";
import { LocationIntroduction } from "./LocationIntroduction";
import { LocationServicesGrid } from "./LocationServicesGrid";
import { EmergencySection } from "@/components/home/EmergencySection";
import { LocationProblems } from "./LocationProblems";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { LocationCoverage } from "./LocationCoverage";
import { ServiceCostFactors } from "@/components/services/ServiceCostFactors";
import { LocationTips } from "./LocationTips";
import { RelatedServices } from "@/components/services/RelatedServices";
import { LocationNearbyCities } from "./LocationNearbyCities";
import { FAQSection } from "@/components/home/FAQSection";
import { RelatedBlogArticles } from "@/components/services/RelatedBlogArticles";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/config/site";

interface LocationTemplateProps {
  location: LocationPageData;
  relatedServicesData: ServiceItem[];
  relatedBlogArticles: BlogPostItem[];
}

export function LocationTemplate({
  location,
  relatedServicesData,
  relatedBlogArticles,
}: LocationTemplateProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* Section 2: City-Specific Cinematic Hero */}
      <LocationHero
        cityName={location.cityName}
        stateAbbr={location.stateAbbreviation}
        eyebrow={location.heroEyebrow}
        h1={location.h1}
        description={location.heroDescription}
        image={location.heroImage}
        imageAlt={location.heroImageAlt}
        badges={location.heroBadges}
      />

      {/* Section 3: Quick Local Service Highlights */}
      <LocationHighlights highlights={location.quickHighlights} />

      {/* Section 4: Unique Local Introduction (Two-Column Editorial) */}
      <LocationIntroduction
        cityName={location.cityName}
        stateAbbr={location.stateAbbreviation}
        county={location.county}
        heading={location.cityIntroduction.heading}
        paragraphs={location.cityIntroduction.paragraphs}
        image={location.cityIntroduction.image}
        imageAlt={location.cityIntroduction.imageAlt}
        calloutTitle={location.cityIntroduction.calloutTitle}
        calloutText={location.cityIntroduction.calloutText}
      />

      {/* Section 5: Complete Plumbing Services Grid */}
      <LocationServicesGrid
        cityName={location.cityName}
        services={location.supportedServices}
      />

      {/* Section 6: Emergency Plumbing Feature */}
      <EmergencySection
        eyebrow="URGENT PLUMBING ASSISTANCE"
        title={location.urgentPlumbing.heading}
        description={location.urgentPlumbing.description}
        checklistTitle="Critical Situations Requiring Immediate Action:"
        checklistItems={location.urgentPlumbing.checklist}
        safetyTitle={location.urgentPlumbing.safetyTip.title}
        safetyText={location.urgentPlumbing.safetyTip.text}
        image={location.urgentPlumbing.image}
        imageAlt={location.urgentPlumbing.imageAlt}
        promptBadge={`${location.cityName.toUpperCase()} PHONE DISPATCH`}
        promptText={`Call ${siteConfig.phone.display} to discuss immediate repair availability in ${location.cityName}.`}
      />

      {/* Section 7: Common Plumbing Problems in the City */}
      <LocationProblems
        cityName={location.cityName}
        problems={location.commonPlumbingProblems}
      />

      {/* Section 8: How Plumbing Service Requests Work */}
      <HowItWorks
        eyebrow="SIMPLE 3-STEP PROCESS"
        title={`How Getting Plumbing Help in ${location.cityName} Works`}
        description={`A straightforward phone connection process to coordinate residential plumbing assistance in ${location.cityName}, ${location.stateAbbreviation}.`}
        steps={location.serviceProcess.map((step) => ({
          number: step.number,
          title: step.title,
          description: step.description,
        }))}
      />

      {/* Section 9: Why Contact Elizabeth Plumbing Pros */}
      <WhyChooseUs
        eyebrow="WHY CONTACT US"
        title={location.serviceBenefits.heading || `Why ${location.cityName} Residents Contact Elizabeth Plumbing Pros`}
        description={location.serviceBenefits.subtitle || "Connecting property owners with helpful plumbing resources and available independent local professionals."}
        featuredBadge={location.serviceBenefits.featured.badge}
        featuredTitle={location.serviceBenefits.featured.title}
        featuredDescription={location.serviceBenefits.featured.description}
        featuredPoints={location.serviceBenefits.featured.points}
        benefits={location.serviceBenefits.items.map((item) => ({
          title: item.title,
          description: item.description,
        }))}
      />

      {/* Section 10: Neighborhoods and Local Coverage */}
      <LocationCoverage
        cityName={location.cityName}
        stateAbbr={location.stateAbbreviation}
        county={location.county}
        heading={location.neighborhoods.heading}
        description={location.neighborhoods.description}
        areas={location.neighborhoods.areas}
        geographicNotes={location.neighborhoods.geographicNotes}
        postalCodes={location.postalCodes}
      />

      {/* Section 11: Cost and Pricing Factors */}
      <ServiceCostFactors
        serviceTitle={location.cityName}
        heading={location.costFactors.heading}
        intro={location.costFactors.intro}
        factors={location.costFactors.factors}
        infoPanel={location.costFactors.infoPanel}
      />

      {/* Section 12: Local Homeowner Plumbing Guidance */}
      <LocationTips
        cityName={location.cityName}
        heading={location.homeownerTips.heading}
        intro={location.homeownerTips.intro}
        tips={location.homeownerTips.tips}
      />

      {/* Section 13: Related Services */}
      <RelatedServices
        currentServiceTitle={`${location.cityName} Residents`}
        services={relatedServicesData}
      />

      {/* Section 14: Nearby Service Areas */}
      <LocationNearbyCities
        currentCityName={location.cityName}
        nearbyCities={location.nearbyCities}
      />

      {/* Section 15: Local FAQ Accordion */}
      <FAQSection
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        title={`Frequently Asked Questions About Plumbing in ${location.cityName}, NJ`}
        description={`Clear, direct answers to common questions about residential plumbing repairs, estimates, and emergencies in ${location.cityName}.`}
        items={location.faqs}
      />

      {/* Section 16: Related Blog Articles */}
      <RelatedBlogArticles
        articles={relatedBlogArticles}
        serviceTitle={location.cityName}
      />

      {/* Section 17: Final High-Conversion CTA */}
      <FinalCTA
        eyebrow="UNION COUNTY PLUMBING CONNECTIONS"
        title={location.finalCTA.heading}
        description={location.finalCTA.description}
        buttonLabel={`CALL ${siteConfig.phone.display}`}
      />
    </article>
  );
}


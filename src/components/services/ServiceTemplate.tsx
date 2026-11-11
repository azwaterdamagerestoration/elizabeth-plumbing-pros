import React from "react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { QuickServiceOverview } from "@/components/services/QuickServiceOverview";
import { DetailedServiceIntro } from "@/components/services/DetailedServiceIntro";
import { ServiceProblemsSigns } from "@/components/services/ServiceProblemsSigns";
import { ServiceOptionsSolutions } from "@/components/services/ServiceOptionsSolutions";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { EmergencySection } from "@/components/home/EmergencySection";
import { ServiceCostFactors } from "@/components/services/ServiceCostFactors";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { RelatedServices } from "@/components/services/RelatedServices";
import { HomeownerGuidance } from "@/components/services/HomeownerGuidance";
import { FAQSection } from "@/components/home/FAQSection";
import { RelatedBlogArticles } from "@/components/services/RelatedBlogArticles";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ServiceItem, BlogPostItem } from "@/types";
import { siteConfig } from "@/config/site";

interface ServiceTemplateProps {
  service: ServiceItem;
  relatedServicesData: ServiceItem[];
  relatedBlogArticles: BlogPostItem[];
}

export function ServiceTemplate({
  service,
  relatedServicesData,
  relatedBlogArticles,
}: ServiceTemplateProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* 1. Cinematic Hero with Breadcrumbs & Dual CTA */}
      <ServiceHero
        serviceTitle={service.title}
        eyebrow={service.heroEyebrow}
        h1={service.h1 || `${service.title} in Elizabeth, NJ`}
        description={service.heroDescription || service.shortDescription}
        image={service.image}
        imageAlt={`${service.title} in Elizabeth NJ`}
        badges={service.heroBadges || []}
        secondaryCtaText={`EXPLORE ${service.title.toUpperCase()} SOLUTIONS`}
      />

      {/* 2. Quick Service Overview (Two Columns) */}
      {service.quickOverview && (
        <QuickServiceOverview
          serviceTitle={service.title}
          intro={service.quickOverview.intro}
          highlights={service.quickOverview.highlights}
        />
      )}

      {/* 3. Detailed Editorial Service Introduction */}
      {service.detailedIntro && (
        <DetailedServiceIntro
          serviceTitle={service.title}
          heading={service.detailedIntro.heading}
          paragraphs={service.detailedIntro.paragraphs}
          calloutTitle={service.detailedIntro.calloutTitle}
          calloutText={service.detailedIntro.calloutText}
        />
      )}

      {/* 4. Common Problems and Warning Signs (6 Problem Grid) */}
      {service.warningSigns && (
        <ServiceProblemsSigns
          eyebrow="SYMPTOMS & WARNING SIGNS"
          heading={service.warningSigns.heading}
          subtitle={service.warningSigns.subtitle}
          items={service.warningSigns.items}
        />
      )}

      {/* 5. Service Options & Solutions (Alternating Rows) */}
      {service.serviceSolutions && (
        <ServiceOptionsSolutions
          eyebrow="SERVICE APPROACHES & METHODS"
          heading={service.serviceSolutions.heading}
          subtitle={service.serviceSolutions.subtitle}
          options={service.serviceSolutions.options}
        />
      )}

      {/* 6. How the Service Process Works (Reused HowItWorks) */}
      <HowItWorks
        eyebrow="SIMPLE 3-STEP PROCESS"
        title={`How Getting ${service.title} Help Works`}
        description={`A straightforward phone connection process to coordinate residential ${service.title.toLowerCase()} support in Elizabeth, NJ.`}
        steps={[
          {
            number: "01",
            title: `Call ${siteConfig.phone.display}`,
            description: `Speak with our local phone team and describe the ${service.title.toLowerCase()} symptoms, fixture location, or issue at your property.`,
          },
          {
            number: "02",
            title: "Confirm Location & Urgency",
            description:
              "Confirm your Elizabeth or Union County neighborhood and let us know whether the situation requires urgent triage or routine scheduling.",
          },
          {
            number: "03",
            title: "Connect With Local Professionals",
            description:
              "Connect with an independent local plumbing professional to discuss on-site diagnosis, written estimate options, and code-compliant work.",
          },
        ]}
      />

      {/* 7. Service Benefits (Reused Asymmetric WhyChooseUs) */}
      {service.serviceBenefits && (
        <WhyChooseUs
          eyebrow="KEY BENEFITS"
          title={service.serviceBenefits.heading}
          description={service.serviceBenefits.subtitle}
          featuredBadge="Primary Advantage"
          featuredTitle={service.serviceBenefits.featured.title}
          featuredDescription={service.serviceBenefits.featured.description}
          featuredPoints={service.serviceBenefits.featured.points}
          benefits={service.serviceBenefits.items.map((item) => ({
            title: item.title,
            description: item.description,
          }))}
        />
      )}

      {/* 8. When to Seek Urgent Help / Safety Section (Reused EmergencySection) */}
      {service.urgentHelp && (
        <EmergencySection
          eyebrow="URGENT SITUATIONS & SAFETY"
          title={service.urgentHelp.heading}
          description={service.urgentHelp.description}
          checklistTitle="Critical Indicators Requiring Immediate Action:"
          checklistItems={service.urgentHelp.urgencyChecklist}
          safetyTitle={service.urgentHelp.safetyTip.title}
          safetyText={service.urgentHelp.safetyTip.text}
          image={service.image}
          imageAlt={`Urgent ${service.title.toLowerCase()} considerations in Elizabeth, NJ`}
          promptBadge="Direct Phone Dispatch"
          promptText={`Call ${siteConfig.phone.display} to discuss immediate repair availability.`}
        />
      )}

      {/* 9. Cost and Pricing Factors */}
      {service.costFactors && (
        <ServiceCostFactors
          serviceTitle={service.title}
          heading={service.costFactors.heading}
          intro={service.costFactors.intro}
          factors={service.costFactors.factors}
          infoPanel={service.costFactors.infoPanel}
        />
      )}

      {/* 10. Service Area Coverage (Reused ServiceAreas) */}
      <ServiceAreas
        eyebrow="LOCAL COVERAGE"
        title={`${service.title} in Elizabeth and Nearby Communities`}
        description={`Explore ${service.title.toLowerCase()} service information across Elizabeth and surrounding Union County municipalities.`}
      />

      {/* 11. Contextual Related Plumbing Services */}
      <RelatedServices
        currentServiceTitle={service.title}
        services={relatedServicesData}
      />

      {/* 12. In-Depth Homeowner Guidance & Maintenance */}
      {service.homeownerGuidance && (
        <HomeownerGuidance
          serviceTitle={service.title}
          heading={service.homeownerGuidance.heading}
          intro={service.homeownerGuidance.intro}
          sections={service.homeownerGuidance.sections}
        />
      )}

      {/* 13. Service-Specific Frequently Asked Questions */}
      {service.faqItems && service.faqItems.length > 0 && (
        <FAQSection
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title={`Frequently Asked Questions About ${service.title}`}
          description={`Clear, direct answers to common questions about residential ${service.title.toLowerCase()} in Elizabeth, NJ.`}
          items={service.faqItems}
        />
      )}

      {/* 14. Related Educational Blog Articles */}
      <RelatedBlogArticles
        articles={relatedBlogArticles}
        serviceTitle={service.title}
      />

      {/* 15. Final High-Conversion CTA */}
      <FinalCTA
        eyebrow="UNION COUNTY PLUMBING CONNECTIONS"
        title={`Need ${service.title} Help in Elizabeth, NJ?`}
        description={`Call Elizabeth Plumbing Pros at ${siteConfig.phone.display} to discuss your plumbing problem and connect with an independent local professional.`}
        buttonLabel={`CALL ${siteConfig.phone.display}`}
      />
    </article>
  );
}


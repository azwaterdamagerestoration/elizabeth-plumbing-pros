export interface ServiceBadge {
  label: string;
  iconName: string;
}

export interface QuickHighlight {
  title: string;
  description: string;
  iconName: string;
}

export interface ProblemSign {
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceSolutionOption {
  title: string;
  description: string;
  suitableFor: string;
  keyPoints: string[];
  image?: string;
  imageAlt?: string;
  relatedServiceSlug?: string;
}

export interface ServiceCostFactor {
  title: string;
  description: string;
}

export interface HomeownerGuideSection {
  subheading: string;
  paragraphs: string[];
  tips?: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  features: string[];
  commonIssues: string[];

  // Extended fields for master service template
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  searchIntent?: string;
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
  heroEyebrow?: string;
  heroDescription?: string;
  heroBadges?: ServiceBadge[];

  quickOverview?: {
    intro: string;
    highlights: QuickHighlight[];
  };

  detailedIntro?: {
    heading: string;
    paragraphs: string[];
    calloutTitle?: string;
    calloutText?: string;
  };

  warningSigns?: {
    heading: string;
    subtitle: string;
    items: ProblemSign[];
  };

  serviceSolutions?: {
    heading: string;
    subtitle: string;
    options: ServiceSolutionOption[];
  };

  serviceBenefits?: {
    heading: string;
    subtitle: string;
    featured: {
      title: string;
      description: string;
      points: string[];
    };
    items: {
      title: string;
      description: string;
      iconName: string;
    }[];
  };

  urgentHelp?: {
    heading: string;
    description: string;
    urgencyChecklist: string[];
    safetyTip: {
      title: string;
      text: string;
    };
  };

  costFactors?: {
    heading: string;
    intro: string;
    factors: ServiceCostFactor[];
    infoPanel: {
      title: string;
      bullets: string[];
      disclaimer: string;
    };
  };

  homeownerGuidance?: {
    heading: string;
    intro: string;
    sections: HomeownerGuideSection[];
  };

  faqItems?: FAQItem[];
  relatedServices?: string[];
  relatedBlogSlugs?: string[];
}

export interface LocationItem {
  id: string;
  name: string;
  slug: string;
  county: string;
  state: string;
  postalCodes: string[];
  description: string;
  neighborhoodHighlights: string[];
  commonNeeds: string[];
}

export interface ProblemItem {
  id: string;
  title: string;
  symptoms: string;
  recommendedServiceSlug: string;
  recommendedServiceTitle: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export * from "./blog";

export interface NavItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    iconName?: string;
  }[];
}

export * from "./location";



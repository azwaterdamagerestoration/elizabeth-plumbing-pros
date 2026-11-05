import { FAQItem } from "./index";

export interface LocationBadge {
  label: string;
  iconName: string;
}

export interface LocationHighlight {
  title: string;
  description: string;
  iconName: string;
}

export interface SupportedService {
  slug: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  features?: string[];
}

export interface LocationProblem {
  id: string;
  title: string;
  symptoms: string;
  possibleCauses: string;
  whyItMatters: string;
  whenToCall: string;
  recommendedServiceSlug: string;
  recommendedServiceTitle: string;
  iconName: string;
}

export interface NeighborhoodArea {
  name: string;
  description: string;
}

export interface NearbyCityItem {
  name: string;
  slug: string;
  isHome?: boolean;
  distanceOrDirection?: string;
  description: string;
}

export interface LocationPageData {
  id: string;
  slug: string;
  cityName: string;
  state: string;
  stateAbbreviation: string;
  county: string;
  postalCodes: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  h1: string;
  heroEyebrow: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  heroBadges: LocationBadge[];
  quickHighlights: LocationHighlight[];
  cityIntroduction: {
    heading: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    calloutTitle?: string;
    calloutText?: string;
  };
  localContext: {
    housingCharacteristics: string;
    pipingSystems: string;
    seasonalFactors: string;
  };
  supportedServices: SupportedService[];
  urgentPlumbing: {
    heading: string;
    description: string;
    checklist: string[];
    safetyTip: {
      title: string;
      text: string;
    };
    image: string;
    imageAlt: string;
  };
  commonPlumbingProblems: LocationProblem[];
  serviceProcess: {
    number: string;
    title: string;
    description: string;
  }[];
  serviceBenefits: {
    heading?: string;
    subtitle?: string;
    featured: {
      badge: string;
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
  neighborhoods: {
    heading: string;
    description: string;
    areas: NeighborhoodArea[];
    geographicNotes: string;
  };
  costFactors: {
    heading: string;
    intro: string;
    factors: {
      title: string;
      description: string;
    }[];
    infoPanel: {
      title: string;
      bullets: string[];
      disclaimer: string;
    };
  };
  homeownerTips: {
    heading: string;
    intro: string;
    tips: {
      title: string;
      description: string;
      iconName: string;
    }[];
  };
  faqs: FAQItem[];
  relatedServices: string[];
  nearbyCities: NearbyCityItem[];
  relatedArticles: string[];
  finalCTA: {
    heading: string;
    description: string;
  };
}


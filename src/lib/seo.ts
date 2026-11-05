import { siteConfig } from "@/config/site";
import { FAQItem, ServiceItem, BlogPostItem } from "@/types";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone.raw,
    description: siteConfig.businessModel.description,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${siteConfig.primaryLocation.city}, ${siteConfig.primaryLocation.stateAbbr}`,
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.seo.defaultDescription,
  };
}

export function generateWebPageSchema(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: `${siteConfig.url}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function generateAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${siteConfig.name}`,
    description: "Learn about Elizabeth Plumbing Pros, our local referral network, and how we connect homeowners with independent plumbing specialists.",
    url: `${siteConfig.url}/about`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Organization",
      name: siteConfig.name,
      telephone: siteConfig.phone.raw,
      description: siteConfig.businessModel.description,
    },
  };
}

export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.name}`,
    description: "Contact Elizabeth Plumbing Pros by phone or web inquiry to discuss residential plumbing repairs in Elizabeth and Union County, NJ.",
    url: `${siteConfig.url}/contact`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      telephone: siteConfig.phone.raw,
      url: siteConfig.url,
    },
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: "Plumbing Service",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      telephone: siteConfig.phone.raw,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${siteConfig.primaryLocation.city}, ${siteConfig.primaryLocation.stateAbbr}`,
    },
    description: service.shortDescription,
  };
}

export function generateBreadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href ? `${siteConfig.url}${item.href}` : undefined,
      })),
    ],
  };
}

export function generateBlogPostSchema(post: BlogPostItem) {
  const imageUrl = post.image?.startsWith("http")
    ? post.image
    : `${siteConfig.url}${post.image}`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: post.publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone.raw,
    },
  };

  if (post.updatedDate) {
    schema.dateModified = post.updatedDate;
  } else {
    schema.dateModified = post.publishedDate;
  }

  if (post.author) {
    schema.author = {
      "@type": "Organization",
      name: post.author.name,
      description: post.author.role,
    };
  } else {
    schema.author = {
      "@type": "Organization",
      name: `${siteConfig.name} Editorial Team`,
      url: siteConfig.url,
    };
  }

  return schema;
}

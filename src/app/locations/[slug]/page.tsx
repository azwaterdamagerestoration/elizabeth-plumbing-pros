import React from "react";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import {
  getLocationBySlug,
  getAllLocationSlugs,
} from "@/data/locations";
import { servicesData } from "@/data/services";
import { blogPostsData } from "@/data/blog";
import { LocationTemplate } from "@/components/locations/LocationTemplate";
import {
  generateWebPageSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { siteConfig } from "@/config/site";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (
    slug === "elizabeth-nj" ||
    slug === "elizabeth" ||
    slug === "plumber-elizabeth-nj" ||
    slug === "plumber-elizabeth"
  ) {
    return {
      title: siteConfig.seo.defaultTitle,
      description: siteConfig.seo.defaultDescription,
    };
  }

  const location = getLocationBySlug(slug);

  if (!location) {
    return { title: "Location Not Found" };
  }

  const canonicalUrl = `${siteConfig.url}/locations/${location.slug}`;

  return {
    title: {
      absolute: location.metaTitle,
    },
    description: location.metaDescription,
    keywords: [location.primaryKeyword, ...location.secondaryKeywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}${location.heroImage}`,
          width: 1200,
          height: 630,
          alt: location.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: [`${siteConfig.url}${location.heroImage}`],
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;

  // Elizabeth URL Strategy: Consolidate Elizabeth to the primary homepage landing page
  if (
    slug === "elizabeth-nj" ||
    slug === "elizabeth" ||
    slug === "plumber-elizabeth-nj" ||
    slug === "plumber-elizabeth"
  ) {
    permanentRedirect("/");
  }

  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  // Schema generation
  const webPageSchema = generateWebPageSchema(
    location.metaTitle,
    location.metaDescription,
    `/locations/${location.slug}`
  );

  const faqSchema = generateFAQSchema(location.faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Service Areas", href: "/service-areas" },
    { label: `${location.cityName}, ${location.stateAbbreviation}` },
  ]);

  // Truthful Service Schema (No fake addresses, Organization provider, administrative area)
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Plumbing Services in ${location.cityName}, ${location.stateAbbreviation}`,
    serviceType: "Plumbing Referral and Dispatch Service",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      telephone: siteConfig.phone.raw,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${location.cityName}, ${location.stateAbbreviation}`,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${location.county}, ${location.state}`,
      },
    },
    description: location.metaDescription,
  };

  // Filter contextual related services & blog articles
  const relatedServicesData = servicesData.filter((service) =>
    location.relatedServices.includes(service.slug)
  );

  const relatedBlogArticles = blogPostsData.filter((post) =>
    location.relatedArticles.includes(post.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }}
      />

      <LocationTemplate
        location={location}
        relatedServicesData={relatedServicesData}
        relatedBlogArticles={relatedBlogArticles}
      />
    </>
  );
}

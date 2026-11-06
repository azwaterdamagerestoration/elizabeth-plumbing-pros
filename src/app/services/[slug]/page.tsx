import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { blogPostsData } from "@/data/blog";
import { ServiceTemplate } from "@/components/services/ServiceTemplate";
import {
  generateServiceSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo";
import { siteConfig } from "@/config/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const metaTitle =
    service.metaTitle ||
    `${service.title} in Elizabeth, NJ | Elizabeth Plumbing Pros`;
  const metaDescription = service.metaDescription || service.shortDescription;
  const canonicalUrl = `${siteConfig.url}/services/${service.slug}`;

  return {
    title: {
      absolute: metaTitle,
    },
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      images: [
        {
          url: service.image,
          alt: `${service.title} in Elizabeth, NJ`,
          width: 1200,
          height: 675,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Resolve related services
  const relatedServicesData = (service.relatedServices || [])
    .map((rSlug) => servicesData.find((s) => s.slug === rSlug))
    .filter((s): s is (typeof servicesData)[number] => Boolean(s && s.id !== service.id))
    .slice(0, 3);

  // If none specified or less than 3, fill with other available services
  if (relatedServicesData.length < 3) {
    const others = servicesData.filter(
      (s) => s.id !== service.id && !relatedServicesData.some((r) => r.id === s.id)
    );
    while (relatedServicesData.length < 3 && others.length > 0) {
      const next = others.shift();
      if (next) relatedServicesData.push(next);
    }
  }

  // Resolve related blog articles
  const relatedBlogArticles = (service.relatedBlogSlugs || [])
    .map((bSlug) => blogPostsData.find((b) => b.slug === bSlug))
    .filter((b): b is (typeof blogPostsData)[number] => Boolean(b))
    .slice(0, 3);

  if (relatedBlogArticles.length === 0) {
    relatedBlogArticles.push(...blogPostsData.slice(0, 3));
  }

  // Generate truth-anchored JSON-LD Schemas
  const serviceSchema = generateServiceSchema(service);
  const webPageSchema = generateWebPageSchema(
    service.metaTitle || `${service.title} in Elizabeth, NJ`,
    service.metaDescription || service.shortDescription,
    `/services/${service.slug}`
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Services", href: "/services" },
    { label: service.title },
  ]);
  const faqSchema =
    service.faqItems && service.faqItems.length > 0
      ? generateFAQSchema(service.faqItems)
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <ServiceTemplate
        service={service}
        relatedServicesData={relatedServicesData}
        relatedBlogArticles={relatedBlogArticles}
      />
    </>
  );
}

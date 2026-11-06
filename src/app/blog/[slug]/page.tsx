import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPostsData } from "@/data/blog";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/config/site";
import {
  generateBlogPostSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo";
import { TableOfContentsItem } from "@/types";
import {
  BlogHero,
  BlogFeaturedImage,
  BlogPostLayout,
  BlogRelatedArticles,
} from "@/components/blog";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  const metaTitle = post.metaTitle
    ? `${post.metaTitle} | ${siteConfig.name}`
    : `${post.title} | ${siteConfig.name}`;
  const metaDescription = post.metaDescription || post.excerpt;
  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `${siteConfig.url}${post.image}`;

  return {
    title: {
      absolute: metaTitle,
    },
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      siteName: siteConfig.name,
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate || post.publishedDate,
      authors: [post.author?.name || `${siteConfig.name} Editorial Team`],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostDetailPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // 1. Structured Data Generation
  const blogPostSchema = generateBlogPostSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Blog", href: "/blog" },
    { label: post.category },
    { label: post.title },
  ]);
  const faqSchema =
    post.faqItems && post.faqItems.length > 0
      ? generateFAQSchema(post.faqItems)
      : null;

  // 2. Dynamic Table of Contents Generation
  const tocItems: TableOfContentsItem[] = [];

  if (post.sections && post.sections.length > 0) {
    post.sections.forEach((section) => {
      tocItems.push({
        id: section.id,
        label: section.heading,
        level: section.level || 2,
      });

      if (section.subsections && section.subsections.length > 0) {
        section.subsections.forEach((sub) => {
          tocItems.push({
            id: sub.id,
            label: sub.heading,
            level: 3,
          });
        });
      }
    });
  }

  // If FAQ exists and wasn't already a section ID
  if (post.faqItems && post.faqItems.length > 0) {
    if (!tocItems.some((item) => item.id === "frequently-asked-questions")) {
      tocItems.push({
        id: "frequently-asked-questions",
        label: "Frequently Asked Questions",
        level: 2,
      });
    }
  }

  // 3. Resolve Related Services
  const relatedServicesData = (post.relatedServices || [])
    .map((serviceSlug) =>
      servicesData.find(
        (s) => s.slug === serviceSlug || s.id === serviceSlug
      )
    )
    .filter((s): s is (typeof servicesData)[0] => Boolean(s));

  // 4. Resolve Related Locations
  const locationMap: Record<string, { name: string; slug: string }> = {
    union: { name: "Union", slug: "plumber-union-nj" },
    westfield: { name: "Westfield", slug: "plumber-westfield-nj" },
    cranford: { name: "Cranford", slug: "plumber-cranford-nj" },
    roselle: { name: "Roselle", slug: "plumber-roselle-nj" },
    fanwood: { name: "Fanwood", slug: "plumber-fanwood-nj" },
  };

  const relatedLocationsData = (post.relatedLocations || [])
    .map((locKey) => locationMap[locKey.toLowerCase()])
    .filter(Boolean);

  // 5. Resolve Related Articles
  const otherArticles = blogPostsData.filter((p) => p.slug !== post.slug);
  const relatedArticlesData = (post.relatedArticles || [])
    .map((articleSlug) =>
      blogPostsData.find((p) => p.slug === articleSlug)
    )
    .filter((p): p is (typeof blogPostsData)[0] => Boolean(p && p.slug !== post.slug));

  const displayRelatedArticles =
    relatedArticlesData.length > 0
      ? relatedArticlesData.slice(0, 3)
      : otherArticles.slice(0, 3);

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
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

      {/* Article Container */}
      <article className="min-h-screen bg-white">
        {/* Section 3: Premium Editorial Hero */}
        <BlogHero post={post} />

        {/* Section 4: 16:9 Featured Image */}
        <BlogFeaturedImage
          src={post.image}
          alt={post.imageAlt || post.title}
          caption={post.imageCaption}
          priority={true}
        />

        {/* Section 5 & 8: Main 2-Column Editorial Layout */}
        <BlogPostLayout
          post={post}
          tocItems={tocItems}
          relatedServicesData={relatedServicesData}
          relatedLocationsData={relatedLocationsData}
        />

        {/* Section 20: Frequently Asked Questions Accordion */}
        {post.faqItems && post.faqItems.length > 0 && (
          <div id="frequently-asked-questions" className="scroll-mt-24">
            <FAQSection
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title={`Frequently Asked Questions: ${post.title}`}
              description="Direct, verified answers to common questions regarding diagnostic leak detection, plumbing risks, and immediate homeowner steps."
              items={post.faqItems}
              className="border-t border-slate-200/90"
            />
          </div>
        )}

        {/* Section 21: Related Articles Grid */}
        <BlogRelatedArticles
          articles={displayRelatedArticles}
          currentPostTitle={post.title}
        />

        {/* Section 22: Final Conversion CTA */}
        <FinalCTA
          eyebrow="UNION COUNTY PLUMBING CONNECTIONS"
          title="Concerned About a Hidden Plumbing Leak in Elizabeth, NJ?"
          description="Call Elizabeth Plumbing Pros to speak with our local team. We coordinate prompt non-invasive leak evaluation across Elizabeth and Union County."
          buttonLabel={`CALL ${siteConfig.phone.display}`}
        />
      </article>
    </>
  );
}

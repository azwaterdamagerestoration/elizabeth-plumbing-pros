import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { blogPostsData } from "@/data/blog";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Plumbing Tips & Homeowner Guides",
  description:
    "Practical plumbing articles, leak diagnostic protocols, burst pipe emergency steps, drain cleaning advice, and water heater maintenance for Elizabeth, NJ residents.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: `Plumbing Tips & Homeowner Guides | ${siteConfig.name}`,
    description:
      "Practical plumbing articles, leak diagnostic protocols, burst pipe emergency steps, drain cleaning advice, and water heater maintenance for Elizabeth, NJ residents.",
    url: `${siteConfig.url}/blog`,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Plumbing Tips & Homeowner Guides | Elizabeth Plumbing Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Plumbing Tips & Homeowner Guides | ${siteConfig.name}`,
    description:
      "Practical plumbing articles, leak diagnostic protocols, burst pipe emergency steps, drain cleaning advice, and water heater maintenance for Elizabeth, NJ residents.",
  },
};

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPostsData;

  return (
    <div className="py-10 sm:py-16 bg-[#F8FAFC]">
      <Container className="max-w-6xl">
        <Breadcrumbs items={[{ label: "Blog" }]} />

        {/* Blog Header */}
        <div className="mt-6 mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1677C8] text-xs font-extrabold uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>HOMEOWNER KNOWLEDGE BASE &amp; ADVICE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
            Plumbing Guides &amp; Diagnostic Tips for Elizabeth Homeowners
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5D6B7C] leading-relaxed">
            Evidence-based advice on detecting hidden leaks, preventing plumbing emergencies, understanding local water codes, and maintaining residential plumbing systems in Union County.
          </p>
        </div>

        {/* Featured Centerpiece Post */}
        {featuredPost && (
          <div className="mb-14">
            <article className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
              <div className="relative aspect-[16/9] lg:aspect-auto lg:col-span-7 bg-slate-900 min-h-[280px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt || featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#102B4E]/90 text-white text-xs font-extrabold tracking-wider uppercase backdrop-blur-xs">
                  FEATURED GUIDE • {featuredPost.category}
                </div>
              </div>

              <div className="p-7 sm:p-9 lg:col-span-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3.5 text-xs text-[#5D6B7C] mb-3">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#1677C8]" />
                      <span>{featuredPost.publishedDate}</span>
                    </div>
                    <span>&bull;</span>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#1677C8]" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm sm:text-base text-[#5D6B7C] leading-relaxed line-clamp-4">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <span className="text-xs text-slate-400 font-medium">
                    In-Depth Guide
                  </span>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Secondary Articles Grid */}
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B4E] mb-6">
            More Homeowner Articles &amp; Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#102B4E]/85 text-white text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-xs">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-[#5D6B7C] mb-2.5">
                      <div className="flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#1677C8]" />
                        <span>{post.publishedDate}</span>
                      </div>
                      <span>&bull;</span>
                      <div className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#1677C8]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-[#5D6B7C] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

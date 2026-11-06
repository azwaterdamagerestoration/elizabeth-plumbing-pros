import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  Wrench,
  MapPin,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import { blogPostsData } from "@/data/blog";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "HTML Site Map & Directory",
  description:
    "Complete directory of all pages, plumbing services, regional Union County service areas, homeowner guides, and legal policies on Elizabeth Plumbing Pros.",
  alternates: {
    canonical: `${siteConfig.url}/site-map`,
  },
  openGraph: {
    title: `HTML Site Map & Directory | ${siteConfig.name}`,
    description:
      "Complete directory of all pages, plumbing services, regional Union County service areas, homeowner guides, and legal policies on Elizabeth Plumbing Pros.",
    url: `${siteConfig.url}/site-map`,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "HTML Site Map & Directory | Elizabeth Plumbing Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `HTML Site Map & Directory | ${siteConfig.name}`,
    description:
      "Complete directory of all pages, plumbing services, regional Union County service areas, homeowner guides, and legal policies on Elizabeth Plumbing Pros.",
  },
};

export default function HTMLSitemapPage() {
  const mainPages = [
    { label: "Home Page (Elizabeth Plumbing Hub)", href: "/", desc: "Main landing page and emergency telephone contact" },
    { label: "About Elizabeth Plumbing Pros", href: "/about", desc: "Our mission, transparency pledge, and business model" },
    { label: "Contact Us & Inquiry Form", href: "/contact", desc: "Telephone helpline and accessible contact form" },
    { label: "How It Works", href: "/how-it-works", desc: "Step-by-step 4-stage service connection workflow" },
    { label: "Plumbing Resources & Guides", href: "/resources", desc: "Emergency protocols, symptom matchers, and maintenance" },
    { label: "Frequently Asked Questions (FAQ)", href: "/faq", desc: "Central searchable FAQ repository" },
  ];

  const legalPages = [
    { label: "Editorial Policy & Standards", href: "/editorial-policy", desc: "Research standards, fact-checking, and review protocols" },
    { label: "Accessibility Statement", href: "/accessibility", desc: "WCAG 2.2 Level AA accessibility commitment and contact" },
    { label: "Privacy Policy", href: "/privacy", desc: "Information collection, usage, and referral sharing disclosures" },
    { label: "Terms of Use", href: "/terms", desc: "Platform terms, independent contractor status, and limitations" },
    { label: "Service & Information Disclaimer", href: "/disclaimer", desc: "Educational content limitations and verification requirements" },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 sm:py-16">
      <Container className="max-w-6xl">
        <Breadcrumbs items={[{ label: "Site Map" }]} className="mb-6" />

        {/* Header */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1677C8] text-xs font-extrabold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>WEBSITE DIRECTORY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102B4E] tracking-tight">
            Elizabeth Plumbing Pros Site Map
          </h1>

          <p className="mt-3 text-base sm:text-lg text-[#5D6B7C] max-w-3xl leading-relaxed">
            A comprehensive, human-readable overview of all published pages, service categories, regional coverage hubs, homeowner guides, and legal documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Navigation Pages */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 shadow-2xs space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-blue-50 text-[#1677C8]">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-[#102B4E]">Main Website Pages</h2>
                <span className="text-xs text-[#5D6B7C]">Core informational &amp; contact pages</span>
              </div>
            </div>

            <ul className="space-y-3.5">
              {mainPages.map((page) => (
                <li key={page.href} className="group">
                  <Link
                    href={page.href}
                    className="font-bold text-sm text-[#102B4E] group-hover:text-[#1677C8] transition-colors flex items-center justify-between"
                  >
                    <span>{page.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1677C8] group-hover:translate-x-1 transition-all" />
                  </Link>
                  <p className="text-xs text-[#5D6B7C] mt-0.5">{page.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Service Areas */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 shadow-2xs space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-blue-50 text-[#1677C8]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-[#102B4E]">Regional Service Areas</h2>
                <span className="text-xs text-[#5D6B7C]">Union County municipalities &amp; hubs</span>
              </div>
            </div>

            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/service-areas"
                  className="font-bold text-sm text-[#1677C8] hover:underline flex items-center justify-between"
                >
                  <span>All Service Areas Directory Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs text-[#5D6B7C] mt-0.5">Central regional coverage hub</p>
              </li>
              {locationsData.map((loc) => (
                <li key={loc.id} className="group">
                  <Link
                    href={loc.id === "elizabeth" ? "/" : `/locations/plumber-${loc.id}-nj`}
                    className="font-bold text-sm text-[#102B4E] group-hover:text-[#1677C8] transition-colors flex items-center justify-between"
                  >
                    <span>{loc.name}, NJ Plumbing Services</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1677C8] group-hover:translate-x-1 transition-all" />
                  </Link>
                  <p className="text-xs text-[#5D6B7C] mt-0.5">
                    Zip codes: {loc.postalCodes.join(", ")} ({loc.county})
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Plumbing Services */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 shadow-2xs space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-blue-50 text-[#1677C8]">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-[#102B4E]">Plumbing Services</h2>
                <span className="text-xs text-[#5D6B7C]">12 Specialized residential solutions</span>
              </div>
            </div>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="font-bold text-sm text-[#1677C8] hover:underline flex items-center justify-between"
                >
                  <span>Complete Services Directory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              {servicesData.map((svc) => (
                <li key={svc.id} className="group">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="font-bold text-sm text-[#102B4E] group-hover:text-[#1677C8] transition-colors flex items-center justify-between"
                  >
                    <span>{svc.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1677C8] group-hover:translate-x-1 transition-all" />
                  </Link>
                  <p className="text-xs text-[#5D6B7C] line-clamp-1 mt-0.5">{svc.shortDescription}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog & Educational Guides */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 shadow-2xs space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-blue-50 text-[#1677C8]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-[#102B4E]">Homeowner Guides &amp; Blog</h2>
                <span className="text-xs text-[#5D6B7C]">Evidence-based plumbing knowledge</span>
              </div>
            </div>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="font-bold text-sm text-[#1677C8] hover:underline flex items-center justify-between"
                >
                  <span>Main Blog Archive Index</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              {blogPostsData.map((post) => (
                <li key={post.id} className="group">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-sm text-[#102B4E] group-hover:text-[#1677C8] transition-colors flex items-center justify-between"
                  >
                    <span>{post.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1677C8] group-hover:translate-x-1 transition-all" />
                  </Link>
                  <p className="text-xs text-[#5D6B7C] mt-0.5">
                    {post.category} • {post.readTime}
                  </p>
                </li>
              ))}
            </ul>

            {/* Legal and Compliance Links */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102B4E]">
                <ShieldCheck className="w-4 h-4 text-[#1677C8]" />
                <span>Trust, Compliance &amp; Legal Policies</span>
              </div>
              <ul className="space-y-2.5">
                {legalPages.map((lp) => (
                  <li key={lp.href} className="group">
                    <Link
                      href={lp.href}
                      className="font-semibold text-xs text-[#102B4E] group-hover:text-[#1677C8] transition-colors flex items-center justify-between"
                    >
                      <span>{lp.label}</span>
                      <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-[#1677C8]" />
                    </Link>
                    <p className="text-[11px] text-[#5D6B7C]">{lp.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

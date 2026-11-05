import React from "react";
import { PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/shared/Container";
import { CallButton } from "@/shared/CallButton";
import {
  BlogPostItem,
  TableOfContentsItem,
  ServiceItem,
} from "@/types";
import { TableOfContents } from "./TableOfContents";
import { QuickAnswer } from "./QuickAnswer";
import { KeyTakeaways } from "./KeyTakeaways";
import { ArticleBody } from "./ArticleBody";
import { InlineCTA } from "./InlineCTA";
import { AuthorBio } from "./AuthorBio";
import { SourceReferences } from "./SourceReferences";
import { BlogRelatedServices } from "./BlogRelatedServices";

interface BlogPostLayoutProps {
  post: BlogPostItem;
  tocItems: TableOfContentsItem[];
  relatedServicesData?: ServiceItem[];
  relatedLocationsData?: { name: string; slug: string }[];
}

export function BlogPostLayout({
  post,
  tocItems,
  relatedServicesData = [],
  relatedLocationsData = [],
}: BlogPostLayoutProps) {
  return (
    <div className="py-10 sm:py-14 bg-white">
      <Container className="max-w-6xl">
        {/* Mobile / Tablet Collapsible Table of Contents */}
        {tocItems.length > 0 && (
          <TableOfContents items={tocItems} isMobileOnly />
        )}

        {/* 2-Column Desktop Grid: Left Sidebar + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12">
          {/* Left Sidebar: Sticky Table of Contents & Quick Contact */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3.5 space-y-6">
            {tocItems.length > 0 && <TableOfContents items={tocItems} />}

            {/* Sticky Sidebar CTA */}
            <div className="rounded-2xl bg-[#102B4E] p-6 text-white shadow-lg border border-slate-700/80">
              <div className="flex items-center gap-2 text-xs font-bold text-[#23B8D4] uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>LOCAL HELPLINE</span>
              </div>
              <h3 className="text-lg font-bold">Have an Active Leak?</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Connect with an independent plumbing specialist in Elizabeth or Union County.
              </p>
              <div className="mt-5">
                <CallButton
                  size="sm"
                  variant="primary"
                  label={`Call ${siteConfig.phone.display}`}
                  trackingEvent="sidebar_blog_call_click"
                  className="w-full justify-center text-sm shadow-md"
                />
              </div>
            </div>
          </aside>

          {/* Main Article Reading Column */}
          <main className="lg:col-span-8 xl:col-span-8.5 max-w-3xl">
            {/* Answer-First Quick Answer */}
            {post.quickAnswer && (
              <QuickAnswer quickAnswer={post.quickAnswer} className="mb-8" />
            )}

            {/* Key Takeaways */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <KeyTakeaways takeaways={post.keyTakeaways} className="mb-10" />
            )}

            {/* Article Body Content */}
            <ArticleBody
              sections={post.sections}
              legacyContent={post.content}
            />

            {/* Mid-Article Contextual CTA */}
            <InlineCTA cta={post.inlineCTA} />

            {/* Sources and Industry References */}
            {post.sources && post.sources.length > 0 && (
              <SourceReferences sources={post.sources} />
            )}

            {/* Author / Editorial Standards Card */}
            <AuthorBio author={post.author} reviewer={post.reviewer} />

            {/* Related Services & Local Service Areas */}
            {relatedServicesData.length > 0 && (
              <BlogRelatedServices
                services={relatedServicesData}
                relatedLocations={relatedLocationsData}
              />
            )}
          </main>
        </div>
      </Container>
    </div>
  );
}

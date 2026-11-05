import React from "react";
import { Calendar, Clock, RefreshCw, ShieldCheck } from "lucide-react";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { BlogPostItem } from "@/types";

interface BlogHeroProps {
  post: BlogPostItem;
}

export function BlogHero({ post }: BlogHeroProps) {
  const authorName = post.author?.name || "Elizabeth Plumbing Pros Editorial Team";

  return (
    <section className="bg-gradient-to-b from-[#080F1F] via-[#0B172D] to-[#102B4E] text-white pt-8 pb-14 sm:pb-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1677C8]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#23B8D4]/10 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10 max-w-4xl">
        <Breadcrumbs
          variant="light"
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.category },
            { label: post.title },
          ]}
          className="mb-6"
        />

        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1677C8]/25 border border-[#23B8D4]/40 text-[#23B8D4] text-xs font-extrabold uppercase tracking-widest mb-4">
          <span>{post.category}</span>
        </div>

        {/* Article H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-white tracking-tight leading-[1.15] text-balance">
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal text-balance">
            {post.excerpt}
          </p>
        )}

        {/* Metadata Bar */}
        <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-300">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#1677C8]/30 border border-[#23B8D4]/40 flex items-center justify-center text-[#23B8D4] font-bold text-xs">
              EP
            </div>
            <div>
              <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Written by</span>
              <span className="font-semibold text-white">{authorName}</span>
            </div>
          </div>

          <div className="hidden sm:block text-slate-600">•</div>

          {/* Published Date */}
          <div className="flex items-center gap-1.5 text-slate-300">
            <Calendar className="w-4 h-4 text-[#23B8D4] shrink-0" aria-hidden="true" />
            <span>{post.publishedDate}</span>
          </div>

          {/* Updated Date (if available) */}
          {post.updatedDate && (
            <>
              <div className="hidden sm:block text-slate-600">•</div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <RefreshCw className="w-3.5 h-3.5 text-[#23B8D4] shrink-0" aria-hidden="true" />
                <span>Updated: {post.updatedDate}</span>
              </div>
            </>
          )}

          <div className="hidden sm:block text-slate-600">•</div>

          {/* Reading Time */}
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-4 h-4 text-[#23B8D4] shrink-0" aria-hidden="true" />
            <span>{post.readTime}</span>
          </div>

          {/* Optional Reviewer */}
          {post.reviewer && (
            <>
              <div className="hidden sm:block text-slate-600">•</div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#23B8D4] shrink-0" aria-hidden="true" />
                <span>Reviewed by {post.reviewer.name}</span>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

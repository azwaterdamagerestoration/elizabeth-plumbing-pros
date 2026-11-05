import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";
import { BlogPostItem } from "@/types";

interface BlogRelatedArticlesProps {
  articles: BlogPostItem[];
  currentPostTitle?: string;
  className?: string;
}

export function BlogRelatedArticles({
  articles,
  currentPostTitle,
  className = "",
}: BlogRelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className={`py-16 sm:py-20 bg-slate-50 border-t border-slate-200/90 ${className}`}>
      <Container className="max-w-6xl">
        <SectionHeading
          eyebrow="CONTINUE READING"
          title={
            currentPostTitle
              ? `More Guides Related to ${currentPostTitle.split(" ").slice(0, 4).join(" ")}...`
              : "Related Homeowner Guides & Plumbing Tips"
          }
          description="Explore practical advice, emergency prevention tips, and equipment maintenance insights from our knowledge base."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 mt-10">
          {articles.map((post) => (
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
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#080F1F]/85 text-white text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-xs">
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
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

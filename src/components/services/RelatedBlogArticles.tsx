import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";
import { BlogPostItem } from "@/types";

interface RelatedBlogArticlesProps {
  articles: BlogPostItem[];
  serviceTitle: string;
}

export function RelatedBlogArticles({
  articles,
  serviceTitle,
}: RelatedBlogArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="HELPFUL RESOURCES"
          title={`Related Guides & Articles for ${serviceTitle}`}
          description="Read practical homeowner guidance, preventive advice, and maintenance tips from our knowledge base."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="relative h-52 sm:h-56 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#080F1F]/85 text-white text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-3.5 text-xs text-[#5D6B7C] mb-3">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#1677C8]" />
                      <span>{post.publishedDate}</span>
                    </div>
                    <span>&bull;</span>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#1677C8]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="mt-3 text-sm text-[#5D6B7C] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-2 border-t border-slate-100">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}


import { FAQItem } from "./index";

export type CalloutType = "important" | "safety" | "tip" | "fact" | "mistake";

export interface BlogCallout {
  type: CalloutType;
  title: string;
  text: string;
}

export interface BlogTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface BlogImage {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface BlogSection {
  id: string;
  heading: string;
  level?: 2 | 3;
  paragraphs: string[];
  bullets?: string[];
  callout?: BlogCallout;
  image?: BlogImage;
  table?: BlogTable;
  subsections?: {
    id: string;
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    callout?: BlogCallout;
  }[];
}

export interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
}

export interface BlogReviewer {
  name: string;
  role: string;
  credentials?: string;
  date?: string;
}

export interface BlogSourceReference {
  title: string;
  organization: string;
  url: string;
  publicationDate?: string;
}

export interface BlogQuickAnswer {
  question: string;
  answer: string;
  supportingNote?: string;
}

export interface BlogInlineCTA {
  eyebrow?: string;
  heading: string;
  description: string;
  buttonLabel?: string;
  phone?: string;
  telHref?: string;
  targetServiceSlug?: string;
}

export interface TableOfContentsItem {
  id: string;
  label: string;
  level: number;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedDate: string;
  updatedDate?: string;
  readTime: string;
  image: string;
  imageAlt?: string;
  imageCaption?: string;

  // SEO & Editorial Metadata
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  searchIntent?: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;

  // Credibility & Author
  author?: BlogAuthor;
  reviewer?: BlogReviewer;

  // Fast Answer & Key Takeaways
  quickAnswer?: BlogQuickAnswer;
  keyTakeaways?: string[];

  // Structured Sections (rich editorial system)
  sections?: BlogSection[];

  // Mid-article contextual CTA
  inlineCTA?: BlogInlineCTA;

  // Citations & Trust
  sources?: BlogSourceReference[];

  // FAQ & Interlinking
  faqItems?: FAQItem[];
  relatedServices?: string[]; // Slugs from servicesData
  relatedLocations?: string[]; // Slugs from locationsData
  relatedArticles?: string[]; // Slugs of other blog posts

  // Legacy fallback for simple posts
  content?: string[];
}


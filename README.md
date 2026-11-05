# Elizabeth Plumbing Pros

[![Next.js](https://img.shields.io/badge/Next.js-16.4.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Turbopack](https://img.shields.io/badge/Bundler-Turbopack-0070F3?style=flat)](https://turbo.build/pack)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_2.2_AA-green?style=flat)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![SEO](https://img.shields.io/badge/SEO-100%25_Static_Prerender-brightgreen?style=flat)](https://developers.google.com/search)
[![License](https://img.shields.io/badge/License-Private-red?style=flat)](#license)

> A high-performance, conversion-focused, and technically audited web platform for **Elizabeth Plumbing Pros** — connecting homeowners and property managers throughout Elizabeth, NJ and Union County with independent, qualified plumbing contractors.

- **Production Domain:** [https://elizabethplumbingpros.com](https://elizabethplumbingpros.com)
- **Primary Telephone:** (908) 738-8526 (`tel:+19087388526`)
- **Primary Market:** Elizabeth, New Jersey (07201, 07202, 07206, 07207, 07208)
- **Secondary Markets:** Union, Westfield, Cranford, Roselle, Fanwood (Union County, NJ)
- **Business Model:** Local Plumbing Referral Network & Lead-Generation Platform

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Website Inventory & Routes](#website-inventory--routes)
- [Technical SEO & E-E-A-T Standards](#technical-seo--e-e-a-t-standards)
- [Quality Assurance & Audit Results](#quality-assurance--audit-results)
- [IndexNow & AI / LLM Optimization](#indexnow--ai--llm-optimization)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Repository Structure](#repository-structure)
- [Security & Compliance](#security--compliance)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

**Elizabeth Plumbing Pros** is engineered from the ground up using modern Next.js App Router static site generation (SSG). The website is tailored for fast mobile browsing, instant phone call conversions, and search visibility across Union County, New Jersey.

Rather than relying on generic landing page templates, this repository features:
- A complete hub-and-spoke local SEO architecture (12 dedicated service pages and 5 municipal coverage pages).
- An authoritative plumbing diagnostic blog with custom-rendered technical schematics.
- Strict regulatory transparency disclosing the independent referral model without fabricated reviews or fictitious licensing claims.
- Production-grade security headers, WCAG 2.2 Level AA accessibility compliance, and Google Tag Manager telemetry.

---

## Key Features

- **100% Static Pre-Rendering (SSG):** All 49 application routes are prerendered at build time via Turbopack for near-instant Time to First Byte (TTFB) and zero Layout Shift (CLS).
- **Inbound Call Conversion Architecture:**
  - Dynamic desktop sticky header with high-contrast click-to-call button.
  - Mobile sticky bottom call bar (`tel:+19087388526`) with safe-area viewport padding.
  - Contextual in-article phone prompts and emergency service dispatch CTAs.
  - Integrated Google Tag Manager event tracking (`header_call_click`, `mobile_sticky_call_click`, `cta_phone_click`).
- **Comprehensive Service Coverage (12 Core Verticals):** Emergency plumbing, drain cleaning, water heater repair, water heater installation, leak detection, pipe repair, sewer line repair, toilet repair, faucet repair, garbage disposals, sump pumps, and clogged drains.
- **Localized Municipal Pages:** Dedicated target landing pages for Union, Westfield, Cranford, Roselle, and Fanwood with housing stock analysis and local plumbing considerations.
- **Editorial Knowledge Hub:** In-depth diagnostic guides (such as non-invasive leak detection and burst pipe freeze mitigation) featuring custom WebP cross-section schematics.
- **Central FAQ Knowledge Base:** Filterable client-side FAQ explorer backed by static JSON-LD `FAQPage` schema.
- **Comprehensive Trust & Compliance Suite:** Dedicated pages for About Us, How It Works, Editorial Policy, Accessibility Statement, Service Disclaimer, Privacy Policy, Terms of Use, and an HTML Sitemap.

---

## Architecture & Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.4.5](https://nextjs.org/) (App Router) | Static site generation (SSG), routing, metadata API |
| **Runtime** | [React 19.3.0](https://react.dev/) | Component architecture & client interactivity |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type safety and interface contracts |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`) | Utility-first responsive design tokens |
| **Bundler** | [Turbopack](https://turbo.build/pack) | High-speed compilation and production static optimization |
| **Icons** | [Lucide React](https://lucide.dev/) | Accessible SVG iconography |
| **Typography** | `next/font/google` | Plus Jakarta Sans (Headings) and Inter (Body) |
| **Analytics** | Google Tag Manager (`GTM-P7MCXF7L`) | Custom telemetry and telephony conversion tracking |
| **Code Quality** | ESLint 9 (`eslint-config-next`) | Automated linting and style enforcement |

---

## Website Inventory & Routes

The application prerenders **49 unique routes** (43 rendered HTML pages, 6 server-side permanent redirects, plus dynamic `sitemap.xml` and `robots.txt`):

```
┌ Main & Supporting Pages
│ ├ /                     (Homepage & Elizabeth County Hub)
│ ├ /about                (8-Section Business & Trust Overview)
│ ├ /contact              (Inbound Inquiries & Direct Phone Call Connection)
│ ├ /how-it-works         (4-Step Service Connection Workflow)
│ ├ /services             (Full 12-Service Interactive Directory)
│ ├ /service-areas        (Union County Regional Service Coverage Hub)
│ ├ /faq                  (Categorized Searchable FAQ Center)
│ ├ /resources            (Emergency Checklists & Seasonal Diagnostics)
│ ├ /site-map             (Complete Human-Readable HTML Sitemap)
│ ├ /editorial-policy     (7-Stage Research & Review Standards)
│ ├ /accessibility        (WCAG 2.2 AA Conformance Statement)
│ ├ /disclaimer           (Service-Connection Model & Emergency Disclaimers)
│ ├ /privacy              (Data Relay & Telephony Policy)
│ ├ /terms                (Terms of Use & NJ Jurisdiction)
│ └ /_not-found           (Branded 404 Recovery Experience)
│
├ Service Landing Pages (/services/[slug])
│ ├ /services/emergency-plumbing-elizabeth-nj
│ ├ /services/drain-cleaning-elizabeth-nj
│ ├ /services/water-heater-repair-elizabeth-nj
│ ├ /services/water-heater-installation-elizabeth-nj
│ ├ /services/leak-detection-elizabeth-nj
│ ├ /services/pipe-repair-elizabeth-nj
│ ├ /services/sewer-line-repair-elizabeth-nj
│ ├ /services/toilet-repair-elizabeth-nj
│ ├ /services/faucet-repair-elizabeth-nj
│ ├ /services/garbage-disposal-repair-elizabeth-nj
│ ├ /services/sump-pump-services-elizabeth-nj
│ └ /services/clogged-drain-repair-elizabeth-nj
│
├ Regional Location Pages (/locations/[slug])
│ ├ /locations/plumber-union-nj
│ ├ /locations/plumber-westfield-nj
│ ├ /locations/plumber-cranford-nj
│ ├ /locations/plumber-roselle-nj
│ └ /locations/plumber-fanwood-nj
│
├ Editorial Blog Posts (/blog/[slug])
│ ├ /blog                                              (Article Index)
│ ├ /blog/signs-of-hidden-plumbing-leak                (2,800-Word Diagnostic Guide)
│ ├ /blog/what-to-do-when-pipe-bursts                  (Emergency Protocol)
│ ├ /blog/common-causes-slow-drains-prevention         (Preventative Maintenance)
│ └ /blog/signs-water-heater-needs-repair              (Equipment Life-Cycle Guide)
│
└ SEO Endpoints
  ├ /robots.txt           (Search engine crawl directives)
  └ /sitemap.xml          (Dynamic XML sitemap of all primary routes)
```

---

## Technical SEO & E-E-A-T Standards

### 1. Metadata & Heading Architecture
- **Single `<h1>` Tag Guarantee:** Every rendered route contains strictly one top-level semantic `<h1>` tag.
- **Title Tag Optimization:** All titles follow Next.js layout templates, measuring between 30 and 70 characters without duplicate brand suffixes.
- **Meta Descriptions:** SERP-optimized descriptions between 50 and 160 characters on every indexable page.
- **Canonicalization:** Every page embeds a self-referencing absolute canonical link (`https://elizabethplumbingpros.com/...`).

### 2. Schema.org Structured Data (JSON-LD)
Structured data graphs are statically injected into HTML documents:
- `Organization` & `WebSite` schemas in root layout.
- `PlumbingService` & `LocalBusiness` schemas with service specifications, geographical coverage, and contact points.
- `Article` schema with author bylines, dates, and image metadata.
- `FAQPage` schema on the homepage, service pages, location pages, and central FAQ hub.
- `BreadcrumbList` schema outlining navigational hierarchies.

### 3. Ethical E-E-A-T Compliance
- **Zero Fabricated Authority:** Strictly **0** fake reviews, **0** fake 5-star ratings, and **0** invented license numbers.
- **Clear Business Disclosure:** Transparently discloses that Elizabeth Plumbing Pros connects property owners with independent, licensed local contractors.

---

## Quality Assurance & Audit Results

An automated crawler script (`scripts/audit-site.js`) inspects all statically rendered production output across 12 quality vectors.

```powershell
PS D:\Elizabeth-Plumbing-Pros> node scripts\audit-site.js
Auditing 43 rendered HTML pages...

=== QA AUDIT RESULTS ===
Total Pages Audited: 43
Pages with Errors: 0
Pages with Warnings: 0

SUCCESS: 0 Errors detected across all pages!
```

### Pre-Launch Verification Summary
- **Compilation:** 49/49 static routes built cleanly (`npm run build`).
- **Code Standards:** 0 ESLint errors or TypeScript warnings (`npm run lint`).
- **Phone Uniformity:** 100% of telephone links match `tel:+19087388526` and render `(908) 738-8526`.
- **Link Health:** 0 broken internal links across 1,200+ crawled anchors.
- **Image Assets:** 100% of `<img>` tags provide descriptive, accessible `alt` text.
- **Accessibility:** WCAG 2.2 AA compliant focus states, color contrast ratios, and skip-to-content navigation.

For full audit logs, consult [PRE_LAUNCH_QA_REPORT.md](./PRE_LAUNCH_QA_REPORT.md).

---

## IndexNow & AI / LLM Optimization

### 1. Instant Search Indexing via IndexNow
The platform implements the [IndexNow](https://www.indexnow.org/) protocol to instantly notify participating search engines (including Microsoft Bing, Yandex, Naver, and Seznam) when pages are added, modified, or updated:
- **Verification Key:** Hosted statically at `/c7e8a4918e624bf9a2e6f437c3589b21.txt`.
- **Submission Utility:** Automated Node.js pipeline (`scripts/submit-indexnow.js`) packages all canonical routes and sends a bulk JSON payload directly to `https://api.indexnow.org/indexnow`.
- **Command:**
  ```bash
  npm run indexnow
  ```

### 2. Emerging AI Crawler Manifest (`llms.txt`)
In accordance with the [llmstxt.org](https://llmstxt.org/) standard, the site serves two structured markdown documents optimized for ingestion by Large Language Models (LLMs), AI search agents (e.g., Perplexity, ChatGPT Search, Claude), and automated research systems:
- **Standard Manifest (`/llms.txt`):** A concise, structured markdown document providing core NAP data, key entry points, 12 service summaries, municipal coverage, authoritative blog guides, and legal compliance policies.
- **Extended Knowledge Base (`/llms-full.txt`):** An in-depth context reference containing complete technical descriptions for all 12 plumbing verticals, emergency shutoff guidelines, pipe diagnostic procedures, and regional housing characteristics.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v20.x or higher (tested on Node.js v25)
- [npm](https://www.npmjs.com/) v10.x or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Elizabeth-Plumbing-Pros.git
   cd Elizabeth-Plumbing-Pros
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

In the project root, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Next.js development server with Turbopack on `http://localhost:3000`. |
| `npm run build` | Compiles an optimized, static production build (SSG) in `.next`. |
| `npm run start` | Starts the production Next.js server locally. |
| `npm run lint` | Runs ESLint 9 across all TypeScript and React files. |
| `npm run audit` | Runs the automated pre-launch QA crawler against built HTML files. |
| `npm run indexnow` | Submits all canonical URLs to the IndexNow API for instant search engine discovery. |

---

## Repository Structure

```
Elizabeth-Plumbing-Pros/
├── public/                     # Static assets, manifests & verification tokens
│   ├── images/
│   │   ├── blog/               # WebP technical schematics & article assets
│   │   ├── services/           # Service-specific WebP images
│   │   └── home/               # Hero & UI graphics
│   ├── c7e8a4918e624bf9a2e6f437c3589b21.txt  # IndexNow verification key file
│   ├── llms.txt                # Standard LLM discovery manifest
│   ├── llms-full.txt           # Extended knowledge base for AI models
│   ├── favicon.ico
│   ├── favicon.png
│   ├── icon.jpg
│   └── logo.png
├── scripts/
│   ├── audit-site.js           # Automated pre-launch HTML QA crawler
│   └── submit-indexnow.js      # Automated IndexNow search engine notifier
├── src/
│   ├── app/                    # Next.js App Router (pages & layouts)
│   │   ├── about/
│   │   ├── accessibility/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── disclaimer/
│   │   ├── editorial-policy/
│   │   ├── faq/
│   │   ├── how-it-works/
│   │   ├── locations/
│   │   ├── privacy/
│   │   ├── resources/
│   │   ├── service-areas/
│   │   ├── services/
│   │   ├── site-map/
│   │   ├── terms/
│   │   ├── globals.css         # Tailwind CSS v4 directives & custom tokens
│   │   ├── layout.tsx          # Root layout (schemas, skip link, sticky bar)
│   │   ├── not-found.tsx       # Custom 404 page
│   │   ├── page.tsx            # Homepage
│   │   ├── robots.ts           # Dynamic robots.txt handler
│   │   └── sitemap.ts          # Dynamic sitemap.xml generator
│   ├── components/             # Reusable UI component library
│   │   ├── blog/               # Article layouts, table of contents, callouts
│   │   ├── faq/                # Interactive client FAQ accordion
│   │   ├── home/               # Homepage hero, services grid, trust badges
│   │   ├── layout/             # Header, Footer, MobileCallBar, Navigation
│   │   ├── locations/          # Municipal landing page templates
│   │   ├── services/           # Plumbing service page templates
│   │   ├── shared/             # Buttons, Breadcrumbs, Containers, Headings
│   │   └── supporting/         # Legal layout, contact form, trust elements
│   ├── config/
│   │   ├── navigation.ts       # Global navigation routes & hierarchy
│   │   └── site.ts             # Central business configuration & NAP data
│   ├── data/
│   │   ├── blog.ts             # Blog post data registry
│   │   ├── faq.ts              # Categorized FAQ data
│   │   ├── locations.ts        # Service area & municipality profiles
│   │   ├── problems.ts         # Common plumbing symptoms registry
│   │   └── services.ts         # 12 plumbing service data models
│   ├── lib/
│   │   ├── analytics.ts        # Google Tag Manager event dispatcher
│   │   └── seo.ts              # JSON-LD Schema.org generators
│   └── types/                  # TypeScript interface declarations
├── next.config.mjs             # Next.js configuration, redirects & security headers
├── package.json                # Project dependencies and script definitions
├── postcss.config.mjs          # PostCSS configuration for Tailwind CSS v4
├── PRE_LAUNCH_QA_REPORT.md     # Comprehensive pre-launch quality assurance report
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Project documentation
```

---

## Security & Compliance

### HTTP Security Headers
Configured directly in `next.config.mjs`:
- **Content-Type Protection:** `X-Content-Type-Options: nosniff`
- **Clickjacking Defense:** `X-Frame-Options: SAMEORIGIN`
- **Referrer Privacy:** `Referrer-Policy: strict-origin-when-cross-origin`
- **Feature Restrictions:** `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **Transport Security:** `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- **DNS Prefetching:** `X-DNS-Prefetch-Control: on`

### Privacy & Digital Inclusion
- **Digital Accessibility:** Developed according to W3C Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.
- **Consumer Privacy:** Full disclosure of telephone referral data handling, analytics telemetry, and opt-out options in compliance with state consumer transparency regulations.

---

## Deployment

The project is optimized for deployment on [Vercel](https://vercel.com/) or any modern cloud hosting environment supporting Next.js (e.g., Netlify, AWS Amplify, Docker, or Node.js server).

### Deploying to Vercel

1. Push your repository to GitHub.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Vercel automatically detects Next.js:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
4. Click **Deploy**.

### Post-Deployment Checklist
- [ ] Submit `https://elizabethplumbingpros.com/sitemap.xml` to [Google Search Console](https://search.google.com/search-console).
- [ ] Verify Google Tag Manager container `GTM-P7MCXF7L` in Tag Assistant.
- [ ] Execute a live test call to `(908) 738-8526` to confirm call-routing and lead capture.

---

## License

Copyright © 2026 Elizabeth Plumbing Pros. All rights reserved.  
Proprietary software — unauthorized copying, distribution, or reproduction of any files in this repository is strictly prohibited.

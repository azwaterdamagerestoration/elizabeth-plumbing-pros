import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  HelpCircle,
  MapPin,
} from "lucide-react";
import { Container } from "@/shared/Container";
import { Breadcrumbs } from "@/shared/Breadcrumbs";
import { CallButton } from "@/shared/CallButton";
import { SectionHeading } from "@/shared/SectionHeading";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import { generateAboutPageSchema, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us | Plumbing Service Information",
  description:
    "Learn about Elizabeth Plumbing Pros, our focus on plumbing service information, and how we help visitors explore plumbing assistance in Elizabeth, NJ and nearby areas.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: `About Us | Plumbing Service Information | ${siteConfig.name}`,
    description:
      "Learn about Elizabeth Plumbing Pros, our focus on plumbing service information, and how we help visitors explore plumbing assistance in Elizabeth, NJ and nearby areas.",
    url: `${siteConfig.url}/about`,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "About Us | Elizabeth Plumbing Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | Plumbing Service Information | ${siteConfig.name}`,
    description:
      "Learn about Elizabeth Plumbing Pros, our focus on plumbing service information, and how we help visitors explore plumbing assistance in Elizabeth, NJ and nearby areas.",
  },
};

export default function AboutPage() {
  const featuredServices = servicesData.slice(0, 6);
  const aboutSchema = generateAboutPageSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([{ label: "About Us" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-white min-h-screen">
      {/* SECTION 1 — PREMIUM HERO */}
      <section className="bg-gradient-to-b from-[#080F1F] via-[#0B172D] to-[#102B4E] text-white pt-8 pb-14 sm:pb-20 relative overflow-hidden">
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1677C8]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <Breadcrumbs
            variant="light"
            items={[{ label: "About Us" }]}
            className="mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1677C8]/25 border border-[#23B8D4]/40 text-[#23B8D4] text-xs font-extrabold uppercase tracking-widest">
                <span>ABOUT OUR WEBSITE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-white tracking-tight leading-[1.15]">
                About Elizabeth Plumbing Pros
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
                Connecting Elizabeth, NJ and Union County property owners with dependable independent local plumbing service providers, transparent repair guidance, and emergency resources.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <CallButton
                  size="md"
                  variant="primary"
                  label={`CALL ${siteConfig.phone.display}`}
                  trackingEvent="hero_call_click"
                  className="shadow-md hover:shadow-orange-500/20 text-base"
                />
                <span className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#23B8D4]" />
                  <span>Transparent Referral Network</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
                <Image
                  src="/images/home/plumber-homeowner-consultation.webp"
                  alt="Plumbing professional consulting on residential plumbing in Elizabeth, NJ"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — WHO WE ARE & SECTION 3 — OUR MISSION */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#172B45] leading-[1.8]">
              <span className="text-xs font-extrabold tracking-wider uppercase text-[#1677C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
                WHO WE ARE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B4E] tracking-tight">
                Dedicated to Clear, Reliable Local Plumbing Connections
              </h2>

              <p>
                Navigating residential plumbing problems in Northern New Jersey involves distinct regional considerations. From historic two-family homes in Elizabethport and Elmora with original cast-iron drain stacks to suburban single-family residences in Westfield and Cranford contending with hard-water mineral scaling and seasonal pipe freeze risks, property owners frequently need fast, dependable information when problems arise.
              </p>

              <p>
                Elizabeth Plumbing Pros was established to simplify how property owners access trustworthy plumbing support. Rather than sifting through unverified classified ads, leaving voicemails with unreachable dispatchers, or guessing at emergency shut-off procedures, our telephone service links you directly with independent local technicians equipped to address your specific concern.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-[#102B4E] pt-4">
                Our Operational Mission
              </h3>

              <p>
                Our mission is to make plumbing information, diagnostic checklists, and direct telephone contact options accessible, transparent, and hassle-free. We believe homeowners deserve clear explanations of plumbing symptoms before inviting a contractor into their home, as well as an honest understanding of how referral services operate.
              </p>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                <h4 className="font-bold text-[#102B4E] text-base flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#1677C8]" />
                  <span>Our Service-Connection Commitment</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5D6B7C] leading-relaxed">
                  {siteConfig.businessModel.disclaimer}
                </p>
              </div>
            </div>

            {/* Right Column Fact Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-[#102B4E] text-white p-7 sm:p-9 shadow-xl border border-slate-700/80 space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#23B8D4] uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  <span>KEY FACTS AT A GLANCE</span>
                </div>

                <h3 className="text-xl font-bold">
                  What You Can Expect From Our Service
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#23B8D4] shrink-0 mt-0.5" />
                    <span><strong>Direct Phone Access:</strong> Call (908) 738-8526 to speak with our telephone coordination team.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#23B8D4] shrink-0 mt-0.5" />
                    <span><strong>No Hidden Booking Fees:</strong> Connecting through our telephone line is completely free for homeowners.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#23B8D4] shrink-0 mt-0.5" />
                    <span><strong>Independent Local Partners:</strong> We connect callers with local independent plumbing contractors operating across Union County.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#23B8D4] shrink-0 mt-0.5" />
                    <span><strong>Homeowner Verification:</strong> You always receive estimates, review licensing, and confirm schedules directly with the visiting contractor.</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-slate-700">
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-[#23B8D4] hover:text-white transition-colors"
                  >
                    <span>Read how the connection process works in detail</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4 — WHAT WE HELP WITH */}
      <section className="py-16 sm:py-24 bg-[#F6F9FC] border-t border-slate-200/80">
        <Container>
          <SectionHeading
            eyebrow="SERVICE COVERAGE"
            title="Plumbing Solutions We Help You Coordinate"
            description="Explore the range of routine and emergency plumbing services available through our independent contractor network."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 mt-12">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} in Elizabeth, NJ`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5 p-2 rounded-xl bg-white/95 text-[#1677C8] shadow-sm">
                      <DynamicIcon name={service.iconName} className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#5D6B7C] leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                  >
                    <span>Learn About {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-sm font-bold text-[#102B4E] hover:border-[#1677C8] hover:text-[#1677C8] shadow-2xs transition-all"
            >
              <span>View All 12 Plumbing Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION 5 — HOW SERVICE CONNECTION WORKS */}
      <HowItWorks
        eyebrow="TRANSPARENT PROCESS"
        title="How Elizabeth Plumbing Pros Operates"
        description="Our straightforward 3-step phone workflow connects your plumbing inquiry with local independent specialists."
      />

      {/* SECTION 6 — AREAS WE FOCUS ON */}
      <section className="py-16 sm:py-24 bg-[#F6F9FC] border-t border-slate-200/80">
        <Container>
          <SectionHeading
            eyebrow="GEOGRAPHIC COVERAGE"
            title="Communities We Support in Union County"
            description="Our service connection network focuses on residential and commercial properties throughout Elizabeth and surrounding municipalities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-12">
            {locationsData.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3 text-[#102B4E]">
                    <div className="p-2 rounded-xl bg-blue-50 text-[#1677C8]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base">{loc.name}, NJ</h3>
                      <p className="text-[11px] text-[#5D6B7C]">{loc.county}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5D6B7C] leading-relaxed line-clamp-3">
                    {loc.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <Link
                    href={loc.id === "elizabeth" ? "/" : `/locations/plumber-${loc.id}-nj`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677C8] hover:text-[#102B4E] transition-colors"
                  >
                    <span>{loc.id === "elizabeth" ? "Elizabeth Hub" : `${loc.name} Coverage`}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-sm font-bold text-[#102B4E] hover:border-[#1677C8] hover:text-[#1677C8] shadow-2xs transition-all"
            >
              <span>Explore All Service Areas &amp; Neighborhood Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION 7 — OUR INFORMATION STANDARDS */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <Container className="max-w-4xl">
          <div className="rounded-3xl border border-blue-200 bg-blue-50/60 p-8 sm:p-10 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1677C8]">
              <BookOpen className="w-4 h-4" />
              <span>EDITORIAL INTEGRITY &amp; INFORMATION STANDARDS</span>
            </div>

            <h2 className="text-2xl font-extrabold text-[#102B4E]">
              Our Commitment to Accurate Homeowner Guidance
            </h2>

            <p className="text-sm sm:text-base text-[#172B45] leading-relaxed">
              We believe that educating homeowners helps prevent unnecessary water damage and excessive repair costs. Every guide published on our website is researched against the International Plumbing Code (IPC), EPA WaterSense conservation standards, and manufacturer technical recommendations. We do not publish AI-generated fluff, fake reviews, or fabricated licensing numbers.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold">
              <Link
                href="/editorial-policy"
                className="inline-flex items-center gap-1.5 text-[#1677C8] hover:underline"
              >
                <span>Read our full Editorial Policy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-slate-300">•</span>
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-[#1677C8] hover:underline"
              >
                <span>Browse Homeowner Plumbing Resources</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <FinalCTA
        eyebrow="HAVE A PLUMBING QUESTION?"
        title="Speak With Our Elizabeth Coordination Team"
        description="Call (908) 738-8526 to discuss your plumbing repair, maintenance, or emergency needs with an available coordinator."
        buttonLabel={`CALL ${siteConfig.phone.display}`}
      />
    </div>
    </>
  );
}

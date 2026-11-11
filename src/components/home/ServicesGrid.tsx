"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/services";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { trackEvent } from "@/lib/analytics";

export function ServicesGrid() {
  return (
    <section id="services-section" className="py-20 sm:py-24 lg:py-28 bg-[#F6F9FC]">
      <Container>
        <SectionHeading
          eyebrow="COMPREHENSIVE PLUMBING SERVICES"
          title="Full-Spectrum Plumbing Services in Elizabeth, NJ"
          description="Explore reliable residential and commercial plumbing services delivered by licensed local plumbing contractors across Union County."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {servicesData.slice(0, 6).map((service, index) => {
            const isFeatured = index === 0; // First service card highlighted (Emergency Plumbing)
            return (
              <article
                key={service.id}
                className={`group bg-white rounded-3xl border transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl ${
                  isFeatured
                    ? "border-[#FF8533]/50 shadow-md ring-1 ring-[#FF8533]/20"
                    : "border-slate-200/90 shadow-sm hover:border-slate-300"
                }`}
              >
                {/* Card Image Container */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={`${service.title} services in Elizabeth, NJ`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080F1F]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Featured Badge if Card 1 */}
                  {isFeatured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#FF8533] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg">
                      Critical Support
                    </div>
                  )}

                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-4 left-4 p-3 rounded-2xl bg-white/95 text-[#1677C8] shadow-lg backdrop-blur-md group-hover:bg-[#1677C8] group-hover:text-white transition-colors duration-200">
                    <DynamicIcon name={service.iconName} className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#5D6B7C] leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#5D6B7C]">
                      {service.features.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#23B8D4] shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card CTA Link */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={() =>
                        trackEvent("service_card_click", { service: service.slug })
                      }
                      className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Section Bottom Link */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-300 bg-white font-extrabold text-[#102B4E] hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm text-sm uppercase tracking-wider"
          >
            <span>View All {servicesData.length} Plumbing Services</span>
            <ArrowRight className="w-4 h-4 text-[#1677C8]" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

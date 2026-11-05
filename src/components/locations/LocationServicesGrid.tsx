import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { SupportedService } from "@/types/location";

interface LocationServicesGridProps {
  cityName: string;
  services: SupportedService[];
}

export function LocationServicesGrid({
  cityName,
  services,
}: LocationServicesGridProps) {
  return (
    <section id="services-section" className="py-20 sm:py-24 lg:py-28 bg-[#F6F9FC]">
      <Container>
        <SectionHeading
          eyebrow="LOCAL PLUMBING SOLUTIONS"
          title={`Plumbing Services Available in ${cityName}, NJ`}
          description={`Explore comprehensive residential plumbing services available for homeowners and properties throughout ${cityName}.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {services.map((service, index) => {
            const isCritical = index === 0;
            return (
              <article
                key={service.slug}
                className={`group bg-white rounded-3xl border transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl ${
                  isCritical
                    ? "border-[#FF8533]/50 shadow-md ring-1 ring-[#FF8533]/20"
                    : "border-slate-200/90 shadow-sm hover:border-slate-300"
                }`}
              >
                {/* Card Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={`${service.title} in ${cityName}, NJ`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080F1F]/70 via-transparent to-transparent pointer-events-none" />

                  {isCritical && (
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#FF8533] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                      Critical Support
                    </div>
                  )}

                  <div className="absolute bottom-3.5 left-3.5 p-2.5 rounded-2xl bg-white/95 text-[#1677C8] shadow-lg backdrop-blur-md group-hover:bg-[#1677C8] group-hover:text-white transition-colors duration-200">
                    <DynamicIcon name={service.iconName} className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#5D6B7C] leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {service.features && service.features.length > 0 && (
                      <ul className="mt-3.5 space-y-1.5 text-xs text-[#5D6B7C]">
                        {service.features.slice(0, 2).map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#23B8D4] shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Card CTA Link */}
                  <div className="pt-3.5 border-t border-slate-100">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Section Bottom Links */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-300 bg-white font-extrabold text-[#102B4E] hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm text-sm uppercase tracking-wider"
          >
            <span>View All Plumbing Services</span>
            <ArrowRight className="w-4 h-4 text-[#1677C8]" />
          </Link>
        </div>
      </Container>
    </section>
  );
}


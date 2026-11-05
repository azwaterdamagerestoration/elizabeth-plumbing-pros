import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { ServiceItem } from "@/types";

interface RelatedServicesProps {
  currentServiceTitle: string;
  services: ServiceItem[];
}

export function RelatedServices({
  currentServiceTitle,
  services,
}: RelatedServicesProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-20 sm:py-24 bg-[#F6F9FC]">
      <Container>
        <SectionHeading
          eyebrow="COMPLEMENTARY SOLUTIONS"
          title={`Related Plumbing Services for ${currentServiceTitle}`}
          description="Explore complementary plumbing solutions frequently required alongside this service in Elizabeth, NJ."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={`${service.title} services in Elizabeth, NJ`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080F1F]/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Icon */}
                <div className="absolute bottom-4 left-4 p-3 rounded-2xl bg-white/95 text-[#1677C8] shadow-lg backdrop-blur-md group-hover:bg-[#1677C8] group-hover:text-white transition-colors duration-200">
                  <DynamicIcon name={service.iconName} className="w-5 h-5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#5D6B7C] leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-[#5D6B7C]">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#23B8D4] shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                  >
                    <span>Learn about {service.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}


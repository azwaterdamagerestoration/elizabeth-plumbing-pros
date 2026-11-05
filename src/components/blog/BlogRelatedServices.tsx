import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, MapPin } from "lucide-react";
import { ServiceItem } from "@/types";
import { DynamicIcon } from "@/shared/DynamicIcon";

interface BlogRelatedServicesProps {
  services: ServiceItem[];
  relatedLocations?: { name: string; slug: string }[];
  className?: string;
}

export function BlogRelatedServices({
  services,
  relatedLocations,
  className = "",
}: BlogRelatedServicesProps) {
  if (!services || services.length === 0) return null;

  return (
    <div
      className={`my-12 rounded-3xl border border-slate-200/90 bg-[#F6F9FC] p-7 sm:p-9 shadow-xs ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-200/80">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1677C8]">
            RECOMMENDED PROFESSIONAL SOLUTIONS
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B4E] mt-0.5">
            Related Plumbing Services in Elizabeth, NJ
          </h2>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#5D6B7C]">
          <Wrench className="w-4 h-4 text-[#1677C8]" />
          <span>Local Dispatch Available</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="group rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-40 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} in Elizabeth, NJ`}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 p-2 rounded-xl bg-white/95 text-[#1677C8] shadow-sm backdrop-blur-xs">
                  <DynamicIcon name={service.iconName} className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5D6B7C] line-clamp-2 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-0">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
              >
                <span>View {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Contextual Nearby Service Areas */}
      {relatedLocations && relatedLocations.length > 0 && (
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5D6B7C]">
          <div className="flex items-center gap-1 text-[#102B4E] font-bold">
            <MapPin className="w-3.5 h-3.5 text-[#1677C8]" />
            <span>Also Serving Nearby Communities:</span>
          </div>
          {relatedLocations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="text-[#1677C8] hover:text-[#102B4E] hover:underline font-medium transition-colors"
            >
              {loc.name}, NJ
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}


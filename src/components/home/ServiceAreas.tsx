"use client";

import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { locationsData } from "@/data/locations";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";
import { trackEvent } from "@/lib/analytics";

interface ServiceAreasProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function ServiceAreas({
  eyebrow = "LOCAL UNION COUNTY COVERAGE",
  title = "Plumbers Serving Elizabeth, NJ & Surrounding Communities",
  description = "Connect with licensed local plumbing contractors across all Elizabeth neighborhoods and surrounding Union County municipalities.",
  className = "",
}: ServiceAreasProps = {}) {
  return (
    <section className={`py-20 sm:py-24 lg:py-28 bg-white ${className}`}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {locationsData.map((location) => {
            const isPrimary = location.id === "elizabeth";
            return (
              <div
                key={location.id}
                className={`rounded-3xl p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
                  isPrimary
                    ? "bg-[#F6F9FC] border-2 border-[#1677C8] shadow-lg relative"
                    : "bg-[#F6F9FC] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1"
                }`}
              >
                {isPrimary && (
                  <span className="absolute -top-3.5 left-7 px-3.5 py-1 rounded-full bg-[#1677C8] text-white text-xs font-extrabold uppercase tracking-wider shadow-md">
                    Primary Service Hub
                  </span>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-white text-[#1677C8] border border-slate-200 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#102B4E]">
                        {location.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#5D6B7C] uppercase tracking-wider">
                        {location.county}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#5D6B7C] leading-relaxed line-clamp-3 mt-3">
                    {location.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-200/60">
                    <p className="text-xs font-extrabold text-[#102B4E] uppercase tracking-wider mb-2.5">
                      Key Neighborhoods:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {location.neighborhoodHighlights.slice(0, 3).map((nh) => (
                        <span
                          key={nh}
                          className="text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-200/80 text-[#172B45] font-medium shadow-2xs"
                        >
                          {nh}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-200/60">
                  <Link
                    href={isPrimary ? "/" : `/locations/plumber-${location.id}-nj`}
                    onClick={() =>
                      trackEvent("location_card_click", { location: location.slug })
                    }
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1677C8] hover:text-[#102B4E] transition-colors"
                  >
                    <span>{isPrimary ? "View Elizabeth Hub" : `View ${location.name} Details`}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coverage Summary Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#102B4E] to-[#163B66] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#23B8D4] uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Union County Wide Dispatch</span>
            </div>
            <h3 className="font-extrabold text-white text-xl">
              Need assistance in another Union County neighborhood?
            </h3>
            <p className="text-sm text-slate-300">
              Call directly to inquire about contractor service boundaries and technician availability.
            </p>
          </div>
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#102B4E] font-extrabold text-sm uppercase tracking-wider hover:bg-slate-100 transition-colors whitespace-nowrap shadow-md"
          >
            <span>Explore All Service Areas</span>
            <ArrowRight className="w-4 h-4 text-[#1677C8]" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

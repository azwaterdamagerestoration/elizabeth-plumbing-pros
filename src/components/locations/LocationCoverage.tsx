import React from "react";
import { MapPin, CheckCircle2, ShieldCheck, Compass } from "lucide-react";
import { Container } from "@/shared/Container";
import { NeighborhoodArea } from "@/types/location";
import { CallButton } from "@/shared/CallButton";

interface LocationCoverageProps {
  cityName: string;
  stateAbbr: string;
  county: string;
  heading: string;
  description: string;
  areas: NeighborhoodArea[];
  geographicNotes: string;
  postalCodes: string[];
}

export function LocationCoverage({
  cityName,
  stateAbbr,
  county,
  heading,
  description,
  areas,
  geographicNotes,
  postalCodes,
}: LocationCoverageProps) {
  return (
    <section id="neighborhoods-section" className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Verified Neighborhoods */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1677C8] border border-blue-200/70 text-xs font-extrabold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>LOCAL GEOGRAPHIC COVERAGE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
              {heading}
            </h2>

            <p className="text-base sm:text-lg text-[#5D6B7C] leading-relaxed">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {areas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#F6F9FC] border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <h3 className="font-extrabold text-sm sm:text-base text-[#102B4E] flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1677C8] shrink-0" />
                    <span>{area.name}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D6B7C] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Geographic & Arterial Corridor Notes */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 text-xs sm:text-sm text-[#5D6B7C]">
              <div className="flex items-center gap-2 font-bold text-[#102B4E] text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4 text-[#23B8D4]" />
                <span>Geographic Reference &amp; Boundaries</span>
              </div>
              <p className="leading-relaxed">{geographicNotes}</p>
            </div>
          </div>

          {/* Right Column: Verified Coverage Visualization Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#102B4E] to-[#163B66] text-white shadow-xl space-y-6 border border-slate-700/80">
              <div className="flex items-center gap-2 text-xs font-bold text-[#23B8D4] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>UNION COUNTY DISPATCH BOUNDARY</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  {cityName}, {stateAbbr} Service Area
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Connecting residential properties across all municipal zip codes and adjacent unincorporated Union County borders.
                </p>
              </div>

              {/* Supported Postal Codes Pill Grid */}
              <div className="pt-2">
                <p className="text-xs font-extrabold text-[#23B8D4] uppercase tracking-wider mb-2.5">
                  Verified Local Postal Codes:
                </p>
                <div className="flex flex-wrap gap-2">
                  {postalCodes.map((code) => (
                    <span
                      key={code}
                      className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-xs sm:text-sm font-mono font-bold text-white shadow-xs"
                    >
                      {code}
                    </span>
                  ))}
                </div>
              </div>

              {/* Truthful Boundary Disclosure */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-slate-300 leading-relaxed">
                <p>
                  <strong>Service Dispatch Note: </strong>
                  Contractor dispatch boundaries are established based on real-time plumbing technician availability across {county}. No physical office or local branch is maintained at unverified addresses.
                </p>
              </div>

              {/* Call Prompt */}
              <div className="pt-2">
                <CallButton
                  size="md"
                  variant="primary"
                  label={`CHECK ${cityName.toUpperCase()} DISPATCH`}
                  trackingEvent="location_card_click"
                  className="w-full justify-center shadow-lg font-extrabold uppercase tracking-wide text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

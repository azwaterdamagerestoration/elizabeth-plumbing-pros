import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";
import { NearbyCityItem } from "@/types/location";

interface LocationNearbyCitiesProps {
  currentCityName: string;
  nearbyCities: NearbyCityItem[];
}

export function LocationNearbyCities({
  currentCityName,
  nearbyCities,
}: LocationNearbyCitiesProps) {
  return (
    <section className="py-20 sm:py-24 bg-[#F6F9FC] border-t border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="UNION COUNTY COMMUNITIES"
          title={`Nearby Plumbing Service Areas Around ${currentCityName}`}
          description={`Explore plumbing service connections and local homeowner information for neighboring Union County municipalities.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {nearbyCities.map((city) => {
            const href = city.isHome ? "/" : `/locations/${city.slug}`;
            return (
              <div
                key={city.name}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-blue-50 text-[#1677C8] border border-blue-100 shadow-2xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#102B4E] group-hover:text-[#1677C8] transition-colors">
                        {city.name}
                      </h3>
                      {city.distanceOrDirection && (
                        <p className="text-xs font-semibold text-[#5D6B7C]">
                          {city.distanceOrDirection}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-[#5D6B7C] leading-relaxed mb-4">
                    {city.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1677C8] group-hover:text-[#102B4E] transition-colors"
                  >
                    <span>
                      {city.isHome
                        ? `Visit Elizabeth Primary Hub`
                        : `Explore ${city.name} Plumbing`}
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}


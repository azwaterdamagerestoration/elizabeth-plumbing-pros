import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Layers, PhoneCall } from "lucide-react";
import { Container } from "@/shared/Container";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery (approx 48% / 5.5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle decorative geometric background shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#1677C8]/15 to-[#23B8D4]/15 rounded-3xl transform -rotate-2" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[4/5] bg-slate-100">
                <Image
                  src="/images/home/plumber-homeowner-consultation.webp"
                  alt="Plumbing specialist consulting with a homeowner in Elizabeth, NJ"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 42vw"
                  className="object-cover object-center"
                />
                {/* Soft gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080F1F]/60 via-transparent to-transparent pointer-events-none" />

                {/* Direct Contact Inset Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#080F1F]/90 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#23B8D4] uppercase tracking-wider">
                      Direct Phone Guidance
                    </p>
                    <p className="text-base font-extrabold mt-0.5">{siteConfig.phone.display}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FF8533] text-white">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Content (approx 52% / 7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-block text-xs sm:text-sm font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-full bg-[#1677C8]/10 text-[#1677C8] border border-[#1677C8]/20">
              ABOUT ELIZABETH PLUMBING PROS
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#102B4E] tracking-tight leading-[1.2]">
              Helping Elizabeth Homeowners Find Reliable Plumbing Assistance
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#5D6B7C] leading-relaxed">
              <p>
                When a plumbing breakdown occurs&mdash;whether it&apos;s an active pipe leak under a bathroom vanity, a stubborn kitchen drain clog, or a water heater that stops producing hot water&mdash;finding a reliable, available technician shouldn&apos;t require hours of frustrating phone tag.
              </p>
              <p>
                Elizabeth Plumbing Pros operates as a dedicated local referral and connection service tailored to Elizabeth, NJ and nearby Union County communities. We connect property owners directly with independent local plumbing professionals ready to assess, estimate, and complete needed repairs.
              </p>
              <p>
                By focusing specifically on the distinctive architecture and plumbing systems of our local neighborhoods, we make it simple to connect with the right help when you need it most.
              </p>
            </div>

            {/* 3 Key Benefit Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="p-4 rounded-2xl bg-[#F6F9FC] border border-slate-200/80">
                <MapPin className="w-5 h-5 text-[#1677C8] mb-2" />
                <h3 className="font-extrabold text-[#102B4E] text-sm">Local Area Focus</h3>
                <p className="text-xs text-[#5D6B7C] mt-1">
                  Tailored to Elizabeth and neighboring Union County towns.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6F9FC] border border-slate-200/80">
                <Layers className="w-5 h-5 text-[#23B8D4] mb-2" />
                <h3 className="font-extrabold text-[#102B4E] text-sm">Comprehensive Needs</h3>
                <p className="text-xs text-[#5D6B7C] mt-1">
                  Covering leaks, drains, water heaters, and pipe repairs.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6F9FC] border border-slate-200/80">
                <PhoneCall className="w-5 h-5 text-[#FF8533] mb-2" />
                <h3 className="font-extrabold text-[#102B4E] text-sm">Direct Phone Contact</h3>
                <p className="text-xs text-[#5D6B7C] mt-1">
                  Speak directly with an agent to coordinate service.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-extrabold text-[#1677C8] hover:text-[#102B4E] transition-colors text-base group"
              >
                <span>Learn More About Our Service</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

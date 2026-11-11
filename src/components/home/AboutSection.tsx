import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Wrench, PhoneCall, ShieldCheck } from "lucide-react";
import { Container } from "@/shared/Container";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle decorative geometric background shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#1677C8]/15 to-[#23B8D4]/15 rounded-3xl transform -rotate-2" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[4/5] bg-slate-100">
                <Image
                  src="/images/home/plumber-homeowner-consultation.webp"
                  alt="Licensed plumbing contractor consulting with an Elizabeth, NJ homeowner"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 42vw"
                  className="object-cover object-center"
                />
                {/* Soft gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080F1F]/65 via-transparent to-transparent pointer-events-none" />

                {/* Direct Contact Inset Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#080F1F]/90 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#23B8D4] uppercase tracking-wider">
                      Direct Dispatch Coordinator
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

          {/* Right Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-block text-xs sm:text-sm font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-full bg-[#1677C8]/10 text-[#1677C8] border border-[#1677C8]/20">
              ABOUT ELIZABETH PLUMBING PROS
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#102B4E] tracking-tight leading-[1.2]">
              Connecting Elizabeth Property Owners with Licensed Plumbing Contractors
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#5D6B7C] leading-relaxed">
              <p>
                When a plumbing failure strikes&mdash;whether it&apos;s an active copper supply line leak, an overflowing toilet, an iced-over exterior bibb, or a water heater that suddenly stops producing hot water&mdash;scrolling through dozens of distant <strong>plumbing companies near me</strong> and playing phone tag only increases property risk.
              </p>
              <p>
                Elizabeth Plumbing Pros functions as a dedicated local connection network built exclusively for Elizabeth, NJ and adjacent Union County neighborhoods. Rather than impersonal national aggregators, we connect residential homeowners and commercial facility managers directly with verified, independent <strong>plumbing contractors</strong> equipped to diagnose, estimate, and complete urgent or scheduled repairs.
              </p>
              <p>
                From century-old brownstones in Midtown and Peterstown featuring original cast-iron stacks and galvanized runs to newer Elmora multi-family constructions, our connected <strong>local plumbers</strong> understand the unique municipal codes, regional water pressures, and architectural plumbing demands of Elizabeth.
              </p>
            </div>

            {/* 3 Key Benefit Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="p-4 rounded-2xl bg-[#F6F9FC] border border-slate-200/80">
                <MapPin className="w-5 h-5 text-[#1677C8] mb-2" />
                <h3 className="font-extrabold text-[#102B4E] text-sm">Local Plumber Focus</h3>
                <p className="text-xs text-[#5D6B7C] mt-1">
                  Dedicated response across Elizabethport, Elmora, Midtown &amp; Union County.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6F9FC] border border-slate-200/80">
                <Wrench className="w-5 h-5 text-[#23B8D4] mb-2" />
                <h3 className="font-extrabold text-[#102B4E] text-sm">Residential &amp; Commercial</h3>
                <p className="text-xs text-[#5D6B7C] mt-1">
                  Comprehensive repairs, leak detection, drain rooter, and code upgrades.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6F9FC] border border-slate-200/80">
                <ShieldCheck className="w-5 h-5 text-[#FF8533] mb-2" />
                <h3 className="font-extrabold text-[#102B4E] text-sm">Vetted NJ Master Plumbers</h3>
                <p className="text-xs text-[#5D6B7C] mt-1">
                  Independent contractors with state licensing, permits, and liability coverage.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-extrabold text-[#1677C8] hover:text-[#102B4E] transition-colors text-base group"
              >
                <span>Learn More About Our Connection Network</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";
import { Container } from "@/shared/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080F1F] text-slate-300 pt-16 sm:pt-20 pb-24 md:pb-16 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          {/* Column 1: Brand (Span 2 cols on LG) */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              href="/"
              className="inline-block p-3 bg-white rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#23B8D4] hover:opacity-95 transition-all"
              aria-label="Elizabeth Plumbing Pros Homepage"
            >
              <Image
                src="/logo.png"
                alt="Elizabeth Plumbing Pros"
                width={260}
                height={86}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Your trusted connection to reliable, independent local plumbing professionals in Elizabeth, NJ. Discuss drain issues, leaks, water heater problems, and emergency repairs with knowledgeable local technicians.
            </p>

            <div className="pt-2 space-y-3">
              <a
                href={siteConfig.phone.telHref}
                className="inline-flex items-center gap-3 font-extrabold text-white hover:text-[#FF8533] text-xl transition-colors group"
                aria-label={`Call Elizabeth Plumbing Pros at ${siteConfig.phone.display}`}
              >
                <div className="p-3 rounded-xl bg-[#FF8533] text-white shadow-md group-hover:bg-[#E66E1D] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>{siteConfig.phone.display}</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-[#23B8D4] shrink-0" />
                <span>Serving Elizabeth, NJ (Union County) &amp; Surrounding Communities</span>
              </div>
            </div>
          </div>

          {/* Column 2: Plumbing Services */}
          <div>
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5 border-l-2 border-[#23B8D4] pl-3">
              Plumbing Services
            </h3>
            <ul className="space-y-3 text-sm">
              {footerNavigation.services.slice(0, 8).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#23B8D4] text-xs transition-transform group-hover:translate-x-0.5">&rsaquo;</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs font-bold text-[#23B8D4] hover:underline block pt-1"
                >
                  View All 12 Services &rsaquo;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5 border-l-2 border-[#1677C8] pl-3">
              Service Areas
            </h3>
            <ul className="space-y-3 text-sm">
              {footerNavigation.serviceAreas.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#1677C8] text-xs transition-transform group-hover:translate-x-0.5">&rsaquo;</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-xs font-bold text-[#1677C8] hover:underline block pt-1"
                >
                  All Service Areas Hub &rsaquo;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Knowledge */}
          <div>
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5 border-l-2 border-[#FF8533] pl-3">
              Company &amp; Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#FF8533] text-xs transition-transform group-hover:translate-x-0.5">&rsaquo;</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal & Lead Generation Disclosure */}
        <div className="pt-8 text-xs text-slate-400 space-y-5">
          <div className="p-5 rounded-2xl bg-[#0D1B2E] border border-slate-800 flex items-start gap-3.5 shadow-sm">
            <ShieldAlert className="w-5 h-5 text-[#23B8D4] shrink-0 mt-0.5" />
            <p className="leading-relaxed text-slate-300">
              <span className="font-extrabold text-white">Service Model Disclosure: </span>
              {siteConfig.businessModel.disclaimer}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-slate-400 pt-2">
            <p>
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
              {footerNavigation.legal.map((item, idx) => (
                <React.Fragment key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                  {idx < footerNavigation.legal.length - 1 && (
                    <span className="text-slate-600 hidden sm:inline">&bull;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

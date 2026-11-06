"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, ChevronDown, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mainNavigation, serviceMegaMenuCategories } from "@/config/navigation";
import { CallButton } from "@/shared/CallButton";
import { Container } from "@/shared/Container";
import { DynamicIcon } from "@/shared/DynamicIcon";
import { MobileNavigation } from "./MobileNavigation";
import { trackEvent } from "@/lib/analytics";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full z-40 bg-[#080F1F] sticky top-0 transition-all duration-300">
        {/* Main Navigation Bar */}
        <div
          className={`transition-all duration-200 border-b border-slate-800/80 ${
            isScrolled
              ? "bg-[#080F1F]/95 backdrop-blur-md shadow-2xl py-3"
              : "bg-[#080F1F] py-4"
          }`}
        >
          <Container className="flex items-center justify-between relative">
            {/* Brand Logo inside high-contrast crisp white pill */}
            <Link
              href="/"
              className="flex items-center bg-white px-3 py-1.5 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#23B8D4] hover:opacity-95 transition-all shrink-0"
              aria-label="Elizabeth Plumbing Pros Homepage"
            >
              <Image
                src="/logo.png"
                alt="Elizabeth Plumbing Pros"
                width={300}
                height={100}
                priority
                className="h-9 sm:h-11 md:h-12 w-auto object-contain max-w-[170px] sm:max-w-[210px] md:max-w-none"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              aria-label="Main Navigation"
            >
              {mainNavigation.map((item) => {
                const isActive = pathname === item.href;
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isServices = item.label === "Services";

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        isActive
                          ? "text-[#23B8D4] bg-white/10"
                          : "text-slate-200 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className={isServices ? "" : "relative"}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Escape") setActiveDropdown(null);
                      }}
                      aria-expanded={activeDropdown === item.label}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        pathname.startsWith(item.href)
                          ? "text-[#23B8D4] bg-white/10"
                          : "text-slate-200 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180 text-[#23B8D4]" : ""
                        }`}
                      />
                    </button>

                    {/* SERVICES CATEGORIZED MEGA-MENU (NO SCROLLING) */}
                    {activeDropdown === "Services" && isServices && (
                      <div className="absolute top-full left-0 right-0 mx-auto pt-2 z-50 w-full max-w-5xl animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="bg-[#0A1C33]/98 rounded-3xl shadow-2xl border border-slate-700/80 p-5 backdrop-blur-2xl ring-1 ring-white/10">
                          {/* 4 Thematic Columns */}
                          <div className="grid grid-cols-4 gap-4">
                            {serviceMegaMenuCategories.map((cat) => (
                              <div key={cat.name} className="flex flex-col">
                                {/* Category Header */}
                                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700/70 px-1">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#23B8D4]"></span>
                                    <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-200">
                                      {cat.name}
                                    </h4>
                                  </div>
                                  <span
                                    className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md border ${cat.badgeColor}`}
                                  >
                                    {cat.badge}
                                  </span>
                                </div>

                                {/* Category Items List */}
                                <div className="space-y-0.5 flex-1">
                                  {cat.items.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="flex items-center justify-between gap-1.5 px-2 py-1.5 rounded-xl hover:bg-white/10 transition-all duration-150 group"
                                    >
                                      <div className="flex items-center gap-2 min-w-0">
                                        <div className="p-1 rounded-md bg-white/5 text-[#23B8D4] group-hover:bg-[#1677C8] group-hover:text-white transition-colors shrink-0 border border-white/10">
                                          <DynamicIcon
                                            name={subItem.iconName}
                                            className="w-3.5 h-3.5"
                                          />
                                        </div>
                                        <span className="text-[12.5px] font-bold text-slate-100 group-hover:text-[#23B8D4] transition-colors truncate">
                                          {subItem.label}
                                        </span>
                                      </div>
                                      {subItem.tag && (
                                        <span className="shrink-0 text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-white/5 text-slate-400 group-hover:bg-[#23B8D4]/20 group-hover:text-[#23B8D4] border border-white/10 transition-colors">
                                          {subItem.tag}
                                        </span>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Mega Menu Bottom Bar */}
                          <div className="mt-4 pt-3.5 border-t border-slate-700/70 flex items-center justify-between px-2 text-xs">
                            <div className="flex items-center gap-2 text-slate-300">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                              </span>
                              <span className="font-semibold text-white">Live Dispatch Available:</span>
                              <span className="text-slate-400">Serving Elizabeth &amp; Union County 24/7</span>
                            </div>

                            <div className="flex items-center gap-4">
                              <a
                                href={siteConfig.phone.telHref}
                                className="inline-flex items-center gap-1.5 font-extrabold text-[#FF8533] hover:text-[#FFA05C] transition-colors"
                              >
                                <Phone className="w-3.5 h-3.5" />
                                <span>Call {siteConfig.phone.display}</span>
                              </a>
                              <span className="text-slate-600">|</span>
                              <Link
                                href="/services"
                                onClick={() => setActiveDropdown(null)}
                                className="inline-flex items-center gap-1 font-extrabold text-[#23B8D4] hover:text-white transition-colors"
                              >
                                <span>View All 21 Services Directory</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STANDARD DROPDOWN (SERVICE AREAS, ETC) */}
                    {activeDropdown === item.label && !isServices && item.children && (
                      <div className="absolute top-full left-0 pt-2 z-50 w-84 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-[#0A1C33] rounded-2xl shadow-2xl border border-slate-700/80 p-2.5 backdrop-blur-xl grid gap-1">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors group"
                            >
                              {subItem.iconName && (
                                <div className="p-2 rounded-lg bg-white/5 text-[#23B8D4] group-hover:bg-[#1677C8] group-hover:text-white transition-colors shrink-0 mt-0.5 border border-white/10">
                                  <DynamicIcon
                                    name={subItem.iconName}
                                    className="w-4 h-4"
                                  />
                                </div>
                              )}
                              <div>
                                <p className="text-sm font-bold text-white group-hover:text-[#23B8D4] transition-colors leading-tight">
                                  {subItem.label}
                                </p>
                                {subItem.description && (
                                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <CallButton
                size="md"
                variant="primary"
                trackingEvent="header_call_click"
                className="shadow-lg hover:shadow-[#FF8533]/30 font-extrabold uppercase tracking-wide text-sm"
              />
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={siteConfig.phone.telHref}
                onClick={() =>
                  trackEvent("header_call_click", { location: "mobile_header_icon" })
                }
                className="p-2.5 rounded-xl bg-[#FF8533] text-white shadow-md hover:bg-[#E66E1D] transition-colors"
                aria-label={`Call Elizabeth Plumbing Pros at ${siteConfig.phone.display}`}
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl border border-slate-700 bg-white/5 text-white hover:bg-white/10 transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </Container>
        </div>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

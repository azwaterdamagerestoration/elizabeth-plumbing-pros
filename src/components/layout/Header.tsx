"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mainNavigation } from "@/config/navigation";
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
          <Container className="flex items-center justify-between">
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
                    className="relative"
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

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && item.children && (
                      <div
                        className={`absolute top-full left-0 pt-2 z-50 ${
                          item.children.length > 6 ? "w-[580px]" : "w-84"
                        }`}
                      >
                        <div
                          className={`bg-[#0A1C33] rounded-2xl shadow-2xl border border-slate-700/80 p-2.5 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 ${
                            item.children.length > 6
                              ? "grid grid-cols-2 gap-1.5 max-h-[75vh] overflow-y-auto"
                              : "grid gap-1"
                          }`}
                        >
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

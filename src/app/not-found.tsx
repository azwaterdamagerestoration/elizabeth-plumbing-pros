import React from "react";
import Link from "next/link";
import { Droplet, Home, Wrench, ArrowRight } from "lucide-react";
import { Container } from "@/shared/Container";
import { CallButton } from "@/shared/CallButton";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F8FAFC] py-16 sm:py-24">
      <Container className="max-w-3xl text-center">
        {/* Animated plumbing droplet graphic */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-blue-100 animate-ping opacity-30" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#102B4E] text-[#23B8D4] flex items-center justify-center shadow-xl border border-slate-700">
            <Droplet className="w-10 h-10 sm:w-12 sm:h-12 fill-[#23B8D4]/20" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-extrabold uppercase tracking-widest mb-4">
          <span>ERROR 404 • PAGE NOT FOUND</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102B4E] tracking-tight leading-tight">
          Looks Like This Page Has a Leak
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#5D6B7C] max-w-xl mx-auto leading-relaxed">
          The page you&apos;re looking for couldn&apos;t be found or may have moved. Explore our plumbing services, check our site map, or return to the homepage.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#102B4E] hover:bg-[#1677C8] text-white font-bold text-sm shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-[#1677C8] text-[#102B4E] hover:text-[#1677C8] font-bold text-sm shadow-xs transition-all"
          >
            <Wrench className="w-4 h-4" />
            <span>Explore All Services</span>
          </Link>

          <Link
            href="/site-map"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1677C8] hover:underline px-3 py-2"
          >
            <span>View Site Map</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Emergency Call Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs max-w-md mx-auto text-center space-y-3">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Experiencing an Urgent Plumbing Problem?
          </p>
          <p className="text-sm text-[#102B4E] font-semibold">
            Our phone coordination line is open to discuss urgent assistance.
          </p>
          <CallButton size="sm" variant="primary" className="w-full justify-center text-sm" />
        </div>
      </Container>
    </div>
  );
}

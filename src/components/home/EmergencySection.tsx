import React from "react";
import Image from "next/image";
import { AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CallButton } from "@/shared/CallButton";
import { Container } from "@/shared/Container";

const emergencyProblems = [
  "Burst and Freezing Water Supply Pipes",
  "Major Active Indoor Leaks Behind Walls",
  "Overflowing Toilets and Fixture Backups",
  "Main Sewer Line Backups & Foul Odors",
  "Completely Blocked Primary Branch Drains",
];

interface EmergencySectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  checklistTitle?: string;
  checklistItems?: string[];
  safetyTitle?: string;
  safetyText?: string;
  image?: string;
  imageAlt?: string;
  promptBadge?: string;
  promptText?: string;
  className?: string;
}

export function EmergencySection({
  eyebrow = "URGENT PLUMBING ASSISTANCE",
  title = "Facing an Urgent Plumbing Problem in Elizabeth?",
  description = "Severe leaks, burst pipes, overflowing fixtures, and sewer backups can cause catastrophic property damage within minutes. Call immediately to discuss your plumbing emergency and connect with available service options.",
  checklistTitle = "Urgent Concerns Visitors Frequently Discuss:",
  checklistItems: customChecklist,
  safetyTitle = "Recommended Safety Precaution:",
  safetyText = "If safe to do so, locate and shut off the affected fixture valve or your home's main water shut-off valve to limit damage while arranging assistance.",
  image = "/images/home/emergency-pipe-repair.webp",
  imageAlt = "Plumbing technician using wrench to repair leaking residential pipe in Elizabeth, NJ",
  promptBadge = "Prompt Phone Dispatch Support",
  promptText = `Call ${siteConfig.phone.display} to discuss immediate repair availability.`,
  className = "",
}: EmergencySectionProps = {}) {
  const activeChecklist = customChecklist || emergencyProblems;

  return (
    <section className={`py-20 sm:py-24 lg:py-28 bg-[#080F1F] text-white relative overflow-hidden ${className}`}>
      {/* Decorative ambient gradients */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FF8533] blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-[#1677C8] blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Urgent Information & Actions */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF8533]/20 border border-[#FF8533]/40 text-[#FF8533] text-xs sm:text-sm font-extrabold tracking-wider uppercase">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {description}
            </p>

            {/* Emergency Checklist */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                {checklistTitle}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
                {activeChecklist.map((problem) => (
                  <li key={problem} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF8533] shrink-0" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Helpful Water Shut-off Safety Note */}
            <div className="p-5 rounded-2xl bg-[#0D1B2E] border border-slate-700/80 flex items-start gap-3.5 text-sm text-slate-300 shadow-lg">
              <ShieldAlert className="w-5 h-5 text-[#23B8D4] shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-white mb-0.5">{safetyTitle}</p>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {safetyText}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <CallButton
                size="lg"
                variant="primary"
                label={`CALL ${siteConfig.phone.display}`}
                trackingEvent="emergency_section_call_click"
                className="w-full sm:w-auto shadow-2xl hover:shadow-[#FF8533]/40 font-extrabold text-lg px-8 py-4 uppercase tracking-wide"
              />
            </div>
          </div>

          {/* Right Column: Close-Up Repair Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-slate-700/90 shadow-2xl aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] bg-slate-900">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080F1F]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#080F1F]/95 backdrop-blur-md border border-slate-700/90 text-white shadow-xl">
                  <p className="text-xs font-extrabold text-[#FF8533] uppercase tracking-wider">
                    {promptBadge}
                  </p>
                  <p className="text-sm font-bold mt-1 text-slate-200">
                    {promptText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

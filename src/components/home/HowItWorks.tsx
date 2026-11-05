import React from "react";
import { Phone, MessageSquare, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/shared/Container";
import { SectionHeading } from "@/shared/SectionHeading";
import { CallButton } from "@/shared/CallButton";

interface HowItWorksStep {
  number: string;
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface HowItWorksProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: HowItWorksStep[];
  className?: string;
}

const defaultSteps: HowItWorksStep[] = [
  {
    number: "01",
    icon: Phone,
    title: "Call Us",
    description: `Call ${siteConfig.phone.display} and describe your current plumbing concern, whether urgent or routine maintenance.`,
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Discuss Your Needs",
    description:
      "Share your Elizabeth or Union County address, the observed symptoms, and your preferred scheduling window.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Explore Available Assistance",
    description:
      "Connect with an independent local plumbing specialist equipped to provide diagnostic estimates and perform repairs.",
  },
];

export function HowItWorks({
  eyebrow = "SIMPLE 3-STEP PROCESS",
  title = "Getting Plumbing Help Is Simple",
  description = "A direct, hassle-free phone-based approach to finding residential plumbing support in Elizabeth, NJ.",
  steps: customSteps,
  className = "",
}: HowItWorksProps = {}) {
  const activeSteps = customSteps || defaultSteps;

  return (
    <section className={`py-20 sm:py-24 lg:py-28 bg-white relative ${className}`}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="relative mt-14">
          {/* Subtle horizontal connecting gradient line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-20 right-20 h-1 bg-gradient-to-r from-[#1677C8]/20 via-[#23B8D4]/50 to-[#1677C8]/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {activeSteps.map((step) => {
              const Icon = step.icon || Phone;
              return (
                <div
                  key={step.number}
                  className="bg-[#F6F9FC] rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-7">
                      <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#102B4E] to-[#1677C8] tracking-tight">
                        {step.number}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-white text-[#1677C8] border border-slate-200 flex items-center justify-center shadow-md group-hover:bg-[#1677C8] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#102B4E] mb-3 group-hover:text-[#1677C8] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#5D6B7C] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-200/60 text-xs font-bold uppercase tracking-wider text-[#1677C8]">
                    Step {step.number} of {String(activeSteps.length).padStart(2, "0")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-14 text-center">
          <CallButton
            size="lg"
            variant="primary"
            label={`CALL ${siteConfig.phone.display}`}
            trackingEvent="header_call_click"
            className="shadow-xl hover:shadow-[#FF8533]/40 font-extrabold px-8 py-4 uppercase tracking-wide"
          />
        </div>
      </Container>
    </section>
  );
}

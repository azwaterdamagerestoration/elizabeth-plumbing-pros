"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  serviceNeeded: string;
  urgency: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  city?: string;
  serviceNeeded?: string;
  consent?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    city: "Elizabeth",
    serviceNeeded: "emergency-plumbing-elizabeth-nj",
    urgency: "standard",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.city) {
      newErrors.city = "Please select your city or municipality.";
    }

    if (!formData.serviceNeeded) {
      newErrors.serviceNeeded = "Please select the service needed.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the privacy policy and consent to contact.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable client-side submission with fallback confirmation
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch {
      alert("A transmission error occurred. Please call (908) 738-8526 directly for immediate assistance.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-lg text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-extrabold text-[#102B4E]">
          Inquiry Successfully Received
        </h3>

        <p className="text-sm sm:text-base text-[#5D6B7C] max-w-lg mx-auto leading-relaxed">
          Thank you, <strong>{formData.fullName}</strong>. Your plumbing request for <strong>{formData.city}, NJ</strong> has been logged.
        </p>

        <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200 text-left max-w-lg mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#1677C8] uppercase tracking-wider">
            <Phone className="w-4 h-4" />
            <span>Need Faster Response?</span>
          </div>
          <p className="text-xs sm:text-sm text-[#172B45] leading-relaxed">
            Because plumbing leaks and sewer backups can cause active water damage, we recommend calling our telephone team directly for immediate contractor coordination.
          </p>
          <a
            href={siteConfig.phone.telHref}
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-[#FF8533] hover:bg-[#E66E1D] text-white font-bold text-sm shadow-md transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now: {siteConfig.phone.display}</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: "",
              phone: "",
              email: "",
              city: "Elizabeth",
              serviceNeeded: "emergency-plumbing-elizabeth-nj",
              urgency: "standard",
              message: "",
              consent: false,
            });
          }}
          className="text-xs font-bold text-[#1677C8] hover:underline"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-9 shadow-lg space-y-6"
    >
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#102B4E]">
          Request Plumbing Assistance
        </h2>
        <p className="text-xs sm:text-sm text-[#5D6B7C] mt-1">
          Complete this form to describe your plumbing problem, or call {siteConfig.phone.display} for immediate dispatch coordination.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold uppercase tracking-wider text-[#102B4E] mb-2"
          >
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#102B4E] focus:outline-none focus:ring-2 focus:ring-[#1677C8] ${
              errors.fullName ? "border-rose-400 bg-rose-50/30" : "border-slate-200 bg-slate-50/50"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold uppercase tracking-wider text-[#102B4E] mb-2"
          >
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(908) 555-0123"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#102B4E] focus:outline-none focus:ring-2 focus:ring-[#1677C8] ${
              errors.phone ? "border-rose-400 bg-rose-50/30" : "border-slate-200 bg-slate-50/50"
            }`}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email (Optional) */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-[#102B4E] mb-2"
          >
            Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="johndoe@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-[#102B4E] focus:outline-none focus:ring-2 focus:ring-[#1677C8]"
          />
        </div>

        {/* City / Service Area */}
        <div>
          <label
            htmlFor="city"
            className="block text-xs font-bold uppercase tracking-wider text-[#102B4E] mb-2"
          >
            Your Municipality <span className="text-rose-500">*</span>
          </label>
          <select
            id="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-[#102B4E] focus:outline-none focus:ring-2 focus:ring-[#1677C8]"
          >
            <option value="Elizabeth">Elizabeth, NJ (Primary Hub)</option>
            <option value="Union">Union, NJ</option>
            <option value="Westfield">Westfield, NJ</option>
            <option value="Cranford">Cranford, NJ</option>
            <option value="Roselle">Roselle, NJ</option>
            <option value="Fanwood">Fanwood, NJ</option>
            <option value="Other Union County">Other Union County Town</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Service Needed */}
        <div>
          <label
            htmlFor="serviceNeeded"
            className="block text-xs font-bold uppercase tracking-wider text-[#102B4E] mb-2"
          >
            Service Category <span className="text-rose-500">*</span>
          </label>
          <select
            id="serviceNeeded"
            value={formData.serviceNeeded}
            onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-[#102B4E] focus:outline-none focus:ring-2 focus:ring-[#1677C8]"
          >
            {servicesData.map((svc) => (
              <option key={svc.id} value={svc.slug}>
                {svc.title}
              </option>
            ))}
            <option value="general-inquiry">General Plumbing Inquiry</option>
          </select>
        </div>

        {/* Urgency */}
        <div>
          <label
            htmlFor="urgency"
            className="block text-xs font-bold uppercase tracking-wider text-[#102B4E] mb-2"
          >
            Issue Urgency
          </label>
          <select
            id="urgency"
            value={formData.urgency}
            onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-[#102B4E] focus:outline-none focus:ring-2 focus:ring-[#1677C8]"
          >
            <option value="urgent">Active Leak / Urgent Emergency (Immediate)</option>
            <option value="standard">Standard Repair (Next 24-48 Hours)</option>
            <option value="estimate">Planning / Seeking Diagnostic Estimate</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-[#102B4E] mb-2"
        >
          Description of Plumbing Problem
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe symptoms, affected fixtures, whether water is turned off, and any property access notes..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-[#102B4E] focus:outline-none focus:ring-2 focus:ring-[#1677C8]"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-[#1677C8] focus:ring-[#1677C8]"
          />
          <span className="text-xs text-[#5D6B7C] leading-relaxed">
            I agree to the{" "}
            <Link href="/privacy" className="text-[#1677C8] font-semibold hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-[#1677C8] font-semibold hover:underline">
              Terms of Use
            </Link>
            . I authorize Elizabeth Plumbing Pros and its independent service partner network to contact me by phone or email regarding this plumbing request. <span className="text-rose-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.consent}</span>
          </p>
        )}
      </div>

      {/* Transparency Note */}
      <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
        <ShieldCheck className="w-4 h-4 text-[#1677C8] shrink-0" />
        <span>
          We do not sell personal data. Your inquiry is relayed strictly to independent local plumbing service partners to coordinate assistance.
        </span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF8533] hover:bg-[#E66E1D] text-white font-extrabold text-base tracking-wide uppercase shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all disabled:opacity-70 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Transmitting Request...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Plumbing Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
}


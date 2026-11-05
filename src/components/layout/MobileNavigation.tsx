"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronRight } from "lucide-react";
import { mainNavigation } from "@/config/navigation";
import { CallButton } from "@/shared/CallButton";
import { DynamicIcon } from "@/shared/DynamicIcon";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  // Prevent body scrolling when open and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-white">
          <Link href="/" onClick={onClose} className="inline-block focus:outline-none">
            <Image
              src="/logo.png"
              alt="Elizabeth Plumbing Pros"
              width={220}
              height={73}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-[#102B4E] hover:bg-slate-100 transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Primary Call Action inside drawer */}
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <p className="text-xs font-semibold text-[#5D6B7C] uppercase tracking-wider mb-2">
            Immediate Phone Assistance
          </p>
          <CallButton
            size="md"
            className="w-full justify-center"
            trackingEvent="header_call_click"
          />
        </div>

        {/* Navigation items */}
        <div className="flex-1 py-4 px-4 space-y-1">
          {mainNavigation.map((item) => (
            <div key={item.label} className="py-1">
              {!item.children ? (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-semibold text-[#172B45] hover:bg-slate-50 hover:text-[#1677C8] transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              ) : (
                <div className="space-y-1">
                  <div className="flex items-center justify-between py-2 px-3 text-xs font-bold uppercase tracking-wider text-[#5D6B7C]">
                    <span>{item.label}</span>
                  </div>
                  <div className="pl-2 space-y-1 border-l-2 border-slate-100 ml-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={onClose}
                        className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm text-[#172B45] hover:bg-slate-50 hover:text-[#1677C8] transition-colors"
                      >
                        {child.iconName && (
                          <DynamicIcon
                            name={child.iconName}
                            className="w-4 h-4 text-[#1677C8] shrink-0"
                          />
                        )}
                        <span>{child.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer info inside drawer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-xs text-[#5D6B7C]">
          <p className="font-medium text-[#172B45] mb-1">Elizabeth Plumbing Pros</p>
          <p>Local plumbing lead-generation network connecting Union County residents with available service providers.</p>
        </div>
      </div>
    </div>
  );
}

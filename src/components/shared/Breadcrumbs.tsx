import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "default" | "light";
}

export function Breadcrumbs({ items, className = "", variant = "default" }: BreadcrumbsProps) {
  const isLight = variant === "light";
  
  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-3 text-sm ${isLight ? "text-slate-300" : "text-[#5D6B7C]"} ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-2">
        <li className="flex items-center">
          <Link
            href="/"
            className={`flex items-center gap-1 transition-colors ${
              isLight ? "hover:text-white text-slate-300" : "hover:text-[#1677C8]"
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className={`w-3.5 h-3.5 ${isLight ? "text-slate-400" : "text-slate-400"}`} />
              {isLast || !item.href ? (
                <span
                  className={`font-semibold ${isLight ? "text-white" : "text-[#102B4E]"}`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isLight ? "text-slate-300 hover:text-white" : "hover:text-[#1677C8]"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}


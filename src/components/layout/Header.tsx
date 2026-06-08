"use client";

import { useState } from "react";
import Link from "next/link";

const comparisonLinks = [
  { label: "Best Overall", href: "/best-software-for-cleaning-business" },
  { label: "Best Free", href: "/best-free-software-for-cleaning-business" },
  { label: "Best for Solo Cleaners", href: "/best-software-for-solo-cleaner" },
  { label: "Best for Maid Services", href: "/best-software-for-maid-service" },
  { label: "Best for Commercial Cleaning", href: "/best-software-for-commercial-cleaning-business" },
  { label: "Best Scheduling Tools", href: "/best-scheduling-software-for-cleaning-business" },
  { label: "Best Invoicing Tools", href: "/best-invoicing-software-for-cleaning-business" },
  { label: "Cheapest Options", href: "/cheapest-software-for-cleaning-business" },
];

const compareLinks = [
  { label: "Jobber vs Housecall Pro", href: "/jobber-vs-housecall-pro-cleaning-business" },
  { label: "Jobber vs ZenMaid", href: "/jobber-vs-zenmaid" },
  { label: "Housecall Pro vs ZenMaid", href: "/housecall-pro-vs-zenmaid" },
  { label: "Swept vs Jobber", href: "/swept-vs-jobber-cleaning-business" },
  { label: "ZenMaid vs Swept", href: "/zenmaid-vs-swept" },
  { label: "Connecteam vs Jobber", href: "/connecteam-vs-jobber-cleaning-business" },
  { label: "ServiceM8 vs Jobber (AU)", href: "/servicem8-vs-jobber-australia" },
];

const reviewLinks = [
  { label: "Jobber Review", href: "/jobber-review-cleaning-business" },
  { label: "Housecall Pro Review", href: "/housecall-pro-review-cleaning-business" },
  { label: "ZenMaid Review", href: "/zenmaid-review" },
  { label: "Swept Review", href: "/swept-review" },
  { label: "Launch27 Review", href: "/launch27-review" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white hover:text-green-400 transition-colors">
            <span className="text-2xl">🧹</span>
            <span>CleaningStack</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Best Software dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("best")}
                onBlur={() => setTimeout(() => setActiveDropdown(null), 150)}
                className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                Best Software
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "best" && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                  {comparisonLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-green-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Compare Tools dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("compare")}
                onBlur={() => setTimeout(() => setActiveDropdown(null), 150)}
                className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                Compare Tools
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "compare" && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                  {compareLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-green-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tool Reviews dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("reviews")}
                onBlur={() => setTimeout(() => setActiveDropdown(null), 150)}
                className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                Reviews
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "reviews" && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                  {reviewLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-green-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <Link
                      href="/tools"
                      className="block px-4 py-2.5 text-sm font-medium text-green-600 hover:bg-slate-50 transition-colors"
                    >
                      All 8 Tools →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/tools"
              className="px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              All Tools
            </Link>

            <Link
              href="/#quiz"
              className="ml-2 btn-primary text-sm py-2 px-4"
            >
              Find My Software →
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-1">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-2">Best Software</p>
            {comparisonLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mt-4 mb-2">Compare</p>
            {compareLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mt-4 mb-2">Reviews</p>
            {reviewLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-700">
              <Link
                href="/#quiz"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                Find My Software →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

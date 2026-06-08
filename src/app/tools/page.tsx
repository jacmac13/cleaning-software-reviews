import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { affiliateLinks } from "@/config/affiliateLinks";
import StarRating from "@/components/ui/StarRating";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "All Cleaning Business Software Reviews 2026 | CleaningStack",
  description:
    "Browse all 8 cleaning business software tools reviewed by CleaningStack. Compare Jobber, ZenMaid, Housecall Pro, Swept, and more for your cleaning business.",
  alternates: { canonical: "https://cleaning-software-reviews.vercel.app/tools" },
};

const reviewLinks: Record<string, string> = {
  jobber: "/jobber-review-cleaning-business",
  "housecall-pro": "/housecall-pro-review-cleaning-business",
  zenmaid: "/zenmaid-review",
  swept: "/swept-review",
  launch27: "/launch27-review",
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "All Reviews" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
        All Cleaning Business Software Reviews
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl">
        Every platform we&apos;ve tested and reviewed for cleaning businesses â€” from solo operators to commercial cleaning companies. Click any tool for a full review.
      </p>

      <div className="grid grid-cols-1 gap-6">
        {tools.map((tool, idx) => {
          const affiliateLink = affiliateLinks[tool.affiliateLinkKey as keyof typeof affiliateLinks] ?? "#";
          const reviewLink = reviewLinks[tool.slug];

          return (
            <div key={tool.slug} className="card flex flex-col sm:flex-row gap-5">
              {/* Rank + logo */}
              <div className="flex items-start gap-4 sm:w-72 shrink-0">
                <span className="text-2xl font-bold text-slate-300 w-8 shrink-0 mt-1">
                  {idx + 1}
                </span>
                <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {tool.name[0]}
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 text-lg leading-tight">{tool.name}</h2>
                  <p className="text-sm text-slate-500">{tool.tagline}</p>
                </div>
              </div>

              {/* Ratings + pricing */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
                <div className="sm:w-36 shrink-0">
                  <StarRating rating={tool.rating} size="sm" />
                  <p className="text-sm font-semibold text-slate-900 mt-1">{tool.rating}/5</p>
                  {tool.g2Rating && (
                    <p className="text-xs text-slate-400">G2: {tool.g2Rating}/5</p>
                  )}
                </div>

                <div className="sm:w-32 shrink-0">
                  <p className="text-xs text-slate-400 mb-0.5">Starting From</p>
                  <p className="text-xl font-bold text-slate-900">
                    {tool.pricing.startingPrice === 0 ? "Free" : `$${tool.pricing.startingPrice}/mo`}
                  </p>
                  {tool.pricing.freeTrialDays && (
                    <p className="text-xs text-green-600">{tool.pricing.freeTrialDays}-day free trial</p>
                  )}
                  {tool.pricing.hasFreeTier && (
                    <p className="text-xs text-green-600">Free plan available</p>
                  )}
                </div>

                <div className="flex-1">
                  <p className="text-xs text-slate-400 mb-1">Best for</p>
                  <p className="text-sm text-slate-700">{tool.bestFor}</p>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <Link
                    href={affiliateLink}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn-primary text-sm py-2 text-center whitespace-nowrap"
                  >
                    {tool.pricing.freeTrialDays
                      ? `Try Free (${tool.pricing.freeTrialDays} days)`
                      : tool.pricing.hasFreeTier
                      ? "Get Free Plan"
                      : `Visit ${tool.name}`}
                  </Link>
                  {reviewLink && (
                    <Link
                      href={reviewLink}
                      className="btn-outline text-sm py-2 text-center"
                    >
                      Read Review â†’
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Category nav */}
      <section className="mt-12 pt-10 border-t border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Find Software by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Best Overall", href: "/best-software-for-cleaning-business", desc: "Our top picks across all cleaning businesses" },
            { title: "For Maid Services", href: "/best-software-for-maid-service", desc: "Best tools built for residential maid services" },
            { title: "For Commercial Cleaning", href: "/best-software-for-commercial-cleaning-business", desc: "Software for commercial cleaning operations" },
            { title: "For Solo Cleaners", href: "/best-software-for-solo-cleaner", desc: "Simple tools for self-employed cleaners" },
            { title: "Free Options", href: "/best-free-software-for-cleaning-business", desc: "Genuinely free cleaning software" },
            { title: "For Small Teams", href: "/best-software-for-small-cleaning-business", desc: "Best for 2â€“10 staff cleaning businesses" },
            { title: "Scheduling Tools", href: "/best-scheduling-software-for-cleaning-business", desc: "Best booking and scheduling platforms" },
            { title: "Invoicing Tools", href: "/best-invoicing-software-for-cleaning-business", desc: "Best for billing and payment collection" },
            { title: "For Beginners", href: "/cleaning-business-software-for-beginners", desc: "Easiest options for new cleaning businesses" },
            { title: "For Australia", href: "/best-software-for-cleaning-business-australia", desc: "Best options for Australian cleaning businesses" },
            { title: "For the UK", href: "/best-software-for-cleaning-business-uk", desc: "Best options for UK cleaning businesses" },
            { title: "Cheapest Options", href: "/cheapest-software-for-cleaning-business", desc: "Most affordable cleaning software picks" },
          ].map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="card hover:border-green-300 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 mb-1">{cat.title}</h3>
              <p className="text-sm text-slate-500">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust note */}
      <section className="mt-10 bg-slate-50 rounded-2xl p-6">
        <h2 className="font-bold text-slate-900 mb-2">How We Review</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Every platform on CleaningStack has been hands-on tested by our team. We evaluate scheduling, invoicing, mobile app quality, customer support, and value for money â€” specifically for cleaning businesses, not generic field service operations. Some links on this page are affiliate links; we earn a commission if you subscribe, at no extra cost to you. Our reviews are independent and our scores are based on testing, not sponsorship.{" "}
          <Link href="/about" className="text-green-600 hover:underline">
            Learn more about how we test â†’
          </Link>
        </p>
      </section>
    </div>
  );
}

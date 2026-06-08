import Link from "next/link";
import { Tool } from "@/data/tools";
import { affiliateLinks } from "@/config/affiliateLinks";
import FAQSection from "./ui/FAQSection";
import RelatedPages from "./ui/RelatedPages";
import Breadcrumbs from "./ui/Breadcrumbs";

interface FAQ {
  question: string;
  answer: string;
}

interface RelatedPage {
  title: string;
  href: string;
  description: string;
}

interface HeadToHeadTemplateProps {
  title: string;
  toolA: Tool;
  toolB: Tool;
  verdict: "a" | "b" | "tie";
  verdictReason: string;
  toolAWins: string[];
  toolBWins: string[];
  toolAFor: string;
  toolBFor: string;
  pricingAnalysis: string;
  faqs: FAQ[];
  relatedPages: RelatedPage[];
  breadcrumbs: { label: string; href?: string }[];
  intro: string;
  lastUpdated?: string;
}

export default function HeadToHeadTemplate({
  title,
  toolA,
  toolB,
  verdict,
  verdictReason,
  toolAWins,
  toolBWins,
  toolAFor,
  toolBFor,
  pricingAnalysis,
  faqs,
  relatedPages,
  breadcrumbs,
  intro,
  lastUpdated = "June 2026",
}: HeadToHeadTemplateProps) {
  const linkA = affiliateLinks[toolA.affiliateLinkKey as keyof typeof affiliateLinks] ?? "#";
  const linkB = affiliateLinks[toolB.affiliateLinkKey as keyof typeof affiliateLinks] ?? "#";
  const winner = verdict === "a" ? toolA : verdict === "b" ? toolB : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    datePublished: "2026-06-01",
    dateModified: "2026-06-08",
    author: { "@type": "Organization", name: "CleaningStack" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={breadcrumbs} />
        <p className="text-xs text-slate-400 mb-4">Last updated: {lastUpdated}</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">{intro}</p>

        {/* Quick verdict */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8">
          <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">Quick Verdict</p>
          {winner ? (
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🏆</span>
              <h2 className="text-2xl font-bold">{winner.name} Wins</h2>
            </div>
          ) : (
            <h2 className="text-2xl font-bold mb-2">It&apos;s a Tie — Depends on Your Situation</h2>
          )}
          <p className="text-slate-300 leading-relaxed">{verdictReason}</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href={linkA} target="_blank" rel="nofollow noopener noreferrer" className={`btn-primary text-sm ${verdict === "a" ? "" : "opacity-80"}`}>
              Try {toolA.name} {toolA.pricing.freeTrialDays ? "Free" : "→"}
            </Link>
            <Link href={linkB} target="_blank" rel="nofollow noopener noreferrer" className={`btn-outline text-sm py-2 border-white/30 text-white hover:bg-white hover:text-slate-900 ${verdict === "b" ? "" : "opacity-80"}`}>
              Try {toolB.name} {toolB.pricing.freeTrialDays ? "Free" : "→"}
            </Link>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-4 py-3 font-semibold text-slate-700 w-1/3">Feature</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700 w-1/3">{toolA.name}</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700 w-1/3">{toolB.name}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Starting Price", a: toolA.pricing.startingPrice === 0 ? "Free" : `$${toolA.pricing.startingPrice}/mo`, b: toolB.pricing.startingPrice === 0 ? "Free" : `$${toolB.pricing.startingPrice}/mo` },
                { label: "Free Trial", a: toolA.pricing.freeTrialDays ? `${toolA.pricing.freeTrialDays} days` : "None", b: toolB.pricing.freeTrialDays ? `${toolB.pricing.freeTrialDays} days` : "None" },
                { label: "Free Plan", a: toolA.pricing.hasFreeTier ? "✅ Yes" : "❌ No", b: toolB.pricing.hasFreeTier ? "✅ Yes" : "❌ No" },
                { label: "Rating", a: `${toolA.rating}/5`, b: `${toolB.rating}/5` },
                { label: "Mobile App", a: toolA.mobileApp.ios && toolA.mobileApp.android ? "iOS & Android" : "Limited", b: toolB.mobileApp.ios && toolB.mobileApp.android ? "iOS & Android" : "Limited" },
                { label: "Best For", a: toolA.targetBusinessSize.join(", "), b: toolB.targetBusinessSize.join(", ") },
                { label: "Standout Feature", a: toolA.standoutFeature.substring(0, 80) + "…", b: toolB.standoutFeature.substring(0, 80) + "…" },
              ].map((row, idx) => (
                <tr key={row.label} className={`border-t border-slate-100 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                  <td className="px-4 py-3 font-medium text-slate-700">{row.label}</td>
                  <td className={`px-4 py-3 text-slate-700 ${verdict === "a" ? "font-medium" : ""}`}>{row.a}</td>
                  <td className={`px-4 py-3 text-slate-700 ${verdict === "b" ? "font-medium" : ""}`}>{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Where each wins */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="border border-slate-200 rounded-xl p-5">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Where {toolA.name} Wins
            </h2>
            <ul className="space-y-2">
              {toolAWins.map((win, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  {win}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Where {toolB.name} Wins
            </h2>
            <ul className="space-y-2">
              {toolBWins.map((win, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  {win}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing comparison */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pricing Comparison</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            {[toolA, toolB].map((tool) => (
              <div key={tool.slug} className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-3">{tool.name} Pricing</h3>
                <div className="space-y-2">
                  {tool.pricing.tiers.map((tier) => (
                    <div key={tier.name} className="flex justify-between items-start">
                      <div>
                        <span className="font-medium text-slate-900 text-sm">{tier.name}</span>
                        <p className="text-xs text-slate-500 mt-0.5">{tier.description}</p>
                      </div>
                      <span className="font-bold text-slate-900 text-sm shrink-0 ml-2">
                        {tier.price === null ? "Free" : `$${tier.price}/mo`}
                      </span>
                    </div>
                  ))}
                </div>
                {tool.pricing.freeTrialDays && (
                  <p className="text-xs text-green-600 font-medium mt-3">
                    {tool.pricing.freeTrialDays}-day free trial
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">{pricingAnalysis}</p>
        </section>

        {/* Who should pick each */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-5">
            <h2 className="font-bold text-slate-900 mb-2">Choose {toolA.name} If…</h2>
            <p className="text-sm text-slate-700">{toolAFor}</p>
            <Link href={linkA} target="_blank" rel="nofollow noopener noreferrer" className="btn-primary text-sm mt-4 inline-flex">
              Try {toolA.name} {toolA.pricing.freeTrialDays ? "Free" : "→"}
            </Link>
          </div>
          <div className="bg-green-50 rounded-xl p-5">
            <h2 className="font-bold text-slate-900 mb-2">Choose {toolB.name} If…</h2>
            <p className="text-sm text-slate-700">{toolBFor}</p>
            <Link href={linkB} target="_blank" rel="nofollow noopener noreferrer" className="btn-primary text-sm mt-4 inline-flex">
              Try {toolB.name} {toolB.pricing.freeTrialDays ? "Free" : "→"}
            </Link>
          </div>
        </div>

        <FAQSection faqs={faqs} />
        <RelatedPages pages={relatedPages} />
      </div>
    </>
  );
}

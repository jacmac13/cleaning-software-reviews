import Link from "next/link";
import { Tool } from "@/data/tools";
import { affiliateLinks } from "@/config/affiliateLinks";
import StarRating from "./ui/StarRating";
import ComparisonTable from "./ui/ComparisonTable";
import QuickAnswerBox from "./ui/QuickAnswerBox";
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

interface ComparisonPageTemplateProps {
  title: string;
  intro: string;
  topPickSlug: string;
  topPickReason: string;
  tools: Tool[];
  toolSections: {
    tool: Tool;
    sectionContent: string;
    verdict: string;
  }[];
  faqs: FAQ[];
  relatedPages: RelatedPage[];
  breadcrumbs: { label: string; href?: string }[];
  howWeChose: string;
  finalRecommendation: string;
  lastUpdated?: string;
}

export default function ComparisonPageTemplate({
  title,
  intro,
  topPickSlug,
  topPickReason,
  tools,
  toolSections,
  faqs,
  relatedPages,
  breadcrumbs,
  howWeChose,
  finalRecommendation,
  lastUpdated = "June 2026",
}: ComparisonPageTemplateProps) {
  const topTool = tools.find((t) => t.slug === topPickSlug);
  const topAffiliateLink = topTool
    ? affiliateLinks[topTool.affiliateLinkKey as keyof typeof affiliateLinks] ?? "#"
    : "#";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    datePublished: "2026-06-01",
    dateModified: "2026-06-08",
    author: { "@type": "Organization", name: "CleaningStack" },
    publisher: { "@type": "Organization", name: "CleaningStack" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <p className="text-xs text-slate-400 mb-4">Last updated: {lastUpdated}</p>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">{intro}</p>

        {topTool && (
          <QuickAnswerBox
            topPick={topTool.name}
            reason={topPickReason}
            ctaText={`Try ${topTool.name} ${topTool.pricing.freeTrialDays ? "Free" : "→"}`}
            ctaLink={topAffiliateLink}
          />
        )}

        <h2 className="text-2xl font-bold text-slate-900 mb-2 mt-10">Quick Comparison Table</h2>
        <p className="text-sm text-slate-500 mb-4">
          All prices are monthly. Scroll right on mobile.
        </p>
        <ComparisonTable tools={tools} />

        <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-10">Detailed Reviews</h2>

        <div className="space-y-12">
          {toolSections.map((section, idx) => {
            const affiliateLink =
              affiliateLinks[section.tool.affiliateLinkKey as keyof typeof affiliateLinks] ?? "#";
            return (
              <div key={section.tool.slug} className="border border-slate-100 rounded-2xl p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold">
                        {section.tool.name[0]}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {idx + 1}. {section.tool.name}
                        </h3>
                        <p className="text-sm text-slate-500">{section.tool.tagline}</p>
                      </div>
                    </div>
                    <StarRating rating={section.tool.rating} />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Starting from</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {section.tool.pricing.startingPrice === 0
                        ? "Free"
                        : `$${section.tool.pricing.startingPrice}/mo`}
                    </p>
                    {section.tool.pricing.freeTrialDays && (
                      <p className="text-xs text-green-600 font-medium">
                        {section.tool.pricing.freeTrialDays}-day free trial
                      </p>
                    )}
                  </div>
                </div>

                <div className="prose-clean mb-4">
                  {section.sectionContent.split("\n\n").map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">✅ Pros</h4>
                    <ul className="space-y-1">
                      {section.tool.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <svg
                            className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">❌ Cons</h4>
                    <ul className="space-y-1">
                      {section.tool.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 mb-4">
                  <p className="text-sm">
                    <strong className="text-slate-900">🎯 Best for:</strong>{" "}
                    <span className="text-slate-600">{section.tool.bestFor}</span>
                  </p>
                  <p className="text-sm mt-1">
                    <strong className="text-slate-900">⭐ Standout feature:</strong>{" "}
                    <span className="text-slate-600">{section.tool.standoutFeature}</span>
                  </p>
                </div>

                <p className="text-sm text-slate-600 italic mb-4">{section.verdict}</p>

                <div className="flex gap-3 flex-wrap">
                  <Link
                    href={affiliateLink}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    {section.tool.pricing.freeTrialDays
                      ? `Try ${section.tool.name} Free for ${section.tool.pricing.freeTrialDays} Days`
                      : `Visit ${section.tool.name} →`}
                  </Link>
                  <Link
                    href={`/${section.tool.slug}-review${section.tool.slug === "jobber" || section.tool.slug === "housecall-pro" ? "-cleaning-business" : ""}`}
                    className="btn-outline text-sm py-2"
                  >
                    Full Review
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* How we chose section */}
        <section className="mt-12 bg-slate-50 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">How We Chose These Tools</h2>
          <p className="text-slate-600 text-sm leading-relaxed">{howWeChose}</p>
        </section>

        {/* Final recommendation */}
        <section className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Our Final Recommendation</h2>
          <p className="text-slate-700 leading-relaxed">{finalRecommendation}</p>
        </section>

        <FAQSection faqs={faqs} />
        <RelatedPages pages={relatedPages} />
      </div>
    </>
  );
}

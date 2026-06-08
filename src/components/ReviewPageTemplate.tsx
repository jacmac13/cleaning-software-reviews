import Link from "next/link";
import { Tool } from "@/data/tools";
import { affiliateLinks } from "@/config/affiliateLinks";
import StarRating from "./ui/StarRating";
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

interface ReviewPageTemplateProps {
  tool: Tool;
  intro: string;
  detailedReview: string[];
  whoItIsFor: string;
  whoShouldAvoid: string;
  pricingDetail: string;
  verdict: string;
  overallScore: number;
  scoreBreakdown: { label: string; score: number }[];
  faqs: FAQ[];
  relatedPages: RelatedPage[];
  breadcrumbs: { label: string; href?: string }[];
  lastUpdated?: string;
}

export default function ReviewPageTemplate({
  tool,
  intro,
  detailedReview,
  whoItIsFor,
  whoShouldAvoid,
  pricingDetail,
  verdict,
  overallScore,
  scoreBreakdown,
  faqs,
  relatedPages,
  breadcrumbs,
  lastUpdated = "June 2026",
}: ReviewPageTemplateProps) {
  const affiliateLink = affiliateLinks[tool.affiliateLinkKey as keyof typeof affiliateLinks] ?? "#";

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: tool.name,
      applicationCategory: "BusinessApplication",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: tool.rating,
      bestRating: 5,
    },
    author: { "@type": "Organization", name: "CleaningStack" },
    datePublished: "2026-06-01",
    dateModified: "2026-06-08",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={breadcrumbs} />
        <p className="text-xs text-slate-400 mb-4">Last updated: {lastUpdated}</p>

        {/* Tool header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-2xl shrink-0">
            {tool.name[0]}
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1">{tool.name} Review 2026</h1>
            <p className="text-lg text-slate-500">{tool.tagline}</p>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <StarRating rating={tool.rating} size="lg" />
              {tool.g2Rating && (
                <span className="text-sm text-slate-500">G2: {tool.g2Rating}/5</span>
              )}
              {tool.captetraRating && (
                <span className="text-sm text-slate-500">Capterra: {tool.captetraRating}/5</span>
              )}
            </div>
          </div>
        </div>

        <p className="text-lg text-slate-600 mb-6 leading-relaxed">{intro}</p>

        {/* Quick facts + CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="card text-center">
            <p className="text-xs text-slate-500 mb-1">Starting From</p>
            <p className="text-2xl font-bold text-slate-900">
              {tool.pricing.startingPrice === 0 ? "Free" : `$${tool.pricing.startingPrice}/mo`}
            </p>
            {tool.pricing.hasFreeTier && tool.pricing.startingPrice > 0 && (
              <p className="text-xs text-green-600 mt-1">Free plan available</p>
            )}
          </div>
          <div className="card text-center">
            <p className="text-xs text-slate-500 mb-1">Free Trial</p>
            <p className="text-2xl font-bold text-slate-900">
              {tool.pricing.freeTrialDays ? `${tool.pricing.freeTrialDays} days` : "None"}
            </p>
            {tool.pricing.hasFreeTier && (
              <p className="text-xs text-green-600 mt-1">Free plan available</p>
            )}
          </div>
          <div className="card text-center">
            <p className="text-xs text-slate-500 mb-1">Our Rating</p>
            <p className="text-2xl font-bold text-slate-900">{overallScore}/5</p>
            <StarRating rating={overallScore} size="sm" />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            href={affiliateLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn-primary"
          >
            {tool.pricing.freeTrialDays ? `Try ${tool.name} Free for ${tool.pricing.freeTrialDays} Days` : `Visit ${tool.name} →`}
          </Link>
          <p className="text-xs text-slate-400 self-center">
            {tool.pricing.freeTrialDays
              ? `No credit card required for ${tool.pricing.freeTrialDays}-day trial`
              : tool.pricing.hasFreeTier
              ? "Free plan available — no credit card"
              : ""}
          </p>
        </div>

        {/* Score breakdown */}
        <div className="card mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Our Rating Breakdown</h2>
          <div className="space-y-3">
            {scoreBreakdown.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-sm text-slate-600 w-40 shrink-0">{item.label}</span>
                <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${(item.score / 5) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-slate-900 w-8 text-right">{item.score}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed review */}
        <div className="prose-clean mb-10">
          {detailedReview.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Pricing detail */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{tool.name} Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {tool.pricing.tiers.map((tier, idx) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-5 ${idx === 1 ? "border-green-300 bg-green-50" : "border-slate-200"}`}
              >
                {idx === 1 && (
                  <span className="text-xs font-semibold text-green-700 uppercase tracking-wider block mb-1">
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold text-slate-900 mb-1">{tier.name}</h3>
                <p className="text-2xl font-bold text-slate-900 mb-1">
                  {tier.price === null ? "Free" : `$${tier.price}`}
                  {tier.price !== null && <span className="text-sm font-normal text-slate-500">/mo</span>}
                </p>
                <p className="text-sm text-slate-600">{tier.description}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">{pricingDetail}</p>
        </section>

        {/* Pros and cons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">✅ Pros</h2>
            <ul className="space-y-2">
              {tool.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">❌ Cons</h2>
            <ul className="space-y-2">
              {tool.cons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Who it's for */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-green-50 rounded-xl p-5">
            <h2 className="font-bold text-slate-900 mb-2">✅ {tool.name} is great for…</h2>
            <p className="text-sm text-slate-700">{whoItIsFor}</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5">
            <h2 className="font-bold text-slate-900 mb-2">❌ Skip {tool.name} if…</h2>
            <p className="text-sm text-slate-700">{whoShouldAvoid}</p>
          </div>
        </div>

        {/* Integrations */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Key Integrations</h2>
          <div className="flex flex-wrap gap-2">
            {tool.integrations.map((integration) => (
              <span key={integration} className="badge bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1 text-sm">
                {integration}
              </span>
            ))}
          </div>
        </section>

        {/* Final verdict */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold mb-3">Our Verdict</h2>
          <p className="text-slate-300 leading-relaxed mb-4">{verdict}</p>
          <Link
            href={affiliateLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn-primary"
          >
            {tool.pricing.freeTrialDays ? `Start Your ${tool.pricing.freeTrialDays}-Day Free Trial` : `Visit ${tool.name} →`}
          </Link>
        </section>

        <FAQSection faqs={faqs} />
        <RelatedPages pages={relatedPages} />
      </div>
    </>
  );
}

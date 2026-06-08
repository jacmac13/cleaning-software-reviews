import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { affiliateLinks } from "@/config/affiliateLinks";
import SoftwareRecommender from "@/components/SoftwareRecommender";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FAQSection from "@/components/ui/FAQSection";

export const metadata: Metadata = {
  title: "Best Cleaning Business Software 2026: Find Your Perfect Tool",
  description:
    "Independent reviews of the best software for cleaning businesses in 2026. Take our 60-second quiz for a personalised recommendation â€” Jobber, Housecall Pro, ZenMaid, and more.",
  openGraph: {
    title: "Best Cleaning Business Software 2026 | CleaningStack",
    description:
      "Find the right software for your cleaning business. Take our quiz or compare Jobber, Housecall Pro, ZenMaid, Swept, and more.",
  },
};

const homepageFaqs = [
  {
    question: "What is the best software for a cleaning business?",
    answer:
      "Jobber is the best overall software for cleaning businesses with 3+ staff, thanks to its polished client portal, automation features, and excellent mobile app. For solo cleaners or very small maid services, ZenMaid is purpose-built for residential cleaning and has a genuine free plan for up to 3 clients. For teams that prioritise communication, Swept or Connecteam are excellent choices.",
  },
  {
    question: "Is there free software for cleaning businesses?",
    answer:
      "Yes â€” both ZenMaid and Connecteam offer genuine free plans. ZenMaid is free for up to 3 active clients (ideal for new maid services just starting out), while Connecteam is free forever for teams of up to 10 users. Both work without a credit card. Acuity Scheduling doesn't have a free tier but starts at just $20/month if you need simple online booking.",
  },
  {
    question: "Do I need dedicated cleaning business software, or will a generic tool do?",
    answer:
      "It depends on your needs. Generic tools like Google Calendar and spreadsheets work fine when you're brand new and have very few clients. But once you're managing 10+ jobs per week, have a team, or want to send professional invoices and take online payments, dedicated cleaning software saves significant admin time. Tools like ZenMaid and Swept are built specifically for cleaners, so common tasks (recurring schedules, client follow-ups) are handled automatically.",
  },
  {
    question: "What software do professional maid services use?",
    answer:
      "The most popular platforms among professional maid services are Jobber, ZenMaid, and Housecall Pro. ZenMaid is the only software built exclusively for maid and house cleaning businesses, so it handles recurring scheduling and client communication in a way generic tools can't match. Larger maid services (10+ staff) often prefer Jobber for its polished client portal and Housecall Pro for its marketing automation.",
  },
  {
    question: "How much does cleaning business software cost?",
    answer:
      "Costs range from free (ZenMaid for up to 3 clients, Connecteam for up to 10 users) to $299+/month for enterprise-level platforms. For most small cleaning businesses, expect to pay $29â€“$99/month for a solid tool. Jobber starts at $49/month, ZenMaid at $49/month, and Swept at $30/month. These costs are typically recouped in the first 2â€“3 hours of admin time they save you each week.",
  },
  {
    question: "Can I run my cleaning business from my phone?",
    answer:
      "Yes â€” most modern cleaning business software has strong mobile apps. Jobber and Housecall Pro are consistently rated the best mobile apps in the category (both are 4.7+ stars on the App Store). Connecteam was designed mobile-first. For solo cleaners, ZenMaid and Acuity Scheduling both have capable mobile apps that let you manage bookings and communicate with clients entirely from your phone.",
  },
  {
    question: "Which cleaning software is best for commercial cleaning contracts?",
    answer:
      "Swept is the top choice for commercial cleaning businesses. It was built specifically for companies managing multiple client sites with shift-based workers, and its team communication, inspection checklists, and GPS verification features are the best in the category for commercial operations. Jobber and ServiceM8 are also strong options, particularly for commercial cleaning businesses that also need invoicing and quoting.",
  },
  {
    question: "Does cleaning business software integrate with QuickBooks?",
    answer:
      "Yes â€” most major cleaning business platforms integrate with QuickBooks Online. Jobber, Housecall Pro, ZenMaid, Swept, Launch27, and Connecteam all offer QuickBooks Online integration. ServiceM8 integrates with Xero (more common in Australia and the UK) and QuickBooks. If you're on QuickBooks Desktop rather than Online, Jobber is the most reliable integration partner.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Software for Cleaning Businesses in 2026",
  description:
    "Independent reviews of the best software for cleaning businesses including Jobber, Housecall Pro, ZenMaid, and more.",
  datePublished: "2026-06-01",
  dateModified: "2026-06-08",
  author: { "@type": "Organization", name: "CleaningStack", url: "https://cleaning-software-reviews.vercel.app" },
  publisher: { "@type": "Organization", name: "CleaningStack", url: "https://cleaning-software-reviews.vercel.app" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span>ðŸ§¹</span> Updated June 2026 Â· 8 tools reviewed
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Best Software for Your <span className="text-green-400">Cleaning Business</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We&apos;ve tested every major cleaning business tool so you don&apos;t have to. Take our
            60-second quiz for a personalised recommendation, or scroll to compare them all.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#quiz" className="btn-primary text-base px-8 py-4">
              Find My Software in 60 Seconds â†’
            </a>
            <a
              href="#comparison"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Compare All Tools
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-slate-800 text-white py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center text-sm">
            <div>
              <strong className="text-green-400 text-lg">8</strong> tools compared
            </div>
            <div>
              <strong className="text-green-400 text-lg">200+</strong> hours of testing
            </div>
            <div>
              <strong className="text-green-400 text-lg">100%</strong> independent reviews
            </div>
            <div>
              <strong className="text-green-400 text-lg">June 2026</strong> last updated
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Quiz section */}
        <section id="quiz" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Not Sure Which Tool You Need?</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Answer 5 quick questions and we&apos;ll match you with the 2â€“3 tools best suited to your
              specific business, budget, and pain points.
            </p>
          </div>
          <SoftwareRecommender />
        </section>

        {/* Quick picks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Top Picks at a Glance</h2>
          <p className="text-slate-500 mb-6">Short on time? Here&apos;s where each tool shines most.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Best Overall",
                tool: "Jobber",
                reason: "Most polished all-in-one for small teams",
                href: "/jobber-review-cleaning-business",
                link: affiliateLinks.jobber,
              },
              {
                label: "Best for Maid Services",
                tool: "ZenMaid",
                reason: "Built exclusively for residential cleaning",
                href: "/zenmaid-review",
                link: affiliateLinks.zenMaid,
              },
              {
                label: "Best for Teams",
                tool: "Swept",
                reason: "Top-tier communication & inspection tools",
                href: "/swept-review",
                link: affiliateLinks.swept,
              },
              {
                label: "Best for Growth",
                tool: "Housecall Pro",
                reason: "Built-in review automation & marketing",
                href: "/housecall-pro-review-cleaning-business",
                link: affiliateLinks.housecallPro,
              },
              {
                label: "Best Free Option",
                tool: "Connecteam",
                reason: "Free forever for up to 10 users",
                href: "/tools",
                link: affiliateLinks.connecteam,
              },
              {
                label: "Best for Australia",
                tool: "ServiceM8",
                reason: "Xero integration, local support",
                href: "/best-software-for-cleaning-business-australia",
                link: affiliateLinks.serviceM8,
              },
            ].map((pick) => (
              <div key={pick.tool} className="card hover:shadow-md transition-shadow">
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">
                  {pick.label}
                </p>
                <p className="text-xl font-bold text-slate-900 mb-1">{pick.tool}</p>
                <p className="text-sm text-slate-500 mb-4">{pick.reason}</p>
                <div className="flex gap-2">
                  <Link href={pick.href} className="text-sm text-green-600 hover:underline">
                    Read review
                  </Link>
                  <span className="text-slate-300">Â·</span>
                  <Link
                    href={pick.link}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-sm text-slate-500 hover:text-slate-700"
                  >
                    Visit site â†’
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Full comparison table */}
        <section id="comparison" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Full Comparison: All 8 Tools</h2>
          <p className="text-slate-500 mb-1">Scroll right on mobile to see all columns.</p>
          <ComparisonTable tools={tools} />
          <p className="text-xs text-slate-400 mt-2">
            Prices shown are starting monthly prices. Last verified June 2026.
          </p>
        </section>

        {/* How we review section */}
        <section className="mb-16 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Review Cleaning Business Software</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-600">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">ðŸ” What we look for</h3>
              <ul className="space-y-1">
                <li>â€¢ Ease of use for non-technical owners</li>
                <li>â€¢ Scheduling and recurring job management</li>
                <li>â€¢ Invoicing and payment collection</li>
                <li>â€¢ Mobile app quality (tested on iOS and Android)</li>
                <li>â€¢ Value for money at each pricing tier</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">âœ… Our standards</h3>
              <ul className="space-y-1">
                <li>â€¢ We sign up for every tool and test it hands-on</li>
                <li>â€¢ Ratings reflect real-world use, not marketing claims</li>
                <li>â€¢ We include honest cons â€” every tool has weaknesses</li>
                <li>â€¢ Affiliate relationships do not influence rankings</li>
                <li>â€¢ We update reviews when pricing or features change</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-6">
            CleaningStack earns commissions from affiliate links. This does not affect the order of our
            recommendations.{" "}
            <Link href="/affiliate-disclosure" className="underline">
              Read our disclosure
            </Link>
            .
          </p>
        </section>

        {/* Category links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Browse by Business Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Solo Cleaners",
                href: "/best-software-for-solo-cleaner",
                desc: "Just starting out? Find tools that won't break the bank.",
              },
              {
                title: "Maid Services",
                href: "/best-software-for-maid-service",
                desc: "Residential house cleaning businesses, 1â€“15 staff.",
              },
              {
                title: "Commercial Cleaning",
                href: "/best-software-for-commercial-cleaning-business",
                desc: "Office and commercial site cleaning with multiple contracts.",
              },
              {
                title: "Small Teams",
                href: "/best-software-for-small-cleaning-business",
                desc: "2â€“10 staff, ready to get organised and grow.",
              },
              {
                title: "Australian Businesses",
                href: "/best-software-for-cleaning-business-australia",
                desc: "GST-ready, Xero-friendly, local support.",
              },
              {
                title: "Free Options Only",
                href: "/best-free-software-for-cleaning-business",
                desc: "No budget? We list what actually works for free.",
              },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block p-5 rounded-xl border border-slate-200 hover:border-green-300 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-green-700 mb-1 flex items-center gap-1">
                  {cat.title}
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
                <p className="text-sm text-slate-500">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <FAQSection faqs={homepageFaqs} />

        {/* Final CTA */}
        <section className="mt-12 bg-slate-900 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Still Not Sure? Take the Quiz</h2>
          <p className="text-slate-300 mb-6">
            Answer 5 questions and get a personalised recommendation in under a minute.
          </p>
          <a href="#quiz" className="btn-primary text-base px-8 py-4">
            Find My Software â†’
          </a>
        </section>
      </div>
    </>
  );
}

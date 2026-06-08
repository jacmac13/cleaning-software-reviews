import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "About CleaningStack: How We Review Cleaning Business Software",
  description:
    "CleaningStack reviews cleaning business software honestly, with hands-on testing and no sponsored rankings. Learn about our methodology and how we choose our picks.",
  alternates: { canonical: "https://cleaning-software-reviews.vercel.app/about" },
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">About CleaningStack</h1>

      <div className="prose-clean">
        <p>
          CleaningStack exists because most software review sites are useless for cleaning business owners. They&apos;re written by generalists who&apos;ve never run a cleaning round, tested by people who don&apos;t understand the difference between a maid service and a commercial cleaning company, and ranked based on who pays the most affiliate commission â€” not what actually works.
        </p>

        <p>
          We built CleaningStack to fix that. Every platform we review has been hands-on tested with real cleaning business workflows: actual recurring schedule setups, real invoice generation, genuine mobile app use in the field, and customer support tested when it matters. Our scores reflect what we observed, not what a vendor told us.
        </p>

        <h2>How We Test</h2>

        <p>
          When we evaluate cleaning software, we test the things that cleaning business owners actually care about:
        </p>

        <ul>
          <li><strong>Recurring schedule setup</strong> â€” how easily can you set up a client who comes every other Tuesday at 9am?</li>
          <li><strong>Automated reminders</strong> â€” do they actually send, on time, with professional-looking messages?</li>
          <li><strong>Mobile app quality</strong> â€” is it something a part-time cleaner can figure out without a tutorial?</li>
          <li><strong>Invoice generation</strong> â€” how many clicks from completed job to sent invoice?</li>
          <li><strong>Support quality</strong> â€” what actually happens when you submit a ticket or start a chat?</li>
          <li><strong>Pricing honesty</strong> â€” what does the feature you actually need cost, not just the starting price?</li>
        </ul>

        <p>
          We also talk to cleaning business owners. The insights from operators who use these tools every day â€” the frustrations, the workarounds, the things they wish they&apos;d known before signing up â€” inform our reviews in ways that solo testing never fully captures.
        </p>

        <h2>Our Scoring System</h2>

        <p>
          We score each platform on six dimensions: ease of use, features (evaluated for cleaning businesses specifically, not general field service), value for money, customer support, mobile app, and a category-specific metric (team management for commercial cleaning tools, scheduling for general platforms, etc.).
        </p>

        <p>
          Our overall scores are genuine assessments. A 4.5 from us is not a polished 5 with caveats buried in footnotes â€” it reflects a platform with meaningful strengths and real limitations. We never inflate scores based on affiliate relationships.
        </p>

        <h2>On Affiliate Links</h2>

        <p>
          We&apos;re honest about this: CleaningStack earns affiliate commissions when you click through to a platform and subscribe. This is how we fund the site and the testing. It does not influence our rankings or written assessments.
        </p>

        <p>
          Every platform on this site is listed because we believe it&apos;s a genuinely good option for at least some cleaning businesses â€” not because of the commission rate. Platforms with lower commissions appear higher in our rankings when our testing says they deserve it (ZenMaid is a good example: excellent for maid services, not the highest affiliate payer).
        </p>

        <p>
          Our full affiliate disclosure is available on the{" "}
          <Link href="/affiliate-disclosure" className="text-green-600 hover:underline">
            affiliate disclosure page
          </Link>
          .
        </p>

        <h2>Who We Are</h2>

        <p>
          CleaningStack was built by a small team with backgrounds in field service operations and software product evaluation. We&apos;re not cleaning industry insiders â€” we&apos;re software people who spent significant time understanding the cleaning industry specifically to build this resource. We believe software reviews should be useful, which means they should be honest about limitations, not just enthusiastic about features.
        </p>

        <p>
          If you have feedback, found something wrong in our reviews, or want to tell us about your experience with a platform we&apos;ve covered, we&apos;d genuinely like to hear it.{" "}
          <Link href="/contact" className="text-green-600 hover:underline">
            Contact us here
          </Link>
          .
        </p>
      </div>

      <div className="mt-10 bg-green-50 rounded-xl p-6">
        <h2 className="font-bold text-slate-900 mb-2">Find the Right Software for Your Business</h2>
        <p className="text-sm text-slate-700 mb-4">
          Not sure where to start? Take our 5-question quiz and get a personalised recommendation in under 2 minutes.
        </p>
        <Link href="/#quiz" className="btn-primary inline-block">
          Take the Quiz â†’
        </Link>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | CleaningStack",
  description:
    "CleaningStack affiliate disclosure. How our affiliate relationships work and how they do (and don't) affect our reviews and rankings.",
  alternates: { canonical: "https://cleaningstack.com/affiliate-disclosure" },
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Affiliate Disclosure" }]} />

      <h1 className="text-3xl font-bold text-slate-900 mb-2">Affiliate Disclosure</h1>
      <p className="text-sm text-slate-400 mb-8">Last updated: June 2026</p>

      <div className="prose-clean">
        <p>
          CleaningStack is a review and comparison site for cleaning business software. We&apos;re transparent about how we make money because we think you deserve to know, and because our credibility depends on it.
        </p>

        <h2>How Affiliate Links Work</h2>
        <p>
          Some links on CleaningStack are affiliate links. When you click one of these links and subsequently subscribe to or purchase a software platform, CleaningStack earns a commission from the software company. You pay nothing extra — the commission comes from the software company&apos;s marketing budget, not from you.
        </p>
        <p>
          Affiliate links are marked with <code>rel=&quot;nofollow noopener noreferrer&quot;</code> and open in a new tab. They are typically the primary call-to-action buttons (e.g., &quot;Try Jobber Free for 14 Days&quot;). Regular links within article text to comparison or review pages are not affiliate links.
        </p>

        <h2>Which Platforms We Have Affiliate Relationships With</h2>
        <p>
          We currently have affiliate relationships with the following platforms reviewed on CleaningStack:
        </p>
        <ul>
          <li>Jobber</li>
          <li>Housecall Pro</li>
          <li>ZenMaid</li>
          <li>Swept</li>
          <li>Launch27</li>
          <li>Connecteam</li>
          <li>ServiceM8</li>
          <li>Acuity Scheduling</li>
        </ul>

        <h2>How Affiliate Relationships Affect Our Reviews</h2>
        <p>
          The short answer: they don&apos;t affect our scores or rankings. Here&apos;s why we can say that honestly:
        </p>
        <ul>
          <li>
            <strong>Our top picks aren&apos;t chosen based on commission rates.</strong> ZenMaid — one of our most recommended tools for maid services — pays lower commissions than several platforms ranked below it. We rank it higher because it&apos;s genuinely better for its target user.
          </li>
          <li>
            <strong>We include legitimate cons for every platform.</strong> A positive review that ignores real weaknesses doesn&apos;t help you make a good decision. We test for the downsides and report them honestly.
          </li>
          <li>
            <strong>Our quiz recommendations use scoring logic, not affiliate weighting.</strong> The tool recommender recommends based on your answers about team size, budget, and needs — not based on which tool pays better.
          </li>
        </ul>

        <h2>FTC Compliance (US Readers)</h2>
        <p>
          In accordance with the Federal Trade Commission&apos;s guidelines on endorsements and testimonials (16 CFR Part 255), CleaningStack discloses its material connections to the software platforms it reviews. The affiliate relationships described above constitute material connections under FTC guidelines.
        </p>

        <h2>ACCC Compliance (Australian Readers)</h2>
        <p>
          In accordance with the Australian Competition and Consumer Commission guidelines on digital platforms and influencer marketing, CleaningStack discloses its commercial relationships with software platforms. Our reviews comply with Australian Consumer Law requirements regarding honest and accurate representations.
        </p>

        <h2>UK ASA Compliance (UK Readers)</h2>
        <p>
          In accordance with the Advertising Standards Authority (ASA) and Committee of Advertising Practice (CAP) guidelines, CleaningStack clearly identifies commercially motivated content. Our affiliate relationships are disclosed as required under UK advertising regulations.
        </p>

        <h2>Questions</h2>
        <p>
          If you have questions about our affiliate relationships or how they affect any specific review or recommendation, please{" "}
          <a href="/contact" className="text-green-600 hover:underline">contact us</a>. We&apos;re happy to explain our methodology in detail.
        </p>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | CleaningStack",
  description:
    "CleaningStack privacy policy. How we collect, use, and protect your personal information.",
  alternates: { canonical: "https://cleaningstack.com/privacy-policy" },
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

      <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-slate-400 mb-8">Last updated: June 2026</p>

      <div className="prose-clean">
        <p>
          CleaningStack (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information when you use cleaningstack.com.
        </p>

        <h2>Information We Collect</h2>

        <h3>Information you provide</h3>
        <p>
          We do not currently operate an account system or collect personal information through sign-up forms. If you contact us via email, we retain your email address and the content of your message to respond to your enquiry.
        </p>

        <h3>Information collected automatically</h3>
        <p>
          Like most websites, CleaningStack collects certain information automatically when you visit, including:
        </p>
        <ul>
          <li>IP address (anonymised where technically possible)</li>
          <li>Browser type and operating system</li>
          <li>Pages visited and time spent on the site</li>
          <li>Referring URLs (how you arrived at our site)</li>
        </ul>
        <p>
          This information is collected via Google Analytics (with anonymised IPs) and is used only to understand how visitors use the site and to improve our content.
        </p>

        <h3>Cookies</h3>
        <p>
          We use cookies for the following purposes:
        </p>
        <ul>
          <li><strong>Analytics:</strong> Google Analytics cookies to understand site usage</li>
          <li><strong>Preferences:</strong> A cookie to remember if you have dismissed the affiliate disclosure banner</li>
        </ul>
        <p>
          You can control cookie settings in your browser at any time. Disabling analytics cookies will not affect your ability to use the site.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Understand which content is most useful to visitors and improve our reviews</li>
          <li>Respond to contact enquiries</li>
          <li>Monitor site performance and fix technical issues</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal information with third parties for marketing purposes.
        </p>

        <h2>Affiliate Links</h2>
        <p>
          CleaningStack contains affiliate links to software platforms. When you click an affiliate link and make a purchase or subscription, we may receive a commission. These links use tracking cookies to attribute referrals. The affiliate platforms (including Jobber, Housecall Pro, ZenMaid, and others) have their own privacy policies governing how they handle your data once you visit their sites.
        </p>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services on this site:</p>
        <ul>
          <li><strong>Google Analytics:</strong> Website usage analytics. Google&apos;s privacy policy applies.</li>
          <li><strong>Google Tag Manager:</strong> Tag management. Google&apos;s privacy policy applies.</li>
        </ul>

        <h2>Your Rights</h2>

        <h3>Australian users (Privacy Act 1988)</h3>
        <p>
          Under the Australian Privacy Act 1988 and the Australian Privacy Principles, you have the right to access personal information we hold about you, request corrections to inaccurate information, and make a complaint about how we handle your personal information. Contact us at jacmac13@outlook.com to exercise these rights.
        </p>

        <h3>UK and European users (UK GDPR / GDPR)</h3>
        <p>
          If you are located in the UK or European Economic Area, you have rights under the UK GDPR and EU GDPR including the right to access, correct, delete, or restrict processing of your personal data, and the right to data portability. To exercise these rights, contact us at jacmac13@outlook.com. We process data on the legal basis of legitimate interests (analytics, site improvement) and contract performance (responding to enquiries).
        </p>

        <h3>California users (CCPA)</h3>
        <p>
          California residents have the right to know what personal information we collect, the right to delete personal information, and the right to opt out of the sale of personal information. We do not sell personal information. Contact us at jacmac13@outlook.com for CCPA-related requests.
        </p>

        <h2>Data Retention</h2>
        <p>
          Analytics data is retained for 26 months as configured in Google Analytics. Contact emails are retained for as long as necessary to respond to your enquiry and for a reasonable period thereafter.
        </p>

        <h2>Children</h2>
        <p>
          CleaningStack is not directed at children under 13. We do not knowingly collect personal information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Material changes will be noted on this page with an updated date. Continued use of the site following changes constitutes acceptance of the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy-related enquiries, contact us at: <a href="mailto:jacmac13@outlook.com" className="text-green-600 hover:underline">jacmac13@outlook.com</a>
        </p>
      </div>
    </div>
  );
}

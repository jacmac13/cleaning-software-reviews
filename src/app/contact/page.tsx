import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact CleaningStack",
  description:
    "Contact the CleaningStack team with questions, feedback, or corrections about our cleaning business software reviews.",
  alternates: { canonical: "https://cleaningstack.com/contact" },
};

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <h1 className="text-3xl font-bold text-slate-900 mb-4">Contact Us</h1>
      <p className="text-slate-600 mb-8">
        Have a question about one of our reviews? Found something that needs correcting? Want to share your experience with cleaning business software? We&apos;d genuinely like to hear from you.
      </p>

      <div className="card mb-8">
        <h2 className="font-bold text-slate-900 mb-3">Get in Touch</h2>
        <p className="text-sm text-slate-600 mb-4">
          The best way to reach us is by email. We typically respond within 1–2 business days.
        </p>
        <a
          href="mailto:jacmac13@outlook.com"
          className="btn-primary inline-block"
        >
          Email Us →
        </a>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="font-semibold text-slate-900 mb-1">Review corrections</h2>
          <p className="text-sm text-slate-600">
            If something in one of our reviews is factually incorrect or outdated — pricing, features, anything — please let us know. We update reviews regularly and corrections are genuinely appreciated.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-1">Software suggestions</h2>
          <p className="text-sm text-slate-600">
            Using a platform we haven&apos;t reviewed? We consider adding tools to CleaningStack regularly. Tell us about what you use and why you rate it.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900 mb-1">Business enquiries</h2>
          <p className="text-sm text-slate-600">
            For affiliate partnerships, media coverage, or business enquiries, please use the same email address with a clear subject line.
          </p>
        </div>
      </div>
    </div>
  );
}

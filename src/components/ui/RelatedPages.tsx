import Link from "next/link";

interface RelatedPage {
  title: string;
  href: string;
  description: string;
}

interface RelatedPagesProps {
  pages: RelatedPage[];
  title?: string;
}

export default function RelatedPages({ pages, title = "Related Comparisons" }: RelatedPagesProps) {
  return (
    <section className="mt-12 pt-8 border-t border-slate-100">
      <h2 className="text-xl font-bold text-slate-900 mb-5">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group block p-4 rounded-xl border border-slate-200 hover:border-green-300 hover:shadow-sm transition-all"
          >
            <p className="font-semibold text-slate-900 group-hover:text-green-700 text-sm mb-1 flex items-center gap-1">
              {page.title}
              <svg
                className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">{page.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

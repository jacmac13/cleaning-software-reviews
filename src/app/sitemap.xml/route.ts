import { NextResponse } from "next/server";

const BASE = "https://cleaning-software-reviews.vercel.app";

const pages = [
  { url: `${BASE}/`, changefreq: "weekly", priority: "1.0" },
  { url: `${BASE}/tools`, changefreq: "weekly", priority: "0.9" },
  { url: `${BASE}/best-software-for-cleaning-business`, changefreq: "monthly", priority: "1.0" },
  { url: `${BASE}/best-software-for-maid-service`, changefreq: "monthly", priority: "0.9" },
  { url: `${BASE}/best-software-for-commercial-cleaning-business`, changefreq: "monthly", priority: "0.9" },
  { url: `${BASE}/best-software-for-residential-cleaning-business`, changefreq: "monthly", priority: "0.9" },
  { url: `${BASE}/best-software-for-small-cleaning-business`, changefreq: "monthly", priority: "0.85" },
  { url: `${BASE}/best-software-for-solo-cleaner`, changefreq: "monthly", priority: "0.85" },
  { url: `${BASE}/best-free-software-for-cleaning-business`, changefreq: "monthly", priority: "0.85" },
  { url: `${BASE}/best-scheduling-software-for-cleaning-business`, changefreq: "monthly", priority: "0.85" },
  { url: `${BASE}/best-invoicing-software-for-cleaning-business`, changefreq: "monthly", priority: "0.85" },
  { url: `${BASE}/best-crm-for-cleaning-business`, changefreq: "monthly", priority: "0.85" },
  { url: `${BASE}/best-app-for-cleaning-business`, changefreq: "monthly", priority: "0.85" },
  { url: `${BASE}/cheapest-software-for-cleaning-business`, changefreq: "monthly", priority: "0.8" },
  { url: `${BASE}/cleaning-business-software-for-beginners`, changefreq: "monthly", priority: "0.8" },
  { url: `${BASE}/best-software-for-cleaning-business-australia`, changefreq: "monthly", priority: "0.8" },
  { url: `${BASE}/best-software-for-cleaning-business-uk`, changefreq: "monthly", priority: "0.8" },
  { url: `${BASE}/jobber-vs-housecall-pro-cleaning-business`, changefreq: "monthly", priority: "0.85" },
  { url: `${BASE}/jobber-vs-zenmaid`, changefreq: "monthly", priority: "0.85" },
  { url: `${BASE}/housecall-pro-vs-zenmaid`, changefreq: "monthly", priority: "0.8" },
  { url: `${BASE}/swept-vs-jobber-cleaning-business`, changefreq: "monthly", priority: "0.8" },
  { url: `${BASE}/launch27-vs-jobber`, changefreq: "monthly", priority: "0.75" },
  { url: `${BASE}/zenmaid-vs-swept`, changefreq: "monthly", priority: "0.75" },
  { url: `${BASE}/connecteam-vs-jobber-cleaning-business`, changefreq: "monthly", priority: "0.75" },
  { url: `${BASE}/servicem8-vs-jobber-australia`, changefreq: "monthly", priority: "0.75" },
  { url: `${BASE}/jobber-review-cleaning-business`, changefreq: "monthly", priority: "0.9" },
  { url: `${BASE}/zenmaid-review`, changefreq: "monthly", priority: "0.9" },
  { url: `${BASE}/housecall-pro-review-cleaning-business`, changefreq: "monthly", priority: "0.85" },
  { url: `${BASE}/swept-review`, changefreq: "monthly", priority: "0.8" },
  { url: `${BASE}/launch27-review`, changefreq: "monthly", priority: "0.8" },
  { url: `${BASE}/about`, changefreq: "yearly", priority: "0.5" },
  { url: `${BASE}/contact`, changefreq: "yearly", priority: "0.4" },
  { url: `${BASE}/privacy-policy`, changefreq: "yearly", priority: "0.3" },
  { url: `${BASE}/affiliate-disclosure`, changefreq: "yearly", priority: "0.4" },
];

export function GET() {
  const entries = pages
    .map(
      (p) =>
        `  <url>\n    <loc>${p.url}</loc>\n    <lastmod>2026-06-08</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Robots-Tag": "noindex",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

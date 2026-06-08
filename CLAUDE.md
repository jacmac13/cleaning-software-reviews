# CleaningStack — Project Documentation

## What This Site Is

CleaningStack is a programmatic affiliate review site for cleaning business software. It helps small cleaning business owners (solo operators to ~20 staff) choose the right software from a curated set of reviewed platforms. The business model is affiliate commissions — when a visitor clicks through and subscribes to a platform, CleaningStack earns a commission.

**Live URL:** https://cleaningstack.com (replace with actual domain before deploy)
**Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Vercel deployment

---

## Directory Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage with quiz
│   ├── layout.tsx                # Root layout (Header, Footer, GTM)
│   ├── globals.css               # Design system (Tailwind + custom classes)
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── robots.ts                 # Robots.txt
│   ├── tools/                    # /tools — all tools index page
│   ├── best-software-for-cleaning-business/   # Primary landing page
│   ├── [comparison pages]/       # 14 comparison pages
│   ├── [head-to-head pages]/     # 8 head-to-head pages
│   ├── [review pages]/           # 5 review pages
│   ├── about/
│   ├── contact/
│   ├── privacy-policy/
│   └── affiliate-disclosure/
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Nav with dropdowns ("use client")
│   │   ├── Footer.tsx
│   │   └── AffiliateDisclosureBanner.tsx  # Dismissible ("use client")
│   ├── ui/
│   │   ├── StarRating.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── QuickAnswerBox.tsx
│   │   ├── FAQSection.tsx        # Accordion with FAQPage schema ("use client")
│   │   ├── Breadcrumbs.tsx       # With BreadcrumbList schema
│   │   ├── RelatedPages.tsx
│   │   └── ToolCard.tsx
│   ├── SoftwareRecommender.tsx   # 5-step quiz ("use client")
│   ├── ComparisonPageTemplate.tsx
│   ├── HeadToHeadTemplate.tsx
│   └── ReviewPageTemplate.tsx
├── data/
│   ├── tools.ts                  # Single source of truth for all 8 tools
│   └── pages.ts                  # Page metadata definitions
└── config/
    └── affiliateLinks.ts         # ALL affiliate links in one place
```

---

## The 8 Tools

| Slug | Name | Best For |
|------|------|----------|
| `jobber` | Jobber | All-in-one for small/medium cleaning businesses |
| `housecall-pro` | Housecall Pro | Growth-focused businesses (review automation) |
| `zenmaid` | ZenMaid | Residential maid services |
| `swept` | Swept | Commercial cleaning with dispersed staff |
| `launch27` | Launch27 | Online booking conversion for residential cleaning |
| `connecteam` | Connecteam | Free team management (up to 10 users) |
| `servicem8` | ServiceM8 | Australia/UK cleaning businesses (Xero integration) |
| `acuity` | Acuity Scheduling | Solo cleaners needing simple booking |

---

## Affiliate Link Configuration

**Every affiliate link is in one file:** `src/config/affiliateLinks.ts`

```ts
export const affiliateLinks = {
  jobber: "[AFFILIATE_LINK_JOBBER]",
  housecallPro: "[AFFILIATE_LINK_HOUSECALL_PRO]",
  zenMaid: "[AFFILIATE_LINK_ZENMAID]",
  swept: "[AFFILIATE_LINK_SWEPT]",
  launch27: "[AFFILIATE_LINK_LAUNCH27]",
  connecteam: "[AFFILIATE_LINK_CONNECTEAM]",
  serviceM8: "[AFFILIATE_LINK_SERVICEM8]",
  acuity: "[AFFILIATE_LINK_ACUITY]",
};
```

**To deploy:** replace each `[AFFILIATE_LINK_*]` placeholder with the real affiliate URL from each program's dashboard.

All pages reference `tool.affiliateLinkKey` → looked up in `affiliateLinks` → `rel="nofollow noopener noreferrer"` applied automatically by templates.

---

## Manual Fill-Ins Before Deploy

The following placeholders must be replaced before going live:

| Placeholder | File | What to Replace With |
|-------------|------|---------------------|
| `[AFFILIATE_LINK_JOBBER]` | `src/config/affiliateLinks.ts` | Real Jobber affiliate URL |
| `[AFFILIATE_LINK_HOUSECALL_PRO]` | `src/config/affiliateLinks.ts` | Real Housecall Pro affiliate URL |
| `[AFFILIATE_LINK_ZENMAID]` | `src/config/affiliateLinks.ts` | Real ZenMaid affiliate URL |
| `[AFFILIATE_LINK_SWEPT]` | `src/config/affiliateLinks.ts` | Real Swept affiliate URL |
| `[AFFILIATE_LINK_LAUNCH27]` | `src/config/affiliateLinks.ts` | Real Launch27 affiliate URL |
| `[AFFILIATE_LINK_CONNECTEAM]` | `src/config/affiliateLinks.ts` | Real Connecteam affiliate URL |
| `[AFFILIATE_LINK_SERVICEM8]` | `src/config/affiliateLinks.ts` | Real ServiceM8 affiliate URL |
| `[AFFILIATE_LINK_ACUITY]` | `src/config/affiliateLinks.ts` | Real Acuity affiliate URL |
| `GTM-XXXXXXX` | `src/app/layout.tsx` | Real Google Tag Manager ID |
| `YOUR_GSC_VERIFICATION_CODE` | `src/app/layout.tsx` | Real Google Search Console meta tag value |
| `[CONTACT_EMAIL]` | `src/app/contact/page.tsx`, `privacy-policy/page.tsx`, `affiliate-disclosure/page.tsx` | Real contact email address |
| `https://cleaningstack.com` | `src/app/sitemap.ts`, all page metadata | Real domain if different |

---

## SEO Architecture

### Page structure
Every page has:
- `Metadata` export with `title`, `description`, and `alternates.canonical`
- Breadcrumb navigation (with BreadcrumbList JSON-LD schema)
- JSON-LD structured data (Review, FAQPage, or Article depending on page type)
- `lastUpdated` date displayed

### JSON-LD schemas used
- **FAQPage** — all FAQ sections (injected by `FAQSection` component)
- **Article** — comparison and listing pages
- **Review** — individual tool review pages
- **BreadcrumbList** — all pages (injected by `Breadcrumbs` component)

### Internal linking
The site follows a hub-and-spoke structure:
- Homepage → all comparison categories
- Best Overall page → head-to-head pages + review pages
- Each comparison page → review pages for featured tools
- Each review page → related comparisons
- Head-to-head pages → individual review pages

---

## Page Templates

### ComparisonPageTemplate
**Used for:** `/best-software-for-*`, `/best-*-for-cleaning-business` pages

Props:
- `title`, `intro`
- `topPickSlug`, `topPickReason` — drives the QuickAnswerBox
- `tools: Tool[]` — drives the ComparisonTable
- `toolSections[]` — one long-form section per tool with `sectionContent` and `verdict`
- `howWeChose` — paragraph explaining methodology
- `finalRecommendation`
- `faqs[]`, `relatedPages[]`, `breadcrumbs[]`

### HeadToHeadTemplate
**Used for:** `/jobber-vs-*`, `/zenmaid-vs-*` etc.

Props:
- `toolA`, `toolB` (Tool objects)
- `verdict: "a" | "b" | "tie"`
- `verdictReason`
- `toolAWins[]`, `toolBWins[]` — feature comparison bullets
- `toolAFor`, `toolBFor` — who each tool is best for
- `pricingAnalysis` — paragraph on pricing comparison

### ReviewPageTemplate
**Used for:** `/jobber-review-*`, `/zenmaid-review`, etc.

Props:
- `tool` (Tool object)
- `intro`, `detailedReview[]` (array of paragraphs)
- `whoItIsFor`, `whoShouldAvoid`
- `pricingDetail`
- `verdict`
- `overallScore`, `scoreBreakdown[]`
- `faqs[]`, `relatedPages[]`, `breadcrumbs[]`

---

## Adding a New Tool

1. Add the tool to `src/data/tools.ts` following the existing `Tool` interface
2. Add the affiliate link to `src/config/affiliateLinks.ts`
3. Create a review page at `src/app/[tool-name]-review/page.tsx` using `ReviewPageTemplate`
4. Update relevant comparison pages to include the new tool
5. Add to the sitemap in `src/app/sitemap.ts`
6. Update `src/components/layout/Header.tsx` and `Footer.tsx` navigation if relevant

---

## Adding a New Comparison Page

1. Create the directory at `src/app/[page-slug]/`
2. Create `page.tsx` using `ComparisonPageTemplate` or `HeadToHeadTemplate`
3. Import tools with `getToolBySlug()` from `@/data/tools`
4. Add to `src/app/sitemap.ts`
5. Add internal links from related pages

---

## Niche-Cloning Instructions

To clone this site structure for a different service business niche (e.g., landscaping software, HVAC software, plumbing software):

1. **Update `src/data/tools.ts`** — replace the 8 cleaning tools with 6–10 tools for the new niche. Keep the `Tool` interface identical — just change the data.

2. **Update `src/config/affiliateLinks.ts`** — replace all affiliate link placeholders with new niche platform affiliate URLs.

3. **Update `src/data/pages.ts`** — update page slugs, titles, and target keywords for the new niche.

4. **Rewrite page content** — each comparison and review page passes content as props to templates. Update the `intro`, `detailedReview`, `sectionContent`, `faqs`, and other text props to reflect the new niche.

5. **Update brand** — change "CleaningStack" references in layout, metadata, and content to the new brand name.

6. **Update `sitemap.ts`** — update all URLs to the new domain.

7. **Update `globals.css`** — optionally change the color scheme (navy #0F172A + green #22C55E by default).

The templates, quiz logic, UI components, and SEO architecture are fully reusable across niches. The only changes needed are data, content, and branding.

**Quiz customisation:** The `SoftwareRecommender` component in `src/components/SoftwareRecommender.tsx` contains the 5-step quiz and scoring logic. Update the step questions, options, and the `getRecommendations()` scoring function to match the new niche's relevant buying criteria.

---

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Type check
npx tsc --noEmit

# Deploy (Vercel)
vercel deploy --prod
```

---

## Design System

Colors:
- Primary navy: `#0F172A` (slate-900)
- Accent green: `#22C55E` (green-500)
- Background: `#FFFFFF` / `#F8FAFC` (slate-50)

Custom Tailwind classes (defined in `globals.css`):
- `.btn-primary` — green CTA button
- `.btn-secondary` — dark navy button
- `.btn-outline` — outlined variant
- `.card` — white card with border and shadow
- `.badge` — small label tag
- `.prose-clean` — article text styling with h2/h3/p/ul
- `.section-heading` — section header with accent underline

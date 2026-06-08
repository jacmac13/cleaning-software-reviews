export interface PageDefinition {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  h1: string;
  featuredTools: string[];
  pageType: "comparison" | "head-to-head" | "review" | "trust" | "home" | "tools-list";
  relatedPages: string[];
}

export const pages: PageDefinition[] = [
  {
    slug: "/",
    title: "Best Cleaning Business Software 2026",
    metaTitle: "Best Cleaning Business Software 2026 | CleaningStack",
    metaDescription:
      "Find the best software for your cleaning business in 2026. We review Jobber, Housecall Pro, ZenMaid, Swept and more. Take our 60-second quiz for a personalised pick.",
    targetKeyword: "best software for cleaning business",
    h1: "Best Software for Cleaning Businesses in 2026",
    featuredTools: ["jobber", "housecall-pro", "zenmaid", "swept", "connecteam"],
    pageType: "home",
    relatedPages: [
      "/best-software-for-cleaning-business",
      "/best-free-software-for-cleaning-business",
      "/best-software-for-solo-cleaner",
      "/best-software-for-maid-service",
    ],
  },
  {
    slug: "/tools",
    title: "All Cleaning Business Software Tools",
    metaTitle: "Cleaning Business Software: All 8 Tools Reviewed 2026",
    metaDescription:
      "Complete list of cleaning business software reviewed by CleaningStack — Jobber, Housecall Pro, ZenMaid, Swept, Launch27, Connecteam, ServiceM8, and Acuity.",
    targetKeyword: "cleaning business software tools",
    h1: "All Cleaning Business Software Tools",
    featuredTools: ["jobber", "housecall-pro", "zenmaid", "swept", "launch27", "connecteam", "servicem8", "acuity"],
    pageType: "tools-list",
    relatedPages: [
      "/best-software-for-cleaning-business",
      "/best-free-software-for-cleaning-business",
      "/cheapest-software-for-cleaning-business",
    ],
  },
  {
    slug: "/best-software-for-cleaning-business",
    title: "Best Software for Cleaning Business 2026",
    metaTitle: "Best Software for Cleaning Business 2026 [Reviewed]",
    metaDescription:
      "Our top picks for the best cleaning business software in 2026. Honest reviews of Jobber, Housecall Pro, ZenMaid and more. Find the right tool for your business.",
    targetKeyword: "best software for cleaning business",
    h1: "Best Software for Cleaning Businesses in 2026: Our Top Picks",
    featuredTools: ["jobber", "housecall-pro", "zenmaid", "swept", "launch27", "connecteam"],
    pageType: "comparison",
    relatedPages: [
      "/best-free-software-for-cleaning-business",
      "/best-scheduling-software-for-cleaning-business",
      "/best-invoicing-software-for-cleaning-business",
      "/best-software-for-maid-service",
    ],
  },
  {
    slug: "/best-software-for-cleaning-business-australia",
    title: "Best Cleaning Business Software Australia 2026",
    metaTitle: "Best Cleaning Business Software Australia 2026",
    metaDescription:
      "Best software for Australian cleaning businesses in 2026. Includes ServiceM8 (with Xero support), Jobber, and tools suited to AU pricing, GST, and local support.",
    targetKeyword: "best software for cleaning business australia",
    h1: "Best Software for Cleaning Businesses in Australia 2026",
    featuredTools: ["servicem8", "jobber", "swept", "zenmaid", "connecteam"],
    pageType: "comparison",
    relatedPages: [
      "/servicem8-vs-jobber-australia",
      "/best-software-for-cleaning-business",
      "/best-scheduling-software-for-cleaning-business",
      "/best-invoicing-software-for-cleaning-business",
    ],
  },
  {
    slug: "/best-software-for-cleaning-business-uk",
    title: "Best Cleaning Business Software UK 2026",
    metaTitle: "Best Cleaning Business Software UK 2026 [Reviewed]",
    metaDescription:
      "Best software for UK cleaning businesses in 2026. We cover tools with UK support, GBP pricing, and VAT-ready invoicing including Jobber, ServiceM8, and Swept.",
    targetKeyword: "best software for cleaning business uk",
    h1: "Best Software for Cleaning Businesses in the UK 2026",
    featuredTools: ["servicem8", "jobber", "swept", "housecall-pro", "zenmaid"],
    pageType: "comparison",
    relatedPages: [
      "/best-software-for-cleaning-business",
      "/best-scheduling-software-for-cleaning-business",
      "/jobber-review-cleaning-business",
      "/swept-review",
    ],
  },
  {
    slug: "/best-scheduling-software-for-cleaning-business",
    title: "Best Scheduling Software for Cleaning Businesses 2026",
    metaTitle: "Best Scheduling Software for Cleaning Business 2026",
    metaDescription:
      "The best scheduling software for cleaning businesses in 2026. Compare Jobber, Housecall Pro, ZenMaid and Acuity on scheduling features, pricing, and ease of use.",
    targetKeyword: "best scheduling software for cleaning business",
    h1: "Best Scheduling Software for Cleaning Businesses in 2026",
    featuredTools: ["jobber", "zenmaid", "housecall-pro", "acuity", "swept"],
    pageType: "comparison",
    relatedPages: [
      "/best-software-for-cleaning-business",
      "/best-invoicing-software-for-cleaning-business",
      "/best-app-for-cleaning-business",
      "/jobber-review-cleaning-business",
    ],
  },
  {
    slug: "/best-invoicing-software-for-cleaning-business",
    title: "Best Invoicing Software for Cleaning Business 2026",
    metaTitle: "Best Invoicing Software for Cleaning Business 2026",
    metaDescription:
      "The best invoicing software for cleaning businesses in 2026. Get paid faster with Jobber, Housecall Pro, ZenMaid, or ServiceM8. Compare pricing and features.",
    targetKeyword: "best invoicing software for cleaning business",
    h1: "Best Invoicing Software for Cleaning Businesses in 2026",
    featuredTools: ["jobber", "housecall-pro", "zenmaid", "servicem8"],
    pageType: "comparison",
    relatedPages: [
      "/best-scheduling-software-for-cleaning-business",
      "/best-crm-for-cleaning-business",
      "/best-software-for-cleaning-business",
      "/jobber-review-cleaning-business",
    ],
  },
  {
    slug: "/best-free-software-for-cleaning-business",
    title: "Best Free Software for Cleaning Businesses 2026",
    metaTitle: "Best Free Cleaning Business Software 2026 [No Cost]",
    metaDescription:
      "Free software for cleaning businesses that actually works. ZenMaid's free plan, Connecteam's free tier, and more — no credit card needed. Updated for 2026.",
    targetKeyword: "best free software for cleaning business",
    h1: "Best Free Software for Cleaning Businesses in 2026",
    featuredTools: ["connecteam", "zenmaid", "acuity"],
    pageType: "comparison",
    relatedPages: [
      "/cheapest-software-for-cleaning-business",
      "/best-software-for-solo-cleaner",
      "/best-software-for-cleaning-business-for-beginners",
      "/zenmaid-review",
    ],
  },
  {
    slug: "/best-crm-for-cleaning-business",
    title: "Best CRM for Cleaning Businesses 2026",
    metaTitle: "Best CRM for Cleaning Business 2026 [Top 5 Picks]",
    metaDescription:
      "The best CRM software for cleaning businesses in 2026. Manage clients, track leads, and build recurring revenue with Jobber, Housecall Pro, or ZenMaid.",
    targetKeyword: "best crm for cleaning business",
    h1: "Best CRM for Cleaning Businesses in 2026",
    featuredTools: ["jobber", "housecall-pro", "zenmaid", "launch27"],
    pageType: "comparison",
    relatedPages: [
      "/best-software-for-cleaning-business",
      "/best-invoicing-software-for-cleaning-business",
      "/jobber-review-cleaning-business",
      "/housecall-pro-review-cleaning-business",
    ],
  },
  {
    slug: "/best-app-for-cleaning-business",
    title: "Best App for Cleaning Businesses 2026",
    metaTitle: "Best App for Cleaning Business 2026 [Mobile-First]",
    metaDescription:
      "The best mobile apps for cleaning businesses in 2026. Manage jobs, invoice clients, and schedule your team from your phone. Compare Jobber, Housecall Pro, and more.",
    targetKeyword: "best app for cleaning business",
    h1: "Best App for Cleaning Businesses in 2026",
    featuredTools: ["jobber", "housecall-pro", "connecteam", "zenmaid", "servicem8"],
    pageType: "comparison",
    relatedPages: [
      "/best-scheduling-software-for-cleaning-business",
      "/best-software-for-solo-cleaner",
      "/best-software-for-small-cleaning-business",
      "/jobber-review-cleaning-business",
    ],
  },
  {
    slug: "/best-software-for-small-cleaning-business",
    title: "Best Software for Small Cleaning Businesses 2026",
    metaTitle: "Best Software for Small Cleaning Business 2026",
    metaDescription:
      "Best software picks for small cleaning businesses with 2–15 staff in 2026. Honest comparison of Jobber, ZenMaid, Swept, and Housecall Pro for small teams.",
    targetKeyword: "best software for small cleaning business",
    h1: "Best Software for Small Cleaning Businesses in 2026",
    featuredTools: ["jobber", "zenmaid", "swept", "housecall-pro", "connecteam"],
    pageType: "comparison",
    relatedPages: [
      "/best-software-for-solo-cleaner",
      "/best-software-for-cleaning-business",
      "/best-free-software-for-cleaning-business",
      "/best-software-for-maid-service",
    ],
  },
  {
    slug: "/best-software-for-solo-cleaner",
    title: "Best Software for Solo Cleaners 2026",
    metaTitle: "Best Software for Solo Cleaners 2026 [Affordable]",
    metaDescription:
      "Best software for solo cleaners in 2026. Affordable, easy-to-use tools for one-person cleaning businesses — including free options. Updated June 2026.",
    targetKeyword: "best software for solo cleaner",
    h1: "Best Software for Solo Cleaners in 2026",
    featuredTools: ["zenmaid", "acuity", "connecteam", "servicem8"],
    pageType: "comparison",
    relatedPages: [
      "/best-free-software-for-cleaning-business",
      "/cheapest-software-for-cleaning-business",
      "/best-software-for-maid-service",
      "/cleaning-business-software-for-beginners",
    ],
  },
  {
    slug: "/best-software-for-maid-service",
    title: "Best Software for Maid Services 2026",
    metaTitle: "Best Software for Maid Services 2026 [Expert Picks]",
    metaDescription:
      "The best software for maid services and house cleaning businesses in 2026. ZenMaid, Jobber, and more reviewed for recurring scheduling, client management, and team tools.",
    targetKeyword: "best software for maid service",
    h1: "Best Software for Maid Services in 2026",
    featuredTools: ["zenmaid", "jobber", "housecall-pro", "acuity", "connecteam"],
    pageType: "comparison",
    relatedPages: [
      "/zenmaid-review",
      "/best-software-for-residential-cleaning-business",
      "/best-software-for-solo-cleaner",
      "/jobber-vs-zenmaid",
    ],
  },
  {
    slug: "/best-software-for-residential-cleaning-business",
    title: "Best Software for Residential Cleaning Businesses 2026",
    metaTitle: "Best Residential Cleaning Business Software 2026",
    metaDescription:
      "Best software for residential cleaning businesses in 2026. Compare tools built for house cleaning and maid services — scheduling, client management, and online booking.",
    targetKeyword: "best software for residential cleaning business",
    h1: "Best Software for Residential Cleaning Businesses in 2026",
    featuredTools: ["zenmaid", "jobber", "housecall-pro", "launch27", "acuity"],
    pageType: "comparison",
    relatedPages: [
      "/best-software-for-maid-service",
      "/best-software-for-commercial-cleaning-business",
      "/best-software-for-cleaning-business",
      "/zenmaid-review",
    ],
  },
  {
    slug: "/best-software-for-commercial-cleaning-business",
    title: "Best Software for Commercial Cleaning Businesses 2026",
    metaTitle: "Best Commercial Cleaning Business Software 2026",
    metaDescription:
      "Best software for commercial cleaning companies in 2026. Manage contracts, staff, and client sites with Swept, Jobber, Housecall Pro, or ServiceM8.",
    targetKeyword: "best software for commercial cleaning business",
    h1: "Best Software for Commercial Cleaning Businesses in 2026",
    featuredTools: ["swept", "jobber", "servicem8", "housecall-pro", "connecteam"],
    pageType: "comparison",
    relatedPages: [
      "/swept-review",
      "/best-software-for-residential-cleaning-business",
      "/swept-vs-jobber-cleaning-business",
      "/best-software-for-cleaning-business",
    ],
  },
  {
    slug: "/cheapest-software-for-cleaning-business",
    title: "Cheapest Software for Cleaning Businesses 2026",
    metaTitle: "Cheapest Cleaning Business Software 2026 [Low Cost]",
    metaDescription:
      "The cheapest cleaning business software in 2026, including free options. Budget-friendly tools for small cleaning businesses without sacrificing key features.",
    targetKeyword: "cheapest software for cleaning business",
    h1: "Cheapest Software for Cleaning Businesses in 2026",
    featuredTools: ["connecteam", "zenmaid", "acuity", "servicem8", "swept"],
    pageType: "comparison",
    relatedPages: [
      "/best-free-software-for-cleaning-business",
      "/best-software-for-solo-cleaner",
      "/cleaning-business-software-for-beginners",
      "/best-software-for-small-cleaning-business",
    ],
  },
  {
    slug: "/cleaning-business-software-for-beginners",
    title: "Cleaning Business Software for Beginners 2026",
    metaTitle: "Cleaning Business Software for Beginners 2026 [Easy]",
    metaDescription:
      "Best software for cleaning business beginners in 2026. Easy-to-use tools that don't require tech skills. Start with free options and upgrade as you grow.",
    targetKeyword: "cleaning business software for beginners",
    h1: "Cleaning Business Software for Beginners: The Easy Guide (2026)",
    featuredTools: ["zenmaid", "acuity", "connecteam", "jobber"],
    pageType: "comparison",
    relatedPages: [
      "/best-free-software-for-cleaning-business",
      "/cheapest-software-for-cleaning-business",
      "/best-software-for-solo-cleaner",
      "/best-software-for-maid-service",
    ],
  },
  {
    slug: "/jobber-vs-housecall-pro-cleaning-business",
    title: "Jobber vs Housecall Pro for Cleaning Businesses 2026",
    metaTitle: "Jobber vs Housecall Pro Cleaning Business 2026",
    metaDescription:
      "Jobber vs Housecall Pro for cleaning businesses in 2026: pricing, features, and which is the better choice. Our verdict after testing both platforms.",
    targetKeyword: "jobber vs housecall pro cleaning business",
    h1: "Jobber vs Housecall Pro for Cleaning Businesses (2026)",
    featuredTools: ["jobber", "housecall-pro"],
    pageType: "head-to-head",
    relatedPages: [
      "/jobber-review-cleaning-business",
      "/housecall-pro-review-cleaning-business",
      "/jobber-vs-zenmaid",
      "/best-software-for-cleaning-business",
    ],
  },
  {
    slug: "/jobber-vs-zenmaid",
    title: "Jobber vs ZenMaid for Cleaning Businesses 2026",
    metaTitle: "Jobber vs ZenMaid 2026: Which Is Better for Cleaners?",
    metaDescription:
      "Jobber vs ZenMaid compared for cleaning businesses in 2026. Pricing, features, and a clear winner for maid services, residential cleaners, and growing teams.",
    targetKeyword: "jobber vs zenmaid",
    h1: "Jobber vs ZenMaid for Cleaning Businesses (2026)",
    featuredTools: ["jobber", "zenmaid"],
    pageType: "head-to-head",
    relatedPages: [
      "/jobber-review-cleaning-business",
      "/zenmaid-review",
      "/jobber-vs-housecall-pro-cleaning-business",
      "/best-software-for-maid-service",
    ],
  },
  {
    slug: "/housecall-pro-vs-zenmaid",
    title: "Housecall Pro vs ZenMaid 2026",
    metaTitle: "Housecall Pro vs ZenMaid 2026: Cleaning Business Pick",
    metaDescription:
      "Housecall Pro vs ZenMaid for cleaning businesses in 2026. Full comparison of pricing, features, and which tool wins for maid services and residential cleaning.",
    targetKeyword: "housecall pro vs zenmaid",
    h1: "Housecall Pro vs ZenMaid for Cleaning Businesses (2026)",
    featuredTools: ["housecall-pro", "zenmaid"],
    pageType: "head-to-head",
    relatedPages: [
      "/housecall-pro-review-cleaning-business",
      "/zenmaid-review",
      "/jobber-vs-housecall-pro-cleaning-business",
      "/best-software-for-maid-service",
    ],
  },
  {
    slug: "/swept-vs-jobber-cleaning-business",
    title: "Swept vs Jobber for Cleaning Businesses 2026",
    metaTitle: "Swept vs Jobber Cleaning Business 2026: Which Wins?",
    metaDescription:
      "Swept vs Jobber for cleaning companies in 2026. We compare pricing, team management, scheduling, and which tool is best for commercial cleaning businesses.",
    targetKeyword: "swept vs jobber cleaning business",
    h1: "Swept vs Jobber for Cleaning Businesses (2026)",
    featuredTools: ["swept", "jobber"],
    pageType: "head-to-head",
    relatedPages: [
      "/swept-review",
      "/jobber-review-cleaning-business",
      "/best-software-for-commercial-cleaning-business",
      "/zenmaid-vs-swept",
    ],
  },
  {
    slug: "/launch27-vs-jobber",
    title: "Launch27 vs Jobber for Cleaning Businesses 2026",
    metaTitle: "Launch27 vs Jobber 2026: Cleaning Business Comparison",
    metaDescription:
      "Launch27 vs Jobber compared for cleaning businesses in 2026. Online booking widget vs full field service platform — which is right for your business?",
    targetKeyword: "launch27 vs jobber",
    h1: "Launch27 vs Jobber for Cleaning Businesses (2026)",
    featuredTools: ["launch27", "jobber"],
    pageType: "head-to-head",
    relatedPages: [
      "/launch27-review",
      "/jobber-review-cleaning-business",
      "/best-software-for-cleaning-business",
      "/best-scheduling-software-for-cleaning-business",
    ],
  },
  {
    slug: "/zenmaid-vs-swept",
    title: "ZenMaid vs Swept 2026: Which Is Better?",
    metaTitle: "ZenMaid vs Swept 2026: Cleaning Business Showdown",
    metaDescription:
      "ZenMaid vs Swept for cleaning businesses in 2026. Residential vs commercial cleaning focus compared — features, pricing, and a clear recommendation.",
    targetKeyword: "zenmaid vs swept",
    h1: "ZenMaid vs Swept for Cleaning Businesses (2026)",
    featuredTools: ["zenmaid", "swept"],
    pageType: "head-to-head",
    relatedPages: [
      "/zenmaid-review",
      "/swept-review",
      "/best-software-for-maid-service",
      "/best-software-for-commercial-cleaning-business",
    ],
  },
  {
    slug: "/connecteam-vs-jobber-cleaning-business",
    title: "Connecteam vs Jobber for Cleaning Businesses 2026",
    metaTitle: "Connecteam vs Jobber Cleaning Business 2026 [Compared]",
    metaDescription:
      "Connecteam vs Jobber for cleaning businesses in 2026. Free team management vs premium field service platform — pricing, features, and who should pick each.",
    targetKeyword: "connecteam vs jobber cleaning business",
    h1: "Connecteam vs Jobber for Cleaning Businesses (2026)",
    featuredTools: ["connecteam", "jobber"],
    pageType: "head-to-head",
    relatedPages: [
      "/jobber-review-cleaning-business",
      "/best-free-software-for-cleaning-business",
      "/best-software-for-small-cleaning-business",
      "/best-software-for-cleaning-business",
    ],
  },
  {
    slug: "/servicem8-vs-jobber-australia",
    title: "ServiceM8 vs Jobber Australia 2026",
    metaTitle: "ServiceM8 vs Jobber Australia 2026: Which Is Better?",
    metaDescription:
      "ServiceM8 vs Jobber compared for Australian cleaning businesses in 2026. Xero integration, local support, pricing, and which is the best pick for Aussie cleaners.",
    targetKeyword: "servicem8 vs jobber australia",
    h1: "ServiceM8 vs Jobber for Australian Cleaning Businesses (2026)",
    featuredTools: ["servicem8", "jobber"],
    pageType: "head-to-head",
    relatedPages: [
      "/best-software-for-cleaning-business-australia",
      "/jobber-review-cleaning-business",
      "/best-software-for-cleaning-business",
      "/best-invoicing-software-for-cleaning-business",
    ],
  },
  {
    slug: "/jobber-review-cleaning-business",
    title: "Jobber Review for Cleaning Businesses 2026",
    metaTitle: "Jobber Review 2026: Is It Worth It for Cleaning Businesses?",
    metaDescription:
      "Honest Jobber review for cleaning businesses in 2026. Pricing, features, pros, cons, and who should use it. Updated after hands-on testing by CleaningStack.",
    targetKeyword: "jobber review cleaning business",
    h1: "Jobber Review 2026: The Best All-In-One for Cleaning Businesses?",
    featuredTools: ["jobber"],
    pageType: "review",
    relatedPages: [
      "/jobber-vs-housecall-pro-cleaning-business",
      "/jobber-vs-zenmaid",
      "/best-software-for-cleaning-business",
      "/best-scheduling-software-for-cleaning-business",
    ],
  },
  {
    slug: "/housecall-pro-review-cleaning-business",
    title: "Housecall Pro Review for Cleaning Businesses 2026",
    metaTitle: "Housecall Pro Review 2026: Best for Cleaning Growth?",
    metaDescription:
      "Full Housecall Pro review for cleaning businesses in 2026. Pricing, marketing features, scheduling, and whether it's worth the cost over cheaper alternatives.",
    targetKeyword: "housecall pro review cleaning business",
    h1: "Housecall Pro Review 2026: Is It the Best Growth Tool for Cleaning Businesses?",
    featuredTools: ["housecall-pro"],
    pageType: "review",
    relatedPages: [
      "/jobber-vs-housecall-pro-cleaning-business",
      "/housecall-pro-vs-zenmaid",
      "/best-software-for-cleaning-business",
      "/best-crm-for-cleaning-business",
    ],
  },
  {
    slug: "/zenmaid-review",
    title: "ZenMaid Review 2026",
    metaTitle: "ZenMaid Review 2026: Best Software for Maid Services?",
    metaDescription:
      "Full ZenMaid review for 2026. Is it the best cleaning-specific software? We cover pricing (including the free plan), features, pros, cons, and who it's built for.",
    targetKeyword: "zenmaid review",
    h1: "ZenMaid Review 2026: The #1 Software Built for Maid Services?",
    featuredTools: ["zenmaid"],
    pageType: "review",
    relatedPages: [
      "/jobber-vs-zenmaid",
      "/housecall-pro-vs-zenmaid",
      "/zenmaid-vs-swept",
      "/best-software-for-maid-service",
    ],
  },
  {
    slug: "/swept-review",
    title: "Swept Review 2026",
    metaTitle: "Swept Review 2026: Best Cleaning Team Management Tool?",
    metaDescription:
      "Full Swept review for 2026. Team communication, inspection tools, and scheduling for cleaning companies. Is it worth it for commercial cleaning teams?",
    targetKeyword: "swept review",
    h1: "Swept Review 2026: The Best Team Management Tool for Cleaning Companies?",
    featuredTools: ["swept"],
    pageType: "review",
    relatedPages: [
      "/swept-vs-jobber-cleaning-business",
      "/zenmaid-vs-swept",
      "/best-software-for-commercial-cleaning-business",
      "/best-software-for-cleaning-business",
    ],
  },
  {
    slug: "/launch27-review",
    title: "Launch27 Review 2026",
    metaTitle: "Launch27 Review 2026: Best Online Booking for Cleaners?",
    metaDescription:
      "Full Launch27 review for 2026. Is the online booking widget worth it for cleaning businesses? Pricing, features, pros, cons, and who should use it.",
    targetKeyword: "launch27 review",
    h1: "Launch27 Review 2026: The Online Booking Platform for Cleaning Businesses",
    featuredTools: ["launch27"],
    pageType: "review",
    relatedPages: [
      "/launch27-vs-jobber",
      "/best-software-for-cleaning-business",
      "/best-scheduling-software-for-cleaning-business",
      "/best-software-for-residential-cleaning-business",
    ],
  },
  {
    slug: "/about",
    title: "About CleaningStack",
    metaTitle: "About CleaningStack: Independent Cleaning Software Reviews",
    metaDescription:
      "CleaningStack is an independent review site for cleaning business software. Learn how we evaluate tools, who we are, and our commitment to honest recommendations.",
    targetKeyword: "about cleaningstack",
    h1: "About CleaningStack",
    featuredTools: [],
    pageType: "trust",
    relatedPages: ["/affiliate-disclosure", "/contact", "/best-software-for-cleaning-business"],
  },
  {
    slug: "/contact",
    title: "Contact CleaningStack",
    metaTitle: "Contact CleaningStack | Cleaning Software Reviews",
    metaDescription:
      "Get in touch with the CleaningStack team. Questions about our reviews, tool recommendations, or anything else — we'd love to hear from you.",
    targetKeyword: "contact cleaningstack",
    h1: "Contact Us",
    featuredTools: [],
    pageType: "trust",
    relatedPages: ["/about", "/affiliate-disclosure"],
  },
  {
    slug: "/privacy-policy",
    title: "Privacy Policy | CleaningStack",
    metaTitle: "Privacy Policy | CleaningStack",
    metaDescription:
      "CleaningStack privacy policy — how we collect, use, and protect your data. GDPR and Australian Privacy Act compliant.",
    targetKeyword: "cleaningstack privacy policy",
    h1: "Privacy Policy",
    featuredTools: [],
    pageType: "trust",
    relatedPages: ["/about", "/affiliate-disclosure", "/contact"],
  },
  {
    slug: "/affiliate-disclosure",
    title: "Affiliate Disclosure | CleaningStack",
    metaTitle: "Affiliate Disclosure | CleaningStack",
    metaDescription:
      "CleaningStack affiliate disclosure — we earn commissions from some links. Our recommendations are always based on genuine assessment, not commission rates.",
    targetKeyword: "cleaningstack affiliate disclosure",
    h1: "Affiliate Disclosure",
    featuredTools: [],
    pageType: "trust",
    relatedPages: ["/about", "/privacy-policy", "/contact"],
  },
];

export function getPageBySlug(slug: string): PageDefinition | undefined {
  return pages.find((p) => p.slug === slug);
}

export function getPagesByType(type: PageDefinition["pageType"]): PageDefinition[] {
  return pages.filter((p) => p.pageType === type);
}

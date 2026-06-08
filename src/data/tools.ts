export interface PricingTier {
  name: string;
  price: number | null;
  period: "month" | "year";
  description: string;
}

export interface Tool {
  name: string;
  slug: string;
  tagline: string;
  affiliateLinkKey: string;
  logo: string;
  pricing: {
    tiers: PricingTier[];
    hasFreeTier: boolean;
    freeTrialDays: number | null;
    startingPrice: number;
  };
  targetBusinessSize: ("solo" | "small" | "medium")[];
  keyFeatures: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  rating: number;
  g2Rating: number | null;
  captetraRating: number | null;
  mobileApp: { ios: boolean; android: boolean };
  integrations: string[];
  supportTypes: ("email" | "chat" | "phone" | "help-center")[];
  standoutFeature: string;
  category: string[];
  description: string;
}

export const tools: Tool[] = [
  {
    name: "Jobber",
    slug: "jobber",
    tagline: "The all-in-one field service platform that grows with your cleaning business",
    affiliateLinkKey: "jobber",
    logo: "/logos/jobber.png",
    description:
      "Jobber is the market-leading field service management platform trusted by over 200,000 service businesses. For cleaning companies, it offers everything from online booking and automated reminders to GPS tracking and a polished client portal.",
    pricing: {
      tiers: [
        { name: "Core", price: 49, period: "month", description: "1 user, basic job management and invoicing" },
        { name: "Connect", price: 129, period: "month", description: "Up to 5 users, full scheduling and automation" },
        { name: "Grow", price: 249, period: "month", description: "Up to 15 users, advanced reporting and marketing" },
      ],
      hasFreeTier: false,
      freeTrialDays: 14,
      startingPrice: 49,
    },
    targetBusinessSize: ["small", "medium"],
    keyFeatures: [
      "Online booking widget customers can use 24/7",
      "Client Hub portal for quote approvals and invoice payments",
      "Automated follow-up emails and SMS reminders",
      "GPS-tracked job scheduling and route optimization",
      "Recurring job management for weekly/fortnightly clients",
      "Professional quote and invoice generation",
      "In-app payment processing with card readers",
      "Detailed business reporting and revenue tracking",
      "Team GPS tracking and time logging",
      "Two-way text messaging with clients",
    ],
    pros: [
      "Best-in-class client portal lets customers approve quotes and pay invoices online",
      "Extremely polished, intuitive interface — easy to learn even for non-technical owners",
      "Excellent mobile app rated 4.7 on both App Store and Google Play",
      "Strong automation reduces admin time dramatically",
      "Outstanding customer support with fast response times",
    ],
    cons: [
      "Expensive for solo operators or very small businesses — $49/mo minimum is steep",
      "Some advanced features like two-way texting only on higher-tier plans",
      "No genuine free tier — 14-day trial only",
    ],
    bestFor:
      "Small to medium cleaning businesses (3–20 staff) ready to invest in professional software that impresses clients and automates admin.",
    rating: 4.5,
    g2Rating: 4.5,
    captetraRating: 4.5,
    mobileApp: { ios: true, android: true },
    integrations: [
      "QuickBooks Online",
      "QuickBooks Desktop",
      "Stripe",
      "PayPal",
      "Google Calendar",
      "Mailchimp",
      "Zapier",
      "Square",
    ],
    supportTypes: ["email", "chat", "phone", "help-center"],
    standoutFeature:
      "Client Hub — a branded self-service portal where your customers can approve quotes, pay invoices, and request new bookings without calling you.",
    category: ["scheduling", "invoicing", "crm", "field-service"],
  },
  {
    name: "Housecall Pro",
    slug: "housecall-pro",
    tagline: "Grow your cleaning business with powerful marketing and job management tools",
    affiliateLinkKey: "housecallPro",
    logo: "/logos/housecall-pro.png",
    description:
      "Housecall Pro is a field service management platform with a particular strength in marketing automation. Its built-in review request system, postcard campaigns, and customer segmentation make it a top choice for cleaning businesses focused on growth.",
    pricing: {
      tiers: [
        { name: "Basic", price: 79, period: "month", description: "1 user, core job management" },
        { name: "Essentials", price: 189, period: "month", description: "Up to 5 users, marketing tools included" },
        { name: "MAX", price: 299, period: "month", description: "Unlimited users, full feature access" },
      ],
      hasFreeTier: false,
      freeTrialDays: 14,
      startingPrice: 79,
    },
    targetBusinessSize: ["small", "medium"],
    keyFeatures: [
      "Drag-and-drop visual scheduling board",
      "Automated SMS and email reminders to reduce no-shows",
      "Built-in customer review automation after every job",
      "Instant invoicing from the job site via mobile",
      "Recurring job scheduling with flexible frequencies",
      "GPS dispatch map showing all technicians in real time",
      "Online booking that embeds on your website",
      "Postcard and email marketing campaigns",
      "Employee timesheets and payroll export",
      "Customer financing options",
    ],
    pros: [
      "Best built-in marketing tools — review automation alone pays for itself",
      "Easy automated review requests sent to every customer after a job",
      "Strong payment processing with competitive transaction rates",
      "Excellent recurring job management for regular cleaning clients",
      "Large, active user community and helpful Facebook group",
    ],
    cons: [
      "More expensive than most competitors at every tier",
      "Customer support response times can be slow on basic plans",
      "Mobile app has occasional sync issues reported by users",
      "Some marketing features locked behind Essentials tier or higher",
    ],
    bestFor:
      "Growth-focused cleaning businesses that want to win more Google reviews, run marketing campaigns, and manage a team of 3–15 cleaners.",
    rating: 4.3,
    g2Rating: 4.3,
    captetraRating: 4.7,
    mobileApp: { ios: true, android: true },
    integrations: [
      "QuickBooks Online",
      "Stripe",
      "Google Calendar",
      "Mailchimp",
      "Zapier",
      "Angi",
      "Thumbtack",
    ],
    supportTypes: ["email", "chat", "phone", "help-center"],
    standoutFeature:
      "Automatic review generation — after every completed job, the system sends a perfectly timed review request to your customer, building your Google rating on autopilot.",
    category: ["scheduling", "invoicing", "crm", "marketing", "field-service"],
  },
  {
    name: "ZenMaid",
    slug: "zenmaid",
    tagline: "Software built from the ground up for maid and house cleaning services",
    affiliateLinkKey: "zenMaid",
    logo: "/logos/zenmaid.png",
    description:
      "ZenMaid is the only major software platform built exclusively for residential cleaning and maid services. Every feature — from recurring scheduling to automated thank-you emails — was designed with cleaning businesses in mind, not adapted from a generic field service template.",
    pricing: {
      tiers: [
        {
          name: "Free",
          price: null,
          period: "month",
          description: "Up to 3 active clients — genuinely free, no credit card",
        },
        { name: "Basic", price: 49, period: "month", description: "Unlimited clients, core features" },
        {
          name: "Professional",
          price: 99,
          period: "month",
          description: "Full features, team management, advanced automation",
        },
      ],
      hasFreeTier: true,
      freeTrialDays: 21,
      startingPrice: 49,
    },
    targetBusinessSize: ["solo", "small"],
    keyFeatures: [
      "Maid-service-specific recurring schedule templates",
      "Automated customer thank-you and follow-up emails",
      "Online booking form for residential clients",
      "Team checklists and job notes for cleaners",
      "GPS clock-in and clock-out verification",
      "Client portal for viewing upcoming appointments",
      "Automated payment collection after each clean",
      "End-of-day automated reports sent to owner",
      "Staff tip tracking and distribution",
      "Customer feedback and satisfaction surveys",
    ],
    pros: [
      "Built specifically for maid services — no features irrelevant to cleaning",
      "Generous free plan (up to 3 clients) for brand new businesses just starting out",
      "Very affordable paid plans starting at $49/month",
      "Extremely easy to set up — most owners are running within one day",
      "Excellent recurring scheduling for weekly and fortnightly clients",
    ],
    cons: [
      "Less suitable for commercial cleaning companies — residential focus throughout",
      "Fewer third-party integrations than Jobber or Housecall Pro",
      "Reporting features less detailed than enterprise competitors",
      "No native QuickBooks desktop integration",
    ],
    bestFor:
      "Residential maid service owners — from solo cleaners just starting out to established services with 10–15 staff — who want software designed specifically for their business.",
    rating: 4.4,
    g2Rating: 4.2,
    captetraRating: 4.6,
    mobileApp: { ios: true, android: true },
    integrations: ["Stripe", "QuickBooks Online", "Google Calendar", "Zapier"],
    supportTypes: ["email", "chat", "help-center"],
    standoutFeature:
      "Free forever plan for up to 3 active clients — the only cleaning-specific software that lets tiny maid services get started with zero financial risk.",
    category: ["scheduling", "invoicing", "maid-service", "field-service"],
  },
  {
    name: "Swept",
    slug: "swept",
    tagline: "Team management and communication software built for cleaning companies",
    affiliateLinkKey: "swept",
    logo: "/logos/swept.png",
    description:
      "Swept is a cleaning-specific platform with a unique focus on team management and communication. Where most field service tools were built for plumbers and electricians, Swept was purpose-built for cleaning companies — particularly those with multiple part-time or casual cleaning staff across different client sites.",
    pricing: {
      tiers: [
        { name: "Starter", price: 30, period: "month", description: "Up to 3 employees, basic scheduling" },
        { name: "Standard", price: 60, period: "month", description: "Up to 10 employees, full communication tools" },
        {
          name: "Professional",
          price: 90,
          period: "month",
          description: "Unlimited employees, advanced reporting and inspections",
        },
      ],
      hasFreeTier: false,
      freeTrialDays: 30,
      startingPrice: 30,
    },
    targetBusinessSize: ["small", "medium"],
    keyFeatures: [
      "Real-time team messaging and shift communication",
      "Shift scheduling with staff acceptance confirmation",
      "GPS location verification at client sites",
      "Custom inspection checklists and quality scoring",
      "Staff time tracking and attendance reports",
      "Client portal for special instructions and feedback",
      "Shift alerts when staff are late or don't show",
      "Staff onboarding documentation storage",
      "Multi-location management for commercial contracts",
      "Daily and weekly supervisor reports",
    ],
    pros: [
      "Best team communication tools in the entire cleaning software category",
      "Strong inspection and quality checklist system for commercial contracts",
      "Affordable pricing even with multiple staff members",
      "Excellent for managing part-time and casual cleaning staff",
      "30-day free trial is longer than most competitors",
    ],
    cons: [
      "Invoicing and billing features are basic — many owners pair it with separate accounting software",
      "Not ideal for solo operators — overkill without a team",
      "Fewer client-facing features than Jobber (no client portal)",
      "Marketing tools non-existent — need another tool for growth",
    ],
    bestFor:
      "Commercial or residential cleaning companies with 3–25 staff who need to keep a dispersed team organised, on time, and communicating clearly.",
    rating: 4.2,
    g2Rating: 4.1,
    captetraRating: 4.4,
    mobileApp: { ios: true, android: true },
    integrations: ["QuickBooks Online", "Stripe", "Google Calendar", "Zapier"],
    supportTypes: ["email", "chat", "phone", "help-center"],
    standoutFeature:
      "Real-time team messaging and GPS-verified location check-ins — know exactly which staff are at which sites and maintain a running conversation thread for every client location.",
    category: ["scheduling", "team-management", "commercial", "field-service"],
  },
  {
    name: "Launch27",
    slug: "launch27",
    tagline: "The online booking platform that turns your website into a booking machine",
    affiliateLinkKey: "launch27",
    logo: "/logos/launch27.png",
    description:
      "Launch27 specialises in one thing: turning website visitors into paying cleaning clients through a customisable online booking widget. Where other tools try to do everything, Launch27 focuses on making the booking experience smooth, automated, and highly convertible.",
    pricing: {
      tiers: [
        { name: "Lite", price: 59, period: "month", description: "1 location, basic booking and payments" },
        { name: "Standard", price: 109, period: "month", description: "3 locations, automation and referral program" },
        { name: "Business", price: 199, period: "month", description: "Unlimited locations, API access, white-label" },
      ],
      hasFreeTier: false,
      freeTrialDays: 14,
      startingPrice: 59,
    },
    targetBusinessSize: ["small", "medium"],
    keyFeatures: [
      "Highly customisable online booking widget for any website",
      "Dynamic pricing rules (rooms, frequency, add-ons)",
      "Automatic scheduling and team dispatch",
      "Customer management portal",
      "Email and SMS automation sequences",
      "Recurring booking management",
      "Stripe and PayPal payment processing",
      "Referral program with automated tracking",
      "Multi-location management",
      "API access for custom integrations",
    ],
    pros: [
      "Most customisable online booking widget — matches your brand perfectly",
      "Dynamic pricing engine handles complex pricing rules automatically",
      "Customers never leave your website to book — embedded widget keeps them on your site",
      "Good automation for follow-up emails and re-engagement campaigns",
      "Referral program built in — customers refer friends and earn credits",
    ],
    cons: [
      "Interface and dashboard look dated compared to Jobber and Housecall Pro",
      "Customer support is limited — mainly email and knowledge base",
      "Not as strong on field management features (GPS, checklists)",
      "Reporting is basic for the price",
    ],
    bestFor:
      "Established cleaning businesses with a website that want to turn more website visitors into paying customers through seamless online booking.",
    rating: 4.0,
    g2Rating: 4.1,
    captetraRating: 4.3,
    mobileApp: { ios: true, android: true },
    integrations: ["Stripe", "PayPal", "QuickBooks Online", "Mailchimp", "Zapier"],
    supportTypes: ["email", "help-center"],
    standoutFeature:
      "Embedded booking widget — customers can book, pay, and schedule recurring cleans entirely on your own website without being redirected to a third-party platform.",
    category: ["scheduling", "online-booking", "field-service"],
  },
  {
    name: "Connecteam",
    slug: "connecteam",
    tagline: "Free team management app for cleaning businesses with up to 10 staff",
    affiliateLinkKey: "connecteam",
    logo: "/logos/connecteam.png",
    description:
      "Connecteam is a team management and communication platform with a genuinely free plan for businesses with up to 10 users. While it wasn't built exclusively for cleaning, its scheduling, time clock, and team chat features are exactly what small cleaning businesses need — and the price point (free) is unmatched.",
    pricing: {
      tiers: [
        { name: "Free", price: null, period: "month", description: "Up to 10 users, core features forever free" },
        { name: "Basic", price: 29, period: "month", description: "Up to 30 users, advanced scheduling" },
        { name: "Advanced", price: 49, period: "month", description: "Up to 50 users, automations and integrations" },
        { name: "Expert", price: 99, period: "month", description: "Unlimited users, full feature access" },
      ],
      hasFreeTier: true,
      freeTrialDays: null,
      startingPrice: 0,
    },
    targetBusinessSize: ["solo", "small", "medium"],
    keyFeatures: [
      "GPS-enabled employee time clock and attendance tracking",
      "Drag-and-drop shift scheduling with staff notifications",
      "Team chat and announcement broadcasting",
      "Digital forms and inspection checklists",
      "Document storage for staff onboarding and policies",
      "Task management and job assignments",
      "Payroll-ready timesheet exports",
      "Staff surveys and engagement tools",
      "Training courses and quizzes",
      "Shift swapping with manager approval",
    ],
    pros: [
      "Genuinely free for up to 10 users — no credit card required, no feature-crippled trial",
      "Best team communication features outside of dedicated messaging apps",
      "Excellent mobile app with 4.8 Capterra rating",
      "Highly flexible — works for residential, commercial, and any niche",
      "Great for managing part-time or casual staff with variable hours",
    ],
    cons: [
      "Not cleaning-specific — lacks quoting, invoicing, and client management",
      "Needs to be paired with separate accounting/invoicing software",
      "Initial setup requires building cleaning-specific workflows from scratch",
      "Less useful as a standalone all-in-one solution",
    ],
    bestFor:
      "Solo cleaners and small cleaning teams who need free scheduling and team communication tools, or businesses that already have accounting software and just need the team management side.",
    rating: 4.3,
    g2Rating: 4.3,
    captetraRating: 4.8,
    mobileApp: { ios: true, android: true },
    integrations: ["QuickBooks Online", "Gusto", "Zapier", "Google Calendar", "Paychex"],
    supportTypes: ["email", "chat", "help-center"],
    standoutFeature:
      "Free forever plan for up to 10 users — the only team management tool in this list that is genuinely free with no time limit, no feature cut, and no credit card required.",
    category: ["scheduling", "team-management", "time-tracking"],
  },
  {
    name: "ServiceM8",
    slug: "servicem8",
    tagline: "Job management software loved by cleaning businesses in Australia and the UK",
    affiliateLinkKey: "serviceM8",
    logo: "/logos/servicem8.png",
    description:
      "ServiceM8 is a cloud-based job management platform with a particularly strong following in Australia and the UK. Built for service businesses running iOS devices, it excels at job documentation, photo capture, and on-site invoicing — making it a great fit for sole traders and small cleaning companies.",
    pricing: {
      tiers: [
        {
          name: "Starter",
          price: 29,
          period: "month",
          description: "Up to 15 jobs/month, 1 user — good for starting out",
        },
        {
          name: "Growing",
          price: 65,
          period: "month",
          description: "Unlimited jobs, 1 staff member included",
        },
        {
          name: "Premium",
          price: 149,
          period: "month",
          description: "Unlimited jobs, up to 5 staff members",
        },
        {
          name: "Premium Plus",
          price: 349,
          period: "month",
          description: "Unlimited jobs and staff up to 30",
        },
      ],
      hasFreeTier: false,
      freeTrialDays: 14,
      startingPrice: 29,
    },
    targetBusinessSize: ["solo", "small"],
    keyFeatures: [
      "Job cards with photos, notes, and client signatures",
      "On-site invoice generation and payment",
      "Online booking form integration",
      "GPS scheduling and map dispatch",
      "Automated client communications (SMS and email)",
      "Quote-to-job-to-invoice workflow",
      "Xero and QuickBooks accounting integration",
      "Recurring job scheduling",
      "Staff time tracking and GPS check-in",
      "Work order PDF generation",
    ],
    pros: [
      "Excellent job documentation — photos attached directly to job records",
      "Very strong in Australia and UK with local payment processing support",
      "Great for sole traders on the Starter plan",
      "Strong reporting on job history and client spend",
      "Seamless Xero integration (ideal for Australian businesses)",
    ],
    cons: [
      "Starter plan limited to 15 jobs/month — not workable for busy operations",
      "Pricing jumps significantly between tiers",
      "iOS-first design — Android experience slightly less polished",
      "Fewer marketing features than Housecall Pro",
    ],
    bestFor:
      "Australian or UK-based cleaning businesses, particularly sole traders and small teams who need solid job documentation, on-site invoicing, and Xero integration.",
    rating: 4.2,
    g2Rating: 4.0,
    captetraRating: 4.6,
    mobileApp: { ios: true, android: true },
    integrations: ["Xero", "QuickBooks Online", "Stripe", "Google Calendar", "Mailchimp", "Zapier"],
    supportTypes: ["email", "chat", "phone", "help-center"],
    standoutFeature:
      "Best-in-class job card system — attach before-and-after photos, client signatures, and detailed notes to every job record, creating a complete visual history for every client.",
    category: ["scheduling", "invoicing", "field-service", "australia"],
  },
  {
    name: "Acuity Scheduling",
    slug: "acuity",
    tagline: "The easiest online booking tool for solo cleaners and tiny cleaning businesses",
    affiliateLinkKey: "acuity",
    logo: "/logos/acuity.png",
    description:
      "Acuity Scheduling (now part of Squarespace) is the simplest, most affordable way for a solo cleaner to start taking online bookings. It's not a full field service management tool — but for a one-person cleaning operation who just needs to stop playing phone tag with clients, it's perfect.",
    pricing: {
      tiers: [
        {
          name: "Emerging",
          price: 20,
          period: "month",
          description: "1 calendar/location, unlimited appointments",
        },
        {
          name: "Growing",
          price: 34,
          period: "month",
          description: "6 calendars, remove Acuity branding",
        },
        {
          name: "Powerhouse",
          price: 61,
          period: "month",
          description: "36 calendars, advanced customisation",
        },
      ],
      hasFreeTier: false,
      freeTrialDays: 7,
      startingPrice: 20,
    },
    targetBusinessSize: ["solo", "small"],
    keyFeatures: [
      "Online appointment booking page (hosted or embedded)",
      "Automated email and SMS appointment reminders",
      "Payment collection at booking with Stripe or PayPal",
      "Intake forms for cleaning preferences and access instructions",
      "Calendar sync with Google, Outlook, and iCloud",
      "Recurring appointment scheduling",
      "Package and gift certificate sales",
      "Waitlist management",
      "Video call link integration (Zoom, Google Meet)",
      "Customisable booking page with your brand colours",
    ],
    pros: [
      "Extremely affordable — starts at just $20/month",
      "Easiest setup in this entire list — live and taking bookings in under 30 minutes",
      "Integrates with more calendar and app tools than any competitor",
      "Great intake form builder for capturing cleaning requirements",
      "Polished client-facing booking experience",
    ],
    cons: [
      "Not a field service tool — no GPS tracking, job management, or team dispatch",
      "No quoting or invoicing beyond appointment payments",
      "Not suitable for businesses with more than a handful of staff",
      "Very limited reporting compared to full-featured platforms",
    ],
    bestFor:
      "Solo cleaners or very small cleaning businesses (1–2 people) who just need a simple, professional way for clients to book appointments online without back-and-forth calls.",
    rating: 4.1,
    g2Rating: 4.5,
    captetraRating: 4.8,
    mobileApp: { ios: true, android: true },
    integrations: [
      "QuickBooks Online",
      "Stripe",
      "PayPal",
      "Google Calendar",
      "Outlook Calendar",
      "Zoom",
      "Zapier",
      "Mailchimp",
      "Squarespace",
    ],
    supportTypes: ["email", "help-center"],
    standoutFeature:
      "Fastest setup in the category — a solo cleaner can create an account, customise their booking page, and start accepting client bookings in under 30 minutes.",
    category: ["scheduling", "online-booking"],
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsBySize(size: "solo" | "small" | "medium"): Tool[] {
  return tools.filter((t) => t.targetBusinessSize.includes(size));
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((t) => t.category.includes(category));
}

export function getFreeTools(): Tool[] {
  return tools.filter((t) => t.pricing.hasFreeTier);
}

export function getToolsByMaxBudget(maxMonthly: number): Tool[] {
  return tools.filter((t) => t.pricing.startingPrice <= maxMonthly);
}

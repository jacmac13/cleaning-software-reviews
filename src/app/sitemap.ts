import { MetadataRoute } from "next";

const BASE_URL = "https://cleaningstack.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = "2026-06-08";

  const pages: MetadataRoute.Sitemap = [
    // Homepage
    { url: BASE_URL, lastModified: lastMod, changeFrequency: "weekly", priority: 1.0 },

    // Tools index
    { url: `${BASE_URL}/tools`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },

    // Primary comparison pages
    { url: `${BASE_URL}/best-software-for-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/best-software-for-maid-service`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/best-software-for-commercial-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/best-software-for-residential-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/best-software-for-small-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/best-software-for-solo-cleaner`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/best-free-software-for-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/best-scheduling-software-for-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/best-invoicing-software-for-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/best-crm-for-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/best-app-for-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cheapest-software-for-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/cleaning-business-software-for-beginners`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/best-software-for-cleaning-business-australia`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/best-software-for-cleaning-business-uk`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },

    // Head-to-head comparison pages
    { url: `${BASE_URL}/jobber-vs-housecall-pro-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/jobber-vs-zenmaid`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/housecall-pro-vs-zenmaid`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/swept-vs-jobber-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/launch27-vs-jobber`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/zenmaid-vs-swept`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/connecteam-vs-jobber-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/servicem8-vs-jobber-australia`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.75 },

    // Review pages
    { url: `${BASE_URL}/jobber-review-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/zenmaid-review`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/housecall-pro-review-cleaning-business`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/swept-review`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/launch27-review`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },

    // Trust / info pages
    { url: `${BASE_URL}/about`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/affiliate-disclosure`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.4 },
  ];

  return pages;
}

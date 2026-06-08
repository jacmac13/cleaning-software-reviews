import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AffiliateDisclosureBanner from "@/components/layout/AffiliateDisclosureBanner";

// System font fallback - swap in next/font/google for production if SSL allows
const inter = { className: "font-sans" };

export const metadata: Metadata = {
  title: {
    default: "Best Cleaning Business Software 2026 | CleaningStack",
    template: "%s | CleaningStack",
  },
  description:
    "Independent reviews and comparisons of the best software for cleaning businesses. Find the right tool for your maid service, residential, or commercial cleaning company.",
  metadataBase: new URL("https://cleaning-software-reviews.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "CleaningStack",
    locale: "en_AU",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="NvGhHEVuRu-DWlc2_43e8NM1o_UYgQWzqD7RNmJa7JI" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <AffiliateDisclosureBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AffiliateDisclosureBanner() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("affiliate-banner-dismissed");
    if (!stored) setDismissed(false);
  }, []);

  const dismiss = () => {
    localStorage.setItem("affiliate-banner-dismissed", "1");
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="bg-amber-50 border-b border-amber-200 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-sm text-amber-800">
        <p>
          <strong>Disclosure:</strong> Some links on this site are affiliate links. We may earn a commission if you
          subscribe — at no extra cost to you.{" "}
          <Link href="/affiliate-disclosure" className="underline hover:no-underline font-medium">
            Learn more
          </Link>
        </p>
        <button
          onClick={dismiss}
          aria-label="Dismiss disclosure banner"
          className="shrink-0 text-amber-600 hover:text-amber-800 text-lg leading-none"
        >
          ×
        </button>
      </div>
    </div>
  );
}

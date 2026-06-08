import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <span className="text-2xl">🧹</span>
              <span>CleaningStack</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Independent software reviews for cleaning business owners. We test every tool so you don&apos;t have to.
            </p>
            <p className="text-xs mt-4 text-slate-500">Last updated: June 2026</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Best Software</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/best-software-for-cleaning-business" className="hover:text-white transition-colors">Best Overall</Link></li>
              <li><Link href="/best-free-software-for-cleaning-business" className="hover:text-white transition-colors">Best Free</Link></li>
              <li><Link href="/best-software-for-solo-cleaner" className="hover:text-white transition-colors">For Solo Cleaners</Link></li>
              <li><Link href="/best-software-for-maid-service" className="hover:text-white transition-colors">For Maid Services</Link></li>
              <li><Link href="/best-software-for-commercial-cleaning-business" className="hover:text-white transition-colors">For Commercial Cleaning</Link></li>
              <li><Link href="/best-software-for-cleaning-business-australia" className="hover:text-white transition-colors">Australia</Link></li>
              <li><Link href="/best-software-for-cleaning-business-uk" className="hover:text-white transition-colors">United Kingdom</Link></li>
              <li><Link href="/cheapest-software-for-cleaning-business" className="hover:text-white transition-colors">Cheapest Options</Link></li>
            </ul>
          </div>

          {/* Compare Tools */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Compare Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/jobber-vs-housecall-pro-cleaning-business" className="hover:text-white transition-colors">Jobber vs Housecall Pro</Link></li>
              <li><Link href="/jobber-vs-zenmaid" className="hover:text-white transition-colors">Jobber vs ZenMaid</Link></li>
              <li><Link href="/housecall-pro-vs-zenmaid" className="hover:text-white transition-colors">Housecall Pro vs ZenMaid</Link></li>
              <li><Link href="/swept-vs-jobber-cleaning-business" className="hover:text-white transition-colors">Swept vs Jobber</Link></li>
              <li><Link href="/zenmaid-vs-swept" className="hover:text-white transition-colors">ZenMaid vs Swept</Link></li>
              <li><Link href="/connecteam-vs-jobber-cleaning-business" className="hover:text-white transition-colors">Connecteam vs Jobber</Link></li>
              <li><Link href="/servicem8-vs-jobber-australia" className="hover:text-white transition-colors">ServiceM8 vs Jobber (AU)</Link></li>
              <li><Link href="/tools" className="hover:text-white transition-colors">All 8 Tools →</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Legal & Info</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
            <div className="mt-6">
              <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Tool Reviews</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/jobber-review-cleaning-business" className="hover:text-white transition-colors">Jobber Review</Link></li>
                <li><Link href="/housecall-pro-review-cleaning-business" className="hover:text-white transition-colors">Housecall Pro Review</Link></li>
                <li><Link href="/zenmaid-review" className="hover:text-white transition-colors">ZenMaid Review</Link></li>
                <li><Link href="/swept-review" className="hover:text-white transition-colors">Swept Review</Link></li>
                <li><Link href="/launch27-review" className="hover:text-white transition-colors">Launch27 Review</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} CleaningStack. All rights reserved.</p>
          <p className="text-slate-500 text-center">
            CleaningStack is reader-supported. We may earn commissions from affiliate links.{" "}
            <Link href="/affiliate-disclosure" className="hover:text-white transition-colors underline">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

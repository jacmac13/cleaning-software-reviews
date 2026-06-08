import Link from "next/link";
import { Tool } from "@/data/tools";
import { affiliateLinks } from "@/config/affiliateLinks";
import StarRating from "./StarRating";

interface ComparisonTableProps {
  tools: Tool[];
  showCTA?: boolean;
}

export default function ComparisonTable({ tools, showCTA = true }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 my-8">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-900 text-white">
            <th className="text-left px-4 py-3 font-semibold min-w-[160px] sticky left-0 bg-slate-900">Software</th>
            <th className="text-left px-4 py-3 font-semibold min-w-[100px]">Rating</th>
            <th className="text-left px-4 py-3 font-semibold min-w-[120px]">Starting Price</th>
            <th className="text-left px-4 py-3 font-semibold min-w-[100px]">Free Trial</th>
            <th className="text-left px-4 py-3 font-semibold min-w-[100px]">Mobile App</th>
            <th className="text-left px-4 py-3 font-semibold min-w-[200px]">Best For</th>
            {showCTA && <th className="text-left px-4 py-3 font-semibold min-w-[160px]">Action</th>}
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, idx) => {
            const affiliateLink = affiliateLinks[tool.affiliateLinkKey as keyof typeof affiliateLinks] ?? "#";
            return (
              <tr
                key={tool.slug}
                className={`border-t border-slate-100 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-green-50 transition-colors`}
              >
                <td className={`px-4 py-3 sticky left-0 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-green-50`}>
                  <div className="flex items-center gap-2">
                    {idx === 0 && (
                      <span className="badge bg-green-100 text-green-700">Top Pick</span>
                    )}
                    <span className="font-semibold text-slate-900">{tool.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <StarRating rating={tool.rating} size="sm" />
                </td>
                <td className="px-4 py-3">
                  {tool.pricing.hasFreeTier && tool.pricing.startingPrice === 0 ? (
                    <span className="font-semibold text-green-600">Free</span>
                  ) : (
                    <span className="font-semibold text-slate-900">${tool.pricing.startingPrice}/mo</span>
                  )}
                  {tool.pricing.hasFreeTier && tool.pricing.startingPrice > 0 && (
                    <span className="block text-xs text-green-600">Free plan available</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {tool.pricing.freeTrialDays ? (
                    <span className="text-slate-700">{tool.pricing.freeTrialDays} days</span>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    {tool.mobileApp.ios && (
                      <span className="badge bg-slate-100 text-slate-600">iOS</span>
                    )}
                    {tool.mobileApp.android && (
                      <span className="badge bg-slate-100 text-slate-600">Android</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-600 text-xs">{tool.bestFor}</td>
                {showCTA && (
                  <td className="px-4 py-3">
                    <Link
                      href={affiliateLink}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="btn-primary text-xs py-2 px-3 whitespace-nowrap"
                    >
                      Try {tool.name} {tool.pricing.freeTrialDays ? "Free" : "→"}
                    </Link>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

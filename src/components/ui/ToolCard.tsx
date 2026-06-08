import Link from "next/link";
import { Tool } from "@/data/tools";
import { affiliateLinks } from "@/config/affiliateLinks";
import StarRating from "./StarRating";

interface ToolCardProps {
  tool: Tool;
  priority?: 1 | 2 | 3;
}

const priorityLabels: Record<number, { label: string; classes: string }> = {
  1: { label: "🏆 Top Pick", classes: "bg-green-100 text-green-700 border-green-200" },
  2: { label: "⭐ Runner-Up", classes: "bg-blue-50 text-blue-700 border-blue-200" },
  3: { label: "👍 Also Great", classes: "bg-slate-100 text-slate-600 border-slate-200" },
};

export default function ToolCard({ tool, priority }: ToolCardProps) {
  const affiliateLink = affiliateLinks[tool.affiliateLinkKey as keyof typeof affiliateLinks] ?? "#";
  const priorityInfo = priority ? priorityLabels[priority] : null;

  return (
    <div
      className={`card relative flex flex-col ${priority === 1 ? "ring-2 ring-green-400" : ""}`}
    >
      {priorityInfo && (
        <span
          className={`absolute -top-3 left-4 badge border font-semibold text-xs px-3 py-1 ${priorityInfo.classes}`}
        >
          {priorityInfo.label}
        </span>
      )}

      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-xl mb-2">
            {tool.name[0]}
          </div>
          <h3 className="text-xl font-bold text-slate-900">{tool.name}</h3>
          <p className="text-sm text-slate-500">{tool.tagline}</p>
        </div>
        <div className="text-right shrink-0">
          <StarRating rating={tool.rating} size="sm" />
          <p className="text-xs text-slate-500 mt-1">
            {tool.pricing.hasFreeTier && tool.pricing.startingPrice === 0
              ? "Free"
              : `From $${tool.pricing.startingPrice}/mo`}
          </p>
          {tool.pricing.freeTrialDays && (
            <p className="text-xs text-green-600 font-medium">{tool.pricing.freeTrialDays}-day free trial</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-slate-500 font-medium mb-2">Best For</p>
        <p className="text-sm text-slate-700">{tool.bestFor}</p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-slate-500 font-medium mb-2">Key Features</p>
        <ul className="space-y-1">
          {tool.keyFeatures.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
              <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4 flex gap-3">
        <Link
          href={affiliateLink}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="btn-primary flex-1 justify-center text-sm"
        >
          Try {tool.name} {tool.pricing.freeTrialDays ? "Free" : "→"}
        </Link>
        <Link
          href={`/${tool.slug}-review${tool.slug === "jobber" || tool.slug === "housecall-pro" ? "-cleaning-business" : ""}`}
          className="btn-outline text-sm py-2 px-4"
        >
          Review
        </Link>
      </div>
    </div>
  );
}

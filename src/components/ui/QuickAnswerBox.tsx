import Link from "next/link";

interface QuickAnswerBoxProps {
  topPick: string;
  reason: string;
  ctaText: string;
  ctaLink: string;
  runnerUp?: string;
  runnerUpReason?: string;
  runnerUpCtaText?: string;
  runnerUpCtaLink?: string;
}

export default function QuickAnswerBox({
  topPick,
  reason,
  ctaText,
  ctaLink,
  runnerUp,
  runnerUpReason,
  runnerUpCtaText,
  runnerUpCtaLink,
}: QuickAnswerBoxProps) {
  return (
    <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 my-8">
      <div className="flex items-start gap-3">
        <span className="text-2xl shrink-0" aria-hidden="true">🏆</span>
        <div className="flex-1">
          <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-1">Quick Answer</p>
          <h3 className="text-xl font-bold text-slate-900 mb-1">
            Our Top Pick: <span className="text-green-700">{topPick}</span>
          </h3>
          <p className="text-slate-600 mb-4">{reason}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={ctaLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-primary"
            >
              {ctaText}
            </Link>
            {runnerUp && runnerUpCtaLink && (
              <div className="mt-2 sm:mt-0">
                <p className="text-xs text-slate-500 mb-1">Runner-up: {runnerUp} — {runnerUpReason}</p>
                {runnerUpCtaText && (
                  <Link
                    href={runnerUpCtaLink}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn-outline text-sm py-2"
                  >
                    {runnerUpCtaText}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

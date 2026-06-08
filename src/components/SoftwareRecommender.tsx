"use client";

import { useState } from "react";
import Link from "next/link";
import { tools, Tool } from "@/data/tools";
import { affiliateLinks } from "@/config/affiliateLinks";
import StarRating from "./ui/StarRating";

interface Answers {
  teamSize?: "solo" | "small" | "growing";
  jobsPerWeek?: "under10" | "10to30" | "over30";
  biggestPain?: "scheduling" | "invoicing" | "team" | "reporting" | "quoting";
  mobileImportance?: "critical" | "nicetohave" | "notneeded";
  budget?: "free" | "under50" | "50to100" | "over100";
}

interface Recommendation {
  tool: Tool;
  matchReasons: string[];
  score: number;
}

function getRecommendations(answers: Answers): Recommendation[] {
  const scored: Recommendation[] = tools.map((tool) => {
    let score = 0;
    const matchReasons: string[] = [];

    // Team size scoring
    if (answers.teamSize === "solo") {
      if (tool.targetBusinessSize.includes("solo")) {
        score += 3;
        matchReasons.push("Designed for solo operators and tiny teams");
      }
    } else if (answers.teamSize === "small") {
      if (tool.targetBusinessSize.includes("small")) {
        score += 3;
        matchReasons.push("Ideal for small teams of 2–5 people");
      }
    } else if (answers.teamSize === "growing") {
      if (tool.targetBusinessSize.includes("medium")) {
        score += 3;
        matchReasons.push("Scales well with growing teams of 6–20");
      }
    }

    // Pain point scoring
    if (answers.biggestPain === "scheduling") {
      if (tool.category.includes("scheduling")) {
        score += 3;
        matchReasons.push("Excellent scheduling and calendar management");
      }
    } else if (answers.biggestPain === "invoicing") {
      if (tool.category.includes("invoicing")) {
        score += 3;
        matchReasons.push("Strong invoicing and payment collection features");
      }
    } else if (answers.biggestPain === "team") {
      if (tool.category.includes("team-management")) {
        score += 4;
        matchReasons.push("Built specifically for team communication and management");
      }
    } else if (answers.biggestPain === "reporting") {
      if (tool.slug === "jobber" || tool.slug === "housecall-pro") {
        score += 3;
        matchReasons.push("Detailed job tracking and business reporting");
      }
    } else if (answers.biggestPain === "quoting") {
      if (tool.slug === "jobber" || tool.slug === "servicem8" || tool.slug === "launch27") {
        score += 3;
        matchReasons.push("Fast quote generation and online approval");
      }
    }

    // Mobile importance
    if (answers.mobileImportance === "critical") {
      if (tool.mobileApp.ios && tool.mobileApp.android) {
        if (tool.slug === "jobber" || tool.slug === "housecall-pro" || tool.slug === "connecteam") {
          score += 3;
          matchReasons.push("Top-rated mobile app for on-the-go management");
        } else {
          score += 1;
        }
      }
    }

    // Budget scoring
    if (answers.budget === "free") {
      if (tool.pricing.hasFreeTier && tool.pricing.startingPrice === 0) {
        score += 5;
        matchReasons.push("Has a genuinely free plan — no credit card needed");
      } else if (tool.pricing.hasFreeTier) {
        score += 2;
        matchReasons.push("Free plan available for getting started");
      } else {
        score -= 3;
      }
    } else if (answers.budget === "under50") {
      if (tool.pricing.startingPrice <= 50) {
        score += 3;
        if (tool.pricing.startingPrice === 0) {
          matchReasons.push("Free option — well within your budget");
        } else {
          matchReasons.push(`Starts at just $${tool.pricing.startingPrice}/mo — fits your budget`);
        }
      } else {
        score -= 2;
      }
    } else if (answers.budget === "50to100") {
      if (tool.pricing.startingPrice <= 99) {
        score += 2;
        matchReasons.push(`Starting at $${tool.pricing.startingPrice}/mo — within your budget`);
      }
    } else if (answers.budget === "over100") {
      if (tool.slug === "jobber" || tool.slug === "housecall-pro") {
        score += 2;
        matchReasons.push("Full-featured premium platform with the best ROI");
      }
    }

    // Jobs per week
    if (answers.jobsPerWeek === "under10") {
      if (tool.pricing.startingPrice <= 49 || tool.pricing.hasFreeTier) {
        score += 1;
      }
    } else if (answers.jobsPerWeek === "over30") {
      if (tool.slug === "jobber" || tool.slug === "housecall-pro" || tool.slug === "swept") {
        score += 2;
        matchReasons.push("Handles high job volume without breaking a sweat");
      }
    }

    return { tool, matchReasons: matchReasons.slice(0, 3), score };
  });

  return scored
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

const steps = [
  {
    id: "teamSize",
    question: "How big is your cleaning business?",
    options: [
      { value: "solo", label: "Just me (solo)", icon: "👤" },
      { value: "small", label: "Small team (2–5 people)", icon: "👥" },
      { value: "growing", label: "Growing business (6–20 people)", icon: "🏢" },
    ],
  },
  {
    id: "jobsPerWeek",
    question: "How many client jobs do you do per week?",
    options: [
      { value: "under10", label: "Under 10", icon: "🌱" },
      { value: "10to30", label: "10–30 jobs", icon: "📈" },
      { value: "over30", label: "More than 30", icon: "🚀" },
    ],
  },
  {
    id: "biggestPain",
    question: "What's your biggest headache right now?",
    options: [
      { value: "scheduling", label: "Scheduling jobs and managing my calendar", icon: "📅" },
      { value: "invoicing", label: "Sending invoices and getting paid", icon: "💰" },
      { value: "team", label: "Communicating with my team", icon: "💬" },
      { value: "reporting", label: "Tracking jobs and writing reports", icon: "📊" },
    ],
  },
  {
    id: "mobileImportance",
    question: "Do you need a good mobile app?",
    options: [
      { value: "critical", label: "Yes, I work from my phone constantly", icon: "📱" },
      { value: "nicetohave", label: "Nice to have but not essential", icon: "🤷" },
      { value: "notneeded", label: "No, I mainly work from a desktop", icon: "💻" },
    ],
  },
  {
    id: "budget",
    question: "What's your monthly budget for software?",
    options: [
      { value: "free", label: "Free only", icon: "🆓" },
      { value: "under50", label: "Under $50/month", icon: "💵" },
      { value: "50to100", label: "$50–100/month", icon: "💰" },
      { value: "over100", label: "Over $100 — I want the best", icon: "⭐" },
    ],
  },
];

export default function SoftwareRecommender() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [recommendations, setRecommendations] = useState<Recommendation[] | null>(null);

  const totalSteps = steps.length;
  const progress = (currentStep / totalSteps) * 100;

  const handleAnswer = (field: keyof Answers, value: string) => {
    const newAnswers = { ...answers, [field]: value as never };
    setAnswers(newAnswers);

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setRecommendations(getRecommendations(newAnswers));
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendations(null);
  };

  const currentStepData = steps[currentStep];

  if (recommendations) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sm:p-8">
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Your Personalised Recommendations</h3>
          <p className="text-slate-500">Based on your answers, here are the best tools for your business:</p>
        </div>

        <div className="space-y-6 mb-8">
          {recommendations.map((rec, idx) => {
            const affiliateLink = affiliateLinks[rec.tool.affiliateLinkKey as keyof typeof affiliateLinks] ?? "#";
            const labels = ["🥇 Best Match", "🥈 Runner-Up", "🥉 Also Consider"];
            return (
              <div
                key={rec.tool.slug}
                className={`rounded-xl border p-5 ${idx === 0 ? "border-green-300 bg-green-50" : "border-slate-200 bg-white"}`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div>
                    <span className={`text-xs font-bold ${idx === 0 ? "text-green-700" : "text-slate-500"}`}>
                      {labels[idx]}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900">{rec.tool.name}</h4>
                    <StarRating rating={rec.tool.rating} size="sm" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">
                      {rec.tool.pricing.startingPrice === 0
                        ? "Free"
                        : `From $${rec.tool.pricing.startingPrice}/mo`}
                    </p>
                    {rec.tool.pricing.freeTrialDays && (
                      <p className="text-xs text-green-600">{rec.tool.pricing.freeTrialDays}-day free trial</p>
                    )}
                  </div>
                </div>
                <ul className="space-y-1 mb-4">
                  {rec.matchReasons.map((reason, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {reason}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href={affiliateLink}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={idx === 0 ? "btn-primary text-sm" : "btn-outline text-sm py-2"}
                  >
                    {rec.tool.pricing.freeTrialDays
                      ? `Try ${rec.tool.name} Free for ${rec.tool.pricing.freeTrialDays} Days`
                      : `Visit ${rec.tool.name}`}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison table of recommended tools */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Tool</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Price</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Trial</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">Rating</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((rec, idx) => (
                <tr key={rec.tool.slug} className={`border-t border-slate-100 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                  <td className="px-4 py-3 font-semibold text-slate-900">{rec.tool.name}</td>
                  <td className="px-4 py-3 text-slate-700">
                    {rec.tool.pricing.startingPrice === 0 ? "Free" : `$${rec.tool.pricing.startingPrice}/mo`}
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    {rec.tool.pricing.freeTrialDays ? `${rec.tool.pricing.freeTrialDays} days` : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <StarRating rating={rec.tool.rating} size="sm" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <button onClick={reset} className="text-sm text-slate-500 hover:text-slate-700 underline">
            ← Start over with different answers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sm:p-8">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-slate-500 mb-2">
          <span>
            Step {currentStep + 1} of {totalSteps}
          </span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">
        {currentStepData.question}
      </h3>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {currentStepData.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(currentStepData.id as keyof Answers, option.value)}
            className="flex items-center gap-3 p-4 rounded-xl border-2 border-slate-200 hover:border-green-400 hover:bg-green-50 transition-all text-left group"
          >
            <span className="text-2xl">{option.icon}</span>
            <span className="font-medium text-slate-800 group-hover:text-green-700">{option.label}</span>
          </button>
        ))}
      </div>

      {currentStep > 0 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}

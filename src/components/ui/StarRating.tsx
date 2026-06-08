interface StarRatingProps {
  rating: number;
  count?: number;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ rating, count, size = "md" }: StarRatingProps) {
  const starSizes = { sm: "w-3 h-3", md: "w-4 h-4", lg: "w-5 h-5" };
  const textSizes = { sm: "text-xs", md: "text-sm", lg: "text-base" };
  const starSize = starSizes[size];
  const textSize = textSizes[size];

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = rating >= star;
          const halfFilled = !filled && rating >= star - 0.5;

          return (
            <svg
              key={star}
              className={`${starSize} ${filled ? "text-amber-400" : halfFilled ? "text-amber-300" : "text-slate-200"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              {halfFilled ? (
                <>
                  <defs>
                    <linearGradient id={`half-${star}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="50%" stopColor="#FBBF24" />
                      <stop offset="50%" stopColor="#E2E8F0" />
                    </linearGradient>
                  </defs>
                  <path
                    fill={`url(#half-${star})`}
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </>
              ) : (
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              )}
            </svg>
          );
        })}
      </div>
      <span className={`font-semibold text-slate-700 ${textSize}`}>{rating.toFixed(1)}</span>
      {count !== undefined && (
        <span className={`text-slate-400 ${textSize}`}>({count.toLocaleString()})</span>
      )}
    </div>
  );
}

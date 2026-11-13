import { Star } from "lucide-react";

/**
 * Star rating display. Supports fractional values (4.3 -> 86% filled).
 * `count` (optional) shows the number of reviews.
 */
function Rating({ value = 0, count, size = 14, showValue = true, className = "" }) {
  const percent = Math.max(0, Math.min(100, (value / 5) * 100));

  const stars = (fill) => (
    <span className="flex">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={size}
          className="shrink-0"
          fill={fill ? "currentColor" : "none"}
        />
      ))}
    </span>
  );

  return (
    <div
      className={`inline-flex items-center gap-1 ${className}`}
      role="img"
      aria-label={`Rated ${value} out of 5${count != null ? ` from ${count} reviews` : ""}`}
    >
      <span className="relative inline-block text-gray-300">
        {stars(false)}
        <span
          className="absolute inset-y-0 left-0 overflow-hidden text-amber-400"
          style={{ width: `${percent}%` }}
        >
          {stars(true)}
        </span>
      </span>

      {showValue && (
        <span className="text-[11px] font-medium text-gray-600">
          {Number(value).toFixed(1)}
          {count != null && <span className="text-gray-400"> ({count})</span>}
        </span>
      )}
    </div>
  );
}

export default Rating;

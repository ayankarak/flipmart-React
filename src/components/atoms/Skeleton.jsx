/** Grey pulsing block. Size it with className, e.g. "h-4 w-24". */
function Skeleton({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded bg-gray-200 ${className}`}
    />
  );
}

export default Skeleton;

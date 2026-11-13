import { Link } from "react-router";
import { motion } from "motion/react";

const baseClasses =
  "flex items-center justify-center rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600";

/**
 * Renders a <Link> when `to` is provided, otherwise a <button>.
 * `badge` (optional) shows a small count bubble.
 */
function IconButton({ icon: Icon, onClick, label, to, badge = 0 }) {
  const content = (
    <>
      <Icon size={19} />
      {badge > 0 && (
        <motion.span
          key={badge}
          initial={{ scale: 0.4 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 18 }}
          className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold leading-none text-white"
        >
          {badge > 99 ? "99+" : badge}
        </motion.span>
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        aria-label={label}
        className={`relative ${baseClasses}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`relative ${baseClasses}`}
    >
      {content}
    </button>
  );
}

export default IconButton;

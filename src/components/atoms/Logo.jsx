import { Link } from "react-router";

function Logo() {
  return (
    <Link to="/" aria-label="Flipmart home" className="flex items-center gap-1">
      <span className="text-2xl">🛍️</span>

      <span className="text-xl font-extrabold text-blue-600">Flipmart</span>
    </Link>
  );
}

export default Logo;

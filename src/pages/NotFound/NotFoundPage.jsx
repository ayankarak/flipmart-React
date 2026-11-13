import { Link } from "react-router";
import { motion } from "motion/react";

function NotFoundPage() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-2 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white px-4 py-20 text-center"
      >
        <p className="text-6xl font-extrabold text-blue-600">404</p>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Page not found
        </h2>

        <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
          The page you are looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Go to Home
          </Link>
          <Link
            to="/products"
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            Browse Products
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default NotFoundPage;

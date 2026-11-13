import { Link, useParams } from "react-router";

/** Temporary page shown for routes not built yet. */
function PlaceholderPage({ title }) {
  const params = useParams();
  const paramEntries = Object.entries(params).filter(([key]) => key !== "*");

  return (
    <section className="mx-auto w-full max-w-[1440px] px-2 py-4">
      <div className="bg-white px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

        {paramEntries.length > 0 && (
          <p className="mt-3 text-sm text-gray-500">
            {paramEntries.map(([key, value]) => (
              <span key={key} className="mr-3">
                {key}: <strong className="text-gray-800">{value}</strong>
              </span>
            ))}
          </p>
        )}

        <p className="mt-3 text-sm text-gray-500">
          This page is coming in an upcoming step.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default PlaceholderPage;

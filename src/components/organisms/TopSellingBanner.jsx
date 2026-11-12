
function TopSellingBanner() {
  return (
    <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gray-800">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&q=85"
        alt="Men's fashion collection"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Banner Content */}
      <div className="relative z-10 px-4 text-center">

        <h2 className="text-3xl font-extrabold text-gray-900 md:text-5xl">
          Top Selling Products
        </h2>

        <p className="mt-4 text-sm font-medium text-gray-800 md:text-base">
          Trending Now: Must-Have Styles for Every Occasion
        </p>

        <button className="mt-6 bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
          Shop Now
        </button>

      </div>

    </section>
  );
}

export default TopSellingBanner;


import Button from "../atoms/Button";

function HeroBanner() {
  return (
    <section className="mx-auto mt-4 w-full max-w-[1440px] px-2">

      <div className="grid min-h-[220px] grid-cols-1 overflow-hidden rounded-sm bg-white md:grid-cols-2">

        {/* Left Content */}
        <div className="flex flex-col items-center justify-center gap-4 p-6 text-center">

          <h1 className="text-3xl font-extrabold uppercase text-gray-900 md:text-5xl">
            Exclusive
            <span className="block text-amber-700">
              Collection
            </span>
          </h1>

          <div className="flex gap-2">
            <span className="h-1.5 w-5 bg-black" />
            <span className="h-1.5 w-5 bg-black" />
            <span className="h-1.5 w-5 bg-black" />
            <span className="h-1.5 w-5 bg-black" />
          </div>

        </div>

        {/* Right Banner Image */}
        <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-amber-800 p-6">

          <img
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85"
            alt="Luxury handbag collection"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 flex flex-col items-center text-white">

            <h2 className="text-5xl font-extrabold md:text-6xl">
              70% OFF
            </h2>

            <Button className="mt-4 bg-white !text-gray-900 hover:!bg-gray-200">
              Order Now
            </Button>

          </div>

          {/* Slider Indicators */}
          <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2">

            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
            <span className="h-2 w-2 rounded-full bg-white/50" />

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroBanner;

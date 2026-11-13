
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Button from "../atoms/Button";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85",
    discount: "70% OFF",
    name: "Luxury Handbag",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
    discount: "50% OFF",
    name: "Premium Headphones",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
    discount: "40% OFF",
    name: "Fashion Collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85",
    discount: "60% OFF",
    name: "Premium Watch",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
    discount: "45% OFF",
    name: "Sneaker Collection",
  },
];

function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section className="mx-auto mt-4 w-full max-w-[1440px] px-2">

      <div className="grid min-h-[220px] grid-cols-1 overflow-hidden rounded-sm bg-white md:grid-cols-2">

        {/* Left Content */}
        <div className="flex flex-col items-center justify-center gap-4 p-6 text-center">

          {/* Animated Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="text-3xl font-extrabold uppercase text-gray-900 md:text-5xl"
          >
            <span className="block">
              {"Exclusive".split("").map((letter, index) => (
                <motion.span
                  key={`exclusive-${index}`}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 30,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>

            <span className="block text-amber-700">
              {"Collection".split("").map((letter, index) => (
                <motion.span
                  key={`collection-${index}`}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 30,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <div className="flex gap-2">
            <span className="h-1.5 w-5 bg-black" />
            <span className="h-1.5 w-5 bg-black" />
            <span className="h-1.5 w-5 bg-black" />
            <span className="h-1.5 w-5 bg-black" />
          </div>

        </div>

        {/* Right Banner Slider */}
        <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-amber-800 p-6">

          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide.image}
              src={currentSlide.image}
              alt={currentSlide.name}
              initial={{ opacity: 0, scale: 1.12 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/30" />

          {/* Animated Discount Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.discount}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 flex flex-col items-center text-white"
            >
              <h2 className="text-5xl font-extrabold md:text-6xl">
                {currentSlide.discount}
              </h2>

              <p className="mt-1 text-sm font-medium">
                {currentSlide.name}
              </p>

              <Button className="mt-4 bg-white !text-gray-900 hover:!bg-gray-200">
                Order Now
              </Button>
            </motion.div>
          </AnimatePresence>

          {/* Slider Indicators */}
          <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2">

            {slides.map((slide, index) => (
              <button
                key={slide.name}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "scale-125 bg-white"
                    : "bg-white/50 hover:bg-white"
                }`}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroBanner;

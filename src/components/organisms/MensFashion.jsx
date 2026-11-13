
import AnimatedProductCard from "../molecules/AnimatedProductCard";
import { menProducts } from "../../data/products";
import TopSellingBanner from "./TopSellingBanner";

function MensFashion() {
  return (
    <section className="mx-auto max-w-[1440px] px-2 py-6 sm:px-5 sm:py-10">

      {/* Section Heading */}
      <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
        Men's Fashion
      </h2>

      {/* Top Selling Banner */}
      <div className="mb-6 sm:mb-8">
        <TopSellingBanner />
      </div>

      {/* Men's Products */}
      <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">

        {menProducts.map((product, index) => (
          <AnimatedProductCard
            key={product.id}
            product={product}
            index={index}
          />
        ))}

      </div>

    </section>
  );
}

export default MensFashion;

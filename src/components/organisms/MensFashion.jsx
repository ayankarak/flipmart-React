
import ProductCard from "../molecules/ProductCard";
import { menProducts } from "../../data/products";
import TopSellingBanner from "./TopSellingBanner";

function MensFashion() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-10">

      {/* Section Heading */}
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Men's Fashion
      </h2>

      {/* Top Selling Banner */}
      <div className="mb-8">
        <TopSellingBanner />
      </div>

      {/* Men's Products */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>

    </section>
  );
}

export default MensFashion;

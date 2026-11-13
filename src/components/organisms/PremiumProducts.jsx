
import ProductCard from "../molecules/ProductCard";
import AdBanner from "./AdBanner";
import AnimatedProductCard from "../molecules/AnimatedProductCard";
import premiumProducts from "../../data/products";

function PremiumProducts() {
  return (
    <section className="mx-auto mt-4 w-full max-w-[1440px] px-2">

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_145px]">

        {/* Premium Products */}
        <div className="bg-white p-3">

          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Premium Products
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">

            {premiumProducts.map((product, index) => (
              <AnimatedProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}

          </div>

        </div>

        {/* Advertisement */}
        <div className="hidden lg:block">
          <AdBanner />
        </div>

        {/* Mobile Advertisement */}
        <div className="lg:hidden">
          <AdBanner />
        </div>

      </div>

    </section>
  );
}

export default PremiumProducts;


import ProductCard from "../molecules/ProductCard";
import AdBanner from "./AdBanner";

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

            {premiumProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                originalPrice={product.originalPrice}
                price={product.price}
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

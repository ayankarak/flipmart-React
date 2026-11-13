
import AdBanner from "./AdBanner";
import AnimatedProductCard from "../molecules/AnimatedProductCard";
import premiumProducts from "../../data/products";

function PremiumProducts() {
  return (
    <section className="mx-auto mt-4 w-full max-w-[1440px] px-2">

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_145px]">

        {/* Premium Products */}
        <div className="min-w-0 bg-white p-3">

          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Premium Products
          </h2>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

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

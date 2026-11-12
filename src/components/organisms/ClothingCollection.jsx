
import ProductCard from "../molecules/ProductCard";
import { clothingProducts } from "../../data/products";

function ClothingCollection() {
  return (
    <section className="mx-auto mt-4 w-full max-w-[1440px] px-2">

      <div className="bg-white p-3">

        {/* Section Heading */}
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Clothing and Girls Collections
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

          {clothingProducts.map((product) => (
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

    </section>
  );
}

export default ClothingCollection;

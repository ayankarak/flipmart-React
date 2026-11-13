
import ProductImage from "../atoms/ProductImage";
import { formatPrice } from "../../utils/format";

function ProductCard({
  image,
  name,
  originalPrice,
  price,
}) {
  return (
    <div className="group w-full min-w-0">

      {/* Product Image */}
      <div className="flex h-32 w-full items-center justify-center overflow-hidden sm:h-40">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105 [&_img]:h-full [&_img]:w-full [&_img]:object-contain">
          <ProductImage src={image} alt={name} />
        </div>
      </div>

      {/* Product Name */}
      <h3 className="mt-3 w-full truncate text-center text-xs text-gray-700 sm:text-sm">
        {name}
      </h3>

      {/* Product Price */}
      <div className="mt-2 flex min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs">

        {originalPrice != null && (
          <span className="text-gray-400 line-through">
            {formatPrice(originalPrice)}
          </span>
        )}

        <span className="font-semibold text-gray-800">
          {formatPrice(price)}
        </span>

      </div>

    </div>
  );
}

export default ProductCard;

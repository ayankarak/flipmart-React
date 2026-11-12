
import ProductImage from "../atoms/ProductImage";

function ProductCard({
    image,
    name,
    originalPrice,
    price,
}) {
    return (
        <div className="group flex min-w-0 flex-col items-center border border-gray-200 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-md">

            {/* Product Image */}
            <div className="h-36 w-full overflow-hidden sm:h-40">
                <div className="h-full w-full transition duration-300 group-hover:scale-105">
                    <ProductImage src={image} alt={name} />
                </div>
            </div>

            {/* Product Name */}
            <h3 className="mt-3 w-full truncate text-center text-xs text-gray-700">
                {name}
            </h3>

            {/* Product Price */}
            <div className="mt-2 flex items-center gap-2 text-xs">

                {originalPrice && (
                    <span className="text-gray-400 line-through">
                        ${originalPrice.toFixed(2)}
                    </span>
                )}

                <span className="font-semibold text-gray-800">
                    ${price.toFixed(2)}
                </span>

            </div>

        </div>
    );
}

export default ProductCard;

import { Link } from "react-router";
import { Eye, Heart, ShoppingCart } from "lucide-react";

import ProductImage from "../atoms/ProductImage";
import Rating from "../atoms/Rating";
import { formatPrice } from "../../utils/format";
import { getDiscountPercent, getStockInfo } from "../../utils/productUtils";
import { useProductActions } from "../../hooks/useProductActions";

function ProductCard({ product, showRating = false }) {
  const { id, name, image, price, originalPrice, rating, reviewCount } = product;

  const { addToCart, toggleWishlist, isWishlisted, inStock } =
    useProductActions(product);

  const discount = getDiscountPercent(product);
  const stock = getStockInfo(product);
  const productPath = `/products/${id}`;

  return (
    <div className="product-card group relative w-full min-w-0">

      {/* Image + overlays */}
      <div className="relative flex h-32 w-full items-center justify-center overflow-hidden sm:h-40">

        <Link
          to={productPath}
          tabIndex={-1}
          aria-hidden="true"
          className="block h-full w-full transition-transform duration-500 group-hover:scale-110"
        >
          <ProductImage src={image} alt={name} />
        </Link>

        {/* Discount badge */}
        {discount > 0 && inStock && (
          <span className="pointer-events-none absolute left-1 top-1 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
            {discount}% OFF
          </span>
        )}

        {/* Out of stock */}
        {!inStock && (
          <span className="pointer-events-none absolute left-1 top-1 rounded bg-gray-800 px-1.5 py-0.5 text-[10px] font-bold text-white">
            Out of stock
          </span>
        )}

        {/* Wishlist heart (stays visible once wishlisted) */}
        <button
          type="button"
          onClick={toggleWishlist}
          aria-label={isWishlisted ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
          aria-pressed={isWishlisted}
          className={`absolute right-1 top-1 rounded-full bg-white p-1.5 shadow transition hover:scale-110 ${
            isWishlisted ? "text-red-500" : "card-reveal text-gray-500 hover:text-red-500"
          }`}
        >
          <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        {/* Action bar */}
        <div className="card-reveal absolute inset-x-1 bottom-1 flex gap-1">
          <button
            type="button"
            onClick={addToCart}
            disabled={!inStock}
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-full bg-blue-600 py-1.5 text-[11px] font-semibold text-white shadow transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
          >
            <ShoppingCart size={13} />
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span>
          </button>

          <Link
            to={productPath}
            aria-label={`View ${name}`}
            title="View product"
            className="inline-flex items-center justify-center rounded-full bg-white px-2.5 text-gray-700 shadow transition hover:bg-gray-100 hover:text-blue-600"
          >
            <Eye size={15} />
          </Link>
        </div>
      </div>

      {/* Product name */}
      <h3 className="mt-3 w-full truncate text-center text-xs text-gray-700 sm:text-sm">
        <Link to={productPath} className="hover:text-blue-600">
          {name}
        </Link>
      </h3>

      {/* Rating (optional) */}
      {showRating && (
        <div className="mt-1 flex justify-center">
          <Rating value={rating} count={reviewCount} size={12} />
        </div>
      )}

      {/* Price */}
      <div className="mt-2 flex min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs">
        {originalPrice != null && (
          <span className="text-gray-400 line-through">
            {formatPrice(originalPrice)}
          </span>
        )}

        <span className="font-semibold text-gray-800">{formatPrice(price)}</span>
      </div>

      {/* Low stock hint */}
      {stock.status === "low" && (
        <p className="mt-1 text-center text-[11px] font-medium text-amber-600">
          {stock.label}
        </p>
      )}
    </div>
  );
}

export default ProductCard;

import { useCallback } from "react";
import { useToast } from "./useToast";
import { useCart } from "./useCart";
import { getStockInfo } from "../utils/productUtils";
import { getDefaultVariant } from "../utils/cartUtils";

/**
 * Single place that product cards use for "Add to Cart" and "Wishlist".
 *
 * Cart is real (Step 4). Wishlist is still a placeholder until Step 5,
 * which only needs to change toggleWishlist / isWishlisted below.
 *
 * Quick-add from a card uses the product's first size/colour; the product
 * details page (Step 7) lets shoppers choose.
 */
export function useProductActions(product) {
  const toast = useToast();
  const { addItem } = useCart();
  const inStock = getStockInfo(product).status !== "out";

  const addToCart = useCallback(() => {
    const variant = getDefaultVariant(product);
    const result = addItem(product, { quantity: 1, ...variant });

    const variantText = [variant.size, variant.color].filter(Boolean).join(", ");
    const label = variantText ? `${product.name} (${variantText})` : product.name;

    switch (result.status) {
      case "added":
        toast.success(`${label} added to cart`, {
          action: { label: "View cart", to: "/cart" },
        });
        break;
      case "limit":
        toast.error(
          `You already have the maximum available (${result.max}) of ${product.name} in your cart`
        );
        break;
      case "out_of_stock":
        toast.error(`${product.name} is out of stock`);
        break;
      default:
        toast.error("Couldn't add this item to your cart");
    }
  }, [addItem, product, toast]);

  const toggleWishlist = useCallback(() => {
    toast.info("Wishlist isn't connected yet. It arrives in Step 5.");
  }, [toast]);

  return { addToCart, toggleWishlist, isWishlisted: false, inStock };
}

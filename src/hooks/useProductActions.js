import { useCallback } from "react";
import { useToast } from "./useToast";
import { getStockInfo } from "../utils/productUtils";

/**
 * Single place that product cards use for "Add to Cart" and "Wishlist".
 *
 * TEMPORARY: the cart and wishlist contexts don't exist yet, so the
 * actions show an info toast. Step 4 (cart) and Step 5 (wishlist) replace
 * the bodies below. ProductCard itself won't need to change.
 */
export function useProductActions(product) {
  const toast = useToast();
  const inStock = getStockInfo(product).status !== "out";

  const addToCart = useCallback(() => {
    if (!inStock) {
      toast.error(`${product.name} is out of stock`);
      return;
    }
    toast.info("Cart isn't connected yet. It arrives in Step 4.");
  }, [inStock, product.name, toast]);

  const toggleWishlist = useCallback(() => {
    toast.info("Wishlist isn't connected yet. It arrives in Step 5.");
  }, [toast]);

  return { addToCart, toggleWishlist, isWishlisted: false, inStock };
}

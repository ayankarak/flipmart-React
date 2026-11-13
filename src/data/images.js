/**
 * Central place for product image URLs.
 * Images come from the DummyJSON CDN (real product photos).
 * Run `npm run check:images` to verify every URL still resolves.
 */
export const IMAGE_CDN = "https://cdn.dummyjson.com/product-images";

export const PLACEHOLDER_IMAGE = "/images/placeholder.svg";

/** productImage("mens-shirts/men-check-shirt", 2) -> full CDN URL */
export function productImage(path, n = 1) {
  const safePath = path.split("/").map(encodeURIComponent).join("/");
  return `${IMAGE_CDN}/${safePath}/${n}.webp`;
}

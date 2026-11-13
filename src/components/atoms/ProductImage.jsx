import { useState } from "react";
import { PLACEHOLDER_IMAGE } from "../../data/images";

/**
 * Shows the product image; if the URL fails to load, falls back to a
 * local placeholder so layouts never show a broken-image icon.
 */
function ProductImage({ src, alt, className = "h-full w-full object-contain" }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const showFallback = !src || failedSrc === src;

  return (
    <img
      src={showFallback ? PLACEHOLDER_IMAGE : src}
      alt={alt}
      loading="lazy"
      onError={() => setFailedSrc(src)}
      className={className}
    />
  );
}

export default ProductImage;

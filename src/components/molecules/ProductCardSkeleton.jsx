import Skeleton from "../atoms/Skeleton";

/** Loading placeholder with the same footprint as <ProductCard />. */
function ProductCardSkeleton() {
  return (
    <div className="w-full min-w-0" role="status" aria-label="Loading product">
      <Skeleton className="h-32 w-full sm:h-40" />
      <Skeleton className="mx-auto mt-3 h-3 w-3/4" />
      <Skeleton className="mx-auto mt-2 h-3 w-1/2" />
    </div>
  );
}

export default ProductCardSkeleton;

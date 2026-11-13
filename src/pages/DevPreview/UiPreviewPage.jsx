import { useToast } from "../../hooks/useToast";
import { useFakeLoading } from "../../hooks/useFakeLoading";
import { getProductById } from "../../utils/productUtils";
import AnimatedProductCard from "../../components/molecules/AnimatedProductCard";
import ProductCardSkeleton from "../../components/molecules/ProductCardSkeleton";
import Rating from "../../components/atoms/Rating";

// 1 = discounted, 14 = out of stock, 21 = low stock, 36 = shoes, 25 = beauty, 8 = laptop
const demoProducts = [1, 14, 21, 36, 25, 8].map(getProductById);

const buttonClass =
  "rounded-full px-4 py-2 text-sm font-medium text-white transition";

/** TEMPORARY developer page at /dev/ui. Removed in a later step. */
function UiPreviewPage() {
  const toast = useToast();
  const [isLoading, reload] = useFakeLoading(1500);

  return (
    <section className="mx-auto w-full max-w-[1440px] space-y-4 px-2 py-4">
      <div className="bg-white p-4">
        <h2 className="text-lg font-bold text-gray-900">Toasts</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            className={`${buttonClass} bg-green-600 hover:bg-green-700`}
            onClick={() =>
              toast.success("Added to cart", {
                action: { label: "View cart", to: "/cart" },
              })
            }
          >
            Success (with link)
          </button>
          <button
            className={`${buttonClass} bg-red-600 hover:bg-red-700`}
            onClick={() => toast.error("Something went wrong")}
          >
            Error
          </button>
          <button
            className={`${buttonClass} bg-blue-600 hover:bg-blue-700`}
            onClick={() => toast.info("Just so you know")}
          >
            Info
          </button>
          <button
            className={`${buttonClass} bg-gray-700 hover:bg-gray-800`}
            onClick={() => {
              for (let i = 1; i <= 6; i++) toast.info(`Stacked toast ${i}`);
            }}
          >
            Fire 6 (max 4 stay)
          </button>
        </div>
      </div>

      <div className="bg-white p-4">
        <h2 className="text-lg font-bold text-gray-900">Rating</h2>
        <div className="mt-3 flex flex-wrap gap-6">
          {[5, 4.3, 3.5, 2, 0].map((value) => (
            <Rating key={value} value={value} count={120} />
          ))}
        </div>
      </div>

      <div className="bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            Product cards (hover them!)
          </h2>
          <button
            className={`${buttonClass} bg-gray-700 hover:bg-gray-800`}
            onClick={reload}
          >
            Reload (show skeletons)
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {isLoading
            ? demoProducts.map((p) => <ProductCardSkeleton key={p.id} />)
            : demoProducts.map((p, i) => (
                <AnimatedProductCard key={p.id} product={p} index={i} showRating />
              ))}
        </div>
      </div>
    </section>
  );
}

export default UiPreviewPage;

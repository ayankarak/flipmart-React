import { Link } from "react-router";
import { Minus, Plus, Trash2 } from "lucide-react";

import ProductImage from "../../components/atoms/ProductImage";
import { useCart } from "../../hooks/useCart";
import { useToast } from "../../hooks/useToast";
import { getProductById } from "../../utils/productUtils";
import { getDefaultVariant } from "../../utils/cartUtils";
import { formatPrice } from "../../utils/format";

const buttonClass =
  "rounded-full px-4 py-2 text-sm font-medium text-white transition bg-gray-700 hover:bg-gray-800";

/**
 * TEMPORARY developer page at /dev/cart for testing CartContext.
 * The real cart page (/cart) is built in a later step.
 */
function CartPreviewPage() {
  const toast = useToast();
  const cart = useCart();

  // Adds `quantity` units and reports exactly what the cart did.
  const tryAdd = (productId, quantity) => {
    const product = getProductById(productId);
    const result = cart.addItem(product, { quantity, ...getDefaultVariant(product) });
    toast.info(
      `${product.name}: asked ${quantity}, status "${result.status}", added ${result.added}`
    );
  };

  const onQuantity = (fn, lineId) => {
    const result = fn(lineId);
    if (result?.status === "limit") toast.error("Maximum available quantity reached");
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] space-y-4 px-2 py-4">
      <div className="bg-white p-4">
        <h2 className="text-lg font-bold text-gray-900">Cart tests</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <button className={buttonClass} onClick={() => tryAdd(1, 1)}>
            Add iPhone ×1
          </button>
          <button className={buttonClass} onClick={() => tryAdd(34, 2)}>
            Add Check Shirt ×2
          </button>
          <button className={buttonClass} onClick={() => tryAdd(21, 5)}>
            Add Knoll chair ×5 (stock 3)
          </button>
          <button className={buttonClass} onClick={() => tryAdd(14, 1)}>
            Add AirPods Max (out of stock)
          </button>
          <button className={buttonClass} onClick={() => tryAdd(19, 20)}>
            Add Selfie Stick ×20 (cap 10)
          </button>
          <button className={buttonClass} onClick={() => tryAdd(1, 0)}>
            Add ×0 (invalid)
          </button>
        </div>
      </div>

      <div className="bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            Cart contents ({cart.cartCount} items)
          </h2>
          {!cart.isEmpty && (
            <button
              className="text-sm font-medium text-red-600 hover:underline"
              onClick={cart.clearCart}
            >
              Clear cart
            </button>
          )}
        </div>

        {cart.isEmpty ? (
          <p className="py-6 text-center text-sm text-gray-500">
            Your cart is empty.{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              Go shopping
            </Link>
          </p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {cart.items.map((line) => (
              <li key={line.id} className="flex items-center gap-3 py-3">
                <div className="h-14 w-14 shrink-0">
                  <ProductImage src={line.product.image} alt={line.product.name} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-800">
                    {line.product.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {[line.size, line.color].filter(Boolean).join(" · ") || "No variant"}
                    {" · "}max {line.maxQuantity}
                  </p>
                </div>

                <div className="flex items-center rounded-full border border-gray-200">
                  <button
                    aria-label="Decrease quantity"
                    className="p-2 text-gray-600 hover:text-blue-600"
                    onClick={() => onQuantity(cart.decreaseQuantity, line.id)}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-6 text-center text-sm font-medium">{line.quantity}</span>
                  <button
                    aria-label="Increase quantity"
                    className="p-2 text-gray-600 hover:text-blue-600"
                    onClick={() => onQuantity(cart.increaseQuantity, line.id)}
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <p className="w-24 text-right text-sm font-semibold text-gray-800">
                  {formatPrice(line.lineTotal)}
                </p>

                <button
                  aria-label={`Remove ${line.product.name}`}
                  className="p-2 text-gray-400 hover:text-red-600"
                  onClick={() => cart.removeItem(line.id)}
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}

        {!cart.isEmpty && (
          <div className="mt-3 space-y-1 border-t border-gray-100 pt-3 text-right text-sm">
            <p className="text-green-700">You save {formatPrice(cart.savings)}</p>
            <p className="text-base font-bold text-gray-900">
              Subtotal: {formatPrice(cart.subtotal)}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default CartPreviewPage;

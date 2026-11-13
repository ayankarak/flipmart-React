import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { readStorage, writeStorage, STORAGE_KEYS } from "../utils/storage";
import {
  addToCartItems,
  getCartTotals,
  getDetailedItems,
  getProductQuantity,
  removeLine,
  sanitizeCart,
  setLineQuantity,
} from "../utils/cartUtils";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null);

const loadCart = () => sanitizeCart(readStorage(STORAGE_KEYS.CART, []));

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);

  // Always holds the latest cart so several quick actions in a row
  // (e.g. double clicks) are computed against up-to-date data.
  const itemsRef = useRef(items);

  const commit = useCallback((next) => {
    itemsRef.current = next;
    setItems(next);
  }, []);

  // Persist on every change.
  useEffect(() => {
    writeStorage(STORAGE_KEYS.CART, items);
  }, [items]);

  // Keep several browser tabs in sync.
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key === STORAGE_KEYS.CART || event.key === null) {
        commit(loadCart());
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [commit]);

  /** addItem(product, { quantity, size, color }) -> { status, added, max } */
  const addItem = useCallback(
    (product, options) => {
      const result = addToCartItems(itemsRef.current, product, options);
      if (result.items !== itemsRef.current) commit(result.items);
      return result;
    },
    [commit]
  );

  const removeItem = useCallback(
    (lineId) => commit(removeLine(itemsRef.current, lineId)),
    [commit]
  );

  const setQuantity = useCallback(
    (lineId, quantity) => {
      const result = setLineQuantity(itemsRef.current, lineId, quantity);
      if (result.items !== itemsRef.current) commit(result.items);
      return result;
    },
    [commit]
  );

  const increaseQuantity = useCallback(
    (lineId) => {
      const line = itemsRef.current.find((l) => l.id === lineId);
      return line ? setQuantity(lineId, line.quantity + 1) : null;
    },
    [setQuantity]
  );

  // Never goes below 1; use removeItem to delete a line.
  const decreaseQuantity = useCallback(
    (lineId) => {
      const line = itemsRef.current.find((l) => l.id === lineId);
      return line ? setQuantity(lineId, line.quantity - 1) : null;
    },
    [setQuantity]
  );

  const clearCart = useCallback(() => commit([]), [commit]);

  const value = useMemo(() => {
    const detailedItems = getDetailedItems(items);
    const { subtotal, savings, count } = getCartTotals(detailedItems);

    return {
      items: detailedItems,
      cartCount: count,
      subtotal,
      savings,
      isEmpty: detailedItems.length === 0,
      getQuantityInCart: (productId) => getProductQuantity(items, productId),
      addItem,
      removeItem,
      setQuantity,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
    };
  }, [items, addItem, removeItem, setQuantity, increaseQuantity, decreaseQuantity, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

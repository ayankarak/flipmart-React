import { getProductById } from "./productUtils.js";

/**
 * Pure cart logic (no React). A cart is an array of lines:
 *   { id, productId, size, color, quantity }
 * Only ids and choices are stored; prices always come from the catalog,
 * so the cart can never show a stale price.
 */

export const MAX_QUANTITY_PER_PRODUCT = 10;

/** Most units of a product that can be in the cart (stock and a hard cap). */
export function getMaxQuantity(product) {
  return Math.max(0, Math.min(product.stock, MAX_QUANTITY_PER_PRODUCT));
}

export function makeLineId(productId, size = null, color = null) {
  return [productId, size ?? "", color ?? ""].join("|");
}

/** First size / colour of a product (used by quick-add on product cards). */
export function getDefaultVariant(product) {
  return {
    size: product.variants?.sizes?.[0] ?? null,
    color: product.variants?.colors?.[0]?.name ?? null,
  };
}

/** Units of one product across all of its lines (different sizes/colours). */
export function getProductQuantity(items, productId) {
  return items
    .filter((line) => line.productId === productId)
    .reduce((sum, line) => sum + line.quantity, 0);
}

/**
 * Adds a product. Returns { items, status, added, max }
 * status: "added" | "limited" (added fewer than asked) | "limit" (none added)
 *         | "out_of_stock" | "invalid"
 */
export function addToCartItems(items, product, { quantity = 1, size = null, color = null } = {}) {
  if (!product) return { items, status: "invalid", added: 0, max: 0 };
  if (!Number.isInteger(quantity) || quantity < 1) {
    return { items, status: "invalid", added: 0, max: getMaxQuantity(product) };
  }

  const max = getMaxQuantity(product);
  if (max === 0) return { items, status: "out_of_stock", added: 0, max };

  const remaining = max - getProductQuantity(items, product.id);
  if (remaining <= 0) return { items, status: "limit", added: 0, max };

  const added = Math.min(quantity, remaining);
  const id = makeLineId(product.id, size, color);
  const exists = items.some((line) => line.id === id);

  const next = exists
    ? items.map((line) =>
        line.id === id ? { ...line, quantity: line.quantity + added } : line
      )
    : [...items, { id, productId: product.id, size, color, quantity: added }];

  return {
    items: next,
    status: added < quantity ? "limited" : "added",
    added,
    max,
  };
}

/** Sets a line's quantity, clamped to [1, available]. */
export function setLineQuantity(items, lineId, quantity) {
  const line = items.find((l) => l.id === lineId);
  const product = line && getProductById(line.productId);
  if (!line || !product) return { items, status: "not_found", quantity: 0 };

  const wanted = Math.floor(Number(quantity));
  if (!Number.isFinite(wanted)) {
    return { items, status: "invalid", quantity: line.quantity };
  }

  const otherLines = getProductQuantity(items, line.productId) - line.quantity;
  const maxForLine = Math.max(1, getMaxQuantity(product) - otherLines);
  const finalQty = Math.min(Math.max(wanted, 1), maxForLine);

  return {
    items: items.map((l) => (l.id === lineId ? { ...l, quantity: finalQty } : l)),
    status: wanted > maxForLine ? "limit" : "ok",
    quantity: finalQty,
  };
}

export function removeLine(items, lineId) {
  return items.filter((line) => line.id !== lineId);
}

/**
 * Cleans anything read from localStorage: unknown products, bad quantities,
 * invalid variants and duplicates are fixed or dropped.
 */
export function sanitizeCart(raw) {
  if (!Array.isArray(raw)) return [];

  let items = [];
  for (const entry of raw) {
    const product = getProductById(entry?.productId);
    if (!product) continue;

    const quantity = Number(entry.quantity);
    if (!Number.isInteger(quantity) || quantity < 1) continue;

    const defaults = getDefaultVariant(product);
    const size = product.variants?.sizes?.includes(entry.size) ? entry.size : defaults.size;
    const color = product.variants?.colors?.some((c) => c.name === entry.color)
      ? entry.color
      : defaults.color;

    items = addToCartItems(items, product, { quantity, size, color }).items;
  }
  return items;
}

/** Joins lines with catalog data and computes line totals. */
export function getDetailedItems(items) {
  return items
    .map((line) => {
      const product = getProductById(line.productId);
      if (!product) return null;
      return {
        ...line,
        product,
        maxQuantity: getMaxQuantity(product),
        lineTotal: product.price * line.quantity,
      };
    })
    .filter(Boolean);
}

export function getCartTotals(detailedItems) {
  const subtotal = detailedItems.reduce((sum, l) => sum + l.lineTotal, 0);
  const mrpTotal = detailedItems.reduce(
    (sum, l) => sum + (l.product.originalPrice ?? l.product.price) * l.quantity,
    0
  );
  return {
    subtotal,
    savings: mrpTotal - subtotal,
    count: detailedItems.reduce((sum, l) => sum + l.quantity, 0),
  };
}

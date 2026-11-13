import products from "../data/products.js";
import categories from "../data/categories.js";

/* ---------- Pricing ---------- */

export function getDiscountPercent(product) {
  if (!product || product.originalPrice == null) return 0;
  if (product.originalPrice <= product.price) return 0;
  return Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );
}

/* ---------- Stock ---------- */

export const LOW_STOCK_THRESHOLD = 10;

/** Returns { status: "out" | "low" | "in", label } */
export function getStockInfo(product) {
  if (!product || product.stock <= 0) {
    return { status: "out", label: "Out of stock" };
  }
  if (product.stock <= LOW_STOCK_THRESHOLD) {
    return { status: "low", label: `Only ${product.stock} left` };
  }
  return { status: "in", label: "In stock" };
}

/* ---------- Lookups ---------- */

export function getAllProducts() {
  return products;
}

/** Route params are strings, so ids are compared as numbers. */
export function getProductById(id) {
  const numericId = Number(id);
  if (!Number.isInteger(numericId)) return null;
  return products.find((p) => p.id === numericId) ?? null;
}

export function getAllCategories() {
  return categories;
}

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug) ?? null;
}

export function getCategoryById(id) {
  return categories.find((c) => c.id === Number(id)) ?? null;
}

/* ---------- Collections (derived categories) ---------- */

const BEST_DEALS_MIN_DISCOUNT = 25;

const collectionRules = {
  "best-deals": (p) => getDiscountPercent(p) >= BEST_DEALS_MIN_DISCOUNT,
  "best-seller": (p) => p.isBestSeller,
};

/** Works for both real categories and derived collections. */
export function getProductsByCategorySlug(slug) {
  const category = getCategoryBySlug(slug);
  if (!category) return [];

  if (category.type === "collection") {
    const rule = collectionRules[category.slug];
    return rule ? products.filter(rule) : [];
  }
  return products.filter((p) => p.categoryId === category.id);
}

/* ---------- Related products ---------- */

export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  return products
    .filter((p) => p.id !== product.id && p.categoryId === product.categoryId)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

/* ---------- Filter helpers (used by the Products page later) ---------- */

export function getBrands(list = products) {
  return [...new Set(list.map((p) => p.brand))].sort((a, b) =>
    a.localeCompare(b)
  );
}

export function getPriceRange(list = products) {
  if (list.length === 0) return { min: 0, max: 0 };
  const prices = list.map((p) => p.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

/** Safe localStorage helpers. They never throw (private mode, quota, bad JSON). */

export const STORAGE_KEYS = {
  CART: "flipmart:cart",
  WISHLIST: "flipmart:wishlist",
  USERS: "flipmart:users",
  SESSION: "flipmart:session",
  ORDERS: "flipmart:orders",
  RECENTLY_VIEWED: "flipmart:recently-viewed",
  SEARCH_HISTORY: "flipmart:search-history",
};

export function readStorage(key, fallback = null) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeStorage(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

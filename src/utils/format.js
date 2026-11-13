const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** formatPrice(109900) -> "₹1,09,900" */
export function formatPrice(value) {
  return inrFormatter.format(Number(value) || 0);
}

/** formatDate("2026-03-05T00:00:00.000Z") -> "5 Mar 2026" */
export function formatDate(value) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

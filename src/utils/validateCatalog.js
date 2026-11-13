import products from "../data/products.js";
import categories from "../data/categories.js";

/** Returns an array of human-readable problems (empty = catalog is valid). */
export function validateCatalog() {
  const problems = [];
  const ids = new Set();
  const categoryIds = new Set(categories.map((c) => c.id));
  const slugs = new Set();

  categories.forEach((c) => {
    if (slugs.has(c.slug)) problems.push(`Duplicate category slug: ${c.slug}`);
    slugs.add(c.slug);
  });

  products.forEach((p) => {
    const tag = `Product ${p.id} (${p.name})`;
    if (ids.has(p.id)) problems.push(`${tag}: duplicate id`);
    ids.add(p.id);

    if (!categoryIds.has(p.categoryId)) problems.push(`${tag}: unknown categoryId ${p.categoryId}`);
    if (!(p.price > 0)) problems.push(`${tag}: invalid price`);
    if (p.originalPrice != null && p.originalPrice <= p.price) {
      problems.push(`${tag}: originalPrice must be greater than price`);
    }
    if (p.rating < 0 || p.rating > 5) problems.push(`${tag}: rating out of range`);
    if (!Number.isInteger(p.stock) || p.stock < 0) problems.push(`${tag}: invalid stock`);
    if (!p.images?.length) problems.push(`${tag}: no images`);
    if (!p.description) problems.push(`${tag}: missing description`);
  });

  return problems;
}

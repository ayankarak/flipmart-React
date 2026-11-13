import { Link } from "react-router";

import ProductImage from "../../components/atoms/ProductImage";
import {
  getAllCategories,
  getAllProducts,
  getBrands,
  getCategoryById,
  getDiscountPercent,
  getProductsByCategorySlug,
  getStockInfo,
} from "../../utils/productUtils";
import { formatPrice } from "../../utils/format";
import { validateCatalog } from "../../utils/validateCatalog";

/**
 * TEMPORARY developer page at /dev/data.
 * Lets you verify the catalog visually. It will be removed later.
 */
function DataPreviewPage() {
  const products = getAllProducts();
  const categories = getAllCategories();
  const problems = validateCatalog();

  return (
    <section className="mx-auto w-full max-w-[1440px] space-y-4 px-2 py-4">
      {/* Validation */}
      <div className="bg-white p-4">
        <h2 className="text-lg font-bold text-gray-900">Catalog validation</h2>
        {problems.length === 0 ? (
          <p className="mt-2 text-sm font-medium text-green-700">
            ✓ {products.length} products, {categories.length} categories,{" "}
            {getBrands().length} brands. No problems found.
          </p>
        ) : (
          <ul className="mt-2 list-disc pl-5 text-sm text-red-600">
            {problems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Categories */}
      <div className="bg-white p-4">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Categories</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <div key={category.id} className="rounded border border-gray-100 p-3 text-center">
              <div className="mx-auto h-16 w-16">
                <ProductImage src={category.image} alt={category.name} />
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-800">{category.name}</p>
              <p className="text-xs text-gray-500">
                /{category.slug} · {getProductsByCategorySlug(category.slug).length} products
                {category.type === "collection" ? " · collection" : ""}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="overflow-x-auto bg-white p-4">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Products</h2>
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="border-b text-xs uppercase text-gray-500">
            <tr>
              <th className="py-2">ID</th>
              <th>Image</th>
              <th>Name / Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Open</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const stock = getStockInfo(product);
              const discount = getDiscountPercent(product);
              return (
                <tr key={product.id} className="border-b border-gray-50">
                  <td className="py-2">{product.id}</td>
                  <td>
                    <div className="h-12 w-12">
                      <ProductImage src={product.image} alt={product.name} />
                    </div>
                  </td>
                  <td>
                    <p className="font-medium text-gray-800">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.brand}</p>
                  </td>
                  <td>{getCategoryById(product.categoryId)?.name}</td>
                  <td>
                    {formatPrice(product.price)}
                    {product.originalPrice != null && (
                      <span className="ml-1 text-xs text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </td>
                  <td>{discount > 0 ? `${discount}% off` : "—"}</td>
                  <td>
                    ★ {product.rating} ({product.reviewCount})
                  </td>
                  <td
                    className={
                      stock.status === "out"
                        ? "text-red-600"
                        : stock.status === "low"
                        ? "text-amber-600"
                        : "text-green-700"
                    }
                  >
                    {stock.label}
                  </td>
                  <td>
                    <Link
                      to={`/products/${product.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      /products/{product.id}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DataPreviewPage;

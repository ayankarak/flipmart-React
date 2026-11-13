import { Routes, Route } from "react-router";

import MainLayout from "../components/common/MainLayout";
import PlaceholderPage from "../components/common/PlaceholderPage";
import HomePage from "../pages/Home/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import DataPreviewPage from "../pages/DevPreview/DataPreviewPage";
import UiPreviewPage from "../pages/DevPreview/UiPreviewPage";
import CartPreviewPage from "../pages/DevPreview/CartPreviewPage";

/**
 * Temporary placeholders. Each one is replaced by a real page
 * in a later step, so every route already resolves today.
 */
const placeholder = (title) => <PlaceholderPage title={title} />;

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/products" element={placeholder("All Products")} />
        <Route
          path="/products/:productId"
          element={placeholder("Product Details")}
        />
        <Route path="/category/:slug" element={placeholder("Category")} />
        <Route path="/search" element={placeholder("Search Results")} />

        <Route path="/cart" element={placeholder("Shopping Cart")} />
        <Route path="/wishlist" element={placeholder("Wishlist")} />

        <Route path="/login" element={placeholder("Login")} />
        <Route path="/register" element={placeholder("Register")} />
        <Route
          path="/forgot-password"
          element={placeholder("Forgot Password")}
        />

        <Route path="/account" element={placeholder("My Account")} />
        <Route path="/checkout" element={placeholder("Checkout")} />

        <Route path="/orders" element={placeholder("My Orders")} />
        <Route path="/orders/:orderId" element={placeholder("Order Details")} />
        <Route
          path="/order-success/:orderId"
          element={placeholder("Order Confirmed")}
        />

        {/* Temporary developer page, removed in a later step */}
        <Route path="/dev/data" element={<DataPreviewPage />} />
        <Route path="/dev/ui" element={<UiPreviewPage />} />
        <Route path="/dev/cart" element={<CartPreviewPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

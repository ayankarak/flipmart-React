import { Outlet } from "react-router";

import Header from "../organisms/Header";
import CategoryNavbar from "../organisms/CategoryNavbar";
import Footer from "../organisms/Footer";
import ScrollToTop from "./ScrollToTop";

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ScrollToTop />

      <Header />
      <CategoryNavbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;

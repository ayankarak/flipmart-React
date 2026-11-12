
import Header from "./components/organisms/Header";
import CategoryNavbar from "./components/organisms/CategoryNavbar";
import HeroBanner from "./components/organisms/HeroBanner";
import PremiumProducts from "./components/organisms/PremiumProducts";
import ClothingCollection from "./components/organisms/ClothingCollection";
import MensFashion from "./components/organisms/MensFashion";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      <CategoryNavbar />

      <main>
        <HeroBanner />

        <PremiumProducts />

        <ClothingCollection />

        <MensFashion />
      </main>

      <Footer />

    </div>
  );
}

export default App;

import HeroBanner from "../../components/organisms/HeroBanner";
import PremiumProducts from "../../components/organisms/PremiumProducts";
import ClothingCollection from "../../components/organisms/ClothingCollection";
import MensFashion from "../../components/organisms/MensFashion";

function HomePage() {
  return (
    <>
      <HeroBanner />
      <PremiumProducts />
      <ClothingCollection />
      <MensFashion />
    </>
  );
}

export default HomePage;

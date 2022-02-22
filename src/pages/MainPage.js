import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import Advantages from "../components/Advantages/Advantages";
import TabsSection from "../components/TabsSection/TabsSection";
import PriceSection from "../components/PriceSection/PriceSection";
import WarrantySection from "../components/WarrantySection/WarrantySection";

function MainPage() {
  return (
    <>
      <Header />
      <Intro />
      <Advantages />
      <TabsSection />
      <PriceSection />
      <WarrantySection />
    </>
  );
}

export default MainPage;

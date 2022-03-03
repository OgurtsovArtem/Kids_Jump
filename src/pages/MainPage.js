import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import Advantages from "../components/Advantages/Advantages";
import TabsSection from "../components/TabsSection/TabsSection";
import PriceSection from "../components/PriceSection/PriceSection";
import WarrantySection from "../components/WarrantySection/WarrantySection";
import PackageSection from "../components/PackageSection/PackageSection";
import GetSection from "../components/GetSection/GetSection";
import TestDriveSection from "../components/TestDriveSection/TestDriveSection";
import BonusSection from "../components/BonusSection/BonusSection";
import OtherDevelopmentsSection from "../components/OtherDevelopmentsSection/OtherDevelopmentsSection";
import FaqMiniSectiono from "../components/FaqMiniSection/FaqMiniSection";

function MainPage() {
  return (
    <>
      <Header />
      <Intro />
      <Advantages />
      <TabsSection />
      <PriceSection />
      <WarrantySection />
      <PackageSection />
      <GetSection />
      <TestDriveSection />
      <BonusSection />
      <OtherDevelopmentsSection />
      <FaqMiniSectiono />
    </>
  );
}

export default MainPage;

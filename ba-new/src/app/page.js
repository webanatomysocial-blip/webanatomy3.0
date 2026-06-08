import GredientScrollText from "@/components/HomeComponents/GredientScrollText";
import OverviewHome from "@/components/HomeComponents/OverviewHome";
import ServicesHomeBoxes from "@/components/HomeComponents/ServicesHomeBoxes";
import HomeBanner from "@/components/HomeComponents/HomeBanner";
import PinCardsHome from "@/components/HomeComponents/PinCardsHome";
import HowDoWeWork from "@/components/HomeComponents/HowDoWeWork";
import ZoomImages from "@/components/HomeComponents/ZoomImages";
import RealResults from "@/components/HomeComponents/RealResults";
import OurClients from "@/components/HomeComponents/OurClients";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Blogs from "@/components/HomeComponents/Blogs";
import LetBaSpark from "@/components/HomeComponents/LetBaSpark";

import "@/app/globals.css";


export default function Home() {
  return (
    <>
    <HomeBanner />
      <GredientScrollText />
      <OverviewHome />
      <ServicesHomeBoxes />
      <PinCardsHome />
      <HowDoWeWork />
      <ZoomImages />
      <OurClients />
      <RealResults />
      <Testimonials />
      <Faq />
      <Blogs />
      <LetBaSpark />
    </>
  );
}

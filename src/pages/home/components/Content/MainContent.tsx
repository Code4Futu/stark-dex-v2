import About from "./components/About";
import Audit from "./components/Audit";
import Backed from "./components/Backed";
import Introduction from "./components/BannerContent";
// import Ecosystem from "./components/Ecosystem";
import Feature from "./components/Feature";
import OurRoadmap from "./components/OurRoadmap";
// import PartnerShip from "./components/PartnerShip";
import { useOpenDrawer } from "../../../../hooks/useOpenDrawer";
import { twMerge } from "tailwind-merge";

export default function MainContentHomepage() {
  const { resizeDrawer } = useOpenDrawer();
  return (
    <div className={twMerge("mt-[104px] flex w-full md:mt-[216px]")}>
      <div className="flex w-full flex-col items-center gap-[80px] min-[1440px]:gap-[240px]">
        <Introduction />
        <About />
        <Feature />
        <Audit />
        {/* <Ecosystem /> */}
        <OurRoadmap />
        <Backed />
        {/* <PartnerShip /> */}
      </div>
    </div>
  );
}

import About from "./components/About/About";
import Audit from "./components/Audit";
import Backed from "./components/Backed";
import { useOpenDrawer } from "../../../../hooks/useOpenDrawer";
import { twMerge } from "tailwind-merge";
import { ProjectCarousel } from "./components/ButtonCarousel";
import { Participate } from "./components/ParticipateSteps/Participate";

export default function MainContentHomepage() {
  const { resizeDrawer } = useOpenDrawer();
  return (
    <div className="mt-[106px] flex w-full md:mt-[216px]">
      <div className="flex w-full flex-col items-center gap-[72px] min-[1440px]:gap-[240px]">
        <div className="flex w-full flex-col gap-6">
          <About />
          <div className="flex px-6">
            <ProjectCarousel />
          </div>
        </div>
        <Participate />
        <Audit />
        <Backed />
      </div>
    </div>
  );
}

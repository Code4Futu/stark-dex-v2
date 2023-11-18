import { useNavigate } from "react-router-dom";
import route from "../../../../routes/route";
import LaunchAppButton from "./components/LaunchAppButton";
import NetworkButton from "./components/NetworkButton";
import LogoNoName from "../../../../components/LogoNoName";

export default function SiteNavigation() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopSiteNavigation />
      </div>
      <div className="md:hidden">
        <MobileSiteNavigation />
      </div>
    </>
  );
}

const MobileSiteNavigation = () => {
  const navigation = useNavigate();

  return (
    <div className="fixed top-0 z-[9999] flex h-[70px] w-screen justify-between border-b-[1px] border-[#1A1C24] bg-[#1A1C24] px-6 py-[17px] backdrop-blur-[30px]">
      <div className="flex items-center">
        <LogoNoName />
      </div>
      <div className="flex items-center gap-3">
        <NetworkButton />
        <LaunchAppButton onClick={() => navigation(route.home)} />
      </div>
    </div>
  );
};

const DesktopSiteNavigation = () => {
  const navigation = useNavigate();

  return (
    <div
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      className="fixed top-0 z-[40] flex h-[96px] w-screen justify-end border-b-[1px] border-[#1A1C24] bg-[#1A1C24] px-8 py-6 pl-[]"
    >
      <div className="flex items-center gap-6">
        <NetworkButton />
        <LaunchAppButton
          onClick={() => navigation(route.home)}
          styleButton="py-3 px-6 rounded-2xl h-12"
        />
      </div>
    </div>
  );
};

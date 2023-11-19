import { useNavigate } from "react-router-dom";
import route from "../../routes/route";
import LaunchAppButton from "./components/LaunchAppButton";
import NetworkButton from "./components/NetworkButton";
import LogoNoName from "../../components/LogoNoName";
import { twMerge } from "tailwind-merge";
import { useLocationPath } from "../../hooks/useLocationPath";
import { BreadCrumb } from "../../components/breadcrumb";
import Logo from "../../components/Logo";

export default function SiteNavigation(props: any) {
  const currentPath = useLocationPath();
  return (
    <>
      <div className="hidden min-[1920px]:block">
        <DesktopSiteNavigation resizeDrawer={props.resizeDrawer} />
      </div>
      <div className="min-[1920px]:hidden">
        <MobileSiteNavigation
          openDrawer={props.openDrawer}
          content={props.content}
        />
        {currentPath !== "/" && <MobileBreadScrums />}
      </div>
    </>
  );
}

const MobileBreadScrums = () => {
  return (
    <div className="fixed top-[96px] z-50 h-[48px] w-screen border-b-[1px] border-[#2D313E] bg-[#0D0E12] px-6 py-3 text-white">
      <BreadCrumb />
    </div>
  );
};

const MobileSiteNavigation = (props: any) => {
  const navigation = useNavigate();
  return (
    <div className="fixed top-0 z-[9999] flex h-[96px] w-screen justify-between border-b-[1px] border-[#2D313E] bg-[#1A1C24] px-6 py-[17px] backdrop-blur-[30px]">
      <div className="flex items-center md:hidden">
        <LogoNoName />
      </div>
      <div className="hidden items-center md:flex">
        <Logo />
      </div>
      <div className="flex items-center gap-3">
        <NetworkButton />
        <LaunchAppButton onClick={() => navigation(route.home)} />
      </div>
      {/* <div
        className={twMerge(
          "absolute left-0 top-0 hidden w-full flex-col",
          props.openDrawer && "flex"
        )}
        style={{
          maxHeight: "calc(100vh - 5rem)",
          overflowY: "auto",
        }}
      >
        <div className="stroke-secondary flex w-full flex-col items-center justify-center gap-[10px] bg-[#1A1C24] p-3 pb-[30px]">
          <div className="flex w-full flex-col items-start gap-[6px]">
            {props.content.map((item: any, idx: any) => {
              if (idx !== props.content.length - 1) {
                return (
                  <div className="flex w-full flex-col" key={idx}>
                    <a
                      className="flex w-full items-center justify-between rounded-2xl px-6 py-3 text-right text-[16px] font-medium text-white hover:bg-[#2D313E] hover:text-[#24c3bc]"
                      href={item.path}
                    >
                      {item.title}
                    </a>
                    <Divider />
                  </div>
                );
              } else {
                return (
                  <div className="flex w-full flex-col" key={idx}>
                    <a
                      className="flex w-full items-center justify-between rounded-2xl px-6 py-3 text-right text-[16px] font-medium text-white hover:bg-[#2D313E] hover:text-[#24c3bc]"
                      href={item.path}
                    >
                      {item.title}
                    </a>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

const DesktopSiteNavigation = (props: any) => {
  const navigation = useNavigate();

  return (
    <div
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      className={twMerge(
        "fixed top-0 z-[40] flex h-[96px] w-screen justify-between border-b-[1px] border-[#1A1C24] bg-[#1A1C24] px-8 py-6",
        props.resizeDrawer ? "pl-[135px]" : "pl-[319px]"
      )}
    >
      <div className="flex items-center">
        <BreadCrumb />
      </div>
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

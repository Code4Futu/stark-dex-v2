import icons from "../../../../../../../assets/icons";

export const HeaderBanner = () => {
  return (
    <>
      <div className="md:hidden">
        <HeaderBannerMobile />
      </div>
      <div className="hidden md:flex lg:hidden">
        <HeaderBannerTablet />
      </div>
      <div className="hidden lg:flex">
        <HeaderBannerDesktop />
      </div>
    </>
  );
};

const HeaderBannerMobile = () => {
  return (
    <div
      className="h-[159px] self-stretch rounded-2xl border-[1px] border-[#2D313E]"
      style={{
        backgroundImage: `url(${icons.v2.about_banner_v2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex h-full w-full items-start gap-2.5 p-3">
        <div className="flex flex-col items-start rounded-xl border-2 border-[#2D313E] bg-[#0D0E12] p-3">
          <span className="text-2xl font-bold">09</span>
          <span className="text-sm font-normal">OCT</span>
        </div>
      </div>
    </div>
  );
};

const HeaderBannerTablet = () => {
  return <>Tablet</>;
};

const HeaderBannerDesktop = () => {
  return <>Desktop</>;
};

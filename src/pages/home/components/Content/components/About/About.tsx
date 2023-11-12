import { AboutUsBanner } from "../Banner";
import { HeaderComponent } from "../HeaderComponent";
import { Wrapper } from "../../../../../../components/layouts";
import icons from "../../../../../../assets/icons";
import { Promote } from "./components/Promote";
import { TableInfo } from "./components/TableInfo";
import LaunchAppButton from "../../../../../../components/buttons/LaunchAppButton";

export default function About() {
  return (
    <div id="about">
      <div className="min-[1440px]:hidden">
        <AboutUsMobile />
      </div>
      <div className="hidden min-[1440px]:flex">
        <AboutUsDesktop />
      </div>
    </div>
  );
}

const AboutUsDesktop = () => {
  return (
    <div className="about-linear-background mx-[98px] flex h-[500px] flex-row gap-10 gap-[95px] rounded-3xl border-[0.5px] border-[#C6C6C6] py-[48px] pl-[48px] pr-[32px]">
      <div className="flex max-w-[540px] flex-col justify-between">
        <div className="flex flex-col gap-6">
          <HeaderComponent
            title="WHAT IS STARKSPORT"
            subTitle="The Best Launchpad"
            className="items-start"
          />
          <AboutUsContent />
        </div>
        <AboutUsButton />
      </div>
      <div className="flex justify-center">
        <AboutUsBanner className="h-[400px] w-[529px]" />
      </div>
    </div>
  );
};

const AboutUsMobile = () => {
  return (
    <Wrapper>
      <div className="flex w-full flex-col gap-6">
        <div className="text-[32px] font-bold text-[#F1F1F1]">
          Welcome to Starksport Launchpad
        </div>
        <div className="flex flex-col items-start justify-center gap-6 rounded-3xl border-2 border-[#24C3BC] bg-[#1A1C24] p-3 pb-6">
          <div
            className="h-[159px] self-stretch rounded-2xl border-[1px] border-[#2D313E]"
            style={{
              backgroundImage: `url(${icons.v2.about_banner_v2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex h-full w-full items-start gap-2.5 p-3">
              <div className="flex flex-col items-start rounded-xl border-2 border-[#2D313E] bg-[#0D0E12] p-3 text-[#F1F1F1]">
                <span className="text-2xl font-bold">09</span>
                <span className="text-sm font-normal">OCT</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-6 self-stretch">
            <Promote />
            <TableInfo />
            <LaunchAppButton title="Go to Launchpad Now" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const AboutUsButton = () => {
  return (
    <div className="button-hover-2 flex items-center justify-center gap-1 self-stretch rounded-2xl bg-white px-5 py-3 min-[1440px]:w-[156px] min-[1440px]:px-6">
      <div className="font-['Exo_2'] text-base font-bold text-[#07051B]">
        More About Us
      </div>
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="self-stretch px-6 text-center font-['Inter'] text-sm font-normal text-[#C6C6C6] min-[1440px]:px-0 min-[1440px]:text-start">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </div>
  );
};

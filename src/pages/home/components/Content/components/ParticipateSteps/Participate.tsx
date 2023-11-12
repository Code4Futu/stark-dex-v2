import { Wrapper } from "../../../../../../components/layouts";

export const Participate = () => {
  return (
    <div id="about">
      <div className="min-[1440px]:hidden">
        <ParticipateMobile />
      </div>
      <div className="hidden min-[1440px]:flex">
        <ParticipateDesktop />
      </div>
    </div>
  );
};

const ParticipateMobile = () => {
  return (
    <Wrapper>
      <div className="flex w-full flex-col gap-6">
        <div className="text-[32px] font-bold text-[#F1F1F1]">
          How to Participate in IDO
        </div>
      </div>
    </Wrapper>
  );
};

const ParticipateDesktop = () => {
  return <></>;
};

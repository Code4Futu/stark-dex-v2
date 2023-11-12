import icons from "../../../../../../../assets/icons";
import { DefaultButton } from "../../../../../../../components/buttons/CreateButton";
import { Eclippse } from "./icons/Eclippse";

export const Promote = () => {
  return (
    <div className="flex items-start gap-3">
      <img
        src={icons.v2.logo_noname}
        alt="logo"
        className="h-[60px] w-[60px]"
      />
      <div className="flex flex-col items-start gap-2">
        <span className="text-2xl font-bold text-[#F1F1F1]">
          Promote Launchpad
        </span>
        <div className="flex flex-wrap content-start items-start gap-2">
          <DefaultButton
            icon={<Eclippse />}
            className="button-linear text-[#61B3FF]"
          >
            Upcoming
          </DefaultButton>
          <DefaultButton
            icon={
              <img
                src={icons.v2.starknet_logo}
                alt="Starknet Logo"
                className="h-[18px] w-[18px]"
              />
            }
            className=""
          >
            Starknet
          </DefaultButton>
          <DefaultButton
            icon={
              <img
                src={icons.v2.logo_noname}
                alt="Starknet Logo"
                className="h-[18px] w-[18px]"
              />
            }
            className=""
          >
            SFN
          </DefaultButton>
          <DefaultButton className="bg-[#3E73FC]">PUBLIC</DefaultButton>
        </div>
      </div>
    </div>
  );
};

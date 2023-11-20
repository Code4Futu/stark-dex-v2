import { Divider } from "../../../components/Divider";
import icons from "../../../assets/icons";
import { DefaultButton } from "../../liquidity/components/DefaultButton";

export const UnclaimedFee = () => {
  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-3xl bg-[#1A1C24] p-6 min-[1920px]:min-w-[342px]">
      <span className="self-stretch text-xl font-bold text-[#f1f1f1]">
        My Liquidity
      </span>
      <span className="text-xl font-bold text-[#24C3BC]">$3600</span>
      <div className="flex flex-col items-start gap-3 self-stretch">
        <Divider />
        <div className="flex items-center justify-between self-stretch">
          <div className="flex items-center gap-1">
            <img
              src={icons.v2.logo_noname}
              alt="starknet logo"
              className="h-6 w-6"
            />
            <span className="text-xs font-medium text-[#c6c6c6]">SFN</span>
          </div>
          <div className="flex flex-col items-end justify-center gap-1">
            <span className="text-sm font-bold text-[#f1f1f1]">0</span>
            <span className="text-xs font-medium text-[#c6c6c6]">$0</span>
          </div>
        </div>
        <div className="flex items-center justify-between self-stretch">
          <div className="flex items-center gap-1">
            <img src={icons.v2.eth_logo} alt="eth logo" className="h-6 w-6" />
            <span className="text-xs font-medium text-[#c6c6c6]">ETH</span>
          </div>
          <div className="flex flex-col items-end justify-center gap-1">
            <span className="text-sm font-bold text-[#f1f1f1]">0</span>
            <span className="text-xs font-medium text-[#c6c6c6]">$0</span>
          </div>
        </div>
        <Divider />
        <DefaultButton
          title="Claim"
          className="bg-[#2D313E]"
          textStyle="text-[#0d0e12] text-base font-bold"
        />
      </div>
    </div>
  );
};

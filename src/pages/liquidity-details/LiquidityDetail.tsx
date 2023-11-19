import icons from "../../assets/icons";
import { Divider } from "../../components/Divider";
import { DefaultButton } from "../liquidity/components/DefaultButton";
import { CopyIcon } from "../swap/components/icons";

export const LiquidityDetail = () => {
  return (
    <div className="flex w-full flex-col gap-6 px-6 py-9 text-white md:items-center min-[1920px]:py-[72px]">
      <div className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-[63px]">
            <img
              src={icons.v2.logo_noname}
              alt="starknet logo"
              className="absolute left-0 h-9 w-9"
            />
            <img
              src={icons.v2.eth_logo}
              alt="eth logo"
              className="absolute right-0 h-9 w-9"
            />
          </div>
          <span className="text-[32px] font-bold text-[#f1f1f1]">SFN/ETH</span>
        </div>
        <div className="flex items-start gap-3 self-stretch">
          <DefaultButton title="Add Liquidity" />
          <DefaultButton className="button-linear-1" title="Trade" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 rounded-3xl bg-[#1A1C24] p-6">
        <div className="flex flex-col items-start gap-[14px] self-stretch">
          <span className="self-stretch text-xl font-bold text-[#f1f1f1]">
            Pool information
          </span>
          <Divider />
        </div>
        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex flex-col items-start gap-[6px]">
            <span className="text-sm font-normal text-[#c6c6c6]">Name</span>
            <span className="text-base font-bold text-[#f1f1f1]">SFN/ETH</span>
          </div>
          <div className="flex flex-col items-start gap-[6px]">
            <span className="text-sm font-normal text-[#c6c6c6]">Fee</span>
            <span className="text-base font-bold text-[#f1f1f1]">0.3%</span>
          </div>
          <div className="flex flex-col items-start gap-[6px]">
            <span className="text-sm font-normal text-[#c6c6c6]">Network</span>
            <span className="text-base font-bold text-[#f1f1f1]">Starknet</span>
          </div>
          <div className="flex flex-col items-start gap-[6px]">
            <span className="text-sm font-normal text-[#c6c6c6]">
              SFN address
            </span>
            <div className="flex items-center justify-center gap-1">
              <span className="text-base font-bold text-[#3E73FC]">
                0xf059...7410
              </span>
              <CopyIcon />
            </div>
          </div>
          <div className="flex flex-col items-start gap-[6px]">
            <span className="text-sm font-normal text-[#c6c6c6]">
              ETH address
            </span>
            <div className="flex items-center justify-center gap-1">
              <span className="text-base font-bold text-[#3E73FC]">
                0xf059...7410
              </span>
              <CopyIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

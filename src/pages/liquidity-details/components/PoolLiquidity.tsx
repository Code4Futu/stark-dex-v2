import icons from "../../../assets/icons";
import { Divider } from "../../../components/Divider";

export const PoolLiquidity = () => {
  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-3xl bg-[#1A1C24] p-6 min-[1920px]:min-w-[342px]">
      <span className="self-stretch text-xl font-bold text-[#f1f1f1]">
        Pool Liquidity
      </span>
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex items-center justify-between self-stretch">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-[#c6c6c6]">Total</span>
          </div>
          <span className="text-sm font-bold text-[#f1f1f1]">$3,600,000</span>
        </div>
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
          <div className="flex flex-col items-end gap-1">
            <span className="text-sm font-bold text-[#f1f1f1]">1,800,000</span>
            <span className="text-xs font-medium text-[#c6c6c6]">
              $1,800,000
            </span>
          </div>
        </div>
        <Divider />
        <div className="flex items-center justify-between self-stretch">
          <div className="flex items-center gap-1">
            <img
              src={icons.v2.eth_logo}
              alt="starknet logo"
              className="h-6 w-6"
            />
            <span className="text-xs font-medium text-[#c6c6c6]">ETH</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-sm font-bold text-[#f1f1f1]">1000</span>
            <span className="text-xs font-medium text-[#c6c6c6]">
              $1,800,000
            </span>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

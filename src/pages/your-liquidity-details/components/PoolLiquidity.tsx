import icons from "../../../assets/icons";
import { Divider } from "../../../components/Divider";

export const PoolLiquidity = () => {
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
            <span className="text-xs font-medium text-[#c6c6c6]">
              Pooled SFN
            </span>
          </div>
          <span className="text-sm font-bold text-[#f1f1f1]">1800</span>
        </div>
        <div className="flex items-center justify-between self-stretch">
          <div className="flex items-center gap-1">
            <img src={icons.v2.eth_logo} alt="eth logo" className="h-6 w-6" />
            <span className="text-xs font-medium text-[#c6c6c6]">
              Pooled ETH
            </span>
          </div>
          <span className="text-sm font-bold text-[#f1f1f1]">1</span>
        </div>
        <Divider />
        <div className="flex items-center justify-between self-stretch">
          <div className="flex items-center gap-1">
            <div className="relative h-6 w-[43px]">
              <img
                src={icons.v2.logo_noname}
                alt="starknet logo"
                className="absolute left-0 h-6 w-6"
              />
              <img
                src={icons.v2.eth_logo}
                alt="eth logo"
                className="absolute right-0 h-6 w-6"
              />
            </div>
            <span className="text-xs font-medium text-[#c6c6c6]">
              SFN-ETH LP
            </span>
          </div>
          <span className="text-sm font-bold text-[#f1f1f1]">1</span>
        </div>
        <Divider />
        <div className="flex items-center justify-between self-stretch">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-[#c6c6c6]">
              Share of pool
            </span>
          </div>
          <span className="text-sm font-bold text-[#f1f1f1]">0.01%</span>
        </div>
      </div>
    </div>
  );
};

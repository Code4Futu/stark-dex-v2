import icons from "../../assets/icons";
import { DefaultButton } from "../liquidity/components/DefaultButton";
import {
  ChartDetail,
  PoolInfomation,
  PoolLiquidity,
  PoolStatistics,
  Table,
} from "./components";

export const LiquidityDetail = () => {
  return (
    <div className="flex w-full flex-col gap-6 px-6 py-9 pb-[80px] text-white md:items-center min-[1920px]:py-[72px] min-[1920px]:pb-0">
      <div className="flex w-full max-w-[1088px] flex-col items-start gap-3 md:flex-row md:justify-between">
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
          <DefaultButton title="Add Liquidity" className="md:w-[143px]" />
          <DefaultButton
            className="button-linear-1 md:w-[90px]"
            title="Trade"
          />
        </div>
      </div>
      <PoolInfomation />
      <div className="flex w-full max-w-[1088px] flex-col gap-6 min-[1920px]:hidden">
        <div className="flex w-full flex-col gap-6 md:hidden">
          <PoolLiquidity />
          <PoolStatistics />
        </div>
        <div className="hidden w-full gap-6 md:flex">
          <PoolLiquidity />
          <PoolStatistics />
        </div>
        <ChartDetail />
      </div>
      <div className="hidden w-full max-w-[1088px] gap-6 min-[1920px]:flex">
        <div className="flex flex-col items-start gap-6">
          <PoolLiquidity />
          <PoolStatistics />
        </div>
        <ChartDetail />
      </div>
      <Table />
    </div>
  );
};

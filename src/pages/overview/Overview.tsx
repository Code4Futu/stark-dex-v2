import { Divider } from "../../components/Divider";
import { DonaInput } from "../../components/StarkInput";
import { DefaultButton } from "../liquidity/components/DefaultButton";
import {
  ChartDetail,
  LineChart,
  SfnInformation,
  TopPairs,
  TopToken,
} from "./components";

export const Overview = () => {
  return (
    <div className="flex w-full flex-col gap-6 px-6 py-9 pb-[80px] text-white md:items-center min-[1920px]:py-[72px] min-[1920px]:pb-0">
      <div className="flex w-full max-w-[1088px] flex-col items-start gap-3">
        <div className="flex w-full flex-col items-start gap-3 min-[1920px]:hidden">
          <div className="flex items-start">
            <span className="text-[32px] font-bold text-[#F1F1F1]">
              Starksport Overview
            </span>
          </div>
          <DonaInput
            className="rounded-2xl border-[1px] !border-[#2D313E] !bg-[#0D0E12]"
            placeholder="Search name..."
          />
        </div>
        <div className="hidden w-full items-start justify-between gap-3 min-[1920px]:flex">
          <div className="flex items-start">
            <span className="text-[32px] font-bold text-[#F1F1F1]">
              Starksport Overview
            </span>
          </div>
          <DonaInput
            className="max-w-[420px] rounded-2xl border-[1px] !border-[#2D313E] !bg-[#0D0E12]"
            placeholder="Search name..."
          />
        </div>
        <ChartDetail />
      </div>
      <div className="flex h-[375px] w-full flex-col items-start gap-3 rounded-3xl bg-[#1A1C24] p-6">
        <div className="flex items-end">
          <span className="text-xl font-bold text-[#f1f1f1]">TVL</span>
        </div>
        <Divider />
        <div className="flex flex-col items-start gap-1">
          <span className="text-xl font-bold text-[#f1f1f1]">$686.86k</span>
          <span className="text-xs font-medium text-[#c6c6c6]">
            Nov 05, 2023, 17:00 (UTM)
          </span>
        </div>
        <LineChart />
      </div>
      <SfnInformation />
      <div className="flex w-full flex-col items-start gap-9 self-stretch">
        <div className="flex w-full items-start gap-3">
          <DefaultButton
            title="Trade SFN Token"
            className="button-linear-1 md:max-w-[171px]"
            textStyle="text-[#1A1C24] text-base font-bold"
          />
          <DefaultButton
            title="Add Liquidity"
            className="md:w-[143px]"
            textStyle="text-[#0D0E12] text-base font-bold"
          />
        </div>
        <span className="self-stretch text-2xl font-bold text-[#f1f1f1]">
          Top Tokens
        </span>
        <TopToken />
        <span className="self-stretch text-2xl font-bold text-[#f1f1f1]">
          Top Pairs
        </span>
        <TopPairs />
      </div>
    </div>
  );
};

import { Slider } from "antd";
import { Divider } from "../../../components/Divider";
import { DefaultButton } from "../../liquidity/components/DefaultButton";

export const RemoveLiquidity = () => {
  return (
    <div className="flex w-full flex-col items-start gap-3 rounded-3xl bg-[#1A1C24] p-6">
      <div className="flex flex-col items-start gap-1">
        <span className="text-xl font-bold text-[#f1f1f1]">
          Remove SFN/ETH liquidity
        </span>
      </div>
      <Divider />
      <div className="flex flex-col items-end gap-3 self-stretch">
        <div className="flex flex-col items-center gap-2 self-stretch rounded-2xl border-[1px] border-[#2D313E] bg-[#0D0E12] p-3">
          <span className="h-[19px] self-stretch text-base font-bold text-[#24c3bc]">
            LP tokens in your wallet:
          </span>
          <div className="flex items-center justify-between self-stretch">
            <div className="flex items-center gap-1">
              <span className="text-xs font-medium text-[#c6c6c6]">
                SFN/ETH LP
              </span>
            </div>
            <span className="text-right text-sm font-bold text-[#f1f1f1]">
              1
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 self-stretch rounded-2xl border-[1px] border-[#2D313E] bg-[#0D0E12] p-3">
          <span className="text-base font-bold text-[#24c3bc]">Amount</span>
          <div className="flex items-end justify-between self-stretch">
            <span className="text-2xl font-bold text-[#f1f1f1]">50%</span>
            <div className="flex items-end gap-[10px]">
              <div
                style={{ background: "rgba(255, 255, 255, 0.10)" }}
                className="flex items-center justify-center gap-[10px] rounded-xl p-2"
              >
                <span className="text-sm font-bold text-[#f1f1f1]">25%</span>
              </div>
              <div className="button-linear-1 flex items-center justify-center gap-[10px] rounded-xl p-2">
                <span className="text-sm font-bold text-[#1A1C24]">50%</span>
              </div>
              <div
                style={{ background: "rgba(255, 255, 255, 0.10)" }}
                className="flex items-center justify-center gap-[10px] rounded-xl p-2"
              >
                <span className="text-sm font-bold text-[#f1f1f1]">75%</span>
              </div>
              <div
                style={{ background: "rgba(255, 255, 255, 0.10)" }}
                className="flex items-center justify-center gap-[10px] rounded-xl p-2"
              >
                <span className="text-sm font-bold text-[#f1f1f1]">MAX</span>
              </div>
            </div>
          </div>
          <Slider defaultValue={30} className="w-full" />
        </div>
        <DefaultButton
          title="Remove"
          className="button-linear-1"
          textStyle="text-base font-bold text-[#1a1c24]"
        />
      </div>
    </div>
  );
};

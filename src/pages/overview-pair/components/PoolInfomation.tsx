import { Divider } from "../../../components/Divider";
import { CopyIcon } from "../../swap/components/icons";

export const PoolInfomation = () => {
  return (
    <div className="flex w-full max-w-[1088px] flex-col items-start gap-6 rounded-3xl bg-[#1A1C24] p-6">
      <div className="flex flex-col items-start gap-[14px] self-stretch">
        <span className="self-stretch text-xl font-bold text-[#f1f1f1]">
          Pool information
        </span>
        <Divider />
      </div>
      <div className="flex flex-col items-start gap-6 self-stretch md:flex-row md:justify-between">
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
  );
};

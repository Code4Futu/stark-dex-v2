import { Divider } from "../../../../../../../components/Divider";

export const TableInfo = () => {
  return (
    <div className="flex flex-col items-start gap-3 self-stretch rounded-2xl border-[1px] border-[#2D313E] bg-[#0D0E12] p-6 text-[#F1F1F1]">
      <div className="flex flex-col items-start gap-[10px]">
        <span className="text-xs font-medium text-[#C6C6C6]">Total raise</span>
        <span className="text-base font-bold">100,000 USDT</span>
      </div>
      <Divider className="my-3" />
      <div className="flex flex-col items-start gap-[10px]">
        <span className="text-xs font-medium text-[#C6C6C6]">Total sales</span>
        <span className="text-base font-bold">100,000,000 SFN</span>
      </div>
      <Divider className="my-3" />
      <div className="flex flex-col items-start gap-[10px]">
        <span className="text-xs font-medium text-[#C6C6C6]">Rate</span>
        <span className="text-base font-bold">1 SFN = 0.001 USDT</span>
      </div>
      <Divider className="my-3" />
      <div className="flex w-full flex-col items-start gap-[10px]">
        <span className="text-xs font-medium text-[#C6C6C6]">
          Launchpad open in
        </span>
        <div className="flex items-center justify-between self-stretch">
          <div className="flex items-center gap-1">
            <span className="text-base font-bold">00</span>
            <span className="text-sm font-normal text-[#C6C6C6]">Days</span>
          </div>
          <span className="text-xl font-medium">:</span>
          <div className="flex items-center gap-1">
            <span className="text-base font-bold">00</span>
            <span className="text-sm font-normal text-[#C6C6C6]">Hrs</span>
          </div>
          <span className="text-xl font-medium">:</span>
          <div className="flex items-center gap-1">
            <span className="text-base font-bold">00</span>
            <span className="text-sm font-normal text-[#C6C6C6]">Mins</span>
          </div>
          <span className="text-xl font-medium">:</span>
          <div className="flex items-center gap-1">
            <span className="text-base font-bold">00</span>
            <span className="text-sm font-normal text-[#C6C6C6]">Secs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

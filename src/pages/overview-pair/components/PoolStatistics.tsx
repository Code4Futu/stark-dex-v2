import { Divider } from "../../../components/Divider";

export const PoolStatistics = () => {
  return (
    <div className="flex w-full flex-col items-start gap-3 rounded-3xl bg-[#1A1C24] p-6 min-[1920px]:min-w-[342px]">
      <span className="self-stretch text-xl font-bold text-[#f1f1f1]">
        Pool statistics
      </span>
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex items-start justify-between self-stretch">
          <span className="text-xs font-medium text-[#c6c6c6]">Liquidity</span>
          <div className="flex items-end justify-end gap-1">
            <span className="text-xl font-bold text-[#f1f1f1]">$68.68m</span>
            <span className="text-xs font-medium text-[#6CFF7B]">↑68%</span>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex items-start justify-between self-stretch">
          <span className="text-xs font-medium text-[#c6c6c6]">
            Volume (24h)
          </span>
          <div className="flex items-end justify-end gap-1">
            <span className="text-xl font-bold text-[#f1f1f1]">$686.86k</span>
            <span className="text-xs font-medium text-[#6CFF7B]">↑68%</span>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex items-start justify-between self-stretch">
          <span className="text-xs font-medium text-[#c6c6c6]">Fee (24h)</span>
          <div className="flex items-end justify-end gap-1">
            <span className="text-xl font-bold text-[#f1f1f1]">$6.86k</span>
            <span className="text-xs font-medium text-[#6CFF7B]">↑68%</span>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex items-start justify-between self-stretch">
          <span className="text-xs font-medium text-[#c6c6c6]">
            Transactions (24h)
          </span>
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold text-[#f1f1f1]">6868</span>
            <span className="text-xs font-medium text-[#FF6C6C]">↓68%</span>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

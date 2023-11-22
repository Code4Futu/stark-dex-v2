import { Divider } from "../../../components/Divider";

export const CirculatingSupply = () => {
  return (
    <div className="flex w-full max-w-[1088px] flex-col items-start gap-3 rounded-3xl bg-[#1A1C24] p-6 min-[1920px]:h-[573px] min-[1920px]:min-w-[342px]">
      <span className="self-stretch text-xl font-bold text-[#f1f1f1]">
        Circulating supply
      </span>
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex items-start justify-between self-stretch">
          <span className="text-xs font-medium text-[#c6c6c6]">
            Circulating supply
          </span>
          <div className="flex items-end justify-end gap-1">
            <span className="text-xl font-bold text-[#f1f1f1]">68,680,000</span>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex items-start justify-between self-stretch">
          <span className="text-xs font-medium text-[#c6c6c6]">Market cap</span>
          <div className="flex items-center justify-end gap-1">
            <span className="text-xs font-medium text-[#6CFF7B]">↑68%</span>
            <span className="text-xl font-bold text-[#f1f1f1]">
              $68,680,000
            </span>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex items-start justify-between self-stretch">
          <span className="text-xs font-medium text-[#c6c6c6]">
            Volume (24h)
          </span>
          <div className="flex items-center justify-end gap-1">
            <span className="text-xs font-medium text-[#6CFF7B]">↑68%</span>
            <span className="text-xl font-bold text-[#f1f1f1]">$686,860</span>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex items-start justify-between self-stretch">
          <span className="text-xs font-medium text-[#c6c6c6]">
            Total supply
          </span>
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold text-[#f1f1f1]">
              100,000,000
            </span>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

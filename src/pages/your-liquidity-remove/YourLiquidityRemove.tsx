import { PoolInfomation, RemoveLiquidity } from "./components";
import { ArrowBack } from "./icons";

export const YourLiquidityRemove = () => {
  return (
    <div className="flex w-full flex-col gap-6 px-6 py-9 pb-[80px] text-white md:items-center min-[1920px]:py-[72px] min-[1920px]:pb-0">
      <div className="inline-flex items-center gap-1">
        <ArrowBack />
        <span className="text-[32px] font-bold text-[#f1f1f1]">Remove</span>
      </div>
      <PoolInfomation />
      <RemoveLiquidity />
    </div>
  );
};

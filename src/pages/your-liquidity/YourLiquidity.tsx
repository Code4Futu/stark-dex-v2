import { Pagination } from "antd";
import { Divider } from "../../components/Divider";
import { DonaInput } from "../../components/StarkInput";
import { DefaultButton } from "./components/DefaultButton";
import { TransactionDesktop } from "./components/TransactionDesktop";
import { TransactionMobile } from "./components/TransactionMobile";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";

const HeaderMobile = () => {
  const navigation = useNavigate();
  return (
    <div className="flex w-full flex-col items-start gap-3">
      <div className="flex items-end justify-end">
        <span className="text-[32px] font-bold text-[#F1F1F1]">Liquidity</span>
      </div>
      <div className="flex w-full items-start gap-3">
        <DefaultButton
          title="All Pool"
          onClick={() => navigation("/liquidity")}
          className="bg-[#2D313E]"
          textStyle="text-[#f1f1f1]"
        />
        <DefaultButton
          onClick={() => navigation("/your-liquidity")}
          title="My Pools"
        />
      </div>
    </div>
  );
};

const HeaderDesktop = () => {
  const navigation = useNavigate();
  return (
    <div className="flex w-full flex-row justify-between gap-3">
      <div className="flex items-end justify-end">
        <span className="text-[32px] font-bold text-[#F1F1F1]">Liquidity</span>
      </div>
      <div className="flex gap-3">
        <DefaultButton
          onClick={() => navigation("/liquidity")}
          title="All Pool"
          className="w-[104px] bg-[#2D313E]"
          textStyle="text-[#f1f1f1]"
        />
        <DefaultButton
          onClick={() => navigation("/your-liquidity")}
          className="w-[114px]"
          title="My Pools"
        />
      </div>
    </div>
  );
};

export const YourLiquidity = () => {
  return (
    <div className="flex w-full flex-col gap-6 px-6 py-9 text-white md:items-center min-[1920px]:py-[72px]">
      <div className="flex w-full max-w-[1088px] flex-col items-start gap-3">
        <div className="w-full md:hidden">
          <HeaderMobile />
        </div>
        <div className="hidden w-full gap-3 md:flex">
          <HeaderDesktop />
          <div className="hidden min-[1920px]:flex">
            <DonaInput
              className="w-[303px] rounded-2xl border-[1px] !border-[#2D313E] !bg-[#0D0E12]"
              placeholder="Search name..."
            />
          </div>
        </div>
        <div className="w-full min-[1920px]:hidden">
          <DonaInput
            className="rounded-2xl border-[1px] !border-[#2D313E] !bg-[#0D0E12]"
            placeholder="Search name..."
          />
        </div>
      </div>
      <div className="flex w-full max-w-[1088px] flex-col items-start gap-3 rounded-3xl bg-[#1A1C24] p-6">
        <span className="self-stretch text-xl font-bold text-[#f1f1f1]">
          Pool(50)
        </span>
        <Divider />
        <div className="w-full md:hidden">
          <TransactionMobile />
        </div>
        <div className="hidden w-full md:flex">
          <TransactionDesktop />
        </div>
        <div className="flex w-full items-center justify-center">
          <Pagination defaultCurrent={1} total={1000} />
        </div>
      </div>
    </div>
  );
};

import { Divider } from "../../../components/Divider";
import { TransactionDesktop } from ".";
import { Transaction } from ".";
import { Pagination } from "antd";

export const Table = () => {
  return (
    <div className="flex w-full max-w-[1089px] flex-col items-start gap-3 rounded-3xl bg-[#1A1C24] p-6">
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex items-end justify-between self-stretch">
          <span className="text-xl font-bold text-[#F1F1F1]">Transactions</span>
          <div className="flex items-start gap-2 rounded-md border-[1px] border-[#2D313E] bg-[#0D0E12]">
            <div className="flex items-center justify-center gap-[10px] rounded-md bg-[#2D313E] px-3 py-[6px]">
              <span className="text-xs font-medium text-[#F1F1F1]">All</span>
            </div>
            <div className="flex items-center justify-center gap-[10px] rounded-md px-3 py-[6px]">
              <span className="text-xs font-medium text-[#F1F1F1]">
                Wallet tx
              </span>
            </div>
          </div>
        </div>
        <Divider />
        <div className="hidden w-full md:flex">
          <TransactionDesktop />
        </div>
        <div className="flex flex-col items-start gap-3 self-stretch md:hidden">
          <Transaction />
          <Transaction />
          <Transaction />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Pagination defaultCurrent={1} total={1000} />
      </div>
    </div>
  );
};

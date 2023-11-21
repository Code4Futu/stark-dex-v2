import { Pagination } from "antd";
import { Divider } from "../../../components/Divider";
import { TransactionDesktop } from "./TransactionDesktop";
import { TransactionMobile } from "./TransactionMobile";

export const TopPairs = () => {
  return (
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
  );
};

import React from "react";

export default function ViewLockInfo() {
  return (
    <div className="mx-auto w-full max-w-[1200px] text-white">
      <div className="flex flex-col gap-3 rounded bg-[#1A1F29] py-6 text-white">
        <p className="ml-6 text-[24px] font-bold text-[#24c3bc]">LOCK INFO</p>
        <div className="flex flex-col gap-3">
          <div className="mx-8 flex justify-between">
            <span>Current Locker Amount</span>
            <span>100,000 ARS</span>
          </div>
          <div className="mx-8 flex justify-between">
            <span>Current Values Locker</span>
            <span>$1,000,000</span>
          </div>
          <div className="mx-8 flex justify-between">
            <span>Token Address</span>
            <span>0x12345..789</span>
          </div>
          <div className="mx-8 flex justify-between">
            <span>Token Name</span>
            <span>Arselna</span>
          </div>
          <div className="mx-8 flex justify-between">
            <span>Token Symbol</span>
            <span>ARS</span>
          </div>
          <div className="mx-8 flex justify-between">
            <span>Token Decimals</span>
            <span>18</span>
          </div>
          <div className="mx-8 flex justify-between">
            <span>Lock Date</span>
            <span>2023.08.04 12:00 UTC ( 1 years)</span>
          </div>
        </div>
      </div>
      <div className="mt-[84px] flex flex-col gap-3 rounded bg-[#1A1F29] py-6 text-white">
        <p className="ml-6 text-[24px] font-bold text-[#24c3bc]">
          LOCK RECORDS
        </p>
        <div className="mx-6">
          <table className="w-full table-auto">
            <tr className="h-10">
              <th className="text-start text-sm font-normal	md:text-lg">
                Owner
              </th>
              <th className="text-start text-sm font-normal	md:text-lg ">
                Amount
              </th>
              <th className="text-start text-sm font-normal	md:text-lg">
                Cycle(days)
              </th>
              <th className="text-start text-sm font-normal	md:text-lg">
                Cysle Release (%)
              </th>
              <th className="text-start text-sm font-normal	md:text-lg ">
                TGE (%)
              </th>
              <th className="text-start text-sm font-normal	md:text-lg">
                Unlock time (UTC)
              </th>
            </tr>
            <tr className="h-12 border-b border-gray-400/50">
              <td className="text-xs md:text-sm">0x12345..789</td>
              <td className="text-xs md:text-sm">100,000 ARS</td>
              <td className="text-xs md:text-sm">32</td>
              <td className="text-xs md:text-sm">70</td>
              <td className="text-xs md:text-sm">60</td>
              <td className="text-xs md:text-sm">2023.01.01 12:00 </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="mt-[84px] flex flex-col items-center justify-center gap-3 rounded bg-[#1A1F29] py-6 text-white">
        <p className="mx-6 text-[24px] font-bold text-white">UNLOCK IN</p>
        <div className="mx-6 flex gap-3">
          <div className="flex h-[26px] w-[30px] justify-center bg-[#24c3bc]">
            2
          </div>
          <div className="flex h-[26px] w-[30px] justify-center bg-[#24c3bc]">
            2
          </div>
          <div className="flex h-[26px] w-[30px] justify-center bg-[#24c3bc]">
            2
          </div>
          <div className="flex h-[26px] w-[30px] justify-center bg-[#24c3bc]">
            2
          </div>
        </div>
      </div>
    </div>
  );
}

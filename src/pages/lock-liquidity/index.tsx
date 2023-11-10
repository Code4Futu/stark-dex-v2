import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import icons from "../../assets/icons";
import { Pagination, PaginationProps } from "antd";
import { useNavigate } from "react-router-dom";
import route from "../../routes/route";
const lockData = [
  {
    icon: icons.demo.logo1,
    title: "Arsenal/Starksport",
    subtitle: "ARS/SFN",
    owner: "0xdf231...2dae7e3f",
    amount: "10,000.0 STRK",
  },
  {
    icon: icons.demo.logo2,
    title: "Arsenal/Starksport",
    subtitle: "ARS/SFN",
    owner: "0xdf231...2dae7e3f",
    amount: "10,000.0 STRK",
  },
  {
    icon: icons.demo.logo3,
    title: "Arsenal/Starksport",
    subtitle: "ARS/SFN",
    owner: "0xdf231...2dae7e3f",
    amount: "10,000.0 STRK",
  },
  {
    icon: icons.demo.logo2,
    title: "Arsenal/Starksport",
    subtitle: "ARS/SFN",
    owner: "0xdf231...2dae7e3f",
    amount: "10,000.0 STRK",
  },
  {
    icon: icons.demo.logo3,
    title: "Arsenal/Starksport",
    subtitle: "ARS/SFN",
    owner: "0xdf231...2dae7e3f",
    amount: "10,000.0 STRK",
  },
];

const LockLiquidityPage = () => {
  const [current, setCurrent] = useState(3);
  const navigation = useNavigate();
  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="flex flex-col gap-3 rounded bg-[#1A1F29] py-6 text-white">
        <p className="font ml-6 text-[24px] font-bold text-[#24c3bc] ">
          LIQUIDITY
        </p>

        <div className="px-6">
          <div className="flex h-10 flex-1 items-center gap-6 rounded-md border  border-gray-200/50 bg-[#1A1F29] pl-3 pr-8 shadow-sm">
            <AiOutlineSearch style={{}} />
            <input
              placeholder="Search by LP token address or token address...."
              className="flex-1 bg-transparent text-sm outline-none"
              type="text"
            />
          </div>

          <div className="mt-2 flex justify-end">
            <span className="mr-[40px]">All</span>
            <span>My Lock</span>
          </div>

          <div className="mt-6">
            <table className="w-full">
              <tr className="h-10">
                <th className="text-start">Token</th>
                <th className="text-start ">Amount</th>
                <th className="hidden text-start sm:block">Owner</th>
              </tr>
              {lockData.map((item) => (
                <tr className="h-12 border-b border-gray-400/50">
                  <td className="flex items-center">
                    <div className="relative flex w-[70px] shrink-0">
                      <img
                        src={item.icon}
                        className="z-10 h-8 w-8 rounded-full"
                        alt=""
                      />
                      <img
                        src={item.icon}
                        className="absolute right-[20px] top-[-5px] z-0 h-8 w-8 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <p className="font-bold">{item.title}</p>
                      <p className="text-gray text-xs">{item.subtitle}</p>
                    </div>
                  </td>
                  <td>{item.amount}</td>
                  <td className="hidden sm:block">{item.owner}</td>
                  <td
                    className="text-[#24c3bc]"
                    onClick={() => navigation(route.viewLockinfo)}
                  >
                    View
                  </td>
                </tr>
              ))}
            </table>
            <div className="mt-6 flex w-full justify-center">
              <Pagination current={current} onChange={onChange} total={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockLiquidityPage;

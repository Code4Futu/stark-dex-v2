import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import icons from "../../assets/icons";
import { Pagination, PaginationProps } from "antd";
import { useNavigate } from "react-router-dom";
import route from "../../routes/route";
import "./index.css";
const lockData = [
  {
    icon: icons.demo.logo1,
    title: "Test",
    subtitle: "0x34213...STAK",
    owner: "0xdf231...2dae7e3f",
    amount: "10,000.0 STRK",
  },
  {
    icon: icons.demo.logo2,
    title: "Test",
    subtitle: "0x34213...STAK",
    owner: "0xdf231...2dae7e3f",
    amount: "10,000.0 STRK",
  },
  {
    icon: icons.demo.logo3,
    title: "Test",
    subtitle: "0x34213...STAK",
    owner: "0xdf231...2dae7e3f",
    amount: "10,000.0 STRK",
  },
  {
    icon: icons.demo.logo2,
    title: "Test",
    subtitle: "0x34213...STAK",
    owner: "0xdf231...2dae7e3f",
    amount: "10,000.0 STRK",
  },
  {
    icon: icons.demo.logo3,
    title: "Test",
    subtitle: "0x34213...STAK",
    owner: "0xdf231...2dae7e3f",
    amount: "10,000.0 STRK",
  },
];

const ManageLockPage = () => {
  const [current, setCurrent] = useState(3);
  const navigation = useNavigate();
  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="lex flex-col gap-3 rounded bg-[#1A1F29] py-6 text-white">
        <p className="font ml-6 text-[24px] font-bold text-[#24c3bc] ">
          Manage Lock
        </p>

        <div className="px-6">
          <div className="flex h-10 flex-1 items-center gap-6 rounded-md border  border-gray-200/50 bg-[#1A1F29] pl-3 pr-8 shadow-sm">
            <AiOutlineSearch style={{}} />
            <input
              placeholder="Search by token address"
              className="flex-1 bg-transparent text-sm outline-none"
              type="text"
            />
          </div>

          <div className="mt-2 flex justify-end">
            <span className="mr-[40px]">All</span>
            <span>My Lock</span>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="h-10">
                  <th className="min-w-[150px] text-start">Token</th>
                  <th className="z-0 text-start">Amount</th>
                  <th className="z-0 text-start">Owner</th>
                </tr>
              </thead>
              <tbody>
                {lockData.map((item) => (
                  <tr className="h-12 border-b border-gray-400/50">
                    <td className="flex items-center">
                      <img
                        src={item.icon}
                        className="h-8 w-8 rounded-full"
                        alt=""
                      />
                      <div className="ml-2">
                        <p className="font-bold">{item.title}</p>
                        <p className="text-gray text-xs">{item.subtitle}</p>
                      </div>
                    </td>
                    <td className="z-0">{item.amount}</td>
                    <td className="z-0">{item.owner}</td>
                    <td
                      className="z-0 text-[#24c3bc]"
                      onClick={() => navigation(route.viewLockinfo)}
                    >
                      View
                    </td>
                  </tr>
                ))}
              </tbody>
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

export default ManageLockPage;

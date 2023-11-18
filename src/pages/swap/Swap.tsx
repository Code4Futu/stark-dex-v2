import { useRef, useState } from "react";
import {
  ArrowDown,
  ChartIcon,
  SettingIcon,
  SwapIcon,
} from "./components/icons";
import { twMerge } from "tailwind-merge";
import { Divider } from "../../components/Divider";
import { SwitchButton } from "./components/SwitchButton";
import Input from "antd/es/input/Input";
import icons from "../../assets/icons";
import ChartModal from "../../components/chart-modal/ModalChart";
import useModalChart from "../../components/chart-modal/useModalChart";

export const Swap = () => {
  const [tab, setTab] = useState("swap");
  // Token 0 Input Amount
  const [token0InputAmount, setToken0InputAmount] = useState(0);

  const { isShowChart, toggleModalChart } = useModalChart();

  const openModalSetting = () => {
    toggleModalChart();
  };

  const inputToken0Ref = useRef(null);

  const handleToken0InputAmountChange = (event: any) => {
    if (event.target.value === "") {
      setToken0InputAmount(0);
      // setToken1OutputAmount(0);
      // setToken1OutputDisplayAmount(0);
    } else {
      // setToken0InputAmount(getTokenAmountInWei(event.target.value, token0.decimals));
    }
  };

  return (
    <div className="flex w-full flex-col gap-6 px-6 py-12 text-white">
      <div className="flex w-full items-end justify-between">
        <span className="text-[32px] font-bold leading-normal text-[#F1F1F1]">
          Swap
        </span>
        <div className="button-linear-2 flex items-center justify-center gap-1 rounded-2xl bg-[#F1F1F1] p-3">
          <ChartIcon />
        </div>
      </div>
      <div className="flex flex-col items-end justify-center gap-3 rounded-3xl bg-[#1A1C24] p-6">
        <SwitchButton tab={tab} setTab={setTab} />
        <Divider className="mt-3 bg-[#2D313E]" />
        <div
          onClick={toggleModalChart}
          className="inline-flex items-center justify-end gap-1 rounded-xl bg-[#2D313E] py-[2px] pl-3 pr-2"
        >
          <span className="text-xs font-medium text-[#C6C6C6]">
            Transaction Settings
          </span>
          <SettingIcon />
        </div>
        {/* From */}
        <div className="flex w-full flex-col items-center gap-3">
          <div className="flex flex-col items-start gap-2 self-stretch rounded-2xl border-[1px] border-[#2D313E] bg-[#0D0E12] p-3">
            <div className="flex w-full items-center justify-between self-stretch">
              <div className="flex items-center justify-center gap-1 rounded-xl border-[1px] border-[#2D313E] bg-[#1A1C24] p-[6px]">
                <div className="flex h-6 w-6 items-center justify-center">
                  <img
                    src={icons.v2.logo_noname}
                    alt="Startsport logo"
                    className="h-6 w-6"
                  />
                </div>
                <span className="text-base font-bold leading-normal text-[#F1F1F1]">
                  SFN
                </span>
                <ArrowDown />
              </div>
              <Input
                placeholder="0.0"
                className="border-none px-0 text-right text-xl font-bold text-[#C6C6C6]"
                ref={inputToken0Ref}
                onChange={handleToken0InputAmountChange}
              />
            </div>
            <div className="flex items-start justify-between self-stretch">
              <span className="text-xs font-normal text-[#C6C6C6]">
                Balance: 0
              </span>
              <span className="text-xs font-normal text-[#C6C6C6]">
                0.00 USD
              </span>
            </div>
          </div>
          <SwapIcon />
          {/* To */}
          <div className="flex flex-col items-start gap-2 self-stretch rounded-2xl border-[1px] border-[#2D313E] bg-[#0D0E12] p-3">
            <div className="flex w-full items-center justify-between self-stretch">
              <div className="flex items-center justify-center gap-1 rounded-xl border-[1px] border-[#2D313E] bg-[#1A1C24] p-[6px]">
                <span className="whitespace-nowrap text-base font-bold leading-normal text-[#F1F1F1]">
                  Select token
                </span>
                <ArrowDown />
              </div>
              <Input
                placeholder="0.0"
                className="border-none px-0 text-right text-xl font-bold text-[#C6C6C6]"
                ref={inputToken0Ref}
                onChange={handleToken0InputAmountChange}
              />
            </div>
            <div className="flex items-start justify-between self-stretch">
              <span className="text-xs font-normal text-[#C6C6C6]">
                Balance: 0
              </span>
              <span className="text-xs font-normal text-[#C6C6C6]">
                0.00 USD
              </span>
            </div>
          </div>
          {/* Price */}
          <div className="flex flex-col items-center gap-1 self-stretch">
            <div className="flex items-start justify-between self-stretch px-1">
              <span className="text-sm font-normal text-[#C6C6C6]">Price</span>
              <span className="text-sm font-bold text-[#F1F1F1]">
                1 SFN = 1 token
              </span>
            </div>
            <div className="flex items-start justify-between self-stretch px-1">
              <span className="text-sm font-normal text-[#C6C6C6]">
                Minimum received
              </span>
              <span className="text-sm font-bold text-[#F1F1F1]">1 token</span>
            </div>
            <div className="flex items-start justify-between self-stretch px-1">
              <span className="text-sm font-normal text-[#C6C6C6]">
                Price Impact
              </span>
              <span className="text-sm font-bold text-[#F1F1F1]">0.5%</span>
            </div>
            <div className="flex items-start justify-between self-stretch px-1">
              <span className="text-sm font-normal text-[#C6C6C6]">Fee</span>
              <span className="text-sm font-bold text-[#F1F1F1]">0.5%</span>
            </div>
          </div>
        </div>
      </div>
      <ChartModal isShowing={isShowChart} hide={toggleModalChart} />
    </div>
  );
};

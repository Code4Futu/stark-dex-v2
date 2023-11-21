import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ModalHeader } from "./components/ModalHeader";
import { Divider } from "../../Divider";
import { LineChart } from "./components/Chart";
import "./style.scss";

const ChartModal = ({
  isShowing,
  hide,
}: {
  isShowing?: boolean;
  hide?: any;
}) => {
  const [modalClass, setModalClass] = useState("modal-content-chart");

  function close() {
    setModalClass("modal-content-chart closing");
    setTimeout(() => {
      hide();
      setModalClass("modal-content-chart");
    }, 300);
  }

  return (
    <div>
      {isShowing && (
        <div className={`modal-overlay`}>
          <div
            className={twMerge("flex flex-col items-start gap-3", modalClass)}
          >
            <ModalHeader close={close} />
            <Divider />
            <div className="flex flex-col items-start gap-3 self-stretch md:flex-row md:justify-between">
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-bold text-[#F1F1F1]">
                    0.00055
                  </span>
                  <span className="text-base font-bold text-[#F1F1F1]">
                    SFN/ETH
                  </span>
                  <span className="text-base font-bold text-[#6CFF7B]">
                    +6.86%
                  </span>
                </div>
                <span className="text-sm font-normal text-[#C6C6C6]">
                  Nov 05, 2023, 17:00 (UTC)
                </span>
              </div>
              <div className="flex items-start gap-2 rounded-md	border-[1px] border-[#2D313E] bg-[#0D0E12]">
                <div className="flex items-center justify-center gap-[10px] rounded-md bg-[#2D313E] px-3 py-[6px]">
                  <span className="text-xs font-medium text-[#F1F1F1]">
                    24h
                  </span>
                </div>
                <div className="flex items-center justify-center gap-[10px] rounded-md px-3 py-[6px]">
                  <span className="text-xs font-medium text-[#F1F1F1]">1W</span>
                </div>
                <div className="flex items-center justify-center gap-[10px] rounded-md px-3 py-[6px]">
                  <span className="text-xs font-medium text-[#F1F1F1]">1M</span>
                </div>
                <div className="flex items-center justify-center gap-[10px] rounded-md px-3 py-[6px]">
                  <span className="text-xs font-medium text-[#F1F1F1]">1Y</span>
                </div>
                <div className="flex items-center justify-center gap-[10px] rounded-md px-3 py-[6px]">
                  <span className="text-xs font-medium text-[#F1F1F1]">
                    ALL
                  </span>
                </div>
              </div>
            </div>
            <LineChart />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChartModal;

import { useState } from "react";
import "./style.scss";
import { twMerge } from "tailwind-merge";
import { ModalSettingHeader } from "./components/SettingModalHeader";
import { Divider } from "../../Divider";

const SettingChartModal = ({
  isShowing,
  hide,
}: {
  isShowing?: boolean;
  hide?: any;
}) => {
  const [modalClass, setModalClass] = useState("modal-content-setting");

  function close() {
    setModalClass("modal-content-setting closing");
    setTimeout(() => {
      hide();
      setModalClass("modal-content-setting");
    }, 300);
  }

  return (
    <div>
      {isShowing && (
        <div className={`modal-overlay`}>
          <div
            className={twMerge("flex flex-col items-start gap-3", modalClass)}
          >
            <ModalSettingHeader close={close} />
            <Divider />
            <div className="flex items-start justify-between self-stretch">
              <span className="text-base font-normal text-[#C6C6C6]">
                Slippage
              </span>
              <span className="text-base font-bold text-[#24C3BC]">0.5%</span>
            </div>
            <div className="flex items-start justify-between gap-6 self-stretch">
              <div className="flex items-start gap-1 rounded-2xl border-[1px] border-[#2D313E] bg-[#0D0E12] p-1">
                <div className="flex items-center justify-center rounded-xl px-3 py-2">
                  <span className="text-base font-normal text-[#C6C6C6]">
                    Auto
                  </span>
                </div>
                <div className="flex items-center justify-center rounded-xl px-3 py-2">
                  <span className="text-base font-normal text-[#C6C6C6]">
                    0.1%
                  </span>
                </div>
                <div className="flex items-center justify-center rounded-xl bg-[#24C3BC] px-3 py-2">
                  <span className="text-base font-bold text-[#1A1C24]">
                    Auto
                  </span>
                </div>
                <div className="flex items-center justify-center rounded-xl px-3 py-2">
                  <span className="text-base font-normal text-[#C6C6C6]">
                    1%
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-end gap-3 rounded-2xl border-[1px] border-[#2D313E] bg-[#0D0E12] p-3">
                <span className="text-base font-bold text-[#F1F1F1]">0.5</span>
                <span className="text-base font-normal text-[#F1F1F1]">%</span>
              </div>
            </div>
            <Divider />
            <div className="flex items-start justify-between self-stretch">
              <span className="text-base font-normal text-[#C6C6C6]">
                Transaction deadline
              </span>
              <span className="text-base font-bold text-[#24C3BC]">20m</span>
            </div>
            <div className="flex items-start justify-between gap-6 self-stretch">
              <div className="flex items-start gap-1 rounded-2xl border-[1px] border-[#2D313E] bg-[#0D0E12] p-1">
                <div className="flex items-center justify-center rounded-xl px-3 py-2">
                  <span className="text-base font-normal text-[#C6C6C6]">
                    Auto
                  </span>
                </div>
                <div className="flex items-center justify-center rounded-xl px-3 py-2">
                  <span className="text-base font-normal text-[#C6C6C6]">
                    0.1%
                  </span>
                </div>
                <div className="flex items-center justify-center rounded-xl bg-[#24C3BC] px-3 py-2">
                  <span className="text-base font-bold text-[#1A1C24]">
                    20m
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-end gap-3 rounded-2xl border-[1px] border-[#2D313E] bg-[#0D0E12] p-3">
                <span className="text-base font-bold text-[#F1F1F1]">20</span>
                <span className="text-base font-normal text-[#F1F1F1]">
                  minutes
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingChartModal;

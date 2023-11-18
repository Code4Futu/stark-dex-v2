import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { SelectTokenModalHeader } from "./components/SelectTokenModalHeader";
import { Divider } from "../../Divider";
import { Input } from "antd";
import icons from "../../../assets/icons";
import { ActiveStar, Star } from "./icons";
import "./style.scss";

const SelectTokenModal = ({
  isShowing,
  hide,
}: {
  isShowing?: boolean;
  hide?: any;
}) => {
  const [modalClass, setModalClass] = useState("modal-content-token");

  function close() {
    setModalClass("modal-content-token closing");
    setTimeout(() => {
      hide();
      setModalClass("modal-content-token");
    }, 300);
  }

  return (
    <div>
      {isShowing && (
        <div className={`modal-overlay`}>
          <div
            className={twMerge("flex flex-col items-start gap-3", modalClass)}
          >
            <SelectTokenModalHeader close={close} />
            <Divider />
            <Input
              placeholder="Search name or paste address"
              className="input-pl rounded-2xl border-[1px] border-[#2D313E] bg-[#0D0E12] p-3 text-base font-normal text-[#3C3D4D]"
            />
            <span className="text-base font-normal text-[#C6C6C6]">
              Recommend tokens
            </span>
            <div className="flex flex-wrap content-start items-start gap-[7px] self-stretch">
              <div className="flex items-center gap-1 rounded-xl bg-[#232631] py-[6px] pl-[6px] pr-3">
                <img
                  src={icons.v2.logo_noname}
                  alt="startnet logo"
                  className="h-6 w-6"
                />
                <span className="text-base font-bold text-[#F1F1F1]">SFN</span>
              </div>
              <div className="flex items-center gap-1 rounded-xl bg-[#232631] py-[6px] pl-[6px] pr-3">
                <img
                  src={icons.v2.eth_logo}
                  alt="startnet logo"
                  className="h-6 w-6"
                />
                <span className="text-base font-bold text-[#F1F1F1]">ETH</span>
              </div>
              <div className="flex items-center gap-1 rounded-xl bg-[#232631] py-[6px] pl-[6px] pr-3">
                <img
                  src={icons.v2.tether_logo}
                  alt="startnet logo"
                  className="h-6 w-6"
                />
                <span className="text-base font-bold text-[#F1F1F1]">USDT</span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 self-stretch">
              <div className="flex items-center justify-between self-stretch rounded-xl bg-[#232631] px-3 py-[6px]">
                <div className="flex items-center gap-2">
                  <img
                    src={icons.v2.logo_noname}
                    alt="starknet logo"
                    className="h-10 w-10"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-base font-bold text-[#F1F1F1]">
                      SFN
                    </span>
                    <span className="text-xs font-medium text-[#C6C6C6]">
                      Starksport Finance
                    </span>
                  </div>
                </div>
                <ActiveStar />
              </div>
              <div className="flex items-center justify-between self-stretch rounded-xl bg-[#232631] px-3 py-[6px]">
                <div className="flex items-center gap-2">
                  <img
                    src={icons.v2.eth_logo}
                    alt="starknet logo"
                    className="h-10 w-10"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-base font-bold text-[#F1F1F1]">
                      ETH
                    </span>
                    <span className="text-xs font-medium text-[#C6C6C6]">
                      Ethereum
                    </span>
                  </div>
                </div>
                <Star />
              </div>
              <div className="flex items-center justify-between self-stretch rounded-xl bg-[#232631] px-3 py-[6px]">
                <div className="flex items-center gap-2">
                  <img
                    src={icons.v2.tether_logo}
                    alt="starknet logo"
                    className="h-10 w-10"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-base font-bold text-[#F1F1F1]">
                      Tether
                    </span>
                    <span className="text-xs font-medium text-[#C6C6C6]">
                      Tether USDT
                    </span>
                  </div>
                </div>
                <Star />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectTokenModal;

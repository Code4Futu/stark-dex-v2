import icons from "../../../assets/icons";
import { Divider } from "../../../components/Divider";

export const Receive = () => {
  return (
    <div className="flex w-full flex-col items-start gap-3 rounded-3xl bg-[#1A1C24] p-6">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-[#f1f1f1]">
          You will receive
        </span>
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-3 self-stretch rounded-2xl border-[1px] border-[#2D313E] bg-[#0D0E12] p-3">
        <div className="flex items-center justify-between self-stretch">
          <div className="flex items-center gap-1">
            <img
              src={icons.v2.logo_noname}
              alt="starknet logo"
              className="h-6 w-6"
            />
            <span className="text-xs font-medium text-[#c6c6c6]">
              Pooled SFN
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <span className="text-sm font-bold text-[#f1f1f1]">450</span>
            <span className="text-xs font-medium text-[#c6c6c6]">~$450</span>
          </div>
        </div>
        <Divider />
        <div className="flex items-center justify-between self-stretch">
          <div className="flex items-center gap-1">
            <img src={icons.v2.eth_logo} alt="eth logo" className="h-6 w-6" />
            <span className="text-xs font-medium text-[#c6c6c6]">
              Pooled ETH
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <span className="text-sm font-bold text-[#f1f1f1]">0.25</span>
            <span className="text-xs font-medium text-[#c6c6c6]">~$450</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 self-stretch rounded-2xl border-[1px] border-[#2D313E] bg-[#0D0E12] p-3">
        <div className="flex items-center justify-between self-stretch">
          <div className="flex items-center gap-1">
            <img
              src={icons.v2.logo_noname}
              alt="starknet logo"
              className="h-6 w-6"
            />
            <span className="text-xs font-medium text-[#c6c6c6]">
              SFN Fee Earned
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <span className="text-sm font-bold text-[#f1f1f1]">9</span>
            <span className="text-xs font-medium text-[#c6c6c6]">~$9</span>
          </div>
        </div>
        <Divider />
        <div className="flex items-center justify-between self-stretch">
          <div className="flex items-center gap-1">
            <img src={icons.v2.eth_logo} alt="eth logo" className="h-6 w-6" />
            <span className="text-xs font-medium text-[#c6c6c6]">
              SFN Fee Earned
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <span className="text-sm font-bold text-[#f1f1f1]">0.005</span>
            <span className="text-xs font-medium text-[#c6c6c6]">~$9</span>
          </div>
        </div>
      </div>
    </div>
  );
};

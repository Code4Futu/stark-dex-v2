import { Pagination } from "antd";
import icons from "../../../assets/icons";
import { Divider } from "../../../components/Divider";
import { ArrangeIcon } from "../../liquidity/icons";

const TopTokenMobile = () => {
  return (
    <div className="flex w-full flex-col items-start gap-3 rounded-3xl bg-[#1A1C24] p-6">
      <div className="flex items-center justify-between self-stretch">
        <div className="flex w-[70px] items-center gap-1">
          <span className="text-xs font-medium text-[#c6c6c6]">Price</span>
          <ArrangeIcon />
        </div>
        <div className="flex w-[70px] items-center gap-1">
          <span className="text-xs font-medium text-[#c6c6c6]">
            Price change (24h)
          </span>
          <ArrangeIcon />
        </div>
        <div className="flex w-[70px] items-center gap-1">
          <span className="text-xs font-medium text-[#c6c6c6]">
            Volume (24hr)
          </span>
          <ArrangeIcon />
        </div>
        <div className="flex w-[70px] items-center gap-1">
          <span className="text-xs font-medium text-[#c6c6c6]">Market cap</span>
          <ArrangeIcon />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex items-center gap-3 rounded-[36px] border-[1px] border-[#2D313E] px-4 py-2">
          <img
            src={icons.v2.logo_noname}
            alt="starknet logo"
            className="h-6 w-6"
          />
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#f1f1f1]">SFN</span>
            <span className="text-xs font-medium text-[#c6c6c6]">
              Starksport Finance
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between self-stretch">
          <span className="w-[70px] text-sm font-bold text-[#f1f1f1]">
            $1.00
          </span>
          <span className="w-[70px] text-sm font-bold text-[#6CFF7B]">
            ↑68%
          </span>
          <span className="w-[70px] text-sm font-bold text-[#f1f1f1]">
            $68,680
          </span>
          <span className="w-[70px] text-sm font-bold text-[#f1f1f1]">
            $68.68m
          </span>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex items-center gap-3 rounded-[36px] border-[1px] border-[#2D313E] px-4 py-2">
          <img
            src={icons.v2.logo_noname}
            alt="starknet logo"
            className="h-6 w-6"
          />
          <div className="flex items-end gap-2">
            <span className="text-sm font-bold text-[#f1f1f1]">SFN</span>
            <span className="text-xs font-medium text-[#c6c6c6]">
              Starksport Finance
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between self-stretch">
          <span className="w-[70px] text-sm font-bold text-[#f1f1f1]">
            $1.00
          </span>
          <span className="w-[70px] text-sm font-bold text-[#6CFF7B]">
            ↑68%
          </span>
          <span className="w-[70px] text-sm font-bold text-[#f1f1f1]">
            $68,680
          </span>
          <span className="w-[70px] text-sm font-bold text-[#f1f1f1]">
            $68.68m
          </span>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex items-center gap-3 rounded-[36px] border-[1px] border-[#2D313E] px-4 py-2">
          <img
            src={icons.v2.logo_noname}
            alt="starknet logo"
            className="h-6 w-6"
          />
          <div className="flex items-end gap-2">
            <span className="text-sm font-bold text-[#f1f1f1]">SFN</span>
            <span className="text-xs font-medium text-[#c6c6c6]">
              Starksport Finance
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between self-stretch">
          <span className="w-[70px] text-sm font-bold text-[#f1f1f1]">
            $1.00
          </span>
          <span className="w-[70px] text-sm font-bold text-[#6CFF7B]">
            ↑68%
          </span>
          <span className="w-[70px] text-sm font-bold text-[#f1f1f1]">
            $68,680
          </span>
          <span className="w-[70px] text-sm font-bold text-[#f1f1f1]">
            $68.68m
          </span>
        </div>
      </div>
      <Divider />
      <div className="flex w-full items-center justify-center">
        <Pagination defaultCurrent={1} total={1000} />
      </div>
    </div>
  );
};

const TopTokenDesktop = () => {
  return (
    <div className="flex w-full flex-col items-start gap-3 rounded-3xl bg-[#1A1C24] p-6">
      <div className="flex items-center justify-between self-stretch">
        <span className="w-[220px] text-xs font-medium text-[#c6c6c6]">
          Name
        </span>
        <div className="flex w-[100px] items-center gap-1">
          <span className="text-xs font-medium text-[#c6c6c6]">Price</span>
          <ArrangeIcon />
        </div>
        <div className="flex w-[120px] items-center gap-1">
          <span className="text-xs font-medium text-[#c6c6c6]">
            Price change (24h)
          </span>
          <ArrangeIcon />
        </div>
        <div className="flex w-[100px] items-center gap-1">
          <span className="text-xs font-medium text-[#c6c6c6]">
            Volume (24hr)
          </span>
          <ArrangeIcon />
        </div>
        <div className="flex w-[100px] items-center gap-1">
          <span className="text-xs font-medium text-[#c6c6c6]">Market cap</span>
          <ArrangeIcon />
        </div>
      </div>
      <Divider />
      <div className="flex items-center justify-between self-stretch py-3">
        <div className="flex w-[220px]">
          <div className="flex items-center gap-3 rounded-[36px] border-[1px] border-[#2D313E] px-4 py-2">
            <img
              src={icons.v2.logo_noname}
              alt="starknet logo"
              className="h-6 w-6"
            />
            <div className="flex flex-col items-start justify-center">
              <span className="text-sm font-bold text-[#f1f1f1]">SFN</span>
              <span className="text-xs font-medium text-[#c6c6c6]">
                Starksport Finance
              </span>
            </div>
          </div>
        </div>
        <span className="w-[100px] text-sm font-bold text-[#f1f1f1]">
          $1.00
        </span>
        <span className="w-[120px] text-sm font-bold text-[#6CFF7B]">↑68%</span>
        <span className="w-[100px] text-sm font-bold text-[#f1f1f1]">
          $68,680
        </span>
        <span className="w-[100px] text-sm font-bold text-[#f1f1f1]">
          $68,680,000
        </span>
      </div>
      <Divider />
      <div className="flex items-center justify-between self-stretch py-3">
        <div className="flex w-[220px]">
          <div className="flex items-center gap-3 rounded-[36px] border-[1px] border-[#2D313E] px-4 py-2">
            <img
              src={icons.v2.logo_noname}
              alt="starknet logo"
              className="h-6 w-6"
            />
            <div className="flex flex-col items-start justify-center">
              <span className="text-sm font-bold text-[#f1f1f1]">SFN</span>
              <span className="text-xs font-medium text-[#c6c6c6]">
                Starksport Finance
              </span>
            </div>
          </div>
        </div>
        <span className="w-[100px] text-sm font-bold text-[#f1f1f1]">
          $1.00
        </span>
        <span className="w-[120px] text-sm font-bold text-[#6CFF7B]">↑68%</span>
        <span className="w-[100px] text-sm font-bold text-[#f1f1f1]">
          $68,680
        </span>
        <span className="w-[100px] text-sm font-bold text-[#f1f1f1]">
          $68,680,000
        </span>
      </div>
      <Divider />
      <div className="flex items-center justify-between self-stretch py-3">
        <div className="flex w-[220px]">
          <div className="flex items-center gap-3 rounded-[36px] border-[1px] border-[#2D313E] px-4 py-2">
            <img
              src={icons.v2.logo_noname}
              alt="starknet logo"
              className="h-6 w-6"
            />
            <div className="flex flex-col items-start justify-center">
              <span className="text-sm font-bold text-[#f1f1f1]">SFN</span>
              <span className="text-xs font-medium text-[#c6c6c6]">
                Starksport Finance
              </span>
            </div>
          </div>
        </div>
        <span className="w-[100px] text-sm font-bold text-[#f1f1f1]">
          $1.00
        </span>
        <span className="w-[120px] text-sm font-bold text-[#6CFF7B]">↑68%</span>
        <span className="w-[100px] text-sm font-bold text-[#f1f1f1]">
          $68,680
        </span>
        <span className="w-[100px] text-sm font-bold text-[#f1f1f1]">
          $68,680,000
        </span>
      </div>
      <Divider />
      <div className="flex w-full items-center justify-center">
        <Pagination defaultCurrent={1} total={1000} />
      </div>
    </div>
  );
};

export const TopToken = () => {
  return (
    <div className="flex w-full">
      <div className="w-full md:hidden">
        <TopTokenMobile />
      </div>
      <div className="hidden w-full md:flex">
        <TopTokenDesktop />
      </div>
    </div>
  );
};

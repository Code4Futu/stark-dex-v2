import icons from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import route from "../../routes/route";
import { useEffect } from "react";
import { formatNumberWithCommas, getDecimalDigits } from "../../utils/utils";

const ItemLaunchpad = (props: any) => {
  const navigation = useNavigate();
  console.log(props.data.type);

  const checkStatus = () => {
    switch (props.data.type) {
      case "Fairlaunch":
        if (props.data.soft_cap <= props.data.progress) return true;
        return false;

      case "Presale":
        if (props.data.hard_cap <= props.data.progress) return true;
        return false;

      default:
        return false;
    }
  };

  const checkTypeSale = () => {
    switch (props.data.type) {
      case "projectA":
        return "PUBLIC SALE";

      case "projectB":
        return "PRIVATE SALE";

      default:
        return props.data.type;
    }
  };

  const percentNumber = 500;

  return (
    <div
      style={{
        backgroundImage: `url(${icons.card_background})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-transparents min-w-[311.457px] flex-1 cursor-pointer rounded-[14px] border-[1px] border-[#24C3BC] transition-all hover:scale-[104%]"
    >
      <div className="flex justify-between gap-8 border-b border-[#24C3BC] px-4 py-4">
        {checkStatus() ? (
          <div className="grid place-items-center rounded bg-[#22C55E] px-3 text-sm font-bold text-white">
            <p>Live</p>
          </div>
        ) : (
          <div className="grid place-items-center rounded bg-[#FF190A] px-3 text-sm font-bold text-white">
            <p>End</p>
          </div>
        )}
        <div className="flex gap-1">
          <div className="grid place-items-center rounded-[3px] bg-[#22C55E] px-3 text-sm font-semibold text-white">
            <p>KYC</p>
          </div>
          <div className="grid place-items-center rounded-[3px] bg-[#24C3BC] px-3 text-sm font-semibold text-white">
            <p>Audit</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="flex w-full flex-col items-center justify-center text-white">
          <img className="h-14 w-14 rounded-full" src={props.data.avatar} />
          <div className="ml-2 flex flex-col items-center">
            <p className=" font-bold ">{props.data.name}</p>
            <p className="text-sm font-extrabold text-gray-400">
              {checkTypeSale()}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          <div className="flex justify-between gap-1 rounded-xl bg-opacity-50 p-2">
            <p className="text-sm font-bold text-white"> Total commited:</p>
            <p className="text-sm font-semibold text-gray-400">
              {formatNumberWithCommas(props.data.total_commited)} SFN (
              {percentNumber}%)
            </p>
          </div>

          <div className="flex justify-between gap-1 rounded-xl bg-opacity-50 p-2">
            <p className="text-sm font-bold text-white"> Funds to raise:</p>
            <p className="text-sm font-semibold text-gray-400">
              {formatNumberWithCommas(props.data.funds_to_raise)} SFN
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between gap-1 rounded-xl p-2">
            <p className="text-sm font-bold text-white">ASR Price:</p>
            <p className="text-sm font-semibold text-gray-400">
              {props.data.ASR_price}$
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-opacity-50 p-2">
          <div className="flex justify-between">
            <p className="text-sm font-bold text-white">Progress:</p>
            {props.data.type === "Fairlaunch" && (
              <p className="text-sm text-gray-400">
                {getDecimalDigits(
                  (props.data.progress / props.data.soft_cap) * 100,
                  2
                )}
                %
              </p>
            )}
            {props.data.type === "Presale" && (
              <p className="text-sm text-gray-400">
                {getDecimalDigits(
                  (props.data.progress / props.data.hard_cap) * 100,
                  2
                )}
                %
              </p>
            )}
          </div>

          <div className="relative mt-2 h-3">
            <div className="absolute h-3 w-full rounded-lg bg-gray-700"></div>
            <div
              className="progress-bar absolute h-3 max-w-full rounded-lg"
              style={{
                width: `${
                  (props.data.progress /
                    (props.data.type == "Fairlaunch"
                      ? props.data.soft_cap
                      : props.data.hard_cap)) *
                  100
                }%`,
              }}
            ></div>
          </div>

          {/* <div className="mt-1 flex justify-between">
            <p className="text-sm font-semibold">
              {formatNumberWithCommas(props.data.progress)} STRK
            </p>
            <p className="text-sm font-semibold">
              {props.data.type == "Fairlaunch"
                ? formatNumberWithCommas(props.data.soft_cap)
                : formatNumberWithCommas(props.data.hard_cap)}
              &nbsp;STRK
            </p>
          </div> */}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between rounded-xl p-2">
            <p className="text-sm font-bold text-white">Total participants:</p>
            <p className="text-sm font-semibold text-gray-400">
              {props.data.total_participants}
            </p>
          </div>
          <div className="flex justify-between gap-1 rounded-xl p-2">
            <p className="text-sm font-bold text-white">Sale Time</p>
            <p className="text-sm font-semibold text-gray-400">""</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-6 text-white">
        <div className="flex flex-col p-2">
          <p className="text-xs font-semibold text-gray-400">
            Aug 08 17:00 UTC
          </p>
          <p className="text-xs font-semibold text-gray-400">
            Aug 11 17:00 UTC
          </p>
        </div>
        <div
          className="bg-btn grid w-fit place-items-center rounded-[5px] px-5 py-1"
          onClick={() => {
            navigation(`/detail-launchpad/${props.data.id}`);
          }}
        >
          <p className="font-semibold">View</p>
        </div>
      </div>
    </div>
  );
};

export default ItemLaunchpad;

import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useLocationPath } from "../../../../hooks/useLocationPath";

export const SwitchButton = (props: any) => {
  const currentPath = useLocationPath();
  const navigation = useNavigate();
  return (
    <div className="flex w-full items-center justify-center">
      <div className="inline-flex max-w-[240px] items-start rounded-2xl border-2 border-[#2D313E] bg-[#0D0E12]">
        <div
          className={twMerge(
            "flex w-[120px] items-center justify-center rounded-2xl px-4 py-2 transition-all",
            currentPath === "/swap" && "switch-linear"
          )}
          onClick={() => navigation("/swap")}
        >
          <span
            className={twMerge(
              "text-base font-bold leading-normal text-[#C6C6C6]",
              currentPath === "/swap" && "text-[#1A1C24]"
            )}
          >
            Swap
          </span>
        </div>
        <div
          className={twMerge(
            "flex w-[120px] items-center justify-center rounded-2xl px-4 py-2 transition-all",
            currentPath === "/liquidity" && "switch-linear"
          )}
          onClick={() => navigation("/liquidity")}
        >
          <span
            className={twMerge(
              "text-base font-bold leading-normal text-[#C6C6C6]",
              currentPath === "/swap/liquidity" && "text-[#1A1C24]"
            )}
          >
            Liquidity
          </span>
        </div>
      </div>
    </div>
  );
};

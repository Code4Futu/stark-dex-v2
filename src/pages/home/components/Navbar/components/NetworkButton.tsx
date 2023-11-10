import { MouseEventHandler } from "react";
import icons from "../../../../../assets/icons";

export default function Network({
  styleButton,
  styleTitle,
  onClick,
}: {
  styleButton?: string;
  styleTitle?: string;
  onClick?: MouseEventHandler;
}) {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-[#232631] p-3 md:py-3 md:pl-3 md:pr-6">
      <img
        src={icons.v2.starknet_logo}
        alt="Starknet Logo"
        className="h-6 w-6"
      />
      <div className="hidden text-xl font-bold text-white md:flex">
        Starknet
      </div>
    </div>
  );
}

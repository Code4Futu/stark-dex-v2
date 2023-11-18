import { Button } from "antd";
import { twMerge } from "tailwind-merge";
import { MouseEventHandler } from "react";
import { WalletIcon } from ".";
export default function LaunchAppButton({
  styleButton,
  styleTitle,
  onClick,
}: {
  styleButton?: string;
  styleTitle?: string;
  onClick?: MouseEventHandler;
}) {
  return (
    <Button
      style={{
        background: "linear-gradient(135deg, #24C3BC 0%, #ADFFFB 100%)",
      }}
      className={twMerge(
        "button-hover-1 flex h-[43px] items-center justify-center gap-1 rounded-xl border-0 p-3 max-[340px]:hidden",
        styleButton
      )}
      onClick={onClick}
    >
      <div className="hidden xl:flex">
        <WalletIcon />
      </div>
      <span
        className={twMerge("text-base font-bold text-[#1A1C24]", styleTitle)}
      >
        Connect Wallet
      </span>
    </Button>
  );
}

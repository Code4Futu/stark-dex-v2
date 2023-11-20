import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

export const DefaultButton = ({
  className,
  textStyle,
  title,
  onClick,
}: {
  className?: string;
  textStyle?: string;
  title: string;
  onClick?: MouseEventHandler;
}) => {
  return (
    <div
      className={twMerge(
        "flex h-12 w-full items-center justify-center gap-1 rounded-2xl bg-[#f1f1f1] px-6 py-3",
        className
      )}
      onClick={onClick}
    >
      <span
        className={twMerge("text-base font-bold text-[#0D0E12]", textStyle)}
      >
        {title}
      </span>
    </div>
  );
};

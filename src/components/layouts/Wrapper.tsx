import { twMerge } from "tailwind-merge";

export const Wrapper: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => {
  return <div className={twMerge("px-6")}>{children}</div>;
};

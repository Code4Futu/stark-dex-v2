import icons from "../../../../../assets/icons";
import { MouseEventHandler } from "react";
import { Popover } from "@headlessui/react";

export default function MobileMenuButton({
  className,
  toggle,
}: {
  className?: string;
  toggle?: MouseEventHandler;
}) {
  return (
    <Popover.Button
      className={className}
      as="div"
      role="button"
      aria-label="menu button"
    >
      <div
        className="block h-9 w-9 rounded focus:bg-slate-100 md:hidden"
        onClick={toggle}
      >
        <img src={icons.mobileMenuIcon} alt="Menu icon" />
      </div>
    </Popover.Button>
  );
}

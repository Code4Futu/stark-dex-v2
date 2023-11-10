import { useNavigate } from "react-router-dom";
import { DrawerData } from "../drawer.index";
import { useState } from "react";
import route from "../../../routes/route";
import {
  DocumentationIcon,
  ExchangeIcon,
  HomeIcon,
  LaunchpadIcon,
  MarketIcon,
  SocialIcon,
} from "../icons";
import { twMerge } from "tailwind-merge";

export const DrawerItemMobile = ({
  id,
  title,
  items,
  open,
  toggle,
  handleDrawerClick,
  resize,
}: {
  id: number;
  title: string;
  items: any;
  open?: boolean;
  toggle: any;
  handleDrawerClick: any;
  resize: boolean;
}) => {
  const [hover, setHover] = useState(false);

  const navigation = useNavigate();

  const mouseOver = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  const checkIcon = (id: number) => {
    switch (id) {
      case 1:
        return <HomeIcon color={!hover ? "#C6C6C6" : ""} />;
      case 2:
        return <ExchangeIcon color={!hover ? "#C6C6C6" : ""} />;
      case 3:
        return <LaunchpadIcon color={!hover ? "#C6C6C6" : ""} />;
      case 4:
        return <MarketIcon color={!hover ? "#C6C6C6" : ""} />;
      case 5:
        return <DocumentationIcon color={!hover ? "#C6C6C6" : ""} />;
      case 6:
        return <SocialIcon color={!hover ? "#C6C6C6" : ""} />;
      default:
        return <HomeIcon color={!hover ? "#C6C6C6" : ""} />;
    }
  };

  return (
    <div className="">
      <div
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        className={twMerge(
          "mx-auto flex h-14 cursor-pointer items-center justify-between rounded-2xl p-3 hover:bg-slate-500/30",
          resize && "p-0"
        )}
        onClick={() => {
          if (id === 1) {
            navigation(route.home);
          }
          handleDrawerClick(id);
        }}
      >
        <div className="flex items-center">
          <p
            className={twMerge(
              "up ml-3 flex flex items-center gap-2 text-base font-bold text-[#C6C6C6]",
              hover && "text-linear"
            )}
          >
            {checkIcon(id)}
            {!resize && title}
          </p>
        </div>
      </div>
      {items.length > 0 && open && (
        <div className={twMerge("mt-2 flex flex-col gap-2 overflow-hidden")}>
          {items.map((items: any, indexs: number) => (
            <div
              className="animation-open-items flex h-10 cursor-pointer items-center justify-start rounded pl-16 pr-6 hover:bg-slate-500/30 hover:font-semibold"
              style={{ ["--delay" as any]: indexs }}
              onClick={() => {
                toggle();
                navigation(items.path);
              }}
            >
              <p className="text-lg text-white">{items.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

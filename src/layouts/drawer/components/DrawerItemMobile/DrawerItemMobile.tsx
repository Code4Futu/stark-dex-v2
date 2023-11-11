import { useNavigate } from "react-router-dom";
import { useState } from "react";
import route from "../../../../routes/route";
import {
  DocumentationIcon,
  ExchangeIcon,
  HomeIcon,
  LaunchpadIcon,
  MarketIcon,
  SocialIcon,
  TelegramIcon,
} from "../../icons";
import { twMerge } from "tailwind-merge";

export const DrawerItemMobile = ({
  id,
  title,
  items,
  open,
  toggle,
  handleDrawerClick,
  resize,
  href,
  currentPath,
}: {
  id: number;
  title: string;
  items: any;
  open?: boolean;
  toggle: any;
  handleDrawerClick: any;
  resize: boolean;
  href?: string;
  currentPath?: any;
}) => {
  const [hover, setHover] = useState(false);

  const navigation = useNavigate();

  const mouseOver = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  const checkIcon = (id: number, currentPath?: string) => {
    switch (id) {
      case 1:
        return <HomeIcon color={hover ? "#ADFFFB" : ""} />;
      case 2:
        return <ExchangeIcon color={hover ? "#ADFFFB" : ""} />;
      case 3:
        return <LaunchpadIcon color={hover ? "#ADFFFB" : ""} />;
      case 4:
        return <MarketIcon color={hover ? "#ADFFFB" : ""} />;
      case 5:
        return <DocumentationIcon color={hover ? "#ADFFFB" : ""} />;
      case 6:
        return <SocialIcon color={hover ? "#ADFFFB" : ""} />;
      default:
        return <HomeIcon color={hover ? "#ADFFFB" : ""} />;
    }
  };

  return (
    <div
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      className={"flex items-center rounded-xl p-3 text-white"}
      onClick={() => {
        if (id === 1) {
          navigation(route.home);
        }
        handleDrawerClick(id);
      }}
    >
      <div className="flex items-center gap-2">{checkIcon(id)}</div>
    </div>
  );
};

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import route from "../../../../routes/route";
import { IoIosArrowDown } from "react-icons/io";
import {
  DocumentationIcon,
  ExchangeIcon,
  HomeIcon,
  LaunchpadIcon,
  MarketIcon,
  SocialIcon,
  DiscordIcon,
  GithubIcon,
  MediumIcon,
  TelegramIcon,
  TwitterIcon,
} from "../../icons";
import { twMerge } from "tailwind-merge";

export const DrawerItem = ({
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

  console.log(href, currentPath);
  const checkIcon = (id: number) => {
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

  const checkSocialIcon = (title: string) => {
    switch (title) {
      case "Telegram":
        return <TelegramIcon color={!hover ? "#C6C6C6" : ""} />;
      case "Discord":
        return <DiscordIcon color={!hover ? "#C6C6C6" : ""} />;
      case "X.com":
        return <TwitterIcon color={!hover ? "#C6C6C6" : ""} />;
      case "Medium":
        return <MediumIcon color={!hover ? "#C6C6C6" : ""} />;
      case "Github":
        return <GithubIcon color={!hover ? "#C6C6C6" : ""} />;
      default:
        return <></>;
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
              "up ml-3 flex items-center gap-2 text-base font-bold text-[#C6C6C6]",
              hover && "text-linear"
            )}
          >
            {checkIcon(id)}
            {!resize && title}
          </p>
        </div>
        {items.length && !resize ? (
          <div>
            <IoIosArrowDown style={{ fill: hover ? "#24C3BC" : "white" }} />
          </div>
        ) : (
          <></>
        )}
      </div>
      {items.length > 0 && open && !resize && (
        <div className={twMerge("mt-2 flex flex-col gap-2 overflow-hidden")}>
          {items.map((items: any, indexs: number) => (
            <div
              key={indexs}
              className="animation-open-items flex cursor-pointer items-center justify-start rounded p-3 hover:bg-slate-500/30 hover:font-semibold"
              style={{ ["--delay" as any]: indexs }}
              onClick={() => {
                toggle();
                navigation(items.path);
              }}
            >
              <div className="ml-3 flex gap-2">
                {checkSocialIcon(items.title)}
                <p className="text-lg text-white">{items.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

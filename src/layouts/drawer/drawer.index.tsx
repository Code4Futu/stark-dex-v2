import { useState, useEffect } from "react";
import clg from "../../utils/console";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import route from "../../routes/route";
import { Logo, LogoNoName } from "../../pages";
import { DrawerItem, LeftIcon, RightIcon } from "./components";
import { twMerge } from "tailwind-merge";
import { useOpenDrawer } from "../../hooks/useOpenDrawer";

export const DrawerData = [
  {
    id: 1,
    title: "Home",
    open: false,
    items: [],
  },
  {
    id: 2,
    title: "Create",
    open: false,
    // action: () => {},
    items: [
      {
        title: "Token",
        path: route.createToken,
      },
      {
        title: "Presale",
        path: route.createPresale,
      },
      {
        title: "Fairlaunch",
        path: route.fairlaunch,
      },
      {
        title: "Tiered Whitelist",
        path: route.tieredWhitelist,
      },
      {
        title: "Private Sale",
        path: route.createPrivatesale,
      },
    ],
  },
  {
    id: 3,
    title: "Locker",
    open: false,
    // action: () => {},
    items: [
      {
        title: "Create Lock",
        path: route.createLock,
      },
      {
        title: "Manage Lock",
        path: route.manageLock,
      },
      {
        title: "Lock Liquidity",
        path: route.lockLiquidity,
      },
    ],
  },
  {
    id: 4,
    title: "Airdrop",
    open: false,
    // action: () => {},
    items: [
      {
        title: "Create Airdrop",
        path: route.createAirdrop,
      },
      {
        title: "View Airdrop",
        path: route.viewAirdrop,
      },
    ],
  },
  {
    id: 5,
    title: "Documentation",
    open: false,
    items: [],
  },
];

const socialLink = {
  discord: "https://discord.com/invite/starksport",
  tw: "https://twitter.com/starkfinance",
  teleChannel: "https://t.me/starksportchanel",
  teleGlobal: "https://t.me/starksportglobal",
};

const SocicalData = [
  {
    id: 6,
    title: "Socials",
    open: false,
    items: [
      {
        title: "Telegram",
        path: socialLink.teleGlobal,
      },
      {
        title: "Discord",
        path: socialLink.discord,
      },
      {
        title: "X.com",
        path: socialLink.tw,
      },
      {
        title: "Medium",
        path: socialLink.teleChannel,
      },
      {
        title: "Github",
        path: socialLink.teleChannel,
      },
    ],
  },
];

export default function Drawer(props: any) {
  return (
    <>
      <div className="hidden md:block">
        <DrawerDesktop
          resizeDrawer={props.resizeDrawer}
          resizeToggle={props.resizeToggle}
          toggle={props.toggle}
        />
      </div>
      <div className="md:hidden">
        alo
        <DrawerMobile toggle={props.toggle} resizeDrawer={props.resizeDrawer} />
      </div>
    </>
  );
}

const DrawerMobile = (props: any) => {
  const [drawerData, setDrawerData] = useState<any[]>(DrawerData);
  const [socicalData, setSocicalData] = useState<any[]>(SocicalData);

  const handleDrawerClick = (id: number) => {
    if (props.resizeDrawer) return;
    const tempDrawerData = drawerData.map((item) => {
      if (item.id == id) {
        item.open = !item.open;
      } else {
        item.open = false;
      }
      return item;
    });

    setDrawerData(tempDrawerData);
  };

  const handleSocialClick = (id: number) => {
    if (props.resizeDrawer) return;
    const tempSocialData = socicalData.map((item) => {
      if (item.id == id) {
        item.open = !item.open;
      }
      return item;
    });

    setSocicalData(tempSocialData);
  };

  return (
    <div className="border-t-0.5 fixed inset-x-0 bottom-0 z-50 flex h-20 w-full items-center justify-center border-[#2D313E] bg-[#1A1C24] p-12">
      {/* <div className="flex flex-col gap-3">
        {drawerData.map((item) => (
          <DrawerItem
            id={item.id}
            title={item.title}
            open={item.open}
            toggle={props.toggle}
            items={item.items}
            handleDrawerClick={handleDrawerClick}
            resize={props.resizeDrawer}
          />
        ))}
      </div> */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          {socicalData.map((item) => (
            <DrawerItem
              id={item.id}
              title={item.title}
              open={item.open}
              toggle={props.toggle}
              items={item.items}
              handleDrawerClick={handleSocialClick}
              resize={props.resizeDrawer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const DrawerDesktop = (props: any) => {
  const navigation = useNavigate();

  const [drawerData, setDrawerData] = useState<any[]>(DrawerData);
  const [socicalData, setSocicalData] = useState<any[]>(SocicalData);

  const handleDrawerClick = (id: number) => {
    if (props.resizeDrawer) return;
    const tempDrawerData = drawerData.map((item) => {
      if (item.id == id) {
        item.open = !item.open;
      } else {
        item.open = false;
      }
      return item;
    });

    setDrawerData(tempDrawerData);
  };

  const handleSocialClick = (id: number) => {
    if (props.resizeDrawer) return;
    const tempSocialData = socicalData.map((item) => {
      if (item.id == id) {
        item.open = !item.open;
      }
      return item;
    });

    setSocicalData(tempSocialData);
  };

  const openInNewTab = (url: string) => {
    const win = window.open(url, "_blank");
    win!.focus();
  };

  // useEffect(() => {
  //   clg(props.openDrawer);
  //   if (!isMobile) setFirstOpen(true);
  //   if (firstOpen && props.openDrawer) setFirstOpen(false);
  // }, [props.openDrawer, isMobile]);

  return (
    <div
      className={twMerge(
        `drawer-container fixed bottom-0 left-0 z-50 flex min-h-screen translate-x-[-100%] flex-col justify-between border-r-[1px] border-[#2D313E] bg-[#1A1C24] p-6 md:translate-x-0`,
        props.resizeDrawer ? "!w-[104px]" : "!w-[288px]"
      )}
    >
      <div className="flex flex-col gap-12">
        <div className="flex justify-center">
          {props.resizeDrawer ? <LogoNoName /> : <Logo />}
        </div>
        <div className="flex flex-col gap-3">
          {drawerData.map((item) => (
            <DrawerItem
              id={item.id}
              title={item.title}
              open={item.open}
              toggle={props.toggle}
              items={item.items}
              handleDrawerClick={handleDrawerClick}
              resize={props.resizeDrawer}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          {socicalData.map((item) => (
            <DrawerItem
              id={item.id}
              title={item.title}
              open={item.open}
              toggle={props.toggle}
              items={item.items}
              handleDrawerClick={handleSocialClick}
              resize={props.resizeDrawer}
            />
          ))}
        </div>
      </div>
      <div
        className={twMerge(
          "absolute left-[254px] top-1/2 z-50 -translate-y-1/2 translate-x-1/2 transform",
          props.resizeDrawer && "left-[75px]"
        )}
        onClick={props.resizeToggle}
      >
        {props.resizeDrawer ? <RightIcon /> : <LeftIcon />}
      </div>
    </div>
  );
};

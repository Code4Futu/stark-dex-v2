import { useState } from "react";
import route from "../../routes/route";
import Logo from "../../components/Logo";
import LogoNoName from "../../components/LogoNoName";
import { DrawerItem, LeftIcon, RightIcon } from "./components";
import { twMerge } from "tailwind-merge";
import { DrawerItemMobile } from "./components/DrawerItemMobile/DrawerItemMobile";

export const DrawerData = [
  {
    id: 1,
    title: "Home",
    href: "/",
    open: false,
    items: [],
  },
  {
    id: 2,
    title: "Exchange",
    open: false,
    // action: () => {},
    items: [
      {
        title: "Swap",
        path: route.swap,
      },
      {
        title: "Liquidity",
        path: route.home,
      },
      {
        title: "Overview",
        path: route.home,
      },
    ],
  },
  {
    id: 3,
    title: "Launchpad",
    open: false,
    // action: () => {},
    items: [
      {
        title: "Launchpad List",
        path: route.home,
      },
      {
        title: "Airdrop List",
        path: route.home,
      },
      {
        title: "Your Pool",
        path: route.home,
      },
    ],
  },
  {
    id: 4,
    title: "Market",
    open: false,
    // action: () => {},
    items: [
      {
        title: "Collections",
        path: route.home,
      },
      {
        title: "Activity",
        path: route.home,
      },
      {
        title: "Events",
        path: route.home,
      },
      {
        title: "Profile",
        path: route.home,
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

export const SocialLink = {
  discord: "https://discord.com/invite/starksport",
  tw: "https://twitter.com/starkfinance",
  teleChannel: "https://t.me/starksportchanel",
  teleGlobal: "https://t.me/starksportglobal",
};

export const SocialData = [
  {
    id: 6,
    title: "Socials",
    open: false,
    items: [
      {
        title: "Telegram",
        path: SocialLink.teleGlobal,
      },
      {
        title: "Discord",
        path: SocialLink.discord,
      },
      {
        title: "X.com",
        path: SocialLink.tw,
      },
      {
        title: "Medium",
        path: SocialLink.teleChannel,
      },
      {
        title: "Github",
        path: SocialLink.teleChannel,
      },
    ],
  },
];

export default function Drawer(props: any) {
  return (
    <>
      <div className="hidden min-[1920px]:block">
        <DrawerDesktop
          resizeDrawer={props.resizeDrawer}
          resizeToggle={props.resizeToggle}
          toggle={props.toggle}
          currentPath={props.currentPath}
        />
      </div>
      <div className="min-[1920px]:hidden">
        <DrawerMobile
          toggle={props.toggle}
          resizeDrawer={props.resizeDrawer}
          currentPath={props.currentPath}
        />
      </div>
    </>
  );
}

const DrawerMobile = (props: any) => {
  const [drawerData, setDrawerData] = useState<any[]>(DrawerData);
  const [socicalData, setSocicalData] = useState<any[]>(SocialData);

  const handleDrawerClick = (id: number) => {
    console.log(id);
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
    <div className="fixed inset-x-0 bottom-0 z-50 flex h-20 w-full items-center justify-between border-t-[1px] border-[#2D313E] bg-[#1A1C24] px-3 py-3 xl:px-12">
      {drawerData.map((item) => (
        <DrawerItemMobile
          key={item.id}
          id={item.id}
          title={item.title}
          open={item.open}
          toggle={props.toggle}
          items={item.items}
          handleDrawerClick={handleDrawerClick}
          resize={props.resizeDrawer}
          href={item.href}
          currentPath={props.currentPath}
        />
      ))}
      {socicalData.map((item) => (
        <DrawerItemMobile
          key={item.id}
          id={item.id}
          title={item.title}
          open={item.open}
          toggle={props.toggle}
          items={item.items}
          handleDrawerClick={handleSocialClick}
          resize={props.resizeDrawer}
          href={item.href}
          currentPath={props.currentPath}
        />
      ))}
    </div>
  );
};

const DrawerDesktop = (props: any) => {
  const [drawerData, setDrawerData] = useState<any[]>(DrawerData);
  const [socicalData, setSocicalData] = useState<any[]>(SocialData);

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
  return (
    <div
      className={twMerge(
        `drawer-container fixed bottom-0 left-0 z-50 flex min-h-screen translate-x-[-100%] flex-col justify-between border-r-[1px] border-[#2D313E] bg-[#1A1C24] p-6 xl:translate-x-0`,
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
              key={item.id}
              id={item.id}
              title={item.title}
              open={item.open}
              toggle={props.toggle}
              items={item.items}
              handleDrawerClick={handleDrawerClick}
              resize={props.resizeDrawer}
              href={item.href}
              currentPath={props.currentPath}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          {socicalData.map((item) => (
            <DrawerItem
              key={item.id}
              id={item.id}
              title={item.title}
              open={item.open}
              toggle={props.toggle}
              items={item.items}
              handleDrawerClick={handleSocialClick}
              resize={props.resizeDrawer}
              href={item.href}
              currentPath={props.currentPath}
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

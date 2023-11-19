import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutesMobile } from "./routes";
import { Drawer, Navbar } from "./layouts";
import { useOpenDrawer } from "./hooks/useOpenDrawer";
import { useLocationPath } from "./hooks/useLocationPath";
import { InjectedConnector, StarknetConfig } from "@starknet-react/core";
import { twMerge } from "tailwind-merge";
import { useMobile } from "./hooks/useMobile";
import icons from "./assets/icons";

function App() {
  const {
    openDrawer,
    toggle,
    resizeDrawer,
    resizeToggle,
    content,
    changeContent,
  } = useOpenDrawer();
  const { isMobile } = useMobile();

  const connectors = [
    new InjectedConnector({ options: { id: "braavos" } }),
    new InjectedConnector({ options: { id: "argentX" } }),
  ];

  const currentPath = useLocationPath();

  return (
    <StarknetConfig connectors={connectors}>
      <div
        style={{
          background: `url(${icons.v2.bg_offical})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="relative overflow-y-hidden"
      >
        <Navbar
          openDrawer={openDrawer}
          resizeDrawer={resizeDrawer}
          content={content}
        />
        <div className={currentPath !== "/" ? `flex bg-transparent` : ""}>
          <Drawer
            openDrawer={openDrawer}
            toggle={changeContent}
            resizeDrawer={resizeDrawer}
            resizeToggle={resizeToggle}
            currentPath={currentPath}
          />
          <div
            className={twMerge(
              "mt-[104px] min-h-screen w-full min-[1920px]:mt-[98px]",
              resizeDrawer
                ? "min-[1920px]:pl-[104px]"
                : "min-[1920px]:pl-[288px]",
              currentPath !== "/" && "mt-[144px]"
            )}
          >
            <Routes>
              {publicRoutesMobile.map((route, index) => {
                const Page = route.element;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<Page />}
                  ></Route>
                );
              })}
            </Routes>
          </div>
        </div>
        {/* {currentPath !== "/" ? <Footer /> : <HomepageFooter />} */}
      </div>
    </StarknetConfig>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutesMobile } from "./routes";
import { Drawer, Header } from "./layouts";
import { useOpenDrawer } from "./hooks/useOpenDrawer";
import { useLocationPath } from "./hooks/useLocationPath";
import { InjectedConnector, StarknetConfig } from "@starknet-react/core";
import SiteNavigation from "./pages/home/components/Navbar/SiteNavigation";
import icons from "./assets/icons";
import { twMerge } from "tailwind-merge";
import { useMobile } from "./hooks/useMobile";

function App() {
  const { openDrawer, toggle, resizeDrawer, resizeToggle } = useOpenDrawer();
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
        {currentPath !== "/" ? <Header toggle={toggle} /> : <SiteNavigation />}
        <div
          className={
            currentPath !== "/" ? `flex bg-transparent md:mt-[169px]` : ""
          }
        >
          <Drawer
            openDrawer={openDrawer}
            toggle={toggle}
            resizeDrawer={resizeDrawer}
            resizeToggle={resizeToggle}
          />
          <div
            className={twMerge(
              "mt-[104px] min-h-screen md:mt-[98px]",
              resizeDrawer ? "md:pl-[104px]" : "md:pl-[288px]"
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

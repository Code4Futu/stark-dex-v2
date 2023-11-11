import { ComingSoonPage, HomePage } from "../pages";
import route from "./route";

const publicRoutesMobile = [
  { path: route.home, element: HomePage },
  // { path: route.viewLaunchpad, element: LaunchpadListPage },
  { path: "*", element: ComingSoonPage },
];

export { publicRoutesMobile };

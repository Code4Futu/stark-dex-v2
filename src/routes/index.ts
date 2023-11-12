import { ComingSoonPage, HomePage, Swap } from "../pages";
import route from "./route";

const publicRoutesMobile = [
  { path: route.home, element: HomePage },
  { path: route.swap, element: Swap },
  { path: "*", element: ComingSoonPage },
];

export { publicRoutesMobile };

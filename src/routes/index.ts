import {
  ComingSoonPage,
  HomePage,
  Swap,
  Liquidity,
  LiquidityDetail,
} from "../pages";
import route from "./route";

const publicRoutesMobile = [
  { path: route.home, element: HomePage },
  { path: route.swap, element: Swap },
  { path: route.liquidity, element: Liquidity },
  { path: route.details, element: LiquidityDetail },
  { path: "*", element: ComingSoonPage },
];

export { publicRoutesMobile };

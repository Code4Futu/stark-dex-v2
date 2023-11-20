import {
  ComingSoonPage,
  HomePage,
  Swap,
  Liquidity,
  LiquidityDetail,
  YourLiquidity,
  YourLiquidityDetail,
  YourLiquidityRemove,
} from "../pages";
import route from "./route";

const publicRoutesMobile = [
  { path: route.home, element: HomePage },
  { path: route.swap, element: Swap },
  { path: route.liquidity, element: Liquidity },
  { path: route.details, element: LiquidityDetail },
  { path: route.yourLiquidity, element: YourLiquidity },
  { path: route.yourLiquidityDetails, element: YourLiquidityDetail },
  { path: route.yourLiquidityRemove, element: YourLiquidityRemove },
  { path: "*", element: ComingSoonPage },
];

export { publicRoutesMobile };

import {
  ComingSoonPage,
  CreateAirdropPage,
  CreateFairlaunchPage,
  CreateLockerPage,
  CreatePresalePage,
  CreateTokenPage,
  DetailLaunchpadPage,
  LaunchpadPage,
  ManageLockPage,
  ViewAirdrop,
  HomePage,
  CreatePrivateSalePage,
  ViewLockInfo,
  LockLiquidityPage,
  LaunchpadListPage,
} from "../pages";
import route from "./route";

const publicRoutesMobile = [
  { path: route.home, element: HomePage },
  { path: route.viewLaunchpad, element: LaunchpadListPage },
  { path: route.viewLaunchpadDetail, element: LaunchpadPage },
  { path: route.detailLaunchpad, element: DetailLaunchpadPage },
  { path: route.createToken, element: CreateTokenPage },
  { path: route.createPresale, element: CreatePresalePage },
  { path: route.createPrivatesale, element: CreatePrivateSalePage },
  { path: route.fairlaunch, element: CreateFairlaunchPage },
  { path: route.createLock, element: CreateLockerPage },
  { path: route.createAirdrop, element: CreateAirdropPage },
  { path: route.manageLock, element: ManageLockPage },
  { path: route.viewAirdrop, element: ViewAirdrop },
  { path: route.viewLockinfo, element: ViewLockInfo },
  { path: route.lockLiquidity, element: LockLiquidityPage },
  { path: "*", element: ComingSoonPage },
];

export { publicRoutesMobile };

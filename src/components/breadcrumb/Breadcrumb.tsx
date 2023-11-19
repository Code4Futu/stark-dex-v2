import { useLocationPath } from "../../hooks/useLocationPath";
import { ExchangeIcon } from "../../layouts/drawer/icons";
import { Breadcrumb } from "antd";

export const BreadCrumb = () => {
  const currentPath = useLocationPath();
  return (
    <Breadcrumb separator=">">
      <Breadcrumb.Item>
        <ExchangeIcon width="24" height="24" />
        <span>Exchange</span>
      </Breadcrumb.Item>
      {currentPath === "/swap" ? (
        <Breadcrumb.Item href="/swap">Swap</Breadcrumb.Item>
      ) : (
        <Breadcrumb.Item href="/liquidity">Liquidity</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};

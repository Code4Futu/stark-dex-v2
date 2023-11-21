import { useLocationPath } from "../../hooks/useLocationPath";
import { ExchangeIcon } from "../../layouts/drawer/icons";
import { Breadcrumb } from "antd";

export const BreadCrumb = () => {
  const currentPath = useLocationPath();
  return (
    <Breadcrumb separator=">">
      {currentPath === "/swap" && (
        <>
          <Breadcrumb.Item>
            <ExchangeIcon width="24" height="24" />
            <span>Exchange</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/swap">Swap</Breadcrumb.Item>
        </>
      )}
      {currentPath === "/liquidity" && (
        <>
          <Breadcrumb.Item>
            <ExchangeIcon width="24" height="24" />
            <span>Exchange</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/liquidity">Liquidity</Breadcrumb.Item>
        </>
      )}
      {currentPath === "/liquidity/details" && (
        <>
          <Breadcrumb.Item>
            <ExchangeIcon width="24" height="24" />
            <span>Exchange</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/liquidity">
            <span className="text-base font-normal text-[#c6c6c6]">
              Liquidity
            </span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>SFN/ETH</Breadcrumb.Item>
        </>
      )}
      {currentPath === "/your-liquidity" && (
        <>
          <Breadcrumb.Item>
            <ExchangeIcon width="24" height="24" />
            <span>Exchange</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/your-liquidity">Liquidity</Breadcrumb.Item>
        </>
      )}
      {currentPath === "/your-liquidity/details" && (
        <>
          <Breadcrumb.Item>
            <ExchangeIcon width="24" height="24" />
            <span>Exchange</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/your-liquidity">
            <span className="text-base font-normal text-[#c6c6c6]">
              Liquidity
            </span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>SFN/ETH</Breadcrumb.Item>
        </>
      )}
    </Breadcrumb>
  );
};

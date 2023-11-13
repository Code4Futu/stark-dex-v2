import { ExchangeIcon } from "../../layouts/drawer/icons";
import { Breadcrumb } from "antd";

export const BreadCrumb = () => {
  return (
    <Breadcrumb separator=">">
      <Breadcrumb.Item>
        <ExchangeIcon width="24" height="24" />
        <span>Exchange</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/swap">Swap</Breadcrumb.Item>
    </Breadcrumb>
  );
};

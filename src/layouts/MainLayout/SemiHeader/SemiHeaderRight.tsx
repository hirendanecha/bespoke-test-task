import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React, { FC, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { BreadcrumbWrapper } from "./styles";

export type SemiHeaderRightProps = {
  children?: ReactNode;
  current?: string;
};

const breadcrumbNameMap: Record<string, string> = {
  "/appointments": "Appointment",
  "/appointments/list": "Appointment List",
  "/appointments/create": "Create Appointment",
};

const SemiHeaderRight: FC<SemiHeaderRightProps> = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">
        <HomeOutlined />
      </Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <BreadcrumbWrapper>
      <Breadcrumb separator={<RightOutlined />}>{breadcrumbItems}</Breadcrumb>
    </BreadcrumbWrapper>
  );
};

export default SemiHeaderRight;

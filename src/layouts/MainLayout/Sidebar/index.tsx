import { CalendarOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const items: MenuProps["items"] = [
  getItem("Overview", "overview", <HomeOutlined />),
  getItem("Appointments", "appointments", <CalendarOutlined />, [
    getItem(
      <Link to={"/appointments/create"}>Create Appointment</Link>,
      "appointment-create",
      null
    ),
    getItem(
      <Link to={"/appointments/list"}>Appointment List</Link>,
      "appointment-list",
      null
    ),
  ]),
];

const Sidebar = () => {
  return (
    <Sider trigger={null} collapsed={false} width={302}>
      <Logo />
      <MenuWrapper
        defaultSelectedKeys={["appointment-create", "appointments"]}
        mode="inline"
        defaultOpenKeys={["appointment-create", "appointments"]}
        items={items}
      />
    </Sider>
  );
};

export const MenuWrapper = styled(Menu)`
  min-height: calc(100vh - 61px);
  padding-top: 20px;
  background: #f3f9fe;

  .ant-menu-title-content {
    font-size: 16px;
    color: #09477d;
  }

  .ant-menu-sub.ant-menu-inline {
    background: #f3f9fe;
  }

  svg {
    font-size: 18px;
  }
`;

// export const StyledSider = styled(Sider)``;

export default Sidebar;

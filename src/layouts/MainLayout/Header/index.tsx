import React from "react";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Actions,
  HeaderWrapper,
  SearchBar,
  UserAction,
  SearchBarWrapper,
} from "./styles";
import { Avatar, Dropdown, Menu, Space } from "antd";
import UserProfile from "../../../assets/pngs/user.png";

const MainHeader = () => {
  const onSearch = (value: string) => console.log(value);
  const menu = (
    <Menu
      items={[
        {
          key: "profile",
          label: <span>My Profile</span>,
        },
      ]}
    />
  );
  return (
    <HeaderWrapper className="site-layout-background">
      <SearchBarWrapper>
        <SearchBar
          placeholder="search anything"
          size="large"
          bordered={false}
          prefix={<SearchOutlined />}
          onSearch={onSearch}
          allowClear={false}
        />
      </SearchBarWrapper>
      <Actions>
        <Dropdown overlay={menu} trigger={["click"]}>
          <Space size={44}>
            <UserAction
              avatar={<Avatar size={40} src={UserProfile} />}
              title="Mr. Luis"
              description="Patient"
            />

            <DownOutlined />
          </Space>
        </Dropdown>
      </Actions>
    </HeaderWrapper>
  );
};

export default MainHeader;

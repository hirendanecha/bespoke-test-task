import { Layout } from "antd";
import React, { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { MainContent, MainWrapper } from "../styles";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <MainWrapper>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
      </MainWrapper>
    </Layout>
  );
};

export default MainLayout;

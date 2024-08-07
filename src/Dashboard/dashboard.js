import React from "react";
import { Layout, Flex } from "antd";
import "./dashboard.css";
import HeaderComponent from "./header";
import SiderComponent from "./sider";
import ContentComponent from "./content";

const { Header, Sider, Content } = Layout;

const headerStyle = {
  //   textAlign: "center",
  //   color: "#fff",
  height: 55,
  display: "flex",
  alignItems: "center",
  padding: 0,
  //   lineHeight: "64px",
  backgroundColor: "#fff",
};
const contentStyle = {
  backgroundColor: "#f0f2f5",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  height: "100%",
  backgroundColor: "#fff",
};

function Dashboard() {
  return (
    <Flex
      gap="middle"
      wrap
      style={{ height: "calc(100vh - 0px)", overflow: "hidden" }}
    >
      <Layout>
        <Header style={headerStyle}>
          <HeaderComponent />
        </Header>
        <Layout>
          <Sider
            className="sidebar"
            // trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            style={siderStyle}
          >
            <SiderComponent />
          </Sider>
          <Content style={contentStyle}>
            <ContentComponent />
          </Content>
        </Layout>
      </Layout>
    </Flex>
  );
}

export default Dashboard;

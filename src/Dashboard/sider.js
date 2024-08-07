import React from "react";
import {
  AccountBookOutlined,
  BarChartOutlined,
  HomeOutlined,
  LineChartOutlined,
  LogoutOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "./sider.css";

function getItem(label, key, icon, children, style) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Leaderboard", "2", <BarChartOutlined />),
  getItem("Account", "3", <AccountBookOutlined />),
  getItem("Order", "4", <ShoppingCartOutlined />),
  getItem("Sales Report", "5", <LineChartOutlined />),
  getItem("Settings", "6", <SettingOutlined />),
  // getItem("Sign Out", "7", <LogoutOutlined />),
];
function Sider() {
  return (
    <>
      <div className="demo-logo-vertical" />
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        className="siderMenu"
      />
      <Menu
        items={[
          getItem("Sign Out", "7", <LogoutOutlined />, null, "signout-item"),
        ]}
        mode="inline"
        className="signoutMenu"
      />
    </>
  );
}

export default Sider;

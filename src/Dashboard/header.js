import React from "react";
import dashboardIcon from "../Images/dashboard.png";
import Notificationicon from "../Images/Notifications.png";
import ProfileImg from "../Images/Profiles.png";
import { Input, Menu } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import {
  SearchOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./header.css";

function Header() {
  return (
    <>
      <img src={dashboardIcon} alt="dashboard" className="dashboardIcon" />
      <p className="companyName">Fitpeo</p>
      {/* <Input
        placeholder="Search"
        type="search"
        prefix={<SearchOutlined />}
        className="inputSearch"
      /> */}
      <Menu
        style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          justifyContent: "flex-end",
        }}
        mode="horizontal"
        className="headerMenu"
      >
        <MenuItem className="menuItem">
          <Input
            placeholder="Search"
            type="search"
            prefix={<SearchOutlined />}
            className="inputSearch"
          />
        </MenuItem>
        <MenuItem className="menuItem">
          <div>
            <MailOutlined style={{ fontSize: "18px", color: "#958d8d" }} />
          </div>
        </MenuItem>
        <MenuItem className="menuItem">
          <SettingOutlined style={{ color: "#958d8d", fontSize: "18px" }} />
        </MenuItem>
        <MenuItem className="menuItems">
          <img
            src={Notificationicon}
            alt="notify"
            width={40}
            height={40}
            className="notificationImg"
          />
        </MenuItem>
        <MenuItem className="menuItems">
          <img src={ProfileImg} alt="profile" width={50} height={50} />
        </MenuItem>
      </Menu>
    </>
  );
}

export default Header;

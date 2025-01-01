import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./Sidebar.scss";
import logo from "../../../assets/images/logo.png";
import { AddIcon, DataBot, Sync } from "../../../assets/ExportSvg/ExportSvgs";
const index = () => {
  return (

    
    <Sidebar collapsed className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} />
      </div>
      <Menu className="sidebar__menu"
      >
        <MenuItem icon={<DataBot />} className="sidebar__item">
          {" "}
        </MenuItem>
        <MenuItem icon={<Sync />} className="sidebar__item"></MenuItem>
        <MenuItem icon={<AddIcon />} className="sidebar__item"></MenuItem>
      </Menu>

      <div className="sidebar__bottom">
        <span>S</span>
      </div>
    </Sidebar>
  );
};

export default index;

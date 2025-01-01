import {  Outlet } from "react-router-dom";
import { CustomSideBar } from "../Components";
import './Layout.scss'

export default function MainLayout() {
  return (
    <>
    <div className="mainLayout">
        <CustomSideBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
    </>
  );
}




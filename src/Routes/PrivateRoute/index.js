import * as Common from "../../Common/index";
import { Route, Navigate, Outlet } from "react-router-dom";
import MainLayout from "../../Common/Layout";
import  { useSelector } from "react-redux"

export function PrivateRoute() {
  const state = useSelector((state)=> {
    return{
      token : state.authSlice.userAuth.token
    }
  })
  return state.token !== "" ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to={"/home"} />
  );
}

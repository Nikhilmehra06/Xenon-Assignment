import { useNavigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { PrivateRoute } from "./PrivateRoute/index";
import { PublicRoute } from "./PublicRoute/index";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./Routes";
import { useSelector } from "react-redux";
import { PageNotFound } from "../Pages";

export function Navigation() {
  const navigate = useNavigate();

  const state = useSelector((state)=> {
    return{
      token : state.authSlice.userAuth.token
    }
  })

  useEffect(() => {
    if (state.token !== "") {
      navigate("/home");
    }
  }, [state.token]);

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
      {PRIVATE_ROUTES.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element/>} />
        ))}
      </Route>
      <Route path="/" element={<PublicRoute />}>
        {PUBLIC_ROUTES.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element/>} />
        ))}
      </Route>


      <Route path="*" element={<PageNotFound />} />
       
    </Routes>
  );
}

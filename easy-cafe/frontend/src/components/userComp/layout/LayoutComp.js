import React from "react";
import Navbar from "../../userComp/layout/Navbar";
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../image/logop2.gif";
import NavbarAdmin from "./NavbarAdmin";
const LayoutComp = () => {
  const location = useLocation();
  // const role = "admin";
  return (
    <div>

      {/* {(role == "user")
      ?<Navbar/> + (location.pathname === "/" ? <img src={logo}></img> : <Outlet />)
      :<NavbarAdmin/> + (location.pathname === "/homeAdmin" ? <img src={logo}></img> : <Outlet />)} */}
      
      {console.log(location)}
      {/* <Navbar/> */}
      <NavbarAdmin />
      {location.pathname == "/" ? <img src={logo}></img> : <Outlet />}
    </div>
  );
};

export default LayoutComp;

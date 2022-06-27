import React from "react";
import Navbar from "./Navbar";
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../image/logop2.gif";
const LayoutComp = () => {
  const location = useLocation();
  return (
    <div>
      {console.log(location)}
      <Navbar />

      {location.pathname == "/" ? 
      <img src={logo}></img>
       : <Outlet />}
       
    </div>
  );
};

export default LayoutComp;

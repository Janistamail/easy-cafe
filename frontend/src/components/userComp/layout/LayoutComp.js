import React from "react";
import Navbar from "./Navbar";
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../image/logop2.gif";
import { useContext } from "react";
import AuthenContext from "../../../AuthenContext";
import axios from "axios";
import { useEffect } from "react";

const LayoutComp = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      {/* {location.pathname == "/" ? <img src={logo}></img> : <Outlet />} */}
      <Outlet />
    </div>
  );
};

export default LayoutComp;

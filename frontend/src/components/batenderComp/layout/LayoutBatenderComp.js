import React from "react";
import Navbar from "./NavbarBatender";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NavbarBatender from "./NavbarBatender"

const LayoutCompBTD = () => {
  return (
    <div>
      <NavbarBatender />
      <Outlet />
    </div>
  );
};

export default LayoutCompBTD;

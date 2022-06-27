import React from "react";
import Navbar from "./NavbarAdmin";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin"

const LayoutAdminComp = () => {
  return (
    <div>
      <NavbarAdmin />
      <Outlet />
    </div>
  );
};

export default LayoutAdminComp;

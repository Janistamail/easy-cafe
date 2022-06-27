import React from "react";
import Navbar from "./Navbar";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const LayoutComp = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutComp;

import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LayoutComp from "./components/userComp/layout/LayoutComp";
import HomeDetail from "./components/userComp/homeDetail/HomeDetail";
import EditProduct from "./components/userComp/editDetail/editProduct";
import BartenderDetail from "./components/batenderComp/BartenderDetail";
import AdminDetail from "./components/adminComp/AdminDetail";
import AuthenContext from "./AuthenContext";
import axios from "axios";
import Login from "./components/userComp/login/Login";
import { useSelector } from "react-redux";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  const userStatus = useSelector((state) => state.auth.status);
  return (
    <>
      <h3>home</h3>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          {userStatus === "user" && (
            <Route path="/:pageCat" element={<HomeDetail />} />
          )}
          {/* <Route path="/:pageCat" element={<HomeDetail />} /> */}
          {userStatus === "" && (
            <Route path="/login/:status" element={<Login />} />
          )}
          {userStatus === "admin" && (
            <Route path="/admin" element={<AdminDetail />} />
          )}
          {userStatus === "bartender" && (
            <Route path="/bartender" element={<BartenderDetail />} />
          )}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <hr />
    </>
  );
}

function NoMatch() {
  return (
    <>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
}

export default App;

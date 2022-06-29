import React from "react";
import Navbar from "./Navbar";
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import logo from "../../image/logop2.gif";
import { useContext } from "react";
import AuthenContext from "../../../AuthenContext";
import axios from "axios";

const LayoutComp = () => {
  const location = useLocation();
  const { liff, liffid, authenRight, setAuthenRight, data, setData } =
    useContext(AuthenContext);
  console.log(authenRight);

  const initLine = async () => {
    await liff.init({ liffId: `${liffid}` }).catch((err) => {
      throw err;
    });

    if (liff.isLoggedIn()) {
      setAuthenRight("user");

      let getProfile = await liff.getProfile();
      setData({
        line_name: getProfile.displayName,
        line_id: getProfile.userId,
        line_pic: getProfile.pictureUrl,
        status: "user",
      });
      const result = axios.post("/authen/login", { data });
      console.log(data);
    } else {
      liff.login();
    }
  };

  initLine();

  return (
    <div>
      <Navbar />
      {location.pathname == "/" ? <img src={logo}></img> : <Outlet />}
    </div>
  );
};

export default LayoutComp;

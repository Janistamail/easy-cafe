import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LayoutComp from "./components/userComp/layout/LayoutComp";
import HomeDetail from "./components/userComp/homeDetail/HomeDetail";
import EditProduct from "./components/userComp/editDetail/editProduct";
import BartenderDetail from "./components/batenderComp/homeDetail/BartenderDetail";
import AdminDetail from "./components/adminComp/AdminDetail";
import AuthenContext from "./AuthenContext";
import axios from "axios";
import SuccessDetail from "./components/batenderComp/successDetail/SuccessDetail";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";

  //LIFF PART
  const liff = window.liff;
  const liffid = "1657099044-Jjo1LZmv";
  const [authenRight, setAuthenRight] = useState("");
  const [data, setData] = useState(null);
  // const initLine = async () => {
  //   await liff.init({ liffId: `${liffid}` }).catch((err) => {
  //     throw err;
  //   });
  //   if (liff.isLoggedIn()) {
  //     let getProfile = await liff.getProfile();
  //     // setData({
  //     //   name: getProfile.displayName,
  //     //   userLineID: getProfile.userId,
  //     //   pictureUrl: getProfile.pictureUrl,
  //     //   // status:
  //     // });
  //     console.log(getProfile);
  //   } else {
  //     liff.login();
  //   }
  // };

  // initLine();
  console.log(authenRight);

  return (
    <AuthenContext.Provider
      value={{ liff, liffid, authenRight, setAuthenRight, data, setData }}
    >
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          {/* {authenRight === "user" && (
            <Route path="/:pageCat" element={<HomeDetail />} />
          )} */}

          {/* <Route path="/:pageCat" element={<HomeDetail />} /> */}

          {/* {authenRight === "admin" && (
            <Route path="/admin" element={<AdminDetail />} />
          )}
          {authenRight === "bartender" && (
            <Route path="/bartender" element={<BartenderDetail />} />
          )} */}
          <Route path="/bartender" element={<BartenderDetail />} />
          <Route path="/bartender/success" element={<SuccessDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <hr />
    </AuthenContext.Provider>
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

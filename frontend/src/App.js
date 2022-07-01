import axios from "axios";
import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import AdminDetail from "./components/adminComp/AdminDetail";
import BartenderDetail from "./components/batenderComp/BartenderDetail";
import Start from "./components/login/Start";
import HomeDetail from "./components/userComp/homeDetail/HomeDetail";
import LayoutComp from "./components/userComp/layout/LayoutComp";
import Navbar from "./components/userComp/layout/Navbar";
import CartDetail from "./components/userComp/cartDetail/CartDetail";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  const userStatus = useSelector((state) => state.authen.statusRight);

  //LIFF PART
  const liff = window.liff;
  const liffid = "1657254572-91OYpANd";
  const [authenRight, setAuthenRight] = useState("");
  const [data, setData] = useState(null);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<Start />} />

          <Route index path="/:pageCat" element={<HomeDetail />} />
          <Route index path="/cart" element={<CartDetail />} />

          <Route path="/bartender" element={<BartenderDetail />} />
          <Route path="/admin" element={<AdminDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <hr />
    </div>
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

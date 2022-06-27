import React from "react";
import logo1 from "../../image/logop2.gif";
import logo2 from "../../image/eazycafe.gif";
import icon_home from "../../image/icon_home.png";
import icon_cart from "../../image/icon_cart.png";
import icon_profile from "../../image/icon_profile.png";
import icon_notify from "../../image/icon_notify.png";
import icon_sucsess from "../../image/icon_sucsess.png";
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import "./navbarBatender.css";
import { useContext } from "react";
import Context from "../../../Context";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initAllCategory, setCurrentCategory } from "../categorySlice";
import axios from "axios";

const NavbarBatender = () => {
  let dispatch = useDispatch();
  let state = useSelector((state) => state.category);

  useEffect(() => {
    const fetchAllCategory = async () => {
      let result = await axios.get("users/allCategory");
      console.log(result);
      if (result.status === 200) {
        dispatch(initAllCategory(result.data));
      }
    };
    fetchAllCategory();
  }, []);

  let navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: 100,
          margin: "0% auto",
          width: "100%",
          opacity: 1,
        }}
      >
        <div className="flex-container-1">
          <li type="none" style={{ textAlign: "center"}}>
            <div
              style={{
                backgroundColor: "#252525",
                width: "100px",
                height: "100px",
              }}
            >
              <img src={logo1} width="80px" />
            </div>
          </li>

          <li type="none" style={{ textAlign: "left"}}>
            <div
              style={{
                backgroundColor: "#252525",
                width: "328px",
                height: "70px",
              }}
            >
              <img src={logo2} width="250px" />
            </div>
          </li>
        </div>

        {/* ------------------------------------Header Menu------------------------------------ */}
        <div className="nonenavbar"></div>

      </div>

      {/* ------------------------------------Footer Menu------------------------------------ */}

      <div
        style={{
          position: "fixed",
          bottom: "-10px",
          zIndex: 100,
          margin: "0% auto",
          width: "100%",
          opacity: 1,
          textAlign: "center",
        }}
      >
        <div className="flex-container-2">
          <div className="navbarfooter">
            <tr textAlign={"center"}>
              <td className="menufooter">
                <Link to={"/"}>
                  <img src={icon_home} width="80px" />
                </Link>
              </td>

              <td className="menufooter">
                <Link to={"/profile"}>
                  <img src={icon_sucsess} width="80px" />
                </Link>
              </td>
            </tr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBatender;

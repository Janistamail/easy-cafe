import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { initData, setStatus, initLineId } from "../authSlice";

const liff = window.liff;

const Login = () => {
  //LIFF PART
  const liffid = "1657254572-91OYpANd";

  const { status } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.auth.status);
  const data = useSelector((state) => state.auth.data);

  useEffect(() => {
    const initLine = async () => {
      await liff.init({ liffId: `${liffid}` }).catch((err) => {
        throw err;
      });

      if (liff.isLoggedIn()) {
        //   setAuthenRight("user");

        console.log("loggedIn");

        let getProfile = await liff.getProfile();
        // console.log(getProfile);
        dispatch(
          initData({
            line_name: getProfile.displayName,
            line_id: getProfile.userId,
            line_pic: getProfile.pictureUrl,
          })
        );
      } else {
        liff.login();
      }
    };
    initLine();
  }, []);

  useEffect(() => {
    const login = async () => {
      if (data) {
        await axios
          .post("/authen/login", { ...data, status })
          .then((res) => {
            // console.log(res.data);
            dispatch(initLineId(res.data.line_id));
            dispatch(setStatus(res.data.status));
            if (res.data.status === "admin") {
              navigate("/admin");
            }

            if (res.data.status === "user") {
              console.log("to user page");
              navigate("/coffee");
            }

            if (res.data.status === "bartender") {
              navigate("/bartender");
            }
          })
          .catch((err) => console.log(err));
      }
    };
    login();
  }, [data]);

  useEffect(() => {
    console.log("hello");
    if (userStatus == "admin") {
      navigate("/admin");
    }

    if (userStatus == "user") {
      console.log("to user page");
      navigate("/");
    }

    if (userStatus == "bartender") {
      navigate("/bartender");
    }
  }, [userStatus]);

  console.log("status", status);
  console.log("user", userStatus);

  return <>{status}</>;
};

export default Login;

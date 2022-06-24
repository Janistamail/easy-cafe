import React from "react";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useContext } from "react";

import { useSelector, useDispatch } from "react-redux";
import { initHome, increaseMenuOrder, decreaseMenuOrder } from "../userSlice";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const HomeDetail = () => {
  let location = useLocation();
  // console.log(location);

  const [amount, setAmount] = useState(0);
  const { pageCat } = useParams();

  const state = useSelector((state) => state.user);
  const state1 = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("test", pageCat);
    console.log();
    const initFunc = async () => {
      let result = await axios.get(`/users/home/${pageCat}`);
      console.log(result);
      if (result.status === 200) {
        dispatch(initHome(result.data));
      }
    };
    initFunc();
  }, [pageCat]);

  return (
    <div className="box">
      {state.order &&
        state.order.map((x, index) => (
          <div id="cards">
            <div className="BoxA">
              <h3>{x.product_name}</h3>
              <br />
              <img
                width="100px"
                height="100px"
                src={`${x.product_photo}`}
              ></img>
              <br />
              {x.hot_price ? (
                <>
                  <input type="radio" value="ร้อน" name="type" checked /> 
                  <label for="ร้อน">ร้อน {x.hot_price} บาท</label>
                </>
              ) : (
                <></>
              )}
              <br />
              {x.iced_price ? (
                <>
                  <input type="radio" value="เย็น" name="type" /> {" "}
                  <label for="เย็น">เย็น {x.iced_price} บาท</label>
                </>
              ) : (
                <></>
              )}
              <br />
              {x.frappe_price ? (
                <>
                  {" "}
                  <input type="radio" value="ปั่น" name="type" /> {" "}
                  <label for="ปั่น">ปั่น {x.frappe_price} บาท</label>
                  <br />
                </>
              ) : (
                <></>
              )}
              <p>
                <button onClick={() => dispatch(decreaseMenuOrder(index))}>
                  -
                </button>
                {/* {console.log(state)} */}
                {x.quantity}
                <button onClick={() => dispatch(increaseMenuOrder(index))}>
                  +
                </button>
              </p>
              <br />
              <button>เพิ่ม</button>
              <br />
            </div>
          </div>
        ))}
    </div>
  );
};

export default HomeDetail;

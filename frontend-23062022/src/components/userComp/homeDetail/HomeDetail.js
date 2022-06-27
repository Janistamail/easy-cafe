import React from "react";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useContext } from "react";

import { useSelector, useDispatch } from "react-redux";
import { initHome } from "../userSlice";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getCurrentCategory } from "../categorySlice";
// import { increaseMenuOrder, decreaseMenuOrder } from "../cartSlice";

const HomeDetail = () => {
  let location = useLocation();
  // console.log(location);

  const [amount, setAmount] = useState(0);
  const [product, setProduct] = useState([]);

  const { pageCat } = useParams();

  const state = useSelector((state) => state.user);
  const state1 = useSelector((state) => state.category);
  const state2 = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const initFunc = async () => {
      let result = await axios.get(`/users/home/${pageCat}`);
      console.log(result);
      if (result.status === 200) {
        dispatch(initHome(result.data));
        setProduct(result.data);
      }
    };
    initFunc();
  }, [pageCat]);

  return (
    <div className="box">
      {product &&
        product.map((x) => (
          <div id="cards">


            <div className='BoxA'>Home</div>
            <div className='BoxA'>Home</div>
            <div className='BoxA'>Home</div>
            <div className='BoxA'>Home</div>
            <div className='BoxA'>Home</div>
            <div className='BoxA'>Home</div>

            <div className="BoxA">
              <h3 style={{ padding: '10px' }}>{x.product_name}</h3>

              <table>
                <tr>
                  <td className="column-1">
                    <img className="product-image"
                      width="120px"
                      height="120px"
                      src={`${x.product_photo}`}
                    ></img>
                  </td>
                  <td className="column-2">
                    <li type="none"><input type="radio" checked /> {" "}<label>ร้อน {x.hot_price} บาท</label></li>
                    <li type="none"><input type="radio" />  <label>เย็น {x.iced_price} บาท</label></li>
                    <li type="none"><input type="radio" />  <label>ปั่น{x.frappe_price} บาท</label></li>

                    {/* <li type="none">
                      <button onClick={() => dispatch(decreaseMenuOrder())}>-</button>
                      <label value></label>
                      {state2.amountHomeOrder}
                      <button onClick={() => dispatch(increaseMenuOrder())}>+</button>
                    </li> */}

                  </td>
                </tr>
              </table>

              {/* <p>
                <button onClick={() => dispatch(decreaseMenuOrder())}>-</button>
                <label value></label>
                {state2.amountHomeOrder}
                <button onClick={() => dispatch(increaseMenuOrder())}>+</button>
              </p> */}
              <br />
              {/* <button onClick={() => dispatch(addOrder())}>เพิ่ม</button> */}
              <br />
            </div>

          </div>
        ))}
    </div>
  );
};

export default HomeDetail;


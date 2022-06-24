import React from "react";
import axios from "axios";

import "./homeDetail.css";

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
    // <div className="box">
    //   {state.order &&
    //     state.order.map((x, index) => (
    //       <div id="cards">
    //         <div className="BoxA">
    //           <h3>{x.product_name}</h3>
    //           <br />
    //           <img
    //             width="100px"
    //             height="100px"
    //             src={`${x.product_photo}`}
    //           ></img>
    //           <br />
    //           {x.hot_price ? (
    //             <>
    //               <input type="radio" value="ร้อน" name="type" checked />
    //               <label for="ร้อน">ร้อน {x.hot_price} บาท</label>
    //             </>
    //           ) : (
    //             <></>
    //           )}
    //           <br />
    //           {x.iced_price ? (
    //             <>
    //               <input type="radio" value="เย็น" name="type" /> {" "}
    //               <label for="เย็น">เย็น {x.iced_price} บาท</label>
    //             </>
    //           ) : (
    //             <></>
    //           )}
    //           <br />
    //           {x.frappe_price ? (
    //             <>
    //               {" "}
    //               <input type="radio" value="ปั่น" name="type" /> {" "}
    //               <label for="ปั่น">ปั่น {x.frappe_price} บาท</label>
    //               <br />
    //             </>
    //           ) : (
    //             <></>
    //           )}
    //           <p>
    //             <button onClick={() => dispatch(decreaseMenuOrder(index))}>
    //               -
    //             </button>
    //             {/* {console.log(state)} */}
    //             {x.quantity}
    //             <button onClick={() => dispatch(increaseMenuOrder(index))}>
    //               +
    //             </button>
    //           </p>
    //           <br />
    //           <button>เพิ่ม</button>
    //           <br />
    //         </div>
    //       </div>
    //     ))}
    // </div>
    <div>
      {state.order &&
        state.order.map((x, index) => (
          <div className="mt-5 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-home space-y-6 sm:p-6">
                      <fieldset>
                        <legend className="contents text-base font-medium text-white">
                          {x.product_name}
                        </legend>
                        <img
                          width="100px"
                          height="100px"
                          src={`${x.product_photo}`}
                        ></img>

                        <div className="mt-4 space-y-4">
                          <div className="flex items-center">
                            {x.hot_price ? (
                              <>
                                <input
                                  id="push-everything"
                                  name="type"
                                  type="radio"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label
                                  htmlFor="hot"
                                  className="ml-3 block text-sm font-medium text-white"
                                >
                                  HOT {x.hot_price} BAHT
                                </label>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>

                          <div className="flex items-center">
                            {x.iced_price ? (
                              <>
                                <input
                                  id="push-everything"
                                  name="type"
                                  type="radio"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label
                                  htmlFor="iced"
                                  className="ml-3 block text-sm font-medium text-white"
                                >
                                  ICED {x.iced_price} BAHT
                                </label>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>

                          <div className="flex items-center">
                            {x.frappe_price ? (
                              <>
                                <input
                                  id="push-everything"
                                  name="type"
                                  type="radio"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label
                                  htmlFor="frappe"
                                  className="ml-3 block text-sm font-medium text-white"
                                >
                                  FRAPPE {x.frappe_price} BAHT
                                </label>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div className="px-4 py-3 bg-home text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default HomeDetail;

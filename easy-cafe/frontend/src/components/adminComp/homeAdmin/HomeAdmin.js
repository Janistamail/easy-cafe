import React, { useEffect,useState } from "react";
import axios from "axios";

import "../../userComp/homeDetail/homeDetail.css";

import { useSelector, useDispatch } from "react-redux";
import { initProduct } from "../../userComp/adminSlice";
import { useLocation, useParams } from "react-router-dom";

const HomeAdmin = () => {

  let location = useLocation();
  // console.log(location);

  const { category_name } = useParams();

  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    // console.log("test", category_name);
    const initFunc = async () => {
      let result = await axios.get(`/admins/home/${category_name}`);
      console.log(result.data);
      if (result.status === 200) {
        dispatch(initProduct(result.data));
       
      }
    };
    initFunc();
  }, [category_name]);



  return (

    <div style={{ paddingTop: "100px", padding: "10px" }}>
      {state.product &&
        state.product.map((x, index) => (
          <div className="mt-2 sm:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-1">
              <div className="mt-2 md:mt-0 md:col-span-2">
                <form action="#">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-home space-y-2 sm:p-6">
                      <fieldset>
                        <legend className="contents text-xl font-large text-white uppercase">
                          {x.product_name}
                        </legend>

                        <table>
                          <tr>
                            <td>
                              <img
                                style={{ margin: "30px", borderRadius: "10px" }}
                                width="100px"
                                height="100px"
                                src={`http://localhost:3000/static/pic/${x.product_photo}`}
                              ></img>
                            </td>
                            <td>
                              <div className="mt-4 space-y-4">
                                <div className="flex items-center">
                                  {x.hot_price ? (
                                    <>
                                     
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

                                <button
                                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  Edit
                                </button>
                                <p style={{ color: "white" }}>{x.quantity}</p>
                                {console.log(x.quantity)}


                              </div>
                            </td>
                          </tr>
                        </table>
                      </fieldset>
                    </div>
                    <div className="px-4 py-3 bg-home text-center sm:px-6">
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

export default HomeAdmin;

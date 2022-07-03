import React from "react";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initHome, increaseMenuOrder, decreaseMenuOrder } from "../../userComp/userSlice";
import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import NavbarAdminFooter from '../../layout/navbarAdminFooter';
import NavbarAdminHead from "../../layout/navbarAdminHead";

const HomeAdminDetail = () => {
  let location = useLocation();
  // console.log(location);

  const [amount, setAmount] = useState(0);
  const { pageCat } = useParams();

  const state = useSelector((state) => state.user);
  const state1 = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("test", pageCat);
    const initFunc = async () => {
      let result = await axios.get(`/users/home/${pageCat}`);
      console.log('result', result);
      if (result.status === 200) {
        dispatch(initHome(result.data));
      }
    };
    initFunc();
  }, [pageCat]);

  let navigate = useNavigate();

  return (
<div>
  <NavbarAdminHead/>  
    <div className="pt-32 pb-16">
      {state.order &&
        state.order.map((x, index) => (
          <div className="mt-2 sm:mt-5">
            <div className="px-2.5 md:grid md:grid-cols-1 md:gap-10 ">
              <div className="rounded-lg bg-home mt-2 md:mt-0 md:col-span-2">

                <form action="#">
                  <div className="rounded-lg shadow overflow-hidden">
                    <div className="px-4 py-3 space-y-2 sm:p-6">

                      <fieldset>
                        <legend className="contents text-xl font-large text-white uppercase">
                          {x.product_name}
                        </legend>

                        <table>
                          <tr>
                            <td>

                              <img
                                style={{ margin: "30px 30px 30px 0px", borderRadius: "10px" }}
                                width="120px"
                                height="120px"
                                src=
                                {`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUt4IIvaRZbnSuRXBFuL-Tho4e3576M9wZXQ&usqp=CAU`}
                                // {`${x.product_photo}`}
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

                              </div>
                            </td>
                          </tr>
                        </table>
                      </fieldset>
                    </div>
                    </div>
                </form>
                    <div className="px-2 py-3 text-center sm:px-6 w-full">
                      <table className="px-2 py-3 text-center sm:px-6 w-full">
                        <tr>
                          <td>
                            
                            <button
                              // type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              role="button"
                                onClick={() => {
                                  // dispatch(setCurrentCategory(x.product_name));
                                  navigate(`/admin/editproduct/${x.id_product}`, 
                                  // {state: x.product_name,}
                                  );
                                }}
                              >
                              EDIT PRODUCT
                            </button>

                          </td>
                          
                          <td>
                            <button
                              // type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              onClick={()=>{axios.delete(`/admins/product/del/${x.id_product}`);
                              // navigate('/admin/coffee');
                            }}
                              >
                              DELETE PRODUCT
                              </button>
                          </td>
                        </tr>
                      </table>
 
                    </div>

              </div>
            </div>
          </div>
        ))}
    </div>
    <NavbarAdminFooter/>
</div>
  );
};

export default HomeAdminDetail;
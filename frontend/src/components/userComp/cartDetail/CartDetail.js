import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarFooter from "../../layout/navbarFooter";
import NavbarHead from "../../layout/navbarHead";
import { updateCart } from "../cartDetail/cartSlice";

const CartDetail = () => {
  let dispatch = useDispatch();
  let orderInCart = useSelector((state) => state.cart.orderInCart);
  let id_account = useSelector((state) => state.authen.id_account);

  console.log("orderInCart", orderInCart);

  return (
  <div>
    <NavbarHead/>

    <div className="pt-32 pb-16">
        {orderInCart &&
          orderInCart.map((x) => (
            <div className="mt-2 sm:mt-5">
            <div className="md:grid md:grid-cols-1 md:gap-10">
              <div className="px-2.5 mt-2 md:mt-0 md:col-span-2">
                <div className="px-4 py-3 shadow  rounded-lg bg-home overflow-hidden">

                <div className="contents text-xl font-large text-white uppercase">
                  <p>{x.productName}</p>
                </div>

                <div className="contents text-base text-white uppercase">
                  <table className="w-full text-center mt-3 mb-5">
                    <tr>
                      <td>
                        <p> Type </p>
                      </td>
                      <td>
                        <p> Price </p>
                      </td>
                      <td>
                        <p> quantity </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>{x.drinkType}</p>
                      </td>
                      <td>
                        <p>{x.price} </p>
                      </td>
                      <td>
                        <p>{x.quantity}</p>
                      </td>
                    </tr>
                  </table>

                  <table className="w-full text-center mt-3 mb-3">
                    <tr>
                      <td>
                        <button
                        type="submit"
                        className=" py-2 px-4 inline-flex justify-center border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        EDIT
                        </button>
                      </td>
                      <td>
                        <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        DELETE
                        </button>
                      </td>
                    </tr>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  <NavbarFooter/>
</div>
  );
};

export default CartDetail;

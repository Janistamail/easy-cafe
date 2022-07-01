import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../cartDetail/cartSlice";

const CartDetail = () => {
  let dispatch = useDispatch();
  let orderInCart = useSelector((state) => state.cart.orderInCart);
  let id_account = useSelector((state) => state.authen.id_account);

  // useEffect(() => {
  //   const showCart = async () => {
  //     let result = await axios.post("/users/showCart", {
  //       id_account: id_account,
  //     });
  //     if (result) {
  //       console.log("checkCart", result.data);
  //       // dispatch(updateCart(result.data));
  //     }
  //   };

  //   showCart();
  // }, []);
  console.log("orderInCart", orderInCart);

  return (
    <div className="box">
      <div id="cards">
        {orderInCart &&
          orderInCart.map((x) => (
            <div className="BoxA">
              <button
                style={{
                  background: "green",
                  // marginTop: "400px",
                  //   marginLeft: "50%",
                  color: "white",
                  border: "1px solid white",
                  padding: "10px 30px",
                  borderRadius: "10px",
                }}
              >
                edit
              </button>
              <p>{x.productName}</p>
              <p>{x.drinkType}</p>
              <p>{x.price} </p>
              <p>{x.quantity}</p>
              <button
                style={{
                  background: "green",
                  // marginTop: "400px",
                  //   marginLeft: "50%",
                  color: "white",
                  border: "1px solid white",
                  padding: "10px 30px",
                  borderRadius: "10px",
                }}
              >
                delete
              </button>
            </div>
          ))}
        <p>Total: --- BAHT</p>
        <button>PAY NOW</button>
      </div>
    </div>
  );
};

export default CartDetail;

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
              <button>edit</button>
              <p>{x.productName}</p>
              <p>{x.drinkType}</p>
              <p>{x.price} </p>
              <p>{x.quantity}</p>
              <button>delete</button>
            </div>
          ))}

        {/* <table style="width:100%">
          <tr>
            <th></th>
            <th>LIST</th>
            <th></th>
            <th>PRICE</th>
            <th>QTY.</th>
            <th></th>
          </tr>
          {orderInCart &&
            orderInCart.map((x, index) => (
              <tr>
                <td>1</td>
                <td>{x.productName}</td>
                <td>{x.drinkType}</td>
                <td>{x.price} </td>
                <td>{x.quantity}</td>
                <td><img src=""></img></td>
              </tr>
            ))}
        </table> */}
        <p>Total: --- BAHT</p>
        <button>PAY NOW</button>
      </div>
    </div>
  );
};

export default CartDetail;

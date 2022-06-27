import React from "react";
import { useDispatch, useSelector } from "react-redux";
const CartDetail = () => {
  let dispatch = useDispatch();
  let state = useSelector((state) => state.cart);

  return (
    <div className="box">
      {/* <div id="cards">
        <div className="BoxA">1234</div>
        <table style="width:100%">
          <tr>
            <th></th>
            <th>LIST</th>
            <th></th>
            <th>PRICE</th>
            <th>QTY.</th>
            <th></th>
          </tr>
          {state.orderFromCustomer &&
            state.orderFromCustomer.map((x, index) => (
              <tr>
                <td>
                  <img src=""></img>
                </td>
                <td>{x.}</td>
                <td>{x.}</td>
                <td>{x.} B.</td>
                <td>{x.}</td>
                <td> <img src=""></img></td>
              </tr>
            ))}
        </table>
        <p>Total: --- BAHT</p>
        <button>PAY NOW</button>
      </div> */}
      {/* {console.log(state.orderFromCustomer)} */}
    </div>
  );
};

export default CartDetail;

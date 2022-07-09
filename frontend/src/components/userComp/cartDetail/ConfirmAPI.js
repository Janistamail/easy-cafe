import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { queryParams } from "../../../utils/StringUtils";

const ConfirmAPI = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location", location.search);

  useEffect(() => {
    const queryObj = queryParams(location.search);
    const transactionId = queryObj.transactionId;
    console.log({ transactionId });
    console.log([queryObj.transactionId]);
    console.log({ queryObj });

    let conFirmAPIFunc = async () => {
      let res = await axios.get(`payment/findAmount/${transactionId}`);
      console.log("res.data", res.data[0]);

      let res2 = await axios.post(
        `payment/v3/payments/${res.data[0].transactionId}/confirm`,
        {
          amount: res.data[0].amount,
          currency: "THB",
        }
      );
      console.log("mmms", res2.data);
      if (res2.data.returnCode == "0000") {
        const sendToOrdersTable = async () => {
          let result = await axios.post("/");
        };
      }
    };
    conFirmAPIFunc();
  }, []);

  return (
    <div
      style={{ padding: "0px 20px", justifyContent: "center", display: "flex" }}
    >
      <button
        style={{
          background: "green",
          marginTop: "400px",
          //   marginLeft: "50%",
          color: "white",
          border: "1px solid white",
          padding: "10px 30px",
          borderRadius: "10px",
        }}
        onClick={() => navigate("/coffee")}
      >
        order Again
      </button>
    </div>
  );
};

export default ConfirmAPI;

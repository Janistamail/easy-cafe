import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const EditProduct = () => {
  useEffect(() => {
    const getDataEdit = () => {
      let result = axios.get("/users/edit");
    };
  }, []);
  return (
    <div
      style={{
        height: "100px",
        width: "428px",
        margin: "auto",
        paddingTop: "138px",
      }}
    >
      <div id="cards">
        <div className="BoxA">Home</div>
      </div>
    </div>
  );
};

export default EditProduct;

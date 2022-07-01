import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
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
        ORDER NOW
      </button>
    </div>
  );
};

export default Start;

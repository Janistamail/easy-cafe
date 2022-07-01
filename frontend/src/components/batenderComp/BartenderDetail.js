import React from "react";
import { Outlet } from "react-router-dom";

const BartenderDetail = () => {
  return (
    <div>
      <div>BartenderDetail</div>
      <Outlet />
    </div>
  );
};

export default BartenderDetail;

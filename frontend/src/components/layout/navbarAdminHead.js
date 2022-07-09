import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initAllCategory, setCurrentCategory } from "../userComp/categorySlice";
import axios from "axios";

{/* ------------ Apichart : Update Tailwind Form 25/06/2022 ---------------------------- */ }

const NavbarAdminHead = () => {
  let dispatch = useDispatch();
  let state = useSelector((state) => state.category);

  useEffect(() => {
    const fetchAllCategory = async () => {
      let result = await axios.get("users/allCategory");
      // console.log(result);
      if (result.status === 200) {
        dispatch(initAllCategory(result.data));
      }
    };
    fetchAllCategory();
  }, []);

  let navigate = useNavigate();

  
  
  return (
    
    <div>
        {/* ---------------------------------------------------NavbarHead------------------------------------------------------------------- */}
        <div className="flex-container-nav"         
        style={{
          position: "fixed",
          top: "90px",
          left: "0px",
          zIndex: 100,
          margin: "0% auto",
          width: "100%",
          opacity: 1,
        }} >

          {state.categoryAll &&
            state.categoryAll.map((x) => (
              <button
                className="button-30 uppercase"
                role="button"
                onClick={() => {
                  dispatch(setCurrentCategory(x.category_name));
                  navigate(`/admin/${x.category_name}`, { state: x.category_name });
                }}
              >
                {x.category_name}
              </button>
            ))}

        </div>
    </div>
  );
};

export default NavbarAdminHead;

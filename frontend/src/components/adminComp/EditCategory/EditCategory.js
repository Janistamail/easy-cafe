import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../layout/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  initAllCategory,
  setCurrentCategory,
} from "../../userComp/categorySlice";
import axios from "axios";
import NavbarAdminHead from "../../layout/navbarAdminHead";
import NavbarAdminFooter from "../../layout/navbarAdminFooter";


{
  /* ------------ Apichart : Update Tailwind Form 25/06/2022 ---------------------------- */
}

const EditCategory = () => {
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
      <NavbarAdminHead />
      <div className="pt-32 pb-16">
        <div className="mt-2 sm:mt-5">
          <div className="md:grid md:grid-cols-1 md:gap-10">
            <div className="mt-2 md:mt-0 md:col-span-2">
              <div className="px-2.5 shadow overflow-hidden">
                <div className=" rounded-lg px-4 py-3 bg-home space-y-2 sm:p-6">
                  <div className="contents text-base text-white uppercase">
                    <p className="text-center mt-3 mb-4">EDIT CATEGORY</p>
                    <table className="w-full text-center mt-3 mb-5">
                      {state.categoryAll &&
                        state.categoryAll.map((x) => (
                          <tr className="w-full justify-center">
                            <td>
                              <p className="text-white text-left mt-2">
                                {x.category_name}
                              </p>
                            </td>

                            <td>
                              <button
                                className="inline-flex justify-center mt-2 py-.5 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                role="button"
                                onClick={() => {
                                  dispatch(setCurrentCategory(x.category_name));
                                  navigate(`/admin/editAnyCategory/${x.id_category}`, {
                                    state: x.category_name,
                                  });
                                }}
                              >
                                EDIT
                              </button>
                            </td>

                            <td>
                              <button
                                className="inline-flex justify-center mt-2 py-.5 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={()=>{axios.delete(`/admins/category/del/${x.id_category}`);
                            }}
                              >
                                DELETE
                              </button>
                            </td>
                          </tr>
                        ))}
                    </table>
                  </div>

                  <div className="px-2 py-3 bg-home text-center sm:px-6">
                    
                    <Link to={"/admin/addCategory"}>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      ADD NEW CATEGORY
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavbarAdminFooter />
    </div>
  );
};

export default EditCategory;

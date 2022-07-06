import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const inf = useSelector((state) => state.authen);
  console.log(inf);
  return (
    <div className="pt-32 pb-16">
      <div className="mt-2 sm:mt-5">
        <div className="px-2.5 md:grid md:grid-cols-1 md:gap-10 ">
          <div className="rounded-lg bg-home mt-2 md:mt-0 md:col-span-2">
            {/* <div className="rounded-lg shadow overflow-hidden">
                    <div className="px-4 py-3 space-y-2 sm:p-6"> */}


            <img
              src={`${inf.data.line_pic}`}
              style={{ width: 300, height: 300, borderRadius: 400 / 2 }}
            />
            <br />

            <div className="contents text-xl font-large text-white uppercase">
              <h1>USERNAME : {inf.data.line_name} </h1>
              <h1>ROLE : {inf.role}</h1>
            </div>

          </div>
        </div>
      </div>
    </div>

    // <div className="box">
    //   <div id="cards">
    //     <img
    //       src={`${inf.data.line_pic}`}
    //       style={{ width: 300, height: 300, borderRadius: 400 / 2 }}
    //     />
    //     <br />
    //     <div className="BoxA">
    //       <h1>USERNAME : {inf.data.line_name} </h1>
    //       <h1>ROLE : {inf.role}</h1>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UserProfile;

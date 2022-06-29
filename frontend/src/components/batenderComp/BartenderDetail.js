import React, { useEffect, useState } from "react";
import axios from "axios";
const BartenderDetail = () => {
  const [orders, setOrders] = useState(null);
  const [show, setShow] = useState(null);
  const get = async () => {
    const res = await axios.get("bartenders/home");
    setOrders(res.data);
  };
  useEffect(() => {
    (!orders) ? get() : <></>;

  }, []);
  if (orders) {
    let results = orders.reduce(function (results, org) {
      (results[org.id_order] = results[org.id_order] || []).push(org);
      return results;

    }, {})
    // show.push(results)
    const entries = Object.values(results);
    if (!show) {
      setShow(entries);

    }

    console.log(show);
  }

  return (
    <div
      style={{ paddingTop: "100px", padding: "10px", paddingBottom: "100px", marginTop: "90px" }}
    >
      {show &&
        show.map((x, index) => (
          <div className="mt-2 sm:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-1">
              <div className="mt-2 md:mt-0 md:col-span-2">
                <form
                  action="#"
                // onSubmit={handleSubmit}
                >
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-home space-y-2 sm:p-6">
                      <fieldset>
                        <legend className="contents text-xl font-large text-white uppercase">
                          Order id  = {x[0].id_order}
                        </legend>
                        <table>
                          <tr>
                            <th style={{ color: "white" }}>
                              ลำดับ
                            </th>
                            <th style={{ color: "white" }}>
                              รายการ
                            </th>
                            <th style={{ color: "white" }}>
                              ประเภท
                            </th>
                            <th style={{ color: "white" }}>
                              จำนวน
                            </th>
                          </tr>
                          {
                            x.map((x,index) => (
                              <>
                                <tr>
                                  <td style={{ color: "white" }}>
                                    {index+1}
                                  </td>
                                  <td style={{ color: "white" }}>
                                    {x.product_name}
                                  </td>
                                  <td style={{ color: "white" }}>
                                  {x.type}
                                  </td>
                                  <td style={{ color: "white" }}>
                                  {x.amount}
                                  </td>
                                </tr>
                              </>
                            ))
                          }
                        </table>

                      </fieldset>
                    </div>
                    <div className="px-4 py-3 bg-home text-center sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BartenderDetail;
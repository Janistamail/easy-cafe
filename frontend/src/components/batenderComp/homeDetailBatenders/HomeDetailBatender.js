import React from 'react';
import axios from "axios";
import { createSlice } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initHome } from "../orderSlice"
import { useLocation, useParams } from 'react-router-dom';
import NavbarHead from "../../layout/navbarHead";
import NavbarFooter from '../../layout/navbarFooter';


const HomeDetailBatender = () => {

    const [orderstatus, setOrderstatus] = useState();

    const state = useSelector((state) => state.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        const initOrderFunc = async () => {
            let result = await axios.get(`/bartenders/home`);
            // console.log(result.data);
            if (result.status === 200) {
                dispatch(initHome(result.data));
                // console.log("ttttetete", result.data);
            }
            // console.log("go");
        };
        initOrderFunc();
    }, []);


    const columns = [
        {
          title: 'Item',
          dataIndex: 'id_order',
          key: 'id_order',
        }, 
        {
            title: 'List',
            dataIndex: 'product_name',
            key: 'product_name',
          }, 
          {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
          }, 
          {
            title: 'Quantity',
            dataIndex: 'amount',
            key: 'amount',
          }, 
        ]


    return (<div>
        <NavbarHead/> 
        <div className="pt-32 pb-16 rounded-md">
            {console.log(state.order)}
            {state.order &&
                state.order.map((x, index) => (
                    <div className="mt-2 sm:mt-5">
                        <div className="md:grid md:grid-cols-1 md:gap-10">
                            <div className="mt-2 md:mt-0 md:col-span-2 px-2 ">

                                <form action="/" method="POST" >
                                    <div className="shadow overflow-hidden rounded-xl">
                                        <div className="px-4 py-3 bg-home space-y-2 sm:p-6 overflow-x-auto">

                                            <fieldset>
                                                <legend className="contents text-xl font-large text-white uppercase content-evenly" >
                                                <h5>Order No. {x.id_order}</h5>                                                                                                

                                                    <table>
                                                        <tr>
                                                            <td className='px-2.5 pt-6'>
                                                                <p className='text-base'>Item</p>
                                                            </td>
                                                            <td className='px-2.5 pt-6'>
                                                                <p className='text-base'>List</p>
                                                            </td>
                                                            <td className='px-2.5 pt-6'>
                                                                <p className='text-base'>Type</p>
                                                            </td>
                                                            <td className='px-2.5 pt-6'>
                                                                <p className='text-base'>Quantity</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className='px-2.5'>
                                                            <p className='text-base'>1</p>
                                                            </td>
                                                            <td className='px-2.5'>
                                                            <p className='text-base'>{x.product_name}</p>
                                                            </td>
                                                            <td className='px-2.5'>
                                                            <p className='text-base'>{x.type}</p>
                                                            </td>
                                                            <td className='px-2.5'>
                                                            <p className='text-base'>{x.amount}</p>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                </legend>
                                            </fieldset>
                                            
                                        </div>
                                        <div className="px-2 py-3 bg-home text-center sm:px-6">
                                            <table>
                                                <tr>
                                                    <td className='px-2.5'>
                                                        <button
                                                            type="submit"
                                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            onClick={{}}
                                                        >
                                                            Take Order
                                                        </button>
                                                    </td>
                                                    <td className='px-2.5'>
                                                        <button
                                                            type="submit"
                                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            onClick={{}}
                                                        >
                                                            Doing
                                                        </button>
                                                    </td>
                                                    <td className='px-2.5'>
                                                        <button
                                                            type="submit"
                                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            onClick={{}}
                                                        >
                                                            Finish
                                                        </button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        <NavbarFooter/>
        </div>

    )
}

export default HomeDetailBatender
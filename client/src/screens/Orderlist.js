
import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import{getAllOrders} from '../actions/orderActions';
import Loading from "../components/Loading";



function Orderlist (){
    const dispatch = useDispatch()
    const getordersstate = useSelector(state=>state.getAllOrdersReducer);
    const {loading, orders} = getordersstate
    console.log(orders)
    

    useEffect(()=>{
        dispatch(getAllOrders())
    }, [])

    return(
        <div>
            {/* {loading && (<Loading/>)} */}
            <table className=" table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Date</th>
                        {/* <th>Status</th> */}
                    </tr>
                </thead>
                <tbody>
                {orders.map((order)=>(
                    
                   <tr>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.userid} </td>
                        <td>{order.createdAt.substring(0, 10)} </td>
                      
                    </tr>

                )

                )}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Orderlist
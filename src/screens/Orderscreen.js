import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Loading from "../components/Loading";
function Orderscreen(){
    const dispatch = useDispatch()
    const orderstate = useSelector(state=>state.getUserOrdersReducer)
    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems.cartItems
    const {orders, loading} = orderstate

    useEffect(()=>{
        dispatch(getUserOrders())
    }, [])

        return(
            <div>
                <h2 style={{fontSize:"30px"}}>My Orders</h2>
                <div className='row'>
                    {loading && (<Loading/>)}
                  {/* {orders && orders.map((order)=>{

                  })} */}
                </div>
            </div>
        )
}

export default Orderscreen
    
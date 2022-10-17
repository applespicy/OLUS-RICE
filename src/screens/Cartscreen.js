import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Checkout from '../components/Checkout'
import{addToCart} from "../actions/cartAction"
import {deleteFromCart} from "../actions/cartAction"

 function Cartscreen(){
    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems.cartItems
    var Subtotal=cartItems.reduce((x, item)=> x+item.price, 0)
   
     const dispatch = useDispatch()
   
    return (
        <div>
           <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <h2 style={{fontsize:'40px'}}>My Cart</h2>
                   {cartItems.map((item)=>(
                        <div className='flex-container'>
                        <div className='text-left m-1 w-100'>
                           <h6>{item.name}</h6>
                           <h6 >Price : {item.quantity} * {item.prices[0][item.size]} = {item.price}</h6>
                           <h6 style={{display:'inline'}}>Quantity : </h6>
                           <i className="fa-solid fa-plus" onClick={()=>{dispatch(addToCart( item.quantity+1, item.size))}}></i>
                           <b>{item.quantity}</b>
                           <i className="fa-solid fa-minus"></i>
                           <hr/>
                        </div>
                        <div className='m-1 w-100'>
                        <img src={item.image} style={{height:'90px' , height:'90px'}}/> 
                        </div>
                        <div className='m-1 w-100'>
                        <i className="fa-solid fa-trash mt-5" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                        </div>
    
    
                        </div>
                   ))}
                    
                </div>
                <div className='col-md-4 text-right'>
                   <h2 style={{fontSize:'30px'}}>SubTotal : {Subtotal} </h2>
                 <Checkout subtotal={Subtotal}/>
                </div>
           </div>
        </div>
    )
}

export default Cartscreen 
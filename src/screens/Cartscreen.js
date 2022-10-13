import React from "react";
import {useSelector, useDispatch} from "react-redux"
// import {addToCart} from '../actions/cartAction'

function Cartscreen(){
const cartstate = useSelector(state=>state.cartReducer)
const cartItems= cartstate.cartItems

    return(
        <div>
          <div className="row justify-content-center">
            <div className="col-md-d">
            <h2 style={{fontSize:'30px'}}>MY CART</h2>

                 {cartItems.map(item=>{
                    return
                        <div className="flex-container">
                    <div>
                    <h1>{item.name} </h1>
                    <h1>Price: {item.quantity}*{item.size}={cartItems.price}</h1>
                     </div>
                    <div>

                    </div>
                    <div>

                    </div>
             </div>
                    
                    
            })}
               
            </div>
            <div className="col-md-4">

            </div>
          </div>
        </div>
    )
}

export default Cartscreen 
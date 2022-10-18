import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import {placeOrder} from '../actions/orderActions'
import Success from '../components/Success'
import Loading from './Loading'

function Checkout({subtotal}){
    const orderstate = useSelector((state)=>state.placeOrderReducer)
    const {loading, success}= orderstate
    const dispatch= useDispatch()
    function tokenHander(token){
    
    console.log(token);
    dispatch(placeOrder(token, subtotal))
}

    return(
        <div>
{loading && (<Loading/>)}
{success && (<Success success='Your order placed was successfull'/>)}

            <StripeCheckout 
            amount={subtotal}
            shippingAddress
            token={tokenHander}
            // token={this.onToken}
            stripeKey='pk_test_51LsYMyApBjKdj43fBO12rYPxHPH1UnjZJlyrBsp6wWHlOwynJkTeWJtRxzEG5BcM5KthXxAxajykd5IwQaj8ok1y00dW6Ec5kM' 
            currency= 'usd' 

            
            >
                
            <button className='btn'>Pay Now </button>
            </StripeCheckout>
        </div>
    )
}
export default Checkout
export const addToCart=(rice, quantity, size  )=>(dispatch, getState)=>{

let cartItem ={
    name: rice.name,
    _id : rice._id,
    image: rice.image,
    size:  size,
    size: rice.size,
    quantity:quantity,
    prices: rice.prices,
    price: rice.prices[0][size]*quantity 
}

dispatch({type:'ADD_TO_CART', payload: cartItem})

const cartItems = getState().cartReducer
localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

export const deleteFromCart =(rice)=>dispatch=>{
    dispatch({type:'DELETE_FROM_CART', payload:rice})
}


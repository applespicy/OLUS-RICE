export const addToCart=(rice, quantity, size )=>dispatch=>{

var cartItem ={
    name: rice.name,
    _id : rice._id,
    image: rice.image,
    size: size,
    quantity: quantity,
    prices: rice.prices ,
    price: rice.prices[0][size]*quantity
}

dispatch({type:'ADD_TO_CART', payload: cartItem})

}

// export const cartReducer = (state={}, action)=>{
    
//     swtich (action.type)
//     {
//         case 'ADD_TO_CART': return {
//             ...state,
//             cartItems:[...state.cartItems, action.payload]
//         }
//     }
// }

export const cartReducer = (state={cartItem:[]},action)=>{
    
    switch(action.type){
        case 'ADD_TO_CART' : return{

            ...state,
            cartItem:[...state.cartItem, action.payload]
        }
        default : return state
    }
    
}
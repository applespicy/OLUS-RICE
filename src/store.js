import {combineReducers} from 'redux'

import {createStore,  applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllRicesReducer } from './reducers/riceReducers'
import {cartReducer} from './reducers/cartReducer'
import { loginUserReducer, registerUserReducer } from './reducers/userReducer'

const finalReducer = combineReducers({
    getAllRicesReducer : getAllRicesReducer,
    cartReducer :cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer
})

const currentUser= localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')):null



const cartItems = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem('cartItem')) : []

const initialState = {
    
    loginUserReducer:{
        currentUser:currentUser
    },
    cartReducer:{
        cartItems: cartItems
    },

    
}

const composeEnhancers = composeWithDevTools({})


const store = createStore(finalReducer, initialState , composeEnhancers(applyMiddleware(thunk)))




export default store
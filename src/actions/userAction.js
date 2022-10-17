import axios from "axios"

export const registerUser =(user)=>async dispatch=>{
    dispatch({type: 'USER_REGISTER_REQUEST'})

    try {
        const response = await axios.post('/api/register', user )
        console.log(response);
        dispatch({type: 'USER_REGISTER_SUCCESS'})
    } catch (error) {
        dispatch({type: 'USER_REGISTER_FAILED', payload:error})
        
    }

}


export const loginUser =(user)=>async dispatch=>{
    dispatch({type: 'USER_LOGIN_REQUEST'})

    try {
        const response = await axios.post('/api/login', user )
        console.log(response);
        dispatch({type: 'USER_LOGIN_SUCCESS', payload:response.data})
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href='/'
    } catch (error) {
        dispatch({type: 'USER_LOGIN_FAILED', payload:error})
        
    }

}

export const logoutUser = ()=>dispatch=>{
        localStorage.removeItem('currentUser')
        window.location.href='/login'
}


export const getUserOrders=()=>async (dispatch, getState) =>{

    const currentUser= getState().loginUserReducer.currentUser
    dispatch({type: 'GET_USER_ORDER_REQUEST'})
    try{
        const response = await axios.get("/api/getuserorders",{userid: currentUser._id} )
        console.log(response);
        dispatch({
            type: 'GET_USER_ORDER_SUCCESS', payload : response.data
        })
    }catch (error){
        dispatch({
            type: 'GET_USER_ORDER_FAILED', payload : error
        })
    }

}
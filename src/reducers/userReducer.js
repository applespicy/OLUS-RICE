export const registerUserReducer = (state={}, action)=>{

    switch(action.type){
        case 'USER_REGISTER_REQUEST': return{
           
            loading:true
        }
        case 'USER_REGISTER_SUCCESS': return{
            
            loading:false,
            success:true
        }
        case 'USER_REGISTER_FAILED': return{
          
            loading:false,
            error:action.payload
        }
        default : return state
    }
}

export const loginUserReducer = (state={}, action)=>{

    switch(action.type){
        case 'USER_LOGIN_REQUEST': return{
           
            loading:true
        }
        case 'USER_LOGIN_SUCCESS': return{
            
            loading:false,
            success:true,
            currentUser : action.payload
        }
        case 'USER_LOGIN_FAILED': return{
          
            loading:false,
            error:action.payload
        }
        default : return state
    }
}

export const getUserOrdersReducer = (state={orders:[]},action)=>{
    switch(action.type){
        case 'GET_USER_ORDER_REQUEST' : return{
            loading : true,
            ...state
        }

        case 'GET_USER_ORDER_SUCCESS' : return{
            loading:false,
            orders : action.payload
        }
        case 'GET_USER_ORDER_FAILED' : return{
            loading: false,
            error : action.payload
        }
        default : return state
    }
}
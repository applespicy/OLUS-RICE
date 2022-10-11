export const getAllRicesReducer = (state={rices:[]},action)=>{
    switch(action.type){
        case 'GET_RICES_REQUEST' : return{
            loading : true,
            ...state
        }

        case 'GET_RICES_SUCCESS' : return{
            loading:false,
            rices : action.payload
        }
        case 'GET_RICES_FAILED' : return{
            loading: false,
            error : action.payload
        }
        default : return state
    }
}
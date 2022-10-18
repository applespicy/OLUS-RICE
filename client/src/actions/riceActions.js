import axios from "axios";

export const getAllRices=()=>async dispatch =>{
    dispatch({type: 'GET_RICES_REQUEST'})
    try{
        const response = await axios.get("http://localhost:5000/getrices")
        console.log(response);
        dispatch({
            type: 'GET_RICES_SUCCESS', payload : response.data
        })
    }catch (error){
        dispatch({
            type: 'GET_RICES_FAILED', payload : error
        })
    }

}

export const addRice=(rice)=>async dispatch=>{
    dispatch({type:'ADD_RICE_REQUEST'})
    try {
        const response= await axios.post('/api/addrice' , {rice})
        console.log(response);
        dispatch({type:'ADD_RICE_SUCCESS'})
    } catch (error) {
        dispatch({type:'ADD_RICE_FAILED' , payload : error})
    }
}
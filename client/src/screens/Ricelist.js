import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import Loading from "../components/Loading";
import Error from "../components/Error"
import {getAllRices} from '../actions/riceActions'
// import rices from '../ricedata'

function Ricelist (){
    const dispatch = useDispatch()
        const ricesstate = useSelector(state=>state.getAllRicesReducer)
        const {rices, error, loading } = ricesstate

        useEffect(()=>{
            dispatch(getAllRices())
        }, [])

    return(
        <div>
            <h2>
                Ricelist
            </h2>
            {loading && (<Loading/>)}
            <table className="table">
                <thead  className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                { rices.map((rice)=>(
                    <tr>
                        <td>{rice.name}</td>
                        <td>
                            Small : {rice.prices[0]['small']} <br/>
                            Meduim : {rice.prices[0]['meduim']} <br/>   
                            Large : {rice.prices[0]['large']}
                        </td>
                        <td>
                            <i className="fa fa-trash m-1"></i>
                            <i className="fa fa-edit m-1"></i>
                        </td>
                    </tr>

                )

                )}</tbody>
            </table>
        </div>
    )
}

export default Ricelist
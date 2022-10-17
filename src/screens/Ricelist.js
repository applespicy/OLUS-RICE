import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import Loading from "../components/Loading";
import Error from "../components/Error"
import {getAllRices} from '../actions/riceActions'

function Ricelist (){
    const dispatch = useDispatch()
        const ricesstate = useSelector(state=>state.getAllRicesReducer)
        const {rice, error, loading } = ricesstate

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
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {rice && rice.map((rice)=>(
                    <tr>
                        <td>{rice.name}</td>
                        <td>Prices</td>
                        <td></td>
                    </tr>

                )

                )}
            </table>
        </div>
    )
}

export default Ricelist
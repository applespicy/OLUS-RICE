import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import rices from '../ricedata'
import Rice from '../components/Rice'
import {getAllRices} from "../actions/riceActions"
import Loading from "../components/Loading";
import Error from "../components/Error"


function Homescreen (){
    const dispatch = useDispatch()
        const ricesstate = useSelector(state=>state.getAllRicesReducer)
        const {rice, error, loading } = ricesstate

    useEffect(()=>{
        dispatch(getAllRices())
    }, [])

    return (
        <div>
            <div className="row">

                {loading ? (<Loading/>): error ? (<Error error = 'Wrong Wrong Wrong'/>): (
                        rices.map(rice=>{
                            return <div className="col-md-4 " >
                                <div >
                                    <Rice rice ={rice}/>
                                </div>
                            </div>
                        })


                )}

                
            </div>
        </div>
    )
}

export default Homescreen
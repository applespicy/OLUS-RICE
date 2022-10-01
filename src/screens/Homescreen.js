import React from "react";
import rice from '../ricedata'
import Rice from '../components/Rice'

function Homescreen (){
    return (
        <div>
            <div className="row">
                {rice.map(rice=>{
                    return <div className="col-md-4 ">
                        <div >
                            <Rice rice ={rice}/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Homescreen
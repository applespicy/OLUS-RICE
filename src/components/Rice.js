import React, {useState} from "react";

function Rice({rice}){
    const [quantity, setquantity] = useState(1)
    const[size, setsize]= useState('small')
    return (
        <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded">
            <hi>{rice.name}</hi>
            <img src={rice.image} className="img-fluid" alt =""/>
            <div className="flex-container">
                 <div className="w-100 m-1">
                    <p>Sizes</p>
                    <select className ='form-control'value ={size} onChange={(e)=>{setsize(e.target.value)}}>
                        {rice.sizes.map(size=>{
                            return <option value={size}>{size}</option>
                        })}
                    </select>
                 </div> 
                
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className ='form-control'value ={quantity} onChange ={(e)=>{setquantity(e.target.value)}}>
                        {[...Array(10).keys()].map((x, i)=>{
                            return ( <option value={i+1}>{i+1}</option>)
                           
                        })}
                    </select>
                </div>
             </div>

                <div className="flex-container">
                    
                    <div className="m-1 w-100">
                        <hi className = 'mt-1'>Price: ${rice.prices[0][size]* quantity} </hi>
                    </div>
                    <div className="m-1 w-100">
                        <button className="btn">ADD TO CART</button>
                    </div>
                </div>
        </div>
    )
}

export default Rice
import React, {useState} from "react";
import {Modal} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import {addToCart} from "../actions/cartAction"

function Rice({rice}){
    const [quantity, setquantity] = useState(1)
    const[size, setsize]= useState('small')
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()

  function addtocart()
  {
        dispatch(addToCart(rice, quantity,size))
  }

    return (
        <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded">
            
            <div onClick={handleShow}>
            <h1>{rice.name}</h1>
            <img src={rice.image} className="img-fluid" alt =""/>
            </div>
            
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
                        <h1 className = 'mt-1'>Price: ${rice.prices[0][size]* quantity} </h1>
                    </div>
                    <div className="m-1 w-100">
                        <button className="btn" onClick={addtocart}>ADD TO CART</button>
                    </div>
                </div>

                <Modal show ={show}>
      <Modal.Header closeButton>
        <Modal.Title>{rice.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img src={rice.image} className="img-fluid"/>
        <p>{rice.Description}</p>
      </Modal.Body>

      <Modal.Footer>
      <button className="btn" onClick={handleClose}>CLOSE</button>
      </Modal.Footer>
    </Modal>

        </div>
    )
}

export default Rice
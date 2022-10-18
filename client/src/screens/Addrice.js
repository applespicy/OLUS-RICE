import React, { useState } from 'react'
import { addRice } from '../actions/riceActions'
import {useDispatch, useSelector} from 'react-redux'

function Addrice (){

    const [name, setname] = useState('')
    const [smallprice, setsmallprice]= useState()
    const [meduimprice, setmeduimprice]= useState()
    const [largeprice, setlargeprice]= useState()
    const[image, setimage]=useState('')
    const [description, setdescription]=useState('')
    const dispatch = useDispatch()

    function formHandler(e){
            e.preventDefault();
    
    const rice = {
        name,image, description,prices:{
            small:smallprice,
            meduim:meduimprice,
            large:largeprice
        }
    }
            console.log(rice);
            dispatch(addRice(rice));

    }
    return(

        <div className='text-left'>
            <h2>Add Rice</h2>
            <form onSubmit={formHandler}>
                <input className = 'form-control'type='text'placeholder='name' value={name} onChange={(e)=>{setname(e.target.value);}} />
                <input className = 'form-control'type='text'placeholder='small size price' value={smallprice} onChange={(e)=>{setsmallprice(e.target.value);}} />
                <input className = 'form-control'type='text'placeholder='meduim size price' value={meduimprice} onChange={(e)=>{setmeduimprice(e.target.value);}} />
                <input className = 'form-control'type='text'placeholder='large size price' value={largeprice} onChange={(e)=>{setlargeprice(e.target.value);}} />
                <input className = 'form-control'type='text'placeholder='description' value={description} onChange={(e)=>{setdescription(e.target.value);}} />
                <input className = 'form-control'type='text'placeholder='image url' value={image} onChange={(e)=>{setimage(e.target.value);}} />
                <button className='btn m-3'>Add Rice</button>
            </form>
                
        </div>
    )
}

export default Addrice
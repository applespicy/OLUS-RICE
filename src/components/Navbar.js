import React from 'react';
import {useSelector, useDispatch    } from 'react-redux'
import {logoutUser} from '../actions/userAction'



function Navbar() {
    const cartstate = useSelector(state=>state.cartReducer)
    const userstate= useSelector(state=>state.loginUserReducer)
    const{currentUser}=userstate
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-light shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">OLU"S RICE SPECIALS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                    {currentUser ?(
                    <div className="dropdown mt-2">
                    <a className=" dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     {/* { currentUser.name} */}
                    </a>
                    <div >
                    
                      <a className="dropdown-item" href="/orders">Orders</a>
                      <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a>
                    </div>
                  </div>):(<li className="nav-item">
                            <a className="nav-link" href="/login">Login </a>
                        </li>)}
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart</a>
                        </li>
                       
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

// import { Router } from 'express';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {useSelector, useDispatch    } from 'react-redux'
import Userslist from './Userslist';
import Ricelist from './Ricelist';
import Addrice from './Addrice';
import Orderlist from './Orderlist';


function Adminscreen(){
    const userstate= useSelector(state=>state.loginUserReducer)
    const{currentUser}=userstate
    const dispatch = useDispatch()

    useEffect(()=>{
        if (!currentUser.isAdmin)
        {
            window.location.href='/'
        }


    }, [])

return (
    
    <div>
        <div className='row justify-content-center'>
            <div className='col-md-10'>
            <h2 style ={{fontSize:'35px'}}> Admin Panel</h2>
            <ul className='adminfunctions'>
            <li><a href='/admin/userslist'>Users List</a></li>
            <li><a href='/admin/ricelist'>Rice List</a></li>
            <li><a href='/admin/addnewrice'>Add New Rice</a></li>
            <li><a href='/admin/orderlist'>Orders List</a></li>
           
        </ul>

          
            <Router>
                <Switch>
                <Route exact path="/admin/userslist"><Userslist/></Route>
                <Route exact path="/admin/ricelist"><Ricelist/></Route>
                <Route exact path="/admin/addnewrice"><Addrice/></Route>
                <Route exact path="/admin/orderlist"><Orderlist/></Route>
                <Route path="/admin" ><Userslist/></Route>
                </Switch>
            </Router>
          

         

            </div>

        </div>
       
    </div>
)

}

export default Adminscreen 
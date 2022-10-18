import React, { useEffect, useState  } from "react";
import {useSelector, useDispatch} from 'react-redux'
import Loading from "../components/Loading";
import{ getAllUsers} from '../actions/userAction'

function Userslist (){
    const dispatch = useDispatch()
    const usersstate = useSelector(state=>state.getAllUsersReducer)
    const { loading , users} = usersstate
      useEffect(() => {
  
          dispatch(getAllUsers())
          
      }, [])

    return(
        <div>
            <h1>
                Userslist
            </h1>
            {loading && <Loading />}
    
       <table className='table table-striped table-bordered table-responsive-sm'>
           <thead className='thead-dark'>
         <tr>
             <th>User Id</th>
             <th>Name</th>
             <th>Email</th>
             <th>Delete</th>
         </tr>
           </thead>

           <tbody>
               {users.map(user=>{
                   return <tr>
                       <td>{user._id}</td>
                       <td>{user.name}</td>
                       <td>{user.email}</td>
                       <td><i className='fa fa-trash' ></i></td>
                   </tr>
               })}
           </tbody>

       </table>

        </div>
    )
}
        
    


export default Userslist
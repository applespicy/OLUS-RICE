// import React from 'react'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loginUser} from '../actions/userAction'
import Error from '../components/Error'
import Success from '../components/Success'


function Loginscreen() {
    
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const loginstate = useSelector(state=>state.loginUserReducer)
    const{error}=loginstate
    const disptach = useDispatch()

    useEffect(()=>{
        if (localStorage.getItem('currentUser')){
            window.location.href='/'
        }

    }, [])
        
    
    function login() {
        const user={email, password}
        disptach(loginUser(user))
    }
    return (
        <div>
            <div>
                <div className='row justify-content-center mt-5'>
                    <div className='col-md-5 mt-5 text-left shadow p-3 mb-5 bg-white rounded Regular shadow</div>'>
                        <h1 className='text-center m-2'>LOGIN</h1>
                       
                       {error && (<Error error="Invalid credentials"/>)}
                        <div>
                            
                            <input required type="text" placeholder='email' className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} />
                            <input required type="text" placeholder='password' className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                            
                            <button onClick={login} className='btn mt-3 mb-3'>LOGIN</button>
                            <br/>
                            <a href ="./register">Click here to register</a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )


}

export default Loginscreen
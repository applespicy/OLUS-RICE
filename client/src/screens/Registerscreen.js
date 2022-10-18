import React, {useState, useEffect} from 'react'
import {registerUser} from "../actions/userAction"
import {useDispatch, useSelector} from 'react-redux'
import Success from '../components/Success'
import Error from '../components/Error'



function Registerscreen (){
    
    const [name, setname]=useState('')
    const[email, setemail]=useState('')
    const[password, setpassword]=useState('')
    const registerstate = useSelector(state=>state.registerUserReducer)
    const{error, success}= registerstate
    const [cpassword, setcpassword]=useState('')
    const disptach = useDispatch()

    function register(){
        if (password!==cpassword){
            alert('wrong password')
        }else{
            const user ={
                name,
                email,
                password
            }
            console.log(user);
            disptach(registerUser(user))
        }
    }

    return(
            <div>
                <div className='row justify-content-center mt-5 '>
                    <div className='col-md-5 mt-5 text-left shadow p-3 mb-5 bg-white rounded Regular shadow'>
                    {/* {loading && (<Loading/>)} */}
                    {success && (<Success success='Registration was successful, click on the log in link below' />)}
                    {error && (<Error error='Error message' />)}
                    <h1 className='text-center m-2'>REGISTER</h1>
                        <div>
                            <input required type ="text" placeholder='name' className='form-control' value={name} onChange={(e)=>{setname(e.target.value)}}/>
                            <input required type ="text" placeholder='email' className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                            <input required type ="text" placeholder='password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                            <input required type ="text" placeholder='confrim password' className='form-control' value ={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>
                            <button onClick={register}className='btn mt-3 mb-3'>REGISTER</button>
                            <br/>
                            <a href = "/login">Click here to log in </a>
                        </div>

                    </div>

                </div>
            </div>
    )
     
    
}

export default Registerscreen
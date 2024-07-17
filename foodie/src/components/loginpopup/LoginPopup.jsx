import React, { useState } from 'react'
import '../loginpopup/login.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
   const [currState,setCurrStaet]=useState("Sign Up")
  return (
    <div className='login-popup'>
       <form action="" className="login-pop-container">

        <div className="login-pop-title">
            <h2>{currState}</h2>
              <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
        </div>
        <div className="login-popup-inputs">
{currState=="Login"?<></>: <input
               type='text'
               placeholder='Your name'
               required      
            />}
           
             <input
               type='email'
               placeholder='Your email'
               required      
            />
<              input
               type='password'
               placeholder='Password'
               required      
            />
        </div>
        <button>{currState==="Sign up"?"Creat account":"login"}</button>
        <div className="login-popup-condition">
        <input
               type='checkbox'
               placeholder='Password'
               required      
            />
            <p>By continuing i agree to the terms of use and privacy policy</p>
        </div>
        {currState==="Login"?
        <p>Create a new account ? <span>Click here</span></p>:
        <p>Already have an account <span>Login here</span></p>
    }         
       </form>


    </div>
  )
}

export default LoginPopup
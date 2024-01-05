import React from 'react'
import "./Login.css"
import { useState } from 'react'

function LoginSignup() {
  const[action, setaction] = useState('SignUp');
  return (
    <div>
      <div className='container'>
        <div className='header'>
          <div className='heading'>{action}</div>
          <div className='underline'></div>
        </div>
      <div className='inputs'>
        {action==='Login'?<div></div>:<div className='input'>
          <span className='texts'>Name</span>
          <input type='text' required placeholder='name'/>
        </div>}
        
        <div className='input'>
          <span className='texts'>E-mail</span>
          <input type='email' required placeholder='e-mail'/>
        </div>
        <div className='input'>
          <span className='texts'>Password</span>
          <input type='password' required placeholder='password'/>
        </div>
      </div>
      {action === 'SignUp'?<div></div>:<div className="forgot">forgot ? <span>password</span></div>}
      
      <div className='container2'>
        <button className={action==='Login'?'btn gray':'btn'} onClick={()=>{setaction("SignUp")}}>SignUp</button>
        <button className={action==='SignUp'?'btn gray':'btn'} id='log' onClick={()=>{setaction("Login")}}>Login</button>
      </div>
    </div>
    </div>
  )
}

export default LoginSignup



import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import "./Login.css"

function Login() {

  const [signIn, setSignIn] = useState("Sign In")

  return (
    <div className='login'>
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
      <h1>{ signIn === "Sign Up"?"Sign-Up":"Sign-In"}</h1>
      <form action="">
        { signIn === "Sign Up"&&
          <input type="text" placeholder='Your Name'/>
        }
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <button>Sign In</button>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
        </div>
      </form>
      <div className="form-switch">
        { signIn === "Sign Up"?
          <p>New to Netflix <span onClick={()=>{setSignIn("Sign In")}}>sign-Up now</span> </p>
          : <p>Already have an account? <span onClick={()=>{setSignIn("Sign Up")}}>Sign-In now</span> </p>
        }
      </div>
      </div>
    </div>
  )
}

export default Login
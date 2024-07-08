import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import "./Login.css"
import {signUp, login} from "../../firebase"

function Login() {

  const [signInState, setSignInState] = useState("Sign In")

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const user_auth = async (event) => {
    event.preventDefault()
      if (signInState==="Sign In"){
        await login(email, password)
      }else{
        await signUp(name, email, password)
      }
  }

  return (
    <div className='login'>
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
      <h1>{ signInState === "Sign Up"?"Sign-Up":"Sign-In"}</h1>
      <form action="">
        { signInState === "Sign Up"&&
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name'/>
        }
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email'/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password'/>
        <button onClick={user_auth} type='submit'>Sign In</button>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
        </div>
      </form>
      <div className="form-switch">
        { signInState === "Sign Up"?
          <p>New to Netflix <span onClick={()=>{setSignInState("Sign In")}}>sign-Up now</span> </p>
          : <p>Already have an account? <span onClick={()=>{setSignInState("Sign Up")}}>Sign-In now</span> </p>
        }
      </div>
      </div>
    </div>
  )
}

export default Login
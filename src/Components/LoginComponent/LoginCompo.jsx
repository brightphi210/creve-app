import React from 'react'
import './LoginCompo.scss'

import logo from './images/craves.png'
import videoFile from './images/dribbble.mp4'

import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const LoginCompo = () => {
  return (
    <div className=''>
        <div className='loginSection'>

          <div className='loginInputDiv'>
              <div>
                <img src={logo} alt="" width={80} />
                <p className=''><FaArrowLeft /> Go back home</p>
                <h2>Welcome Back</h2>
                <div>
                  <div className='inputDiv'>
                    <p>Email Address</p>
                    <input type="text" placeholder='Enter your email address' />
                  </div>

                  <div className='inputDiv'>
                    <p>Email Address</p>
                    <input type="text" placeholder='Enter your email address' />
                    <p>Forgot Password</p>
                  </div>

                  <button className='loginBtn'>Login</button>

                  <div className='hrDiv'>
                    <hr /> <p>or</p> <hr />
                  </div>

                  <div className='googleDiv'>
                    <button>Login with Google</button>
                    <p className='dontFlex'>Don’t have an account? <p className='dontpFlex'>Create New Account</p></p>
                  </div>
                </div>
              </div>
          </div>


          <div className='videoDiv'>
            <video src={videoFile} 
              autoPlay 
              controls={false} 
              muted loop
              preload="auto">
              
            </video>
          </div>
        </div>
    </div>
  )
}

export default LoginCompo
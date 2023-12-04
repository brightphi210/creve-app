import React from 'react'
import './LoginCompo.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import videoFile from './images/dribbble.mp4'

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { IoLogoGoogle } from "react-icons/io";




const LoginCompo = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=''>
        <div className='loginSection'>

          <div className='loginInputDiv'>
              <div>
                {/* <img src={logo} alt="" width={80} /> */}
                <Link to={'/'}><IoIosArrowDropleftCircle className='arrow'/></Link>
                
                <h2>Welcome Back</h2>
                <div>
                  <div className='inputDiv'>
                    <p>Email Address</p>
                    <input type="text" placeholder='Enter your email address' />
                  </div>

                  <div className='inputDiv'>
                    <p>Password</p>

                    <input 
                      type={showPassword ? 'text' : 'password'} 
                      placeholder='Enter Password' 
                    />
                    <div onClick={togglePasswordVisibility}>{showPassword ? <MdRemoveRedEye className='eye'/> : <IoMdEyeOff className='eye'/>}</div>
                  </div>

                  <p className='forget'>Forgot Password</p>
                  <button className='loginBtn'>Login</button>

                  <div className='hrDiv'>
                    <hr /> <p>or</p> <hr />
                  </div>

                  <div className='googleDiv'>
                    <button><IoLogoGoogle />Login with Google</button>
                    <p className='dontFlex'>Don’t have an account? <p className='dontpFlex'><Link to={'/signup'}>Create New Account</Link></p></p>
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
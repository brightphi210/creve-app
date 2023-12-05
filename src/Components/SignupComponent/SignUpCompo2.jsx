import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import videoFile2 from './images/integrations.mp4'

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { IoLogoGoogle } from "react-icons/io";



const SignUpCompo2 = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
    <div>
        <div className=''>
            <div className='loginSection'>

            <div className='loginInputDiv'>
                <div>
                <Link to={'/registerOption'}><IoIosArrowDropleftCircle className='arrow'/></Link>
                    <h2>Sign up for an account</h2>
                    <div>
                    <div className='inputDiv'>
                        <p>Full Name</p>
                        <input type="text" placeholder='Enter your Full name' />
                    </div>


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
                    <button className='loginBtn'>Join as Creative</button>

                    <div className='hrDiv'>
                        <hr /> <p>or</p> <hr />
                    </div>

                    <div className='googleDiv'>
                        <button><IoLogoGoogle />Signup with Google</button>
                        <p className='dontFlex'>Already have an account? <p className='dontpFlex'><Link to={'/login'}>Login to account</Link></p></p>
                    </div>
                    </div>
                </div>
            </div>


            <div className='videoDiv'>
                <video src={videoFile2} 
                autoPlay 
                controls={false} 
                muted loop
                preload="auto">
                
                </video>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpCompo2
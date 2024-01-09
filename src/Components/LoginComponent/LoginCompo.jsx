import React from 'react'
import './LoginCompo.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import videoFile from './images/dribbble.mp4'

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { IoLogoGoogle } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";




const LoginCompo = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const closeMessage = () => {
    setEmailError(false)
  } 


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const logUrl = 'https://creve.onrender.com/api/token/'

  const handleLogin = async (e) =>{
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(logUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email,
              password,
          }),
      });

      if (response.ok ) {
          const data = await response.json();
          localStorage.setItem('authToken', data.access);
          setIsLoading(false)
          console.log('Details Are Found')
          // navigate('/dashboard', { myMessage: 'Successfully logged in!' });
          
      }

      else if(response.status === 401){
        setEmailError('No account found with the given credentials')
        setIsLoading(false)
      }else {
          console.log('This Error occured while logging in');
          setIsLoading(false);
      }
      
    } catch (error) {
        console.log('Error logging')
        setIsLoading(false); 

    }
  }


  return (
    <div className=''>
        <div className='loginSection'>

          <div className='loginInputDiv'>
              <div>
                {/* <img src={logo} alt="" width={80} /> */}
                <Link to={'/registerOption'}><IoIosArrowDropleftCircle className='arrow'/></Link>
                
                <h2>Welcome Back</h2>

                <>
              {emailError && (
                <div className='errorMessage'>
                  <p>{emailError} <AiOutlineClose onClick={closeMessage} className='closeMsgIcon'/></p>
                </div>
              )}
              </>

                <form action="" onSubmit={handleLogin}>
                  <div>
                    <div className='inputDiv'>
                      <p>Email Address</p>
                      <input type="text" 
                        placeholder='Enter your email address' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                      />
                    </div>

                    <div className='inputDiv'>
                      <p>Password</p>

                      <input 
                        type={showPassword ? 'text' : 'password'} 
                        placeholder='Enter Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
                      <p className='dontFlex'>Don’t have an account? <p className='dontpFlex'><Link to={'/registerOption'}>Create New Account</Link></p></p>
                    </div>
                  </div>
                </form>
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

        {isLoading ? 
      (<>
        <div className='loaderModal'>
          <span className="loader"></span>
        </div>
      </>) : ''}
    </div>
  )
}

export default LoginCompo
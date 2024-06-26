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

import { Navigate, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import apiEnpoint from '../api/api';
import logo from './images/Logo2.png'
import { BASE_URL } from '../api/api';




const LoginCompo = () => {

  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)



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

  const navigate = useNavigate()



  const logout = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    setUser(null)
    localStorage.removeItem('authToken')
    navigate('/', { state: { successMessage: 'Successfully logged Out !!' }})
  }


  let updateToken = async ()=> {

    let response = await fetch(`${BASE_URL}/api/token/refresh/`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'refresh':authTokens?.refresh})
    })

    let data = await response.json()
    
    if (response.status === 200){
        setAuthTokens(data)
        setUser(jwtDecode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
    }else{
      logout()
    }
}

  const handleLogin = async (e) =>{
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/token/`, {
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
          navigate('/dashboardMain');
          setIsLoading(false)
          setAuthTokens(data)
          setUser(jwtDecode(data.access))
          // localStorage.setItem('authToken', data.access);
          localStorage.setItem('authTokens', JSON.stringify(data))
          
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
                {/* <img src={logo} alt="" width={50} /> */}
                {/* <Link to={'/registerOption'}><IoIosArrowDropleftCircle className='arrow'/></Link> */}
                
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
                    <button className='loginBtn'>{ isLoading ? <span className="loader2" style={{
                      
                    }}></span> : 'Login'}</button>

                    <div className='createAccDiv'>
                      <p className=''>Don’t have an account? </p>
                      <p className='dontpFlex'>
                        <Link to={'/registerOption'}>Register</Link>
                      </p>
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

        {/* {isLoading ? 
      (<>
        <div className='loaderModal'>
          <span className="loader"></span>
        </div>
      </>) : ''} */}
    </div>
  )
}

export default LoginCompo
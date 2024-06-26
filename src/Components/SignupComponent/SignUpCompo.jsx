import React from 'react'
import apiEnpoint from '../api/api';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import logo from './images/Logo2.png'


import videoFile2 from './images/integrations.mp4'

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { IoLogoGoogle } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const SignUpCompo = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(false)
    const navigate = useNavigate()


    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const useUrl = `https://creve.onrender.com/auth/user/`
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
      fullname : '',
      email : '',
      password: '',
    })


    console.log('This is my URL', useUrl)

    const handleChange = (event) => {
      const { name, value, type, checked } = event.target;
      const newValue = type === 'checkbox' ? checked : value;
      setFormData({ ...formData, [name]: newValue });
    };


    useEffect(() => {
      const timer = setTimeout(() => {
        setEmailError(false);
      }, 5000); 
      return () => {
        clearTimeout(timer);
      };
    }, []);


    const closeMessage = () => {
      setEmailError(false)
    } 


    // ================ Login Function ========================
    const loginFunction = async (e) =>{

      setIsLoading(true);
      e.preventDefault();


      try {
        const response = await fetch(useUrl,{
          method : 'POST',
          headers :{
            'Content-Type': 'application/json',
          },
          body : JSON.stringify(formData)
        })

        const data = await response.json()
        if(response.status === 201 || response.ok){
          console.log('User Created Successfully !!!')
          setEmailError('Registration Successful ! !')
          setIsLoading(false)
          console.log(data)
          navigate('/confirm')
        }
        
        else if(response.status === 400){
          setEmailError('Provide a valid email or password format !!!')
          setIsLoading(false)
          console.log(response)
        }
        else {
          console.log('User Registration Failed !!!')
        }

      } catch (error) {
        setEmailError(error)
        // console.log('This Catch Error occurred')
      }
    }




    // ================ Return JSX ========================
  return (
    <div className=''>
    <div className='loginSection'>

      <div className='loginInputDiv'>
          <div>
          <img src={logo} alt="" width={50} />
          {/* <Link to={'/registerOption'}><IoIosArrowDropleftCircle className='arrow'/></Link> */}
            <h2>Sign up for an account</h2>
              <>
              {emailError && (
                <div className='errorMessage'>
                  <p>{emailError} <AiOutlineClose onClick={closeMessage} className='closeMsgIcon'/></p>
                </div>
              )}
              </>

            <form action="" onSubmit={loginFunction}>
            <div>
              <div className='inputDiv'>
                <p>Full Name</p>
                <input type="text" 
                  placeholder='Enter your Full name' 
                  name='fullname'
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  />
              </div>


              <div className='inputDiv'>
                <p>Email Address</p>
                <input type="email" 
                placeholder='Enter your email address'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required 
                />
              </div>


              <div className='inputDiv'>
                <p>Password</p>

                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder='Enter Password' 
                  name='password'
                  value={formData.password}
                  onChange={handleChange} 
                  required
                />
                <div onClick={togglePasswordVisibility}>{showPassword ? <MdRemoveRedEye className='eye'/> : <IoMdEyeOff className='eye'/>}</div>
              </div>

              <p className='forget'>Forgot Password</p>
              <button className='loginBtn' type='submit'>{isLoading ? <span className="loader2"></span> : 'Join as User'}</button>

              <div className='createAccDiv'>
                <p className=''>Already have an account?</p>
                <p className='dontpFlex'>
                  <Link to={'/login'}>Login</Link>
                </p>
              </div>

              <div className='warining'>
                <p>Password: At least 8 characters, alphanumeric, upper & lower case</p>
              </div>
            </div>
            </form>
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

    {/* {isLoading ? 
      (<>
        <div className='loaderModal'>
          <span className="loader"></span>
        </div>
      </>) : ''} */}
    </div>
  )
}

export default SignUpCompo
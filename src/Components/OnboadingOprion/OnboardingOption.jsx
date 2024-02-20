import React from 'react'
import { Link } from 'react-router-dom';

import logo from './craves.png'
import './OnboardingOption.scss'
import logOption from './logOption.png'

import { FaArrowRightLong } from "react-icons/fa6";


const OnboardingOption = () => {
  return (
    <div className='optionSection'>
        <div className='optionGenDiv'>
            <div className='optioImageDiv newOp'><Link to={'/'}><img src={logo} alt="" width={70}/></Link></div>

            <div className='optionImageDiv'>
                <img src={logOption} alt="" />
            </div>


            <div>
                <div className='optioImageDiv'><Link to={'/'}><img src={logo} alt="" width={70}/></Link></div>
                <h2>Begin your journey with us. .</h2>
                <Link to={'/signup'}>
                <div className='optioDivs'>
                    <h3>Join As a Client <FaArrowRightLong /> </h3>
                    <p>Are you looking for talented professionals to bring your projects to life? Sign up as a <br /> client and explore a world of possibilities.</p>
                </div>
                </Link>

                <Link to={'/signupCreative'}>
                <div className='optioDivs'>
                    <h3>Join As a Talent <FaArrowRightLong /> </h3>
                    <p>Are you a skilled professional looking to showcase your expertise and connect with  <br /> clients around the world? Sign up as talent and let your skills shine.</p>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default OnboardingOption
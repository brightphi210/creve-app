import './SectionTwo.scss'

import React from 'react'
import web1 from './Images/web1.png'
import web2 from './Images/web2.png'
import {Link} from 'react-router-dom'

import { IoIosSend } from "react-icons/io";


const SectionTwo = () => {

  return (
    <div className='sectionTwo'>
        <h2>Why People Loves Creve</h2>
        <div>

            <div className='subSecTwo'>
                <div className='secImgDiv'>
                    <img src={web1} alt="" />
                </div>
                <div className='exploreDiv'>
                    <h3>Explore Diverse  Talents</h3>
                    <p>
                        Browse a wide range of talents offering services 
                        in digital skills, creative arts, and local expertise
                    </p>
                    {/* <Link to></Link> */}
                    <Link to={'dashboard'}><button>Explore Talent <IoIosSend /></button></Link>
                </div>
            </div>

            <div className='subSecTwo'>
                <div className='secImgDiv'>
                    <img src={web2} alt="" />
                </div>
                <div className='exploreDiv'>
                    <h3>Effortless Hiring</h3>
                    <p>
                        Hire with confidence using our easy-to-use platform. 
                        Find the perfect talent for your project or task
                    </p>
                    <Link to={'/dashboard'}><button>Explore Talent <IoIosSend /></button></Link>
                </div>
            </div>

            <div className='subSecTwo'>
                <div className='secImgDiv'>
                    <img src={web2} alt="" />
                </div>
                <div className='exploreDiv'>
                    <h3>Review and Rating System</h3>
                    <p>
                        Make informed decisions with our review and 
                        rating system. See what others say about each talent
                    </p>
                    <Link to={'/dashboard'}><button>Explore Talent <IoIosSend /></button></Link>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default SectionTwo
import React from 'react'
import './SectionFour.scss'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from 'react-router-dom'

import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

import ava1 from './Images/Avatars1.png'
import ava2 from './Images/Avatars2.png'
import ava3 from './Images/Avatars3.png'
import ava4 from './Images/Avatars.png'

import group from './Images/group.png'


const SectionFour = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1025 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },

        smallDesktop: {
            breakpoint: { max: 1023, min: 769 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
          },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };

  return (
    <div>
        <div className='testimonySection'>
            <h2>Thousands of people are getting <br /> their job done with Creve</h2>
            <Carousel 
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                
                removeArrowOnDeviceType={["mobile"]}
            >
                <div className='testimonyDiv'>
                    <BiSolidQuoteLeft className='qoute'/>
                    <p className='testimony'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>
                    
                    <div className='testProDiv'>
                        <div>
                            <img src={ava1} alt="" width={40}/>
                        </div>
                        <div>
                            <p>Jane Doe</p>
                            <div className='starDiv'>
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='testimonyDiv'>
                    <BiSolidQuoteLeft className='qoute'/>
                    <p className='testimony'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>
                    
                    <div className='testProDiv'>
                        <div>
                            <img src={ava2} alt="" width={40}/>
                        </div>
                        <div>
                            <p>Jane Doe</p>
                            <div className='starDiv'>
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                            </div>
                        </div>
                    </div>
                </div>



                <div className='testimonyDiv'>
                    <BiSolidQuoteLeft className='qoute'/>
                    <p className='testimony'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>
                    
                    <div className='testProDiv'>
                        <div>
                            <img src={ava3} alt="" width={40}/>
                        </div>
                        <div>
                            <p>Jane Doe</p>
                            <div className='starDiv'>
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='testimonyDiv'>
                    <BiSolidQuoteLeft className='qoute'/>
                    <p className='testimony'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>
                    
                    <div className='testProDiv'>
                        <div>
                            <img src={ava4} alt="" width={40}/>
                        </div>
                        <div>
                            <p>Jane Doe</p>
                            <div className='starDiv'>
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                            </div>
                        </div>
                    </div>
                </div>



            </Carousel>
        </div>

        <div className='hireDiv'>
            <div>
                <img src={group} alt="" />
            </div>

            <div className='hireText'>
                <h3>Hire Talented Professionals <br /> for any Task</h3>
                <p>Creve is your Go-To Platform for Both Digital and Local Services.</p>
                <Link to={'/dashboard'}><button>Find Talent</button></Link>
            </div>
        </div>
    </div>
  )
}

export default SectionFour
import React from 'react'
import './SectionFour.scss'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";

import ava1 from './Images/Avatars1.png'
import ava2 from './Images/Avatars2.png'
import ava3 from './Images/Avatars3.png'
import ava4 from './Images/Avatars.png'

const SectionFour = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
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
    <div className='testimonySection'>
        <h2>Thousands of people are getting <br /> their job done with Creve</h2>
        <Carousel 
            responsive={responsive}
            swipeable={false}
            draggable={true}
            showDots={false}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
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



        </Carousel>
    </div>
  )
}

export default SectionFour
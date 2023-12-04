import React from 'react'
import './SectionOne.scss'

import { RiSearch2Line } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";

import smallImg from './Images/back2.png'
import sev1 from './Images/sev1.png'
import sev2 from './Images/sev2.png'
import sev3 from './Images/sev3.png'
import sev4 from './Images/sev4.png'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const SectionOne = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
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
            <div className='sectionOne'>
        <div className='sectionSubDiv'>
            <h2>Discover the Best <br /> Talents Across Africa</h2>
            <p className='pOne'>
                We Provide the best talents on all fields. Whether it’s digital skilled or </p>
            <div className='searchDiv'>
                <RiSearch2Line className='searchIcon'/>
                <input type="text" placeholder='Search for any service...'/>
                <button>Search</button>
            </div>

            <div className='popularDiv'>
                <p className='Two'>Popular Service:</p>
                <button>Frontend Development</button>
                <button>UI/UX Design</button>
                <button>Shoe Making</button>
                <button>Fashion Design</button>
            </div>
        </div>

        <div className='smallImg'>
            <img src={smallImg} alt="" />
        </div>
    </div>


    <div className='caroselSection'>
        <h2>Explore Popular <br /> Categories</h2>
        <Carousel 
            responsive={responsive}
            swipeable={false}
            draggable={true}
            showDots={false}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
        >
            <div className='caroImageDiv'>
                <div className='overlayDiv'>
                    <img src={sev1} alt="" />
                    <div class="overlay"></div>
                </div>
                <p>Frontend Development</p>
            </div>

            <div className='caroImageDiv'>
                <div className='overlayDiv'>
                    <img src={sev2} alt="" />
                    <div class="overlay"></div>
                </div>
                <p>Graphic Design</p>
            </div>

            <div className='caroImageDiv'>
                <div className='overlayDiv'>
                    <img src={sev3} alt="" />
                    <div class="overlay"></div>
                </div>
                <p>Electrician</p>
            </div>

            <div className='caroImageDiv'>
                <div className='overlayDiv'>
                    <img src={sev4} alt="" />
                    <div class="overlay"></div>
                </div>
                <p>Fashion Design</p>
            </div>

        </Carousel>
        <button className='allBtn'>All Services <IoIosSend /></button>
    </div>
    </div>
  )
}

export default SectionOne
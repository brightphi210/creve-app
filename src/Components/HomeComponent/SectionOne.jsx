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

import { Link } from 'react-router-dom';


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
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    <div>
        <div className='sectionOne'>
            
            <div className='sectionSubDiv'>
                <h2 className='h2Show'>Discover best <br /> <span>talents</span> here . .</h2>

                <h2 className='h2Hide'>Discover best <span>talents</span> here . .</h2>

                <p className='pOne'>
                    Find the right talent/client to work with. .
                </p>
                <div className='searchDiv'>
                    <RiSearch2Line className='searchIcon'/>
                    <input type="text" required placeholder='Search for any service...'/>
                    <button>Search</button>
                </div>

                <div className='smallImg'>
                    <img src={smallImg} alt="" />
                </div>

                <div className='popularDiv'>
                    <p className='Two'>Popular Service:</p>
                    <div className='popularDiv2'>
                        <button>Web Dev</button>
                        <button>UI/UX Design</button>
                        <button>Fashion Design</button>
                        <button>Furniture</button>
                    </div>
                </div>
        
            </div>


        </div>


        <div className='caroselSection'>
            <h2>Popular Categories</h2>
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
                    <p>Frontend Dev</p>
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
            <Link to={'/category'}><button className='allBtn'>All Services <IoIosSend /></button></Link>
        </div>
    </div>
  )
}

export default SectionOne
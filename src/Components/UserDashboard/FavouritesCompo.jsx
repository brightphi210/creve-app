import React from 'react'
import { useState } from 'react'

import myImage from './images/talentImg.png'
import imageCard from './images/talentcardImg.png'
import avatar from './images/Avatars1.png'


import { MdOutlineVerified } from "react-icons/md";
import { PiMapPinLineFill } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const FavouritesCompo = () => {

    const [show, setShow] = useState(false)

    const openModal = () =>{
      setShow(true)
    }

    const closeModal =()=>{
      setShow(false)
    }


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
        <div className='findMainSection'>
            <div className='imageSectionCard'>
                <h2>Favorite Talent</h2>
                <p className='imageSectP'>All your favorite talents organized in one place</p>

                <div className='imagecard'>
                    <div className='cardDiv' onClick={openModal}>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='cardProfileDiv'>
                            <div className='cardProfileDiv2'>
                                <div className='cardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0 <IoIosStar /> </p>
                                    </div>
                                </div>

                                <div className='cardProBtn2'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS</h3>
                                <p>#20,000</p>
                            </div>
                        </div>
                    </div>


                    <div className='cardDiv' onClick={openModal}>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='cardProfileDiv'>
                            <div className='cardProfileDiv2'>
                                <div className='cardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0 <IoIosStar /></p>
                                    </div>
                                </div>

                                <div className='cardProBtn'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS</h3>
                                <p>#20,000</p>
                            </div>
                        </div>
                    </div>



                    <div className='cardDiv' onClick={openModal}>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='cardProfileDiv'>
                            <div className='cardProfileDiv2'>
                                <div className='cardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0 <IoIosStar /></p>
                                    </div>
                                </div>

                                <div className='cardProBtn2'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS</h3>
                                <p>#20,000</p>
                            </div>
                        </div>
                    </div>



                    <div className='cardDiv' onClick={openModal}>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='cardProfileDiv'>
                            <div className='cardProfileDiv2'>
                                <div className='cardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p className='proRating'>4.0 <IoIosStar /></p>
                                    </div>
                                </div>

                                <div className='cardProBtn'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS</h3>
                                <p>#20,000</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='imageSectionCard'>
                <h2>Explore Similar Talents as Your Favourites</h2>
                <div className='imagecardCarol'>
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

                    <div className='cardDiv cardDivCarol'>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='cardProfileDiv' onClick={openModal}>
                            <div className='cardProfileDiv2'>
                                <div className='cardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0 <IoIosStar /> </p>
                                    </div>
                                </div>

                                <div className='cardProBtn2'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS</h3>
                                <p>#20,000</p>
                            </div>
                        </div>
                    </div>

                    <div className='cardDiv cardDivCarol' onClick={openModal}>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='cardProfileDiv'>
                            <div className='cardProfileDiv2'>
                                <div className='cardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0 <IoIosStar /> </p>
                                    </div>
                                </div>

                                <div className='cardProBtn2'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS</h3>
                                <p>#20,000</p>
                            </div>
                        </div>
                    </div>


                    <div className='cardDiv cardDivCarol' onClick={openModal}>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='cardProfileDiv'>
                            <div className='cardProfileDiv2'>
                                <div className='cardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0 <IoIosStar /> </p>
                                    </div>
                                </div>

                                <div className='cardProBtn2'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS</h3>
                                <p>#20,000</p>
                            </div>
                        </div>
                    </div>


                    <div className='cardDiv cardDivCarol' onClick={openModal}>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='cardProfileDiv'>
                            <div className='cardProfileDiv2'>
                                <div className='cardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0 <IoIosStar /> </p>
                                    </div>
                                </div>

                                <div className='cardProBtn2'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS</h3>
                                <p>#20,000</p>
                            </div>
                        </div>
                    </div>

                    
                </Carousel>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FavouritesCompo
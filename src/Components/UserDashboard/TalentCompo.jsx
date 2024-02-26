// import React, { useEffect, useState } from 'react'
import './TalentCompo.scss'
import { Link } from 'react-router-dom'


import myImage from './images/img6.png'
import imageCard from './images/talentcardImg.png'
import avatar from './images/Avatars1.png'


import { MdOutlineVerified } from "react-icons/md";
import { PiMapPinLineFill } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react'
import CreativeProfileView from './CreativeProfileView'
import MapSearched from './MapSearched'

import UserNotificationModal from './UserNotificationModal'
import BottomBar from './BottomBar'
import { IoIosArrowRoundForward } from "react-icons/io";

 



const TalentCompo = () => {

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


      const [show, setShow] = useState(false)

      const openModal = () =>{
        setShow(true)
      }

      const closeModal =()=>{
        setShow(false)
      }



      const [show1, setShow1] = useState(false)

      const openModal1 = () =>{
        setShow1(true)
      }

      const closeModal1 =()=>{
        setShow1(false)
      }



      const [showMap, setShowMap] = useState(false)

      const openModalMap = ()=>{
        setShowMap(true);
      } 
  
      const closeModalMap = ()=>{
        setShowMap(false);
      }

  return (
    <div>
        <div className='talentSectionDiv'>

        <div className='talentSection'>
            <div className='talentExplore'>
                    <h2>Explore the Best <br /> talents around Africa</h2>
                    <div className='talentDivArrow'>
                        <p><IoIosArrowRoundForward /></p>
                        <span>Become a creative</span>
                    </div>
            </div>
            
            <div className='talentImgDiv'>
                <img src={myImage} alt="" />
            </div>
        </div>

        </div>

        <div className='findMainSection'>
            <div className='findDiv'>
                <p>Find Talents by Location <PiMapPinLineFill className='mapIcon'/></p>
                <button onClick={openModalMap}>Search </button>
                {/* <Link to={'/searchedResult'}><button>Search Link</button></Link> */}
            </div>

            <div className='imageSectionCard'>
                <p className='imageSectP'>Recently Viewed</p>

                <div className='imagecard'>


                    {/* <Link to={'/talentsProfiles'}> */}
                    <div className='cardDiv'>
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

                            <div className='mytitle'>
                                <h3>Frontend developer</h3>
                                <p>N20,000</p>
                            </div>
                        </div>
                    </div>
                    {/* </Link> */}



                    <div className='cardDiv' onClick={openModal1}>
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

                            <div className='mytitle'>
                                <h3>Frontend developer</h3>
                                <p>N20,000</p>
                            </div>
                        </div>
                    </div>



                    <div className='cardDiv' onClick={openModal1}>
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

                            <div className='mytitle'>
                                <h3>Frontend developer</h3>
                                <p>N20,000</p>
                            </div>
                        </div>
                    </div>



                    <div className='cardDiv' onClick={openModal1}>
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

                            <div className='mytitle'>
                                <h3>Frontend developer</h3>
                                <p>N20,000</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='imageSectionCard'>
                <p className='imageSectP'>Verified Profiles</p>

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

                            <div className='mytitle'>
                                <h3>Frontend developer</h3>
                                <p>N20,000</p>
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

                            <div className='mytitle'>
                                <h3>Frontend developer</h3>
                                <p>N20,000</p>
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

                            <div className='mytitle'>
                                <h3>Frontend developer</h3>
                                <p>N20,000</p>
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

                            <div className='mytitle'>
                                <h3>Frontend developer</h3>
                                <p>N20,000</p>
                            </div>
                        </div>
                    </div>

                    
                </Carousel>
                </div>
            </div>

            <div className='ExploreCategoryAll'>
                <div className='exploreDivAll'>
                    <h2>Explore by categories</h2>
                    <p>See All</p>
                </div>
                <div className='categorybtn'>
                    <span>Furniture</span>
                    <span>Fashion Design</span>
                    <span>Mechanics</span>
                    <span>Accessories Repair</span>
                    <span>Content Creation</span>
                    <span>Electrician</span>
                    <span>Graphic Design</span>
                    <span>Backend Dev</span>
                    <span>Mobile Dev</span>
                    <span>Frontend Dev</span>
                    <span>UI/UX Design</span>
                    <span>Shoe Making</span>
                </div>
            </div>
        </div>

        {show1 && <CreativeProfileView closeModal={closeModal1}/>}
        {showMap && <MapSearched closeModal={closeModalMap}/>}


        {show && (
            <UserNotificationModal closeModal={closeModal}/>
        )}
                
        <BottomBar openModal={openModal}/>

    </div>
  )
}

export default TalentCompo
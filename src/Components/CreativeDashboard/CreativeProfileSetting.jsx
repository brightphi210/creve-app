import React, { useState } from 'react'
import profImage from './images/Avatars1.png'
import './CreativeProfileSetting.scss'
import { HiStar } from "react-icons/hi2";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdOutlineWorkspaces } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa6";
import bigImage from './images/bigImage.png'
import { FaRegEdit } from "react-icons/fa";

import profComplete from './images/profComplete.png'

import AOS from 'aos';
import 'aos/dist/aos.css';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FrequentQuestion from './CreativeModalUpdate/FrequentQuestion';
import WorkType from './CreativeModalUpdate/WorkTypeSocialLocation';

const CreativeProfileSetting = ({showSideBar, setShowSideBar}) => {

  AOS.init();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  const [showModal, setShowModal] = useState(false)

  const openModal = () =>{
    setShowModal(true);
  }

  const closeModal = () =>{
    setShowModal(false);
  }


  const [showAllModal, setShowAllModal] = useState(true)

  const openAllModal = () =>{
    setShowAllModal(true);
  }

  const closeAllModal = () =>{
    setShowAllModal(false);
  }




 
  return (
    <div className='creativeProfileSettingSection'>
      <div className='creativeProfileSectionOne'>

        <div className='creativeEdit'>
          <h2>My Profile</h2>
          <button><span><CiEdit /></span>Edit Profile</button>
        </div>

        <div className='creativeProfilePics'>
          <img src={profImage}alt="" />
          <div>
            <div className='creativeVerifiedDiv'>
              <h2>Cassie Daniels </h2>
              <span><RiVerifiedBadgeFill />verified</span>
            </div>
            <div>
              <p><HiStar /><HiStar />4.8/5.0 (12 reviews)</p>
              <p className='creativeLocate'><GrLocation /> Port Harcourt, Nigeria</p>
            </div>
          </div>
        </div>

        <div className='creativeProfileInfo'>
          <div className='creativeProfileLeft'>
            <h2>General Information</h2>

            <div className='creativeProDiv'>
              <h3>Work Type</h3>
              <p><MdOutlineWorkspaces />Hybrid</p>
            </div>

            <div className='creativeProDiv'>
              <h3>Location</h3>
              <p><GrLocation />Port Harcourt, Nigeria</p>
            </div>

            <div className='creativeProDiv'>
              <h3>Language</h3>
              <p><GrLanguage />English</p>
            </div>


            <div className='creativeProDiv'>
              <h3>Link</h3>
              <p><BsWhatsapp />Whatsapp</p>
              <p><FaRegAddressBook />Resume</p>
            </div>

          </div>
          
          <div className='creativeProfileRight'>

            <div>
              <h2>Details</h2>

              <div className='creativeProfileSkill'>
                <h3>Frontend Developer JavaScript and React</h3>
                <div>
                  <h4>#20,000</h4>
                  <p>Starting Price</p>
                </div>
              </div>


              <div className='creativeProfileWeb'>
                <p>Website Portfolio</p>

                <ul>
                  <li>Web development</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>


                <p>
                  Hi, I’m Cassie, Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magnaex ea commodo consequat.
                </p>
              </div>


              <div>
                <Carousel
                  additionalTransfrom={0}
                  arrows
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className=""
                  containerClass="container"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  pauseOnHover
                  renderArrowsWhenDisabled={false}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  responsive={responsive}
                  rewind={false}
                  rewindWithAnimation={false}
                  rtl={false}
                  shouldResetAutoplay
                  showDots
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                >

                  <div className='creativeProfileSetImageDiv'>
                    <img src={bigImage} alt="" />
                  </div>


                  <div className='creativeProfileSetImageDiv'>
                    <img src={bigImage} alt="" />
                  </div>

                </Carousel>
                <div className='creativeProfileSetGenImageDiv'>
                    <div className=''>
                      <img src={bigImage} alt="" />
                    </div>

                    <div className=''>
                      <img src={bigImage} alt="" />
                    </div>

                    <div className=''>
                      <img src={bigImage} alt="" />
                    </div>

                    <div className=''>
                      <img src={bigImage} alt="" />
                    </div>
                </div>
              </div>


              <div>
                <h2>Reviews</h2>

                <div>
                  <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={responsive}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                  >

                    <div className='creativeProfileDiv'>

                      <div className='creativeReviewProfile'>
                          <div>
                            <img src={profImage} alt="" />
                          </div>

                          <div>
                            <p>Jane Doe</p>
                            <p><HiStar /><HiStar />5.0</p>
                          </div>
                      </div>

                      <p>
                        Hi, I’m Cassie, Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam
                      </p>


                    </div>

                  </Carousel>
 
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      
      {showSideBar && (
             <div className={ 'creativeSideBar'} data-aos="fade-left">
             <h2>Profile Completion</h2>
     
             <div>
               <img src={profComplete} alt="" />
             </div>
     
             <div className='creativeProDo'>
               <h3>Profile To-Do</h3>
               <h4>Click on each to edit</h4>
               <p onClick={openModal}><FaRegEdit />Frequently Asked Question</p>
               <p onClick={openAllModal}><FaRegEdit /> Work Type</p>
               <p onClick={openAllModal}><FaRegEdit /> Social Media</p>
               <p onClick={openAllModal}><FaRegEdit /> Location</p>
             </div>
           </div>
      )}
 

      <FrequentQuestion openModal={openModal} showModal={showModal} closeModal={closeModal}/>
      <WorkType openAllModal={openAllModal} showAllModal={showAllModal} closeAllModal={closeAllModal}/>
    </div>
  )
}

export default CreativeProfileSetting

import React, { useState, useLayoutEffect } from 'react'
import prof from './images/profilePics.png'
import './CreativeProfileSetting.scss'
import { HiStar } from "react-icons/hi2";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdOutlineWorkspaces } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import bigImage from './images/bigImage.png'
import { FaRegEdit } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { TbExternalLink } from "react-icons/tb";
import { jwtDecode } from "jwt-decode";

import profComplete from './images/profComplete.png'
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FrequentQuestion from './CreativeModalUpdate/FrequentQuestion';
import WorkType from './CreativeModalUpdate/WorkTypeSocialLocation';
import CreativeBottomBar from './CreativeBottomBar';
import { BASE_URL } from '../api/api';

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


  const [showAllModal, setShowAllModal] = useState(false)

  const openAllModal = () =>{
    setShowAllModal(true);
  }

  const closeAllModal = () =>{
    setShowAllModal(false);
  }


  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

  const decoded = jwtDecode(authTokens.access);

  const [userData, setUserData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const profileUrl = `${BASE_URL}/creativeprofile/${decoded.profile_id}/`


  const getUserProfile = async ()=>{
    try {
      const response = await fetch(profileUrl,{
        method: 'GET',
        headers : {
          'Authorization' : `Bearer ${authTokens.access}`,
          'Content-Type':'Application/json'
        },
      })

      setIsLoading(false)
      const data = await response.json()
      setUserData(data)

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }


  useLayoutEffect(() => {
    getUserProfile()
  },[])


  console.log(userData)


  
  
  return (
    <div className='creativeProfileSettingSection'>


      <div className='creativeProfileSectionOne'>

        <div className='creativeEdit'>
          <h2>My Profile</h2>
          <div>
            <button onClick={openAllModal}><span><CiEdit /></span>Edit Profile</button>
            <button onClick={openModal} className='creativeEditBtn2'><span><MdAddCircleOutline /></span>Add FAQ</button>
          </div>
        </div>

        {isLoading ? 
          <div class="profile-section">
            <div class="profile-image"></div>
            <div class="profile-info">
              <div class="profile-name"></div>
              <div class="profile-details"></div>
            </div>
          </div>  
          
          
          : 

          <div className='creativeProfilePics'>
            <div className='myCreativePics'>
              <div>

                {isLoading ? (
                  
                  <img src={prof} alt="" width={80} height={80}/>
                ) : (

                <img src={userData.profile_pics}alt="" />
                )}

              </div>
            </div>
            <div>
              <div className='creativeVerifiedDiv'>
                <h2>{userData.display_name}</h2>
                <p><RiVerifiedBadgeFill /></p>
              </div>
              <div>
                <p><HiStar /><HiStar />4.8/5.0 (12 reviews)</p>
                <p className='creativeLocate'><GrLocation /> {userData.location}</p>
              </div>
            </div>
          </div>

        }


        <div className='creativeProfileInfo'>
          <div className='creativeProfileLeft'>
            <h2>General Information</h2>
            <hr />

            <div className='creativeProDiv'>
              <h3>Work Type</h3>
              <p><MdOutlineWorkspaces />Hybrid</p>
            </div>

            <div className='creativeProDiv'>
              <h3>Location</h3>
              <p><GrLocation />{userData.location}</p>
            </div>

            <div className='creativeProDiv'>
              <h3>Language</h3>
              <p><GrLanguage />{userData.language}</p>
            </div>


            <div className='creativeProDiv'>
              <h3>Link</h3>
              <Link to={userData.whatsapp_link}><p><BsWhatsapp />Whatsapp</p></Link>
              <Link to={userData.resume_link}><p><CgFileDocument />Resume</p></Link>
            </div>

          </div>
          
          <div className='creativeProfileRight'>

            <div>
              <h2>Details</h2>
              <hr />

              <div className='creativeProfileSkill'>
                <h3>{userData.summary_of_profile}</h3>
                <div>
                  <h4>&#8358;{userData.starting_price}</h4>
                  <p>Starting Price</p>
                </div>
              </div>


              <div className='creativeProfileWeb'>
                <div>
                  
                  <Link to={userData.website_link}><p style={{display : 'flex', gap : 5}}><TbExternalLink /><span>Website Link. . </span></p></Link>
                </div>

                <ul>
                  <li>Website dev</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>


                <p>
                  <b>Bio: </b>{userData.about}
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


              <div className='creativeReviewDiv'>
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
                            <img src={prof} alt="" />
                          </div>

                          <div className='creativeReviewName'>
                            <h3>Jane Doe</h3>
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


      <CreativeBottomBar openModal={openModal}/>
    </div>
  )
}

export default CreativeProfileSetting

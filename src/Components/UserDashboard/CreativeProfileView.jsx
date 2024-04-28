import React, { useEffect, useState } from 'react'
import profImage from './images/Avatars1.png'
import map from './images/map.png'
import mapImage from './images/bigImage.png'

import './CreativeProfileView.scss'
import { FaEye } from "react-icons/fa6";
import { HiStar } from "react-icons/hi2";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiOutlineArrowLeft } from "react-icons/hi";

import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BASE_URL } from '../api/api'

import { useParams } from 'react-router-dom';

const CreativeProfileView = () => {


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };


  const [show1, setShow1] = useState(false);

  const closeModal1 = () =>{
    setShow1(false);
  }

  const toggleShow = () =>{
    setShow1(!show1);
  }

  const navigate = useNavigate()

  const goBack = () =>{
    navigate(-1);
  }


  const {id} = useParams()

  const [show2, setShow2] = useState(false);
  const openShow2 = () =>{setShow2(!show2)}
  const closeShow2 = () =>{setShow2(false)}


  const [talentData, setTalentData] = useState({})


  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

  const decoded = jwtDecode(authTokens.access);
  const [ isLoading, setIsLoading] = useState(true)


  const fetchTalentData = async ()=>{
    try {
      const response = await fetch(`${BASE_URL}/creativeprofile/${id}`,{
        method: 'GET',
        headers : {
          'Authorization' : `Bearer ${authTokens.access}`,
          'Content-Type':'Application/json'
        },
      })

      setIsLoading(false)
      const data = await response.json()
      console.log(data)
      setTalentData(data)
      
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }


  useEffect(() => {
    fetchTalentData()
  },[])

  console.log('This is my data: ', talentData)
  // console.log('This is my data: ', talentData)


  return (
    <div className='creativeProfileModal' onClick={closeModal1}>
      <div className='creativeProfileContent'>

        <p className='creativeViewcloseBtn' onClick={goBack}><HiOutlineArrowLeft /></p>

        <div className='creativeProfilePart'>
          <div className='creativeLeftPart'>
            
            <div className='creativeLeftDivPart'>
              <img src={talentData.profile_pics} alt=""  width={80}/>
            </div>

            <div className='subLeftPart'>
              <div>
                <h2>{talentData.display_name}</h2>
                <RiVerifiedBadgeFill />
              </div>

              <p>
                <span>
                  <HiStar className='creativeViewIcons'/>
                  <HiStar className='creativeViewIcons'/>
                  <HiStar className='creativeViewIcons'/>
                  <HiStar className='creativeViewIcons'/>
                  <HiStar className='creativeViewIcons'/>
                </span> 4.8/5.0 (12 reviews)
              </p>
              <p className='creativeProfileLocation'><HiLocationMarker className='creativeViewIcons'/> {talentData.location}</p>
            </div>
          </div>

          <div className='creativeRightPart' onClick={(e) => e.stopPropagation()}>

              <div >
                <button className='start' onClick={openShow2}>Start Chat <BsChatDots className='creatIconsBtn'/></button>
                {show2 ? (
                  <div className='messageChat' >
                    <div>
                      <h3>Send Message</h3>
                      <p onClick={closeShow2}><IoIosCloseCircleOutline /></p>
                    </div>
                    <form action="">
                      <input type="text" placeholder='Send Message to Creative' />
                      <span><RiSendPlaneFill className='spaIcon'/></span>
                    </form>
                  </div>
                ) : <button onClick={toggleShow}>View Contact<FaEye className='creatIconsBtn'/></button>}
              </div>




              { show1 && (
                <div className='messageModalDiv' >
                <div>
                  <p className='messageModalTitle'>Phone number</p>
                  <div className='phoneDiv'>
                    <h3>081-123-123-23</h3>
                    <p>Copy <FaRegCopy /></p>
                  </div>
                </div>

                <hr />
                <div>
                  <p className='messageModalTitle'>WhatsApp</p>
                  <div className='phoneDiv'>
                    <h3>081-123-123-23</h3>
                    <p>Chat on Whatsapp</p>
                  </div>
                </div>
              </div>
              )}
              
            {/* <p className='creativeLink'>081-123-123-23 <IoCopyOutline /></p> */}
          </div>

        </div>

        <div className='creativeProfileViewDescriptionPart'>
          <div className='creativeProfileViewDescriptionLeft'>
            <h2>General Information</h2>
            <div>
              <h3>Work Type</h3>
              <p>Hybrid</p>
            </div>

            <div>
              <h3>Location</h3>
              <p>{talentData.location}</p>
            </div>


            <div>
              <h3>Physical store location</h3>
              <p>Ikwerre road</p>

              <img src={map} alt="" />
            </div>

            <div>
              <h3>Language</h3>
              <p>{talentData.language}</p>
            </div>

            <div>
              <h3>Social Media</h3>
            </div>
          </div>


          <div className='creativeProfileViewDescriptionRight'>

            <div className='detailsView'>
              <h2>Details</h2>
              <div className='detailsViewFLex'>
                <h3>{talentData.summary_of_profile}</h3>
                
                <div>
                  <h3>N{talentData.starting_price}</h3>
                  <p>Starting Price </p>
                </div>
              </div>

              <div className='webViewsDiv'>
                <p className='web' style={{paddingTop : 10}}>Website Portfolio</p>
                <div >
                  <span>Web development</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
                <p className='bioView'>
                  {talentData.about}
                </p>
              </div>
            </div>

            <div className='creativeProfileViewRightImage'>
              <h2>Gallery</h2>

              <div className='rightImageDiv'>
                <img src={mapImage} alt="" />
                <img src={mapImage} alt="" />
                <img src={mapImage} alt="" />
                <img src={mapImage} alt="" />
              </div>
            </div>

            <div className='frequentlyAsked'>
              <h2>Frequently Asked Questions</h2>
              <div>

                <div className='frequentlyDiv'>
                  <h3>What style do we use in development <MdOutlineKeyboardArrowDown className='freqIcon'/></h3>
                  <hr />
                </div>

                <div className='frequentlyDiv'>
                  <h3>What style do we use in development <MdOutlineKeyboardArrowDown className='freqIcon'/></h3>
                  <p>
                    Hi, I’m Cassie, Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam
                  </p>
                  <hr />
                </div>
              </div>

              <div>
                <h2>Reviews</h2>
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
                  <div className='reviews'>
                    <div className='reviewsProf'>
                      <img src={profImage} alt="" width={50}/>
                      <div>
                        <h3>Jane Doe</h3>
                        <p><HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiStar /></p>
                      </div>
                    </div>

                    <p>
                      Hi, I’m Cassie, Lorem ipsum dolor sit amet, consectetur 
                      adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    </p>
                  </div>

                  <div className='reviews'>
                    <div className='reviewsProf'>
                      <img src={profImage} alt="" width={50}/>
                      <div>
                        <h3>Jane Doe</h3>
                        <p><HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiStar /></p>
                      </div>
                    </div>

                    <p>
                      Hi, I’m Cassie, Lorem ipsum dolor sit amet, consectetur 
                      adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    </p>
                  </div>
                </Carousel>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CreativeProfileView

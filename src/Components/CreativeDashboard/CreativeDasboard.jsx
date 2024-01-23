
import React,{useState} from 'react'
import { jwtDecode } from "jwt-decode";
import './CreativeDashboad.scss'
import myImg from './images/img3.png'
import myImg1 from './images/img4.png'
import prof from './images/Avatars1.png'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { LuArrowUpRightFromCircle } from "react-icons/lu";



const CreativeDasboard = () => {
  
  const [isLoading, setIsLoading] = useState(true)
  const [profilePics, setProfilePics] = useState(null)
  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  const decoded = jwtDecode(authTokens.access);


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
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

  return (
    <div className='creativeDashDiv'>
      <div className='creativeDashDivFlex'>
        <div className='creativeBannerAndInput'>


          <div className='creativeBannerDiv'>
          <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                itemClass="carousel-item-padding-60-px"
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={50000}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile" ]}
                dotListClass="custom-dot-list-style"
                
          >
            <div className='creativeBanner'>
              <div className='creativeBannerText'>
                <p>
                    Join Freelancer Plus now to unlock new features to help you <br /> 
                    grow your network and market your skills.
                </p>

                  <h2>Get 80 Connects each month</h2>
                  <button>Learn More</button>
              </div>

              <div className='creativeBannerImg'>
                <img src={myImg} alt="" />
              </div>
            </div>


            <div className='creativeBanner'>
              <div className='creativeBannerText'>
                <p>
                  Creve 101 will guide you through the basics of our platform.
                </p>

                  <h2>Learn how to get started on Creve</h2>
                  <button>Get Started</button>
              </div>

              <div className='creativeBannerImg'>
                <img src={myImg1} alt="" />
              </div>
            </div>
            
          </Carousel>
          </div>


          <div className='creativeDashProfile creativeDashProfileHide' >
            <div className='profileCard'>
              <div>
                <img src={prof} alt="" width={60}/> 
              </div>
              <div>
                <h3>{decoded.name}</h3>
                <p>Web Developer(Python, Django)</p>
              </div>
            </div>

            <div className='completeProf'>
              <p>Complete your profile</p>

              <div className='progressDiv'>
                <div className='grayProgress'></div>
                <div className='colorProgress'></div>

                <span>50%</span>
              </div>
            </div>


          </div>

          <div className='creativeDashInput'>
            <div>
              <input type="text" placeholder='Search of jobs' />
              <p className='creativeSearch'><FiSearch /></p>
            </div>

            <div className="creativeDashMessDiv">
              <h2>Your Messages</h2>

              <div className='creativeDashMess'>
                <div className='creativeDashMessFlex'>
                  <div className='creativeDashMessProf'>
                    <div>
                      <img src={prof} alt="" />
                    </div>
                    <div>
                      <h2>Mark Jones</h2>
                      <p>MJ: I need your service</p>
                    </div>
                  </div>
                  <p className='time'>Just Now</p>
                  
                </div>
                  <hr />

                  <div className='creativeDashMessFlex'>
                    <div className='creativeDashMessProf'>
                      <div>
                        <img src={prof} alt="" />
                      </div>
                      <div>
                        <h2>Mark Jones</h2>
                        <p>MJ: I need your service</p>
                      </div>
                    </div>
                    <p className='time'>Just Now</p>
                  
                  </div>


                  <hr />

                  <div className='creativeDashMessFlex'>
                    <div className='creativeDashMessProf'>
                      <div>
                        <img src={prof} alt="" />
                      </div>
                      <div>
                        <h2>Mark Jones</h2>
                        <p>MJ: I need your service</p>
                      </div>
                    </div>
                    <p className='time'>Just Now</p>
                  
                  </div>
                

              </div>

            </div>
          </div>
        </div>

        <div className='creativeDashProfileDiv'>

          <div className='creativeDashProfile creativeDashProfileShow'>
            <div className='profileCard'>
              <div>
                <img src={prof} alt="" width={60}/> 
              </div>
              <div>
                <h3>{decoded.name}</h3>
                <p>Web Developer(Python, Django)</p>
              </div>
            </div>

            <div className='completeProf'>
              <p>Complete your profile</p>

              <div className='progressDiv'>
                <div className='grayProgress'></div>
                <div className='colorProgress'></div>

                <span>50%</span>
              </div>
            </div>


          </div>

          <div className='creativeDashProfile'>
            <h2>Notifications <GrNotification /></h2>

            <div className='creativeDashNot'>
              <div>
                <img src={prof} alt="" width={40}/> 
              </div>
              <div>
                <h4>Your account has been verified</h4>
                <p>3 days ago</p>
              </div>
            </div>

            <hr />


            <div className='creativeDashNot'>
              <div>
                <img src={prof} alt="" width={40}/> 
              </div>
              <div>
                <h4>Your account has been verified</h4>
                <p>3 days ago</p>
              </div>
            </div>

            <hr />


            <div className='creativeDashNot'>
              <div>
                <img src={prof} alt="" width={40}/> 
              </div>
              <div>
                <h4>Your account has been verified</h4>
                <p>3 days ago</p>
              </div>
            </div>
          </div>



          <div className='creativeDashProfile'>
            <ul>
              <li>Boost Account <LuArrowUpRightFromCircle /></li>
              <li>Upgrade to plus <LuArrowUpRightFromCircle /></li>
              <li>Community & Forums <LuArrowUpRightFromCircle /></li>
              <li>Help Center <LuArrowUpRightFromCircle /></li>
            </ul>
          </div>

          
        </div>
      </div>



    </div>
  )
}

export default CreativeDasboard
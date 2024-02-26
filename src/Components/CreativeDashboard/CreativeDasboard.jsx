
import React,{useState, useEffect} from 'react'
import { jwtDecode } from "jwt-decode";
import './CreativeDashboad.scss'
import myImg from './images/img3.png'
import myImg1 from './images/img4.png'
import prof from './images/Avatars1.png'
import profilePicsImport from './images/profilePics.png'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FiSearch } from "react-icons/fi";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { RiNotificationLine } from "react-icons/ri";
import Narvbar from '../NavComponent/Narvbar';
import { IoCloseCircleOutline } from "react-icons/io5";
import CreativeBottomBar from './CreativeBottomBar';



const CreativeDasboard = () => {
  
  const [isLoading, setIsLoading] = useState(true)
  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  const decoded = jwtDecode(authTokens.access);
  
  const [name, setName] = useState('Loadin . . .')
  const [profilePics, setProfilePics] = useState(null)
  const [summaryProfile, setSummaryProfile] = useState('Loading . . .')


  console.log(profilePics)


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


const [show, setShow] = useState(false)
const [show2, setShow2] = useState(false)

const openModal = () =>{
  setShow(true);
}

const closeModal = () =>{
  setShow(false);
}


const fetchUserData = async (e) => {

  setIsLoading(true)

  try {
    const response = await fetch(`https://creve.onrender.com/auth/creativeprofile/${decoded.profile_id}/`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${authTokens.access}`,
        "Content-Type": "application/json"
      },
    });

    setIsLoading(false)
    const userData = await response.json();
    console.log("This is the user data: " + JSON.stringify(userData));

    setName(userData.display_name);
    setProfilePics(userData.profile_pics)
    setSummaryProfile(userData.summary_of_profile)
    
  } catch (error) {
    console.error('Error fetching user data:', error);
    setIsLoading(false)
  }
};

useEffect(() => {
  fetchUserData();
}, []);

  return (
    <div className='creativeDashDiv'>
      <div className='creativeDashDivFlex'>
        <div className='creativeBannerAndInput'>

          <div style={{display : 'none'}}>
            <Narvbar openModal={openModal} show={show} setShow={setShow}/>
          </div>

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
                <img src={profilePics} alt="" width={60}/> 
              </div>
              <div>
                <h3>{name}</h3>
                <p>{summaryProfile}</p>
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
                {profilePics === null ? 
                (
                  <img src={profilePicsImport} alt="" width={50}/>
                ) : (<img src={profilePics} alt="" width={50}/> )}
              </div>
              <div>
                <h3>{name}</h3>
                <p>{summaryProfile}</p>
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
            <h2>Notifications <RiNotificationLine /></h2>

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

      {show && (
      <div className='navNotifyModal'>
        <div className='navNotifyContent'>
          <div className='notDiv'>
            <h2>Notifications</h2>
            <p onClick={closeModal}><IoCloseCircleOutline /></p>
          </div>


          <div>
            <hr />
            <div className='notProf'>
              <img src={prof} alt="" width={20}/>
              <div>
                <p>We have Exciting new talents in Web Development. Explore now!</p>
                <p>3 days ago</p>
              </div>
            </div>
            <hr />
            <div className='notProf'>
              <img src={prof} alt="" width={30}/>
              <div>
                <p>We have Exciting new talents in Web Development. Explore now!</p>
                <p>3 days ago</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )}

        <CreativeBottomBar openModal={openModal}/>
    </div>
  )
}

export default CreativeDasboard
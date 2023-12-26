import React from 'react'
import profImage from './images/Avatars1.png'
import map from './images/map.png'
import mapImage from './images/bigImage.png'

import './CreativeProfileView.scss'
import { IoArrowBackOutline } from "react-icons/io5";
import { HiStar } from "react-icons/hi2";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { GrFavorite } from "react-icons/gr";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <div className='creativeProfileModal'>
      <div className='creativeProfileContent'>

        <p className='creativeViewcloseBtn'><IoArrowBackOutline /></p>

        <div className='creativeProfilePart'>
          <div className='creativeLeftPart'>
            <img src={profImage} alt=""  width={80}/>

            <div className='subLeftPart'>
              <div>
                <h2>Cassie Daniels</h2>
                <span><RiVerifiedBadgeFill />Verified</span>
              </div>

              <p>
                <span><HiStar className='creativeViewIcons'/><HiStar className='creativeViewIcons'/><HiStar className='creativeViewIcons'/><HiStar className='creativeViewIcons'/><HiStar className='creativeViewIcons'/>
                </span> 4.8/5.0 (12 reviews)
              </p>
              <p className='creativeProfileLocation'><HiLocationMarker className='creativeViewIcons'/> Port Harcourt, Nigeria</p>
            </div>

          </div>

          <div className='creativeRightPart'>
            <div>
              <p><GrFavorite /></p>
              <button>Message Creative</button>
            </div>
              
            <p className='creativeLink'>081-123-123-23 <IoCopyOutline /></p>
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
              <p>Port Harcourt, Nigeria</p>
            </div>

            <div>
              <h3>Work Hours</h3>
              <div className='openDays'>
                <p>Monday</p>
                <p className='time'>9.00am - 7.00pm</p>
              </div>

              <div className='openDays'>
                <p>Tuesday</p>
                <p className='time'>9.00am - 7.00pm</p>
              </div>

              <div className='openDays'>
                <p>Wenesday</p>
                <p className='time'>9.00am - 7.00pm</p>
              </div>

              <div className='openDays'>
                <p>Thursday</p>
                <p className='time'>9.00am - 7.00pm</p>
              </div>
              
            </div>

            <div>
              <h3>Physical store location</h3>
              <p>Ikwerre road</p>

              <img src={map} alt="" />
            </div>

            <div>
              <h3>Language</h3>
              <p>English</p>
            </div>

            <div>
              <h3>Social Media</h3>
            </div>
          </div>


          <div className='creativeProfileViewDescriptionRight'>

            <div className='detailsView'>
              <h2>Details</h2>
              <div className='detailsViewFLex'>
                <h3>Frontend Developer Proficient in CSS, JavaScript and React</h3>
                
                <div>
                  <h3>#20,000</h3>
                  <p>Starting Price </p>
                </div>
              </div>

              <div className='webViewsDiv'>
                <p className='web'>Website Portfolio</p>
                <div >
                  <span>Web development</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
                <p className='bioView'>
                  Hi, I’m Cassie, Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                  consequat.
                </p>
              </div>
            </div>

            <div className='creativeProfileViewRightImage'>
              <h2>Gallery</h2>
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
                <img src={mapImage} alt="" />
                <img src={mapImage} alt="" />
                <img src={mapImage} alt="" />
                <img src={mapImage} alt="" />
              </Carousel>
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

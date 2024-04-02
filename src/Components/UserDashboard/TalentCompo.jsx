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
import { useEffect, useState } from 'react'
import CreativeProfileView from './CreativeProfileView'
import MapSearched from './MapSearched'

import UserNotificationModal from './UserNotificationModal'
import BottomBar from './BottomBar'
import { IoIosArrowRoundForward } from "react-icons/io";
import { BASE_URL } from '../api/api'
import { jwtDecode } from "jwt-decode";
// import { useNavigation } from 'react-router-dom'
 



const TalentCompo = () => {

    // const navigate = useNavigation()

    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

    const decoded = jwtDecode(authTokens.access);

        const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
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


      const [ isLoading, setIsLoading] = useState(true)

      const [talentData, setTalentData] = useState([])


      const fetchTalentData = async ()=>{
        try {
          const response = await fetch(`${BASE_URL}/creativeprofile/`,{
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




  return (
    <div>
        <div className='talentSectionDiv'>

        <div className='talentSection'>
            <div className='talentExplore'>
                <h2>Explore the Best <br /> talents around Africa</h2>
                <button className='talentDivArrow'>Become a creative <IoIosArrowRoundForward className='myBTN'/></button>
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


                    {talentData.map((singleTalent)=>(
                        <div className='cardDiv' >
                            <div className='imgCard'><img src={imageCard} alt="" /></div>
                            <div className='cardProfileDiv'>
                                <div className='cardProfileDiv2'>
                                    <div className='cardProfileDivImg'>
                                        <div className='cardProfImageDiv' >
                                            <img src={singleTalent.profile_pics} alt="" />
                                        </div>
                                        <div style={{display : 'flex', alignItems : 'center', gap : 5}}>
                                            <p>{singleTalent.display_name}</p>
                                            <p><IoIosStar /> </p>
                                        </div>
                                    </div>

                                    <div className='cardProBtn2'>
                                        <button><MdOutlineVerified/> Verified</button>
                                    </div>
                                </div>

                                <div className='mytitle'>
                                    <h3>{singleTalent.summary_of_profile}</h3>
                                    <p>N{singleTalent.starting_price}</p>
                                </div>
                            </div>
                        </div>
                    ))}

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
        {isLoading ? 
          (<>
            <div className='loaderModal'>
              <span className="loader"></span>
            </div>
          </>) : ''
        }

    </div>
  )
}

export default TalentCompo
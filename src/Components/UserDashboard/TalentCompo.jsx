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
          <div className='ExploreCategoryAll'>
                <div className='exploreDivAll'>
                    <h2>Explore by categories</h2>
                    
                    {/* <p><Link to={'/searchedResult'}>See All</Link></p> */}
                    
                </div>
                <div className='categorybtn'>
                    <span>Furniture</span>
                    <span>Fashion Design</span>
                    <span>Electrician</span>
                    <span>Graphic Design</span>
                    <span>Backend Dev</span>
                    <span>Frontend Dev</span>
                    <span>UI/UX Design</span>
                    <span>Shoe Making</span>
                </div>
            </div>

            <div className='findDiv'>
                <p>Find Talents by Location <PiMapPinLineFill className='mapIcon'/></p>
                {/* <input type="text" placeholder='search' style={{padding : 10, paddingInline : 30}}/> */}
                {/* <button onClick={openModalMap}>Search </button> */}
                <Link to={'/searchedResult'}><button>Search Talents</button></Link>
            </div>

            <div className='imageSectionCard'>
                <p className='imageSectP'>Talents</p>

                <div className='imagecard'>

                    {talentData.map((singleTalent)=>(
                        <Link to={`/talentsProfiles/${singleTalent.id}`}>
                            <div className='cardDiv' >
                                <div className='imgCard'>
                                  <img src={singleTalent.cover_image} alt="" />
                                </div>
                                <div className='cardProfileDiv'>
                                    <div className='cardProfileDiv2'>

                                        <div className='cardProfImageDiv' >
                                            <img src={singleTalent.profile_pics} alt="" />
                                        </div>


                                        <div style={{display : 'flex', alignItems : 'center', gap : 5}}>
                                            <p>{singleTalent.display_name}</p>
                                        </div>


                                        {singleTalent.verified === false ? (

                                        <div className='cardProBtn2'>
                                            <button><MdOutlineVerified/> Unverified</button>
                                        </div>
                                        ) : (

                                        <div className='cardProBtn2'>
                                            <button><MdOutlineVerified/> Verified</button>
                                        </div>
                                        )}
                                    </div>

                                    <div className='mytitle'>
                                        <h4>{singleTalent.summary_of_profile}</h4>
                                        <p>N{(singleTalent.starting_price).toLocaleString()}</p>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    ))}

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
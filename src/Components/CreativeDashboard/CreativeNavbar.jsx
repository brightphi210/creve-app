import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from './images/Logo2.png'
import avatar from './images/Avatars1.png'


import { IoCloseCircleOutline } from "react-icons/io5";

import { IoSettingsSharp } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";


import { RiNotificationLine } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";
import { LuUserCircle } from "react-icons/lu";
import { BiMessageSquareDots } from "react-icons/bi";

import {useNavigate } from 'react-router-dom';


import prof from './images/profilePics.png'
import { jwtDecode } from "jwt-decode";



const CreativeNavbar = () => {

  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  // const [showSearch, setShowSearch] = useState(false)


  let [tokentoken, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  

  const decoded = jwtDecode(tokentoken.access);
  // console.log(decoded.user_id);

  const [isLoading, setIsLoading] = useState(false)


  const openModal = () =>{
    setShow(true);
  }


  const closeModal = () =>{
    setShow(false);
  }


  const openModal2 = () =>{
    setShow2(true);
  }


  const closeModal2 = () =>{
    setShow2(false);
  }




  const navigate = useNavigate()
  const [fullname, setFullname] = useState('')
  const [profilePics, setProfilePics] = useState(null)


  

  // const url = `https://creve.onrender.com/auth/creative/${decoded.user_id}/`
  const profileUrl = `https://creve.onrender.com/auth/creativeprofile/${decoded.profile_id}`

  // const getUserDetails = async ()=>{
  //   try {
  //     const response = await fetch(url,{
  //       method: 'GET',
  //       headers : {
  //         'Authorization' : `Bearer ${tokentoken.access}`,
  //         'Content-Type':'Application/json'
  //       },
  //     })

  //     const data = await response.json()
  //     // const userData = await response.json();
  //     setFullname(data.fullname)
  //     setIsLoading(false)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  // useEffect(() => {
  //   getUserDetails()
  // })




  const getUserProfile = async ()=>{
    try {
      const response = await fetch(profileUrl,{
        method: 'GET',
        headers : {
          'Authorization' : `Bearer ${tokentoken.access}`,
          'Content-Type':'Application/json'
        },
      })

      const data = await response.json()
      console.log(data.profile_pics)
      setProfilePics(data.profile_pics)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getUserProfile()
  })

  const logout = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    setAuthTokens(null)
    localStorage.removeItem('authTokens')
    navigate('/', { state: { successMessage: 'Successfully logged Out !!' }})
  }


  return (
    <div className='userNavbarSection'  >

        <div className='userNavFirstDiv' >
          <div className='userLogo'>
            <Link to={'/'}><img src={logo} alt="" width={40}/></Link>
          </div>
        </div>  


{/* ========================= Notify ============================= */}
    {show && (
      <div className='navNotifyModal' onClick={closeModal}>
        <div className='navNotifyContent'>
          <div className='notDiv'>
            <h2>Notifications</h2>
            <p onClick={closeModal}><IoCloseCircleOutline /></p>
          </div>


          <div>
            <hr />
            <div className='notProf'>
              <img src={avatar} alt="" width={30}/>
              <div>
                <p>We have Exciting new talents in Web Development. Explore now!</p>
                <p>3 days ago</p>
              </div>
            </div>
            <hr />
            <div className='notProf'>
              <img src={avatar} alt="" width={30}/>
              <div>
                <p>We have Exciting new talents in Web Development. Explore now!</p>
                <p>3 days ago</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )}

{/* ================= Notify End ====================================== */}



{/* =========================== Profile ==================================== */}

{show2 && (
      <div className='navNotifyModal' onClick={closeModal2}>
        <div className='navNotifyContent'>
          <div className='notDiv'>
            <h2>{fullname}</h2>
            <p onClick={closeModal2}><IoCloseCircleOutline /></p>
          </div>

          <div className='accountNot'>
            <span>Client Account</span>

            <Link to={'/creative-settings'}><p><IoSettingsSharp />Settings</p></Link>
            <p><IoPersonAddOutline />Refer a friend</p>
            <Link to={'/signupCreative'}><p><FaExchangeAlt />Become a Talent</p></Link>

            <hr />

            <p onClick={logout} style={{cursor : 'pointer'}}><MdOutlineLogout />Log Out</p>
          </div>

        </div>
      </div>
    )}

{/* ==================================== End of Profile ================================= */}

        <div className='userNavSecondDiv' onClick={(e) => e.stopPropagation()}>
          
          <div className='userNavIcon'>
            <Link to={'/dashboardMain'} className='link'><TbSmartHome className='userIcon'/></Link>
          </div>

    
          <div className='userNavIcon' onClick={openModal}>
            <Link to={'/dashboardMain'}><RiNotificationLine className='userIcon'/></Link>
            <p></p>
          </div>

          <div className='userNavIcon'>
            <Link to={'/dashboardMain'}><BiMessageSquareDots className='userIcon'/></Link>
            <p></p>
          </div>


          
          <div className='userNavIcon'>
            <Link to={'/creativeProfile'} className='link'><LuUserCircle className='userIcon'/></Link>
          </div>


          <div className='userNavProfile' onClick={openModal2}>
            <div className='myStatic'>

              <img src={prof} alt="" width={30}/> 
              
              {isLoading === false ? <img src={profilePics} alt="" width={30} className='myOnTop'/>  : '' }
            </div>

            <div className='nameEmail'>
              <p className=''>{fullname}</p>
              {/* <p className=''>{decoded.email}</p> */}
            </div>
          </div>
        </div>



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
export default CreativeNavbar
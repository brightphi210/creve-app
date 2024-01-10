import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from './images/Logo2.png'
import avatar from './images/Avatars1.png'

import { RiSearch2Line } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

import { IoCloseCircleOutline } from "react-icons/io5";

import { IoSettingsSharp } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";

import { RiSendPlaneFill } from "react-icons/ri";
import { Navigate, useNavigate } from 'react-router-dom';


import { jwtDecode } from "jwt-decode";


import './UserNavbar.scss'


const UserNavbar = () => {

  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const token = localStorage.getItem('authToken');
  const [user, setUser] = useState(() => token)

  const decoded = jwtDecode(token);
  console.log(decoded);

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


  const toggleSearch = () =>{
    setShowSearch(!showSearch)
  }



  


  const navigate = useNavigate()

  const logout = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    setUser(null)
    localStorage.removeItem('authToken')
    navigate('/', { state: { successMessage: 'Successfully logged Out !!' }})
  }





  return (
    <div className='userNavbarSection' onClick={closeModal} >

        <div className='userNavFirstDiv' >
          <div className='userLogo'>
            <Link to={'/'}><img src={logo} alt="" width={40}/></Link>
          </div>

          <div className='userSearchDiv'>
                <RiSearch2Line className='userSearchIcon'/>
                <input type="text" placeholder='Search for any service...'/>
                <button>Search</button>
            </div>
        </div>
        <div className='searchIconDiv' onClick={toggleSearch}><RiSearch2Line className='searchBtn'/></div>

      {showSearch && (
        <div className='smallSearchInput'>
          <input type="text" placeholder='search for any service . . .'/>
          <button><RiSendPlaneFill /></button>
        </div>
      )}



{/* ========================= Notify ============================= */}
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
      <div className='navNotifyModal'>
        <div className='navNotifyContent'>
          <div className='notDiv'>
            <h2>{decoded.name}</h2>
            <p onClick={closeModal2}><IoCloseCircleOutline /></p>
          </div>

          <div className='accountNot'>
            <span>Client Account</span>

            <Link to={'/user-settings'}><p><IoSettingsSharp />Settings</p></Link>
            <p><IoPersonAddOutline />Refer a friend</p>
            <p><FaExchangeAlt />Become a Talent</p>

            <hr />

            <p onClick={logout} style={{cursor : 'pointer'}}><MdOutlineLogout />Log Out</p>
          </div>

        </div>
      </div>
    )}

{/* ==================================== End of Profile ================================= */}

        <div className='userNavSecondDiv' onClick={(e) => e.stopPropagation()}>
          
          <div className='userNavIcon'>
            <Link to={'/talents'} className='link'><GrHomeRounded className='userIcon'/></Link>
          </div>


          <div className='userNavIcon'>
            <Link to={'/favourites'} className='link'><MdFavoriteBorder className='userIcon'/></Link>
          </div>

          
          <div className='userNavIcon'>
            <Link to={'/chats'}><AiOutlineMessage className='userIcon'/></Link>
            <p></p>
          </div>
          
          <div className='userNavIcon' onClick={openModal}><MdOutlineNotifications className='userIcon'/>
            <p></p>
          </div>

          <div className='userNavProfile' onClick={openModal2}>
            <div>
              <img src={decoded.profile_pics} alt="" width={30}/> 

              {/* <a href="">{decoded.profile_pics}</a> */}
            </div>

            <div className='nameEmail'>
              <p className=''>{decoded.name}</p>
              <p className=''>{decoded.email}</p>
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

export default UserNavbar
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from './images/craves.png'
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


import './UserNavbar.scss'


const UserNavbar = () => {

  const [show, setShow] = useState(false)

  const openModal = () =>{
    setShow(true);
  }


  const closeModal = () =>{
    setShow(false);
  }


  const [show2, setShow2] = useState(false)

  const openModal2 = () =>{
    setShow2(true);
  }


  const closeModal2 = () =>{
    setShow2(false);
  }
  return (
    <div className='userNavbarSection'>

        <div className='userNavFirstDiv'>
          <div className='userLogo'>
            <Link to={'/talents'}><img src={logo} alt="" width={90}/></Link>
          </div>

          <div className='userSearchDiv'>
                <RiSearch2Line className='userSearchIcon'/>
                <input type="text" placeholder='Search for any service...'/>
                <button>Search</button>
            </div>
        </div>
        <div className='searchIconDiv'><RiSearch2Line className='searchBtn'/></div>



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
            <h2>Zainab Wahab</h2>
            <p onClick={closeModal2}><IoCloseCircleOutline /></p>
          </div>

          <div className='accountNot'>
            <span>Client Account</span>

            <p><IoSettingsSharp />Settings</p>
            <p><IoPersonAddOutline />Refer a friend</p>
            <p><FaExchangeAlt />Become a Talent</p>

            <hr />

            <p><MdOutlineLogout />Log Out</p>
          </div>

        </div>
      </div>
    )}

{/* ==================================== End of Profile ================================= */}

        <div className='userNavSecondDiv'>
          
          <div className='userNavIcon'>
            <Link to={'/favourites'} className='link'><MdFavoriteBorder className='userIcon'/></Link>
          </div>
          <div className='userNavIcon'><AiOutlineMessage className='userIcon'/></div>
          <div className='userNavIcon' onClick={openModal}><MdOutlineNotifications className='userIcon'/></div>

          <div className='userNavProfile' onClick={openModal2}>
            <div>
              <img src={avatar} alt="" width={40}/> 
            </div>

            <div className='nameEmail'>
              <p className=''>Jane Doe</p>
              <p className=''>Janedoe@creevemail.com</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default UserNavbar
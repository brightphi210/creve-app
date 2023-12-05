import React from 'react'
import { Link } from 'react-router-dom'

import logo from './images/craves.png'
import avatar from './images/Avatars1.png'

import { RiSearch2Line } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";


import './UserNavbar.scss'


const UserNavbar = () => {
  return (
    <div className='userNavbarSection'>

        <div className='userNavFirstDiv'>
          <div className='userLogo'>
            <Link to={'/'}><img src={logo} alt="" width={90}/></Link>
          </div>

          <div className='userSearchDiv'>
                <RiSearch2Line className='userSearchIcon'/>
                <input type="text" placeholder='Search for any service...'/>
                <button>Search</button>
            </div>
        </div>
        <div className='searchIconDiv'><RiSearch2Line className='searchBtn'/></div>

        <div className='userNavSecondDiv'>
          <div className='userNavIcon'><MdFavoriteBorder className='userIcon'/></div>
          <div className='userNavIcon'><MdOutlineNotifications className='userIcon'/></div>

          <div className='userNavProfile'>
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
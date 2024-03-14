import React from 'react'

import { Link } from 'react-router-dom'
import { TbSmartHome } from "react-icons/tb";
import { LuUserCircle } from "react-icons/lu";
import { BiMessageSquareDots } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";

const CreativeBottomBar = ({openModal}) => {
  return (
    <div>
        <div className='bottomBar'>
            <div className='bottomBarInner'>
                <div className='userNavIcon'>
                    <Link to={'/dashboardMain'} className='link'><TbSmartHome className='userIcon'/></Link>
                </div>

                <div className='userNavIcon'>
                    <Link to={'/dashboardMain'}><BiMessageSquareDots className='userIcon'/></Link>
                </div>

                <div className='userNavIcon'>
                    <Link to={'/creative-notification-all'}><RiNotificationLine className='userIcon'/></Link>
                </div>
                
                <div className='userNavIcon'>
                    <Link to={'/creativeProfile'} className='link'><LuUserCircle className='userIcon'/></Link>
                </div>
            </div>
      </div>
    </div>
  )
}

export default CreativeBottomBar
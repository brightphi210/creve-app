import React from 'react'
import { Link } from 'react-router-dom'
import { RiNotificationLine } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";
import { BiMessageSquareDots } from "react-icons/bi";
import { RiHeartLine } from "react-icons/ri";
import { IoArrowBack } from "react-icons/io5";

const BottomBar = ({openModal}) => {
  return (
    <div>
        <div className='bottomBar'>
            <div className='bottomBarInner'>
                <div className='userNavIcon'>
                <Link to={'/dashboardMain'} className='link'><TbSmartHome className='userIcon'/></Link>
                </div>

                <div className='userNavIcon'>
                <Link to={'/chats'}><BiMessageSquareDots className='userIcon'/></Link>
                {/* <p></p> */}
                </div>

                <div className='userNavIcon'>
                <Link to={'/' + 'user-notification-all'}><RiNotificationLine className='userIcon'/></Link>
                {/* <p></p> */}
                </div>
                
                <div className='userNavIcon'>
                <Link to={'/favourites'} className='link'><RiHeartLine className='userIcon'/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomBar
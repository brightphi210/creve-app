import React from 'react'
import { RiNotificationLine } from "react-icons/ri";
import imageNotificate from './images/Avatars1.png'
import BottomBar from './BottomBar';


const UserNotificationCompo = () => {
  return (
    <div className='notificationSection'>
        <div className='notifyDiv'>
            <h2>Notification</h2>
            <RiNotificationLine />
        </div>

        <div className='allNotDiv'>
            <div className='eachNotDiv'>
                <div className='eachNotDivImg'>
                    <img src={imageNotificate} alt="" />
                </div>

                <div className='eachNotDivText'>
                    <h2>We Have exciting news in web dev, explore now</h2>
                    <p>2days ago</p>
                </div>

            </div>

            <hr />

            <div className='eachNotDiv'>
                <div className='eachNotDivImg'>
                    <img src={imageNotificate} alt="" />
                </div>

                <div className='eachNotDivText'>
                    <h2>We Have exciting news in web dev, explore now</h2>
                    <p>2days ago</p>
                </div>

            </div>

            <hr />

            <div className='eachNotDiv'>
                <div className='eachNotDivImg'>
                    <img src={imageNotificate} alt="" />
                </div>

                <div className='eachNotDivText'>
                    <h2>We Have exciting news in web dev, explore now</h2>
                    <p>2days ago</p>
                </div>

            </div>

            <hr />
            
        </div>

        <BottomBar />
    </div>
  )
}

export default UserNotificationCompo
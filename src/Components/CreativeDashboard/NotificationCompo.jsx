import React from 'react'
import { RiNotificationLine } from "react-icons/ri";
import './NotificationCompo.scss';
import imageNotificate from './images/Avatars1.png'


const NotificationCompo = () => {
  return (
    <div className='notificationSection'>
        <div className='notifyDiv'>
            <h2>Notification</h2>
            <RiNotificationLine />
        </div>

        <div>
            <div>
                <div>
                    <img src={imageNotificate} alt="" />
                </div>

                <div>
                    <h2></h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotificationCompo
import React from 'react'
import avatar from './images/Avatars1.png'

import { IoCloseCircleOutline } from "react-icons/io5";
const UserNotificationModal = ({closeModal}) => {
  return (
    <div>
        <div className='navNotifyModal' onClick={closeModal}>
        <div className='navNotifyContent'>
          <div className='notDiv'>
            <h2>Notifications</h2>
            <p onClick={closeModal}><IoCloseCircleOutline /></p>
          </div>


          <div>
            <hr />
            <div className='notProf'>
              <img src={avatar} alt="" width={20}/>
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
    </div>
  )
}

export default UserNotificationModal
import React from 'react'
import './UserSettingCompo.scss'

import {Link} from 'react-router-dom'

import { FaRegTrashCan } from "react-icons/fa6";


const UserSettingCompo = () => {
  return (
    <div className='userSetting'>
        <div className='userDiv'>
            <div className='userDivEach'>
                <h2>Account Settings</h2>
                <form action="">
                    <div>
                        <p>Full Name: </p>
                        <input type="text"  placeholder='Enter your Full Name'/>
                    </div>
                    <button>Save Changes</button>
                </form>
            </div>

            {/* <div className='userDivEach'>
                <h2>Change Password</h2>
                <form action="">
                    <div>
                        <p>Current Password: </p>
                        <input type="text"  placeholder='Enter Current Password'/>
                    </div>

                    <div>
                        <p>New Password: </p>
                        <input type="text" placeholder='Enter New Password'/>
                    </div>

                    <button>Save Changes</button>
                </form>
            </div> */}

            <hr />

            <div className='userDivEach'>
                <p className='myP'>
                    Your account is currently a Client Account. 
                    Click on the button below to open a talent profile 
                    with the same account
                </p>

                <Link to={'/signupCreative'}><button className='bcome'>Become a Talent</button></Link>
            </div>

            <hr />

            <p className='deleteBtn'><FaRegTrashCan />Delete Account</p>
        </div>
    </div>
  )
}

export default UserSettingCompo

import React, { useState } from 'react'
import CreativeOnboardNav from '../../Components/CreativeOnboardComponent/CreativeOnboardNav'
import CreativeOnbardSide from '../../Components/CreativeOnboardComponent/CreativeOnbardSide'
import './CreativeOnboardProfile.scss'
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { CgProfile } from "react-icons/cg";




import prof from './images/profilePics.png'
const CreativeOnboardProfile = () => {

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    console.log('Click successfull')
  };


  return (
    <div className=''>
        <CreativeOnboardNav onclick={toggleSidebar}/>

        <div className='CreativeDetailsGenSec'>

          <p className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}><CreativeOnbardSide /></p>
          <div className='creativeDetailSec'>

          <div className='creativeIconText'>
            <CgProfile style={{fontSize : '20px'}}/>
            <h2>Personal Details</h2>
          </div>

            <div className=''>

              <form action="" className='personalDetailsForm'>

                <div>
                  <p >Display Name*</p>
                  <input type="Full" placeholder='Enter Display Name'required/>
                </div>

                <div>
                  <p >Language*</p>
                  <input type="email" placeholder='Enter Language'required/>
                </div>

                <div>
                  <p >Location*</p>
                  <input type="email" placeholder='Enter Location'required/>
                </div>


                <div>
                  <p >Whatsapp*</p>
                  <input type="number" placeholder='Enter Phone Number' required/>
                </div>


                <div>
                  <p >Bio*</p>
                  <textarea name="" placeholder='Enter short summary' required>
                    
                  </textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreativeOnboardProfile
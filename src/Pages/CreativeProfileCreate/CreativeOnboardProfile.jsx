import React, { useState } from 'react'
import CreativeOnboardNav from '../../Components/CreativeOnboardComponent/CreativeOnboardNav'
import CreativeOnbardSide from '../../Components/CreativeOnboardComponent/CreativeOnbardSide'
import { Link } from 'react-router-dom'
import './CreativeOnboardProfile.scss'




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
            <h2>Personal Details</h2>

            <div className=''>
              <p className='pp'>Profile pics*</p>

              <form action="" className='personalDetailsForm'>

                  <div className='proImageDiv'>
                      <div className='static'>
                          <img src={prof} alt="" />
                      </div>

                      <input 
                          type="file" 
                          id='image' 
                          name="profilePics" 
                          accept="image/*"
                          // onChange ={handleImageChange} 
                          hidden
                      />
                      <label className='myLabel' for="image">Choose file</label>
                  </div>


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
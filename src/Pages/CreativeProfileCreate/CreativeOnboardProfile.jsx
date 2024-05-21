import React, { useState } from 'react'
import CreativeOnboardNav from '../../Components/CreativeOnboardComponent/CreativeOnboardNav'
import CreativeOnbardSide from '../../Components/CreativeOnboardComponent/CreativeOnbardSide'
import './CreativeOnboardProfile.scss'
import { CgProfile } from "react-icons/cg";

const CreativeOnboardProfile = ({formData, setFormData, onSubmit, onChange}) => {

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    console.log('Click successfull')
  };


  return (
    <div className=''>
        <CreativeOnboardNav onclick={toggleSidebar}/>

        <div className='CreativeDetailsGenSec'>

          <div className='creativeDetailSec'>

          <div className='creativeIconText'>
            <CgProfile style={{fontSize : '20px'}}/>
            <h2>Personal Details</h2>
          </div>

            <div className=''>

              <form action="" className='personalDetailsForm'>

                <div>
                  <p >Display Name*</p>
                  <input 
                    type="text" 
                    placeholder='Enter Display Name e.g Joe Branding.'
                    name='display_name'
                    value={formData.display_name}
                    onChange={onChange}
                    required/>
                </div>


                <div>
                  <p >Phone Number*</p>
                  <input 
                    type="text" 
                    placeholder='Enter Phone Number e.g 08094422887'
                    name='phone_number'
                    value={formData.phone_number}
                    onChange={onChange}
                    required/>
                </div>

                <div>
                  <p >Language*</p>
                  <input type="text" 
                    placeholder='Enter Language e.g English'
                    name='language'
                    value={formData.language}
                    onChange={onChange}
                    required/>
                </div>

                <div>
                  <p >Location*</p>
                  <input type="text" 
                    name='location'
                    value={formData.location}
                    onChange={onChange}
                    placeholder='Enter Location e.g #64 joe avenue, Port Harcourt'
                    required/>
                </div>


                <div>
                  <p >Whatsapp Link*</p>
                  <input type="text" 
                    name='whatsapp_link'
                    value={formData.whatsapp_link}
                    onChange={onChange}
                    placeholder='Enter Whatsapp link e.g https://whatsapplink.com' 
                    required/>
                </div>


                <div>
                  <p >Bio*</p>
                  <textarea 
                    name='about'
                    value={formData.about}
                    onChange={onChange}
                    placeholder='Enter short summary' 
                    required>
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
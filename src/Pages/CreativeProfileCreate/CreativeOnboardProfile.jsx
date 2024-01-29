import React, { useState } from 'react'
import CreativeOnboardNav from '../../Components/CreativeOnboardComponent/CreativeOnboardNav'
import CreativeOnbardSide from '../../Components/CreativeOnboardComponent/CreativeOnbardSide'
import { Link } from 'react-router-dom'
import './CreativeOnboardProfile.scss'




import prof from './images/profilePics.png'
const CreativeOnboardProfile = () => {

  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };


  return (
    <div className=''>
        <CreativeOnboardNav />

        <div className='CreativeDetailsGenSec'>

          <p className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}><CreativeOnbardSide /></p>
          <div className='creativeDetailSec'>
            <h2>Personal Details</h2>

            <div className=''>
              <p className='pp'>Profile pics*</p>

              <form action="" className='personalDetailsForm'>


                <div className='profDetSec'>
                  <img src={prof} alt="" width={60}/>

                  <label class="custom-file-upload">
                    <input type="file" id="fileInput" />
                    Choose file
                  </label>
                </div>

                {/* <div id="fileName"></div> */}

                <div>
                  <p >Display Name*</p>
                  <input type="Full" placeholder='Enter Display Name'required/>
                </div>


                <div>
                  <p >Email address*</p>
                  <input type="email" placeholder='Enter your email address'required/>
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
                  <p >Short Summary*</p>
                  <textarea name="" placeholder='Enter short summary' required>
                    
                  </textarea>
                </div>

                <div className='personalDetailsBtn'>
                  <Link to={'/' + 'creativeProfileCategory'}><button>Back</button></Link>
                  <button>Next</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreativeOnboardProfile
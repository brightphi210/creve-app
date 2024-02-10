import React, { useState } from 'react'
import CreativeOnboardNav from '../../Components/CreativeOnboardComponent/CreativeOnboardNav'
import CreativeOnbardSide from '../../Components/CreativeOnboardComponent/CreativeOnbardSide'
import { Link } from 'react-router-dom'
import { IoAddOutline } from "react-icons/io5";
import './CreativeOnboardProfile.scss'




import prof from './images/profilePics.png'
const CreativeOnboardProfessional = () => {

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
            <h2>Professional Details</h2>

            <div className=''>
              {/* <p className='pp'>Summary Of Profile*</p> */}

              <form action="" className='personalDetailsForm'>


                <div>
                  <p >Summary Of Profile*</p>
                  <input type="Full" placeholder='E.g. Frontend Developer Proficient in CSS, JavaScript and React'required/>
                </div>


                <div>
                  <p >Starting Price</p>
                  <input type="email" placeholder='Enter starting price'required/>
                </div>

                <div>
                    <p >Skills*</p>
                    <p>Maximum of 10 skills</p>
                    <select >
                        <option value="digital" >Digital Skills</option>
                        <option value="nondigital" >Non-Digital Skills</option>
                    </select>
                </div>


                <div>
                    <p >Whatsapp*</p>
                    <label class="custom-file-upload2">
                        <input type="file" id="fileInput" />
                        Click to add image from your file <IoAddOutline className='addIcon'/>
                    </label>
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
                  <button>save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreativeOnboardProfessional
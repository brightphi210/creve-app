import React, { useState } from 'react'
import CreativeOnboardNav from '../../Components/CreativeOnboardComponent/CreativeOnboardNav'
import CreativeOnbardSide from '../../Components/CreativeOnboardComponent/CreativeOnbardSide'
import './CreativeOnboardProfile.scss'
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";




const CreativeOnboardProfessional = ({
  formData, 
  setFormData, 
  onSubmit, 
  onChange,
  handleImageChange,
  handleSkillChange,
  handleImageSubmit,
  handleSkillSubmit,
  handleRemoveImage,
  handleRemoveSkill,
  selectedImage,
  imageArray,
  selectedSkill,
  skillsArray,
  handleSubmit2,
  handleInputChange,
  inputData
}) => {

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    console.log('Click successfull')
  };


  // console.log(skilsArray)
  



  // console.log(imageArray)
  return (
    <div className=''>
        <CreativeOnboardNav onclick={toggleSidebar}/>

        <div className='CreativeDetailsGenSec'>

          <div className='creativeDetailSec'>


            <div className='creativeIconText' >
              <MdOutlineWorkspacePremium style={{fontSize : '20px', padding : '0'}}/>
              <h2>Professional Details</h2>
            </div>

            <div className=''>
              <form action="" className='personalDetailsForm'>


                <div>
                  <p >Summary Of Profile*</p>
                  <input type="Full" 
                    placeholder='E.g. Frontend Developer with  React'
                    name='summary_of_profile'
                    value={formData.summary_of_profile}
                    onChange={onChange}
                    required/>
                </div>
                

                <div>
                  <p >Starting Price</p>
                  <input type="number" 
                    placeholder='Enter starting price'
                    name='starting_price'
                    value={formData.starting_price}
                    onChange={onChange}
                    required/>
                </div>


                <div>
                  <p >Website Link</p>
                  <input type="text" 
                    placeholder='Enter Website Link' 
                    name='website_link'
                    value={formData.website_link}
                    onChange={onChange}
                    required/>
                </div>



                <div>
                  <p >Resume Link</p>
                  <input 
                    type="text" 
                    placeholder='Enter Resume Link' 
                    name='resume_link'
                    value={formData.resume_link}
                    onChange={onChange}
                    required/>
                </div>
              </form>
            </div>
          </div>


        </div>
    </div>
  )
}

export default CreativeOnboardProfessional
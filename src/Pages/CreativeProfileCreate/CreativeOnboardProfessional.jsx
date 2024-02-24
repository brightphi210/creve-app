import React, { useState } from 'react'
import CreativeOnboardNav from '../../Components/CreativeOnboardComponent/CreativeOnboardNav'
import CreativeOnbardSide from '../../Components/CreativeOnboardComponent/CreativeOnbardSide'
import './CreativeOnboardProfile.scss'
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdDelete } from "react-icons/md";




const CreativeOnboardProfessional = () => {

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    console.log('Click successfull')
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageArray, setImageArray] = useState([]);

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skilsArray, setSkillsArray] = useState([]); 


  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
  };


  const handleSkillChange = (e) => {
    const skill = e.target.value;
    setSelectedSkill(skill);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setImageArray((prevArray) => [...prevArray, selectedImage]);
    setSelectedImage(null);
  };


  const handleSkillSubmit = (e) => {
    e.preventDefault();
    setSkillsArray((prevArray) => [...prevArray, selectedSkill]);
    setSelectedSkill(null);
  };


  const handleRemoveImage = (index) => {
    const newArray = [...imageArray];
    newArray.splice(index, 1);
    setImageArray(newArray);
  };



  // console.log(imageArray)
  return (
    <div className=''>
        <CreativeOnboardNav onclick={toggleSidebar}/>

        <div className='CreativeDetailsGenSec'>

          <p className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}><CreativeOnbardSide /></p>
          <div className='creativeDetailSec'>


            <div className='creativeIconText' >
              <MdOutlineWorkspacePremium style={{fontSize : '20px', padding : '0'}}/>
              <h2>Professional Details</h2>
            </div>

            <div className=''>
              <form action="" className='personalDetailsForm'>


                <div>
                  <p >Summary Of Profile*</p>
                  <input type="Full" placeholder='E.g. Frontend Developer with  React'required/>
                </div>


                <div>
                  <p >Starting Price</p>
                  <input type="email" placeholder='Enter starting price'required/>
                </div>

                <div>
                    <div style={{position : 'relative'}}>
                      <p >Skills* <span style={{color : 'gray', fontStyle : 'italic'}}>Maximum of 10 skills</span></p>
                      <input 
                        type="Full" 
                        placeholder='E.g. Java'
                        required
                        value={selectedSkill}
                        onChange={handleSkillChange}
                      />
                      <button className='skillBtn' onClick={handleSkillSubmit}>+</button>
                    </div>

                    <span>{console.log(skilsArray)}</span>
                </div>


                <div className='uploadImage'>
                    <p >Gallery* <span style={{color : 'gray', fontStyle : 'italic'}}>Maximum of 10 skills</span></p>

                    <div>
                      <input type="file" id="" onChange={handleImageChange} />   
                      <button onClick={handleSubmit} disabled={selectedImage === null} style={{fontSize : '20px', padding : '10px'}}>Add</button>
                    </div>
                </div>


                <div className='imageShow'>
                
                  {
                    imageArray.map((myImage, index) => (
                      <div key={index} className=''>
                        <div>
                          <img src={URL.createObjectURL(myImage)} alt={`Image ${index}`} />
                          <MdDelete onClick={() => handleRemoveImage(index)} color='orange' />
                        </div>
                        {console.log('This is my Image', myImage.name)}
                      </div>
                    ))
                  }
                  
                </div>


                <div>
                  <p >Website Link</p>
                  <input type="text" placeholder='Enter Website Link' required/>
                </div>



                <div>
                  <p >Resume Link</p>
                  <input type="text" placeholder='Enter Resume Link' required/>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreativeOnboardProfessional
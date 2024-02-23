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

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageArray, setImageArray] = useState([]);
  const [imageError, setImageError] = useState('')


  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setImageArray((prevArray) => [...prevArray, selectedImage]);
    setSelectedImage(null);
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
                    <p >Gallery*</p>
                    <p>Maximum of 10 skills</p>
                        <input type="file" id="" onChange={handleImageChange} />                        
                    <button onClick={handleSubmit} disabled={selectedImage === null} style={{fontSize : '20px', padding : '10px'}}>Add</button>
                </div>

                {
                  imageArray.map((myImage, index) => (
                    <div key={index}>
                      <img src={URL.createObjectURL(myImage)} alt="" width={50} /> 
                      <button onClick={handleRemoveImage}>remove</button>
                      {console.log('This is my Image', myImage.name)}
                    </div>
                  ))
                }

                <p>{imageError}</p>


                <div>
                  <p >Website Link</p>
                  <input type="text" placeholder='Enter Website Link' required/>
                </div>



                <div>
                  <p >Resume Link</p>
                  <input type="number" placeholder='Enter Resume Link' required/>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreativeOnboardProfessional
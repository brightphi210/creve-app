import React, { useState } from 'react'
import './CreativeCoverPics.scss'
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaImage } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from '../../api/api';
import {useNavigate} from 'react-router-dom'

const CreativeCoverPics = ({closeCoverModal, showCoverModal}) => {

    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
      setSidebarVisible(!isSidebarVisible);
      console.log('Click successfull')
    };


    
    const [image, setImage] = useState(null)
    const [cover_image, setCover_image] = useState(null)
    const [fileName, setFileName] = useState("No Selected File Name")
    const [isLoading, setIsLoading] = useState(false)
    const [messages, setSuccessMessage] = useState('')

    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

    const decoded = jwtDecode(authTokens.access);
    const profileUrl = `${BASE_URL}/creativeprofile/${decoded.profile_id}/`


    let navigate = useNavigate()


    const handleUpdateProfilePic = async (e) => {
        e.preventDefault();
        setIsLoading(true)
  
      const formProfileData = new FormData();
      formProfileData.append('cover_image', cover_image);
      try {
        const response = await fetch(profileUrl, {
          method: 'PATCH',
          headers: {
            "Authorization": `Bearer ${authTokens.access}`
          },
          body: formProfileData,
  
        });


        setIsLoading(true);
  
        if (response.ok || response.status === 200 ) {
          setSuccessMessage('Profile Successfully Updated')
          navigate('/' + 'creativeProfile')
          setIsLoading(false);
          
  
  
          console.log('Profile picture updated!');
          
        } else {
          console.error('Failed to update profile picture');
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Error updating profile picture:', error);
        setIsLoading(false)
      }
    };


  return (

    <>
    {showCoverModal &&
        <div className='coverImageDivMain'>


            <div className=' coverImageDiv'>
                
                <div className='coverDiv'>
                    <h2> Add Cover Pics </h2>
                    <p onClick={closeCoverModal}><IoCloseCircleOutline /></p>
                </div>

                <form action=""
                    onClick={()=> document.querySelector(".input-field").click()}
                >
                    <input type="file" accept='image/*' className='input-field' hidden
                        onChange={({target: {files}}) =>{
                            files[0] && setFileName(files[0].name)
                            if(files){
                                setImage(URL.createObjectURL(files[0]))
                                setCover_image(files[0])
                            }
                        }}
                    />

                    {image ? 
                        <img src={image} alt=''/> : 
                        
                        <div className='uploadIconTextDiv'>
                            <p className='textIcon'><AiOutlineCloudUpload /></p>
                            <p>Upload Cover Image </p>
                        </div>
                    }
                </form>

                <div className='deleteImageDivMain'>
                    <p style={{fontSize : 15}}><FaImage /></p>

                    <div className='deleteImageDiv'>
                        <p>{fileName}</p>
                        <MdDelete onClick={()=>{
                            setFileName("No Selected File Name")
                            setImage(null)
                        }} style={{fontSize : 15, color : 'red', cursor : 'pointer'}}/>
                    </div>
                </div>


                <button className='myCreativeCover' onClick={handleUpdateProfilePic}>{isLoading === false ? "Save" : <p>Loading . . .</p>}</button>
            </div>

        </div>
    }
  </>
  )
}

export default CreativeCoverPics
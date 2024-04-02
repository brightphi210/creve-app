import React, { useState } from 'react'
import CreativeOnboardNav from '../../Components/CreativeOnboardComponent/CreativeOnboardNav'
import CreativeOnbardSide from '../../Components/CreativeOnboardComponent/CreativeOnbardSide';
import './CreativeCoverPics.scss'
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaImage } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const CreativeCoverPics = () => {

    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
      setSidebarVisible(!isSidebarVisible);
      console.log('Click successfull')
    };

    

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No Selected File Name")
  return (
    <div>

        <CreativeOnboardNav onclick={toggleSidebar}/>
        <div className='CreativeDetailsGenSec'>
            <p className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}><CreativeOnbardSide /></p>

            <div className='creativeDetailSec coverImageDiv'>
                <h2>Cover Pics</h2>

                <form action=""
                    onClick={()=> document.querySelector(".input-field").click()}
                >
                    <input type="file" accept='image/*' className='input-field' hidden
                        onChange={({target: {files}}) =>{
                            files[0] && setFileName(files[0].name)
                            if(files){
                                setImage(URL.createObjectURL(files[0]))
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
                    <p style={{fontSize : 20}}><FaImage /></p>

                    <div className='deleteImageDiv'>
                        <p>{fileName}</p>
                        <MdDelete onClick={()=>{
                            setFileName("No Selected File Name")
                            setImage(null)
                        }} style={{fontSize : 15, color : 'red', cursor : 'pointer'}}/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CreativeCoverPics
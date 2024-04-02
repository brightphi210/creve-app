import React, { useState } from 'react'
import './CreativeCoverPics.scss'
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaImage } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";


const CreativeCoverPics = ({closeCoverModal, showCoverModal}) => {

    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
      setSidebarVisible(!isSidebarVisible);
      console.log('Click successfull')
    };

    

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No Selected File Name")
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

                <button className='myCreativeCover'>Save</button>
            </div>

        </div>
    }
  </>
  )
}

export default CreativeCoverPics
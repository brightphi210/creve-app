import React, { useState } from 'react'
import profImage from './images/Avatars1.png'
import map from './images/map.png'
import mapImage from './images/bigImage.png'

import './CreativeProfileSetting.scss'
import { FaEye } from "react-icons/fa6";
import { HiStar } from "react-icons/hi2";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CreativeProfileSetting = () => {


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  const [show1, setShow1] = useState(false);

  const closeModal1 = () =>{
    setShow1(false);
  }

  const toggleShow = () =>{
    setShow1(!show1);
  }


  const [show2, setShow2] = useState(false);
  const openShow2 = () =>{setShow2(!show2)}
  const closeShow2 = () =>{setShow2(false)}

  return (
    <div className='creativeProfileSettingSection'>
      <div className='creativeProfileSectionOne'>

        <div className='creativeEdit'>
          <h2>My Profile</h2>
          <button><span><CiEdit /></span>Edit Profile</button>
        </div>

        <div className='creativeProfilePics'>
          <img src={profImage}alt="" />
          <div>
            <div className='creativeVerifiedDiv'>
              <h2>Cassie Daniels </h2>
              <span><RiVerifiedBadgeFill /><RiVerifiedBadgeFill />verified</span>
            </div>
            <div>
              <p><HiStar />4.8/5.0 (12 reviews)</p>
              <p className='creativeLocate'><HiLocationMarker /> Port Harcourt, Nigeria</p>
            </div>
          </div>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>

      </div>

      <div className='creativeSideBar'>
        <h2>Profile Completion</h2>
        <div>
          <h2>Profile To-Do</h2>
          <h3>Click on each to To-Do to complete</h3>
          <p>Frequently Asked Question</p>
        </div>
      </div>
    </div>
  )
}

export default CreativeProfileSetting

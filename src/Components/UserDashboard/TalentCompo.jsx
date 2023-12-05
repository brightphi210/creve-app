import React from 'react'
import './TalentCompo.scss'
import myImage from './images/talentImg.png'

import { PiMapPinLineFill } from "react-icons/pi";



const TalentCompo = () => {
  return (
    <div>
        <div className='talentSection'>

            <div className='talentExplore'>
                <h2>Explore the Best Talents <br /> around Africa</h2>
            </div>

            <div className='talentImgDiv'>
                <img src={myImage} alt="" />
            </div>

        </div>

        <div className='findMainSection'>
            <div className='findDiv'>
                <p>Find Talents by Location <PiMapPinLineFill className='mapIcon'/></p>
                <button>Search </button>
            </div>

            <div>
                <p>Recently Viewed</p>
                <div></div>
            </div>
        </div>


    </div>
  )
}

export default TalentCompo
import React from 'react'
import './SectionOne.scss'

import { RiSearch2Line } from "react-icons/ri";

import smallImg from './Images/back2.png'

const SectionOne = () => {
  return (
    <div className='sectionOne'>
        <div className='sectionSubDiv'>
            <h2>Discover the Best <br /> Talents Across Africa</h2>
            <p className='pOne'>
                We Provide the best talents on all fields. Whether it’s digital skilled or </p>
            <div className='searchDiv'>
                <RiSearch2Line className='searchIcon'/>
                <input type="text" placeholder='Search for any service...'/>
                <button>Search</button>
            </div>

            <div className='popularDiv'>
                <p className='Two'>Popular Service:</p>
                <button>Frontend Development</button>
                <button>UI/UX Design</button>
                <button>Shoe Making</button>
                <button>Fashion Design</button>
            </div>
        </div>

        <div className='smallImg'>
            <img src={smallImg} alt="" />
        </div>
    </div>
  )
}

export default SectionOne
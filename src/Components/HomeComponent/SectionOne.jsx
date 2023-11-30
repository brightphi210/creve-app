import React from 'react'
import './SectionOne.scss'
import { RiSearch2Line } from "react-icons/ri";

const SectionOne = () => {
  return (
    <div className='sectionOne'>
        <div className='sectionSubDiv'>
            <h2>Discover the Best Talents <br /> Across Africa</h2>
            <p className='pOne'>
                We Provide the best talents on all fields. Whether it’s digital skilled or 
                <br /> un-digital skilled, you are in the right place. 
            </p>
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
    </div>
  )
}

export default SectionOne
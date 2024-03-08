import React from 'react'
import './MapSearched.scss'

import map2 from './images/map2.png'

import { IoArrowBackOutline } from "react-icons/io5";
const MapSearched = ({closeModal}) => {

  return (
    <div className='mapModal'>

        <div className='mapModalContent'>
        <p className='creativeViewcloseBtn' onClick={closeModal}><IoArrowBackOutline /></p>
            <div className='mapDivFlex'>
                <div>
                    <img src={map2} alt="" />
                </div>

                <div className='mapDivInputs'>
                    <h2>Search Talent by Location</h2>
                    <p>You can manually enter the location or choose from the map</p>

                    <div className='mapDivInputsLoca'>
                        <p>Enter Location</p>
                        <input type="text" placeholder='Enter Location'/>
                    </div>

                    <div className='mapDivInputsFilt'>
                        <p>Other Filters</p>

                        <select name="" id="">
                            <option value="">Select</option>
                            <option value="">Digital</option>
                            <option value="">Non-Digital</option>
                        </select>

                        <select name="" id="">
                            <option value="">Status</option>
                            <option value="">Verified</option>
                            <option value="">Unverified</option>
                        </select>
                        
                        <select name="" id="">
                            <option value="">Work type</option>
                            <option value="">Remote</option>
                            <option value="">Hybrid</option>
                            <option value="">Onsite</option>
                        </select>
                    </div>
                    <button>Search</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MapSearched
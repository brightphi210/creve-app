import React from 'react'
import './MapSearched.scss'

import map2 from './images/map2.png'

import { IoArrowBackOutline } from "react-icons/io5";
import GoogleMapReact from 'google-map-react';
const MapSearched = ({closeModal}) => {


    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    
  return (
    <div className='mapModal'>

        <div className='mapModalContent'>
        <p className='creativeViewcloseBtn' onClick={closeModal}><IoArrowBackOutline /></p>
            <div className='mapDivFlex'>
                <div className='mapDivImage'>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyB-PKFDC-s-6HljidZb4us2ORv6tF9n3W8" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                    </GoogleMapReact>
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
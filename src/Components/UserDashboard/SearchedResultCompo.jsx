import React, { useState } from 'react'
import './SearchedResultCompo.scss'

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

import { LuSearch } from "react-icons/lu";
import avatar from './images/Avatars1.png'


import { MdOutlineVerified } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import CreativeProfileView from './CreativeProfileView';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi";

import { FaRegHandPointer } from "react-icons/fa";



const SearchedResultCompo = ({searchResults, query}) => {

    const [show, setShow] = useState(false);

    const openModal =()=>{
      setShow(true);
    }
  
    const closeModal =()=>{
      setShow(false);
    }

    const navigate = useNavigate()
    const goBack = () =>{
      navigate(-1);
    }

  return (
    
    <div>
        <div className='searchedResultDiv'>
        <p className='creativeViewcloseBtn' onClick={goBack}><HiOutlineArrowLeft /></p>

            <h2>Search Result for: {query}</h2>
            <div className='searchedBtnsDiv'>
                <p>Filter Option</p>
                <div className='searchedSpanDiv'>
                    <span>Location <MdKeyboardArrowDown /></span>
                    <span>Verification Status <MdKeyboardArrowDown /></span>
                    <span>Starting Price <MdKeyboardArrowDown /></span>
                    <span>Work type <MdKeyboardArrowDown /></span>
                </div>
            </div>

            <div className='resultsDiv'>


                {searchResults.length === 0 ? 
                
                (
                    <div className='searchTalentAbove'>
                        <p><LuSearch /></p>
                        <span>Search for talent above <FaRegHandPointer /></span>
                    </div>
                ) : 
                
                (
                <>
                    <p>Creve Recommended</p>

                    <div className='searchedImagecard'>
                        {searchResults.map((result)=>(
                        <div className='searchedCardDiv' onClick={openModal}>
                            <div className='imgCard'><img src={result.cover_image} alt="" /></div>
                            <div className='searchedCardProfileDiv'>
                                <div className='cardProfileDiv2'>
                                    <div className='searchedCardProfileDivImg'>
                                        <img src={avatar} alt="" />
                                        <div>
                                            <p>{result.display_name}</p>
                                            <p>4.0 <IoIosStar /> </p>
                                        </div>
                                    </div>

                                    <div className='searchedCardProBtn2'>
                                        <button><MdOutlineVerified/> {result.status}</button>
                                    </div>
                                </div>

                                <div>
                                    <h3>{result.summary_of_profile}</h3>
                                    <p>#{result.starting_price}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

                </>
                
                )}
            </div>

            {searchResults !== 0 && (
                <div className='searchedArror'>
                    <div className='searchArrorDiv first'>
                        <MdOutlineArrowBackIos />
                        <p>Previous</p>
                    </div>
                    <div className='searchArrorDiv'>
                        <p>Next</p>
                        <MdOutlineArrowForwardIos />
                    </div>
                </div>
            )}

        </div>

        {show && <CreativeProfileView  closeModal={closeModal}/>}
        
    </div>
  )
}

export default SearchedResultCompo
import React, { useState } from 'react'
import './SearchedResultCompo.scss'

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

import imageCard from './images/talentcardImg.png'
import avatar from './images/Avatars1.png'


import { MdOutlineVerified } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import CreativeProfileView from './CreativeProfileView';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi";



const SearchedResultCompo = () => {

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

            <h2>Search Result for Hair Dresser</h2>
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
                <p>Creve Recommended</p>
                <div className='searchedImagecard'>

                    <div className='searchedCardDiv' onClick={openModal}>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='searchedCardProfileDiv'>
                            <div className='cardProfileDiv2'>
                                <div className='searchedCardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0 <IoIosStar /> </p>
                                    </div>
                                </div>

                                <div className='searchedCardProBtn2'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS, Javasc...</h3>
                                <p>#20,000</p>
                            </div>
                        </div>
                    </div>


                    <div className='searchedCardDiv' onClick={openModal}>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='searchedCardProfileDiv'>
                            <div className='searchedCardProfileDiv2'>
                                <div className='searchedCardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0 <IoIosStar /></p>
                                    </div>
                                </div>

                                <div className='searchedCardProBtn'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS, Javasc...</h3>
                                <p>#20,000</p>
                            </div>
                        </div>
                    </div>

                    <div className='searchedCardDiv' onClick={openModal}>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='searchedCardProfileDiv'>
                            <div className='searchedCardProfileDiv2'>
                                <div className='searchedCardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0 <IoIosStar /></p>
                                    </div>
                                </div>

                                <div className='searchedCardProBtn2'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS, Javasc...</h3>
                                <p>#20,000</p>
                            </div>
                        </div>
                    </div>

                    <div className='searchedCardDiv' onClick={openModal}>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='searchedCardProfileDiv'>
                            <div className='searchedCardProfileDiv2'>
                                <div className='cardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p className='proRating'>4.0 <IoIosStar /></p>
                                    </div>
                                </div>

                                <div className='cardProBtn'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS, Javasc...</h3>
                                <p>#20,000</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='searchedImagecard'>

                    <div className='searchedCardDiv' onClick={openModal}>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='searchedCardProfileDiv'>
                            <div className='cardProfileDiv2'>
                                <div className='searchedCardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0 <IoIosStar /> </p>
                                    </div>
                                </div>

                                <div className='searchedCardProBtn2'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS, Javasc...</h3>
                                <p>#20,000</p>
                            </div>
                        </div>
                    </div>


                    <div className='searchedCardDiv' onClick={openModal}>
                    <div className='imgCard'><img src={imageCard} alt="" /></div>
                    <div className='searchedCardProfileDiv'>
                    <div className='searchedCardProfileDiv2'>
                        <div className='searchedCardProfileDivImg'>
                            <img src={avatar} alt="" />
                            <div>
                                <p>Cassie Daniels</p>
                                <p>4.0 <IoIosStar /></p>
                            </div>
                        </div>

                        <div className='searchedCardProBtn'>
                            <button><MdOutlineVerified/> Verified</button>
                        </div>
                    </div>

                    <div>
                        <h3>Frontend developer proficient in CSS, Javasc...</h3>
                        <p>#20,000</p>
                    </div>
                    </div>
                    </div>

                    <div className='searchedCardDiv' onClick={openModal}>
                    <div className='imgCard'><img src={imageCard} alt="" /></div>
                    <div className='searchedCardProfileDiv'>
                    <div className='searchedCardProfileDiv2'>
                        <div className='searchedCardProfileDivImg'>
                            <img src={avatar} alt="" />
                            <div>
                                <p>Cassie Daniels</p>
                                <p>4.0 <IoIosStar /></p>
                            </div>
                        </div>

                        <div className='searchedCardProBtn2'>
                            <button><MdOutlineVerified/> Verified</button>
                        </div>
                    </div>

                    <div>
                        <h3>Frontend developer proficient in CSS, Javasc...</h3>
                        <p>#20,000</p>
                    </div>
                    </div>
                    </div>

                    <div className='searchedCardDiv' onClick={openModal}>
                    <div className='imgCard'><img src={imageCard} alt="" /></div>
                    <div className='searchedCardProfileDiv'>
                    <div className='searchedCardProfileDiv2'>
                        <div className='cardProfileDivImg'>
                            <img src={avatar} alt="" />
                            <div>
                                <p>Cassie Daniels</p>
                                <p className='proRating'>4.0 <IoIosStar /></p>
                            </div>
                        </div>

                        <div className='cardProBtn'>
                            <button><MdOutlineVerified/> Verified</button>
                        </div>
                    </div>

                    <div>
                        <h3>Frontend developer proficient in CSS, Javasc...</h3>
                        <p>#20,000</p>
                    </div>
                    </div>
                    </div>

                </div>
            </div>

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
        </div>

        {show && <CreativeProfileView  closeModal={closeModal}/>}
        
    </div>
  )
}

export default SearchedResultCompo
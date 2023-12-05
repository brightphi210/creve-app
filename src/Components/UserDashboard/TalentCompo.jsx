import React from 'react'
import './TalentCompo.scss'


import myImage from './images/talentImg.png'
import imageCard from './images/talentcardImg.png'
import avatar from './images/Avatars1.png'


import { MdOutlineVerified } from "react-icons/md";
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

            <div className='imageSectionCard'>
                <p>Recently Viewed</p>

                <div className='imagecard'>


                <div className='cardDiv'>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='cardProfileDiv'>
                            <div className='cardProfileDiv2'>
                                <div className='cardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0</p>
                                    </div>
                                </div>

                                <div className='cardProBtn2'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS, Javasc...</h3>
                                <p>From #20,000</p>
                            </div>
                        </div>
                    </div>


                    <div className='cardDiv'>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='cardProfileDiv'>
                            <div className='cardProfileDiv2'>
                                <div className='cardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0</p>
                                    </div>
                                </div>

                                <div className='cardProBtn'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS, Javasc...</h3>
                                <p>From #20,000</p>
                            </div>
                        </div>
                    </div>



                    <div className='cardDiv'>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='cardProfileDiv'>
                            <div className='cardProfileDiv2'>
                                <div className='cardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0</p>
                                    </div>
                                </div>

                                <div className='cardProBtn2'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS, Javasc...</h3>
                                <p>From #20,000</p>
                            </div>
                        </div>
                    </div>



                    <div className='cardDiv'>
                        <div className='imgCard'><img src={imageCard} alt="" /></div>
                        <div className='cardProfileDiv'>
                            <div className='cardProfileDiv2'>
                                <div className='cardProfileDivImg'>
                                    <img src={avatar} alt="" />
                                    <div>
                                        <p>Cassie Daniels</p>
                                        <p>4.0</p>
                                    </div>
                                </div>

                                <div className='cardProBtn'>
                                    <button><MdOutlineVerified/> Verified</button>
                                </div>
                            </div>

                            <div>
                                <h3>Frontend developer proficient in CSS, Javasc...</h3>
                                <p>From #20,000</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>
  )
}

export default TalentCompo
import React from 'react'
import './SectionThree.scss'

import {Link} from 'react-router-dom'

import icon1 from './Images/icons (1).png'
import icon2 from './Images/icons (2).png'
import icon3 from './Images/icons (3).png'
import becomeImg from './Images/becomeImg.png'

const SectionThree = () => {
  return (
    <div className='sectionThree'>
        <h2>How Creve Works</h2>
        <div className='sectionThreeFlex'>
            <div className='secThreeDiv'>
                <img src={icon2} alt="" />
                <div>
                    <h3>Choose a perfect Talent</h3>
                    <p>We Provide the best talents on all kinds of talent. 
                        Whether it’s skilled or unskilled, you are in the right place. 
                    </p>
                </div>
            </div>

            <div className='secThreeDiv'>
                <img src={icon3} alt="" />
                <div>
                    <h3>Drop a message</h3>
                    <p>We Provide the best talents on all kinds of talent. 
                        Whether it’s skilled or unskilled, you are in the right place. 
                    </p>
                </div>
            </div>


            <div className='secThreeDiv'>
                <img src={icon1} alt="" />
                <div>
                    <h3>Pay when you are satisfied</h3>
                    <p>We Provide the best talents on all kinds of talent. 
                        Whether it’s skilled or unskilled, you are in the right place. 
                    </p>
                </div>
            </div>
        </div>

        <div className='becomeDiv'>
            <div>
                <h3>Become a Creve Creative</h3>
                <p>
                    Showcase Your Skills and Thrive by Joining Our 
                    Community of  Talented Professionals
                </p>
                
                <Link to={'/signupCreative'}><button>Apply as a Creative</button></Link>
            </div>

            <div className='becomeImgDiv'>
                <img src={becomeImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SectionThree
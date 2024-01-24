import React from 'react'
import rate1 from './rate1.png'
import rate2 from './rate2.png'
import rate3 from './rate3.png'

import './CreativeOnboardSide.scss'

const CreativeOnbardSide = () => {
  return (
    <div>
        <div className='creativeSide'>
            <h2 className='createH2Text'>Create a Talent profile</h2>

            <div>
                <p class="container">
                    Choose Category
                    <input type="radio" checked="checked" name="radio" />
                    <span class="checkmark"></span>
                </p>

                <p class="container">
                    Personal Details
                    <input type="radio" checked name="radio" />
                    <span class="checkmark"></span>
                </p>

                <p class="container">
                    Professional Details
                    <input type="radio" checked name="radio" />
                    <span class="checkmark"></span>
                </p>
            </div>
            

            <div className='completeRate'>
                <h2>Profile Completion</h2>

                <div>
                    <img src={rate1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreativeOnbardSide
import React from 'react'
import sev5 from './images/sev5.png'
import sev6 from './images/sev6.png'
import sev7 from './images/sev7.png'
import sev8 from './images/sev8.png'
import sev9 from './images/sev9.png'

const DigitalCategory = () => {
  return (
    <div className='DigitalSection'>
        <h2>Digital Skills</h2>
        <div className='DigitalDivFlex'>
            <div className='DigImageDiv'>
                <img src={sev9} alt="" />
                <p>Backend Development</p>
            </div>

            <div className='DigImageDiv'>
                <img src={sev9} alt="" />
                <p>Mobile Development</p>
            </div>

            <div className='DigImageDiv'>
                <img src={sev6} alt="" />
                <p>UI/UX Design</p>
            </div>

            <div className='DigImageDiv'>
                <img src={sev5} alt="" />
                <p>Branding and Printing</p>
            </div>


            <div className='DigImageDiv'>
                <img src={sev8} alt="" />
                <p>Graphic Design</p>
            </div>

            <div className='DigImageDiv'>
                <img src={sev7} alt="" />
                <p>Content Creation</p>
            </div>


            <div className='DigImageDiv'>
                <img src={sev7} alt="" />
                <p>Frontend Development</p>
            </div>
        </div>
    </div>
  )
}

export default DigitalCategory
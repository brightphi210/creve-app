import React from 'react'
import seva from './images/seva.png'
import sevb from './images/sevb.png'
import sevc from './images/sevc.png'
import sevd from './images/sevd.png'
import seve from './images/seve.png'
import sevf from './images/sevf.png'

const NonDigitalCategory = () => {
    return (
        <div className='DigitalSection'>
            <h2>Digital Skills</h2>
            <div className='DigitalDivFlex'>
                <div className='DigImageDiv'>
                    <img src={seva} alt="" />
                    <p>Backend Development</p>
                </div>
    
                <div className='DigImageDiv'>
                    <img src={sevb} alt="" />
                    <p>Mobile Development</p>
                </div>
    
                <div className='DigImageDiv'>
                    <img src={sevc} alt="" />
                    <p>UI/UX Design</p>
                </div>
    
                <div className='DigImageDiv'>
                    <img src={sevd} alt="" />
                    <p>Branding and Printing</p>
                </div>
    
    
                <div className='DigImageDiv'>
                    <img src={seve} alt="" />
                    <p>Graphic Design</p>
                </div>
    
                <div className='DigImageDiv'>
                    <img src={sevf} alt="" />
                    <p>Content Creation</p>
                </div>
    
            </div>
        </div>
      )
}

export default NonDigitalCategory
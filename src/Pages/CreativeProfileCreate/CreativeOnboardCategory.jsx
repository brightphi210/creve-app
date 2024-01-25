import React, { useState } from 'react'
import CreativeOnboardNav from '../../Components/CreativeOnboardComponent/CreativeOnboardNav'
import CreativeOnbardSide from '../../Components/CreativeOnboardComponent/CreativeOnbardSide'
import './CreativeOnboardCategory.scss'

import one from './images/sev5.png'
import one1 from './images/sev9.png'
import one2 from './images/sev6.png'
import one3 from './images/sev8.png'
import one4 from './images/sev7.png'
import one5 from './images/img10.png'
import one6 from './images/img11.png'

import non1 from './images/s (1).png'
import non2 from './images/s (2).png'
import non3 from './images/s (3).png'
import non4 from './images/s (4).png'
import non5 from './images/s (5).png'
import non6 from './images/s (6).png'
import non7 from './images/seve.png'
import non8 from './images/s (7).png'
import non9 from './images/s (8).png'
import non10 from './images/s (9).png'

const CreativeOnboardCategory = () => {

    const [selectedOption, setSelectedOption] = useState('digital');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  return (
    <div>
        <CreativeOnboardNav />

        <div className='CreativeCatSection'>
            <CreativeOnbardSide />

            <div className='CreativeCatpart'>
                <h2>Choose a Category</h2>

                <div className='selectCat'>
                    <p>Category Type</p>
                    <select  value={selectedOption} onChange={handleOptionChange}>
                        <option value="digital" >Digital Skills</option>
                        <option value="nondigital" >Non-Digital Skills</option>
                    </select>
                </div>

                <div className='catSec'>
                    <h3>Choose Category</h3>

                    {selectedOption === 'digital' && (
                        <div className='catSecDiv'>
                            <div>
                                <img src={one1} alt="" />
                                <p>Backend Development</p>
                            </div>
                            <div>
                                <img src={one5} alt="" />
                                <p>Mobile Development</p>
                            </div>
                            <div>
                                <img src={one2} alt="" />
                                <p>UI/UX Design</p>
                            </div>
                            <div>
                                <img src={one} alt="" />
                                <p>Branding and Printing</p>
                            </div>
                            <div>
                                <img src={one3} alt="" />
                                <p>Graphic Design</p>
                            </div>
    
                            <div>
                                <img src={one4} alt="" />
                                <p>Content Creation</p>
                            </div>
    
                            <div>
                                <img src={one6} alt="" />
                                <p>Frontend Development</p>
                            </div>
                        </div>
                    )}


                    {selectedOption === 'nondigital' && (
                        <div className='catSecDiv'>
                            <div>
                                <img src={non1} alt="" />
                                <p>Plumber</p>
                            </div>
                            <div>
                                <img src={non6} alt="" />
                                <p>Civil Engineering</p>
                            </div>
                            <div>
                                <img src={non2} alt="" />
                                <p>Catering</p>
                            </div>
                            <div>
                                <img src={non5} alt="" />
                                <p>Hair Stylist</p>
                            </div>

                            <div>
                                <img src={non7} alt="" />
                                <p>Electronic/Repair</p>
                            </div>
    
                            <div>
                                <img src={non3} alt="" />
                                <p>Furniture</p>
                            </div>

                            <div>
                                <img src={non8} alt="" />
                                <p>Cobbling</p>
                            </div>

                            <div>
                                <img src={non10} alt="" />
                                <p>Fashion Design</p>
                            </div>

                            <div>
                                <img src={non9} alt="" />
                                <p>Mechanic</p>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </div>
    </div>
  )
}

export default CreativeOnboardCategory
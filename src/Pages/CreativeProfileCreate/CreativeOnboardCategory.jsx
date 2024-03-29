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
import one7 from './images/s (12).png'

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

import { Link } from 'react-router-dom'

const CreativeOnboardCategory = () => {

    const [selectedOption, setSelectedOption] = useState('digital');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };


    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
      setSidebarVisible(!isSidebarVisible);
      console.log('Click successfull')
    };





    // {
    //     "id": 7,
    //     "skills": [],
    //     "gallery": {
    //         "images": null
    //     },
    //     "questions": [],
    //     "work_type": [],
    //     "work_schedule": [],
    //     "user": "1e53429f-3426-4091-b22e-25802a2c1794",
    //     "digital_skills": "BackendDevelopment",
    //     "summary_of_profile": "I Am Emeka Backend Developer",
    //     "starting_price": 2000,
    //     "nondigital_skills": "",
    //     "display_name": "Michael",
    //     "category": "DigitalSkills",
    //     "profile_pics": null,
    //     "location": "Sagbama",
    //     "language": "Hausa",
    //     "about": "I am Emeka, this is my about page",
    //     "website_link": "",
    //     "resume_link": "",
    //     "linked_in_url": "",
    //     "facebook_url": "",
    //     "x_url": "",
    //     "instagram_url": "",
    //     "github_url": "",
    //     "behance_url": "",
    //     "medium_url": ""
    // }
    
  return (
    <div>
        <CreativeOnboardNav onclick={toggleSidebar}/>

        <div className='CreativeCatSection'>
        <p className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}><CreativeOnbardSide /></p>

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

                            <Link to={'/creative-onboard-all'}>
                            <div>
                                <img src={one1} alt="" />
                                <p>Backend Dev</p>
                            </div>
                            </Link>

                            <div>
                                <img src={one5} alt="" />
                                <p>Mobile Dev</p>
                            </div>
                            <div>
                                <img src={one2} alt="" />
                                <p>UI/UX Design</p>
                            </div>
                            <div>
                                <img src={one} alt="" />
                                <p>Branding & Printing</p>
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
                                <p>Frontend Dev</p>
                            </div>

                            <div>
                                <img src={one7} alt="" />
                                <p>Photography</p>
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
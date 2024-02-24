import React, {useState} from 'react'
import CreativeOnboardProfessional from './CreativeProfileCreate/CreativeOnboardProfessional'
import CreativeOnboardProfile from './CreativeProfileCreate/CreativeOnboardProfile'
import { Link } from 'react-router-dom'

const CreativeOnboardAll = () => {

    const [page, setPage] = useState(0)

    const FormTitle = ["1", "2", "3", ]

    // {
    //     "id": 7,

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

    const [formData, setFormData] = useState({
        skills: [],
        display_name: "",
        summary_of_profile: "",
        location: "",
        language: "",
        about : "",
        website_link: "",
        resume_link: "",
    })


    const PageDisplayed = () => {

        if (page ===0){
            return   <CreativeOnboardProfile />
        }
        
        if (page === 1){
            return <CreativeOnboardProfessional />
        }
    }


  return (
    <div>
        {PageDisplayed()}

        <div>
            
            {page === 0 &&
            
                <div className='personalDetailsBtn'>
                    <button className='btnBlue2' onClick={(()=>setPage(1))}>Next</button>
                </div> 

            }

            { page === 1 &&
                <div className='personalDetailsBtn'>
                    <button className='btnBlue1' onClick={()=>{setPage(0)}}>Back</button>
                    <button className='btnBlue2' onClick={(()=>setPage(1))}>Save</button>
                </div> 
            }

        </div>
    </div>
  )
}

export default CreativeOnboardAll
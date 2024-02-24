import React, {useState} from 'react'
import CreativeOnboardProfessional from './CreativeProfileCreate/CreativeOnboardProfessional'
import CreativeOnboardProfile from './CreativeProfileCreate/CreativeOnboardProfile'
import { Link } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";

import succesImg from './successImg.png'

const CreativeOnboardAll = () => {

    const [successMessage, setSuccessMessage] = useState(false)

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageArray, setImageArray] = useState([]);

    const [selectedSkill, setSelectedSkill] = useState('');
    const [skilsArray, setSkillsArray] = useState([]); 


  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
  };


  const handleSkillChange = (e) => {
    const skill = e.target.value;
    setSelectedSkill(skill);
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();
    setImageArray((prevArray) => [...prevArray, selectedImage]);
    setSelectedImage(null);
  };


  const handleSkillSubmit = (e) => {
    e.preventDefault();
    setSkillsArray((prevArray) => [...prevArray, selectedSkill]);
    setSelectedSkill('');
  };


  const handleRemoveImage = (index) => {
    const newArray = [...imageArray];
    newArray.splice(index, 1);
    setImageArray(newArray);
  };


  const handleRemoveSkill= (index) => {
    const newArray = [...skilsArray];
    newArray.splice(index, 1);
    setSkillsArray(newArray);
  };

    const [page, setPage] = useState(0)

    const FormTitle = ["1", "2", "3", ]

    const [isLoading, setIsLoading] = useState(false);
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

    const decoded = jwtDecode(authTokens.access);


    const [formData, setFormData] = useState({
        skills: [],
        display_name: "",
        summary_of_profile: "",
        location: "",
        language: "",
        about : "",
        website_link: "",
        medium_url: "",
        resume_link: "",
        starting_price: 0,
        
    })


    const handleAllChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === "file" ? e.target.files[0] : value;
        setFormData({ ...formData, [name]: newValue });
    }

    const profileUrl = `https://creve.onrender.com/auth/creativeprofile/${decoded.profile_id}/`

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const formProfileData = new FormData();
        formProfileData.append('display_name', formData.display_name);
        formProfileData.append('summary_of_profile', formData.summary_of_profile);
        formProfileData.append('language', formData.language);
        formProfileData.append('location', formData.location);
        formProfileData.append('resume_link', formData.resume_link);
        formProfileData.append('about', formData.about);
        formProfileData.append('medium_url', formData.medium_url);
        formProfileData.append('starting_price', formData.starting_price);
    
        try {
          const response = await fetch(profileUrl, {
            method: 'PATCH',
            headers: {
              "Authorization": `Bearer ${authTokens.access}`
            },
            body: formProfileData,

          });
    
          if (response.ok || response.status === 200 ) {
            setSuccessMessage('Profile Successfully Updated')
            setIsLoading(false)
            console.log('Profile picture updated!');
            
          } else {
            console.error('Failed to update profile picture');
            setIsLoading(false)
          }
        } catch (error) {
          console.error('Error updating profile picture:', error);
          setIsLoading(false)
        }
      };



    const PageDisplayed = () => {

        if (page ===0){
            return<CreativeOnboardProfile 
                formData={formData} 
                setFormData={setFormData} 
                onSubmit={handleSubmit} 
                onChange={handleAllChange}
            />
        }
        
        if (page === 1){
            return <CreativeOnboardProfessional 
                formData={formData} 
                setFormData={setFormData} 
                onSubmit={handleSubmit} 
                onChange={handleAllChange}
                handleImageChange={handleImageChange}
                handleSkillChange={handleSkillChange}
                handleImageSubmit={handleImageSubmit}
                handleSkillSubmit={handleSkillSubmit}
                handleRemoveImage={handleRemoveImage}
                handleRemoveSkill={handleRemoveSkill}
                selectedImage = {selectedImage}
                imageArray ={imageArray}
                selectedSkill ={selectedSkill}
                skilsArray={skilsArray}
                setSelectedImage={setSelectedImage}
                setImageArray={setImageArray}
                setSelectedSkill={setSelectedSkill}
                setSkillsArray={setSkillsArray}
                
                
            />
        }
    }


  return (
    <div>
        {PageDisplayed()}

        <div>


        {successMessage && (
            <div className='succssModal'>
                <div className='succssModalContent'>
                    <div>
                        <img src={succesImg} alt='' />
                        <p>{successMessage}</p>
                        <div className='succssModalBtn'>
                            <button id='firstBtn' onClick={()=>{setSuccessMessage(false)}}>Cancle</button>
                            <Link to={'/' + 'dashboardMain'}><button>Continue Dashboard</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )}
            
            {page === 0 &&
            
                <div className='personalDetailsBtn'>
                    <button className='btnBlue2' onClick={(()=>setPage(1))}>Next</button>
                </div> 

            }

            { page === 1 &&
                <div className='personalDetailsBtn'>
                    <button className='btnBlue1' onClick={()=>{setPage(0)}}>Back</button>
                    <button className='btnBlue2' onClick={handleSubmit}>{isLoading ? <span className="loader"></span> : 'Submit'}</button>
                </div> 
            }

        </div>
    </div>
  )
}

export default CreativeOnboardAll
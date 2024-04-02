import React, {useState} from 'react'
import CreativeOnboardProfessional from './CreativeProfileCreate/CreativeOnboardProfessional'
import CreativeOnboardProfile from './CreativeProfileCreate/CreativeOnboardProfile'
import { Link } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";

import succesImg from './successImg.png'
import { BASE_URL } from '../Components/api/api';
import CreativeCoverPics from './CreativeProfileCreate/CreativeCoverPics';

const CreativeOnboardAll = () => {

    const [successMessage, setSuccessMessage] = useState(false)

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageArray, setImageArray] = useState([]);

    const [selectedSkill, setSelectedSkill] = useState('');
    const [skillsArray, setSkillsArray] = useState([]); 

    // console.log(skilsArray)
    // console.log(selectedSkill)


  


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

  const [skillList, setSkillList] = useState({ skills: [] });

  const handleSkillSubmit = (e) => {
    e.preventDefault();
    setSkillList(prevState => ({
      skills: [...prevState.skills, selectedSkill]
    }));
    setSelectedSkill('');
  };

  // const handleSkillSubmit = (e) => {
  //   e.preventDefault();
  //   setSkillsArray((prevArray) => [...prevArray, selectedSkill]);
  //   setSelectedSkill('');
  // };
  



  const handleRemoveImage = (index) => {
    const newArray = [...imageArray];
    newArray.splice(index, 1);
    setImageArray(newArray);
  };


  const handleRemoveSkill= (index) => {
    const newArray = [...skillsArray];
    newArray.splice(index, 1);
    setSkillsArray(newArray);
  };

    const [page, setPage] = useState(0)

    const FormTitle = ["1", "2", "3", ]

    const [isLoading, setIsLoading] = useState(false);
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

    const decoded = jwtDecode(authTokens.access);


    const [formData, setFormData] = useState({
        phone_number : "",
        display_name: "",
        summary_of_profile: "",
        location: "",
        language: "",
        about : "",
        website_link: "",
        whatsapp_link: "",
        resume_link: "",
        starting_price: 0,
        cover_image : null
        
    })



    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No Selected File Name")


    const handleAllChange = (e) => {
      const { name, value, type } = e.target;
      const newValue = type === "file" ? e.target.files[0] : value;
  
      // Handling file name and image preview
      if (type === "file") {
          setFileName(newValue.name);
          setImage(URL.createObjectURL(newValue));
      }
  
      setFormData({ ...formData, [name]: newValue });
  }


  //   const handleAllChange = (e) => {
  //       const { name, value, type } = e.target;
  //       const newValue = type === "file" ? e.target.files[0] : value;
  //       setFormData({ ...formData, [name]: newValue });
  //   }



  //   {({target: {files}}) =>{
  //     files[0] && setFileName(files[0].name)
  //     if(files){
  //         setImage(URL.createObjectURL(files[0]))
  //     }
  // }

    const profileUrl = `${BASE_URL}/creativeprofile/${decoded.profile_id}/`

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const formProfileData = new FormData();
        formProfileData.append('phone_number', formData.phone_number);
        formProfileData.append('display_name', formData.display_name);
        formProfileData.append('summary_of_profile', formData.summary_of_profile);
        formProfileData.append('language', formData.language);
        formProfileData.append('location', formData.location);
        formProfileData.append('about', formData.about);
        formProfileData.append('website_link', formData.website_link);
        formProfileData.append('whatsapp_link', formData.whatsapp_link);
        formProfileData.append('resume_link', formData.resume_link);
        formProfileData.append('starting_price', formData.starting_price);
        formProfileData.append('cover_image', formData.cover_image);
    
        try {
          const response = await fetch(profileUrl, {
            method: 'PATCH',
            headers: {
              "Authorization": `Bearer ${authTokens.access}`
            },
            body: formProfileData,

          });
    
          if (response.ok || response.status === 200 ) {
            setSuccessMessage('Profile Setup Successfull')
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


    const [inputData, setInputData] = useState('');

    const handleInputChange = (event) => {
      setInputData(event.target.value);
    };


    const skillUrl = `${BASE_URL}/skills/${decoded.profile_id}/`

    const handleSubmit2 = async (e) => {
      e.preventDefault();

      const skillData = new FormData();
      skillList.skills.forEach(skill => {
        skillData.append('skill_list', skill);
      });

      

      setIsLoading(true);
      try {
        const response = await fetch(skillUrl, {
          method: 'POST',
          headers: {
            // 'Content-Type': 'application/json',
            "Authorization": `Bearer ${authTokens.access}`
          },
          body: skillData,

        });

        console.log(skillData)
        console.log(skillList)
  
        if (response.ok || response.status === 200 ) {
          setSuccessMessage('Profile Setup Successfull')
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


        if(page ===1){
          return <CreativeCoverPics 
            onChange={handleAllChange}
            formData={formData} 
            image={image}
            fileName={fileName}
            setFileName={setFileName}
            setImage={setImage}
          />
        }
        
        if (page === 2){
            return <CreativeOnboardProfessional 
                formData={formData} 
                setFormData={setFormData} 
                onSubmit={handleSubmit} 
                handleSubmit2 = {handleSubmit2}
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
                setSelectedImage={setSelectedImage}
                setImageArray={setImageArray}
                setSelectedSkill={setSelectedSkill}
                setSkillsArray={setSkillsArray}
                skillsArray={skillsArray}
                inputData={inputData}
                handleInputChange={handleInputChange}
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
                            <Link to={'/' + 'dashboardMain'}><button>Dashboard</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )}
            
              {page === 0 &&
                
                <div className='personalDetailsBtn'>
                    <button type='submit' className='btnBlue2' onClick={(()=>setPage(1))}>Next</button>
                </div> 

            }


            { page === 1 &&
                <div className='personalDetailsBtn'>
                    <button type='submit' className='btnBlue1' onClick={()=>{setPage(0)}}>Back</button>
                    <button type='submit' className='btnBlue2' onClick={(()=>setPage(2))}>Next</button>
                </div> 
            }

            { page === 2 &&
                <div className='personalDetailsBtn'>
                    <button type='submit' className='btnBlue1' onClick={()=>{setPage(1)}}>Back</button>
                    <button type='submit' className='btnBlue2' onClick={handleSubmit}>{isLoading ? <span className="loader"></span> : 'Submit'}</button>
                </div> 
            }

        </div>
    </div>
  )
}

export default CreativeOnboardAll
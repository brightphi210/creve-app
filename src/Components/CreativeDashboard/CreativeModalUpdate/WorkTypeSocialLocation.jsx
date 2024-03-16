import { IoIosCloseCircleOutline } from "react-icons/io";
import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "../../api/api";

const WorkType = ({closeAllModal, showAllModal}) => {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const [successMessage, setSuccessMessage] = useState(false)


  const [display_name, setDisplay_name] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [work_type, setWork_type] = useState('')
  const [summary_of_profile, setSummary_of_profile] = useState('')
  const [starting_price, setstarting_price] = useState('')
  const [about, setAbout] = useState('')
  const [location, setLocation] = useState('')
  const [language, setLanguage] = useState('')
  const [whatsapp_link, setWhatsapp_link] = useState('')
  const [resume_link, setResume_link] = useState('')
  const [website_link, setWebsite_link] = useState('')

  

  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

  const decoded = jwtDecode(authTokens.access);

  console.log(decoded.user_id)


  const fetchUserData = async (e) => {

    setIsLoading(true)

    try {
      const response = await fetch(`${BASE_URL}/creativeprofile/${decoded.profile_id}/`, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${authTokens.access}`,
          "Content-Type": "application/json"
        },
      });

      setIsLoading(false)
      const userData = await response.json();
      console.log("This is the user data: " + JSON.stringify(userData));

      setDisplay_name(userData.display_name);
      setLanguage(userData.language);
      setLocation(userData.location);
      setWhatsapp_link(userData.whatsapp_link);
      setSummary_of_profile(userData.summary_of_profile);
      setstarting_price(userData.starting_price);
      setWebsite_link(userData.website_link);
      setResume_link(userData.resume_link);
      setAbout(userData.about);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setIsLoading(false)
    }
};

useEffect(() => {
  fetchUserData();
}, []);


  
  const profileUrl = `${BASE_URL}/creativeprofile/${decoded.profile_id}/`

  const handleUpdateProfilePic = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formProfileData = new FormData();
    formProfileData.append('display_name', display_name);
    formProfileData.append('phone_number', phone_number);
    formProfileData.append('work_type', work_type);
    formProfileData.append('summary_of_profile', summary_of_profile);
    formProfileData.append('starting_price', starting_price);
    formProfileData.append('about', about);
    formProfileData.append('location', location);
    formProfileData.append('language', language);
    formProfileData.append('whatsapp_link', whatsapp_link);
    formProfileData.append('resume_link', resume_link);
    formProfileData.append('website_link', website_link);

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
        navigate('/' + 'dashboardMain')


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


  return (

    <div>

      {showAllModal && 
      <div className='workTypeAndAllModal'>
          <div className='workTypeAndAllModalContent'>

            <div className='frequentClose'>
                <h2>Edit each profile here</h2>
                <p onClick={closeAllModal}><IoIosCloseCircleOutline /></p>
            </div>

            <form action="" onSubmit={handleUpdateProfilePic}>
              <div class="custom-dropdown">
                <h3>Work Type</h3>
                <select className='mySelect'>
                    <option value="">Select: </option>
                    <option value="option1">Remote</option>
                    <option value="option2">On-Site</option>
                    <option value="option3">Hybrid</option>
                </select>
              </div>

              <div className='whatsAppLocationDiv whatNew' >
                <div className='whatsappDiv'>
                  <h3>Display Name: </h3>
                  <input 
                    type="text" 
                    onChange={(e)=> setDisplay_name(e.target.value)}
                    value={display_name}
                    placeholder='Display Name: ' 
                    required/>
                </div>
              
                <div className='whatsappDiv'>
                  <h3>Language</h3>
                  <input 
                    type="text" 
                    placeholder='Language: ' 
                    value={language}
                    onChange={(e)=>setLanguage(e.target.value)}
                    required/>
                </div>
              </div>

              <div className='whatsAppLocationDiv'>
                <div className='whatsappDiv'>
                  <h3>Location</h3>
                  <input 
                    type="text" 
                    placeholder='Location: ' 
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                    required/>
                </div>
              
                <div className='whatsappDiv'>
                  <h3>Whatsapp Link</h3>
                  <input 
                    type="text" 
                    placeholder='Whatsapp: ' 
                    value={whatsapp_link}
                    onChange={(e)=>setWhatsapp_link(e.target.value)}
                    required/>
                </div>
              </div>

              <div className='whatsAppLocationDiv whatNew'>
                <div className='whatsappDiv'>
                  <h3>Summary Of profile</h3>
                  <input 
                    type="text" 
                    placeholder='Profile Summary: ' 
                    value={summary_of_profile}
                    onChange={(e)=>setSummary_of_profile(e.target.value)}
                    required/>
                </div>
              
                <div className='whatsappDiv'>
                  <h3>Starting Price</h3>
                  <input 
                  type="number" placeholder='$20,000: '
                  value={starting_price}
                  onChange={(e)=>setstarting_price(e.target.value)}
                  required/>
                </div>
              </div>

              <div className='whatsAppLocationDiv whatNew'>
                <div className='whatsappDiv'>
                  <h3>Website Link</h3>
                  <input 
                    type="text" 
                    placeholder='Website Link: ' 
                    value={website_link}
                    onChange={(e)=>setWebsite_link(e.target.value)}
                    required/>
                </div>
              
                <div className='whatsappDiv'>
                  <h3>Resume Link</h3>
                  <input 
                    type="text" 
                    placeholder='Resume Link: ' 
                    value={resume_link}
                    onChange={(e)=>setResume_link(e.target.value)}
                    required/>
                </div>
              </div>

              <div className='whatsappDivText'>
                <h3>Bio</h3>
                <textarea 
                  name="" 
                  placeholder='Bio'
                  value={about}
                  onChange={(e)=>setAbout(e.target.value)}
                  ></textarea>
              </div>

              <button type="submit" className='creativeAppBtns'>Update</button>
              
            </form>

          </div>
      </div>
      }

        {isLoading ? 
          (<>
            <div className='loaderModal'>
              <span className="loader"></span>
            </div>
          </>) : 
        ''}
    </div>
  )
}

export default WorkType
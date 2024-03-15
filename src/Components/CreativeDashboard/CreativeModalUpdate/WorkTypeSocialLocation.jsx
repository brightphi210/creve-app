import { IoIosCloseCircleOutline } from "react-icons/io";
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "../../api/api";

const WorkType = ({closeAllModal, showAllModal}) => {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const [fullname, setName] = useState('')
  const [successMessage, setSuccessMessage] = useState(false)
  const [profile_pics, setProfilePics] = useState(null)


  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

  const decoded = jwtDecode(authTokens.access);

  console.log(decoded.user_id)

  
  const profileUrl = `${BASE_URL}/creativeprofile/${decoded.profile_id}/`
  const handleUpdateProfilePic = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formProfileData = new FormData();
    formProfileData.append('profile_pics', profile_pics);
    formProfileData.append('profile_pics', profile_pics);

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

            <form action="">
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
                  <input type="text" placeholder='Display Name: ' required/>
                </div>
              
                <div className='whatsappDiv'>
                  <h3>Language</h3>
                  <input type="text" placeholder='Language: ' required/>
                </div>
              </div>

              <div className='whatsAppLocationDiv'>
                <div className='whatsappDiv'>
                  <h3>Location</h3>
                  <input type="text" placeholder='Location: ' required/>
                </div>
              
                <div className='whatsappDiv'>
                  <h3>Whatsapp Link</h3>
                  <input type="text" placeholder='Whatsapp: ' required/>
                </div>
              </div>

              <div className='whatsAppLocationDiv whatNew'>
                <div className='whatsappDiv'>
                  <h3>Summary Of profile</h3>
                  <input type="text" placeholder='Profile Summary: ' required/>
                </div>
              
                <div className='whatsappDiv'>
                  <h3>Starting Price</h3>
                  <input type="number" placeholder='$20,000: ' required/>
                </div>
              </div>

              <div className='whatsAppLocationDiv whatNew'>
                <div className='whatsappDiv'>
                  <h3>Website Link</h3>
                  <input type="text" placeholder='Website Link: ' required/>
                </div>
              
                <div className='whatsappDiv'>
                  <h3>Resume Link</h3>
                  <input type="text" placeholder='Resume Link: ' required/>
                </div>
              </div>

              <div className='whatsappDivText'>
                <h3>Bio</h3>
                <textarea name="" placeholder='Bio'></textarea>
              </div>

              <button className='creativeAppBtns'>Update</button>
              
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
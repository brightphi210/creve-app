
import React,{useState, useEffect, useLayoutEffect} from 'react'
// import './UserSettingCompo.scss'

import {Link} from 'react-router-dom'

import { FaRegTrashCan } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'
import prof from './images/profilePics.png'
import { AiOutlineClose } from "react-icons/ai";
import { jwtDecode } from "jwt-decode";

const CreativeSetting = () => {


  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

    const decoded = jwtDecode(authTokens.access);

    console.log(decoded.user_id)

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const [fullname, setName] = useState('')
    const [successMessage, setSuccessMessage] = useState(false)
    const [profile_pics, setProfilePics] = useState(null)


    const closeMessage = () => {
        setSuccessMessage(false)
    } 




    const refreshPage = () => {
      window.location.reload();
    };


    const fetchUserData = async (e) => {

        setIsLoading(true)

        try {
          const response = await fetch(`https://creve.onrender.com/auth/creative/${decoded.user_id}/`, {
            method: 'GET',
            headers: {
              "Authorization": `Bearer ${authTokens.access}`,
              "Content-Type": "application/json"
            },
          });

          setIsLoading(false)
          const userData = await response.json();
          console.log("This is the user data: " + JSON.stringify(userData));

          setName(userData.fullname);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setIsLoading(false)
        }
    };

    useEffect(() => {
        fetchUserData();
      }, []);


      function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        const newFormData = new FormData();
        newFormData.append('fullname', fullname);
      
        fetch(`https://creve.onrender.com/auth/creative/${decoded.user_id}/`, {
          method: 'PUT',
          headers: {
            "Authorization": `Bearer ${authTokens.access}`
          },
          body: newFormData,
        })
          .then((response) => {
            if (response.ok) {
                console.log("Successfully updated")
                setSuccessMessage('Profile Successfully Updated')
                setIsLoading(false)
            } else {
              console.log("Failed to update")
              setIsLoading(false)
            }
          })
          .catch((error) => {
            console.error('Error updating user profile:', error);
            setIsLoading(false)
          });
      }
      

      // ===================== Profile Pics ===============================

      const profileUrl = `https://creve.onrender.com/auth/creativeprofile/${decoded.profile_id}/`


      const handleImageChange = (e) => {
        setProfilePics(e.target.files[0]);
    };

      const handleUpdateProfilePic = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formProfileData = new FormData();
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



    const getUserProfile = async ()=>{
      try {
        const response = await fetch(profileUrl,{
          method: 'GET',
          headers : {
            'Authorization' : `Bearer ${authTokens.access}`,
            'Content-Type':'Application/json'
          },
        })
  
        setIsLoading(false)
        const data = await response.json()
        setProfilePics(data.profile_pics)

      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
  
  
    useLayoutEffect(() => {
      getUserProfile()
    },[])



  
  return (
    <div className='userSetting'>
        <div className='userDiv'>
            <div className='userDivEach'>

            {successMessage && (
                <div className='errorMessage'>
                  <p>{successMessage} <AiOutlineClose onClick={closeMessage} className='closeMsgIcon'/></p>
                </div>
              )}
                <h2>Account Settings</h2>


                <form action="" onSubmit={handleUpdateProfilePic}>
                  <hr />
                    <div className='proImageDiv'>
                        <div className='static'>
                            <img src={prof} alt="" />
                        
                        {isLoading ? (
                            <>
                                
                            </>
                        ) 
                        : (

                            <>
                                <img src={profile_pics} alt="" className='onTop'/>
                            </>
                        )}
                        </div>

                        <input 
                            type="file" 
                            id='image' 
                            name="profilePics" 
                            accept="image/*"
                            onChange ={handleImageChange} 
                            hidden
                        />
                        <label className='myLabel' for="image">Choose file</label>
                    </div>

                    <button >Save Changes</button>
                </form>

                <form action="" onSubmit={handleSubmit}>
                    <hr />

                    <div>
                        <p>Full Name: </p>
                        <input type="text"  
                        placeholder='Enter your Full Name'
                        name="fullname"
                        value={fullname}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <button>Save Changes</button>
                </form>
            </div>

            <hr />

            <div className='userDivEach'>
                <p className='myP'>
                    Your account is currently a Client Account. 
                    Click on the button below to open a talent profile 
                    with the same account
                </p>

                <Link to={'/signup'}><button className='bcome'>Become a Client</button></Link>
            </div>

            <hr />

            <p className='deleteBtn'><FaRegTrashCan />Delete Account</p>
        </div>



        {isLoading ? 
      (<>
        <div className='loaderModal'>
          <span className="loader"></span>
        </div>
      </>) : ''}
    </div>
  )
}

export default CreativeSetting

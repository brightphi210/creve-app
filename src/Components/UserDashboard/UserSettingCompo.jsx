import React,{useState, useEffect} from 'react'
import './UserSettingCompo.scss'

import {Link} from 'react-router-dom'

import { FaRegTrashCan } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'
import prof from './images/profilePics.png'
import { AiOutlineClose } from "react-icons/ai";

const UserSettingCompo = () => {


    let token = localStorage.getItem('authToken');

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()


    const [name, setName] = useState('')
    const [profile_pics, setProfile_pics] = useState(null)



    const [successMessage, setSuccessMessage] = useState(false)


    const closeMessage = () => {
        setSuccessMessage(false)
      } 

    const handleImageChange = (e) => {
        setProfile_pics(e.target.files[0]);
    };


    const fetchUserData = async (e) => {

        setIsLoading(true)

        try {
          const response = await fetch(`https://creve.onrender.com/clientupdate/`, {
            method: 'GET',
            headers: {
              "Authorization": `Bearer ${token}`,
            //   "Content-Type": "application/json"
            },
          });

          setIsLoading(false)
          const userData = await response.json();
          console.log("This is the user data: " + JSON.stringify(userData));

          setName(userData.name);
          setProfile_pics(userData.profile_pics);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setIsLoading(false)
        }
    };

    useEffect(() => {
        fetchUserData();
      }, []);



      console.log()

      function handleSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        const newFormData = new FormData();
        newFormData.append('name', name);
        newFormData.append('profile_pics', profile_pics);

      
        fetch(`https://creve.onrender.com/clientupdate/`, {
          method: 'PUT',
          headers: {
            "Authorization": `Bearer ${token}`
          },
          body: newFormData,
        })
          .then((response) => {
            if (response.ok) {
                console.log("Successfully updated")
                setSuccessMessage('Profile Successfully Updated')
                // navigate('/dashboard')
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


                <form action="" onSubmit={handleSubmit}>
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
                            name="profile_pics" 
                            accept="image/*"
                            onChange ={handleImageChange} 
                            hidden
                        />
                        <label for="image">Choose file</label>
                    </div>

                    <hr />

                    <div>
                        <p>Full Name: </p>
                        <input type="text"  
                        placeholder='Enter your Full Name'
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <button>Saving Changes</button>
                </form>
            </div>

            <hr />

            <div className='userDivEach'>
                <p className='myP'>
                    Your account is currently a Client Account. 
                    Click on the button below to open a talent profile 
                    with the same account
                </p>

                <Link to={'/signupCreative'}><button className='bcome'>Become a Talent</button></Link>
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

export default UserSettingCompo

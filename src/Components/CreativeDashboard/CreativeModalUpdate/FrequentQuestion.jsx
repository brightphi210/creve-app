import React, { useEffect, useState } from 'react'
import './CreativeModalUpdate.scss'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdAddCircleOutline } from "react-icons/md";
import { LuMinusCircle } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { BASE_URL } from '../../api/api';
import { jwtDecode } from "jwt-decode";



const FrequentQuestion = ({openModal, showModal, closeModal}) => {

    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

    const decoded = jwtDecode(authTokens.access);


    const [showEditModal, setEditModal] = useState(false);
    const [showCreateQuestion, setShowCreateQuestion] = useState(false);

    const handleShowEdithModal = (e)=>{
        setEditModal(true)
        e.preventDefault();
    }

    const handleHideEdithModal = (e)=>{
        setEditModal(false)
        e.preventDefault();
    }

    const handleShowCreateQuestion = (e)=>{
        e.preventDefault();
        setShowCreateQuestion(true)
    }

    const handleHideCreateQuestion = (e)=>{
        e.preventDefault();
        setShowCreateQuestion(false)
    }


    const [creativeQuestion, setCreateQuestion] = useState([])


    // https://creve.onrender.com/questions/2/

    const fetchQuestion = async () => {
        try {
            const res = await fetch(`${BASE_URL}/questions/`, {
                method: 'GET',
                headers : {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${authTokens.access}`,
                },
            })
            const data = await res.json()
            setCreateQuestion(data)

        } catch (error) {
            
        }
    }


    useEffect(()=>{
        fetchQuestion()
    }, [])


    console.log(creativeQuestion)
    

  return (
      <div>
      {showModal && (
        <div>
            <div className='frequentModal' >
                <form className='frequestModalContent'>

                    <div className='frequentClose'>
                        <h2>Frequent Asked  Question</h2>
                        <p onClick={closeModal}><IoIosCloseCircleOutline /></p>
                    </div>

                    <div className='frequestInputPart'>
                        <div className='frequestAdd'>
                            <h3>Frequent Asked  Question</h3>

                            {showCreateQuestion ? (
                                
                                <span onClick={handleHideCreateQuestion}>Hide <LuMinusCircle /></span>
                                ) : (
                                    
                                    <span onClick={handleShowCreateQuestion}>Add <MdAddCircleOutline /></span>
                            )}
                        </div>

                        {showCreateQuestion && 
                            <div>
                                <input type="text" placeholder='Enter quetion' required/>
                                <textarea name="" placeholder='Enter answer' required></textarea>
                            </div>
                        }
                    </div>

                    <div className='renderedText'>

                        {}
                        <div className='frequestRender'>
                            <div className='editDiv'>
                                <h3>What style do we use in development</h3>
                                <div>
                                    <div>
                                        {showEditModal &&
                                            <p className='editBtn' onClick={handleHideEdithModal}><FaAngleDown /></p> 
                                            // <p className='editBtn'><FaAngleUp /></p> 
                                        }

                                    </div>
                                    <p className='editBtn' onClick={handleShowEdithModal}><FaRegEdit /></p>
                                    <p className='deleteBtns'><MdDelete /></p>
                                </div>
                            </div>

                            <p className='editDivp'>
                                Hi, I’m Cassie, Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam
                            </p>

                            <div>
                                {showEditModal && 
                                    <form action="">
                                        <input type="text" placeholder='Edit here: '  required/>
                                        <textarea name="" placeholder='Edit here: ' required></textarea>
                                        <button className='updateBtns'>Update</button>
                                    </form>
                                }
                            </div>

                        </div> 
                    </div>

                    <button disabled={showCreateQuestion === false}  className={showCreateQuestion === false ? 'updateDisableBtn' : 'updateBtn'}>Submit</button>
                </form>
            </div>
        </div>
       )}
    </div>
  )
}

export default FrequentQuestion
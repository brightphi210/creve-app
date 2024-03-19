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
import {useNavigate } from 'react-router-dom';



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

    const [isLoading, setIsLoading] = useState(false)


    // https://creve.onrender.com/questions/2/

    const fetchQuestion = async () => {

        setIsLoading(true)
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
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
        }
    }


    useEffect(()=>{
        fetchQuestion()
    }, [])


    // console.log(creativeQuestion)


    const [question , setPostQuestion] = useState('')
    const [answer, setPostAnswer] = useState('')

    const navigate = useNavigate()
    

    const handleQuestionPost = async (e) =>{
        e.preventDefault();
        setIsLoading(true)

        try {

            const res = await fetch(`${BASE_URL}/questions/`, {
                method : 'POST',
                headers : {
                    'Authorization' : `Bearer ${authTokens.access}`,
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify({ question, answer }),
            })

            if(res.ok){
                console.log('FAQS Created Successfully')
                navigate('/' + 'creativeProfile')
                setIsLoading(false)
            }
            
            else{
                console.log('error occured while creating FAQS')
            }
        } catch (error) {
            
        }
    }

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

                            {/* {showCreateQuestion ? (
                                
                                <span onClick={handleHideCreateQuestion}>Hide <LuMinusCircle /></span>
                                ) : (
                                    
                                    <span onClick={handleShowCreateQuestion}>Add <MdAddCircleOutline /></span>
                            )} */}
                        </div>

                        {/* {showCreateQuestion &&  */}
                            <div>
                                <input type="text" 
                                    placeholder='Enter quetion' 
                                    required
                                    value={question}
                                    onChange={(e)=>setPostQuestion(e.target.value)}
                                />
                                <textarea name="" 
                                    placeholder='Enter answer' 
                                    required
                                    value={answer}
                                    onChange={(e)=>setPostAnswer(e.target.value)}
                                >
                                </textarea>

                            </div>

                        {/* } */}
                    </div>

                    <div className='renderedText'>

                        {creativeQuestion.map((creativeQuestionOne)=>(
                            <div className='frequestRender'>
                                <div className='editDiv'>
                                    <h3>{creativeQuestionOne.question}</h3>
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

                                <p className='editDivp'>{creativeQuestionOne.answer}</p>

                                <div>
                                    {showEditModal && 
                                        <form action="">
                                            <input type="text" 
                                                placeholder='Edit here: ' 
                                                 required
                                                 value={creativeQuestionOne.question}
                                            />

                                            <textarea name="" 
                                                placeholder='Edit here: ' 
                                                required
                                                value={creativeQuestionOne.answer}
                                            ></textarea>


                                            <button className='updateBtns'>Update</button>
                                        </form>
                                    }
                                </div>

                            </div> 
                        ))}
                    </div>

                    <button onClick={handleQuestionPost} disabled={showCreateQuestion === false}  className={showCreateQuestion === false ? 'updateDisableBtn' : 'updateBtn'}>Submit</button>
                </form>
            </div>
        </div>
       )}

        {isLoading ? 
          (<>
            <div className='loaderModal'>
              <span className="loader"></span>
            </div>
          </>) : ''
        }
    </div>
  )
}

export default FrequentQuestion
import React, { useState } from 'react'
import './ChatCompo.scss'

import ava from './images/Avatars1.png'

import { GrEmoji } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";


const ChatCompo = () => {

    const [show, setShow] = useState(false)

    const showFunc = () =>{
        setShow(true)
    }


    const hideFunc = () =>{
        setShow(false)
    }
  return (
    <div className='chatSec'>
        <div className='sideBar'>
            <h2>My Messages</h2>
            <div className='sideBarDiv'>
                <div className='sideBarFlex' onClick={showFunc}>
                    <div><img src={ava} alt="" /></div>
                    <div>
                        <h3>Jane Doe</h3>
                        <p>Frontend Developer Proficient, Java...</p>
                        <span>I need your service on sunday</span>
                    </div>
                    <div className='unreadCount'><p>3</p></div>
                </div>

                <div className='sideBarFlex' onClick={showFunc}>
                    <div><img src={ava} alt="" /></div>
                    <div>
                        <h3>Jane Doe</h3>
                        <p>Frontend Developer Proficient, Java...</p>
                        <span>I need your service on sunday</span>

                    </div>
                </div>

                <div className='sideBarFlex' onClick={showFunc}>
                    <div><img src={ava} alt="" /></div>
                    <div>
                        <h3>Jane Doe</h3>
                        <p>Frontend Developer Proficient, Java...</p>
                        <span>I need your service on sunday</span>
                    </div>
                    <div className='unreadCount'><p>1</p></div>
                </div>
            </div>
        </div>

        <div className='message'>


            <div className='messageHeader'>
                <div className='messageAvaDiv'>
                    
                    <img src={ava}  alt="" />
                    <div>
                        <h2>Jane Doe</h2>
                        <p>Frontend Developer Proficient in CSS, JavaScript and React</p>
                    </div>
                </div>

                <div className='msgBtn'>
                    <button>View Contact</button>
                </div>
            </div>


            <div className='messageOverFlow'>
                <div className='msgText'>
                    <div className='msgTextDiv'>


                        <div className='sendMsg sent-message'>
                            <div>
                            <p>Hello, how are you?</p>
                            <span>12:50pm</span>
                            </div>
                        </div>


                        <div  className='recieveMsg received-message'>
                            <div>
                            <p>I'm good, thank you!</p>
                            <span>12:00pm</span>
                            </div>
                        </div >
                        
                    </div>
                </div>
            </div>

            <div className='messageBottom'>
                <div className='msgBottomInput'>
                    <input type="text" placeholder='Type your message here...'/>
                </div>
                <div className='msgIcons'>
                    <p><GrEmoji /></p>
                    <p><MdAdd /></p>
                    <button><IoSend /></button>
                </div>
            </div>
        </div>


        {show && (
            <div className='smallMessage'>

                <div className='smallMessageContent'>

                    <div className='messageHeader'>
                        <div className='messageAvaDiv'>
                            <div className='chatBackIcon' onClick={hideFunc}><IoArrowBack /></div>
                            <img src={ava}  alt="" />
                            <div>
                                <h2>Jane Doe</h2>
                                <p>Frontend Developer</p>
                            </div>
                        </div>

                        <div className='msgBtn'>
                            <button>View Contact</button>
                        </div>
                    </div>




                    <div className='messageOverFlow'>
                        <div className='msgText'>
                            <div className='msgTextDiv'>


                                <div className='sendMsg sent-message'>
                                    <div>
                                    <p>Hello, how are you?</p>
                                    <span>12:50pm</span>
                                    </div>
                                </div>


                                <div  className='recieveMsg received-message'>
                                    <div>
                                    <p>I'm good, thank you!</p>
                                    <span>12:00pm</span>
                                    </div>
                                </div >

                                <div className='sendMsg sent-message'>
                                    <div>
                                    <p>Hello, how are you?</p>
                                    <span>12:50pm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='messageBottom'>
                        <div className='msgBottomInput'>
                            <input type="text" placeholder='Type your message here...'/>
                        </div>
                        <div className='msgIcons'>
                            <p><GrEmoji /></p>
                            <p><MdAdd /></p>
                            <button><IoSend /></button>
                        </div>
                    </div>
                </div>
        </div>
        )}

        
    </div>
  )
}

export default ChatCompo
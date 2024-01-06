import React, { useState } from 'react'
import './ChatCompo.scss'

import ava from './images/Avatars1.png'

import { GrEmoji } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import ChatHeader from './ChatItems/ChatHeader';
import ChatBody from './ChatItems/ChatBody';
import ChatBottom from './ChatItems/ChatBottom';


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

            <ChatHeader />
            <ChatBody />
            <ChatBottom />

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

                    <ChatBody />
                    <ChatBottom />


                </div>
        </div>
        )}

        
    </div>
  )
}

export default ChatCompo
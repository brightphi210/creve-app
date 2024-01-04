import React from 'react'
import './ChatCompo.scss'

import ava from './images/Avatars1.png'

import { GrEmoji } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
const ChatCompo = () => {
  return (
    <div className='chatSec'>
        <div className='sideBar'>
            <h2>My Messages</h2>
            <div></div>
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
                {/* <span className='date'>20 october, 2024</span> */}
                <div className='msgText'>
                    <div className='msgTextDiv'>

                        <div  className='recieveMsg received-message'>
                            <div>
                            <p>Hello, how are you?</p>
                            <span>12:00pm</span>
                            </div>
                        </div >
                        
                        <div className='sendMsg sent-message'>
                            <div>
                            <p>I'm good, thank you!</p>
                            <span>12:50pm</span>
                            </div>
                        </div>

                        <div  className='recieveMsg received-message'>
                            <div>
                            <p>Hello, how are you?</p>
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
                    <button><RiSendPlaneFill /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatCompo
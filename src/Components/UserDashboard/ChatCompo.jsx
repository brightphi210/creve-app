import React from 'react'
import './ChatCompo.scss'

import ava from './images/Avatars1.png'
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
                    <img src={ava} width={50} alt="" />
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

            </div>

            <div className='messageBottom'>
                <div className='msgBottomInput'>
                    <input type="text" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatCompo
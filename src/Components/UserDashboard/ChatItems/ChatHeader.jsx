import React from 'react'
import ava from '../images/Avatars1.png'
const ChatHeader = () => {
  return (
    <div>
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
    </div>
  )
}

export default ChatHeader
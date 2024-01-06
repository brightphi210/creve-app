import React from 'react'
import { GrEmoji } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const ChatBottom = () => {
  return (
    <div>
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
  )
}

export default ChatBottom
import React from 'react'

const ChatBody = () => {
  return (
    <div>
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
    </div>
  )
}

export default ChatBody
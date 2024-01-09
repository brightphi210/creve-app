import React from 'react'
import './ConfirmPageCompo.scss'
import sentMail from './images/email.avif'

const ConfirmPageCompo = () => {
  
  return (
    <div>
      <div className='confirmDiv'>
        <div className='confirmText'>
          <img src={sentMail} alt="" />
          <h2>Email Verification Sent !!</h2>
          <p>Please Visit your mail to very your email address</p>
          
          <div className='contactCareDiv'>
            <p>contact customer care if you didnt recieve a mail </p>
            <p>+234 80944 22807</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default ConfirmPageCompo
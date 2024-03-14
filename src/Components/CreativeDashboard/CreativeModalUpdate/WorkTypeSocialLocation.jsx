import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

const WorkType = ({closeAllModal, showAllModal}) => {
  return (

    <div>

      {showAllModal && 
      <div className='workTypeAndAllModal'>
          <div className='workTypeAndAllModalContent'>

            <div className='frequentClose'>
                <h2>Edit each profile here</h2>
                <p onClick={closeAllModal}><IoIosCloseCircleOutline /></p>
            </div>

            <form action="">
              <div class="custom-dropdown">
                <h3>Work Type</h3>
                <select className='mySelect'>
                    <option value="">Select: </option>
                    <option value="option1">Remote</option>
                    <option value="option2">On-Site</option>
                    <option value="option3">Hybrid</option>
                </select>
              </div>

              <div className='whatsAppLocationDiv whatNew' >
                <div className='whatsappDiv'>
                  <h3>Display Name: </h3>
                  <input type="text" placeholder='Display Name: ' required/>
                </div>
              
                <div className='whatsappDiv'>
                  <h3>Language</h3>
                  <input type="text" placeholder='Language: ' required/>
                </div>
              </div>

              <div className='whatsAppLocationDiv'>
                <div className='whatsappDiv'>
                  <h3>Location</h3>
                  <input type="text" placeholder='Location: ' required/>
                </div>
              
                <div className='whatsappDiv'>
                  <h3>Whatsapp Link</h3>
                  <input type="text" placeholder='Whatsapp: ' required/>
                </div>
              </div>

              <div className='whatsAppLocationDiv whatNew'>
                <div className='whatsappDiv'>
                  <h3>Summary Of profile</h3>
                  <input type="text" placeholder='Profile Summary: ' required/>
                </div>
              
                <div className='whatsappDiv'>
                  <h3>Starting Price</h3>
                  <input type="number" placeholder='$20,000: ' required/>
                </div>
              </div>

              <div className='whatsAppLocationDiv whatNew'>
                <div className='whatsappDiv'>
                  <h3>Website Link</h3>
                  <input type="text" placeholder='Website Link: ' required/>
                </div>
              
                <div className='whatsappDiv'>
                  <h3>Resume Link</h3>
                  <input type="number" placeholder='Resume Link: ' required/>
                </div>
              </div>

              <div className='whatsappDivText'>
                <h3>Bio</h3>
                <textarea name="" placeholder='Bio'></textarea>
              </div>

              <button className='creativeAppBtns'>Update</button>
              
            </form>

          </div>
      </div>
      }
    </div>
  )
}

export default WorkType
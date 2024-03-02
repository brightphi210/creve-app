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

              <div className='whatsAppLocationDiv'>
                <div className='whatsappDiv'>
                  <h3>Whatsapp</h3>
                  <input type="text" placeholder='whatsapp link: ' required/>
                </div>

                <div className='whatsappDiv'>
                  <h3>Location</h3>
                  <input type="text" placeholder='Location: ' required/>
                </div>
              </div>
              
            </form>

          </div>
      </div>
      }
    </div>
  )
}

export default WorkType
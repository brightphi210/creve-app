import React from 'react'
import CreativeOnboardNav from '../../Components/CreativeOnboardComponent/CreativeOnboardNav'
import CreativeOnbardSide from '../../Components/CreativeOnboardComponent/CreativeOnbardSide'
import { Link } from 'react-router-dom'
import './CreativeOnboardProfile.scss'
const CreativeOnboardProfile = () => {
  return (
    <div className=''>
        <CreativeOnboardNav />

        <div className='CreativeDetailsGenSec'>
          <CreativeOnbardSide />
          <div className='creativeDetailSec'>
            <h2>Personal Details</h2>

            <div>
              <p>Profile pics*</p>

              <form action="" className='personalDetailsForm'>
                <input type="file" required/>

                <div>
                  <p >Display Name*</p>
                  <input type="Full" placeholder='Enter Display Name'required/>
                </div>


                <div>
                  <p >Email address*</p>
                  <input type="email" placeholder='Enter your email address'required/>
                </div>


                <div>
                  <p >Language*</p>
                  <input type="email" placeholder='Enter Language'required/>
                </div>

                <div>
                  <p >Location*</p>
                  <input type="email" placeholder='Enter Location'required/>
                </div>


                <div>
                  <p >Whatsapp*</p>
                  <input type="number" placeholder='Enter Phone Number' required/>
                </div>


                <div>
                  <p >Short Summary*</p>
                  <textarea name="" placeholder='Enter short summary' required>
                    
                  </textarea>
                </div>

                <div className='personalDetailsBtn'>
                  <Link to={'/' + 'creativeProfileCategory'}><p>Back</p></Link>
                  <button>Next</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreativeOnboardProfile
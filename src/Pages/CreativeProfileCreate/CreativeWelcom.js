import React from 'react'
import './CreativeWelcome.scss'
import welcomImage from './welcome.png'
import logo from './craves.png'
import {Link} from 'react-router-dom'

const CreativeWelcom = () => {
  return (
    <div>

      <Link to={'/'}>
      <div className='welcomelogoDiv'>
            <img src={logo} alt=''/>
          </div>
      </Link>

        <div className='welcomeSection'>
          <div>
              <div>
                <img src={welcomImage} alt='' width={300}/>
              </div>
              <h2>Welcome To Creve</h2>
              <p>Clients are looking for talented individuals like you, 
                  and your profile is the key to making a lasting impression.
              </p>
              <Link to={`${'/'}creativeProfileCategory`}>
                <button>Create a Profile</button>
              </Link>
          </div>
        </div>
    </div>
  )
}

export default CreativeWelcom
import React from 'react'
import logo from './Images/craves.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { VscMenu } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { Navigate, useNavigate } from 'react-router-dom';

import './Navbar.scss'




const Narvbar = () => {
  const [openNavbar, setOpenNavvbar] = useState(true)
  const navigate = useNavigate()

    // const token = localStorage.getItem('authToken');
  
    let [tokentoken, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  
    // const [user, setUser] = useState(() => token)
    

  const toggleNav = () => {
    setOpenNavvbar(!openNavbar)
  }

  const logout = async (e) => {

    e.preventDefault()
    setAuthTokens(null)
    localStorage.removeItem('authTokens')
    navigate('/')
  }



  return (
    <div className='navDivMain '> 

        <div className='maimLogo'>
          <Link to={'/'}><div><img src={logo} alt="" width={100}/></div></Link>

          <div className='navIcons'>
            {openNavbar ? <VscMenu onClick={toggleNav}/> : <MdClose onClick={toggleNav}/>}
          </div>
        </div>


        <div className={`navDiv ${openNavbar ? 'open' : ''}`}>
          <div className='firstNavDiv'>
          <Link to={'/'}><div><img src={logo} alt="" width={100}/></div></Link>

            <div className='navUl'>
              <p>How it works</p>
              <p>About us</p>
              <Link to={'/category'}><p className='dropDown'>Category <IoMdArrowDropdown /></p></Link>
              <p>Find Talent</p>
            </div>
          </div>


          {tokentoken ? 
          (<>
            <div className='secondNavDiv'>
              <Link to={'/dashboardMain'}><button className='loginBtn'>Dashboard</button></Link>
              <button className='signupBtn' onClick={logout}>Logout</button>
            </div>
          </>) :  
          (<>
            <div className='secondNavDiv'>
              <Link to={'/signupCreative'}><p className='apply'>Apply as a Creative</p></Link>
              <Link to={'/login'}><button className='loginBtn'>Login</button></Link>
              <Link to={'/registerOption'}><button className='signupBtn'>Join Creve</button></Link>
            </div>
          </>)}

        </div>

    </div>
  )
}

export default Narvbar
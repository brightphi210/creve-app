import React from 'react'
import logo from './Images/craves.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { CgMenuLeft } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

import './Navbar.scss'




const Narvbar = () => {
  const [openNavbar, setOpenNavvbar] = useState(true)

  const toggleNav = () => {
    setOpenNavvbar(!openNavbar)
  }


  const token = localStorage.getItem('authToken');
  const [user, setUser] = useState(() => token)
  
  return (
    <div className='navDivMain '> 

        <div className='maimLogo'>
          <Link to={'/'}><div><img src={logo} alt="" width={100}/></div></Link>

          <div className='navIcons'>
            {openNavbar ? <CgMenuLeft onClick={toggleNav}/> : <MdClose onClick={toggleNav}/>}
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


          {user ? 
          (<>
            <div className='secondNavDiv'>
              <Link to={'/dashboard'}><button className='loginBtn'>Dashboard</button></Link>
            </div>
          </>) :  
          (<>
            <div className='secondNavDiv'>
              <Link to={'/signupCreative'}><p className='apply'>Apply as a Creative</p></Link>
              <Link to={'/login'}><button className='loginBtn'>Login</button></Link>
              <Link to={'/registerOption'}><button className='signupBtn'>Sing-up</button></Link>
            </div>
          </>)}

        </div>

    </div>
  )
}

export default Narvbar
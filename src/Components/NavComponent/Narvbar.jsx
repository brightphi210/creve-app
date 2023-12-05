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
              <p className='dropDown'>Category <IoMdArrowDropdown /></p>
              <p>Find Talent</p>
            </div>
          </div>


          <div className='secondNavDiv'>
            <p className='apply'>Apply as a Creative</p>
            <Link to={'/login'}><button className='loginBtn'>Login</button></Link>
            <Link to={'/registerOption'}><button className='signupBtn'>Sing-up</button></Link>
          </div>
        </div>

    </div>
  )
}

export default Narvbar
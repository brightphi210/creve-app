import React from 'react'

import logo from './craves.png'
import './Footer.scss'

import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footerSection'>

        <div className='footerLogo'>
            <img src={logo} alt="" width={100}/>
            <p>Home of the Best Talent all Over Africa</p>
        </div>

        <div className='footerRight'>
            <div className='footerIcon'>
                <FaLinkedin />
                <BsTwitterX />
                <FaInstagram />
            </div>

            <div>
                <p>Help and support</p>
                <p><IoMdMail /> creveafrica@gmai.com</p>
            </div>
        </div>

    </div>
  )
}

export default Footer
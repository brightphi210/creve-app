import React, { useState } from 'react'

import UserNavbar from '../../Components/UserDashboard/UserNavbar'
import TalentCompo from '../../Components/UserDashboard/TalentCompo'
import Footer from '../../Components/FooterComponent/Footer'

import { jwtDecode } from "jwt-decode";
import CreativeNavbar from '../../Components/CreativeDashboard/CreativeNavbar';
import CreativeDasboard from '../../Components/CreativeDashboard/CreativeDasboard';


const UserDasboardMain = () => {

  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

  let decoded = jwtDecode(authTokens.access)

  console.log(decoded.role)
  return (
    <div>

      {decoded.role === 'Client' ? 
      (
        <>
          <UserNavbar />
          <TalentCompo />
        </>
      ) : (
        <>

          <CreativeNavbar />
          <CreativeDasboard />
        </>
      )}


        <Footer />
    </div>
  )
}

export default UserDasboardMain





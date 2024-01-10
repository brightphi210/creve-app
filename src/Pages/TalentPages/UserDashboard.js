import React, { useState } from 'react'

import UserNavbar from '../../Components/UserDashboard/UserNavbar'
import TalentCompo from '../../Components/UserDashboard/TalentCompo'
import Footer from '../../Components/FooterComponent/Footer'

import { jwtDecode } from "jwt-decode";
import CreativeNavbar from '../../Components/CreativeDashboard/CreativeNavbar';
import CreativeDasboard from '../../Components/CreativeDashboard/CreativeDasboard';


const UserDashboard = () => {

  const token = localStorage.getItem('authToken');
  const [user, setUser] = useState(() => token)

  const decoded = jwtDecode(token);
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

export default UserDashboard
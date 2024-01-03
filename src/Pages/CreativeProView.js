import React from 'react'
import Footer from '../Components/FooterComponent/Footer'
import CreativeProfileView from '../Components/UserDashboard/CreativeProfileView'
import UserNavbar from '../Components/UserDashboard/UserNavbar'

const CreativeProView = () => {
  return (
    <div>
        <UserNavbar />
        <CreativeProfileView />
        <Footer />
    </div>
  )
}

export default CreativeProView
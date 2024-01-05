import React from 'react'
import UserNavbar from '../../Components/UserDashboard/UserNavbar'
// import Footer from '../../Components/FooterComponent/Footer'
import ChatCompo from '../../Components/UserDashboard/ChatCompo'

const UserChat = () => {
  return (
    <div>
        <UserNavbar />
        <ChatCompo />
        {/* <Footer /> */}
    </div>
  )
}

export default UserChat
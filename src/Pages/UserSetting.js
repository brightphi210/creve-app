import React from 'react'
import UserNavbar from '../Components/UserDashboard/UserNavbar'
import Footer from '../Components/FooterComponent/Footer'
import UserSettingCompo from '../Components/UserDashboard/UserSettingCompo'

const UserSetting = () => {
  return (
    <div>
        <UserNavbar />
        <UserSettingCompo />
        <Footer />
    </div>
  )
}

export default UserSetting
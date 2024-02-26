import React from 'react'
import UserNavbar from '../../Components/UserDashboard/UserNavbar'
import Footer from '../../Components/FooterComponent/Footer'
import FavouritesCompo from '../../Components/UserDashboard/FavouritesCompo'

const Favourite = () => {
  return (
    <div>
        <UserNavbar />
        <FavouritesCompo />
        {/* <Footer /> */}
    </div>
  )
}

export default Favourite
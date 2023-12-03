import React from 'react'
import SectionOne from './Components/HomeComponent/SectionOne.jsx'
import Narvbar from './Components/NavComponent/Narvbar.jsx'
import SectionTwo from './Components/HomeComponent/SectionTwo.jsx'
import SectionThree from './Components/HomeComponent/SectionThree.jsx'
import SectionFour from './Components/HomeComponent/SectionFour.jsx'

const Home = () => {
  return (
    <div>
      <Narvbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  )
}

export default Home
import React from 'react'
import SectionOne from './Components/HomeComponent/SectionOne.jsx'
import Narvbar from './Components/NavComponent/Narvbar.jsx'
import SectionTwo from './Components/HomeComponent/SectionTwo.jsx'
import SectionThree from './Components/HomeComponent/SectionThree.jsx'

const Home = () => {
  return (
    <div>
      <Narvbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}

export default Home
import React from 'react'
import SectionOne from './Components/HomeComponent/SectionOne.jsx'
import Narvbar from './Components/NavComponent/Narvbar.jsx'
import SectionTwo from './Components/HomeComponent/SectionTwo.jsx'

const Home = () => {
  return (
    <div>
      <Narvbar />
      <SectionOne />
      <SectionTwo />
    </div>
  )
}

export default Home
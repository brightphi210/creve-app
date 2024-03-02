import React, { useState } from 'react'
import CreativeProfileSetting from '../Components/CreativeDashboard/CreativeProfileSetting'
import CreativeNavbar from '../Components/CreativeDashboard/CreativeNavbar'

const CreativeProfilePage = () => {

  const [showSideBar, setShowSideBar] = useState(true)

  const handleShowSideBar = () =>{
    setShowSideBar(!showSideBar)
  }

  // const handleShowSideBar = () =>{
  //   setShowSideBar(true)
  // }

  return (
    <div>
        <CreativeNavbar handleShowSideBar={handleShowSideBar} showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
        <CreativeProfileSetting handleShowSideBar={handleShowSideBar} showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
    </div>
  )
}

export default CreativeProfilePage
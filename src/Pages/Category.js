import React from 'react'
import DigitalCategory from '../Components/Categories/DigitalCategory'
import NonDigitalCategory from '../Components/Categories/NonDigitalCategory'
import Narvbar from '../Components/NavComponent/Narvbar'


import { useState } from 'react'


const Category = () => {

  const [showCategory, setShowCategory] = useState(false)

  const showDigital = () =>{
    setShowCategory(true)
  }

  const showNonDigital = () =>{
    setShowCategory(false)
  }




  return (
    <div>

      
      <Narvbar />


      <div className='CatSectionBack'>
        <div className='catFlexDiv'>
            <div className='catFirstDiv'>
                <h2>Categories </h2>
                <p>We Provide the best talents on all kinds of talent. Whether it’s skilled or <br /> unskilled, you are in the right place.</p>
            </div>
            <div className='catSeconDiv'>
                <button>Explore All Talent</button>
            </div>
        </div>

        <div className='catOption'>
            <p>Digital skills</p>
            <p>In-person Professions</p>
        </div>
      </div>


      {showCategory ? <NonDigitalCategory /> : <DigitalCategory />}
    </div>
  )
}

export default Category
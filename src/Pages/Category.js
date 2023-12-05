import React from 'react'

import '../Components/Categories/Category.scss'
import DigitalCategory from '../Components/Categories/DigitalCategory'
import NonDigitalCategory from '../Components/Categories/NonDigitalCategory'
import Narvbar from '../Components/NavComponent/Narvbar'


import { useState } from 'react'
import Footer from '../Components/FooterComponent/Footer'

import { Link } from 'react-router-dom'


const Category = () => {

  const [showCategory, setShowCategory] = useState(true)

  const showDigital = () =>{
    setShowCategory(true)
  }

  const showNonDigital = () =>{
    setShowCategory(false)
  }


  
  
  let activeClass1 = ''
  let activeClass2 = ''

  if(showCategory === true){
    activeClass1 = 'underlineClass1'
  }


  else if(showCategory === false){
    activeClass2 = 'underlineClass2'
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
                <Link to={'/talents'}><button>Explore All Talent</button></Link>
            </div>
        </div>

        <div className='catOption'>
            <p onClick={showDigital} className={activeClass1}>Digital skills</p>
            <p onClick={showNonDigital} className={activeClass2}>In-person Professions</p>
        </div>
      </div>

      {showCategory ? <DigitalCategory />  : <NonDigitalCategory /> }

      <Footer />
    </div>
  )
}

export default Category
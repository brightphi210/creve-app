import React from 'react'
import CreativeOnboardNav from '../../Components/CreativeOnboardComponent/CreativeOnboardNav'
import CreativeOnbardSide from '../../Components/CreativeOnboardComponent/CreativeOnbardSide'
import './CreativeOnboardCategory.scss'

const CreativeOnboardCategory = () => {
  return (
    <div>
        <CreativeOnboardNav />

        <div className='CreativeCatSection'>
            <CreativeOnbardSide />

            <div className='CreativeCatpart'>
                <h2>Choose a Category</h2>

                <div className='selectCat'>
                    <select name="" id="">
                        <option value="">Digital Skills</option>
                        <option value="">Non-Digital Skills</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreativeOnboardCategory
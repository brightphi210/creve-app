import React, {useState} from 'react'
import CreativeOnboardProfessional from './CreativeProfileCreate/CreativeOnboardProfessional'
import CreativeOnboardProfile from './CreativeProfileCreate/CreativeOnboardProfile'
import { Link } from 'react-router-dom'

const CreativeOnboardAll = () => {

    const [page, setPage] = useState(0)

    const FormTitle = ["1", "2", "3", ]


    const PageDisplayed = () => {

        if (page ===0){
            return   <CreativeOnboardProfile />
        }
        
        if (page === 1){
            return <CreativeOnboardProfessional />
        }
    }


  return (
    <div>
        {PageDisplayed()}

        <div>
            
            {page === 0 &&
            
                <div className='personalDetailsBtn'>
                    <button className='btnBlue2' onClick={(()=>setPage(1))}>Next</button>
                </div> 

            }

            { page === 1 &&
                <div className='personalDetailsBtn'>
                    <button className='btnBlue1' onClick={()=>{setPage(0)}}>Back</button>
                    <button className='btnBlue2' onClick={(()=>setPage(1))}>Save</button>
                </div> 
            }

        </div>
    </div>
  )
}

export default CreativeOnboardAll
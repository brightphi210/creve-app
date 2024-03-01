import React, { useState } from 'react'
import './CreativeModalUpdate.scss'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdAddCircleOutline } from "react-icons/md";

const FrequentQuestion = ({openModal, showModal, closeModal}) => {

    

  return (
    <div>

       {showModal && (
         <div className='frequentModal'>
            
            <div className='frequestModalContent'>
                <div className='frequentClose'>
                    <h2>Frequent Asked  Question</h2>
                    <p onClick={closeModal}><IoIosCloseCircleOutline /></p>
                </div>
                <div className='frequestInputPart'>
                    <div className='frequestAdd'>
                        <h3>Frequent Asked  Question</h3>
                        <button>Add <MdAddCircleOutline /></button>
                    </div>

                    <input type="text" />
                    <textarea name="" ></textarea>
                </div>

                <div className='frequestRender'>
                    <div>
                        <h3>What style do we use in development</h3>
                    </div>

                    <p>
                        Hi, I’m Cassie, Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam
                    </p>
                </div>
            </div>

        </div>
       )}
    </div>
  )
}

export default FrequentQuestion
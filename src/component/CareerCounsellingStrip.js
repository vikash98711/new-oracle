'use client'
import React, { useState } from 'react'
import FormModal from './FormModal';

const CareerCounsellingStrip = () => {
  const [showModal, setShowModal] = useState(false);
  const handleEnrollClick = () => {
    setShowModal(true);
  };
  return ( 
    
    <>
    <FormModal  show={showModal} handleClose={() => setShowModal(false)}/>
    <section className='CareerCounsellingStrip-wrapper'>
   <div className='container p-5'>
   

        <div className='d-flex justify-content-between align-items-center flex-wrap'>
            <h1 className='text-white'>Book Your Seat For Free Career Counselling!</h1>
            <button className='btn' onClick={handleEnrollClick}>APPLY NOW</button>
    


    
      
    </div>
   </div>
   </section>
    </>
  )
}

export default CareerCounsellingStrip;

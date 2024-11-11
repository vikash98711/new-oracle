'use client'
import FormModal from '@/component/FormModal';
import React, { useState } from 'react'

const CourseDetailsEnrollButton = () => {
    const [showModal, setShowModal] = useState(false);
  const handleEnrollClick = () => {
    setShowModal(true);
  }; 
  return (
    <>
    <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    <button className="eduact-btn eduact-btn-second" onClick={handleEnrollClick}>
    <span className="eduact-btn__curve" />
    Enroll Now
    <i className="icon-arrow" />
    </button>
    </>
  )
}

export default CourseDetailsEnrollButton
'use client'
import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap";

const FormModal = ({ show, handleClose }) => { 

  return (
    <> 
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title> Get In Touch With Us! </Modal.Title>
        
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group">
              <form className='popup-form'>
             
            
          
           
              <div className='row'>
            <div className="col-sm-12"> 
               <input type="text" className='form-control' name='name' id='name' placeholder='Name' required /> 
               </div>
               <div className="col-sm-12"> 
                <input type="email" className='form-control' name='email' id='email' placeholder='Email' required  /> 
                </div>

                <div className="col-sm-12"> 
               <input type="text"  className='form-control' name='phone' id='phone' placeholder='Phone Number' required /> 
               </div>
               <div className="col-sm-12"> 
                
                  <select className='form-control' name='course' id='course' required>
                     <option>Select Course</option>
                     
                     <option value={1}>French</option>
                     <option value={2}>German</option>
                     <option value={3}>Spanish</option>
                     <option value={4}>Engilsh Speaking</option>
                     <option value={5}>IELTS Coaching</option>
                     <option value={6}>Arabic</option>
                     <option value={7}>Chinese</option>
                     <option value={8}>Japanese</option>
                     <option value={9}>Russian</option>
                     <option value={10}>Hindi</option>
                     <option value={11}>OET Course</option>
                     <option value={12}>Korean</option>
                     <option value={13}>Study in Abroad</option>


                  </select>
               </div>
               <div className="col-sm-12"> 
               
               <textarea className='form-control' name='message' id='message' placeholder='Message'></textarea>
               </div>
             
               </div>

              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <button  className='btn border-0  text-white' style={{backgroundColor:'#ac0c30',padding:'10px 25px'}} > 
            Submit
          </button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default FormModal
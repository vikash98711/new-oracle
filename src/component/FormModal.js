'use client'
import axios from 'axios';
import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import Swal from 'sweetalert2';

const FormModal = ({ show, handleClose }) => { 
  const intial = {
    fname : "",
lname : "",
email : "",
phone : "",
education : "",
course_type : ""
 }
const [formdata , SetFormData]=useState(intial)


const HandleChange = (e)=>{
 SetFormData({...formdata , [e.target.name]: e.target.value})
}

const handleSubmit = async (e)=>{
 e.preventDefault();
 console.log(formdata,"formdata");
 
 try {
    const response = await axios.post("https://russianclassesindelhi.com/admin/public/api/upload_case_outsource_main" , formdata)
    if(response.status == 201){
       Swal.fire({
          title : "Form Submitted",
          icon : "success",
          showConfirmButton: false,
          timer: 1500
       })
       SetFormData(intial);
       handleClose();
    }
    
 } catch (error) {
  const errorMessage = error.response?.data?.message || "Something went wrong!";
    Swal.fire({
       title : errorMessage,
       icon : "error",
       confirmButtonText : "Ok"
    })
    
 }

}
  return (
    <> 
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title> Get In Touch With Us! </Modal.Title>
        
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group">
              <form className='popup-form' onSubmit={handleSubmit}>
             
            
          
           
              <div className='row'>
            <div className="col-sm-12"> 
               <input type="text" className='form-control' name='fname'  value={formdata.fname} placeholder='First Name' onChange={(e)=>HandleChange(e)} required /> 
               </div>
            <div className="col-sm-12"> 
               <input type="text" className='form-control' name='lname'  value={formdata.lname} placeholder='Last Name' onChange={(e)=>HandleChange(e)} required /> 
               </div>
               <div className="col-sm-12"> 
                <input type="email" className='form-control' name='email' value={formdata.email}  placeholder='Email' onChange={(e)=>HandleChange(e)} required  /> 
                </div>

                <div className="col-sm-12"> 
               <input type="text"  className='form-control' name='phone' value={formdata.phone}  placeholder='Phone Number' onChange={(e)=>HandleChange(e)} required /> 
               </div>
               <div className="col-sm-12"> 
                
                  <select className='form-control' name='course_type' value={formdata.course_type}  onChange={(e)=>HandleChange(e)} required>
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
               
               <input type="text"  className='form-control' value={formdata.education} name='education' placeholder='Message' required onChange={(e)=>HandleChange(e)}/> 

               </div>
             <div className='col-lg-12 text-end mt-2'>
             <button type='submit' className='btn border-0  text-white' style={{backgroundColor:'#ac0c30',padding:'10px 25px'}} > 
            Submit
          </button>
             </div>
               </div>

              </form>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>  */}
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
     
        {/* </Modal.Footer>  */}
      </Modal>
      </>
  )
}

export default FormModal
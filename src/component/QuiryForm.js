"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const QuiryForm = () => {
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
         SetFormData(intial)
      }
      
   } catch (error) {
      Swal.fire({
         title : "Something went wrong",
         icon : "error",
         confirmButtonText : "Ok"
      })
      
   }
  
}

return (
<>
<section className='Query-form-wrapper pt-pb'>
   <div className='container'>
      <div className='row'>
         <div className='col-lg-6 Query-form-wrapper'> <img className='img-fluid' src="https://www.pngall.com/wp-content/uploads/5/Learning-PNG-Free-Download.png"/> </div>
         <div className='col-lg-6'>
           <form className='inquiry-form' onSubmit={handleSubmit}>
            <h3> Join Us! </h3>
            <h4>Oracle Global Education</h4>
            <hr></hr>
            <div className='row'>
            <div className="mb-3 col-sm-6"> 
   
               <input type="text" className='form-control' value={formdata.fname} name='fname' id='fname' placeholder='First Name' required  onChange={(e)=>HandleChange(e)}/> 
               </div>
               <div className="mb-3 col-sm-6"> 
               <input type="text" className='form-control' value={formdata.lname}  name='lname' id='lname' placeholder='Last Name' required onChange={(e)=>HandleChange(e)} /> 
               </div>
               <div className="mb-3 col-sm-6"> 
                <input type="email" className='form-control' value={formdata.email}  name='email' id='email' placeholder='Email' required  onChange={(e)=>HandleChange(e)} /> 
                </div>

               <div className="mb-3 col-sm-6"> 
               <input type="text"  className='form-control' value={formdata.phone} name='phone' placeholder='Phone Number' required onChange={(e)=>HandleChange(e)}/> 
               </div>
               <div className="mb-3 col-sm-12">
                
                  <select className='form-control' name='course_type' value={formdata.course_type}  required onChange={(e)=>HandleChange(e)}>
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
               <div className="mb-3 col-sm-12"> 
               
               <input type="text"  className='form-control' value={formdata.education} name='education' placeholder='Education' required onChange={(e)=>HandleChange(e)}/> 

               </div>
               <div className="form-check my-2">
                              <input type="checkbox" className="form-check-input la_check" id="exampleCheck1" name="termscondition" value="accepted" required />
                              <label className="form-check-label p-0 m-0" htmlFor="exampleCheck1"> 
                              I Accept all
                              <a href="#" target="_blank" className="m-0 p-0">Terms & Conditions </a>
                              </label>
                           </div>
               </div>
               <button type="submit" name="submit"  className="btn btn-theme"> Submit <i className="fa-solid fa-arrow-right-to-bracket"></i> </button> 
            </form>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default QuiryForm;
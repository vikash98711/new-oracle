"use client"
import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const ContacusForm = () => {
  const intial = {
    fname : "",
lname : "",
email : "",
phone : "",
message : ""


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
      <div className='col-lg-6 Query-form-wrapper'>
<img src="/assets/img/slide-girl.png"/>
      </div>
      <div className='col-lg-6'>

     
           <form className='contact-form' onSubmit={handleSubmit}>
            <h3> Get In Touch With Us! </h3>
            <h4>Interested in discussing</h4>
            <hr></hr>
            <div className='row'>
            <div className="mb-3 col-sm-6 col-12"> 
            
               <input type="text" className='form-control' name='fname' value={formdata.fname}  placeholder='First Name' required  onChange={(e)=>HandleChange(e)} /> 
               </div>
            <div className="mb-3 col-sm-6 col-12"> 
            
               <input type="text" className='form-control' name='lname' value={formdata.lname}  placeholder='Last Name' required  onChange={(e)=>HandleChange(e)} /> 
               </div>
              
               <div className="mb-3 col-sm-6 col-12"> 
                <input type="email" className='form-control' name='email' value={formdata.email}  placeholder='Email' required  onChange={(e)=>HandleChange(e)} /> 
                </div>

               <div className="mb-3 col-sm-6 col-12"> 
               <input type="text"  className='form-control' name='phone' value={formdata.phone}  placeholder='Phone Number' required   onChange={(e)=>HandleChange(e)}/> 
               </div>
              
               <div className="mb-3 col-sm-12"> 
               
               <textarea className='form-control' name='message' value={formdata.message}  placeholder='Message'  onChange={(e)=>HandleChange(e)} required></textarea>
               </div>
            
               </div>
               <button type="submit" name="submit"  className="btn btn-theme"> Submit <i className="fa-solid fa-arrow-right-to-bracket"></i> </button> 
            </form>
        

      </div>
    </div>
  </div>

</section>
    {/* <section className='Query-form-wrapper pt-pb'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-6 Query-form-wrapper'>
<img src="/assets/img/slide-girl.png"/>
      </div>
      <div className='col-lg-6'>

     
           <form className='contact-form' method='post'>
            <h3> Get In Touch With Us! </h3>
            <h4>Interested in discussing</h4>
            <hr></hr>
            <div className='row'>
            <div className="mb-3 col-sm-6"> 
            
               <input type="text" className='form-control' name='name' id='name' placeholder='Name' required /> 
               </div>
              
               <div className="mb-3 col-sm-6"> 
                <input type="email" className='form-control' name='email' id='email' placeholder='Email' required  /> 
                </div>

               <div className="mb-3 col-sm-12"> 
               <input type="text"  className='form-control' name='phone' id='phone' placeholder='Phone Number' required /> 
               </div>
              
               <div className="mb-3 col-sm-12"> 
               
               <textarea className='form-control' name='message' id='message' placeholder='Message'></textarea>
               </div>
            
               </div>
               <button type="submit" name="submit"  className="btn btn-theme"> Submit <i className="fa-solid fa-arrow-right-to-bracket"></i> </button> 
            </form>
        

      </div>
    </div>
  </div>

</section> */}
  </>
  )
}

export default ContacusForm;

import React from 'react'

const ContacusForm = () => {
  return (
  <>
    <section className='Query-form-wrapper pt-pb'>
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

</section>
  </>
  )
}

export default ContacusForm;

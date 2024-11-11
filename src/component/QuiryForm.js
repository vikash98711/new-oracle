import React from 'react'
const QuiryForm = () => {
return (
<>
<section className='Query-form-wrapper pt-pb'>
   <div className='container'>
      <div className='row'>
         <div className='col-lg-6 Query-form-wrapper'> <img className='img-fluid' src="https://www.pngall.com/wp-content/uploads/5/Learning-PNG-Free-Download.png"/> </div>
         <div className='col-lg-6'>
           <form className='inquiry-form' action={'https://russianclassesindelhi.com/admin/public/share-link/eyJpdiI6IjcvME9hODJiYUNUM0lvZlpHaTRLYUE9PSIsInZhbHVlIjoiQXdaZnVGc3FhZDFEWmo5djI5aytydz09IiwibWFjIjoiODdkNDE5Yjk5YjJjNjk1ZWJjOWQyZjdmNTU5NjIwN2EyNTNmNjVjY2Y5Y2I0YzMwYmIzOTE4YzU2NTA5YmUxZSIsInRhZyI6IiJ9'} method='post'>
            <h3> Join Us! </h3>
            <h4>Oracle Global Education</h4>
            <hr></hr>
            <div className='row'>
            <div className="mb-3 col-sm-6"> 
            <input type="hidden" name="_token" value="eWLg8PasNMujgE014ctuywcdv9i01zxfvXeNlxnY" /> 
               <input type="text" className='form-control' name='fname' id='fname' placeholder='First Name' required /> 
               </div>
               <div className="mb-3 col-sm-6"> 
               <input type="text" className='form-control' name='lname' id='lname' placeholder='Last Name' required /> 
               </div>
               <div className="mb-3 col-sm-6"> 
                <input type="email" className='form-control' name='email' id='email' placeholder='Email' required  /> 
                </div>

               <div className="mb-3 col-sm-6"> 
               <input type="text"  className='form-control' name='phone' id='Mobile_Number' placeholder='Phone Number' required /> 
               </div>
               <div className="mb-3 col-sm-12">
                
                  <select className='form-control' name='course_type' id='course_type' required>
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
               
               <textarea className='form-control' name='education' id='education' placeholder='Message'></textarea>
               </div>
               <div className="form-check my-2">
                              <input type="checkbox" className="form-check-input la_check" id="exampleCheck1" name="termscondition" value="accepted" required />
                              <label className="form-check-label p-0 m-0" for="exampleCheck1"> 
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
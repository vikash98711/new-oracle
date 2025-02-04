import React from 'react'

const HappyStudentStrip = () => {
  return (
    <>
  <section className='schedule-sec'>
<div className="container">
    <div className="row d-flex  mb-2 position-relative">
    <div className=' col-lg-8 col-md-12 col-sm-12 py-100 pt-pb first-box-schedule'>
   
    <h2 className='text-white book-your-sheet-strip'>Book Your Seat For Free Career Counselling!
    We'll make you understand the procedures. </h2>
    {/* <a className='btn-hover bg-white text-primary Sechdule-afree-call' href='#'>Schedule a FREE Call</a> */}
    </div>
    {/* <div className=" col-sm-12 col-lg-4 col-md-12  mt-2 schedule-second-box-image">  */}
    <div className=" col-sm-12 col-lg-4 col-md-12  mt-2 pt-pb first-box-schedule"> 
    <a className='btn-hover bg-white text-primary Sechdule-afree-call' href='#'>Schedule a FREE Call</a>
  
     {/* <img src="https://www.pngkit.com/png/full/362-3629046_corporate-office-girl-call-centre-png.png" className='img-fluid' style={{width:"200px"}}></img> */}
    </div> 
    </div>
    </div>
    </section>


    </>
  )
}

export default HappyStudentStrip;

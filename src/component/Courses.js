import { CourseData } from '@/utils/data'
import Link from 'next/link'
import React from 'react'


const Courses = () => {

    const CourseList = CourseData
    
    

  return (
    <section className='course-bg py-100 pt-pb'>
        <div className="container">
            <div className="d-flex justify-content-between gap-1 align-items-end flex-wrap mb-2 position-relative">
            <div className='main-title mb-0'>
            <h5> Top-notch Language Curriculum</h5>
            <h2 className='sec-title'>Highlighted Programs in Language Courses </h2>
            </div>
            <div className="mb-0 "> 
                <Link href="/best-international-laungage-courses" className=' border-0 text-white btn-hover color-2 color22 d-flex align-items-center gap-2 courses-view-all'>View All
                <img src="/assets/img/viewAll.gif" alt="view" width={28} />
                 </Link> 
            </div> 
            </div> 

            <div className="row">


                {CourseList.slice(0, 12).map((courseValue)=>(
                     <div className="col-lg-4 col-md-6 col-12 mt-3" key={courseValue.id}>
                     <div className="courses-card-wrapper">
                     <img src={courseValue?.image} alt="eduact" className='img-fluid position-relative'/>
                     <div className="courses-card-box position-relative">
                     
                     <span className="courses-img-wrap d-inline-block rounded-circle  bg-secondary position-absolute top-0 end-0"> 
                             <img src={courseValue.flagImage} alt="courses" className='img-fluid w-100 rounded-circle' />
                         </span> 
                    
                        
                         <div className='content'>
                         <h4 className='courses-courseName'>
                             <Link href={`/${courseValue.slug}`}>{courseValue.title}</Link>
                         </h4>
                        
                       
                     
                         
                         <div className='d-flex justify-content-between align-items-center mt-3'>
                         <p><i className="fa-regular fa-clock"></i>&nbsp;<b>Timing: </b>{courseValue.timing}</p>
                        {/* <p className="btn btn-theme">
                             <i className="text-white fa-solid fa-indian-rupee-sign"> {courseValue.price}</i> 
                             </p> */}
                        </div>
                         {/* <p><i className="fa-regular fa-clock"></i>&nbsp;<b>Timing: </b>{courseValue.timing}</p> */}
                        <p><i className="fa-regular fa-calendar"></i>&nbsp;<b>Duration:  </b>{courseValue.duration}</p>
                      
                        {/* <p className="btn btn-theme"> <i className="text-white fa-solid fa-indian-rupee-sign"></i> {courseValue.price}</p> */}
                        <div className='mt-3'>
                            
                         <span className="bedge ml-0"> 
                         <i className="fa-solid fa-chalkboard-teacher"> {courseValue.totalClass} Classes</i>&nbsp;
                            
                            

                         </span>

<span className='bedge ms-2' style={{backgroundColor:'#004f76 !important'}}><i className="fa-solid fa-users"> {courseValue.batchSize}</i>&nbsp;<b></b></span>
                         </div>
                         </div>
                     </div>
 
                     </div>
                 </div> 
                ))} 


            </div>
        </div>
    </section>
  )

}

export default Courses
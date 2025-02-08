// import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import React from 'react'
import CompanyLogoSlider from '../../component/CompanyLogoSlider';
import QuiryForm from '@/component/QuiryForm';
import { CourseData } from '@/utils/data';
import Link from 'next/link';
// import TopBannerDetails from '@/component/TopBannerDetails';

 
export  function generateMetadata(){     
  return{
      title: "Enroll For The Best International Language Institute in Delhi for The Best International Language Course",
      description: "As the demand for language proficiency continues to grow this institute plays a pivotal role. The Oracle International Language Institute brings together under one roof a wide range of international professional and vocational qualifications.",
      keywords: ['best international language institute in dlehi', 'best foreign language institute in delhi', 'best leading language institute in dlehi', 'best language teaching institute in delhi', 'study with best global language institute oracle'],
      alternates: {
        canonical: `https://oracleglobaleducation.com/best-international-laungage-courses`,
      },  
  }
}


const page = () => {
  const CourseList = CourseData
  return (
    <>
      <Navigation />



      {/* <CoomonStudentSlider /> */}
    
   <div className="sub-banner" style={{background:'url(/assets/img/english.jpg)'}}>
      <div className="container">
         <div className="col-sm-12 text-center">
            <h2>  Courses</h2>
            <p>
                <Link className="btn btn-theme" href="/contact-us-for-more-information">Talk to Our Experts</Link>
            </p>
         </div>
      </div>
   </div>
      <section className="course-two course-two--page pt-pb">

        <div className="container">
          <div className="row align-items-center justify-content-center">
            {CourseList.map((courseValue) => (
              <div className="col-xl-4 col-md-6 wow fadeInUp animated" key={courseValue.id}>
                <div className="course-two__item">
                  <div className="course-two__thumb">
                    <Link href={`/${courseValue.slug}`}>
                      {/* <img src={courseValue.image} alt="eduact" /> */}
                      <img src={courseValue.thumbnail} alt="eduact" />
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 177">
                      <path d="M37 0C16.5655 0 0 16.5655 0 37V93.4816C0 103.547 4.00259 113.295 11.7361 119.737C54.2735 155.171 112.403 177 176.496 177C240.589 177 298.718 155.171 341.261 119.737C348.996 113.295 353 103.546 353 93.4795V37C353 16.5655 336.435 0 316 0H37Z" />
                    </svg>
                  </div>

                  <div className="course-two__content">
                    {courseValue.totalClass &&
                      <div className="course-two__time">{courseValue.totalClass} Classes</div>}
                    {courseValue.ratingCount &&
                      <div className="course-two__ratings">
                        <span className="icon-star fa-solid fa-star" />
                        <span className="icon-star fa-solid fa-star" />
                        <span className="icon-star fa-solid fa-star" />
                        <span className="icon-star fa-solid fa-star" />
                        <span className="icon-star fa-solid fa-star-half-stroke" />
                        <div className="course-two__ratings__reviews">( {courseValue.ratingCount} Reviews) </div>
                      </div>}
                    <h3 className="course-two__title mb-2">
                      <Link href={`/${courseValue.slug}`}>{courseValue.title}</Link>
                    </h3>
                    {courseValue.batchSize &&
                      <p className='mb-0'><i className="fa-solid fa-users text-secondary me-2"></i>&nbsp;Batch Size - {courseValue.batchSize} Students</p>}
                    {courseValue.timing &&
                      <p className='mb-0'><i className="fa-regular fa-clock text-secondary me-2"></i>&nbsp;Timing- {courseValue.timing}</p>}
                      {courseValue.duration &&
                      <p><i className="fa-regular fa-clock text-secondary me-2"></i>&nbsp;Course Duration- {courseValue.duration}</p>}
                      {/* {courseValue.price &&
                    <div className="d-flex justify-content-between gap-2 flex-wrap bg-soft1 p-2 rounded">
                      <div className='d-flex  align-items-center justify-content-between gap-2 w-100'>
                        <p className="fw-bold text-white mb-0">Fees</p>
                        <h5 className=" text-end mb-0"> <i className="fa-solid fa-indian-rupee-sign"></i> {courseValue.price}</h5>
                      </div>
                     
                    </div> } */}
                  </div>

                </div>

              </div>
            ))}

           
          </div>
        </div>

      </section>






      <QuiryForm />

      <CompanyLogoSlider />



      <Footer />
    </>
  )
}

export default page;

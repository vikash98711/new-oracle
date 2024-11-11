import CompanyLogoSlider from '@/component/CompanyLogoSlider';
import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import QuiryForm from '@/component/QuiryForm';
import TopBannerDetails from '@/component/TopBannerDetails';
import CourseDetailsEnrollButton from '@/utils/CourseDetailsEnrollButton';
import CourseReview from "@/component/CourseReview";
import { CourseData } from '@/utils/data';
import Link from 'next/link';
import React from 'react'

const page = () => {
  const CourseList = CourseData
  return (
    <>
      <Navigation />

      {/* <CoomonStudentSlider /> */}
   
     <div className="sub-banner" style={{background:'url(/assets/img/online.jpg)'}}>
      <div className="container">
         <div className="col-sm-12 text-center">
            <h2> Online Class</h2>
            <p>
                <Link className="btn btn-theme" href="/contact-us-for-more-information">Talk to Our Experts</Link>
            </p>
         </div>
      </div>
   </div>
      <section className="course-details branch visit-our-branches-in-delhi pt-pb">
      

        <div className="container mt-5">


          <div className="row">
            <div className="col-xl-8 kids-section-wright-side">
            <h2> ONLINE CLASSES</h2>
              <div className="course-details__meta">
               
                <div className="course-details__meta__ratings">
                  <span className="fa-solid fa-star" />
                  <span className="fa-solid fa-star" />
                  <span className="fa-solid fa-star" />
                  <span className="fa-solid fa-star" />
                  <span className="fa-solid fa-star" />
                  <div className="course-details__meta__ratings__reviews">
                    (25 Reviews)
                  </div>
                </div>
              </div>
              <h3 className="course-details__sidebar__title">ONLINE CLASSES</h3>
              <div className="course-details__tabs tabs-box">
                <p className="course-details__overview__text">
                Today, MULTILINGUALISM Is Becoming the norm with over half of the World’s population being at least Bilingual. And this figure is growing aggressively.


                </p>
<p className="course-details__overview__text">Today Internet and technology has made the world so small that on a click of mouse makes everything possible. Even our education system not spared by this development. Over the years technological advancements have made this possible in very interesting ways.</p>

                <h3 className="course-details__sidebar__title">SO WHERE DO YOU FIT INTO THIS CHANGING WORLD ?</h3>
                <p className="course-details__overview__text">Now is the time to Enhance your knowledge by learning Foreign Languages Online.</p>
                <h3 className="course-details__sidebar__title">Wondering How ?</h3>
                <p className="course-details__overview__text">WELL WE PRESENT YOU ORACLE INTERNATIONAL LANGUAGE INSTITUTE - OFFERING CERTIFIED ONLINE LANGUAGE COURSES IN :</p>
                <div className="row">
                  <div className="col-sm-6">
                  <ul className="list-unstyled course-details__overview__lists">
                        <li><span className="fa-solid fa-check icon-check" /> English</li>
                        <li><span className="fa-solid fa-check icon-check" /> IELTS</li>
                        <li><span className="fa-solid fa-check icon-check" /> French</li>
                        <li><span className="fa-solid fa-check icon-check" /> German</li>
                     </ul>
                  </div>
                  <div className="col-sm-6">
                  <ul className="list-unstyled course-details__overview__lists">
                        <li><span className="fa-solid fa-check icon-check" /> Spanish</li>
                        <li><span className="fa-solid fa-check icon-check" /> Arabic</li>
                        <li><span className="fa-solid fa-check icon-check" /> Chinese</li>
                        <li><span className="fa-solid fa-check icon-check" /> Japanese</li>
                     </ul>
                  </div>
               </div>
              <h3 className="course-details__sidebar__title">Benefits of Online Classes</h3>
              <ul className="list-unstyled course-details__overview__lists">
                  <li><span className="fa-solid fa-check icon-check" /> Enroll yourself amongst other passionate individuals like you, who want to make the best of this time</li>
                  <li><span className="fa-solid fa-check icon-check" /> Join our Virtual Lectures</li>
                  <li><span className="fa-solid fa-check icon-check" /> Take your Classes from comfort of your home</li>
                  <li><span className="fa-solid fa-check icon-check" /> Interact with other fellow Students and Professors</li>
                  <li><span className="fa-solid fa-check icon-check" /> Record your lectures and can be viewed later</li>
                  <li><span className="fa-solid fa-check icon-check" /> Flexible Learning Schedule</li>
                  <li><span className="fa-solid fa-check icon-check" /> Learn and grow with Oracle International Language Institute’s Online Classes and Earn your Certificates.</li>
               </ul>
               <p className="course-details__overview__text">Online education is changing the world, and Oracle Global Education is the best place to find digital higher education providers from around the world. As the online flagship of the Keystone Academic Solutions family of multi-lingual, student-centered websites, Oracle Global Education makes it easy for students to connect with online university programs, digital schools, blended learning platforms, and remote course providers. The future of higher education is online and international and domestic students trust Oracle Global Education.</p>
            </div>
            </div>
            <div className="col-xl-4 wow fadeInRight animated">
              <div className="course-details__sidebar">
              <div className="course-details__sidebar__item">
                  
                  <h3 className="course-details__sidebar__title">Course Features</h3>
                 

                  <ul className="course-details__sidebar__lists clerfix">
                    <li>
                      <i className="fa-regular fa-calendar-days icon-history" />

                      Duration<span>  3 Months - 12 Months</span>
                    </li>
                    <li>
                      <i className="fa-regular fa-clock icon-history" />
                      Timing<span>  9:30 AM - 9:30 PM</span>
                    </li>
                    <li>

                      <i className="fa-solid fa-users icon-reading" />
                      Batch Size <span>  7-10 Students</span>
                    </li>
                  
                  </ul> 
                  <CourseDetailsEnrollButton />
                </div>
                <div className="course-details__sidebar__item">
                <h3 className="course-details__sidebar__title">Latest Course</h3>
                  <br></br>
                  <ul className="more-course">
                    {CourseList.map((courseValue) => (
                      <li key={courseValue.id}>
                            <Link href={`/${courseValue.slug}`}>{courseValue.title}</Link>
                      </li>
                    ))} 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CourseReview />
      <CompanyLogoSlider />
      <Footer />
    </>
  )
}

export default page;

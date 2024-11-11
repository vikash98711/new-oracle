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

    
     <div className="sub-banner" style={{background:'url(/assets/img/kids.jpg)'}}>
      <div className="container">
         <div className="col-sm-12 text-center">
            <h2>  EST EDUCATION PROGRAMS FOR KIDS AND TEENS</h2>
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
            <h2> BEST EDUCATION PROGRAMS FOR KIDS AND TEENS</h2>
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
              <h3 className="course-details__sidebar__title">KIDS SECTION</h3>
              <div className="course-details__tabs tabs-box ">
                <p className="course-details__overview__text">
                  Oracle International Language Institute presents Kids and Teen programmes :-
                  “Wisdom is totality of intuition and analytical brains”
                </p>


                <h3 className="course-details__sidebar__title">WHY SHOULD A KID WAIT TO LEARN FROM HIS/HER OWN MISTAKES ?</h3>
                <p className="course-details__overview__text">Our English courses for kids have been designed around the way children can learn everything very easily.
                  We have number of courses available for kids which will help to develop their brain and make them future ready…</p>
                <ul className='course-details__sidebar__lists clerfix Kids-section-ul'>
                  <li>
                    <i className="fa-solid fa-angles-right icon-history" />
                    English
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right icon-history" />
                    French
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right icon-history" />
                    German
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right icon-history" />
                    Spanish
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right icon-history" />
                    Personality Development
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right icon-history" />
                    Computer Courses
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right icon-history" />
                    Stage Facing
                  </li>
                </ul>
                {/* <p className="course-details__overview__text text-dark">Explore our range of courses available through online and offline resources.</p> */}
                <p className="course-details__overview__text">Explore our range of courses available through online and offline resources. <br></br>Our Online, offline classroom courses encourage children to experiment with language, build confidence and improve their communication skill in a safe supportive environment .</p>
                <h3 className="course-details__sidebar__title">CREATIVE LEARNING</h3>

                <p className="course-details__overview__text">Seeking a perfect place for your Teens during the most crucial years of their development ? <br></br>Oracle Institute is the place where your child can learn, develop his/her skills and self-expression through the most innovative play-way method.
                  They will have the freedom to explore and experiment very aspect of knowledge which will result in their holistic development.</p>
                <h3 className="course-details__sidebar__title">Given points will be the part of your course</h3>
                <ul className="list-unstyled course-details__overview__lists">
                  <li>
                    <span className="fa-solid fa-check icon-check" />
                    Vocab Enhance
                  </li>
                  <li>
                    <span className="fa-solid fa-check icon-check" />
                    Drama
                  </li>
                  <li>
                    <span className="fa-solid fa-check icon-check" />
                    Role Play
                  </li>
                  <li>
                    <span className="fa-solid fa-check icon-check" />
                    Songs
                  </li>
                  <li>
                    <span className="fa-solid fa-check icon-check" />
                    School Language Syllabus
                  </li>
                  <li>
                    <span className="fa-solid fa-check icon-check" />
                    Personality Development
                  </li>
                </ul>
                <p className="course-details__overview__text">Above mentioned points will also be the part of language course (French, German, Spanish, English).</p>
                <h3 className="course-details__sidebar__title">TRAINED FACILITATORS</h3>
                <p className="course-details__overview__text">We have qualified, enthusiastic teachers who employ their innovative teaching style and techniques for enhancing your kids / teens to dazzling trail.</p>
                <h3 className="course-details__sidebar__title">COURSE DETAILS :- FOR JUNIORS / TEENS</h3>
                <p className="course-details__overview__text">French / German / Spanish / Personality Development <br></br>45 Days – 3 Months Regular Course<br></br>Crash Course – 30 Days</p>
                <h3 className="course-details__sidebar__title">Spoken English</h3>
                <p className="course-details__overview__text">3 Months</p>
                <h3 className="course-details__sidebar__title">HOLIDAYS COURSE ARE ALSO AVAILABLE (FOR SUMMER VACATION AND VINTOR BRAKE)</h3>
                <p className="course-details__overview__text">Course Duration<br></br>15 Days Course,<br></br>30 Days Course ,<br></br>2 Months Course</p>
                <p className="course-details__overview__text">LEARN INDEPENDENTLY BY DEVELOPING EFFECTIVE READING, SPEAKING, WRITING AND LISTENING SKILLS.</p>
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

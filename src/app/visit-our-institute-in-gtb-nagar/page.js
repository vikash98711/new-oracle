'use client'
import CompanyLogoSlider from '@/component/CompanyLogoSlider';

import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import QuiryForm from '@/component/QuiryForm';
import TopBannerDetails from '@/component/TopBannerDetails';
import { CourseData } from '@/utils/data';
import Link from 'next/link';
import React from 'react'

const page = () => {
  const CourseList = CourseData
  return (
    <>
      <Navigation />
      <div className="sub-banner" style={{background:'url(/assets/img/about.jpg)'}}>
      <div className="container">
         <div className="col-sm-12 text-center">
            <h2> Our Branch</h2>
            <p className='text-center'>
                <Link className="btn btn-theme" href="/contact-us-for-more-information">Talk to Our Experts</Link>
            </p>
         </div>
      </div>
   </div>
      <section className="course-details branch visit-our-branches-in-delhi pt-pb">
        {/* <h2 className="text-center">HOME OUR ORACLE GLOBAL EDUCATION BRANCHES IN DELHI</h2> */}

        <div className="container mt-3">


          <div className="row">
            <div className="col-xl-8 our-branches-wrapper-left">
              {/* <div className="course-details__thumb">
                <img src="/assets/img/china.jpg" alt="eduact" />
              </div> */}
              <h2 className="mb-3">ORACLE GLOBAL EDUCATION BRANCH IN GTB Nagar</h2>

              <div className="course-details__meta">
                <div className="course-details__meta__cats ms-0">
                  <Link href="/" >Oracle International Language Institute</Link>
                </div>
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

              <h3 className="course-details__sidebar__title">OUR BRANCHES</h3>
              <div className="course-details__tabs tabs-box">
                <p className="course-details__overview__text">
                  Oracle International Language Institute is located in GTB Nagar, Delhi. With the more advance-learning format and extra efforts with extra experienced language, experts are here to make you perfect in your chosen language.
                </p>
                <p className="course-details__overview__text">
                  We are very well crafted to make you expert in various international languages like English, Arabic, French, German, Spanish, Japanese, etc. the list does not ends very soon after getting here you find many languages to study with our best faculty members (under individual assistance).
                </p>
                <p className="course-details__overview__text">
                  We are equipped with all, whatever can feel you special and like a proficient after getting here, touch this emotion of our youngsters we have-
                </p>

                <h3 className="course-details__sidebar__title">DIGITAL CLASSES TO MAKE YOU BETTER</h3>
                <p className="course-details__overview__text">All this is only for you! To facilitate you at your place only with special learning modules digitalized classrooms with audio and video lectures. We are well equipped with digital technology and digital classrooms to make you more perfect and pro in your favourite language.</p>
                <h3 className="course-details__sidebar__title">WELL-CRAFTED LANGUAGE EXPERTS</h3>
                <p className="course-details__overview__text">With our educational community and language experts community, you get global opportunities to serve various industries and markets whether you are looking for bureaucracy or international business.</p>
                <ul className="list-unstyled course-details__overview__lists">
                  <li>
                    <span className="fa-solid fa-check icon-check" />
                    Nam at elit nec neque suscipit gravida.
                  </li>
                  <li>
                    <span className="fa-solid fa-check icon-check" />
                    Aenean egestas orci eu maximus tincidunt.
                  </li>
                  <li>
                    <span className="fa-solid fa-check icon-check" />
                    Curabitur vel turpis id tellus cursus laoreet.
                  </li>
                </ul>
                
              </div>
            </div>
            <div className="col-xl-4 wow fadeInRight animated">
              <div className="course-details__sidebar Course-Categories-wrapper">
                {/* <div className="course-details__sidebar__item">
                  <h3 className="course-details__sidebar__title">Course Categories</h3>
                  <ul className="course-details__sidebar__lists clerfix">
                    {CourseList.map((courseValue) => (
                      <li key={courseValue.id}>
                        <Link href={`/${courseValue.slug}`} className='text-muted ws-6'><i className="fa-solid fa-angles-right icon-history" />
                          {courseValue.title}</Link>

                      </li>
                    ))}

                  </ul>
                </div> */}
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
            <div className='row'>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3502.020890026059!2d77.214772!3d28.629136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x76933fe29809ad22!2sOracle%20International%20Language%20Institute%20-%20Best%20Ielts%2CEnglish%2CFrench%2CGerman%2C%20Arabic%2C%20Chinese%2C%20Spanish%20Classes%20in%20Delhi!5e0!3m2!1sen!2sin!4v1600151023277!5m2!1sen!2sin"
                width="100%"
                height={400}

                style={{ border: "3px solid #F2184F" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.9236527644986!2d77.20487982920471!3d28.698780575258205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd738a5f6085%3A0x8a9a1d4b404430d2!2sOracle%20International%20Language%20Institute%20-%20Best%20Ielts%2CEnglish%2CFrench%2CChinese%20Classes%20in%20Kingsway%20Camp%20Branch!5e0!3m2!1sen!2sin!4v1603456626987!5m2!1sen!2sin"
                width="100%"
                height={400}

                style={{ border: "3px solid #F2184F" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
            </div>


          </div>
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

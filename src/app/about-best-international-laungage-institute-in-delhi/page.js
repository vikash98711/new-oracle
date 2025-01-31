import React from 'react'
import CompanyLogoSlider from '../../component/CompanyLogoSlider'
import QuiryForm from '@/component/QuiryForm'
import Navigation from '@/component/Navigation'
import Footer from '@/component/Footer'
import CoomonStudentSlider from '@/component/CoomonStudentSlider'
import Link from 'next/link';
import TopBannerDetails from '@/component/TopBannerDetails'
import HappyStudentStrip from '@/component/HappyStudentStrip'
import OurService from "@/component/OurService";
import CourseReview from "@/component/CourseReview";


export function generateMetadata(params) {
  return {
    title: "ABOUT US. Oracle International Language Institute is the Best coaching and training  institute for International Language",
    description: "Oracle International Language Institute teaches a wide range of language courses for global communication. It is the best international language institute in Delhi for a beginner or an advanced learner. This institute formats its programs to suit various proficiency levels. ",
    keywords: ['best language institute to learn any language', 'best foreign language institute in delhi', 'study with leading language institute in delhi', 'best language teaching institute in delhi', 'oracle global language institute in delhi'],
    alternates: {
      canonical: `https://oracleglobaleducation.com/about-best-international-laungage-institute-in-delhi`,
    },
  }
}



const Page = () => {
  return (
    <>
      <Navigation />
      <div className="sub-banner" style={{background:'url(/assets/img/about.jpg)'}}>
      <div className="container">
         <div className="col-sm-12 text-center">
            <h2> About Us</h2>
            <p>
                <Link className="btn btn-theme" href="/contact-us-for-more-information">Talk to Our Experts</Link>
            </p>
         </div>
      </div>
   </div>
 <section className="about-two about-two--about pt-pb">
   <div className="hero">
      <div className="item">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-12 col-md-8 col-lg-6">
                  <h2 className="sec-title text-primary">
                     <b> We Create Leaders for Tomorrow</b>
                  </h2>
                  <p className="">
                     The Oracle International Language Institute brings together under one roof a wide range of international professional and vocational qualifications through its high tech, state of the art teaching centers, strategically located across the country. It offers interesting and innovative programmes blended with industrial experience and practical application that will appeal to the academic community as well as to a range of other sectors in the market place.
                  </p>
                  <div className="group">
                     <h4 className='text-primary'><b>Our Mission</b></h4>
                     <hr>
                     </hr>
                     <p>Achieve academic excellence in professional education at par with the leading national and international institutions. Focus on practical aspects of the course material so as to make learning a meaningful and interesting experience in our intellectually stimulating campus.</p>
                     <p>Create an environment with people having similar goals and aspirations to be visionaries. Actively encourage collaboration with industries, communities and the fellow institutions in the country and abroad. Work to inculcate high moral and ethical values amongst the students to make them responsible citizens and good human beings.</p>
                  </div>
               </div>
               <div className="col-12 col-md-4 col-lg-6">
                  <div className="hero-pic">
                     <img src="/assets/img/banner-pic.png" className="img-fluid" alt="Banner Image" />
                     <span className="circle-icon box-icon-float">
                     <img src="/assets/img/badge.svg" className="img-fluid" alt="badge" />
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<div className="Home-page-ul-wrapper">
   <div className="container">
      <div className="row">
         <ul className="">
            <div className="row">
               <div className="col-lg-12 col-md-12 col-12">
                  <h3 className='text-white'>Why Choose Oracle Language Institute</h3>
                  <hr>
                  </hr>
                  <div>
                     <h5 className="fw-bold mb-2"> Excellence in Education </h5>
                     <ul className='mb-3'>
                        <li><i className="fa-solid fa-check-circle"></i>&nbsp; &nbsp;Experienced and certified instructors with proven teaching methods.                      </li>
                        <li><i className="fa-solid fa-check-circle"></i>&nbsp; &nbsp;Interactive and engaging curriculum that focuses on all aspects of language acquisition (speaking, listening, reading, writing). </li>
                        <li><i className="fa-solid fa-check-circle"></i>&nbsp; &nbsp;Small class sizes for personalized attention and effective learning. </li>
                     </ul>
                     <h5 className="fw-bold mb-2"> Wide Range of Languages </h5>
                     <ul className='mb-3'>
                        <li><i className="fa-solid fa-check-circle"></i>&nbsp;&nbsp;  We offer courses in a diverse selection of languages, including French, Spanish, German, Chinese, Japanese, English (for non-native speakers), and more. </li>
                     </ul>
                     <h5 className="fw-bold mb-2"> Flexible Learning Options</h5>
                     <ul className='mb-3'>
                        <li><i className="fa-solid fa-check-circle"></i>&nbsp;&nbsp; Cater to busy schedules with a variety of class formats: group classes, private lessons, online courses, and intensive programs. </li>
                        <li><i className="fa-solid fa-check-circle"></i>&nbsp;&nbsp; Daytime, evening, and weekend classes are available. </li>
                     </ul>
                     <h5 className="fw-bold mb-2"> Focus on Communication</h5>
                     <ul className='mb-3'>
                        <li><i className="fa-solid fa-check-circle"></i>&nbsp; &nbsp;  Our curriculum emphasizes real-world use of language, preparing you for travel, business interactions, or academic pursuits. </li>
                     </ul>
                     <h5 className="fw-bold mb-2"> Proven Success</h5>
                     <ul className='mb-4'>
                        <li><i className="fa-solid fa-check-circle"></i>&nbsp; &nbsp; We boast a high success rate, with students consistently achieving their language learning goals.</li>
                        <li><i className="fa-solid fa-check-circle"></i>&nbsp; &nbsp; Many of our graduates have moved on to pursue successful careers in international fields or excelled in their academic journeys. </li>
                     </ul>
                  </div>
               </div>
            </div>
         </ul>
      </div>
   </div>
</div>
<div className='container'>
   <div className='row align-items-center justify-content-center'>
      <div className='col-sm-12'>
      </div>
   </div>
</div>
<section className='pt-5'>
   <div className="container">
      <div className='row align-items-center justify-content-center'>
         <div className='col-sm-6'>
            <h2 className='text-primary'>Beyond the Classroom:  </h2>
            <hr>
            </hr>
            <h5 className="fw-bold text-primary"><i className="fa-solid fa-check-circle"></i> Cultural Events & Activities</h5>
            <ul className='mb-3'>
               <li>Immerse yourself in the language and culture through workshops, movie nights, and social events.</li>
            </ul>
            <h5 className="fw-bold text-primary"><i className="fa-solid fa-check-circle"></i> Career Support</h5>
            <ul className='mb-3'>
               <li>We offer resources and guidance to help leverage your language skills in the job market. </li>
            </ul>
            <h5 className="fw-bold  text-primary"><i className="fa-solid fa-check-circle"></i> Lifelong Learning Community</h5>
            <ul className='mb-3'>
               <li>Become part of our vibrant learning community and connect with fellow language enthusiasts.</li>
            </ul>
         </div>
         <div className='col-sm-6'>
            <img src='https://templates.envytheme.com/ketan/default/assets/img/who-we-are/who-we-are-2.png' className='img-fluid'/>
         </div>
      </div>
   </div>
</section>
<OurService />
<div className="fact-one pt-pb">
   <div className="container">
      <div className="row">
         <div className="col-lg-3 col-md-6 col-sm-12 p-0">
            <div className="fact-one__item text-center bg-color1">
               <span><i className="fa-solid fa-users text-white"></i></span>
               <div className="fact-one__count">
                  <span className="count-box counted">
                  <span className="count-text" data-stop="30.3" data-speed={1500}>
                  20,000
                  </span>
                  </span>
                  +
               </div>
               <h3 className="fact-one__title">Happy Students</h3>
            </div>
         </div>
         <div className="col-lg-3 col-md-6 col-sm-12 p-0">
            <div className="fact-one__item text-center bg-color2">
               <span><i className="fa-solid fa-trophy text-white"></i></span>
               <div className="fact-one__count">
                  <span className="count-box counted">
                  <span className="count-text" data-stop="40.5" data-speed={1500}>
                  25
                  </span>
                  </span>
                  +
               </div>
               <h3 className="fact-one__title">Best Awards Won</h3>
            </div>
         </div>
         <div className="col-lg-3 col-md-6 col-sm-12 p-0">
            <div className="fact-one__item text-center bg-color3">
               <span><i className="fa-solid fa-chair text-white"></i></span>
               <div className="fact-one__count">
                  <span className="count-box counted">
                  <span className="count-text" data-stop="88.9" data-speed={1500}>
                  1500+
                  </span>
                  </span>
               </div>
               <h3 className="fact-one__title">Batches Completed</h3>
            </div>
         </div>
         <div className="col-lg-3 col-md-6 col-sm-12 p-0">
            <div className="fact-one__item text-center bg-color4">
               <span><i className="fa-solid fa-book text-white"></i></span>
               <div className="fact-one__count">
                  <span className="count-box counted">
                  <span className="count-text" data-stop="6.30" data-speed={1500}>
                  25
                  </span>
                  </span>
                  +
               </div>
               <h3 className="fact-one__title">Courses</h3>
            </div>
         </div>
      </div>
   </div>
</div>
<section className="about-one pt-pb">
   <div className="container">
      <div className="row">
         <div className="col-xl-6">
            <div className="about-one__thumb wow fadeInLeft animated" data-wow-delay="100ms" >
               <div className="about-one__thumb__one eduact-tilt" > <img src="assets/img/about-1-1.png" alt="eduact" /> </div>
               <div className="about-one__thumb__shape1 wow zoomIn animated" > <img src="assets/img/about-shape-1-1.png" alt="eduact" /> </div>
               <div className="about-one__thumb__shape2 wow zoomIn animated" > <img src="assets/img/about-shape-1-2.png" alt="eduact" /> </div>
               <div className="about-one__thumb__box wow fadeInLeft animated" >
                  <div className="about-one__thumb__box__icon"> <span className="fa-solid fa-phone" /> </div>
                  <h5 className="fw-bold text-dark"> Need to Know More Details? </h5>
                  <p className="about-one__thumb__box__text">
                     <Link className='fw-bold fs-30 text-primary' href="tel:9953988288">
                     9953988288</Link>
                  </p>
               </div>
            </div>
         </div>
         <div className="col-xl-6">
            <div className="about-one__content">
               <div className="main-title">
                  <h5>
                     OUR OBJECTIVE 
                  </h5>
                  <h4 className='text-primary'>Join the</h4>
                  <h2 className='sec-title'> ORACLE LANGUAGE INSTITUTE FAMILY </h2>
                  <p>ORACLE LANGUAGE INSTITUTE is more than just a language learning center; it's a springboard for personal growth, career advancement, and cultural exploration. Whether you're a business professional, a student, a traveller, or someone seeking a new challenge, we have the perfect program to help you achieve your language learning goals. </p>
               </div>
               <p className="about-one__content__text"> To enhance the employability of students by developing the following skills: </p>
               <div className="row mb-3">
                  <h4 className='text-primary'>Flexible Classes</h4>
                  <hr>
                  </hr>
                  <div className="col-lg-6 mb-3">
                     <h6><i className="fa-solid fa-check-circle"></i> Resume Writing</h6>
                     <h6><i className="fa-solid fa-check-circle"></i> Effective Meetings</h6>
                     <h6><i className="fa-solid fa-check-circle"></i> Interview Skills</h6>
                     <h6><i className="fa-solid fa-check-circle"></i> Listening Skills</h6>
                     <h6><i className="fa-solid fa-check-circle"></i> Group Discussion Skills</h6>
                     <h6><i className="fa-solid fa-check-circle"></i> Questioning Skills</h6>
                  </div>
                  <div className="col-lg-6 mb-3">
                     <h6><i className="fa-solid fa-check-circle"></i> Effective Communication</h6>
                     <h6><i className="fa-solid fa-check-circle"></i> Team Building</h6>
                     <h6><i className="fa-solid fa-check-circle"></i> Presentation Skills</h6>
                     <h6><i className="fa-solid fa-check-circle"></i> Art of Negotiation</h6>
                     <h6><i className="fa-solid fa-check-circle"></i> Public Speaking</h6>
                  </div>
                  <Link className="btn btn-theme" href='#'>
                  Discover More <i className="fa-solid fa-arrow-right"></i> <i className="icon-arrow" /> </Link> 
               </div>
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

export default Page

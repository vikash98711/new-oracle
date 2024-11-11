'use client'
import React, { useState } from "react";
import FormModal from "./FormModal";
import Link from "next/link";

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);
  const handleEnrollClick = () => {
    setShowModal(true);
  };
  return (
    <section className="Section-AboutUs pt-pb">
      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    
      <div className="hero">
      <div className="item">
       <div className="container">
         <div className="row align-items-center">
           <div className="main-title col-12 col-md-8 col-lg-6">
             <h4 className="sec-title ">
             Delhi Premier 
             </h4>
             <h5>Language Learning Center</h5>
             <p className="">
             Unleash Your Potential: Learn Languages with Confidence Best training institute for IELTS, TOEFL, PTE, German, French, Spanish, Chinese & Arabic. ORACLE LANGUAGE INSTITUTE is Delhi's leading language learning institute, dedicated to empowering individuals with the skills and confidence to excel in a globalized world. We offer a comprehensive range of language courses, catering to all levels and learning styles. Speak Your Success: Empower Your Journey with Oracle Language Institute – the premier institute for English, IELTS, TOEFL, PTE, German, French, Spanish, Chinese & Arabic....</p>
             <div className="group mt-5">
           
             <Link href="#" className="btn btn-theme"  onClick={handleEnrollClick} >Enquire Now</Link>
              <Link href="/about-best-international-laungage-institute-in-delhi" className="btn btn-theme2 ml-3">Read More </Link>
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
     <div className="Home-page-ul-wrapper">
     <div className="container">
     <div className="row">

<ul className="">
   <div className="row">
    <div className="col-lg-3 col-md-3 col-12">

      <li>
        <div className="d-flex">

          <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Excellence in Education</p>
        </div>
      </li>
    </div>
    <div className="col-lg-3 col-md-3 col-12">
    <li>
      <div className="d-flex">

        <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Wide Range of Languages</p>
      </div>
    </li>
    </div>
    <div className="col-lg-3 col-md-3 col-12">
    <li>
      <div className="d-flex">

        <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Flexible Learning Options</p>
      </div>
    </li>
    </div>
    <div className="col-lg-3 col-md-3 col-12">
    <li>
      <div className="d-flex">

        <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Focus on Communication</p>
      </div>
    </li>
    </div>
    <div className="col-lg-3 col-md-3 col-12">
    <li>
      <div className="d-flex">

        <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Proven Success</p>
      </div>
    </li>
    </div>
    <div className="col-lg-3 col-md-3 col-12">
    <li>
      <div className="d-flex">

        <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Cultural Events & Activities</p>
      </div>
    </li>
    </div>
    <div className="col-lg-3 col-md-3 col-12">
    <li>
      <div className="d-flex">

        <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Career Support</p>
      </div>
    </li>
    </div>
    <div className="col-lg-3 col-md-3 col-12">
    <li>
      <div className="d-flex">

        <p className="mb-0"> <i className="fa-solid fa-check-circle"></i>&nbsp;Lifelong Learning Community</p>
      </div>
    </li>
    </div>
  </div> 
 
</ul>

</div>
     </div>
     </div>
    </section>
   
   
  );
};

export default AboutUs;

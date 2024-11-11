import CompanyLogoSlider from '@/component/CompanyLogoSlider';
import ContacusForm from '@/component/ContacusForm';
import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import TopBannerDetails from '@/component/TopBannerDetails';
import Link from 'next/link';

import React from 'react'

const page = () => {
  return (
  <>
    <Navigation/>
 <div className="sub-banner" style={{background:'url(/assets/img/contact.jpg)'}}>
      <div className="container">
         <div className="col-sm-12 text-center">
            <h2>  Contact</h2>
            <p>
                <Link className="btn btn-theme" href="/contact-us-for-more-information">Talk to Our Experts</Link>
            </p>
         </div>
      </div>
   </div>

   <section className="contact-info pt-pb">
  <div className="container">
    <div className="row">
      <div className='col-sm-4'>
        <div className="contact-box">
          
          <span className="fa-solid fa-location-dot icon-Location"></span>
        <h3>Connaught Place</h3>
        <h4>
        3rd Floor, Mythri House, M-5A, Middle Circle, Connaught Place, Delhi - 110001, India
           
        </h4>
        </div> </div>
      <div className='col-sm-4'>
        <div className="contact-box">
          <span className="fa-solid fa-envelope icon-Email"></span>
          <span className="fa-solid fa-phone-volume icon-Call"></span>
        <h3>Have any question?</h3>
        <h4>
          <a href="mailto:Inquiry@oracleglobaleducation.com">Inquiry@oracleglobaleducation.com</a><br></br>
          +91-11-4940-4131<br></br>
            +91-9999-17-35-17<br></br>
            +91-99-53-988-288
        </h4>
        </div> </div>
      <div className='col-sm-4'>
        <div className="contact-box">
          <span className="fa-solid fa-location-dot icon-Location"></span>
       
        <h3>Kingsway Camp Branch Details</h3>
        <h4>109 Mall Road, Kingsway Camp, GTB Nagar, (Near GTB Nagar Metro Station Gate No.-1) Delhi 110009</h4>
        </div> </div>
    </div>
  </div>
</section>
<ContacusForm/>
<section className='wrapper-maps-cotactpage pt-pb'>
    <div className='container'>
        <div className='row'>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3502.020890026059!2d77.214772!3d28.629136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x76933fe29809ad22!2sOracle%20International%20Language%20Institute%20-%20Best%20Ielts%2CEnglish%2CFrench%2CGerman%2C%20Arabic%2C%20Chinese%2C%20Spanish%20Classes%20in%20Delhi!5e0!3m2!1sen!2sin!4v1600151023277!5m2!1sen!2sin"
    width="100%"
    height={400}
   
    style={{ border: "3px solid #ac0c30" }}
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
    
    style={{ border: "3px solid #ac0c30" }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex={0}
  />
</div>


        </div>
    </div>
</section>

   <CompanyLogoSlider/>

  

<Footer/>

 
  </>
  )
}

export default page;

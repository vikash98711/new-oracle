import { CourseData } from "@/utils/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const CourseList = CourseData
  return (
    <>

      <section className="Footer-section">
        <footer>
          <div className="container wrapper-container-footer">
            <div className="row">
              {/* <div className="col-lg-3 text-start">
                <ul className="p-0">

               



                  <ul style={{ padding: '0px' }}>

                   

                    <li className="Secondary-orange-footer mb-2 mt-3">
                      Subscribe to Our Newsletter
                    </li>
                    <li>
                      <div className="">
                        <input type="text" className="form-control" placeholder="Email Address" />
                        <input
                          type="submit"
                          className="bg-secondary text-white form-control mt-2"
                          style={{ width: '100%' }}
                          defaultValue="subscribe"
                        />
                      </div>

                    </li>
                  </ul>

                </ul>
              </div> */}
              <div className="col-lg-2 right-arrow-foter-wrapper">
              
                    <ul className="p-0">
                      <h5 className="Secondary-orange-footer">Useful Links</h5>
                    

                        <li>
                          <Link className="text-white" href="/">
                            <i className="fa-solid fa-hand-point-right"></i>&nbsp;
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" href="/about-best-international-language-institute-in-delhi">
                            <i className="fa-solid fa-hand-point-right"></i>&nbsp;
                            About
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" href="/visit-our-branches-in-delhi">
                            <i className="fa-solid fa-hand-point-right"></i>&nbsp;
                            Delhi Branch
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" href="/visit-our-institute-in-gtb-nagar">
                            <i className="fa-solid fa-hand-point-right"></i>&nbsp;
                             GTB Nagar Branch
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" href="/best-international-language-service">
                            <i className="fa-solid fa-hand-point-right"></i>&nbsp;
                            Service
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" href="/visit-our-gallery">
                            <i className="fa-solid fa-hand-point-right"></i>&nbsp;
                            Gallery
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" href="/blog">
                            <i className="fa-solid fa-hand-point-right"></i>&nbsp;
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" href="/visit-our-kids-section">
                            <i className="fa-solid fa-hand-point-right"></i>&nbsp;
                            Kids Section
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white" href="/contact-us-for-more-information">
                            <i className="fa-solid fa-hand-point-right"></i>&nbsp;
                            Contact Us
                          </Link>
                        </li>
                       

                    



                    </ul>
                  </div>
                 
                  <div className="col-lg-4">
                    <ul className="sitemap-widget p-0">
                      <h5 className="Secondary-orange-footer">All Courses</h5>
                      <div className="row align-items-center">
                        {CourseList.map((courseValue) => (
                         
                            <li className="col-6" key={courseValue.id}>
                            <Link href={`/${courseValue.slug}`} className="col-6 text-capitalize">
                              <i className="fa-solid fa-hand-point-right "></i>&nbsp;
                              {courseValue.name}
                            </Link>
                          </li>
                       
                        ))}
                      </div>
                    </ul>
                  </div>
                  <div className="col-lg-4">
  <ul className="p-0">
    <h5 className="Secondary-orange-footer">Office Location</h5>

    <li className="text-white  d-flex align-items-start">
      <i className="fa-solid fa-location-dot me-2 mt-1"></i>
      <div>
        <span className="Secondary-orange-footer border-bottom">Connaught Place:</span>
        <p className="m-0 text-white">3rd Floor, Mythri House, M-5A, Middle Circle, Connaught Place, Delhi - 110001, India</p>
        
      </div>
    </li>
    <li className="">
    <p className="text-white">
          <i className="fa-solid fa-envelope"></i>&nbsp;Inquiry@oracleglobaleducation.com
        </p>
    </li>

    <li className="text-white mb-0 d-flex align-items-start">
      <i className="fa-solid fa-location-dot me-2 mt-1"></i>
      <div>
        <span className="Secondary-orange-footer border-bottom">Kingsway Camp:</span>
        <p className="m-0 text-white">109 Mall Road, Kingsway Camp, GTB Nagar, (Near GTB Nagar Metro Station Gate No.-1) Delhi - 110009, India</p>
  
      </div>
      
    </li>
<li>
<p className="text-white m-0">
          <i className="fa-solid fa-envelope"></i>&nbsp;Inquiry@oracleglobaleducation.com
        </p>
</li>
  </ul>
</div>

              <div className="col-lg-2 wrapper-image-Gallery">

                <ul className="p-0">
                  <h5 className="Secondary-orange-footer">Contact Us</h5>

                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-11-4940-4131</li>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-9999-17-35-17</li>

                  <li className="text-white mb-5 pb-3"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-99-53-988-288</li>

                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-11-450-41-999</li>
                  <li className="text-white"> <i className="fa-solid fa-phone-volume"></i>&nbsp; +91-9999-745-645</li>

                  <li className="mt-3">

<img style={{width:'120px'}} src="/assets/img/gooogle-removebg-preview.png" alt="Google review" className="google-review-image-footer"/>
</li>
                </ul>
   


{/* <div className="float-sm hidden-xs sidebar-social-icon">
   <div className="fl-fl float-fb">
      <a href="https://www.facebook.com/oracleinternationallanguageInstitute/" target="_blank"> Facebook</a>
      <i className="fa-brands fa fa-facebook-f"></i>
   </div>
   <div className="fl-fl float-tw">
      <i className="fa-brands fa-x-twitter sticky-x-twiter"></i>
      <a href="https://twitter.com/LanguageOracle" target="_blank">Twitter</a>
   </div>
   <div className="fl-fl float-ig">
      <i className="fa-brands fa fa-instagram"></i>
      <a href="https://www.instagram.com/oraclelanguageinstitute/" target="_blank">Instagram</a>
   </div>
   <div className="fl-fl float-lin">
      <i className="fa-brands fa fa-linkedin"></i>
      <a href="https://freemase.com/" target="_blank">Linkedin</a>
   </div>
   <div className="fl-fl float-youtube">
      <i className="fa-brands fa fa-youtube"></i>
      <a href="https://www.youtube.com/channel/UC31D8Zz8hOMbJLdZOVpGW9Q" target="_blank">You Tube</a>
   </div>
</div> */}


{/* <a href='https://app.zoom.us/wc/join'  target="_blank" className="btn-zoom-pulse btn-zoom-pulse-border">
	<i className="fa-brand fa fa-video"></i>
</a> */}



              </div>
            </div>
          </div>
          <hr></hr>
          <div className="container text-center">
          <div className=" d-flex align-items-center  gap-2 mt-3 justify-content-center">

<a href="https://www.facebook.com/oraclelanguageinstitute/"  target="blank">
  <i className="fa-brands fa-facebook-f text-white facebookcircle facebook-icon"></i>
</a>

<a href="https://www.linkedin.com/company/oracle-international-language-institute"  target="blank">
  <i className="fa-brands fa-linkedin-in text-white social-icon-box linkedin-icon"></i>
</a>

<a href="https://www.instagram.com/oraclelanguageinstitute/" className="" target="blank">
  <i className="fa-brands fa-instagram text-white social-icon-box instagram-icons"></i>
</a>
<a href="https://twitter.com/LanguageOracle" target="blank">
  <i className="fa-brands fa-x-twitter text-white social-icon-box twitter-icons"></i>
</a>

<a href="https://www.youtube.com/channel/UC31D8Zz8hOMbJLdZOVpGW9Q" className="" target="blank">
  <i className="fa-brands fa-youtube text-white social-icon-box youtube-icons"></i>
</a>

</div>
          </div>
          <div className="container text-center">
         <p className="btn-hover color-2 d-inline-block footer-bottomestrip"> © 2018 . All Rights Reserved. | Oracle International language institute</p>
        </div>
        </footer>
      </section>


    
    </>
  );
};

export default Footer;

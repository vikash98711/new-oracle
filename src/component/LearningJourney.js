
"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import FormModal from "./FormModal";

const LearningJourney = () => {
  const [showModal, setShowModal] = useState(false);
  const handleEnrollClick = () => {
    setShowModal(true);
  };
  var settings = {
    dots: false,
    infinite: true,
    autoPlay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>


      <section className="Learining-wrapper position-relative">
      <FormModal  show={showModal} handleClose={() => setShowModal(false)}/>
        <Slider {...settings}>
          <div>

            <div className="position-relative">
              {/* <video width="100%" height="100%" muted autoPlay={true} preload="none">
                <source src="https://video.wixstatic.com/video/2ec19b_a813e27647554a9dbd792f1445c1c92e/720p/mp4/file.mp4" type="video/mp4" />
                <track
                  src="https://video.wixstatic.com/video/2ec19b_a813e27647554a9dbd792f1445c1c92e/720p/mp4/file.mp4"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video> */}
              <img className="img-fluid w-100" src="https://www.oracleglobaleducation.com/images/banner/banners4.jpg" />
              <div className="banner-TextWrapper">
                <h4 className="">Best training institute for </h4>
                <h5 className="Banner-heading"><b>IELTS, TOEFL, PTE, German, French, Spanish, Chinese & Arabic Etc. <br></br>
                ONLINE CLASSES-Learn Anything, On Your Schedule</b></h5>
                <button className="btn-hover DiscoverMore-Abouts color-2" onClick={handleEnrollClick}>Enquiry Now </button>
              </div>
            </div>
          </div>
          {/* <div> 
            <div className="position-relative">
              <img className="img-fluid w-100" src="/assets/img/univercity.jpg" />
            </div>
          </div> */}
          <div> 
            <div className="position-relative">
              <img className="img-fluid w-100" src="/assets/img/two.jpeg" />
            </div>
          </div>
          <div> 
            <div className="position-relative">
              <img className="img-fluid w-100" src="/assets/img/three.jpeg" />
            </div>
          </div> 


        </Slider>

      </section>

    </>
  );
};

export default LearningJourney;

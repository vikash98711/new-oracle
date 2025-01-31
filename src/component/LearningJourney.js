
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
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>

      <section className="Learining-wrapper position-relative">
        <FormModal show={showModal} handleClose={() => setShowModal(false)} />
        <Slider {...settings}>
          <div>

            <div className="position-relative">
              <img className="img-fluid w-100" src="/assets/img/oraclebanners1.jpg" />
              <div className="banner-TextWrapper">
                <button className="btn btn-theme2 ml-3 fs-18 " onClick={handleEnrollClick}>Enquire Now </button>
              </div>
            </div>
          </div>
          <div>
            <div className="position-relative">
              <img className="img-fluid w-100" src="/assets/img/oraclebanners3.jpg" />
              <div className="banner-TextWrapper">
                <button className="btn btn-theme2 ml-3 fs-18 " onClick={handleEnrollClick}>Enquire Now </button>
              </div>
            </div>
          </div>
          <div>
            <div className="position-relative">
              <img className="img-fluid w-100" src="/assets/img/oraclebanners2.jpg" />
              <div className="banner-TextWrapper">
                <button className="btn btn-theme2 ml-3 fs-18 " onClick={handleEnrollClick}>Enquire Now </button>
              </div>
            </div>
          </div>


        </Slider>

      </section>

    </>
  );
};

export default LearningJourney;

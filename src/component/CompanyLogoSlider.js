"use client";

import React from 'react';
import Slider from 'react-slick';

const CompanyLogoSlider = () => {
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerMode: false,
    focusOnSelect: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          focusOnSelect: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          focusOnSelect: false
        }
      }
    ]
  };

  return (
    <section className='wrapper-company-logos-sslider'>
      <div className='container'>

        <div className="main-title text-center mb-0">
          <h5 className="mb-0">We prepare you for</h5>
          <h2 className='sec-title'>International Exam</h2>
        </div>
        <div className='container'>
          <Slider {...settings}>

            <div className='col'>
              <img src="/assets/img/company/partner2.jpg" alt="Partner 2" />
            </div>
            <div className='col'>
              <img src="/assets/img/company/partner3.jpg" alt="Partner 3" />
            </div>
            <div className='col'>
              <img src="/assets/img/company/partner4.jpg" alt="Partner 4" />
            </div>
            <div className='col'>
              <img src="/assets/img/company/partner5.jpg" alt="Partner 5" />
            </div>

            <div className='col'>
              <img src="/assets/img/company/partner6.jpg" alt="Partner 6" />
            </div>
            <div className='col'>
              <img src="/assets/img/company/partner7.jpg" alt="Partner 7" />
            </div>
            <div className='col'>
              <img src="/assets/img/company/partner8.jpg" alt="Partner 8" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default CompanyLogoSlider;

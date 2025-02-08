"use client";
import React from "react";
import Slider from "react-slick";

const GoogleReview = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this value based on your needs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Feedback = [
    {
      image: "/assets/img/googlereview1.png",
      comment: "One of the best German language institute in Delhi India.",
      name: "Akarshit Verma",
      occupation: "Student",
      subject: "German Language",
    },
    {
      image: "/assets/img/googlereview2.png",
      comment: "One of the best German language institute in Delhi India.",
      name: "Parag",
      occupation: "Student",
      subject: "Spanish Language",
    },
    {
      image: "/assets/img/googlereview3.png",
      comment: "Very pleasant and helpful, I REALLY liked it.",
      name: "Pooja",
      occupation: "Student",
      subject: "English",
    },
    {
      image: "/assets/img/googlereview2.png",
      comment: "One of the best German language institute in Delhi India.",
      name: "Devanshu",
      occupation: "Student",
      subject: "English",
    },
    {
      image: "/assets/img/googlereview1.png",
      comment: "One of the best German language institute in Delhi India.",
      name: "Gurleen",
      occupation: "Student",
      subject: "French",
    },
    {
      image: "/assets/img/googlereview3.png",
      comment: "One of the best German language institute in Delhi India.",
      name: "Kanika",
      occupation: "Student",
      subject: "German",
    },
  ];

  return (
    <section className="pt-pb student-testimonial-wrapper">
      <div className="container">
      <div className="main-title text-center mb-0">
          <h5 className="mb-0">Excellent</h5>
          <h2 className='sec-title'>Based on 1100 + reviews</h2>
          <div className='d-flex align-items-center justify-content-center mb-3 gap-2'>
                            <div className='d-flex '>
                              <i className="fa-solid rating-color fa-star"></i>
                              <i className="fa-solid rating-color fa-star"></i>
                              <i className="fa-solid rating-color fa-star"></i>
                              <i className="fa-solid rating-color fa-star"></i>
                              <i className="fa-solid rating-color fa-star"></i>
                            </div>
                            
                          </div>
          <img src="/assets/img/goole-subtitle.svg" alt="Google Subtitle" width={100} height={50}/>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-12 px-md-0 px-2">
            <div className="">
              <Slider {...settings}>
                {Feedback.map((val, i) => (
                  <div className="feedback google-review" key={i}>
                    <div className="card m-3" style={{backgroundColor:'#004f76'}}>
                      <div className="card-body mb-2">
                        <div className="col-sm-12 text-start d-flex justify-content-between align-items-center">
                          <img src={val.image} className="rounded-circle img-fluid mb-2 google-users-image" />
          <img src="/assets/img/google-single.svg" alt="Google Subtitle" width={30} height={50}/>
                                  
                        </div>
                        <div className="col-sm-12">
                          <div className="ms-3">
                          {/* <p className="designation">|| {val.occupation} <span className="text-capitalize">{val.subject} ||</span></p> */}
                          <h5 className="text-uppercase text-white">{val.name}</h5> 

                          <div className='d-flex align-items-center mb-3 gap-2'>
                            <div className='d-flex '>
                              <i className="fa-solid rating-color fa-star"></i>
                              <i className="fa-solid rating-color fa-star"></i>
                              <i className="fa-solid rating-color fa-star"></i>
                              <i className="fa-solid rating-color fa-star"></i>
                              <i className="fa-solid rating-color fa-star"></i>
                            </div>
                            
                          </div>
                      <p className="text-white"><i className="fa-regular fa-comment-dots"></i> {val.comment}</p>

                      </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReview;

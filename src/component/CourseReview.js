"use client";
import React from "react";
import Slider from "react-slick";

const CourseReview = () => {
  const settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
      image: "/assets/img/akarshit.jpg",
      comment: "You can learn German quickly at the Oracle International Language Institute. The teachers here are really nice, friendly and personable...",
      name: "Akarshit Verma",
      occupation: "Student",
      subject: "German Language",
    },
    {
      image: "/assets/img/parag.jpg",
      comment: "Wonderful Teacher! In her programs, you learn so much more than just the words in Spanish. Cultural and social cues are so important...",
      name: "Parag",
      occupation: "Student",
      subject: "Spanish Language",
    },
    {
      image: "/assets/img/pooja.jpg",
      comment: "Very pleasant and helpful, I REALLY liked it.",
      name: "Pooja",
      occupation: "Student",
      subject: "English",
    },
    {
      image: "/assets/img/devanshu.jpg",
      comment: "I would recommend this institute to anyone who wants to improve their English skills in a short period of time. I've made immense progress.",
      name: "Devanshu",
      occupation: "Student",
      subject: "English",
    },
    {
      image: "/assets/img/kanika.jpg",
      comment: "They have been very clear in their communications and the level of instruction is superlative.",
      name: "Gurleen",
      occupation: "Student",
      subject: "French",
    },
    {
      image: "/assets/img/gurleen.jpg",
      comment: "The German language is a difficult language, but it is really fun to learn it at Oracle International Language Institute.",
      name: "Kanika",
      occupation: "Student",
      subject: "German",
    },
  ];

  return (
    <section className="pt-pb student-testimonial-wrapper">
      <div className="container">
      <div className="main-title text-center mb-0">
          <h5 className="mb-0">Language Courses Feedback</h5>
          <h2 className='sec-title'>Student Testimonials</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-12 px-md-0 px-2">
            <div className="">
              <Slider {...settings}>
                {Feedback.map((val, i) => (
                  <div className="feedback" key={i}>
                    <div className="card m-3">
                      <div className="card-body row d-flex align-items-center justify-content-center mb-2">
                        <div className="col-sm-4 text-center">
                          <img src={val.image} className="rounded-circle img-fluid mb-2" style={{margin:'0 auto'}} />
                          <h5 className="text-uppercase">{val.name}</h5>
                                  
                        </div>
                        <div className="col-sm-8">
                          <div className="ms-3">
                          <p className="designation">|| {val.occupation} <span className="text-capitalize">{val.subject} ||</span></p>

                          <div className='d-flex align-items-center mb-3 gap-2'>
                            <div className='d-flex '>
                              <i className="fa-solid rating-color fa-star"></i>
                              <i className="fa-solid rating-color fa-star"></i>
                              <i className="fa-solid rating-color fa-star"></i>
                              <i className="fa-solid rating-color fa-star"></i>
                              <i className="fa-solid rating-color fa-star"></i>
                            </div>
                            
                          </div>
                      <p>{val.comment}</p>
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

export default CourseReview;

"use client";
import React from "react";
import Slider from "react-slick";

const CourseReview = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    // new add 
    // new add 
    // new add 
    // new add 
    {
      image: "/assets/img/student-testimonial/Vansh.jpeg",
      comment: "I found the environment very nice . The teachers are very good and the way they provide knowledge about the subject is very good . They teach every topic very deeply and make it fully understandable. ",
      name: "Vansh",
      occupation: "Student",
      subject: "German Language",
    },
    {
      image: "/assets/img/student-testimonial/Sapra.jpeg",
      comment: "I had an exceptional learning experience at Oracle Institute of Foreign Language! The instructors were highly knowledgeable, enthusiastic, and dedicated to helping students achieve their language goals.",
      name: "Sapra",
      occupation: "Student",
      subject: "German Language",
    },
    {
      image: "/assets/img/student-testimonial/Kirti.jpeg",
      comment: "I appreciate the institute's environment and the sincerity with which they offer us a high-quality language course at affordable fees. overall, I would rate my learning experience as 4.5 out of 5.",
      name: "Kirti",
      occupation: "Student",
      subject: "German Language",
    },
    {
      image: "/assets/img/student-testimonial/Gunveen.jpeg",
      comment: "It is a wonderful institute for learning a language . It provides a  great curriculum and  learning environment for students .  The instructors are highly knowledgeable and fluent in language.",
      name: "Gunvin",
      occupation: "Student",
      subject: "German Language",
    },
    {
      image: "/assets/img/student-testimonial/Yashika.jpeg",
      comment: "This is very gud language institute staff is very friendly and teachers are really gud. Highly recommend",
      name: "Yashika",
      occupation: "Student",
      subject: "German Language",
    },
    {
      image: "/assets/img/student-testimonial/Aditya.jpeg",
      comment: "Aditya this side from Oracle International Language Institute.I am studying german language in this Institute. It the best coaching centre for all the language starter.",
      name: "Aditya",
      occupation: "Student",
      subject: "German Language",
    },
    {
      image: "/assets/img/student-testimonial/Gaurav.jpeg",
      comment: "My experience at oracle international language institute has been fantastic! The faculty is knowledgeable and supportive, and the curriculum is both relevant and practical.",
      name: "Gaurav",
      occupation: "Student",
      subject: "German Language",
    },
    {
      image: "/assets/img/student-testimonial/Dhruv.jpeg",
      comment: "I was particularly impressed with the interactive teaching methods, the the comprehensive curriculum, the flexible scheduling options, the focus on practical conversation skills..",
      name: "Dhruv",
      occupation: "Student",
      subject: "German Language",
    },
    {
      image: "/assets/img/student-testimonial/Taurus.jpeg",
      comment: "Im having a great time studying at oracle.  Sir gaurav is truly exceptional. The institute's welcoming environment not just ends with good teachers but  they also deliver best results by giving deep insight of topics",
      name: "Taurus",
      occupation: "Student",
      subject: "German Language",
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
                          <img src={val.image} className="rounded-circle img-fluid mb-2" style={{margin:'0 auto',width:'125px',height:'125px'}} />
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

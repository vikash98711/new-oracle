"use client";
import React from 'react';
import Slider from 'react-slick';


const CoomonStudentSlider = () => {
  const settings = {
    dots: false,
    autoPlay: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };
  const Feedback = [
    {
      "image": "/assets/img/pooja.jpg",
      "comment": "Very pleasant and helpful, I REALLY liked it.",
      "name": "Pooja",
      "occupation": "Student",
      "subject": "English"
    },
    {
      "image": "/assets/img/devanshu.jpg",
      "comment": "I would recommend this institute to anyone who wants to improve their English skills in a short period of time. I've made immense progress.",
      "name": "devanshu",
      "occupation": "Student",
      "subject": "English"
    },
    {
      "image": "/assets/img/kanika.jpg",
      "comment": "They have been very clear in their communications and the level of instruction is superlative.",
      "name": "Gurleen",
      "occupation": "Student",
      "subject": "French"
    },
    {
      "image": "/assets/img/gurleen.jpg",
      "comment": "The German language is a difficult language, but it is really fun to learn it at Oracle International Language Institute.",
      "name": "Kanika",
      "occupation": "Student",
      "subject": "German"
    },
    {
      "image": "/assets/img/akarshit.jpg",
      "comment": "You can learn German quickly at the Oracle International Language Institute. The teachers here are really nice, friendly and personable...",
      "name": "Akarshit Verma",
      "occupation": "Student",
      "subject": "German Language"
    },
    {
      "image": "/assets/img/parag.jpg",
      "comment": "Wonderful Teacher! In her programs, you learn so much more than just the words in Spanish. Cultural and social cues are so important...",
      "name": "Parag",
      "occupation": "Student",
      "subject": "Spanish Language"
    }
   
  ]
  return (
    <>
      <section className='Course-details-Home-banner'>





        <div className='container'>


          {/* <h3 className="text-dark">What our students says about us</h3> */}
          <h5 className="text-white  text-center">
            Student Feedback

          </h5>
          <Slider {...settings}>

{
  Feedback.map((val,i)=>{return(

 
            <div className='testimonial-slider-wrap px-2 container' style={{ margin: '0 auto' }} key={i}>
              <div className='row'>
                <div className='col-lg-8  col-12 m-auto'>

                  <div className="d-lg-flex d-block align-items-center gap-4">
                    <div className='text-center'>
                      <img src={val.image} className='rounded-circle student-feedback-img m-auto' alt="testimonial" />
                    </div>

                    <div className="p-3 mb-lg-3">

                      <p className="fs-18 fs-sm-14 text-white">
                      {val.comment}
                      </p>
                      <p className="text-dark fs-18 fs-sm-16 text-white">{val.name}</p>
                      <p className="text-dark fs-18 fs-sm-16 text-white Secondary-orange-fotter fw-700-size">{val.subject}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
             )})
            }
            {/* <div className='testimonial-slider-wrap px-2 container' style={{ margin: '0 auto' }}>
              <div className='row'>
                <div className='col-lg-8  col-12 m-auto'>

                  <div className="d-lg-flex d-block align-items-center gap-4">
                    <div className='text-center'>
                      <img src="/assets/img/testimonial-1-author-1.png" className='rounded-4 student-feedback-img m-auto' alt="testimonial" />
                    </div>

                    <div className="p-3 mb-lg-3">

                      <p className="fs-18 fs-sm-14 text-white">
                        Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet
                      </p>
                      <p className="text-dark fs-18 fs-sm-16 text-white">Manish Chauhan</p>
                      <p className="text-dark fs-18 fs-sm-16 text-white Secondary-orange-fotter">Spanish Lanuage course</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className='testimonial-slider-wrap px-2 container' style={{ margin: '0 auto' }}>
              <div className='row'>
                <div className='col-lg-8  col-12 m-auto'>

                  <div className="d-lg-flex d-block align-items-center gap-4">
                    <div className='text-center'>
                      <img src="/assets/img/testimonial-1-author-1.png" className='rounded-4 student-feedback-img m-auto' alt="testimonial" />
                    </div>

                    <div className="p-3 mb-lg-3">

                      <p className="fs-18 fs-sm-14 text-white">
                        Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet
                      </p>
                      <p className="text-dark fs-18 fs-sm-16 text-white">Manish Chauhan</p>
                      <p className="text-dark fs-18 fs-sm-16 text-white Secondary-orange-fotter">Spanish Lanuage course</p>
                    </div>
                  </div>

                </div>
              </div>
            </div> */}

          </Slider>




        </div>






      </section>

    </>
  )
}

export default CoomonStudentSlider

"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from "react-slick";
const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

const Blog = () => {
    const [noticeData, setNoticeData] = useState([]);
    const [loading, setLoading] = useState(true);

   

    const fetchDataFunc = async () => {
        try {
            const response = await fetch('https://russianclassesindelhi.com/admin/public/api/notice-board');
            if (response.ok) {
                const responseJson = await response.json();
                setNoticeData(responseJson.noticeboard.data);
            } else {
                console.error("Failed to fetch data");
            }
        } catch (error) {
            console.error("An error occurred", error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (timeString) => {
        return new Date(timeString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    useEffect(() => {
        fetchDataFunc();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        
        <section className='pt-pb bg-grey'>
            <div className="container">
            <div className="main-title text-center mb-0">
          <h5 className="mb-0">Latest Update</h5>
          <h2 className='sec-title'>Notice Board</h2>
          <br></br> 
        </div>
                <div className="row">
                    <div className="col-lg-12 col-md-8 col-12">
                        <div className=''>
                            <Slider {...settings}>
                                {noticeData.length > 0 ? (
                                    noticeData.slice(0, 4).map((noticeValue) => (
                                        <div className="px-2" key={noticeValue.id}>
                                            <div className="notice-board noticeboard-slider">
                                                <img src={noticeValue.image} alt="blog" className='img-fluid w-100 ' />
                                                <div className="card-content">
                                                <h3 className='text-ellipsis'>{noticeValue.title}</h3>
                                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                                            <span className="btn-sm badge btn-theme">
                                                                Category
                                                            </span>
                                                            <span className='badge btn-theme'>{formatDate(noticeValue.date)}</span>
                                                        </div>
                                                        
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No notices available.</p>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fact-one pt-pb">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12 p-0">
        <div className="fact-one__item text-center bg-color1">
        <span><i className="fa-solid fa-users text-white"></i></span>
          <div className="fact-one__count">
          
            <span className="count-box counted">
              <span className="count-text" data-stop="30.3" data-speed={1500}>
             20,000
              </span>
            </span>
            +
          </div>
       
          <h3 className="fact-one__title">Happy Students</h3>
    
        </div>
      
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 p-0">
          <div className="fact-one__item text-center bg-color2">
          <span><i className="fa-solid fa-trophy text-white"></i></span>
          <div className="fact-one__count">
             
            <span className="count-box counted">
              <span className="count-text" data-stop="40.5" data-speed={1500}>
                25
              </span>
            </span>
            +
          </div>
        
          <h3 className="fact-one__title">Best Awards Won</h3>
         
        </div>
      
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 p-0">
          <div className="fact-one__item text-center bg-color3">
          <span><i className="fa-solid fa-chair text-white"></i></span>
          <div className="fact-one__count">
            <span className="count-box counted">
              <span className="count-text" data-stop="88.9" data-speed={1500}>
                1500+
              </span>
            </span>
            
          </div>
      
          <h3 className="fact-one__title">Batches Completed</h3>
         
        </div>
     
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 p-0">
      <div className="fact-one__item text-center bg-color4">
      <span><i className="fa-solid fa-book text-white"></i></span>
          <div className="fact-one__count">
            <span className="count-box counted">
              <span className="count-text" data-stop="6.30" data-speed={1500}>
              25
              </span>
            </span>
            +
          </div>
      
          <h3 className="fact-one__title">Courses</h3>
        
        </div>
      
      </div>
    </div>
  </div>
</div>
        </section>
    );
}

export default Blog;

"use client";
import React, { useState } from 'react';
import Slider from "react-slick";

const settings = {
    dots: false,
    autoPlay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

const PlaceMentReview = () => {

    const reviews = [
        {
            id: 1,
            image: "/assets/img/placement/parisinjain.jpeg",
            name: "Parishi Jain",
            company: "E2open",
        },
        {
            id: 2,
            image: "/assets/img/placement/sameer.jpeg",
            name: "Sameer Ali",
            company: "Kinetic Tv",
        },
        {
            id: 3,
            image: "/assets/img/placement/khusi.jpeg",
            name: "Khushi Chhabra",
            company: "Maxfort School, Pitampura",
        },
        {
            id: 4,
            image: "/assets/img/placement/vaishnavi.jpeg",
            name: "Vaishnavi Tripathi ",
            company: "Tech Mahindra",
        },
        {
            id: 5,
            image: "/assets/img/placement/rishika.jpeg",
            name: "Rishika Bharti ",
            company: "Tech Mahindra",
        },
        {
            id: 6,
            image: "/assets/img/placement/geetanjali.jpeg",
            name: "Geetanjali ",
            company: "Company-E2open",
        },
        {
            id: 7,
            image: "/assets/img/placement/maynakpal.jpeg",
            name: "Mayank Pal",
            company: "Conduent Business Service LLP",
        },
        {
            id: 8,
            image: "/assets/img/placement/chavii.jpeg",
            name: "Chhavi chauhan",
            company: "Vidya Jain Pub Sch, Delhi",
        },
        {
            id: 9,
            image: "/assets/img/placement/Rakhi.jpeg",
            name: "Rakhi",
            company: "London Stock Exchange, BLR",
        },
        {
            id: 10,
            image: "/assets/img/placement/rohit.jpeg",
            name: "Rohit Dabas",
            company: "Hiring Campus, Mumbai",
        },
    ];

    const [noticeData, setNoticeData] = useState(reviews);

    return (
        <section className='pt-pb bg-grey placement-slider-wrappersection'>
            <div className="container">
                <div className="main-title text-center mb-0">
                    <h5 className="mb-0 text-white placement-slider-tag">find our footprints in the whole world by our Students | <span className='placement-ratio ms-2'>Placement Ratio 98.99%</span></h5>
                    {/* <h2 className='sec-title  placement-ratio-wrapper'>Placement Ratio 98.99%</h2> */}
                    <br></br>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-8 col-12 placement-review-wrapper">
                        <div className=''>
                            <Slider {...settings}>
                                {noticeData.length > 0 ? (
                                    noticeData.slice(0, 11).map((noticeValue) => (
                                        <div className="px-2 place-mentwrapper-card" key={noticeValue.id}>
                                            <div className="notice-board">
                                                <img src={noticeValue.image} alt={noticeValue.name} className='img-fluid w-100'style={{height:"280px"}} />
                                                <div className="card-content text-center">
                                                    <h3 className='text-ellipsis'>{noticeValue.name}</h3>
                                                    <p className="mb-1  placement-p-tag">{noticeValue.company}</p>
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
        </section>
    );
}

export default PlaceMentReview;
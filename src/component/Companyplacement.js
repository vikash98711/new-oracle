"use client";
import React, { useState } from 'react';
import Slider from "react-slick";

const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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

const Companyplacement = () => {

    const reviews = [
        {
            id: 1,
            image: "/assets/img/Companies/0_ienergi-logo.png",
            name: "Parishi Jain",
            company: "E2open",
        },
        {
            id: 2,
            image: "/assets/img/Companies/Accenture.svg-1024x270.png",
            name: "Sameer Ali",
            company: "Kinetic Tv",
        },
        {
            id: 3,
            image: "/assets/img/Companies/amazon-1024x370.png",
            name: "Khushi Chhabra",
            company: "Maxfort School, Pitampura",
        },
        {
            id: 4,
            image: "/assets/img/Companies/cognizant-1-1024x418.png",
            name: "Vaishnavi Tripathi ",
            company: "Tech Mahindra",
        },
        {
            id: 5,
            image: "/assets/img/Companies/exl-1024x418.png",
            name: "Rishika Bharti ",
            company: "Tech Mahindra",
        },
        {
            id: 6,
            image: "/assets/img/Companies/Genpact_THH_logo-1024x461.png",
            name: "Geetanjali ",
            company: "Company-E2open",
        },
        {
            id: 7,
            image: "/assets/img/Companies/HCL-Logo-1976-1024x576.png",
            name: "Mayank Pal",
            company: "Conduent Business Service LLP",
        },
        {
            id: 8,
            image: "/assets/img/Companies/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8-1024x446.png",
            name: "Chhavi chauhan",
            company: "Vidya Jain Pub Sch, Delhi",
        },
        {
            id: 9,
            image: "/assets/img/Companies/1.jpeg",
            name: "Rakhi",
            company: "London Stock Exchange, BLR",
        },
        {
            id: 10,
            image: "/assets/img/Companies/2.jpeg",
            name: "Rohit Dabas",
            company: "Hiring Campus, Mumbai",
        },
        {
            id: 11,
            image: "/assets/img/Companies/3.jpeg",
            name: "Rohit Dabas",
            company: "Hiring Campus, Mumbai",
        },
        {
            id: 12,
            image: "/assets/img/Companies/4.jpeg",
            name: "Rohit Dabas",
            company: "Hiring Campus, Mumbai",
        },
        {
            id: 13,
            image: "/assets/img/Companies/5.jpeg",
            name: "Rohit Dabas",
            company: "Hiring Campus, Mumbai",
        },
        {
            id: 14,
            image: "/assets/img/Companies/6.jpeg",
            name: "Rohit Dabas",
            company: "Hiring Campus, Mumbai",
        },
        {
            id: 15,
            image: "/assets/img/Companies/7.jpeg",
            name: "Rohit Dabas",
            company: "Hiring Campus, Mumbai",
        },
    ];

    const [noticeData, setNoticeData] = useState(reviews);

    return (
        <section className='pt-pb bg-grey mt-8 bg-white section-company-placement-main'>
            <div className="container-fluid">
                <div className="main-title text-center mb-0">
                    <h5 className="mb-0 text-white placement-slider-tag company-place-ment-text">Companies Where Our Students Got Placements|</h5>
                    {/* <h2 className='sec-title  placement-ratio-wrapper'>Placement Ratio 98.99%</h2> */}
                    <br></br>
                </div>
   
                <div className="row">
                    <div className="col-lg-12 col-md-8 col-12">
                        <div className=''>
                            <Slider {...settings}>
                                {noticeData.length > 0 ? (
                                    noticeData.slice(0, 11).map((noticeValue) => (
                                        <div className="px-2 place-mentwrapper-card" key={noticeValue.id}>
                                            <div className="notice-board">
                                                <img src={noticeValue.image} alt={noticeValue.name} className='img-fluid w-100 company-placement-thumnail'style={{padding:'35px',height:'120px'}} />
                                                {/* <div className="card-content text-center">
                                                    <h3 className='text-ellipsis'>{noticeValue.name}</h3>
                                                    <p className="mb-1  placement-p-tag">{noticeValue.company}</p>
                                                </div> */}
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

export default Companyplacement;
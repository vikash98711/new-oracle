"use client"
import CompanyLogoSlider from '@/component/CompanyLogoSlider';
import CoomonStudentSlider from '@/component/CoomonStudentSlider';
import Footer from '@/component/Footer';
import Navigation from '@/component/Navigation';
import QuiryForm from '@/component/QuiryForm';
import React, { useState } from 'react'
import Link from 'next/link';
import Slider from 'react-slick';
import { Tab, Tabs, Modal } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; 
import './page.css'
import TopBannerDetails from '@/component/TopBannerDetails';


const page = () => {
  const [showModal, setShowModal] = useState(false);
  
  const [modalImages, setModalImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (images, index) => {
    setModalImages(images);
    setActiveImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // const images = [
  //   'assets/img/NewGallery1.jpg',
  //   'assets/img/NewGallery2.jpg',
  //   'assets/img/NewGallery3.jpg',
  //   'assets/img/NewGallery4.jpg',
  //   'assets/img/NewGallery5.jpg',
  //   'assets/img/NewGallery6.jpg',
  //   'assets/img/gallery-2.jpg',
  //   'assets/img/gallery-3.jpg', 
  // ];

  const images = [
    {
      original: 'assets/img/gallery/gallery-pic-0.png',
      thumbnail: 'assets/img/gallery/gallery-pic-0.png',
    },
    {
      original: 'assets/img/gallery/gallery-pic-1.png',
      thumbnail: 'assets/img/gallery/gallery-pic-1.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-2.png',
      thumbnail: 'assets/img/gallery/gallery-pic-2.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-3.png',
      thumbnail: 'assets/img/gallery/gallery-pic-3.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-4.png',
      thumbnail: 'assets/img/gallery/gallery-pic-4.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-5.png',
      thumbnail: 'assets/img/gallery/gallery-pic-5.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-6.png',
      thumbnail: 'assets/img/gallery/gallery-pic-6.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-7.png',
      thumbnail: 'assets/img/gallery/gallery-pic-7.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-8.png',
      thumbnail: 'assets/img/gallery/gallery-pic-8.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-9.png',
      thumbnail: 'assets/img/gallery/gallery-pic-9.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-10.png',
      thumbnail: 'assets/img/gallery/gallery-pic-10.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-11.png',
      thumbnail: 'assets/img/gallery/gallery-pic-11.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-12.png',
      thumbnail: 'assets/img/gallery/gallery-pic-12.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-13.png',
      thumbnail: 'assets/img/gallery/gallery-pic-13.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-14.png',
      thumbnail: 'assets/img/gallery/gallery-pic-14.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-15.png',
      thumbnail: 'assets/img/gallery/gallery-pic-15.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-16.png',
      thumbnail: 'assets/img/gallery/gallery-pic-16.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-17.png',
      thumbnail: 'assets/img/gallery/gallery-pic-17.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-18.png',
      thumbnail: 'assets/img/gallery/gallery-pic-18.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-19.png',
      thumbnail: 'assets/img/gallery/gallery-pic-19.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-20.png',
      thumbnail: 'assets/img/gallery/gallery-pic-20.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-21.png',
      thumbnail: 'assets/img/gallery/gallery-pic-21.png',
    }, 
    {
      original: 'assets/img/NewGallery1.jpg',
      thumbnail: 'assets/img/NewGallery1.jpg',
    },
    {
      original: 'assets/img/NewGallery2.jpg',
      thumbnail: 'assets/img/NewGallery2.jpg',
    },
    {
      original: 'assets/img/NewGallery3.jpg',
      thumbnail: 'assets/img/NewGallery3.jpg',
    },
    {
      original: 'assets/img/NewGallery4.jpg',
      thumbnail: 'assets/img/NewGallery4.jpg',
    },
    {
      original: 'assets/img/NewGallery5.jpg',
      thumbnail: 'assets/img/NewGallery5.jpg',
    },
    {
      original: 'assets/img/NewGallery6.jpg',
      thumbnail: 'assets/img/NewGallery6.jpg',
    },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeImageIndex,
  };
  return (
    <>
      <Navigation />
      {/* <CoomonStudentSlider /> */}
     
     <div className="sub-banner" style={{background:'url(/assets/img/gallery-banner.jpg)'}}>
      <div className="container">
         <div className="col-sm-12 text-center">
            <h2>  Gallery</h2>
            <p>
                <Link className="btn btn-theme" href="/contact-us-for-more-information">Talk to Our Experts</Link>
            </p>
         </div>
      </div>
   </div>
        <section className="gallery-page pt-pb">
          <div className='container' >
          <div className='text-center'>
            <h2>GALLERY & VIDEOS </h2>
          </div>
          <div className='Gallery_tabs-wrapper'>
            <Tabs defaultActiveKey="Gallery" id="Gallery" className='p-3'>
              
              <Tab eventKey="Gallery" title="Gallery">
                <div className="tabs-content mt-4">
             
                  <div className="row align-items-center justify-content-center">
                    {images.map((image, index) => (
                      <div className="col-lg-3 col-md-6" key={index}>
                        <div
                          className="gallery-page__single"
                          onClick={() => openModal(images, index)}
                        >
                          <img src={image.original} alt={`Image ${index}`} />
                          <div className="gallery-page__icon">
                            <a className="img-popup" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab>

              <Tab eventKey="Video" title="Video">
                <div className="tabs-content">
                  <div className="course-details__curriculum">

                    <div className='container-fluid'>
                     
                      <div className="row align-items-center justify-content-center">
                        <div className="col-sm-4">
                          <iframe className='yt-video'
                            width="100%"
                            height={270}
                            src="https://www.youtube.com/embed/exhocurjhyo"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                        <div className="col-sm-4">
                           <iframe className='yt-video'
                            width="100%"
                            height={270}
                            src="https://www.youtube.com/embed/e4daKpRdYok"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                        <div className="col-sm-4">
                        <iframe className='yt-video'
                            width="100%"
                            height={270}
                            src="https://www.youtube.com/embed/huzjv7qLdjs"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                        <div className="col-sm-4">
                          <iframe className='yt-video'
                            width="100%"
                            height={270}
                            src="https://www.youtube.com/embed/b7nqrOsxrS8"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                        <div className="col-sm-4">
                          <iframe className='yt-video'
                            width="100%"
                            height={270}
                            src="https://www.youtube.com/embed/DDqeOHQRQQM?si=7yeDowfQ1cu-p-qu"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                        <div className="col-sm-4">
                        <iframe className='yt-video'
                            width="100%"
                            height={270}
                            src="https://www.youtube.com/embed/ztxEGEaXWmM?si=KlC0t68uZOWt0PA2"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </Tab>


            </Tabs>
            {/* <Modal show={showModal} onHide={closeModal} centered>
              <Modal.Body className='Gallery-modal-wrapper'>
                <Slider {...settings}>
                  {modalImages.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Image ${index}`} />
                    </div>
                  ))}
                </Slider>
              </Modal.Body>
            </Modal> */}
            <Modal show={showModal} onHide={closeModal} size='lg' dialogClassName='bg-transparent gallery-modal border-0'>
        <Modal.Body >
          <ImageGallery
            items={images}
            showPlayButton={true}
            showFullscreenButton={true}
            showThumbnails={false}
            showNav={true}
            startIndex={activeImageIndex}
            slideDuration={250}
            onRequestClose={closeModal}
            className='image-gallery-img' 
          />
        </Modal.Body>
      </Modal>
          </div>
          </div>

        </section> 


      <QuiryForm />

      <CompanyLogoSlider />

 
      <Footer />


    </>
  )
}

export default page;

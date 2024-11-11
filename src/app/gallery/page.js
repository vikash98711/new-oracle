'use client'  
 
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; 
import './page.css'

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
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
    {
      original: 'assets/img/gallery-2.jpg',
      thumbnail: 'assets/img/gallery-2.jpg',
    },
    {
      original: 'assets/img/gallery-3.jpg',
      thumbnail: 'assets/img/gallery-3.jpg',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-0.png',
      thumbnail: 'assets/img/gallery/gallery-pic-0.png',
    }, 
    {
      original: 'assets/img/gallery/gallery-pic-1.png',
      thumbnail: 'assets/img/gallery/gallery-pic-1.png',
    }, 
  ];

  const openModal = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.thumbnail}
          alt={`Image ${index + 1}`}
          onClick={() => openModal(index)}
          className='img-fluid'
        />
      ))}
      {/* dialogClassName="custom-modal" */}
      <Modal show={showModal} onHide={closeModal} size='lg' dialogClassName='bg-transparent gallery-modal border-0'>
        <Modal.Body >
          <ImageGallery
            items={images}
            showPlayButton={true}
            showFullscreenButton={true}
            showThumbnails={false}
            showNav={true}
            startIndex={selectedIndex}
            slideDuration={250}
            onRequestClose={closeModal}
            className='image-gallery-img' 
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Page;



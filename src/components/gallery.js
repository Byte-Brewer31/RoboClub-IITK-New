// Gallery.js

import React from 'react';

const GalleryItem = ({ imageSrc, altText, isLastItem, onClick }) => (
  <div className="gallery-item">
    <img src={imageSrc} alt={altText} />
    {isLastItem && (
      <div className="overlay" onClick={onClick}>
        Show More
      </div>
    )}
  </div>
);

const Gallery = () => {
  const galleryData = [
    { id: 1, src: '../gal2-1@2x.png', alt: 'Image 1' },
    { id: 2, src: '../gal3-1@2x.png', alt: 'Image 2' },
    { id: 3, src: '../gal4-1@2x.png', alt: 'Image 3' },
    { id: 4, src: '../robotics-club-img-1@2x.png', alt: 'Image 4' },
  ];

  const handleShowMore = () => {
    // Handle navigation to another page
    window.location.href = '/gallery'; // Change the URL to the desired page
  };

  return (
    <>
      {/* CSS Styles */}
      <style>
        {`
          .gallery-container {
            display: flex;
            justify-content: center;
          }

          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px; /* Adjust the gap according to your preference */
          }

          .gallery-item {
            position: relative; /* Ensure proper positioning for overlay */
            width: 100%;
            max-width: 100%;
            overflow: hidden;
          }

          .gallery-item img {
            width: 100%;
            height: auto;
            display: block;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4); /* Adjust the opacity as needed */
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 20px;
            cursor: pointer;
          }
        `}
      </style>

      {/* React Components */}
      <div className="Gallery" style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white', // Add color for better visibility
      }}>
        <h1  style={{fontSize: '5vw'}}>Gallery</h1>
        </div>
      <div className="gallery-container">
      
        <div className="gallery-grid">
          {galleryData.map((item, index) => (
            <GalleryItem
              key={item.id}
              imageSrc={item.src}
              altText={item.alt}
              isLastItem={index === galleryData.length - 1}
              onClick={handleShowMore}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;

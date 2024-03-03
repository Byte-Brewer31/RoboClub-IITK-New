// Gallery.js

import React from 'react';

const GalleryItem = ({ imageSrc, altText }) => (
  <div className="gallery-item">
    <img src={imageSrc} alt={altText} />
  </div>
);

const Gallery = () => {
  const galleryData = [
    { id: 1, src: '../gal2-1@2x.png', alt: 'Image 1' },
    { id: 2, src: '../gal3-1@2x.png', alt: 'Image 2' },
    { id: 3, src: '../gal4-1@2x.png', alt: 'Image 3' },
    { id: 4, src: '../robotics-club-img-1@2x.png', alt: 'Image 4' },
  ];

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
            width: 100%;
            max-width: 100%;
            overflow: hidden;
          }

          .gallery-item img {
            width: 100%;
            height: auto;
            display: block;
          }
        `}
      </style>

      {/* React Components */}
      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryData.map(item => (
            <GalleryItem key={item.id} imageSrc={item.src} altText={item.alt} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;

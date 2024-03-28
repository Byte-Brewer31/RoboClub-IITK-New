import React from 'react';
import {Link} from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const GalleryItem = ({ imageSrc, altText, isLastItem}) => (
  <div style={{
  	position:"relative",
  	width:"100%",
//   	maxWidth:"580px",
  	overflow:"hidden",
  }}>
    <img src={imageSrc} alt={altText} style={{
    	width:"100%",
    	display:"block,"
    }}/>
    {isLastItem && (
      <Link to="/gallery" style={{
      	position:"absolute",
				top:"0",
				left:"0",
				width:"100%",
				height:"100%",
				backgroundColor:"rgba(0, 0, 0, 0.4)",
				display:"flex",
				justifyContent:"center",
				alignItems:"center",
				color:"white",
				fontSize:"20px",
				cursor:"pointer",
      }}>
        Show More
      </Link>
    )}
  </div>
);

const Gallery = () => {	
	const wideScreen = useMediaQuery("(min-width:900px)");
  const galleryData = [
    { id: 1, src: `${process.env.PUBLIC_URL}/gal2-1@2x.png`, alt: 'Image 1' },
    { id: 2, src: `${process.env.PUBLIC_URL}/gal3-1@2x.png`, alt: 'Image 2' },
    { id: 3, src: `${process.env.PUBLIC_URL}/gal4-1@2x.png`, alt: 'Image 3' },
    { id: 4, src: `${process.env.PUBLIC_URL}/robotics-club-img-1@2x.png`, alt: 'Image 4' },
  ];

  return (
    <>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white', // Add color for better visibility
        maxWidth:"1600px",
        margin:"auto",
      }}>
        <h1>Gallery</h1>
			<div style={{
// 				display:"flex",
// 				flexWrap:"wrap",
				justifyContent:"center",
				gap:"20px",
				rowGap:"20px",
				width:"100%",
				display: "grid",
				gridTemplateColumns: (wideScreen ? "1fr 1fr" : "1fr"),
			}}>
				{galleryData.map((item, index) => (
					<GalleryItem
						key={item.id}
						imageSrc={item.src}
						altText={item.alt}
						isLastItem={index === galleryData.length - 1}
					/>
				))}
			</div>
			</div>
    </>
  );
};

export default Gallery;

import React from 'react';
import {Link} from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <div className="About Us" style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white', // Add color for better visibility
      }}>
        <h1>About Us</h1>
      </div>
      <div style={{
      	 width:"100%",
        display: 'flex', // make the container a flex container
        flexWrap:"wrap",
        justifyContent: 'center',
        gap:"5%",
      }}>
        <div style={{ width:"100%", maxWidth: '600px', textAlign: 'left' }}>
          <img src={`${process.env.PUBLIC_URL}/nano-1@2x.png`} alt="Red" style={{ width: '100%'}} />
        </div>
        <div style={{width:"100%", maxWidth: '600px',textAlign: 'left'}}>
          <h1 style={{fontSize: "25pt", color: '#733CA8', textAlign: 'left', paddingTop: '10%'}}>
          What if you could build a R2D2? How about Transformers? Or a WALL-E?
          </h1>
          <p style={{color:'white', fontSize: '20pt', textAlign: 'left'}}>
          If you have ever even secretly aspired to build your own robot, then the Robotics Club, IITK is the place for you! We are a diverse group of over-enthused robotics nerds who find roots across all academic departments of the institute as well as ‘seniority’. The club is a student body which finds its place under the Science and Technology Council, Student Gymkhana, IIT Kanpur. Interested in what kind of work we do? We build robots for academic purposes, to compete at both national and international events or just out of plain interest. Check out our projects and achievements. <br/><br/>#HappyRoboting
          </p>
          <Link to="/projects" style={{display:"flex", justifyContent:"center", alignItems:"center", textDecoration:"none", backgroundColor: '#733CA8', height: '50px', borderRadius: '50px' ,border: 'none',cursor: "pointer", margin:"auto"}} >
            <p style={{color: 'white', fontSize: '20pt', fontWeight: 'bolder', margin:"auto"}}>View Our Projects</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

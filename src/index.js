import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App.js';
import GalleryPage from './pages/gallerypage.js';
import AboutUs from './components/about_us';
import Explore from './pages/explore.js';
import Projects from './pages/projects.js';
import Navbar from './components/navbar';
import reportWebVitals from './reportWebVitals';
import Team from './pages/team.js';
import Blog from './pages/blog.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, Route

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  display: 'block',
  fontSize: '2vw',
  paddingBottom: '0.8vw',
  fontWeight: 'bolder',
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <div className="Index" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`, 
      backgroundSize: 'cover', 
      backgroundRepeat: 'repeat', 
      backgroundPosition: 'center', 
      width: '100vw', 
      minHeight: '100vh', 
    }}>
   <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </Router>

    <div style={{ 
        display: 'flex',
        alignItems: 'center',
        padding: '5%', // Add padding for spacing
        color: 'white', // Add color for better visibility
      }}>
        
        <div style={{ width: '33%', textAlign: 'left', paddingLeft: '3vw' }}>
        <img src={process.env.PUBLIC_URL + '/logo3-1@2x.png'} alt="Logo" style={{height: '5vw',margin: '1% 1%',}} />
        </div>
        <div style={{ width: '30%',display: 'flex', textAlign:'left', flexDirection: 'column', color: 'white', textDecoration: 'none', padding: '10px'}}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/about" style={linkStyle}>About</a>
          <a href="/blog" style={linkStyle}>Blog</a>
          <a href="/projects" style={linkStyle}>Projects</a>
          <a href="/team" style={linkStyle}>Team</a>
        </div>
        <div style={{ width: '37%', textAlign:'left'}}>
          <h3 style={{fontSize: '2vw', color: 'white', textAlign: 'left'}}>Social Media </h3>
          <a href="https://www.youtube.com/@RoboticsClubIITKanpur">
          <img src={process.env.PUBLIC_URL + '/riyoutubefill.svg'} alt="Facebook Icon" style={{width: '6vw', height: 'auto', paddingRight:'1vw'}} />
          </a>
          <a href="https://www.facebook.com/roboclubiitkanpur/">
          <img src={process.env.PUBLIC_URL + '/mdifacebook.svg'} alt="Facebook Icon" style={{width: '6vw', height: 'auto',paddingRight:'1vw'}} />
          </a>
          <a href="https://www.instagram.com/roboticsclub_iitk/">
          <img src={process.env.PUBLIC_URL + '/phinstagramlogofill.svg'} alt="Facebook Icon" style={{width: '6vw', height: 'auto',paddingRight:'1vw'}} />
          </a>
          <a href="https://www.linkedin.com/company/robotics-club-iit-kanpur/?originalSubdomain=in">
          <img src={process.env.PUBLIC_URL + '/uillinkedin.svg'} alt="Facebook Icon" style={{width: '6vw', height: 'auto', paddingRight:'1vw'}} />
          </a>
        </div>
        </div>
        <hr style={{width: '85%', borderColor: '#733CA8'}} /> {/* Horizontal line */}
        <footer style={{textAlign: 'center',fontSize: '2vw',fontWeight: 'bold',color: 'white'}}>
          <p> Copyright © 2022 All rights reserved | Robotics Club, IIT Kanpur</p> {/* Copyright text */}
        </footer>
        <br/>
        </div>
  </React.StrictMode>
);

reportWebVitals();
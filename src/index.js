import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home.js';
import GalleryPage from './pages/gallerypage.js';
import AboutUs from './components/about_us';
import Explore from './pages/explore.js';
import Projects from './pages/projects.js';
import Team from './pages/team.js';
import Blog from './pages/blog.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  display: 'block',
  fontSize: '2vw',
  paddingBottom: '0.8vw',
  fontWeight: 'bolder',
};

function Navbar() {
  const linkStyle = {
    color: '#f2f2f2',
    textDecoration: 'none',
    display: 'block',
    fontSize: '25pt'
  };

  return (
  	<div style={{height:"100px", width:"100%", position:"sticky", top:"0", padding:"0 5%", backdropFilter: "blur(20px)", zIndex:"10000"}}>
		<div style={{
			overflow: 'hidden',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			height:"100%",
			padding: "5px"
		}}>
			<Link to="/" style={{height:"100%", margin:"5px"}}>
				<img src={process.env.PUBLIC_URL + '/logo3-1@2x.png'} alt="Logo" style={{
					height: '100%',
				}} />
			</Link>
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				textAlign: 'center',
				margin: '0',
				justifyContent:"space-between",
				flexGrow:"1",
				gap:"10px",
				padding:"50px"
			}}>
				<Link to="/about" style={linkStyle}>About</Link>
				<Link to="/blog" style={linkStyle}>Blog</Link>
				<Link to="/projects" style={linkStyle}>Projects</Link>
				<Link to="/team" style={linkStyle}>Team</Link>
			</div>
		</div>
		</div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <div className="Index" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`, 
      backgroundSize: 'cover', 
      backgroundRepeat: 'repeat', 
      backgroundPosition: 'center', 
      width: '100%', 
      minHeight: '100vh', 
    }}>
		<Router>
			<Navbar />
			<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
			{/* Footer */}
			<div style={{ 
				display: 'flex',
				alignItems: 'center',
				padding: '5%', // Add padding for spacing
				color: 'white', // Add color for better 
				width: "100%",
			}}>
				<div style={{ width: '33%', textAlign: 'left', paddingLeft: '3vw' }}>
					<img src={process.env.PUBLIC_URL + '/logo3-1@2x.png'} alt="Logo" style={{height: '5vw',margin: '1% 1%',}} />
				</div>
				<div style={{ width: '30%',display: 'flex', textAlign:'left', flexDirection: 'column', color: 'white', textDecoration: 'none', padding: '10px'}}>
					<Link to="/" style={linkStyle}>Home</Link>
					<Link to="/about" style={linkStyle}>About</Link>
					<Link to="/blog" style={linkStyle}>Blog</Link>
					<Link to="/projects" style={linkStyle}>Projects</Link>
					<Link to="/team" style={linkStyle}>Team</Link>
				</div>
				<div style={{ width: '37%', textAlign:'left'}}>
					<h3 style={{fontSize: '2vw', color: 'white', textAlign: 'left'}}>Social Media </h3>
					<Link to="https://www.youtube.com/@RoboticsClubIITKanpur">
					<img src={process.env.PUBLIC_URL + '/riyoutubefill.svg'} alt="Facebook Icon" style={{width: '6vw', height: 'auto', paddingRight:'1vw'}} />
					</Link>
					<Link to="https://www.facebook.com/roboclubiitkanpur/">
					<img src={process.env.PUBLIC_URL + '/mdifacebook.svg'} alt="Facebook Icon" style={{width: '6vw', height: 'auto',paddingRight:'1vw'}} />
					</Link>
					<Link to="https://www.instagram.com/roboticsclub_iitk/">
					<img src={process.env.PUBLIC_URL + '/phinstagramlogofill.svg'} alt="Facebook Icon" style={{width: '6vw', height: 'auto',paddingRight:'1vw'}} />
					</Link>
					<Link to="https://www.linkedin.com/company/robotics-club-iit-kanpur/?originalSubdomain=in">
					<img src={process.env.PUBLIC_URL + '/uillinkedin.svg'} alt="Facebook Icon" style={{width: '6vw', height: 'auto', paddingRight:'1vw'}} />
					</Link>
				</div>
			</div>
			<hr style={{width: '85%', borderColor: '#733CA8'}} /> {/* Horizontal line */}
			<footer style={{textAlign: 'center',fontSize: '2vw',fontWeight: 'bold',color: 'white'}}>
				<p> Copyright © 2022 All rights reserved | Robotics Club, IIT Kanpur</p> {/* Copyright text */}
			</footer>
			<br/>
		</Router>
		</div>        
  </React.StrictMode>
);
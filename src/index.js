import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './index.css';
import Home from './pages/Home.js';
import AboutUs from './components/about_us';
import Gallery from './components/gallery';
import {ProjectsList, Project} from './pages/projects.js';
import Team from './pages/team.js';
import Alumni from './pages/alumni.js';
import {BlogsList, Blog} from './pages/blog.js';
import NotFound from "./pages/404.js"

function Navbar() {
  const linkStyle = {
    color: '#f2f2f2',
    textDecoration: 'none',
    display: 'block',
    fontSize: '20pt'
  };
  
  const wideScreen = useMediaQuery('(min-width:900px)'); //hamburger or not?

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
					height: '80%',
				}} />
			</Link>
			{wideScreen && <div style={{
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
				<Link to="/alumni" style={linkStyle}>Alumni</Link>
				<Link to="/gallery" style={linkStyle}>Gallery</Link>
			</div>}
			{!wideScreen && <Hamburger />}
		</div>
		</div>
  );
}

const Hamburger = () => {
	const [open, setOpen] = useState(false);
	
	return (
		<>
		<div><MenuRoundedIcon style={{width:"50px", height:"50px"}} onClick={() => {
			setOpen(true);
		}} /></div>
		{open && <div style={{
			position:"fixed",
			top:"0",
			left:"0",
			width:"100vw",
			height:"100vh",
			overflow:"hidden",
			backgroundColor:"#444",
			padding:"5%",
			zIndex:"10000",
		}}>
			<CloseRoundedIcon style={{
				position:"absolute",
				top:"25px",
				right:"5%",
				width:"50px",
				height:"50px",
				zIndex:"100000",
			}} onClick={() => {
				setOpen(false);
			}}/>
			<div style={{
				width:"50%",
				margin:"auto",
				alignItems:"center",
				position:"relative",
				display:"flex",
				flexDirection:"column",
				gap:"40px",
			}}>
				<Link style={{
					fontSize:"30pt",
					color:"white",
					fontWeight:"bold",
					display:"block",
					width:"fit-content",
					textDecoration:"none",
				}} onClick={() => {setOpen(false)}} to="/" >Home</Link>
				<Link style={{
					fontSize:"30pt",
					color:"white",
					fontWeight:"bold",
					display:"block",
					width:"fit-content",
					textDecoration:"none",
				}} onClick={() => {setOpen(false)}} to="/about" >About</Link>
				<Link style={{
					fontSize:"30pt",
					color:"white",
					fontWeight:"bold",
					display:"block",
					width:"fit-content",
					textDecoration:"none",
				}} onClick={() => {setOpen(false)}} to="/blog" >Blog</Link>
				<Link style={{
					fontSize:"30pt",
					color:"white",
					fontWeight:"bold",
					display:"block",
					width:"fit-content",
					textDecoration:"none",
				}} onClick={() => {setOpen(false)}} to="/projects" >Projects</Link>
				<Link style={{
					fontSize:"30pt",
					color:"white",
					fontWeight:"bold",
					display:"block",
					width:"fit-content",
					textDecoration:"none",
				}} onClick={() => {setOpen(false)}} to="/team" >Team</Link>
				<Link style={{
					fontSize:"30pt",
					color:"white",
					fontWeight:"bold",
					display:"block",
					width:"fit-content",
					textDecoration:"none",
				}} onClick={() => {setOpen(false)}} to="/alumni" >Alumni</Link>
				<Link style={{
					fontSize:"30pt",
					color:"white",
					fontWeight:"bold",
					display:"block",
					width:"fit-content",
					textDecoration:"none",
				}} onClick={() => {setOpen(false)}} to="/gallery" >Gallery</Link>
			</div>
		</div>}
		</>
	);
}

const ScrollReset = ({children}) => {
	const location = useLocation();
	console.log(location);
	useEffect(() => { //scroll to top on location change
		window.scrollTo(0,0);
	}, [location]);
	return (<>{children}</>);
}

const App = () => {
	return (
	<div className="Index" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`, 
      backgroundSize: 'cover', 
      backgroundRepeat: 'repeat', 
      backgroundPosition: 'center', 
      width: '100%', 
      minHeight: '100vh', 
    }}>
		<Router>
			<ScrollReset>
			<Navbar />
			<div style={{width:"100%", padding:"0 min(100px, 5%)"}}>
			<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<ProjectsList/>} />
        <Route path="/project/:url" element={<Project />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/alumni" element={<Alumni/>} />
        <Route path="/blog" element={<BlogsList/>} />
        <Route path="/blog/:url" element={<Blog />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </div>
			{/* Footer */}
			<div style={{ 
				display: 'flex',
				alignItems: 'center',
				padding: '5%', // Add padding for spacing
				color: 'white', // Add color for better 
				width: "100%",
			}}>
				<div style={{ width: '50%', textAlign: 'left'}}>
					<img src={process.env.PUBLIC_URL + '/logo3-1@2x.png'} alt="Logo" style={{display:"block", height: '100%', maxWidth:"100%", margin:"auto 0 auto auto"}} />
				</div>
				<div style={{ width: '50%', textAlign:'left', display:"flex", alignItems:"center", gap:"10px",}}>
					<Link style={{width: '100%', maxWidth:"100px", }} to="https://www.youtube.com/@RoboticsClubIITKanpur">
					<img src={process.env.PUBLIC_URL + '/riyoutubefill.svg'} alt="YouTube Icon" style={{width: '100%', maxWidth:"100px",  }} />
					</Link>
					<Link style={{width: '100%', maxWidth:"100px", }} to="https://www.facebook.com/roboclubiitkanpur/">
					<img src={process.env.PUBLIC_URL + '/mdifacebook.svg'} alt="Facebook Icon" style={{width: '100%', maxWidth:"100px", }} />
					</Link>
					<Link style={{width: '100%', maxWidth:"100px", }} to="https://www.instagram.com/roboticsclub_iitk/">
					<img src={process.env.PUBLIC_URL + '/phinstagramlogofill.svg'} alt="Instagram Icon" style={{width: '100%', maxWidth:"100px", }} />
					</Link>
					<Link style={{width: '100%', maxWidth:"100px", }} to="https://www.linkedin.com/company/robotics-club-iit-kanpur/?originalSubdomain=in">
					<img src={process.env.PUBLIC_URL + '/uillinkedin.svg'} alt="LinkedIn Icon" style={{width: '100%', maxWidth:"100px", }} />
					</Link>
				</div>
			</div>
			<hr style={{width: '85%', borderColor: '#733CA8'}} /> {/* Horizontal line */}
			<footer style={{textAlign: 'center',fontSize: '15pt',fontWeight: 'bold',color: 'white'}}>
				<p> Copyright © 2024 All rights reserved | Robotics Club, IIT Kanpur</p> {/* Copyright text */}
			</footer>
			<br/>
			</ScrollReset>
		</Router>
		</div>        

	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  	<App />
  </React.StrictMode>
);
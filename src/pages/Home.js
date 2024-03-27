import React from 'react';
import {Link} from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Gallery from '../components/gallery';
import AboutUs from '../components/about_us';
import EventRow from '../components/events'; 

function App() {
	const wideScreen = useMediaQuery("(min-width: 900px)");
  return (
    <div className="App">
      <div style={{ 
        display: 'flex', // make the container a flex container
        justifyContent: 'center',
        gap:"40px",
        flexWrap:"wrap",
      }}>
        	<div style={{ width: '100%', maxWidth:"600px", textAlign: 'left', order: (wideScreen ? "1" : "2") }}>
						<h1 style={{fontSize: 'max(50pt, 6vw)', color: 'white', textAlign: 'left'}}>
							Revolution in Human Evolution 
						</h1>
						<p style={{color:'white', fontSize: '25pt', textAlign: 'left'}}>
							Robotics and other Combinations will make the world pretty fantastic compared with today
						</p>
						<button style={{ display:"block", margin:"auto", marginLeft:(wideScreen ? "0" : "auto"), backgroundColor: '#733CA8', height: '75px', width: '300px', fontSize: '30pt', borderRadius: '75px' ,border: 'none',cursor: "pointer"}}>
							<Link to="/about" style={{color: 'white', fontWeight: 'bolder', textDecoration:"none"}}>Explore Now!</Link>
						</button>
        	</div>
        	<div style={{ maxWidth: '100%', width:"650px", textAlign: 'right', order: (wideScreen ? "2" : "1") }}>
         	<img src={`${process.env.PUBLIC_URL}/chat-botamico-1-1@2x.png`} alt="Robot" style={{ width: '100%'}} />
        	</div>
      </div>
      <div style={{marginBottom:"40px"}}>
      <AboutUs />
      </div>

    	<div style={{marginBottom:"40px"}}>
    		<EventRow />
    	</div>

       <div style={{marginBottom:"40px"}}>
        <Gallery />
      </div>
    </div>

  );
}


export default App;
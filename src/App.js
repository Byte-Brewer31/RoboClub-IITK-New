import React from 'react';
import Navbar from './components/navbar';
import Gallery from './components/gallery';
import AboutUs from './components/about_us';
import EventRow from './components/events'; 
import './App.css';

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  display: 'block',
  fontSize: '2vw',
  paddingBottom: '0.8vw',
  fontWeight: 'bolder',
};

function App() {
  const handleClick = () => {
    // Handle navigation to another page
    window.location.href = '/explore'; // Change the URL to the desired page
  };

  return (
    <div  className="App">
      <Navbar />
      <div style={{ 
        overflowY: 'scroll',
        display: 'flex', // make the container a flex container
        justifyContent: 'space-between', // add padding for spacing
      }}>
          <div style={{ width: '50%', textAlign: 'left', paddingLeft: '3vw' }}> {/* left div */}
          <h1 style={{fontSize: '7vw', color: 'white', textAlign: 'left', paddingTop: '1vw'}}>
            Revolution in<br/> Human <br/> Evolution 
          </h1>
          <p style={{color:'white', fontSize: '1.7vw', textAlign: 'left' , paddingBottom: '1vw'}}>
            Robotics and other Combinations will make the <br/>world pretty fantastic compared with today
          </p>
          <button style={{ backgroundColor: '#733CA8', height: '5vw', width: '20vw', fontSize: '1.5vw', borderRadius: '2vw' ,border: 'none',cursor: "pointer",}} onClick={handleClick}>
            <p style={{color: 'white', fontSize: '1.7vw', fontWeight: 'bolder'}}>EXPLORE NOW</p>
          </button>
          </div>
          <div style={{ width: '50%', textAlign: 'right' }}> {/* right div */}
            <img src={`${process.env.PUBLIC_URL}/chat-botamico-1-1@2x.png`} alt="Red" style={{ width: '100%'}} />
          </div>
      </div>
      <div className="About Us" style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5%', // Add padding for spacing
        color: 'white', // Add color for better visibility
      }}>
        <h1 style={{fontSize: '5vw'}}>About Us</h1>
      <AboutUs />
      </div>

      <div className="Events" style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '5%', 
            color: 'white',
            width: "100vw"
          }}>
          <h1 style={{ fontSize: '5vw' }}>Events</h1>
          <EventRow />
          {/* Add more EventRows or content as needed */}
        </div>

       {/* Gallery Component */}
       <div className="Gallery" style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5%', // Add padding for spacing
        color: 'white', // Add color for better visibility
      }}>
        <h1  style={{fontSize: '5vw'}}>Gallery</h1>
        <Gallery />
      </div>
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
          <a href="#" style={linkStyle}>Home</a>
          <a href="#" style={linkStyle}>About</a>
          <a href="#" style={linkStyle}>Blog</a>
          <a href="http://localhost:8080/projects.js" style={linkStyle}>Projects</a>
          <a href="#" style={linkStyle}>Team</a>
        </div>
        <div style={{ width: '37%', textAlign:'left'}}>
          <h3 style={{fontSize: '2vw', color: 'white', textAlign: 'left'}}>Social Media </h3>
          <a href="#">
          <img src={process.env.PUBLIC_URL + '/riyoutubefill.svg'} alt="Facebook Icon" style={{width: '6vw', height: 'auto', paddingRight:'1vw'}} />
          </a>
          <a href="#">
          <img src={process.env.PUBLIC_URL + '/mdifacebook.svg'} alt="Facebook Icon" style={{width: '6vw', height: 'auto',paddingRight:'1vw'}} />
          </a>
          <a href="#">
          <img src={process.env.PUBLIC_URL + '/phinstagramlogofill.svg'} alt="Facebook Icon" style={{width: '6vw', height: 'auto',paddingRight:'1vw'}} />
          </a>
          <a href="#">
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

  );
}


export default App;
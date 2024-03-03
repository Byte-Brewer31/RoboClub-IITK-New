import React from 'react';
import Navbar from './components/navbar';
import Gallery from './components/gallery';
import AboutUs from './components/about_us';
import './App.css';

function App() {
  return (
    <div  className="App" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        width: '100vw', 
        minHeight: '100vh', 
    }}>
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
          <button style={{ backgroundColor: '#733CA8', height: '5vw', width: '20vw', fontSize: '1.5vw', borderRadius: '2vw' ,border: 'none'}}>
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
    </div>
  

  );
}

export default App;
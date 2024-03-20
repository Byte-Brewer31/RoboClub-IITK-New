import React from 'react';
import Gallery from '../components/gallery';
import AboutUs from '../components/about_us';
import EventRow from '../components/events'; 
import './App.css';

function App() {
  const handleClick = () => {
    // Handle navigation to another page
    window.location.href = '/explore'; // Change the URL to the desired page
  };

  return (
    <div  className="App">
      <div style={{ 
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
      <div className="About Us">
      <AboutUs />
      </div>

      <div className="Events">
          <EventRow />
        </div>

       {/* Gallery Component */}
       <div className="Gallery" >
        <Gallery />
      </div>
    </div>

  );
}


export default App;
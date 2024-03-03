import React from 'react';
import Navbar from './components/navbar';
import Gallery from './components/gallery';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        width: '100vw', 
        minHeight: '100vh', 
        overflowY: 'scroll',
        display: 'flex', // make the container a flex container
        justifyContent: 'space-between', // add padding for spacing
      }}>
          <div style={{ width: '50%' }}> {/* left div */}
            Test
          </div>
          <div style={{ width: '50%', textAlign: 'right' }}> {/* right div */}
            <img src={`${process.env.PUBLIC_URL}/chat-botamico-1-1@2x.png`} alt="Red" style={{ width: '100%'}} />
          </div>
      </div>

       {/* Gallery Component */}
       <div className="Gallery" style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: `url(${process.env.PUBLIC_URL}/bg.png) center/cover no-repeat`, 
        padding: '5%', // Add padding for spacing
        color: 'white', // Add color for better visibility
      }}>
        <h1>Gallery</h1>
        <Gallery />
      </div>
    </div>
  

  );
}

export default App;
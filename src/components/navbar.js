// App.js

import React from 'react';
import '../App.css';

function App() {

  const navbarStyle = {
    // backgroundColor: '#333',
  //   overflow: 'hidden',
  //   display: 'flex',
  //   alignItems: 'center',
  //   padding: '10px 20px',
  // 
  background: `rgba(51, 51, 51, 0.7) url(${process.env.PUBLIC_URL}/bg.png) center/cover no-repeat`,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  padding: '10px 20px',
};

  const linkStyle = {
    color: '#f2f2f2',
    textAlign: 'center',
    textDecoration: 'none',
    padding: '10px 16px',
  };

  const logoStyle = {
    height: '40px', // Adjust the height as needed
    marginRight: '10px',
  };

  return (
    <div>
      <div style={navbarStyle}>
        <a href="#">
          <img src={process.env.PUBLIC_URL + '/logo3-1@2x.png'} alt="Logo" style={logoStyle} />
        </a>
        <a href="#" style={linkStyle}>About</a>
        <a href="#" style={linkStyle}>Blog</a>
        <a href="#" style={linkStyle}>Projects</a>
        <a href="#" style={linkStyle}>Team</a>
      </div>
      <div className="App" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100vw', minHeight: '100vh', overflowY: 'scroll' }}>
        <p>
          {/* Your existing content goes here */}
        </p>
      </div>
    </div>
  );
}

export default App;
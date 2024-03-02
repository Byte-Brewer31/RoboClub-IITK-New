// App.js

import React from 'react';
import '../App.css';

function App() {

  const navbarStyle = {
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
    padding: '2.5% 10%',
  };

    const logoStyle = {
      height: '40px',
      marginLeft: '15%', // Adjust the left margin as needed
      marginRight: '100px', // Adjust the right margin as needed
      marginTop: '20%', // Adjust the top margin as needed
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
    </div>
  );
}

export default App;
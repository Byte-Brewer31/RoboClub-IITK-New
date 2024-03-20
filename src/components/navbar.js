import React from 'react';
import '../pages/App.css';

function Navbar() {
  const navbarStyle = {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjust alignment for space between items
    padding: '2% 4%',
  };

  const linkContainerStyle = {
    display: 'flex', // Always display links in a row
    flexDirection: 'row', // Always arrange links horizontally
    textAlign: 'center', // Center align text
    margin: '0', // Reset margin
  };

  const linkStyle = {
    color: '#f2f2f2',
    textDecoration: 'none',
    padding: '10px',
    display: 'block',
  };

  const logoStyle = {
    height: '5vw',
    margin: '1% 1%',
  };

  return (
    <div>
      <div style={navbarStyle}>
        <a href="#">
          <img src={process.env.PUBLIC_URL + '/logo3-1@2x.png'} alt="Logo" style={logoStyle} />
        </a>
        <div style={linkContainerStyle}>
          <a href="/about" style={linkStyle}>About</a>
          <a href="/bog" style={linkStyle}>Blog</a>
          <a href="/projects" style={linkStyle}>Projects</a>
          <a href="/team" style={linkStyle}>Team</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

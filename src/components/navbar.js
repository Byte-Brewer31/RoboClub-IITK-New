import React from 'react';
import '../pages/App.css';

function Navbar() {
  const navbarStyle = {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjust alignment for space between items
    padding: '2vw 4vw',
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
    padding: '0 5vw',
    display: 'block',
    fontSize: '2.5vw'
  };

  const logoStyle = {
    height: '5vw',
    margin: '1vw 1vw',
  };

  return (
    <div>
      <div style={navbarStyle}>
        <a href="/">
          <img src={process.env.PUBLIC_URL + '/logo3-1@2x.png'} alt="Logo" style={logoStyle} />
        </a>
        <div style={linkContainerStyle}>
          <a href="/about" style={linkStyle}>About</a>
          <a href="/blog" style={linkStyle}>Blog</a>
          <a href="/projects" style={linkStyle}>Projects</a>
          <a href="/team" style={linkStyle}>Team</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

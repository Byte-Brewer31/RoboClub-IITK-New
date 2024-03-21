import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <img src={process.env.PUBLIC_URL + '/logo3-1@2x.png'} alt="Logo" style={logoStyle} />
        </Link>
        <div style={linkContainerStyle}>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/blog" style={linkStyle}>Blog</Link>
          <Link to="/projects" style={linkStyle}>Projects</Link>
          <Link to="/team" style={linkStyle}>Team</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

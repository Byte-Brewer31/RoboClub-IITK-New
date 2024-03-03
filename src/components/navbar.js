import React, { useState } from 'react';
import { Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../App.css';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  // Function to handle toggling the screen size
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768); // Adjust the width threshold as needed for small screens
  };

  // Add event listener for window resize
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navbarStyle = {
    background: `rgba(51, 51, 51, 0.7) url(${process.env.PUBLIC_URL}/bg.png) center/cover no-repeat`,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: isSmallScreen ? 'space-between' : 'flex-start',
    padding: '10px 10%',
  };

  const linkContainerStyle = {
    display: isSmallScreen ? 'none' : 'block',
  };

  const dropdownMenuStyle = {
    display: isSmallScreen ? (showDropdown ? 'block' : 'none') : 'none',
    position: 'absolute',
    top: '100%',
    backgroundColor: '#333',
    padding: '10px',
    width: '100%',
  };

  const linkStyle = {
    color: '#f2f2f2',
    textAlign: 'center',
    textDecoration: 'none',
    padding: '2.5% 10%',
    display: 'block',
  };

  const logoStyle = {
    height: '40px',
    margin: '20px 2%',
  };

  return (
    <div>
      <div style={navbarStyle}>
        <a href="#">
          <img src={process.env.PUBLIC_URL + '/logo3-1@2x.png'} alt="Logo" style={logoStyle} />
        </a>
        {isSmallScreen && (
          <Button onClick={() => setShowDropdown(!showDropdown)} startIcon={<ArrowDropDownIcon />}>
            {showDropdown ? 'Hide Menu' : 'Show Menu'}
          </Button>
        )}
        <div style={linkContainerStyle}>
          <a href="#" style={linkStyle}>About</a>
          <a href="#" style={linkStyle}>Blog</a>
          <a href="#" style={linkStyle}>Projects</a>
          <a href="#" style={linkStyle}>Team</a>
        </div>
        <div style={dropdownMenuStyle}>
          <a href="#" style={linkStyle}>About</a>
          <a href="#" style={linkStyle}>Blog</a>
          <a href="#" style={linkStyle}>Projects</a>
          <a href="#" style={linkStyle}>Team</a>
        </div>
      </div>
    </div>
  );
}

export default App;

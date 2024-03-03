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
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjust alignment for space between items
    padding: '2% 4%',
  };

  const linkContainerStyle = {
    display: isSmallScreen ? (showDropdown ? 'block' : 'none') : 'flex', // Adjust display based on screen size and dropdown state
    flexDirection: isSmallScreen ? 'column' : 'row', // Adjust flex direction based on screen size
    textAlign: 'center', // Center align text
    margin: '0', // Reset margin
  };

  const dropdownMenuStyle = {
    display: isSmallScreen ? (showDropdown ? 'block' : 'none') : 'none', // Adjust display based on screen size and dropdown state
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: '#333',
    padding: '10px',
    width: '100%',
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

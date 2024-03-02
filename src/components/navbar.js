// App.js

import React from 'react';
import '../App.css';

function App() {

  const navbarStyle = {
    backgroundColor: '#333',
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
        {/* Rest of your navbar code... */}
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
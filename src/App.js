// App.js

import React from 'react';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100vw', minHeight: '100vh', overflowY: 'scroll' }}>
        <p>
          {/* Your existing content goes here */}
        </p>
      </div>
    </div>
  );
}

export default App;

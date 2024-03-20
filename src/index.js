import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App.js';
import GalleryPage from './pages/gallerypage.js';
import AboutUs from './components/about_us';
import Explore from './pages/explore.js';
import Projects from './pages/projects.js';
import Navbar from './components/navbar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, Route

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <div className="Index" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`, 
      backgroundSize: 'cover', 
      backgroundRepeat: 'repeat', 
      backgroundPosition: 'center', 
      width: '100vw', 
      minHeight: '100vh', 
    }}>
   <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
    </div>
  </React.StrictMode>
);

reportWebVitals();
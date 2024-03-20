import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GalleryPage from './gallerypage';
import AboutUs from './components/about_us';
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
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
    </div>
  </React.StrictMode>
);

reportWebVitals();
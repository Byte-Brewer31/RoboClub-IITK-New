import React from 'react';

function Blog() {
  return (

    <div>
    <div className="App" style={{ 
      display: 'flex', // make the container a flex container
      justifyContent: 'space-between', // add padding for spacing
    }}>
      <div style={{ width: '50%', textAlign: 'left', paddingLeft: '3vw' }}> {/* left div */}
        <h1 style={{fontSize: '2vw', color: '#733CA8', textAlign: 'left', paddingTop: '1vw'}}>
        Robotics
        </h1>
        <p style={{color:'white', fontSize: '2vw', textAlign: 'left' , paddingBottom: '1vw'}}>
        lorem ipsum
        </p>
        
      </div>
    </div>
  </div>
  );
}

export default Blog;
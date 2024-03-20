import React from 'react';

function AboutUs() {
  const handleClick = () => {
    // Handle navigation to another page
    window.location.href = '/projects'; // Change the URL to the desired page
  };
  return (
    <div>
      <div className="About Us" style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white', // Add color for better visibility
      }}>
        <h1 style={{fontSize: '5vw'}}>About Us</h1>
      </div>
      <div className="App" style={{ 
        display: 'flex', // make the container a flex container
        justifyContent: 'space-between', // add padding for spacing
      }}>
        <div style={{ width: '50%', textAlign: 'left' }}> {/* right div */}
          <img src={`${process.env.PUBLIC_URL}/nano-1@2x.png`} alt="Red" style={{ width: '100%'}} />
        </div>
        <div style={{ width: '50%', textAlign: 'left', paddingLeft: '3vw' }}> {/* left div */}
          <h1 style={{fontSize: '2vw', color: '#733CA8', textAlign: 'left', paddingTop: '1vw'}}>
          What if you could build a R2D2? How about Transformers? Or a WALL-E?
          </h1>
          <p style={{color:'white', fontSize: '2vw', textAlign: 'left' , paddingBottom: '1vw'}}>
          If you have ever even secretly aspired to build your own robot, then the Robotics Club, IITK is the place for you! We are a diverse group of over-enthused robotics nerds who find roots across all academic departments of the institute as well as ‘seniority’. The club is a student body which finds its place under the Science and Technology Council, Student Gymkhana, IIT Kanpur. Interested in what kind of work we do? We build robots for academic purposes, to compete at both national and international events or just out of plain interest. Check out our projects and achievements. <br/><br/>#HappyRoboting
          </p>
          <button style={{ backgroundColor: '#733CA8', height: '5vw', width: '20vw', fontSize: '1.5vw', borderRadius: '2vw' ,border: 'none'}} >
            <p style={{color: 'white', fontSize: '1.7vw', fontWeight: 'bolder',cursor: "pointer"}}onClick={handleClick}>PROJECTS</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

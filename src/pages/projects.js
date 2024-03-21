import React from "react";

const ProjectBlock = ({ imageUrl, title, description, isImageLeft, titleColor, contentColor }) => {
  const handleClick = () => {
    // Handle navigation to project details page
    window.location.href = '/project-details'; // Change the URL to the desired page
  };

  const imageStyle = {
    flex: "1",
    marginRight: isImageLeft ? "5vw" : "0", // Margin-right only if image is on the left
    order: isImageLeft ? "1" : "2", // Change the order based on image position
    marginLeft: "2vw", // Add space on the left
  };

  const contentStyle = {
    flex: "2",
    order: isImageLeft ? "2" : "1", // Change the order based on image position
    color: contentColor, // Set content color dynamically
    marginLeft: "2vw", // Add space on the left
    marginRight: "2vw", // Add space on the right
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "2vw" }}>
      <div style={imageStyle}>
        <img src={imageUrl} alt={title} style={{ width: "100%" }} />
      </div>
      <div style={contentStyle}>
        <h2 style={{ color: titleColor }}>{title}</h2>
        <p>{description}</p>
        <button
          style={{
            backgroundColor: '#733CA8',
            color: 'white',
            padding: '1vw 2vw',
            border: 'none',
            borderRadius: '1vw',
            cursor: 'pointer',
          }}
          onClick={handleClick}
        >
          See Details
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white', // Add color for better visibility
        marginBottom: '2vw',
      }}>
        <h1 style={{ fontSize: '5vw' }}>Our Projects</h1>
      </div>
      <ProjectBlock
        imageUrl={`${process.env.PUBLIC_URL}/project1.jpg`}
        title="Project 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        isImageLeft={true} // First image is on the left
        titleColor="blue" // Set title color for the first block
        contentColor="green" // Set content color for the first block
      />
      <ProjectBlock
        imageUrl={`${process.env.PUBLIC_URL}/project2.jpg`}
        title="Project 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        isImageLeft={false} // Second image is on the right
        titleColor="red" // Set title color for the second block
        contentColor="yellow" // Set content color for the second block
      />
      <ProjectBlock
        imageUrl={`${process.env.PUBLIC_URL}/project3.jpg`}
        title="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        isImageLeft={true} // Third image is on the left
        titleColor="purple" // Set title color for the third block
        contentColor="orange" // Set content color for the third block
      />
    </div>
  );
};

export default Projects;

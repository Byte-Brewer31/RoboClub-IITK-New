import React from "react";

const BlogBlocks = ({ imageUrl, title, description, isImageLeft, titleColor, contentColor }) => {
 const imageStyle = {
    flex: "1",
    marginRight: isImageLeft ? "5vw" : "0", // Margin-right only if image is on the left
    order: isImageLeft ? "1" : "2", // Change the order based on image position
  };

  const contentStyle = {
    flex: "2",
    order: isImageLeft ? "2" : "1", // Change the order based on image position
    color: contentColor // Set content color dynamically
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "2vw" }}>
      <div style={imageStyle}>
        <img src={imageUrl} alt={title} style={{ width: "100%" }} />
      </div>
      <div style={contentStyle}>
        <h2 style={{ color: titleColor }}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <div>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white', // Add color for better visibility
        marginBottom: '2vw',
      }}>
        <h1 style={{ fontSize: '5vw' }}>Robotics Club</h1>
      </div>
      <BlogBlocks
        imageUrl={`${process.env.PUBLIC_URL}/project1.jpg`}
        title="What do we do"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        isImageLeft={true} // First image is on the left
        titleColor="blue" // Set title color for the first block
        contentColor="green" // Set content color for the first block
      />
      <BlogBlocks
        imageUrl={`${process.env.PUBLIC_URL}/project2.jpg`}
        title="Why us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        isImageLeft={false} // Second image is on the right
        titleColor="red" // Set title color for the second block
        contentColor="yellow" // Set content color for the second block
      />
      <BlogBlocks
        imageUrl={`${process.env.PUBLIC_URL}/project3.jpg`}
        title="Our Progress"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        isImageLeft={true} // Third image is on the left
        titleColor="purple" // Set title color for the third block
        contentColor="orange" // Set content color for the third block
      />
    </div>
  );
};

export default Blogs;

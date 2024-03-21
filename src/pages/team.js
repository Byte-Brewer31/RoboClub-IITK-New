import React from "react";

const TeamMemberBox = ({ imageUrl, name, designation, facebookLink, instagramLink, linkedinLink }) => {
  return (
    <div
      style={{
        flex: "1",
        backgroundColor: "rgba(39, 27, 56, 0.7)",
        borderRadius: "6.6%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        margin: "1%",
        position: "relative",
        width: "22vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: "70%",
          height: "auto",
          borderRadius: "50vw",
          marginBottom: "1vw",
        }}
      />
      <div
        style={{
          textAlign: "center",
          padding: "0 1vw",
        }}
      >
        <h2
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "3vw",
            lineHeight: "3.5vw",
            marginBottom: "2%",
            color: "#FFFFFF",
          }}
        >
          {name}
        </h2>
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "2vw",
            lineHeight: "3vw",
            marginBottom: "2%",
            color: "#FFFFFF",
          }}
        >
          {designation}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
           <a href={facebookLink} style={{ color: "#FFFFFF" }}>
            <img src={process.env.PUBLIC_URL + '/mdifacebook.svg'} alt="Facebook Icon" style={{width: '3vw', height: 'auto', paddingRight:'1vw', marginBottom: 0}} />
          </a>
          <a href={instagramLink} style={{ color: "#FFFFFF" }}>
            <img src={process.env.PUBLIC_URL + '/phinstagramlogofill.svg'} alt="Instagram Icon" style={{width: '3vw', height: 'auto', paddingRight:'1vw', marginBottom: 0}} />
          </a>
          <a href={linkedinLink} style={{ color: "#FFFFFF" }}>
            <img src={process.env.PUBLIC_URL + '/uillinkedin.svg'} alt="LinkedIn Icon" style={{width: '3vw', height: 'auto', paddingRight:'1vw', marginBottom: 0}} />
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamRow = () => {
  return (
    <div className="Team" style={{ 
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      color: 'white',// Add padding for spacing
      width: "100vw"
    }}>
    <h1 style={{ fontSize: '5vw' }}>Our Team</h1>

    <div style={{ 
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      width: "100vw",
      paddingTop: "2vw",
    }}>
      {/* First Row */}
      <div
        style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
      >
        <TeamMemberBox
          imageUrl={process.env.PUBLIC_URL + '/mdifacebook.svg'}
          name="John Doe"
          designation="Frontend Developer"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />

        <TeamMemberBox
          imageUrl={`${process.env.PUBLIC_URL}/team_member2.jpg`}
          name="Jane Doe"
          designation="Backend Developer"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />

        <TeamMemberBox
          imageUrl={`${process.env.PUBLIC_URL}/team_member3.jpg`}
          name="Alice Smith"
          designation="UI/UX Designer"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />

        <TeamMemberBox
          imageUrl={`${process.env.PUBLIC_URL}/team_member4.jpg`}
          name="Bob Johnson"
          designation="Marketing Manager"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />
      </div>
      
      {/* Second Row */}
      <div
        style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
      >
        <TeamMemberBox
          imageUrl={`${process.env.PUBLIC_URL}/team_member5.jpg`}
          name="Emily Wilson"
          designation="Content Writer"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />

        <TeamMemberBox
          imageUrl={`${process.env.PUBLIC_URL}/team_member6.jpg`}
          name="David Brown"
          designation="Graphic Designer"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />

        <TeamMemberBox
          imageUrl={`${process.env.PUBLIC_URL}/team_member7.jpg`}
          name="Emma Taylor"
          designation="SEO Specialist"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />

        <TeamMemberBox
          imageUrl={`${process.env.PUBLIC_URL}/team_member8.jpg`}
          name="Michael Clark"
          designation="Project Manager"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />
      </div>
    </div>
    </div>
  );
};

export default TeamRow;

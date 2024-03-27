import React from "react";
import Grid from "@mui/material/Grid";

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
        width: "100%",
        padding:"20px",
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
          borderRadius: "100%",
          marginBottom: "10px",
        }}
      />
      <div
        style={{
          textAlign: "center",
          padding: "0 5%",
        }}
      >
        <h2
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "25pt",
            lineHeight: "50pt",
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
            fontSize: "18pt",
            lineHeight: "23pt",
            marginBottom: "10%",
            color: "#FFFFFF",
          }}
        >
          {designation}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap:"30px",
            width: "100%",
          }}
        >
           <a href={facebookLink} style={{ color: "#FFFFFF", width:"25%"}}>
            <img src={process.env.PUBLIC_URL + '/mdifacebook.svg'} alt="Facebook Icon"  />
          </a>
          <a href={instagramLink} style={{ color: "#FFFFFF", width:"25%"}}>
            <img src={process.env.PUBLIC_URL + '/phinstagramlogofill.svg'} alt="Instagram Icon"  />
          </a>
          <a href={linkedinLink} style={{ color: "#FFFFFF", width:"25%"}}>
            <img src={process.env.PUBLIC_URL + '/uillinkedin.svg'} alt="LinkedIn Icon"  />
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamRow = () => {
  return (
    <div style={{ 
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      color: 'white',
      width: "100%"
    }}>
    <h1>Our Team</h1>

		<Grid container columns={{sm: 2, md: 4}} spacing={3} style={{width:"100%"}} justifyContent="center" alignItems="center">
			<Grid item xs={1}>
				<TeamMemberBox
          imageUrl={process.env.PUBLIC_URL + '/mdifacebook.svg'}
          name="John Doe"
          designation="Frontend Developer"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />
			</Grid>
			<Grid item xs={1}>
				<TeamMemberBox
          imageUrl={process.env.PUBLIC_URL + '/mdifacebook.svg'}
          name="John Doe"
          designation="Frontend Developer"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />
			</Grid>
			<Grid item xs={1}>
				<TeamMemberBox
          imageUrl={process.env.PUBLIC_URL + '/mdifacebook.svg'}
          name="John Doe"
          designation="Frontend Developer"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />
			</Grid>
			<Grid item xs={1}>
				<TeamMemberBox
          imageUrl={process.env.PUBLIC_URL + '/mdifacebook.svg'}
          name="John Doe"
          designation="Frontend Developer"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />
			</Grid>
			<Grid item xs={1}>
				<TeamMemberBox
          imageUrl={process.env.PUBLIC_URL + '/mdifacebook.svg'}
          name="John Doe"
          designation="Frontend Developer"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />
			</Grid>
			<Grid item xs={1}>
				<TeamMemberBox
          imageUrl={process.env.PUBLIC_URL + '/mdifacebook.svg'}
          name="John Doe"
          designation="Frontend Developer"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />
			</Grid>
			<Grid item xs={1}>
				<TeamMemberBox
          imageUrl={process.env.PUBLIC_URL + '/mdifacebook.svg'}
          name="John Doe"
          designation="Frontend Developer"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />
			</Grid>
			<Grid item xs={1}>
				<TeamMemberBox
          imageUrl={process.env.PUBLIC_URL + '/mdifacebook.svg'}
          name="John Doe"
          designation="Frontend Developer"
          facebookLink="#"
          instagramLink="#"
          linkedinLink="#"
        />
			</Grid>
		</Grid>
    </div>
  );
};

export default TeamRow;

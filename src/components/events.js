import React from "react";

const EventBox = ({ eventNumber, backgroundColor, eventTitle, eventInfo }) => {
  return (
    <div
      style={{
        flex: "1",
        backgroundColor: backgroundColor,
        borderRadius: "6.6%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        margin: "1%",
        position: "relative",
        height: "45vw",
        width: "30vw",
      }}
    >
      <div
        style={{
          width: "100%",
          position: "absolute",
          top: "-1%", // Adjust this value to control the overlap
          left: "0",
          textAlign: "center",
          zIndex: "1",
        }}
      >
        <div
          style={{
            width: "30%", // Adjust the size of the circular logo
            height: "30%", // Adjust the size of the circular logo
            backgroundColor: "rgba(135, 80, 189, 0.85)",
            borderRadius: "50%",
            margin: "0 auto",
            position: "relative",
            transform: "translateY(-50%)", // Center vertically
          }}
        >
          <img
            src={`../takneek-1@2x.png`}
            alt={`Event ${eventNumber}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          borderRadius: "1.5%",
          marginTop: "5%", // Adjust this value to control the space below the logo
        }}
      >
        <div style={{ padding: "10%" }}>
          <div
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "3vw", // Adjusted to viewport width
              lineHeight: "4.5vw", // Adjusted to viewport width
              textAlign: "center",
              letterSpacing: "0.05em",
              color: "#FFFFFF",
            }}
          >
            {eventTitle}
          </div>
          <div
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.8vw", // Adjusted to viewport width
              lineHeight: "2.8vw", // Adjusted to viewport width
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            {eventInfo}
          </div>
        </div>
      </div>
    </div>
  );
};

const EventRow = () => {
  return (
    <div className="Events" style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white',// Add padding for spacing
      width: "100vw"
    }}>
    <h1 style={{ fontSize: '5vw' }}>Events</h1>

    <div style={{ overflowX: "auto",width: "100vw", alignContent: "center", paddingTop: "2vw" }}>

      <div
        style={{ display: "inline-flex", margin: "2%"}}
      >
        <EventBox
          eventNumber={1}
          backgroundColor="rgba(39, 27, 56, 0.7)"
          eventTitle="Takneek"
          eventInfo="The Science and Technology Council presents to you Takneek 2019, the intra-IITK Science and Technology Championship. A competition in which all the pools shall participate with one common aim in mind, winning the coveted Takneek trophy, with their favourite Science-Figure by their side."

        />

        <EventBox
          eventNumber={2}
          backgroundColor="rgba(39, 27, 56, 0.7)"
          eventTitle="Takneek"
          eventInfo="The Science and Technology Council presents to you Takneek 2019, the intra-IITK Science and Technology Championship. A competition in which all the pools shall participate with one common aim in mind, winning the coveted Takneek trophy, with their favourite Science-Figure by their side."
        />

        <EventBox
          eventNumber={3}
          backgroundColor="rgba(39, 27, 56, 0.7)"
          eventTitle="Takneek"
          eventInfo="The Science and Technology Council presents to you Takneek 2019, the intra-IITK Science and Technology Championship. A competition in which all the pools shall participate with one common aim in mind, winning the coveted Takneek trophy, with their favourite Science-Figure by their side."
        />
        <EventBox
          eventNumber={4}
          backgroundColor="rgba(39, 27, 56, 0.7)"
          eventTitle="Takneek"
          eventInfo="The Science and Technology Council presents to you Takneek 2019, the intra-IITK Science and Technology Championship. A competition in which all the pools shall participate with one common aim in mind, winning the coveted Takneek trophy, with their favourite Science-Figure by their side."
        />
      </div>
    </div>
    </div>
  );
};

export default EventRow;

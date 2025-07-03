import React from "react";

const Heading = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const outerWrapper = {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    background: "#b9d9f4",
  };

  const waveGradient = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "75%",
    background: `
      linear-gradient(270deg, 
        rgb(120, 190, 244) 0%, 
        rgb(145, 198, 235) 25%, 
        rgb(150, 204, 251) 35%, 
        rgb(157, 204, 255) 45%, 
        rgb(161, 193, 234) 60%, 
        #b9d9f4 75%, 
        rgb(227, 229, 232) 102%, 
        rgb(184, 200, 215) 100%)
    `,
    zIndex: 1,
    mask: "linear-gradient(to bottom, transparent 0%, black 20%)",
    WebkitMask: "linear-gradient(to bottom, transparent 0%, black 20%)",
  };

  const contentWrapper = {
    position: "relative",
    zIndex: 3,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
    padding: isMobile ? "100px 30px 2px" : "80px 100px 20px",
    boxSizing: "border-box",
  };

  const heading = {
    color: "#274760",
    fontWeight: 600,
    fontFamily: "'Figtree', sans-serif",
    fontSize: isMobile ? "1.8rem" : "2.6rem",
    lineHeight: 1.2,
    marginBottom: 5,
    marginTop: 20,
    marginLeft: 20,
  };

  const subtext = {
    color: "#3f6484",
    fontSize: isMobile ? "13px" : "14px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    marginTop: 8,
    marginBottom: 120,
    opacity: 0.9,
    marginLeft: 20,
  };

  return (
    <div style={outerWrapper}>
      <div style={waveGradient}></div>
      <div style={contentWrapper}>
        <h1 style={heading}>
          Our Center of<br />
          Excellence <br />
        </h1>
        <p style={subtext}>Your Trusted Partner in Health and Wellness</p>
      </div>
    </div>
  );
};

export default Heading;

import React from "react";
import hospitalImg from "../assets/Hospital.png";
import heartbeatIcon from "../assets/heartbeatIcon.png";
import badgeImg from "../assets/badgeIcon.png";

const Welcome = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Solid top section with wave-like gradient below
  const outerWrapper = {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    background: "#b9d9f4", // Solid top color
  };

  // Wave-like gradient container (RIGHT to LEFT)
  const waveGradient = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "80%",
    background: `
      linear-gradient(270deg, 
        #5ea3d6 0%, 
        #6aacdc 15%, 
        #7db6e8 30%, 
        #8fc0f4 45%, 
        #a0c9ff 60%, 
        #b9d9f4 75%, 
rgb(227, 229, 232) 102%, 
        #7db6e8 100%)
    `,
    zIndex: 1,
    mask: "linear-gradient(to bottom, transparent 0%, black 20%)",
    WebkitMask: "linear-gradient(to bottom, transparent 0%, black 20%)",
  };

  const gradientBg = {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "center" : "flex-start",
    justifyContent: isMobile ? "center" : "space-between",
    padding: isMobile ? "24px 16px 16px" : "32px 30px 2px",
    boxSizing: "border-box",
    marginTop: "60px",
    zIndex: 3,
  };

  const leftSection = {
    position: "relative",
    flexShrink: 0,
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: isMobile ? 0 : 24,
    marginBottom: isMobile ? 24 : 0,
  };

  const hospitalImgStyle = {
    width: isMobile ? 140 : 220,
    height: isMobile ? 200 : 300,
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "none",
    display: "block",
    marginLeft: isMobile ? 0 : "100px",
  };

  const topIcon = {
    position: "absolute",
    top: 30,
    left: 120,
    width: 60,
    height: 60,
    background: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  };

  const badgeImageStyle = {
    position: "absolute",
    bottom: 10,
    right: -100,
    width: isMobile ? 100 : 120,
    height: "auto",
    zIndex: 3,
  };

  const rightSection = {
    zIndex: 2,
    marginRight: isMobile ? 0 : "320px",
    marginTop: isMobile ? 28 : 60,
    maxWidth: isMobile ? "100%" : 480,
    textAlign: isMobile ? "center" : "left",
    alignSelf: isMobile ? "center" : "flex-start",
  };

  const heading = {
    color: "#274760",
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
    fontSize: isMobile ? "1.4rem" : "2.6rem",
    lineHeight: 1.15,
    margin: 0,
    marginBottom: 10,
  };

  const subtext = {
    color: "#3f6484",
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    marginTop: 8,
    marginBottom: 0,
    opacity: 0.9,
  };

  // Responsive overrides
  const responsiveStyles = isMobile
    ? {
        gradientBg: {
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 16px 0px",
        },
        leftSection: {
          marginRight: 0,
          marginBottom: 8,
        },
        hospitalImgStyle: {
          width: 140,
          height: 200,
          marginLeft: 0,
          marginBottom: 0,
        },
        rightSection: {
          marginTop: 16,
          maxWidth: "100%",
          textAlign: "center",
          alignSelf: "center",
          marginRight: 0,
        },
        heading: {
          fontSize: "1.4rem",
        },
      }
    : {};

  return (
    <div style={outerWrapper}>
      {/* Wave gradient layer */}
      <div style={waveGradient}></div>
      <div style={{ ...gradientBg, ...responsiveStyles.gradientBg }}>
        {/* Left Section */}
        <div style={{ ...leftSection, ...responsiveStyles.leftSection }}>
          {!isMobile && (
            <div style={topIcon}>
              <img
                src={heartbeatIcon}
                alt="Heartbeat Icon"
                style={{ width: 20, height: 20 }}
              />
            </div>
          )}
          <img
            src={hospitalImg}
            alt="Sakthi Hospital building"
            style={{ ...hospitalImgStyle, ...responsiveStyles.hospitalImgStyle }}
          />
          {!isMobile && (
            <img
              src={badgeImg}
              alt="Badge Icon"
              style={badgeImageStyle}
            />
          )}
        </div>
        {/* Right Section */}
        <div style={{ ...rightSection, ...responsiveStyles.rightSection }}>
          <h1 style={{ ...heading, ...responsiveStyles.heading }}>
            Welcome to Sakthi<br />
            Hospital &amp; Research<br />
            Center
          </h1>
          <p style={subtext}>
            Your Trusted Partner in Health and Wellness
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

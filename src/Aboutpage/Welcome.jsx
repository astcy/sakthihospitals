import React from "react";
import hospitalImg from "../assets/Hospital.png";
import bgOverlay from "../assets/bgOverlay.png";
import heartbeatIcon from "../assets/heartbeatIcon.png";
import badgeImg from "../assets/badgeIcon.png";

const Welcome = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // OUTER WRAPPER
  const outerWrapper = {
    width: "100%",
    background: "linear-gradient(90deg, #cce7f9 0%, #b9d9f4 100%)",
    overflow: "hidden",
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
    marginLeft: "100px",
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
    marginRight: "320px",
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

  const backgroundImageStyle = {
    position: "absolute",
    top: isMobile ? "auto" : "20%",
    right: isMobile ? "auto" : "4%",
    bottom: isMobile ? "-20px" : "auto",
    width: isMobile ? "120px" : "180px",
    height: "auto",
    opacity: 0.15,
    zIndex: 1,
  };

  // Responsive overrides (do NOT disturb existing code)
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
        backgroundImageStyle: {
          top: "auto",
          right: "auto",
          bottom: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120px",
        },
      }
    : {};

  return (
    <div style={outerWrapper}>
      <div style={{ ...gradientBg, ...responsiveStyles.gradientBg }}>
        {/* Decorative Background Image */}
        <img
          src={bgOverlay}
          alt="Background Decoration"
          style={{ ...backgroundImageStyle, ...responsiveStyles.backgroundImageStyle }}
        />

        {/* Left Section */}
        <div style={{ ...leftSection, ...responsiveStyles.leftSection }}>
          {/* Heartbeat Icon - only show on desktop/tablet */}
          {!isMobile && (
            <div style={topIcon}>
              <img
                src={heartbeatIcon}
                alt="Heartbeat Icon"
                style={{ width: 20, height: 20 }}
              />
            </div>
          )}
          {/* Hospital Image */}
          <img
            src={hospitalImg}
            alt="Sakthi Hospital building"
            style={{ ...hospitalImgStyle, ...responsiveStyles.hospitalImgStyle }}
          />
          {/* Badge Icon - only show on desktop/tablet */}
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

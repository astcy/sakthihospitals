import React, { useState, useEffect } from "react";
import shieldLogo from "../assets/shield-logo.png"; // replace with your image path

const Backtest = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Inline styles for large and small screens
  const containerStyle = isMobile
    ? {
        background: "linear-gradient(to right, #7DB6E8, #C6DFF3)",
        borderRadius: "10px",
        padding: "16px 4vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        maxWidth: "100vw",
        margin: "32px 0",
        boxSizing: "border-box",
        gap: "20px",
      }
    : {
        background: "linear-gradient(to right, #7DB6E8, #C6DFF3)",
        borderRadius: "10px",
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        maxWidth: "1100px",
        margin: "80px auto",
      };

  const leftSectionStyle = isMobile
    ? {
        flex: "1 1 100%",
        color: "#ffffff",
        paddingRight: 0,
        minWidth: 0,
        textAlign: "center",
      }
    : {
        flex: "1 1 60%",
        color: "#ffffff",
        paddingRight: "30px",
        minWidth: "400px",
      };

  const headingStyle = isMobile
    ? {
        fontSize: "22px",
        fontWeight: "800",
        lineHeight: "1.3",
        marginBottom: "8px",
        letterSpacing: "2px",
      }
    : {
        fontSize: "44px",
        fontWeight: "800",
        lineHeight: "1.3",
        marginBottom: "12px",
        letterSpacing: "2px",
      };

  const subheadingStyle = isMobile
    ? { display: "none" }
    : {
        fontSize: "14px",
        color: "#1E293B",
        fontWeight: "400",
        maxWidth: "300px",
      };

  const imageSectionStyle = isMobile
    ? {
        flexShrink: 0,
        marginTop: 0,
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }
    : {
        flexShrink: 0,
        marginTop: "-80px",
      };

  const imageStyle = isMobile
    ? {
        width: "120px",
        height: "140px",
      }
    : {
        width: "240px",
        height: "260px",
      };

  return (
    <div style={containerStyle}>
      {/* Left Text Section */}
      <div style={leftSectionStyle}>
        <h1 style={headingStyle}>
          Don’t Let Your Health <br />
          Take a Backseat!
        </h1>
        <p style={subheadingStyle}>
          Schedule an appointment with one of our <br />
          experienced medical professionals today!
        </p>
      </div>

      {/* Right Image Section */}
      <div style={imageSectionStyle}>
        <img
          src={shieldLogo}
          alt="Shield Logo"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default Backtest;
